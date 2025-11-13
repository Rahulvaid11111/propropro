const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Email configuration with Ethereal Email fallback
const createTransporter = async () => {
  // Use Ethereal Email for testing (creates temporary email accounts)
  if (process.env.USE_ETHEREAL === 'true' || !process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    const testAccount = await nodemailer.createTestAccount();
    
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
  }
  
  // Gmail configuration
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Validation middleware
const validateQuoteData = [
  body('name').trim().isLength({ min: 2 }).escape().withMessage('Name must be at least 2 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').trim().isLength({ min: 10 }).withMessage('Phone number must be at least 10 digits'),
  body('experience').trim().notEmpty().withMessage('Experience selection is required'),
  body('eventDate').isISO8601().withMessage('Valid event date is required'),
  body('duration').isInt({ min: 2, max: 8 }).withMessage('Duration must be between 2-8 hours'),
  body('eventType').trim().notEmpty().withMessage('Event type is required'),
  body('addons').isArray().withMessage('Addons must be an array'),
  body('finalPrice').isNumeric().withMessage('Final price must be numeric')
];

// Format quote data for email
const formatQuoteEmail = (quoteData) => {
  const { name, email, phone, experience, eventDate, duration, eventType, addons, finalPrice, experienceName, selectedAddons } = quoteData;
  
  const addonsHtml = selectedAddons && selectedAddons.length > 0 
    ? selectedAddons.map(addon => `<li>${addon.name} - $${addon.price}</li>`).join('')
    : '<li>No add-ons selected</li>';

  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .price { font-size: 2em; font-weight: bold; color: #dc2626; text-align: center; margin: 20px 0; }
          .section { margin: 20px 0; padding: 15px; background: #f9f9f9; border-left: 4px solid #dc2626; }
          .section h3 { margin-top: 0; color: #dc2626; }
          ul { margin: 10px 0; padding-left: 20px; }
          .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 0.9em; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🎉 New PhotoBooth Quote Generated!</h1>
        </div>
        
        <div class="content">
          <div class="price">Final Price: $${finalPrice}</div>
          
          <div class="section">
            <h3>👤 Client Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <div class="section">
            <h3>📋 Quote Details:</h3>
            <p><strong>Package:</strong> ${experienceName || experience}</p>
            <p><strong>Duration:</strong> ${duration} hours</p>
            <p><strong>Event Date:</strong> ${new Date(eventDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Event Type:</strong> ${eventType}</p>
            <p><strong>Add-ons:</strong></p>
            <ul>${addonsHtml}</ul>
          </div>
          
          <div class="section">
            <h3>📞 Next Steps:</h3>
            <p>This is an automated quote request. Please contact the client within 24 hours to:</p>
            <ul>
              <li>Confirm availability for the requested date</li>
              <li>Discuss any customization options</li>
              <li>Finalize booking details</li>
              <li>Send contract and deposit information</li>
            </ul>
          </div>
        </div>
        
        <div class="footer">
          <p>Generated on ${new Date().toLocaleString()}</p>
          <p>PhotoBooth Canada - Making Memories, One Click at a Time</p>
        </div>
      </body>
    </html>
  `;
};

// POST /api/send-quote
router.post('/send-quote', validateQuoteData, async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const quoteData = req.body;
    
    // Check if in test mode first
    if (process.env.NODE_ENV === 'development' && process.env.EMAIL_TEST_MODE === 'true') {
      console.log('=== EMAIL TEST MODE ===');
      console.log('To: rvaid37@gmail.com');
      console.log('Subject: New Quote Generated:', quoteData.experienceName || quoteData.experience, '- $' + quoteData.finalPrice);
      console.log('Quote Data:', {
        clientName: quoteData.name,
        clientEmail: quoteData.email,
        phone: quoteData.phone,
        experience: quoteData.experienceName || quoteData.experience,
        eventDate: quoteData.eventDate,
        duration: quoteData.duration,
        eventType: quoteData.eventType,
        addons: quoteData.selectedAddons?.map(a => a.name).join(', ') || 'None',
        finalPrice: quoteData.finalPrice,
        timestamp: new Date().toISOString()
      });
      console.log('======================');
      
      return res.status(200).json({
        success: true,
        message: 'Quote sent successfully! We\'ll contact you within 24 hours.',
        messageId: 'test-mode-' + Date.now()
      });
    }
    
    // Create transporter
    const transporter = await createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    
    // Prepare email content
    const htmlContent = formatQuoteEmail(quoteData);
    const subjectLine = `New Quote Generated: ${quoteData.experienceName || quoteData.experience} - $${quoteData.finalPrice}`;
    
    // Email options
    const mailOptions = {
      from: `"PhotoBooth Canada Quote" <${process.env.EMAIL_USER}>`,
      to: 'rvaid37@gmail.com',
      subject: subjectLine,
      html: htmlContent,
      replyTo: quoteData.email
    };
    
    // For testing - log email content instead of sending
    if (process.env.NODE_ENV === 'development' && process.env.EMAIL_TEST_MODE === 'true') {
      console.log('=== EMAIL TEST MODE ===');
      console.log('To:', mailOptions.to);
      console.log('Subject:', mailOptions.subject);
      console.log('Quote Data:', {
        clientName: quoteData.name,
        clientEmail: quoteData.email,
        finalPrice: quoteData.finalPrice,
        timestamp: new Date().toISOString()
      });
      console.log('======================');
      
      res.status(200).json({
        success: true,
        message: 'Quote sent successfully! We\'ll contact you within 24 hours.',
        messageId: 'test-mode-' + Date.now()
      });
    } else {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      
      // Log success with preview URL for Ethereal
      console.log('Quote email sent successfully:', {
        messageId: info.messageId,
        clientName: quoteData.name,
        clientEmail: quoteData.email,
        finalPrice: quoteData.finalPrice,
        timestamp: new Date().toISOString(),
        previewUrl: nodemailer.getTestMessageUrl(info) // For Ethereal emails
      });
      
      res.status(200).json({
        success: true,
        message: 'Quote sent successfully! We\'ll contact you within 24 hours.',
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info) // Include preview URL in response
      });
    }
    
  } catch (error) {
    console.error('Error sending quote email:', error);
    
    // Return appropriate error message
    let errorMessage = 'Failed to send quote. Please try again.';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please contact support.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Email service unavailable. Please try again later.';
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;
