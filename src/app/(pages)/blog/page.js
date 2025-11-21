'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { blogPosts, blogCategories } from '../../../../lib/blogPosts';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const filteredPosts = selectedCategory === 'All' 
    ? sortedPosts 
    : sortedPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = sortedPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-gray-900">
              Photo Booth <span className="text-purple-600">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Expert tips, inspiration, and guides for creating unforgettable photo booth experiences at your events
            </p>
          </motion.div>
        </div>
      </header>

      {/* Featured Posts */}
      {selectedCategory === 'All' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-light text-gray-900">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              <span className="text-gray-500 ml-2">({filteredPosts.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-600">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.author}</span>
                        <span className="text-purple-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-white mb-6 tracking-tight">
              Ready to Book Your Photo Booth?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Let's create unforgettable memories at your next event
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 rounded-lg">
                  Get Your Quote
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 rounded-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
