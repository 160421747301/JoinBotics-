import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaFileContract, FaGavel, FaExclamationTriangle, FaEnvelope } from "react-icons/fa";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#220b34] to-[#c11e38]"></div>
        </div>
        <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <FaFileContract className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms of Service</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-white/70 mt-4">Last Updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12">
          {/* Agreement to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FaGavel className="text-[#c11e38]" />
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Join Botics 
              concerning your access to and use of our website, services, and programs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using our services, you agree that you have read, understood, and agree to be bound by these Terms. 
              If you do not agree with these Terms, you must not access or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Your continued use of our services following any changes 
              constitutes acceptance of those changes.
            </p>
          </motion.div>

          {/* Services Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Join Botics provides STEAM education solutions including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Robotics, AI, and coding lab setup for educational institutions</li>
              <li>Curriculum development and integration services</li>
              <li>Teacher training and certification programs</li>
              <li>Student learning programs (online and offline)</li>
              <li>Holiday camps and workshops</li>
              <li>Engineering internships and project guidance</li>
              <li>Educational content and resources</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              The specific terms and conditions for each service may vary and will be outlined in separate agreements or enrollment forms.
            </p>
          </motion.div>

          {/* Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              To use our services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>You must be at least 18 years old or have parental/guardian consent</li>
              <li>For institutional services, you must have authority to bind your organization</li>
              <li>For student programs, appropriate parental consent must be obtained for minors</li>
              <li>You must provide accurate and complete registration information</li>
              <li>You must comply with all applicable laws and regulations</li>
            </ul>
          </motion.div>

          {/* User Accounts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">User Accounts and Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you create an account with us, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Maintain the security of your account credentials</li>
              <li>Provide accurate, current, and complete information</li>
              <li>Update your information promptly if it changes</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Not share your account or credentials with others</li>
              <li>Not create accounts using false identities or information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to suspend or terminate accounts that violate these Terms or are used for unlawful purposes.
            </p>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Payment and Fees</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Pricing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fees for our services are outlined in your enrollment agreement or service contract. Prices are subject to change, 
                  but we will notify you in advance of any changes that affect your existing agreements.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Payment Methods</h3>
                <p className="text-gray-700 leading-relaxed">
                  We accept various payment methods including bank transfers, online payments, and checks as specified in your agreement. 
                  Payment terms and schedules will be outlined in your specific service agreement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Refund Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Refund eligibility depends on the specific service and timing of cancellation. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Lab setup services: Refunds available before installation begins</li>
                  <li>Training programs: Refunds may be provided if cancelled before program start date</li>
                  <li>Student programs: Pro-rated refunds may apply based on remaining sessions</li>
                  <li>Specific refund terms will be detailed in your enrollment agreement</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Our Content</h3>
                <p className="text-gray-700 leading-relaxed">
                  All content on our website and in our programs, including text, graphics, logos, images, videos, curriculum materials, 
                  and software, is the property of Join Botics or its licensors and is protected by copyright, trademark, and other 
                  intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Limited License</h3>
                <p className="text-gray-700 leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable license to access and use our services for their intended 
                  educational purposes. You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Copy, modify, or create derivative works from our content</li>
                  <li>Distribute, sell, or commercialize our materials</li>
                  <li>Remove copyright or proprietary notices</li>
                  <li>Use our content for purposes outside the scope of your agreement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Student Work</h3>
                <p className="text-gray-700 leading-relaxed">
                  Students retain ownership of projects and work they create, but grant us permission to showcase these works 
                  (with appropriate attribution) for promotional and educational purposes, unless otherwise specified.
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Conduct */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Acceptable Use Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              When using our services, you agree NOT to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Violate any laws, regulations, or third-party rights</li>
              <li>Post or transmit harmful, offensive, or inappropriate content</li>
              <li>Harass, threaten, or intimidate other users or staff</li>
              <li>Impersonate others or misrepresent your affiliation</li>
              <li>Interfere with or disrupt our services or servers</li>
              <li>Attempt to gain unauthorized access to systems or accounts</li>
              <li>Use our services for any commercial purpose without permission</li>
              <li>Collect or harvest personal information from other users</li>
              <li>Upload viruses, malware, or other malicious code</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Violation of this policy may result in immediate termination of your access to our services.
            </p>
          </motion.div>

          {/* Liability and Disclaimers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FaExclamationTriangle className="text-[#c11e38]" />
              Disclaimers and Limitation of Liability
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Service Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. 
                  While we strive for excellence, we do not guarantee uninterrupted, error-free, or perfectly secure services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Educational Outcomes</h3>
                <p className="text-gray-700 leading-relaxed">
                  While we design our programs to provide quality education, individual learning outcomes may vary. We do not 
                  guarantee specific results, grades, certifications, or employment outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by law, Join Botics shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed 
                  the amount you paid for the specific service giving rise to the claim.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Suspend or terminate your access to services for violation of these Terms</li>
              <li>Refuse service to anyone for any reason at any time</li>
              <li>Remove or disable content that violates these Terms</li>
              <li>Take legal action for serious violations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon termination, your right to use our services will immediately cease. Provisions that by their nature should 
              survive termination shall survive, including intellectual property rights, disclaimers, and limitation of liability.
            </p>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Governing Law and Disputes</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its 
              conflict of law provisions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Any disputes arising from these Terms or your use of our services shall be resolved through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>First, good faith negotiations between the parties</li>
              <li>If unresolved, mediation or arbitration as mutually agreed</li>
              <li>As a last resort, jurisdiction of courts in Bangalore, Karnataka</li>
            </ul>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time to reflect changes in our services, legal requirements, or business practices. 
              We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. 
              Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-br from-[#c11e38]/10 to-[#220b34]/10 border border-[#c11e38]/20 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FaEnvelope className="text-[#c11e38]" />
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Join Botics</strong></p>
              <p>Email: <a href="mailto:connect@joinbotics.com" className="text-[#c11e38] hover:underline">connect@joinbotics.com</a></p>
              <p>Phone: <a href="tel:+919986780347" className="text-[#c11e38] hover:underline">+91 99867 80347</a></p>
              <p>Website: <a href="/contact" className="text-[#c11e38] hover:underline">Contact Form</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
