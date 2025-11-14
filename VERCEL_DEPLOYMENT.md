# Vercel Deployment Guide

## Prerequisites
- GitHub account with the repository pushed
- Vercel account (sign up at https://vercel.com)

## Deployment Steps

### 1. Import Project to Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository: `Rahulvaid11111/propropro`
3. Vercel will auto-detect Next.js

### 2. Configure Environment Variables
Add these environment variables in Vercel dashboard (Settings → Environment Variables):

#### Required for Production:
```
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secure-jwt-secret-key
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
NODE_ENV=production
```

#### Optional (with defaults):
```
JWT_EXPIRES_IN=7d
PORT=3000
MAX_FILE_SIZE=5242880
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 3. Build Settings
Vercel will automatically detect:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4. Deploy
Click "Deploy" and Vercel will:
- Install dependencies
- Build your Next.js app
- Deploy to production

### 5. Post-Deployment
- Your site will be live at: `https://your-project.vercel.app`
- Set up custom domain in Vercel dashboard if needed
- Configure MongoDB Atlas for production database
- Update CORS settings if using external APIs

## Important Notes

### Database Setup
For production, use MongoDB Atlas:
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Add to Vercel environment variables as `MONGODB_URI`

### Email Configuration
1. Use Gmail App Password (not regular password)
2. Enable 2FA on Gmail
3. Generate App Password: https://myaccount.google.com/apppasswords
4. Add to Vercel as `EMAIL_APP_PASSWORD`

### File Uploads
- Vercel has read-only filesystem
- For file uploads, consider using:
  - Vercel Blob Storage
  - AWS S3
  - Cloudinary
  - UploadThing

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify environment variables are set

### Runtime Errors
- Check Function Logs in Vercel dashboard
- Verify MongoDB connection string
- Check API routes are working

## Auto-Deployment
- Vercel automatically deploys on git push to main branch
- Preview deployments for pull requests
- Rollback available in Vercel dashboard

## Performance Optimization
- Images are automatically optimized by Next.js
- Static pages are cached at edge
- API routes run as serverless functions
