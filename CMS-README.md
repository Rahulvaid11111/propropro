# Photobooth Canada CMS Backend

A complete, secure, and production-ready Content Management System backend built with Node.js, Express.js, and MongoDB.

## 🚀 Features

- **RESTful API Design** - Clean, consistent API endpoints
- **JWT Authentication** - Secure token-based authentication
- **Role-Based Access Control** - Admin and Editor roles
- **File Upload Management** - Secure image upload with validation
- **Blog Management** - Full CRUD operations for blog posts
- **Site Content Management** - Dynamic content key-value pairs
- **Input Validation** - Comprehensive request validation
- **Rate Limiting** - Protection against abuse
- **Security Headers** - Helmet.js security middleware
- **Error Handling** - Centralized error management

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone and navigate to the project:**
   ```bash
   cd /path/to/photobooth-canada-interactive
   ```

2. **Install dependencies:**
   ```bash
   npm install express mongoose bcryptjs jsonwebtoken multer express-validator dotenv cors helmet express-rate-limit slugify
   npm install --save-dev nodemon jest supertest
   ```

3. **Environment Setup:**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/photobooth-cms
   JWT_SECRET=your-super-secure-jwt-secret-key-change-this-in-production
   JWT_EXPIRES_IN=7d
   PORT=5000
   NODE_ENV=development
   MAX_FILE_SIZE=5242880
   UPLOAD_PATH=public/uploads
   ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
   ```

4. **Create Admin User:**
   ```bash
   node scripts/createAdmin.js
   ```

5. **Start the server:**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 📚 API Documentation

### Authentication Endpoints

#### POST `/api/auth/login`
Login with email and password.

**Request:**
```json
{
  "email": "admin@photoboothcanada.com",
  "password": "Admin123!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "email": "admin@photoboothcanada.com",
    "role": "admin"
  }
}
```

#### GET `/api/auth/profile`
Get current user profile (requires authentication).

#### PUT `/api/auth/profile`
Update user profile (requires authentication).

#### POST `/api/auth/register`
Register new user (admin only).

### Blog Management (Admin)

#### POST `/api/admin/blogs`
Create new blog post.

**Request:**
```json
{
  "title": "My Blog Post",
  "content": "<p>Blog content here</p>",
  "featuredImageUrl": "/uploads/image.jpg",
  "status": "draft",
  "tags": ["photobooth", "wedding"],
  "excerpt": "Short description"
}
```

#### GET `/api/admin/blogs`
Get all blog posts with pagination.

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `sort` - Sort field (default: -createdAt)
- `status` - Filter by status
- `search` - Search in title/content

#### GET `/api/admin/blogs/:id`
Get single blog post by ID.

#### PUT `/api/admin/blogs/:id`
Update blog post.

#### DELETE `/api/admin/blogs/:id`
Delete blog post.

#### PUT `/api/admin/blogs/:id/publish`
Publish blog post.

#### PUT `/api/admin/blogs/:id/unpublish`
Unpublish blog post.

### Image Management (Admin)

#### POST `/api/admin/images/upload`
Upload single image file.

**Request:** Multipart form with `image` field

**Response:**
```json
{
  "success": true,
  "message": "Image uploaded successfully",
  "data": {
    "imageUrl": "/uploads/filename.jpg",
    "filename": "timestamp-filename.jpg",
    "originalName": "original.jpg",
    "size": 12345,
    "mimetype": "image/jpeg"
  }
}
```

#### GET `/api/admin/images`
Get all uploaded images.

#### GET `/api/admin/images/:filename`
Get image information.

#### DELETE `/api/admin/images/:filename`
Delete image (admin only).

### Site Content Management (Admin)

#### GET `/api/admin/content`
Get all site content.

#### PUT `/api/admin/content`
Upsert site content.

**Request:**
```json
{
  "contentKey": "homepage-title",
  "contentValue": "Welcome to Photobooth Canada",
  "description": "Main homepage title",
  "dataType": "text"
}
```

#### GET `/api/admin/content/:key`
Get content by key.

#### DELETE `/api/admin/content/:key`
Delete content (admin only).

#### PUT `/api/admin/content/bulk`
Bulk update content.

### Public Endpoints

#### GET `/api/public/blogs`
Get published blog posts.

#### GET `/api/public/blogs/:slug`
Get blog post by slug.

#### GET `/api/public/content`
Get all site content as key-value pairs.

#### GET `/api/public/content/:key`
Get single content by key.

#### GET `/api/public/blogs/tags`
Get all blog tags with counts.

#### GET `/api/public/blogs/recent`
Get recent blog posts.

## 🔒 Security Features

- **Password Hashing** - bcrypt with salt rounds
- **JWT Authentication** - Secure token-based auth
- **Rate Limiting** - Prevents abuse
- **Input Validation** - express-validator
- **Security Headers** - Helmet.js
- **File Upload Security** - Type and size validation
- **CORS Protection** - Configurable origins

## 🗂️ Project Structure

```
├── config/
│   └── database.js          # Database connection
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── blogController.js    # Blog management
│   ├── contentController.js # Site content management
│   ├── imageController.js   # Image management
│   └── publicController.js  # Public endpoints
├── middleware/
│   ├── auth.js              # Authentication middleware
│   ├── validation.js        # Input validation
│   ├── upload.js            # File upload handling
│   ├── errorHandler.js      # Error handling
│   └── security.js          # Security middleware
├── models/
│   ├── User.js              # User model
│   ├── BlogPost.js          # Blog post model
│   └── SiteContent.js       # Site content model
├── routes/
│   ├── auth.js              # Auth routes
│   ├── adminBlogs.js        # Admin blog routes
│   ├── adminImages.js       # Admin image routes
│   ├── adminContent.js      # Admin content routes
│   └── public.js            # Public routes
├── scripts/
│   └── createAdmin.js       # Admin user creation
├── public/uploads/          # Uploaded files
├── server.js                # Main server file
└── env.example              # Environment template
```

## 🔧 Default Admin Credentials

**Email:** `admin@photoboothcanada.com`  
**Password:** `Admin123!`

⚠️ **Important:** Change the default password immediately after first login!

## 🧪 Testing

```bash
npm test
```

## 📊 Health Check

Visit `http://localhost:5000/api/health` to check server status.

## 🚀 Production Deployment

1. Set `NODE_ENV=production`
2. Use strong JWT secret
3. Configure MongoDB connection string
4. Set up reverse proxy (nginx)
5. Enable HTTPS
6. Configure proper CORS origins
7. Set up monitoring and logging

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - see LICENSE file for details.
