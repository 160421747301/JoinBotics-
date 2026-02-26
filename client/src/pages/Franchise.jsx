import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaBook, FaChartLine, FaHandshake, FaStore, FaBus, FaBuilding, FaGraduationCap, FaLightbulb, FaChalkboardTeacher, FaBriefcase, FaDollarSign, FaClock, FaHandsHelping, FaUserTie, FaBullhorn, FaHeadset, FaFileAlt, FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";

export default function Franchise() {
  const WHY_FRANCHISE = [
    {
      icon: FaBook,
      title: "Future-Ready Curriculum",
      description: "Proven programs designed for the next generation of innovators"
    },
    {
      icon: FaChartLine,
      title: "Low Investment, High Returns",
      description: "Start with minimal investment and achieve profitable returns quickly"
    },
    {
      icon: FaHandshake,
      title: "Comprehensive Training & Support",
      description: "End-to-end guidance from setup to ongoing operations"
    },
    {
      icon: FaStore,
      title: "Multiple Revenue Streams",
      description: "Diversified income through various programs and services"
    }
  ];

  const FRANCHISE_MODELS = [
    {
      icon: FaBuilding,
      title: "Join Botics Studio",
      subtitle: "Learning Center",
      description: "Establish a dedicated learning center offering robotics, coding, and STEM programs to students in your community.",
      image: "/assets/franchise-studio.jpg"
    },
    {
      icon: FaBus,
      title: "Mobile Franchise",
      subtitle: "School & Events",
      description: "Deliver programs directly to schools and conduct workshops at events without a fixed location.",
      image: "/assets/franchise-mobile.jpg"
    },
    {
      icon: FaGraduationCap,
      title: "Hybrid Franchise",
      subtitle: "Studio + School Programs",
      description: "Combine a learning center with school partnerships for maximum reach and revenue potential.",
      image: "/assets/franchise-hybrid.jpg"
    }
  ];

  const WHO_CAN_JOIN = [
    {
      icon: FaLightbulb,
      title: "Educational Entrepreneurs",
      description: "Visionaries looking to make an impact in education"
    },
    {
      icon: FaBook,
      title: "STEM Enthusiasts",
      description: "Passionate individuals excited about technology and innovation"
    },
    {
      icon: FaChalkboardTeacher,
      title: "Teachers & Educators",
      description: "Experienced educators seeking entrepreneurial opportunities"
    },
    {
      icon: FaBriefcase,
      title: "Aspiring Business Owners",
      description: "Individuals ready to build a purpose-driven business"
    }
  ];

  const INVESTMENT_RETURNS = [
    {
      icon: FaDollarSign,
      title: "Low Investment Options",
      description: "Flexible investment models starting from affordable ranges"
    },
    {
      icon: FaClock,
      title: "6-12 Months ROI",
      description: "Achieve return on investment within the first year of operation"
    },
    {
      icon: FaChartLine,
      title: "Multiple Income Streams",
      description: "Revenue from courses, workshops, kits, events, and school partnerships"
    }
  ];

  const TRAINING_SUPPORT = [
    {
      icon: FaUserTie,
      title: "Instructor Training",
      description: "Comprehensive training for you and your team on curriculum delivery"
    },
    {
      icon: FaBullhorn,
      title: "Marketing Assistance",
      description: "Branding materials, digital marketing support, and lead generation"
    },
    {
      icon: FaHeadset,
      title: "Ongoing Guidance",
      description: "Continuous support from our franchise team for operations and growth"
    }
  ];

  // Testimonials data - uncomment when testimonials are available
  // const TESTIMONIALS = [
  //   {
  //     quote: "Launching a Join Botics center was the best decision I made!",
  //     author: "Franchise Partner, Bangalore",
  //     rating: 5
  //   },
  //   {
  //     quote: "Excellent curriculum and support. Highly recommended!",
  //     author: "Franchise Partner, Hyderabad",
  //     rating: 5
  //   }
  // ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#220b34] to-[#c11e38] text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Partner With <span className="text-yellow-400 whitespace-nowrap">Join Botics.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Build the Future of <span className="text-yellow-400">STEM Education.</span>
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Empower young minds with Robotics, Coding & STEM programs in your city.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#apply"
                  className="bg-yellow-400 hover:bg-yellow-300 text-[#220b34] px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-lg"
                >
                  Apply for Franchise
                </a>
                <a 
                  href="/assets/JoinBotics_Brochure.pdf"
                  target="_blank"
                  className="bg-white/10 border border-white/40 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg backdrop-blur-sm"
                >
                  Download Brochure
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "50+", label: "Active Partners", icon: "🤝" },
                { value: "20+", label: "Cities Covered", icon: "🌆" },
                { value: "5+", label: "STEM Programs", icon: "🤖" },
                { value: "6–12mo", label: "ROI Period", icon: "📈" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Botics Franchise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Botics Franchise?</h2>
            <p className="text-xl text-[#c11e38] font-semibold">Unlock a High-Growth Business With Purpose</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_FRANCHISE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c11e38] to-[#220b34] rounded-full mb-4">
                  <item.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Benefits / Models */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Franchise Benefits:</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FRANCHISE_MODELS.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-[#c11e38] to-[#220b34] flex items-center justify-center">
                  <model.icon className="text-6xl text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#220b34]">{model.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 italic">{model.subtitle}</p>
                  <p className="text-gray-700">{model.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Become a Franchise Partner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who Can Become <span className="text-[#c11e38] italic">a Franchise Partner?</span>
              </h2>
              
              <div className="space-y-4 mb-6">
                {WHO_CAN_JOIN.map((person, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-[#c11e38] text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">{person.title}</h4>
                      <p className="text-gray-600 text-sm">{person.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-[#220b34] text-white p-4 rounded-lg text-center italic">
                <p className="font-semibold">No Robotics Experience Required — Full Training Provided!</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 gap-6">
                {/* Investment & Returns */}
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">Investment & Returns</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {INVESTMENT_RETURNS.map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c11e38] to-[#220b34] rounded-full mb-3">
                          <item.icon className="text-2xl text-white" />
                        </div>
                        <h4 className="font-bold text-sm mb-1 text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Training & Support */}
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">Training & Support</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {TRAINING_SUPPORT.map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#220b34] to-[#c11e38] rounded-full mb-3">
                          <item.icon className="text-2xl text-white" />
                        </div>
                        <h4 className="font-bold text-sm mb-1 text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Hidden until we have testimonials */}
      {/* <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="text-5xl text-[#c11e38] mb-4">"</div>
                <p className="text-lg italic text-gray-700 mb-4">{testimonial.quote}</p>
                <p className="text-sm text-gray-600 font-semibold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section id="apply" className="bg-gradient-to-r from-[#c11e38] to-[#220b34] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start Your Join Botics Journey Today!
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="mailto:franchise@joinbotics.com"
                className="bg-[#c11e38] hover:bg-[#8a1532] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
              >
                Apply Now
              </a>
              <a 
                href="tel:+919986780347"
                className="bg-white text-[#220b34] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
              >
                Book a Franchise Call
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-lg">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-xl" />
                <a href="mailto:franchise@joinbotics.com" className="hover:text-yellow-400 transition-colors">
                  franchise@joinbotics.com
                </a>
              </div>
              <span className="hidden md:inline">|</span>
              <div className="flex items-center gap-2">
                <FaPhone className="text-xl" />
                <a href="tel:+919986780347" className="hover:text-yellow-400 transition-colors">
                  +91 99867 80347
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
