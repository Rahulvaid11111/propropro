const BlogPost = require('../models/BlogPost');
const SiteContent = require('../models/SiteContent');

// @desc    Get all published blog posts
// @route   GET /api/public/blogs
// @access  Public
const getPublishedBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sort = req.query.sort || '-createdAt';
    const tag = req.query.tag;
    const search = req.query.search;

    // Build query for published posts only
    let query = { status: 'published' };
    
    if (tag) {
      query.tags = { $in: [tag] };
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const skip = (page - 1) * limit;

    const blogPosts = await BlogPost.find(query)
      .populate('author', 'email')
      .select('-content') // Exclude full content for list view
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
    console.error('Get published blogs error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving blog posts'
    });
  }
};

// @desc    Get single published blog post by slug
// @route   GET /api/public/blogs/:slug
// @access  Public
const getBlogBySlug = async (req, res) => {
  try {
    const blogPost = await BlogPost.findOne({ 
      slug: req.params.slug, 
      status: 'published' 
    }).populate('author', 'email');

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
    console.error('Get blog by slug error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving blog post'
    });
  }
};

// @desc    Get all site content for frontend
// @route   GET /api/public/content
// @access  Public
const getPublicContent = async (req, res) => {
  try {
    const contentObject = await SiteContent.getAllAsObject();

    res.status(200).json({
      success: true,
      data: contentObject
    });

  } catch (error) {
    console.error('Get public content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving content'
    });
  }
};

// @desc    Get single content by key
// @route   GET /api/public/content/:key
// @access  Public
const getContentByKey = async (req, res) => {
  try {
    const content = await SiteContent.findOne({ contentKey: req.params.key });

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    res.status(200).json({
      success: true,
      data: {
        key: content.contentKey,
        value: content.contentValue
      }
    });

  } catch (error) {
    console.error('Get content by key error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving content'
    });
  }
};

// @desc    Get blog tags
// @route   GET /api/public/blogs/tags
// @access  Public
const getBlogTags = async (req, res) => {
  try {
    const tags = await BlogPost.aggregate([
      { $match: { status: 'published' } },
      { $unwind: '$tags' },
      { $group: { _id: '$tags', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { tag: '$_id', count: 1, _id: 0 } }
    ]);

    res.status(200).json({
      success: true,
      data: tags
    });

  } catch (error) {
    console.error('Get blog tags error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving tags'
    });
  }
};

// @desc    Get recent blog posts
// @route   GET /api/public/blogs/recent
// @access  Public
const getRecentBlogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;

    const blogPosts = await BlogPost.find({ status: 'published' })
      .populate('author', 'email')
      .select('title slug excerpt featuredImageUrl createdAt readTime tags')
      .sort('-createdAt')
      .limit(limit);

    res.status(200).json({
      success: true,
      data: blogPosts
    });

  } catch (error) {
    console.error('Get recent blogs error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving recent blog posts'
    });
  }
};

module.exports = {
  getPublishedBlogs,
  getBlogBySlug,
  getPublicContent,
  getContentByKey,
  getBlogTags,
  getRecentBlogs
};
