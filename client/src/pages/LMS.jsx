import { motion } from "framer-motion";
import { FaGraduationCap, FaVideo, FaFlask, FaGamepad, FaChartLine, FaComments, FaCertificate, FaRocket, FaBell, FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";

export default function LMS() {

  const CURRENT_LMS = {
    title: "Cretile LMS",
    description: "Currently, we are leveraging Cretile LMS to deliver our educational programs with a structured and interactive learning experience.",
    features: [
      {
        icon: FaGraduationCap,
        title: "Grade-Wise Courses",
        description: "Structured curriculum aligned with different grade levels"
      },
      {
        icon: FaVideo,
        title: "Video Lectures",
        description: "High-quality video content for self-paced learning"
      },
      {
        icon: FaChartLine,
        title: "Progress Tracking",
        description: "Monitor student performance and learning milestones"
      },
      {
        icon: FaCertificate,
        title: "Digital Certificates",
        description: "Recognized certifications upon course completion"
      }
    ]
  };

  const UPCOMING_LMS = {
    title: "Join Botics LMS - Coming Soon",
    subtitle: "Techno Tamer's Lab",
    description: "Our proprietary Learning Management System designed specifically for STEAM education, combining cutting-edge technology with pedagogical excellence.",
    vision: "To create an immersive, gamified learning environment where students don't just learn robotics and automation—they live it. The Join Botics LMS will transform how students interact with STEAM concepts through virtual labs, AI-powered doubt solving, and personalized learning paths.",
    features: [
      {
        icon: FaGraduationCap,
        title: "Comprehensive Grade-Wise Courses",
        description: "Meticulously crafted curriculum from Grade 1 to 12+, aligned with NEP 2020 and global standards",
        details: ["Age-appropriate content", "Progressive skill building", "NEP 2020 alignment", "International curriculum integration"]
      },
      {
        icon: FaVideo,
        title: "Interactive Video Lectures",
        description: "Engaging video content with embedded quizzes and real-time interaction",
        details: ["Expert instructors", "Interactive checkpoints", "Multi-language support", "Downloadable resources"]
      },
      {
        icon: FaFlask,
        title: "Virtual Labs & Simulations",
        description: "Hands-on learning without physical constraints through advanced simulations",
        details: ["3D circuit simulations", "Robotics programming playground", "IoT project testing", "AI/ML experimentation"]
      },
      {
        icon: FaGamepad,
        title: "Gamified Learning Experience",
        description: "Points, badges, leaderboards, and challenges to keep students engaged",
        details: ["Achievement system", "Competitive challenges", "Team missions", "Reward marketplace"]
      },
      {
        icon: FaChartLine,
        title: "AI-Powered Progress Tracking",
        description: "Advanced analytics for students, parents, and teachers",
        details: ["Real-time dashboards", "Learning pattern insights", "Predictive analytics", "Performance reports"]
      },
      {
        icon: FaComments,
        title: "24/7 Doubt Solving Forums",
        description: "AI-assisted community support with expert moderation",
        details: ["Instant AI responses", "Peer-to-peer learning", "Expert mentor support", "Video explanations"]
      },
      {
        icon: FaCertificate,
        title: "Verified Digital Certification",
        description: "Blockchain-verified certificates recognized globally",
        details: ["Industry-recognized", "Blockchain secured", "Shareable credentials", "Portfolio building"]
      },
      {
        icon: FaRocket,
        title: "Project Showcase Platform",
        description: "Display student projects to the world and receive feedback",
        details: ["Public portfolios", "Peer reviews", "Expert feedback", "Competition participation"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c11e38]/10 via-[#220b34]/5 to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1920&q=80" 
            alt="Digital Learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#220b34]/75"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10\">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white px-6 py-2 rounded-full mb-6">
              <FaGraduationCap />
              <span className="font-semibold">Learning Management System</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Techno Tamer's Lab
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Where Learning Meets Innovation - Your Gateway to the Future of STEAM Education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current LMS Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaCheckCircle className="text-[#c11e38] text-3xl" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {CURRENT_LMS.title}
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              {CURRENT_LMS.description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CURRENT_LMS.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="text-4xl text-[#220b34] mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#c11e38] to-[#220b34]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FaRocket className="text-6xl text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              {UPCOMING_LMS.vision}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming LMS Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full mb-6">
              <FaBell />
              <span className="font-semibold">Coming Soon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {UPCOMING_LMS.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {UPCOMING_LMS.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {UPCOMING_LMS.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-[#c11e38] to-[#220b34] p-4 rounded-xl">
                    <feature.icon className="text-3xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-20">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <FaCheckCircle className="text-[#c11e38] mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Roadmap */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Development Roadmap
            </h2>
            <p className="text-lg text-gray-700">
              Our journey to revolutionize STEAM education
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                phase: "Q1 2025",
                title: "Beta Launch",
                description: "Limited beta release to select partner schools and early adopters",
                status: "upcoming"
              },
              {
                phase: "Q2 2025",
                title: "Feature Expansion",
                description: "Addition of virtual labs, gamification elements, and AI-powered features",
                status: "planned"
              },
              {
                phase: "Q3 2025",
                title: "Public Launch",
                description: "Full public release with all core features and integrations",
                status: "planned"
              },
              {
                phase: "Q4 2025",
                title: "Global Expansion",
                description: "Multi-language support and international curriculum integration",
                status: "planned"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-[#c11e38] to-[#220b34] text-white px-4 py-2 rounded-lg font-bold">
                    {item.phase}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
