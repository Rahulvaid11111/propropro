'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Last Updated: November 2025
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Photobooth Canada ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our photo booth services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Request a quote or book our services</li>
                  <li>Contact us via email, phone, or contact forms</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Use our photo booth services at events</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  This information may include: name, email address, phone number, mailing address, event details, payment information, and photos taken at events.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device. We may also collect information about your browsing actions and patterns.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect or receive to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Process your bookings and transactions</li>
                  <li>Send you confirmations, updates, and event-related information</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing and promotional communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraudulent transactions and protect against criminal activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Photo Usage */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Photo Usage and Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Photos taken at events using our photo booth services:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Are provided to event guests for personal use</li>
                  <li>May be shared digitally via email or social media by guests</li>
                  <li>May be used by us for marketing purposes only with explicit consent</li>
                  <li>Are stored securely and deleted after a reasonable period unless otherwise agreed</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  If you do not wish your photos to be used for marketing purposes, please inform our staff at the event or contact us afterward.
                </p>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Disclosure of Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, email delivery, etc.)</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of all or part of our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Your Privacy Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-Out:</strong> Opt-out of marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:support@photoboothcanada.ca" className="text-purple-600 hover:text-purple-700">support@photoboothcanada.ca</a>
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Third-Party Websites</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">Photobooth Canada</p>
                  <p className="text-gray-600">Email: <a href="mailto:support@photoboothcanada.ca" className="text-purple-600 hover:text-purple-700">support@photoboothcanada.ca</a></p>
                  <p className="text-gray-600">Phone: <a href="tel:+17059707860" className="text-purple-600 hover:text-purple-700">+1 (705) 970-7860</a></p>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 text-center">
              <Link href="/">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  Back to Home
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
