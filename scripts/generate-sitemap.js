// Script to generate comprehensive sitemap.xml with all locations and blog posts
const fs = require('fs');
const path = require('path');

// Import cities from the lib file
const { cities } = require('../lib/cities.js');
const { blogPosts } = require('../lib/blogPosts.js');

const baseUrl = 'https://photoboothcanada.com';
const currentDate = new Date().toISOString().split('T')[0];

// Generate sitemap XML
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/quote</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/cities</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/luxury-backdrops</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Service Pages -->
  <url>
    <loc>${baseUrl}/services/open-air-photobooth</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/vintage-classic-photobooth</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/magnet-photobooth</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/keychain-photobooth</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/sportscard-photobooth</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/corporate-photobooth</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/brand-activations</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/mirror-booth</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/services/360-photo-booth</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- All Location Pages -->\n`;

  // Add all cities with appropriate priorities
  const majorCities = ['toronto', 'ottawa', 'hamilton', 'mississauga', 'london', 'windsor', 'kitchener', 'barrie'];
  const gtaCities = ['brampton', 'markham', 'vaughan', 'richmond-hill', 'oakville', 'burlington'];
  
  cities.forEach(city => {
    let priority = '0.6'; // default
    if (majorCities.includes(city)) {
      priority = city === 'toronto' ? '0.9' : '0.8';
    } else if (gtaCities.includes(city)) {
      priority = '0.7';
    }
    
    sitemap += `  <url>
    <loc>${baseUrl}/locations/${city}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>
  
`;
  });

  sitemap += `  <!-- Blog Posts -->\n`;
  
  // Add all blog posts
  blogPosts.forEach(post => {
    const priority = post.featured ? '0.7' : '0.6';
    sitemap += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>
  
`;
  });

  sitemap += `</urlset>`;
  
  return sitemap;
}

// Write sitemap to public directory
const sitemapContent = generateSitemap();
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

console.log(`✅ Sitemap generated successfully!`);
console.log(`📍 ${cities.length} location pages included`);
console.log(`📝 ${blogPosts.length} blog posts included`);
console.log(`📄 Sitemap saved to: ${sitemapPath}`);
console.log(`🔗 Total URLs: ${cities.length + blogPosts.length + 16} (locations + blogs + main pages + services + backdrops)`);
