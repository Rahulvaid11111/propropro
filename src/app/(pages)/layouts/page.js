'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
// import ContactForm from '../../../../components/ContactForm';

export default function PhotoLayoutsPage() {
  const [selectedCategory, setSelectedCategory] = useState('horizontal');

  // Layout categories
  const layoutCategories = {
    horizontal: [
      { id: '1', name: 'Air Balloon', image: '/Layoutexamples/1H_Airballoon.png', theme: 'Birthday' },
      { id: '2', name: 'Beauty PBPI 2', image: '/Layoutexamples/1H_Beauty PBPI 2.png', theme: 'Beauty' },
      { id: '3', name: 'Beauty PBPI 3', image: '/Layoutexamples/1H_Beauty PBPI 3.png', theme: 'Beauty' },
      { id: '4', name: 'Beauty PBPI 4', image: '/Layoutexamples/1H_Beauty PBPI4.png', theme: 'Beauty' },
      { id: '5', name: 'Birthday Glitter', image: '/Layoutexamples/1H_Birthday_Glitter.png', theme: 'Birthday' },
      { id: '6', name: 'MMB PBPI 2', image: '/Layoutexamples/1H_MMB_PBPI_2.png', theme: 'Modern' },
      { id: '7', name: 'MMB PBPI 4', image: '/Layoutexamples/1H_MMB_PBPI_4.png', theme: 'Modern' },
      { id: '8', name: 'Retro PBPI', image: '/Layoutexamples/1H_Retro_PBPI.png', theme: 'Retro' },
      { id: '9', name: 'Retro PBPI 3', image: '/Layoutexamples/1H_Retro_PBPI 3.png', theme: 'Retro' },
      { id: '10', name: 'Wedding Flowers Gray', image: '/Layoutexamples/1H_Wedding_Flowers_Gray.png', theme: 'Wedding' },
    ],
    vertical: [
      { id: '11', name: '3D Design', image: '/Layoutexamples/1V_3D.png', theme: 'Modern' },
      { id: '12', name: 'Birthday Glitter', image: '/Layoutexamples/1V_Birthday_Glitter.png', theme: 'Birthday' },
      { id: '13', name: 'Blue Pink', image: '/Layoutexamples/1V_Blue_Pink.png', theme: 'Colorful' },
      { id: '14', name: 'Colors', image: '/Layoutexamples/1V_Colors.png', theme: 'Colorful' },
      { id: '15', name: 'Floral', image: '/Layoutexamples/1V_Floral.png', theme: 'Wedding' },
      { id: '16', name: 'Flowers', image: '/Layoutexamples/1V_Flowers.png', theme: 'Wedding' },
      { id: '17', name: 'Marble', image: '/Layoutexamples/1V_Marbel.png', theme: 'Elegant' },
      { id: '18', name: 'Pastel', image: '/Layoutexamples/1V_Pastel.png', theme: 'Soft' },
      { id: '19', name: 'Pink Yellow', image: '/Layoutexamples/1V_Pink_Yellow.png', theme: 'Colorful' },
      { id: '20', name: 'Stripes', image: '/Layoutexamples/1V_Stripes.png', theme: 'Modern' },
    ],
    strips: [
      { id: '21', name: 'Bar Mitzvah', image: '/Layoutexamples/2V Bar Mitzvah2.png', theme: 'Celebration' },
      { id: '22', name: 'Flowers', image: '/Layoutexamples/2V Flowers.png', theme: 'Wedding' },
      { id: '23', name: 'Gray Dots', image: '/Layoutexamples/2V Gray dots.png', theme: 'Modern' },
      { id: '24', name: 'Gradient', image: '/Layoutexamples/Strip_V3_Gradient.png', theme: 'Modern' },
      { id: '25', name: 'Pink', image: '/Layoutexamples/Strip_V3_Pink.png', theme: 'Fun' },
      { id: '26', name: 'Stripes', image: '/Layoutexamples/Strip_V3_Stripes.png', theme: 'Classic' },
      { id: '27', name: 'Triangles', image: '/Layoutexamples/Strip_V3_Triangles.png', theme: 'Geometric' },
      { id: '28', name: 'Wood', image: '/Layoutexamples/Strip_V3_Wood.png', theme: 'Rustic' },
    ],
    multiPhoto: [
      { id: '29', name: 'Beauty PBPI 2', image: '/Layoutexamples/3H_Beauty PBPI 2.png', theme: 'Beauty' },
      { id: '30', name: 'Beauty PBPI 3', image: '/Layoutexamples/3H_Beauty PBPI3.png', theme: 'Beauty' },
      { id: '31', name: 'Beauty PBPI 4', image: '/Layoutexamples/3H_Beauty PBPI4.png', theme: 'Beauty' },
      { id: '32', name: 'Birthday Glitter', image: '/Layoutexamples/3H_Birthday_Glitter.png', theme: 'Birthday' },
      { id: '33', name: 'Marble', image: '/Layoutexamples/3H_Marbel.png', theme: 'Elegant' },
      { id: '34', name: 'Retro PBPI', image: '/Layoutexamples/3H_Retro_PBPI.png', theme: 'Retro' },
      { id: '35', name: 'Retro PBPI 3', image: '/Layoutexamples/3H_Retro_PBPI3.png', theme: 'Retro' },
      { id: '36', name: 'Strip Birds', image: '/Layoutexamples/3H_Strip_Birds.png', theme: 'Nature' },
      { id: '37', name: 'Strip Triangles', image: '/Layoutexamples/3H_Strip_Triangles.png', theme: 'Geometric' },
      { id: '38', name: 'Strip Circles', image: '/Layoutexamples/3H_Strip_circles.png', theme: 'Geometric' },
      { id: '39', name: 'Wedding Flowers', image: '/Layoutexamples/3H_Wedding_Flowers_Gray.png', theme: 'Wedding' },
      { id: '40', name: 'Floral', image: '/Layoutexamples/3V Floral.png', theme: 'Wedding' },
      { id: '41', name: 'Stripes', image: '/Layoutexamples/3V Stripes.png', theme: 'Modern' },
      { id: '42', name: 'Pastel', image: '/Layoutexamples/3V _Pastel.png', theme: 'Soft' },
      { id: '43', name: 'Marble Pictures', image: '/Layoutexamples/3V pictures_marbel.png', theme: 'Elegant' },
      { id: '44', name: 'Birthday Glitter', image: '/Layoutexamples/3V_Birthday_Glitter.png', theme: 'Birthday' },
      { id: '45', name: 'Blue Pink', image: '/Layoutexamples/3V_Blue_Pink.png', theme: 'Colorful' },
      { id: '46', name: 'Colors', image: '/Layoutexamples/3V_Colors.png', theme: 'Colorful' },
      { id: '47', name: 'Flowers', image: '/Layoutexamples/3V_Flowers.png', theme: 'Wedding' },
      { id: '48', name: 'Pink Yellow', image: '/Layoutexamples/3V_Pink_Yellow.png', theme: 'Colorful' },
      { id: '49', name: 'Wedding Flowers', image: '/Layoutexamples/3V_Wedding_Flowers_Gray.png', theme: 'Wedding' },
    ],
    graduation: [
      { id: '50', name: 'Graduation Blue 1V', image: '/Layoutexamples/Graduation_Blue1V.png', theme: 'Graduation' },
      { id: '51', name: 'Graduation Blue 2V', image: '/Layoutexamples/Graduation_Blue2V.png', theme: 'Graduation' },
      { id: '52', name: 'Graduation Blue 3V', image: '/Layoutexamples/Graduation_Blue3V.png', theme: 'Graduation' },
      { id: '53', name: 'Graduation Purple 2V', image: '/Layoutexamples/Graduation_Purple2V.png', theme: 'Graduation' },
      { id: '54', name: 'Graduation Purple 3V', image: '/Layoutexamples/Graduation_Purple3V.png', theme: 'Graduation' },
      { id: '55', name: 'Birthday 3V', image: '/Layoutexamples/birthday_3V.png', theme: 'Birthday' },
    ]
  };

  const categories = [
    { id: 'horizontal', name: 'Single Horizontal', icon: '🖼️', description: 'Single photo horizontal layouts', count: layoutCategories.horizontal.length },
    { id: 'vertical', name: 'Single Vertical', icon: '📱', description: 'Single photo vertical layouts', count: layoutCategories.vertical.length },
    { id: 'strips', name: 'Photo Strips', icon: '📏', description: 'Classic photo booth strips', count: layoutCategories.strips.length },
    { id: 'multiPhoto', name: 'Multi-Photo', icon: '🎞️', description: 'Multiple photos in one layout', count: layoutCategories.multiPhoto.length },
    { id: 'graduation', name: 'Graduation', icon: '🎓', description: 'Special graduation designs', count: layoutCategories.graduation.length }
  ];

  const getCurrentLayouts = () => {
    return layoutCategories[selectedCategory] || layoutCategories.horizontal;
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
            <h1 className="text-5xl md:text-6xl font-light mb-8 tracking-tight text-gray-900">
              Photo Booth <span className="text-purple-600">Layouts</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
              Choose from our collection of professionally designed photo layouts and templates for weddings, corporate events, and parties across Canada
            </p>
            <div className="inline-flex items-center bg-white border border-purple-200 rounded-full px-6 py-3">
              <span className="text-purple-600 mr-2" aria-hidden="true">✨</span>
              <span className="text-purple-600 font-semibold">Custom Designs Available</span>
            </div>
            </motion.div>
          </div>
        </header>

        {/* Category Navigation */}
        <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <nav className="flex flex-wrap gap-4" role="navigation" aria-label="Layout categories">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={selectedCategory === category.id}
                  aria-describedby={`${category.id}-description`}
                >
                  <span className="mr-2 text-lg" aria-hidden="true">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Layout Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              {categories.find(c => c.id === selectedCategory)?.name} Layouts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              {categories.find(c => c.id === selectedCategory)?.description}
            </p>
            <div className="mt-4 inline-flex items-center bg-purple-50 border border-purple-200 rounded-full px-6 py-2">
              <span className="text-purple-600 font-semibold">{getCurrentLayouts().length} Designs Available</span>
            </div>
          </motion.div>

          {/* Layout Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" role="main" aria-label="Photo booth layout options">
            {getCurrentLayouts().map((layout, index) => (
              <motion.div
                key={layout.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Layout Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={layout.image}
                    alt={layout.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Theme Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-purple-600">{layout.theme}</span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">{layout.name}</h3>
                    <Link href="/quote">
                      <button className="bg-white text-gray-900 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                        Select Layout
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Layout Name (visible on mobile) */}
                <div className="p-3 lg:hidden">
                  <h3 className="text-sm font-semibold text-gray-900 text-center">{layout.name}</h3>
                  <p className="text-xs text-gray-500 text-center mt-1">{layout.theme}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design CTA */}
      <section className="py-16 bg-white" aria-labelledby="custom-design-heading">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="custom-design-heading" className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
              Need a Custom Design?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light">
              Our design team can create completely custom photo layouts that perfectly match your event theme and branding
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" aria-label="Request custom photo booth layout design">
                <button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300">
                  Request Custom Design
                </button>
              </Link>
              <Link href="/contact" aria-label="Contact our design team">
                <button className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300">
                  Contact Designer
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Layout Details Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Print Quality
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                All our printed photo layouts are designed with professional-grade specifications to ensure the highest quality output for your event keepsakes.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'High Resolution', description: '300 DPI print quality for crisp, clear photos' },
                  { title: 'Premium Paper', description: 'Professional photo paper with glossy or matte finish' },
                  { title: 'Custom Branding', description: 'Your event details and branding seamlessly integrated' },
                  { title: 'Instant Printing', description: 'Photos printed on-site within seconds of capture' }
                ].map((feature, index) => (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {/* Sample layout previews */}
                  <div className="bg-white rounded-lg shadow-md p-4 aspect-[4/6]">
                    <div className="h-3/4 bg-gradient-to-br from-gray-200 to-gray-300 rounded mb-2"></div>
                    <div className="h-1/4 flex items-center justify-center">
                      <div className="text-xs text-gray-500">Vertical Postcard</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 aspect-[6/4]">
                    <div className="h-3/4 bg-gradient-to-br from-gray-200 to-gray-300 rounded mb-2"></div>
                    <div className="h-1/4 flex items-center justify-center">
                      <div className="text-xs text-gray-500">Horizontal Postcard</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 aspect-[1/3] col-span-1">
                    <div className="flex flex-col h-full gap-1">
                      <div className="flex-1 bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
                      <div className="flex-1 bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
                      <div className="flex-1 bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 aspect-square">
                    <div className="grid grid-cols-2 gap-1 h-full">
                      <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
                      <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
                      <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
                      <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="faq-heading" className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About Photo Booth Layouts
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our professional photo booth layout designs and printing options
            </p>
          </motion.div>

          <div className="space-y-6" role="region" aria-labelledby="faq-heading">
            {[
              {
                question: "Can I customize the photo booth layout design?",
                answer: "Absolutely! We offer full customization including colors, fonts, logos, and layout arrangements to match your event theme perfectly. Our designers work with you to create unique layouts for weddings, corporate events, and parties."
              },
              {
                question: "What print sizes are available for photo booth layouts?",
                answer: "We offer standard 2x6 inch photo strips, 4x6 inch postcards, and 4x4 inch square prints. Custom sizes available upon request for special events across Canada."
              },
              {
                question: "How many photo copies do guests receive?",
                answer: "Each guest receives unlimited prints during your event. We can also provide digital copies via email or QR code for easy sharing on social media."
              },
              {
                question: "Can I see a proof of the layout before the event?",
                answer: "Yes! We provide digital proofs of your custom layout design for approval before your event date. This ensures your photo booth layouts perfectly match your vision."
              },
              {
                question: "Do you serve photo booth events across Canada?",
                answer: "Yes, we provide photo booth services with custom layouts for events across Canada including Toronto, Vancouver, Montreal, Calgary, and other major cities."
              },
              {
                question: "What&apos;s included with each photo booth layout?",
                answer: "Each layout includes professional design, unlimited prints, custom branding, event details, and high-quality 300 DPI printing on premium photo paper."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                <div itemScope itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Contact Form - Temporarily Disabled */}
        {/* <ContactForm 
          title="Love These Layouts?"
          subtitle="Ready to add professional photo layouts to your event? Contact us to discuss custom options and get your free quote!"
          compact={true}
        /> */}
      </div>
    </>
  );
}
