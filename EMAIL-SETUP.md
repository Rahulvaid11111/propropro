# Email Configuration Setup

## Overview
The Quote Calculator now includes email notification functionality that sends quote details to rvaid37@gmail.com when customers submit their quotes.

## Required Environment Variables

Add these variables to your `.env` file:

```bash
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
```

## Gmail App Password Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate a password
   - Use this 16-character password as `EMAIL_APP_PASSWORD`

## Testing the Integration

1. **Start both servers**:
   ```bash
   # Terminal 1 - Backend
   node server.js
   
   # Terminal 2 - Frontend
   npm run dev
   ```

2. **Test the quote flow**:
   - Visit http://localhost:3000
   - Navigate to the quote calculator
   - Complete all steps and submit a quote
   - Check rvaid37@gmail.com for the email

## Email Template Features

- **Professional HTML formatting**
- **Complete quote details** including:
  - Client contact information
  - Selected package and add-ons
  - Event date and duration
  - Final calculated price
- **Responsive design** for mobile email clients
- **Reply-to** set to customer's email for easy response

## API Endpoint

- **URL**: `POST /api/send-quote`
- **Port**: 3001 (backend server)
- **Validation**: Server-side input sanitization and validation
- **Security**: Rate limiting and CORS protection

## Troubleshooting

- **Authentication Error**: Check Gmail app password
- **Connection Error**: Verify internet connection and Gmail service status
- **Validation Error**: Ensure all required fields are completed
- **CORS Error**: Check `ALLOWED_ORIGINS` in environment variables
