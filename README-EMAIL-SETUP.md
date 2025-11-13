# Email Setup Instructions for Contact Form

## Required Environment Variables

To enable the contact form email functionality, you need to add the following environment variables to your `.env.local` file:

```bash
# Gmail SMTP Configuration for Contact Form
GMAIL_USER=your-gmail-address@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
```

## Gmail App Password Setup

Since the contact form uses Gmail SMTP to send emails, you'll need to create an app-specific password:

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Enable 2-factor authentication if not already enabled

### Step 2: Generate App Password
1. Go to Security → 2-Step Verification → App passwords
2. Select "Mail" as the app
3. Select "Other (custom name)" as the device
4. Enter "Photobooth Canada Website" as the name
5. Click "Generate"
6. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update Environment Variables
Replace the placeholder values in your `.env.local` file:

```bash
GMAIL_USER=rvaid37@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

**Important Notes:**
- Use the app password, NOT your regular Gmail password
- Remove spaces from the app password when copying
- The `.env.local` file should be in your project root directory
- Restart your development server after adding these variables

## Testing the Contact Form

Once configured, the contact form will:
1. Send detailed inquiries to `rvaid37@gmail.com`
2. Send branded confirmation emails to customers
3. Include all form data (name, email, event details, message)
4. Allow direct replies to customer emails

## Security Notes

- The `.env.local` file is automatically ignored by Git
- Never commit your app password to version control
- Consider using a dedicated email account for website notifications
- Monitor your email quota to ensure delivery reliability

## Troubleshooting

If emails aren't sending:
1. Check that environment variables are correctly set
2. Verify Gmail app password is valid
3. Ensure 2-factor authentication is enabled
4. Check server logs for detailed error messages
5. Test with a simple email first

The contact form system is now ready for production use!
