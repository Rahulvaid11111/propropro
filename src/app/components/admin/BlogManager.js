'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContentManager from '../../../../lib/contentManager';
import ImageSelector from './ImageSelector';

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showImageSelector, setShowImageSelector] = useState(false);
  const [currentImageField, setCurrentImageField] = useState(null);

  useEffect(() => {
    const savedBlogs = ContentManager.getBlogs();
    setBlogs(savedBlogs);
  }, []);

  const saveBlog = (blog) => {
    let updatedBlogs;
    if (blog.id) {
      updatedBlogs = blogs.map(b => b.id === blog.id ? blog : b);
    } else {
      blog.id = Date.now();
      blog.createdAt = new Date().toISOString();
      updatedBlogs = [blog, ...blogs];
    }
    
    setBlogs(updatedBlogs);
    ContentManager.saveBlogs(updatedBlogs);
    setSelectedBlog(null);
    setIsEditing(false);
  };

  const deleteBlog = (blogId) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const updatedBlogs = blogs.filter(b => b.id !== blogId);
      setBlogs(updatedBlogs);
      ContentManager.saveBlogs(updatedBlogs);
    }
  };

  const BlogEditor = ({ blog, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      title: blog?.title || '',
      slug: blog?.slug || '',
      excerpt: blog?.excerpt || '',
      content: blog?.content || '',
      featuredImage: blog?.featuredImage || '',
      category: blog?.category || 'tips',
      status: blog?.status || 'draft',
      author: blog?.author || 'Admin',
      tags: blog?.tags?.join(', ') || ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      const blogData = {
        ...blog,
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        updatedAt: new Date().toISOString()
      };
      onSave(blogData);
    };

    const generateSlug = (title) => {
      return title.toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
    };

    const handleTitleChange = (title) => {
      setFormData({
        ...formData,
        title,
        slug: generateSlug(title)
      });
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {blog?.id ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h3>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              >
                <option value="tips">Tips & Guides</option>
                <option value="events">Event Ideas</option>
                <option value="trends">Industry Trends</option>
                <option value="news">Company News</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={formData.featuredImage}
                onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                placeholder="Image URL"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
              <button
                type="button"
                onClick={() => {
                  setCurrentImageField('featuredImage');
                  setShowImageSelector(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-md transition-colors"
              >
                🖼️ Select
              </button>
            </div>
            {formData.featuredImage && (
              <img
                src={formData.featuredImage}
                alt="Featured"
                className="mt-2 w-32 h-20 object-cover rounded border"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Brief description of the blog post..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={12}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Write your blog content here... You can use HTML tags for formatting."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="photo booth, wedding, tips, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-black rounded-md transition-colors"
            >
              {blog?.id ? 'Update Post' : 'Create Post'}
            </button>
          </div>
        </form>

        {showImageSelector && (
          <ImageSelector
            selectedImage={formData.featuredImage}
            onImageSelect={(imageUrl) => {
              setFormData({ ...formData, featuredImage: imageUrl });
              setShowImageSelector(false);
            }}
            onClose={() => setShowImageSelector(false)}
            title="Select Featured Image"
          />
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
        <button
          onClick={() => {
            setSelectedBlog({});
            setIsEditing(true);
          }}
          className="bg-red-600 hover:bg-red-700 text-black px-4 py-2 rounded-md transition-colors flex items-center"
        >
          <span className="mr-2">✏️</span>
          New Blog Post
        </button>
      </div>

      {isEditing ? (
        <BlogEditor
          blog={selectedBlog}
          onSave={saveBlog}
          onCancel={() => {
            setIsEditing(false);
            setSelectedBlog(null);
          }}
        />
      ) : (
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <div className="grid gap-6">
              {blogs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
                  <p className="text-gray-500">Create your first blog post to get started</p>
                </div>
              ) : (
                blogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{blog.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            blog.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : blog.status === 'draft'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {blog.status}
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                            {blog.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span>By {blog.author}</span>
                          <span>•</span>
                          <span>{new Date(blog.createdAt || Date.now()).toLocaleDateString()}</span>
                          {blog.tags && blog.tags.length > 0 && (
                            <>
                              <span>•</span>
                              <span>{blog.tags.join(', ')}</span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {blog.featuredImage && (
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="w-24 h-16 object-cover rounded ml-4"
                        />
                      )}
                    </div>
                    
                    <div className="flex justify-end space-x-2 mt-4">
                      <button
                        onClick={() => {
                          setSelectedBlog(blog);
                          setIsEditing(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-black px-3 py-1 rounded text-sm transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteBlog(blog.id)}
                        className="bg-red-600 hover:bg-red-700 text-black px-3 py-1 rounded text-sm transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
