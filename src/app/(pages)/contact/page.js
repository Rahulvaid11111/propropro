// import ContactForm from '../../../../components/ContactForm';

export const metadata = {
  title: 'Contact Us - Photobooth Canada | Get Your Free Quote Today',
  description: 'Contact Photobooth Canada for your event needs. Get a free quote for photo booth rentals across Canada. Professional service, instant response within 24 hours.',
  keywords: 'contact photobooth canada, photo booth rental quote, event photography contact, wedding photo booth inquiry, corporate event contact',
  openGraph: {
    title: 'Contact Photobooth Canada - Free Quote & Professional Service',
    description: 'Get in touch with Canada\'s premier photo booth rental service. Free quotes, professional consultation, and 24-hour response guarantee.',
    url: 'https://photoboothcanada.com/contact',
    siteName: 'Photobooth Canada',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Photobooth Canada - Free Quote & Professional Service',
    description: 'Get in touch with Canada\'s premier photo booth rental service. Free quotes, professional consultation, and 24-hour response guarantee.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://photoboothcanada.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-tight text-gray-900">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Ready to make your event unforgettable? We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form - Temporarily Disabled */}
      <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Form Temporarily Disabled
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Please use the contact information below to reach us directly.
          </p>
        </div>
      </div>

      {/* Additional Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Phone */}
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-xl">Call Us</h3>
              <a href="tel:+17059707860" className="text-gray-900 hover:text-purple-600 font-medium text-lg block mb-2">
                +1 (705) 970-7860
              </a>
              <p className="text-sm text-gray-500">Available 7 days a week</p>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-xl">Email Us</h3>
              <a href="mailto:support@photoboothcanada.ca" className="text-gray-900 hover:text-purple-600 font-medium text-lg block mb-2">
                support@photoboothcanada.ca
              </a>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Can I customize my photo booth?</h3>
              <p className="text-gray-600">Absolutely! We offer custom backdrops, branded photo templates, props, and more. Let&apos;s create something unique for your event.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">What&apos;s included in the rental?</h3>
              <p className="text-gray-600">All rentals include setup, breakdown, professional attendant, unlimited photos, instant prints, props, custom backdrop (where applicable), and online gallery access.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Do you travel outside major cities?</h3>
              <p className="text-gray-600">Yes! We service all of Canada. Travel fees may apply for locations outside our primary service areas. Contact us for a detailed quote including travel costs.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">What happens if there&apos;s a technical issue?</h3>
              <p className="text-gray-600">Our professional attendants are trained to handle technical issues quickly. We also carry backup equipment to ensure your event runs smoothly without interruption.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
