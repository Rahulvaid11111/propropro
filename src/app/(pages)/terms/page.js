'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsPage() {
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
              Terms & Conditions
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
                <h2 className="text-3xl font-light text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms and Conditions ("Terms") govern your use of Photobooth Canada's website and services. By accessing our website or booking our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Services Provided</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Photobooth Canada provides photo booth rental services for events including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Weddings and engagements</li>
                  <li>Corporate events and conferences</li>
                  <li>Birthday parties and celebrations</li>
                  <li>Graduations and school events</li>
                  <li>Fundraisers and community events</li>
                  <li>Other private and public gatherings</li>
                </ul>
              </div>

              {/* Booking and Payment */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Booking and Payment Terms</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Booking Process</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>All bookings must be confirmed in writing via email or signed contract</li>
                  <li>A non-refundable deposit is required to secure your booking date</li>
                  <li>The deposit amount will be specified in your quote or contract</li>
                  <li>Your booking is not confirmed until the deposit is received</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Payment Terms</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Full payment is due 14 days before the event date unless otherwise agreed</li>
                  <li>Accepted payment methods include credit card, e-transfer, or check</li>
                  <li>Late payments may result in service cancellation</li>
                  <li>Additional charges may apply for overtime, travel, or extra services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  All prices are quoted in Canadian dollars (CAD) and are subject to applicable taxes. Prices are based on the package and services selected. Custom quotes are valid for 30 days from the date of issue.
                </p>
              </div>

              {/* Cancellation Policy */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Cancellation and Refund Policy</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Client Cancellations</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>More than 90 days before event:</strong> Deposit is non-refundable, but can be transferred to a new date within one year</li>
                  <li><strong>60-90 days before event:</strong> 50% of total booking fee is non-refundable</li>
                  <li><strong>30-60 days before event:</strong> 75% of total booking fee is non-refundable</li>
                  <li><strong>Less than 30 days before event:</strong> 100% of total booking fee is non-refundable</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Our Cancellations</h3>
                <p className="text-gray-600 leading-relaxed">
                  In the unlikely event that we must cancel your booking due to equipment failure, emergency, or circumstances beyond our control, we will provide a full refund or work with you to reschedule at no additional cost.
                </p>
              </div>

              {/* Event Requirements */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Event Requirements and Client Responsibilities</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Venue Requirements</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The client is responsible for ensuring:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Adequate space for photo booth setup (minimum 10x10 feet)</li>
                  <li>Access to standard electrical outlets within 20 feet of setup area</li>
                  <li>Level flooring suitable for equipment</li>
                  <li>Climate-controlled indoor environment (outdoor setups require prior approval)</li>
                  <li>Safe and timely access to venue for setup and breakdown</li>
                  <li>Parking or loading zone access for equipment transport</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Setup and Breakdown</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Setup typically requires 60-90 minutes before event start time</li>
                  <li>Breakdown requires 30-45 minutes after event end time</li>
                  <li>Client must provide accurate event timeline and venue access times</li>
                  <li>Delays in access may result in reduced service time or additional fees</li>
                </ul>
              </div>

              {/* Usage and Conduct */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Usage and Guest Conduct</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The client agrees to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Ensure guests use equipment respectfully and as intended</li>
                  <li>Supervise minors using the photo booth</li>
                  <li>Not allow food, drinks, or smoking near equipment</li>
                  <li>Report any equipment issues or guest misconduct immediately</li>
                  <li>Be responsible for any damage caused by guests</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We reserve the right to end service early without refund if equipment is being misused, damaged, or if our staff feels unsafe.
                </p>
              </div>

              {/* Liability */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Liability and Insurance</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Photobooth Canada carries liability insurance for our equipment and operations. However:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>We are not responsible for injuries sustained by guests using the photo booth</li>
                  <li>We are not liable for loss or damage to personal property</li>
                  <li>We are not responsible for venue-related issues or restrictions</li>
                  <li>Client is responsible for obtaining any necessary venue permits or permissions</li>
                  <li>Client may be held liable for damage to our equipment caused by negligence</li>
                </ul>
              </div>

              {/* Photos and Content */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Photos and Content Rights</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Guest Photos</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Guests retain ownership of their photos</li>
                  <li>Photos are provided for personal, non-commercial use</li>
                  <li>Digital copies may be provided via email, gallery link, or USB</li>
                  <li>Photo storage is guaranteed for 30 days after the event</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Marketing Use</h3>
                <p className="text-gray-600 leading-relaxed">
                  By booking our services, you grant us permission to use event photos (excluding recognizable faces without consent) for marketing purposes including our website, social media, and promotional materials. If you wish to opt out, please notify us in writing.
                </p>
              </div>

              {/* Force Majeure */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Force Majeure</h2>
                <p className="text-gray-600 leading-relaxed">
                  Neither party shall be liable for failure to perform obligations due to circumstances beyond reasonable control, including but not limited to: natural disasters, extreme weather, pandemics, government restrictions, power outages, or other acts of God. In such cases, we will work with you to reschedule or provide a refund.
                </p>
              </div>

              {/* Equipment */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Equipment and Technical Issues</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>We maintain and test all equipment before events</li>
                  <li>Backup equipment is available for most components</li>
                  <li>Technical issues will be resolved as quickly as possible</li>
                  <li>Partial refunds may be provided for significant service interruptions</li>
                  <li>We are not responsible for issues caused by venue power, internet, or environmental factors</li>
                </ul>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Service Modifications</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Changes to your booking:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Must be requested in writing at least 14 days before the event</li>
                  <li>Are subject to availability and may incur additional fees</li>
                  <li>Date changes are treated as new bookings and subject to availability</li>
                  <li>Package upgrades can be made up to 7 days before the event</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content on our website, including text, graphics, logos, images, and software, is the property of Photobooth Canada and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Ontario, Canada. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Ontario.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified Terms. Existing bookings will be governed by the Terms in effect at the time of booking.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">Photobooth Canada</p>
                  <p className="text-gray-600">Email: <a href="mailto:support@photoboothcanada.ca" className="text-purple-600 hover:text-purple-700">support@photoboothcanada.ca</a></p>
                  <p className="text-gray-600">Phone: <a href="tel:+17059707860" className="text-purple-600 hover:text-purple-700">+1 (705) 970-7860</a></p>
                </div>
              </div>

              {/* Acceptance */}
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
                <p className="text-gray-900 font-semibold mb-2">Acceptance of Terms</p>
                <p className="text-gray-600">
                  By booking our services or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
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
