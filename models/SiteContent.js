const mongoose = require('mongoose');

const siteContentSchema = new mongoose.Schema({
  contentKey: {
    type: String,
    required: [true, 'Content key is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^[a-z0-9-_]+$/,
      'Content key can only contain lowercase letters, numbers, hyphens, and underscores'
    ]
  },
  contentValue: {
    type: String,
    required: [true, 'Content value is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  dataType: {
    type: String,
    enum: ['text', 'html', 'url', 'number', 'boolean'],
    default: 'text'
  }
}, {
  timestamps: true
});

// Index for performance
siteContentSchema.index({ contentKey: 1 });

// Static method for upsert operation
siteContentSchema.statics.upsertContent = async function(contentKey, contentValue, description = null, dataType = 'text') {
  try {
    const result = await this.findOneAndUpdate(
      { contentKey },
      { 
        contentValue, 
        description,
        dataType,
        updatedAt: new Date()
      },
      { 
        new: true, 
        upsert: true,
        runValidators: true
      }
    );
    return result;
  } catch (error) {
    throw new Error(`Failed to upsert content: ${error.message}`);
  }
};

// Static method to get all content as key-value pairs
siteContentSchema.statics.getAllAsObject = async function() {
  try {
    const contents = await this.find({}).select('contentKey contentValue');
    const contentObject = {};
    contents.forEach(item => {
      contentObject[item.contentKey] = item.contentValue;
    });
    return contentObject;
  } catch (error) {
    throw new Error(`Failed to retrieve content: ${error.message}`);
  }
};

// Instance method to validate content value based on data type
siteContentSchema.methods.validateContentValue = function() {
  switch (this.dataType) {
    case 'url':
      const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
      return urlRegex.test(this.contentValue);
    case 'number':
      return !isNaN(parseFloat(this.contentValue));
    case 'boolean':
      return ['true', 'false', '1', '0'].includes(this.contentValue.toLowerCase());
    default:
      return true;
  }
};

// Pre-save validation
siteContentSchema.pre('save', function(next) {
  if (!this.validateContentValue()) {
    return next(new Error(`Content value "${this.contentValue}" is not valid for data type "${this.dataType}"`));
  }
  next();
});

module.exports = mongoose.model('SiteContent', siteContentSchema);
