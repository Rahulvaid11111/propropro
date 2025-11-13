const BlogPost = require('../models/BlogPost');

// @desc    Create new blog post
// @route   POST /api/admin/blogs
// @access  Private/Editor
const createBlogPost = async (req, res) => {
  try {
    const { title, content, featuredImageUrl, status, tags, excerpt } = req.body;

    const blogPost = await BlogPost.create({
      title,
      content,
      featuredImageUrl,
      author: req.user.id,
      status: status || 'draft',
      tags: tags || [],
      excerpt
    });

    await blogPost.populate('author', 'email role');

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: blogPost
    });

  } catch (error) {
    console.error('Create blog post error:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A blog post with this title already exists'
      });
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error creating blog post'
    });
  }
};

// @desc    Get all blog posts (admin)
// @route   GET /api/admin/blogs
// @access  Private/Editor
const getAllBlogPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sort = req.query.sort || '-createdAt';
    const status = req.query.status;
    const author = req.query.author;
    const search = req.query.search;

    // Build query
    let query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (author) {
      query.author = author;
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const skip = (page - 1) * limit;

    const blogPosts = await BlogPost.find(query)
      .populate('author', 'email role')
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await BlogPost.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      success: true,
      data: blogPosts,
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts: total,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });

  } catch (error) {
    console.error('Get all blog posts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving blog posts'
    });
  }
};

// @desc    Get single blog post by ID
// @route   GET /api/admin/blogs/:id
// @access  Private/Editor
const getBlogPostById = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id)
      .populate('author', 'email role');

    if (!blogPost) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.status(200).json({
      success: true,
      data: blogPost
    });

  } catch (error) {
    console.error('Get blog post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving blog post'
    });
  }
};

// @desc    Update blog post
// @route   PUT /api/admin/blogs/:id
// @access  Private/Editor
const updateBlogPost = async (req, res) => {
  try {
    const { title, content, featuredImageUrl, status, tags, excerpt } = req.body;

    let blogPost = await BlogPost.findById(req.params.id);

    if (!blogPost) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Check if user is author or admin
    if (blogPost.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this blog post'
      });
    }

    // Update fields
    if (title !== undefined) blogPost.title = title;
    if (content !== undefined) blogPost.content = content;
    if (featuredImageUrl !== undefined) blogPost.featuredImageUrl = featuredImageUrl;
    if (status !== undefined) blogPost.status = status;
    if (tags !== undefined) blogPost.tags = tags;
    if (excerpt !== undefined) blogPost.excerpt = excerpt;

    await blogPost.save();
    await blogPost.populate('author', 'email role');

    res.status(200).json({
      success: true,
      message: 'Blog post updated successfully',
      data: blogPost
    });

  } catch (error) {
    console.error('Update blog post error:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A blog post with this title already exists'
      });
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error updating blog post'
    });
  }
};

// @desc    Delete blog post
// @route   DELETE /api/admin/blogs/:id
// @access  Private/Editor
const deleteBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);

    if (!blogPost) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Check if user is author or admin
    if (blogPost.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this blog post'
      });
    }

    await BlogPost.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Blog post deleted successfully'
    });

  } catch (error) {
    console.error('Delete blog post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting blog post'
    });
  }
};

// @desc    Publish blog post
// @route   PUT /api/admin/blogs/:id/publish
// @access  Private/Editor
const publishBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);

    if (!blogPost) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Check if user is author or admin
    if (blogPost.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to publish this blog post'
      });
    }

    await blogPost.publish();
    await blogPost.populate('author', 'email role');

    res.status(200).json({
      success: true,
      message: 'Blog post published successfully',
      data: blogPost
    });

  } catch (error) {
    console.error('Publish blog post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error publishing blog post'
    });
  }
};

// @desc    Unpublish blog post
// @route   PUT /api/admin/blogs/:id/unpublish
// @access  Private/Editor
const unpublishBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);

    if (!blogPost) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Check if user is author or admin
    if (blogPost.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to unpublish this blog post'
      });
    }

    await blogPost.unpublish();
    await blogPost.populate('author', 'email role');

    res.status(200).json({
      success: true,
      message: 'Blog post unpublished successfully',
      data: blogPost
    });

  } catch (error) {
    console.error('Unpublish blog post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error unpublishing blog post'
    });
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
  publishBlogPost,
  unpublishBlogPost
};
