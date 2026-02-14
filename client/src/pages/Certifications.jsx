import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaCertificate, FaAward, FaCheckCircle, FaGraduationCap, FaUsers, FaStar, FaHandshake } from "react-icons/fa";

const CERTIFICATION_BENEFITS = [
  {
    icon: FaCheckCircle,
    title: "Industry-Recognized Credentials",
    desc: "Globally accepted certification that validates your STEM education expertise",
  },
  {
    icon: FaGraduationCap,
    title: "Quality Assurance",
    desc: "Demonstrates adherence to international standards in robotics and AI education",
  },
  {
    icon: FaUsers,
    title: "Enhanced Credibility",
    desc: "Builds trust with students, parents, and educational institutions",
  },
  {
    icon: FaStar,
    title: "Continuous Support",
    desc: "Access to ongoing training, resources, and curriculum updates",
  },
];

const CERTIFICATION_FEATURES = [
  "Validated training methodology in Robotics, AI, and Coding",
  "Curriculum aligned with international STEM standards",
  "Regular quality audits and compliance checks",
  "Access to AI Certs global network of educators",
  "Certificate authentication and verification system",
  "Professional development opportunities",
  "Marketing and promotional materials support",
  "Priority access to new programs and technologies",
];

export default function Certifications() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Custom CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(193, 30, 56, 0.3), 0 0 25px rgba(193, 30, 56, 0.2); }
          50% { box-shadow: 0 0 25px rgba(193, 30, 56, 0.5), 0 0 45px rgba(193, 30, 56, 0.3); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80" 
            alt="Certification"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#220b34]/90 to-[#c11e38]/80"></div>
        </div>
        <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <FaCertificate className="text-6xl mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Authorized Training Partner</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Certified by AI Certs - Delivering World-Class STEM Education
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-6 py-3">
                <p className="text-sm text-white/70">Certified By</p>
                <p className="text-2xl font-bold text-white">AI Certs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-6 py-3">
                <p className="text-sm text-white/70">Training Focus</p>
                <p className="text-2xl font-bold text-white">STEM Education</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Certificate Showcase */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#c11e38]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#220b34]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaCertificate className="text-5xl text-[#c11e38] mx-auto mb-4" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Official Certification</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proudly certified by AI Certs as an Authorized Training Partner
            </p>
          </motion.div>

          {/* Certificate Display with Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Animated Glow Ring */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(193, 30, 56, 0.25)',
                  '0 0 40px rgba(193, 30, 56, 0.5)',
                  '0 0 20px rgba(193, 30, 56, 0.25)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#c11e38]/15 via-[#220b34]/15 to-[#c11e38]/15 blur-xl"
            ></motion.div>

            {/* Main Certificate Container */}
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-6 md:p-10 shadow-2xl border-4 border-[#c11e38]/30 overflow-hidden animate-glow-pulse">
              {/* Shimmer Effect Overlay */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1.5,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
                style={{ width: '40%', transform: 'skewX(-15deg)' }}
              ></motion.div>

              {/* Premium Corner Decorations */}
              <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-[#c11e38] rounded-tl-xl opacity-80"></div>
              <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-[#c11e38] rounded-tr-xl opacity-80"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-[#c11e38] rounded-bl-xl opacity-80"></div>
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-[#c11e38] rounded-br-xl opacity-80"></div>

              {/* Certificate Image with Shadow */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/assets/Joinbotics AICerts.jpg" 
                    alt="AI Certs Authorized Training Partner Certificate - JoinBotics"
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* Floating Sparkle Effects */}
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.3, 0.8],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-12 right-12 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full"
                  style={{ filter: 'blur(2px)' }}
                ></motion.div>
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.3, 0.8],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="absolute top-1/3 left-12 w-3 h-3 bg-gradient-to-r from-yellow-300 to-yellow-100 rounded-full"
                  style={{ filter: 'blur(2px)' }}
                ></motion.div>
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.3, 0.8],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.6,
                  }}
                  className="absolute bottom-24 right-1/4 w-3 h-3 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"
                  style={{ filter: 'blur(2px)' }}
                ></motion.div>
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="absolute top-2/3 right-16 w-2 h-2 bg-yellow-400 rounded-full"
                  style={{ filter: 'blur(1px)' }}
                ></motion.div>
              </motion.div>

              {/* Premium Verification Badge */}
              <motion.div
                animate={{
                  rotate: [0, 8, 0, -8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 bg-gradient-to-br from-[#c11e38] via-[#e63946] to-[#8a1532] text-white rounded-full p-5 shadow-2xl border-4 border-white"
              >
                <div className="text-center">
                  <FaAward className="text-4xl mx-auto mb-1" />
                  <p className="text-xs font-bold tracking-wider">VERIFIED</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is AI Certs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About AI Certs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI Certs is a globally recognized certification body specializing in artificial intelligence, 
            robotics, and technology education accreditation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <FaAward className="text-3xl text-[#c11e38] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Global Recognition</h3>
                <p className="text-gray-600">
                  AI Certs certifications are recognized by educational institutions and industries worldwide, 
                  ensuring credibility and trust.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaHandshake className="text-3xl text-[#c11e38] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Standards</h3>
                <p className="text-gray-600">
                  Rigorous evaluation process ensuring training partners meet the highest standards 
                  in curriculum delivery and student outcomes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaStar className="text-3xl text-[#c11e38] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Excellence</h3>
                <p className="text-gray-600">
                  Regular audits and updates ensure programs remain cutting-edge and aligned 
                  with evolving technology trends.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-br from-[#c11e38]/10 to-[#220b34]/10 border border-[#c11e38]/20 p-8 shadow-lg"
          >
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <FaCertificate className="text-6xl text-[#c11e38] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Certification Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                  <span>Industry-recognized credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                  <span>Quality assurance & compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                  <span>Enhanced institutional credibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                  <span>Global network access</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                  <span>Continuous training support</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certification Benefits */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Certification Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI Certs certification ensures you receive world-class education with measurable outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATION_BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <Icon className="text-5xl text-[#c11e38] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certification Features */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Certification Includes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive certification covering all aspects of quality STEM education delivery
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {CERTIFICATION_FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
            >
              <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
              <p className="text-gray-700">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaCertificate className="text-6xl mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Train with a Certified Partner
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the difference that AI Certs certified education makes in your learning journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/programs"
                className="px-8 py-4 bg-white text-[#c11e38] rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Programs</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#c11e38] hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
