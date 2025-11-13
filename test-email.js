require('dotenv').config();
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_APP_PASSWORD:', process.env.EMAIL_APP_PASSWORD ? 'SET' : 'NOT SET');
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true,
    logger: true
  });

  try {
    console.log('Verifying transporter...');
    await transporter.verify();
    console.log('✅ Transporter verified successfully');
    
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"PhotoBooth Canada Test" <${process.env.EMAIL_USER}>`,
      to: 'rvaid37@gmail.com',
      subject: 'Test Email - PhotoBooth Canada',
      html: '<h1>Test Email</h1><p>If you receive this, email is working!</p>'
    });
    
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 Gmail Authentication Issue:');
      console.log('1. Ensure 2-Factor Authentication is enabled on your Gmail account');
      console.log('2. Generate a new App Password:');
      console.log('   - Go to https://myaccount.google.com/security');
      console.log('   - 2-Step Verification → App passwords');
      console.log('   - Generate new password for "Mail"');
      console.log('3. Update EMAIL_APP_PASSWORD in .env file');
      console.log('4. Make sure the App Password is 16 characters (no spaces)');
    }
  }
}

testEmail();
