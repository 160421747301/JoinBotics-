import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaShieldAlt, FaLock, FaUserShield, FaEnvelope } from "react-icons/fa";

export default function PrivacyPolicy() {
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
            <FaShieldAlt className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-white/70 mt-4">Last Updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FaUserShield className="text-[#c11e38]" />
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to JoinBotics. We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our services, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Register for our programs or services</li>
                  <li>Fill out contact forms or request information</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Participate in surveys or feedback forms</li>
                  <li>Contact our support team</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  This information may include: name, email address, phone number, school/institution name, 
                  student grade level, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#220b34]">Usage Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We automatically collect certain information when you visit our website, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website and search terms</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide and maintain our educational services</li>
              <li>Process registrations and enrollments</li>
              <li>Send administrative information and updates</li>
              <li>Respond to inquiries and support requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze usage patterns to improve our services</li>
              <li>Detect and prevent fraud or security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </motion.div>

          {/* Data Sharing and Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>With Schools/Institutions:</strong> When you enroll through a partner school or institution</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our services (email providers, hosting services, etc.)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>With Your Consent:</strong> Any other sharing with your explicit permission</li>
            </ul>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FaLock className="text-[#c11e38]" />
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Secure encrypted connections (HTTPS/SSL)</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
              <li>Data backup and recovery procedures</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, 
              we cannot guarantee absolute security.
            </p>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our services are primarily directed to schools and educational institutions for students of all ages. 
              We are committed to protecting children's privacy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>We collect minimal personal information from students</li>
              <li>Parent/guardian consent is required for students under 13</li>
              <li>Student data is used only for educational purposes</li>
              <li>We comply with applicable child privacy laws (COPPA, etc.)</li>
              <li>Parents/guardians can request access or deletion of student data</li>
            </ul>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Object:</strong> Object to certain processing activities</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information below.
            </p>
          </motion.div>

          {/* Cookies Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use cookies and similar tracking technologies to enhance your experience. Cookies help us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve website performance and functionality</li>
              <li>Provide personalized content</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </motion.div>

          {/* Updates to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy 
              on this page and updating the "Last Updated" date. We encourage you to review this policy periodically for any changes. 
              Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
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
              If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>JoinBotics</strong></p>
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
