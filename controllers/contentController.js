const SiteContent = require('../models/SiteContent');

// @desc    Get all site content
// @route   GET /api/admin/content
// @access  Private/Editor
const getAllContent = async (req, res) => {
  try {
    const content = await SiteContent.find({}).sort({ contentKey: 1 });

    res.status(200).json({
      success: true,
      data: content
    });

  } catch (error) {
    console.error('Get all content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving content'
    });
  }
};

// @desc    Upsert site content
// @route   PUT /api/admin/content
// @access  Private/Editor
const upsertContent = async (req, res) => {
  try {
    const { contentKey, contentValue, description, dataType } = req.body;

    const content = await SiteContent.upsertContent(
      contentKey,
      contentValue,
      description,
      dataType
    );

    res.status(200).json({
      success: true,
      message: content.isNew ? 'Content created successfully' : 'Content updated successfully',
      data: content
    });

  } catch (error) {
    console.error('Upsert content error:', error);
    
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
      message: 'Server error updating content'
    });
  }
};

// @desc    Get single content by key
// @route   GET /api/admin/content/:key
// @access  Private/Editor
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
      data: content
    });

  } catch (error) {
    console.error('Get content by key error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving content'
    });
  }
};

// @desc    Delete content by key
// @route   DELETE /api/admin/content/:key
// @access  Private/Admin
const deleteContent = async (req, res) => {
  try {
    const content = await SiteContent.findOneAndDelete({ contentKey: req.params.key });

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Content deleted successfully'
    });

  } catch (error) {
    console.error('Delete content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting content'
    });
  }
};

// @desc    Bulk update content
// @route   PUT /api/admin/content/bulk
// @access  Private/Editor
const bulkUpdateContent = async (req, res) => {
  try {
    const { updates } = req.body;

    if (!Array.isArray(updates)) {
      return res.status(400).json({
        success: false,
        message: 'Updates must be an array'
      });
    }

    const results = [];
    const errors = [];

    for (const update of updates) {
      try {
        const { contentKey, contentValue, description, dataType } = update;
        
        if (!contentKey || !contentValue) {
          errors.push({ contentKey, error: 'Missing contentKey or contentValue' });
          continue;
        }

        const content = await SiteContent.upsertContent(
          contentKey,
          contentValue,
          description,
          dataType
        );
        
        results.push(content);
      } catch (error) {
        errors.push({ contentKey: update.contentKey, error: error.message });
      }
    }

    res.status(200).json({
      success: true,
      message: `Bulk update completed. ${results.length} successful, ${errors.length} failed.`,
      data: results,
      errors: errors.length > 0 ? errors : undefined
    });

  } catch (error) {
    console.error('Bulk update content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during bulk update'
    });
  }
};

module.exports = {
  getAllContent,
  upsertContent,
  getContentByKey,
  deleteContent,
  bulkUpdateContent
};
