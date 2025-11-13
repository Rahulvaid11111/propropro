const mongoose = require('mongoose');
const slugify = require('slugify');

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  featuredImageUrl: {
    type: String,
    required: [true, 'Featured image is required'],
    validate: {
      validator: function(v) {
        return /^(https?:\/\/)|(\/uploads\/)/.test(v);
      },
      message: 'Featured image must be a valid URL or upload path'
    }
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Author is required']
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  excerpt: {
    type: String,
    maxlength: [500, 'Excerpt cannot exceed 500 characters']
  },
  readTime: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Indexes for performance
blogPostSchema.index({ slug: 1 });
blogPostSchema.index({ status: 1 });
blogPostSchema.index({ author: 1 });
blogPostSchema.index({ tags: 1 });
blogPostSchema.index({ createdAt: -1 });

// Pre-save hook to generate slug
blogPostSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g
    });
  }
  
  // Calculate read time (average 200 words per minute)
  if (this.isModified('content')) {
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / 200);
  }
  
  // Generate excerpt if not provided
  if (this.isModified('content') && !this.excerpt) {
    const plainText = this.content.replace(/<[^>]*>/g, '');
    this.excerpt = plainText.substring(0, 200) + (plainText.length > 200 ? '...' : '');
  }
  
  next();
});

// Static method to find published posts
blogPostSchema.statics.findPublished = function() {
  return this.find({ status: 'published' }).populate('author', 'email role');
};

// Instance method to publish post
blogPostSchema.methods.publish = function() {
  this.status = 'published';
  return this.save();
};

// Instance method to unpublish post
blogPostSchema.methods.unpublish = function() {
  this.status = 'draft';
  return this.save();
};

module.exports = mongoose.model('BlogPost', blogPostSchema);
