import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";
import { FaCertificate, FaAward, FaCheckCircle, FaGraduationCap, FaUsers, FaStar, FaHandshake, FaBriefcase, FaShieldAlt, FaCloud, FaCode, FaLightbulb, FaDatabase, FaChalkboardTeacher, FaPalette, FaBitcoin, FaChevronDown } from "react-icons/fa";

const CERTIFICATION_BENEFITS = [
  {
    icon: FaGraduationCap,
    title: "Industry‑Recognized Credentials",
    desc: "Gain certifications valued by academic institutions and employers across the world.",
  },
  {
    icon: FaCheckCircle,
    title: "Quality Assurance",
    desc: "Demonstrates adherence to structured, validated, and internationally recognized certification frameworks.",
  },
  {
    icon: FaUsers,
    title: "Trusted Credibility",
    desc: "Strengthens the confidence of students, parents, institutions, and industry partners.",
  },
  {
    icon: FaStar,
    title: "Continuous Support",
    desc: "Access ongoing curriculum updates, training resources, and certification enhancements.",
  },
];

const CERTIFICATION_FEATURES = [
  "Delivery of role-based AI & Blockchain certification programs",
  "Validated training methodology in AI, ML, Prompt Engineering & Coding",
  "Framework aligned with global AI learning standards",
  "Regular quality audits & compliance checks",
  "Certificate authentication & verification system",
  "Professional-development pathways for learners & educators",
  "Marketing and promotional support for outreach",
  "Priority adoption of new certification tracks & emerging technologies",
];

const COURSE_CATEGORIES = [
  {
    id: "essentials",
    title: "AI Essentials Certifications",
    icon: FaGraduationCap,
    description: "Foundational AI certifications for beginners and executives",
    courses: [
      "AI+ Foundation™",
      "AI+ Executive™",
      "AI+ Prompt Engineer Level 1™",
      "AI+ Everyone™",
    ],
  },
  {
    id: "business",
    title: "AI Business Certifications",
    icon: FaBriefcase,
    description: "Role-based AI certifications for business professionals",
    courses: [
      "AI+ Chief AI Officer™",
      "AI+ Supply Chain™",
      "AI+ Ethics™",
      "AI+ Project Manager™",
      "AI+ Marketing™",
      "AI+ Sales™",
      "AI+ Customer Service™",
      "AI+ Writer™",
      "AI+ Product Manager™",
      "AI+ Human Resources™",
      "AI+ Finance™",
      "AI+ Legal™",
      "AI+ Researcher™",
      "AI+ Real Estate™",
    ],
  },
  {
    id: "security",
    title: "AI Security Certifications",
    icon: FaShieldAlt,
    description: "Advanced security and compliance certifications",
    courses: [
      "AI+ Security Level 1™",
      "AI+ Security Level 2™",
      "AI+ Security Level 3™",
      "AI+ Security Compliance™",
      "AI+ Network™",
      "AI+ Ethical Hacker™",
    ],
  },
  {
    id: "cloud",
    title: "AI Cloud",
    icon: FaCloud,
    description: "Cloud-based AI architecture and implementation",
    courses: [
      "AI+ Cloud™",
      "AI+ Architect™",
    ],
  },
  {
    id: "development",
    title: "AI Development",
    icon: FaCode,
    description: "Technical AI development and engineering certifications",
    courses: [
      "AI+ Prompt Engineer Level 2™",
      "AI+ Developer™",
      "AI+ Engineer™",
      "AI+ Vibe Coder™",
    ],
  },
  {
    id: "specialization",
    title: "AI Specialization",
    icon: FaLightbulb,
    description: "Industry-specific AI applications",
    courses: [
      "AI+ Government™",
      "AI+ Healthcare™",
      "AI+ Policy Maker™",
      "AI+ Doctor™",
      "AI+ Nurse",
    ],
  },
  {
    id: "data-robotics",
    title: "AI Data & Robotics",
    icon: FaDatabase,
    description: "Data science, robotics, and quantum computing",
    courses: [
      "AI+ Data™",
      "AI+ Robotics™",
      "AI+ Quantum™",
      "AI+ Business Intelligence™",
    ],
  },
  {
    id: "education",
    title: "AI Learning & Education",
    icon: FaChalkboardTeacher,
    description: "AI certifications for educators and trainers",
    courses: [
      "AI+ Educator™",
      "AI+ Learning & Development™",
    ],
  },
  {
    id: "design",
    title: "AI Design and Creative",
    icon: FaPalette,
    description: "Creative and design-focused AI applications",
    courses: [
      "AI+ UX Designer™",
      "AI+ Design™",
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain and Bitcoin",
    icon: FaBitcoin,
    description: "Blockchain technology and cryptocurrency certifications",
    courses: [
      "Bitcoin+ Everyone™",
      "Bitcoin+ Executive™",
      "Bitcoin+ Developer™",
      "Blockchain+ Developer™",
      "Blockchain+ Executive™",
      "Bitcoin+ Security™",
    ],
  },
];

export default function Certifications() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Custom CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(193, 30, 56, 0.15), 0 0 25px rgba(193, 30, 56, 0.1); }
          50% { box-shadow: 0 0 25px rgba(193, 30, 56, 0.25), 0 0 45px rgba(193, 30, 56, 0.15); }
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
              Certified by AI CERTs® — Delivering Globally Recognized AI & Blockchain Certification Pathways
            </p>
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
              Join Botics is certified by AI CERTs® as an Authorized Training Partner
            </p>
            <p className="text-gray-500 max-w-3xl mx-auto mt-3 text-sm">
              This partnership empowers us to deliver world-class certification pathways aligned with industry demands and future-skills development.
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
                  '0 0 20px rgba(193, 30, 56, 0.12)',
                  '0 0 40px rgba(193, 30, 56, 0.25)',
                  '0 0 20px rgba(193, 30, 56, 0.12)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#c11e38]/8 via-[#220b34]/8 to-[#c11e38]/8 blur-xl"
            ></motion.div>

            {/* Main Certificate Container */}
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-6 md:p-10 shadow-2xl border-4 border-[#c11e38]/20 overflow-hidden animate-glow-pulse">
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
                    alt="AI CERTs® Authorized Training Partner Certificate - Join Botics"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is AI CERTs® */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About AI CERTs®</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI CERTs® is a globally recognized certification provider offering an extensive catalog of role-based credentials across Artificial Intelligence, Blockchain, Bitcoin, AI Security, AI Cloud, AI Development, AI Data & Robotics, AI Business, Creative AI, Healthcare AI, and more.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            The programs are designed to build practical, job-ready skills for learners, professionals, and institutions worldwide.
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
                  AI CERTs® certifications are trusted internationally by professionals, enterprises, and academic institutions, providing strong credibility and global relevance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaHandshake className="text-3xl text-[#c11e38] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Standards</h3>
                <p className="text-gray-600">
                  Training partners undergo a rigorous evaluation and approval process, ensuring consistent delivery quality and learner outcomes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaStar className="text-3xl text-[#c11e38] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Excellence</h3>
                <p className="text-gray-600">
                  Programs evolve continuously to stay aligned with rapid advancements in AI, ML, Blockchain, and emerging technologies.
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
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our AI CERTs® Authorized Training Partner status ensures that every learner receives globally recognized certification pathways, measurable skill development, and direct alignment with industry expectations.
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
            A complete enablement package aligned with AI CERTs® global certification ecosystem:
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

      {/* AI CERTs® Course Catalog */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#c11e38]/10 to-[#220b34]/10 rounded-full mb-4">
              <span className="text-[#c11e38] font-semibold text-sm">COMPREHENSIVE CATALOG</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c11e38] to-[#220b34] bg-clip-text text-transparent">
              AI CERTs® Certification Programs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore our extensive range of industry-leading AI and Blockchain certifications — designed for every role, skill level, and career aspiration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
            {COURSE_CATEGORIES.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === category.id;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#c11e38]/30 overflow-hidden h-fit"
                >
                  {/* Category Header */}
                  <div 
                    onClick={() => toggleCategory(category.id)}
                    className="p-6 bg-gradient-to-r from-[#c11e38]/5 to-[#220b34]/5 hover:from-[#c11e38]/10 hover:to-[#220b34]/10 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 bg-gradient-to-br from-[#c11e38] to-[#220b34] rounded-xl shadow-lg flex-shrink-0">
                          <Icon className="text-2xl text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {category.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {category.description}
                          </p>
                          <div className="inline-block px-3 py-1 bg-white rounded-full border border-gray-200 shadow-sm">
                            <span className="text-xs font-semibold text-gray-700">
                              {category.courses.length} Certification{category.courses.length > 1 ? 's' : ''}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`p-2 rounded-full bg-white shadow-md transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                        <FaChevronDown className="text-lg text-[#c11e38]" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Course Grid */}
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-4 bg-gray-50/50">
                        <div className="grid grid-cols-2 gap-3">
                          {category.courses.map((course, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: idx * 0.03 }}
                              className="flex items-start gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-[#c11e38]/30 hover:shadow-md transition-all"
                            >
                              <FaCheckCircle className="text-[#c11e38] text-sm mt-0.5 flex-shrink-0" />
                              <span className="font-medium text-gray-800 text-sm leading-snug">
                                {course}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-[#c11e38] to-[#220b34] rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-5xl font-bold mb-2">65+</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Total Certifications</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Specialization Categories</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">Industry Recognized</div>
              </div>
            </div>
          </motion.div>
        </div>
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
              Experience globally recognized AI and Blockchain certification programs delivered through Join Botics — your trusted AI CERTs® Authorized Partner.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-[#c11e38] rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 relative overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
