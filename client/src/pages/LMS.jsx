import { motion } from "framer-motion";
import { FaGraduationCap, FaVideo, FaFlask, FaGamepad, FaChartLine, FaComments, FaCertificate, FaRocket, FaCheckCircle, FaBell } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LMS() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

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
    title: "JoinBotics LMS - Coming Soon",
    subtitle: "Techno Tamer's Lab",
    description: "Our proprietary Learning Management System designed specifically for STEAM education, combining cutting-edge technology with pedagogical excellence.",
    vision: "To create an immersive, gamified learning environment where students don't just learn robotics and automation—they live it. The JoinBotics LMS will transform how students interact with STEAM concepts through virtual labs, AI-powered doubt solving, and personalized learning paths.",
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Techno Tamer's Lab
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
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

      {/* Early Access / Demo Request Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#c11e38]/10 to-[#220b34]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Early Access
              </h2>
              <p className="text-lg text-gray-700">
                Be among the first to experience the future of STEAM education. Request a demo or sign up for early access to JoinBotics LMS.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-8"
              >
                <FaCheckCircle className="text-6xl text-[#c11e38] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-700">We'll be in touch with you soon about early access.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Please enter a valid 10-digit phone number"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="10-digit number"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      I am a *
                    </label>
                    <select
                      {...register("role", { required: "Please select your role" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                      <option value="">Select your role</option>
                      <option value="student">Student</option>
                      <option value="parent">Parent</option>
                      <option value="teacher">Teacher</option>
                      <option value="school-admin">School Administrator</option>
                      <option value="institution">Institution Representative</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.role && (
                      <p className="text-red-600 text-sm mt-1">{errors.role.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    School/Institution Name
                  </label>
                  <input
                    type="text"
                    {...register("institution")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Your school or institution name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Interested In
                  </label>
                  <select
                    {...register("interest")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    <option value="">Select your interest</option>
                    <option value="demo">Request a Demo</option>
                    <option value="early-access">Early Access Signup</option>
                    <option value="school-partnership">School Partnership</option>
                    <option value="individual-learning">Individual Learning</option>
                    <option value="more-info">More Information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    {...register("message")}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Tell us more about your interest in JoinBotics LMS..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white font-semibold py-4 rounded-lg hover:shadow-2xl hover:shadow-[#c11e38]/50 transition-all duration-300 transform hover:scale-[1.03] hover:from-[#d42847] hover:to-[#2d0e42] relative overflow-hidden group"
                >
                  <span className="relative z-10">Submit Request</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </form>
            )}
          </motion.div>
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
    </div>
  );
}
