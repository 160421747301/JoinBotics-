import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaGlobe, FaUsers, FaRobot, FaGraduationCap, FaMapMarkerAlt, FaStar, FaCode, FaBrain, FaMicrochip, FaCube, FaHelicopter, FaVrCardboard, FaNetworkWired } from "react-icons/fa";

const STATS = [
  { icon: FaUsers, value: "1,00,000+", label: "Students Trained", desc: "From Grade 1 to Engineering | Robotics, Coding, AI & Drones" },
  { icon: FaGraduationCap, value: "90+", label: "Schools Partnered", desc: "CBSE, ICSE, State Boards & International" },
  { icon: FaMapMarkerAlt, value: "10+", label: "Cities Covered", desc: "Pune, Aurangabad, Bengaluru, Hyderabad, Jaipur & more" },
  { icon: FaRobot, value: "1,200+", label: "Student Projects", desc: "IoT, AI, Robotics & Automation innovations" },
];

const PROGRAMS = [
  {
    id: 1,
    icon: FaRobot,
    title: "Robotics",
    desc: "Design, build, and code robots using Arduino, Quarky, and WhalesBot platforms.",
    color: "from-[#c11e38] to-[#8a1532]",
    iconColor: "text-[#c11e38]",
  },
  {
    id: 2,
    icon: FaCode,
    title: "Coding",
    desc: "From Scratch to Python to Java — level-wise curriculum for logic building.",
    color: "from-[#8a1532] to-[#220b34]",
    iconColor: "text-[#220b34]",
  },
  {
    id: 3,
    icon: FaBrain,
    title: "AI/ML",
    desc: "Build chatbots and intelligent models with machine learning concepts.",
    color: "from-purple-500 to-purple-600",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    icon: FaMicrochip,
    title: "Electronics & IoT",
    desc: "Circuit design, sensor interfacing, and connected device automation.",
    color: "from-yellow-500 to-yellow-600",
    iconColor: "text-yellow-600",
  },
  {
    id: 5,
    icon: FaCube,
    title: "3D Printing",
    desc: "Design and print prototypes using TinkerCAD and Fusion 360.",
    color: "from-pink-500 to-pink-600",
    iconColor: "text-pink-600",
  },
  {
    id: 6,
    icon: FaHelicopter,
    title: "Drone Technology",
    desc: "Drone assembly, flight control, and aerial coding with safety training.",
    color: "from-[#c11e38] to-[#220b34]",
    iconColor: "text-[#c11e38]",
  },
  {
    id: 7,
    icon: FaVrCardboard,
    title: "VR/XR",
    desc: "Immersive virtual environments using Unity and WebXR platforms.",
    color: "from-indigo-500 to-indigo-600",
    iconColor: "text-indigo-600",
  },
  {
    id: 8,
    icon: FaNetworkWired,
    title: "IoT & Blockchain",
    desc: "Connect devices and understand decentralized technologies.",
    color: "from-orange-500 to-orange-600",
    iconColor: "text-orange-600",
  },
];

const CITIES = [
  "Pune", "Aurangabad", "Bengaluru", "Hyderabad", "Jaipur", 
  "Kolhapur", "Ahmedabad", "Mumbai", "Delhi", "Bhopal"
];

const SUCCESS_STORIES = [
  {
    id: 1,
    school: "Gaikwad Global School",
    location: "Chh. Sambhaji Nagar, Maharashtra",
    achievement: "From zero robotics knowledge to hosting inter-school robotics exhibitions",
    students: "500+ students trained",
  },
  {
    id: 2,
    school: "Riverdale School",
    location: "Multiple Locations",
    achievement: "Students publishing mini projects and winning local competitions",
    students: "300+ students in STEAM programs",
  },
  {
    id: 3,
    school: "Engineering Colleges",
    location: "Karnataka & Punjab",
    achievement: "Industry-ready skills through internship and final year project guidance",
    students: "1000+ engineering students",
  },
];

export default function GlobalExposure() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80" 
            alt="Global Reach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#220b34]/80"></div>
        </div>
        <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <FaGlobe className="text-6xl mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">National & International Exposure</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Delivering future-ready education across India and expanding into international markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Student Impact Stats */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Impact: Statistics & Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our reach and impact speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <Icon className="text-5xl text-[#220b34] mx-auto mb-4" />
                <div className="text-3xl font-extrabold text-[#220b34] mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Geographic Reach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From urban metros to Tier-2 and Tier-3 cities, democratizing access to tech education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-br from-[#c11e38]/10 to-[#220b34]/10 border border-[#c11e38]/20 p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#220b34]" />
                🇮🇳 National Reach
              </h3>
              <p className="text-gray-700 mb-4">
                From Karnataka to Maharashtra, Telangana, MP and beyond. Strategic presence in major education hubs.
              </p>
              <div className="flex flex-wrap gap-2">
                {CITIES.map((city, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow">
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaGlobe className="text-purple-600" />
                🌏 International Exposure
              </h3>
              <p className="text-gray-700 mb-4">
                Strategic alliances with tech partners, educational platforms, and innovation labs globally.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaStar className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span>Participated in Global Innovation Event, Shanghai, China</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaStar className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span>International collaborations with EdTech platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaStar className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span>Expanding curriculum to global standards</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology programs for hands-on learning
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PROGRAMS.map((program, idx) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group rounded-xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all text-center hover:scale-105"
              >
                <div className="mb-3 flex justify-center">
                  <Icon className={`text-5xl ${program.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-xs text-gray-600">{program.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real transformations in schools and institutions across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map((story, idx) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-[#220b34] mb-2">{story.school}</h3>
                <p className="text-sm text-gray-600 mb-4 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-400" />
                  {story.location}
                </p>
                <p className="text-gray-700 mb-4">{story.achievement}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-[#c11e38]">{story.students}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Growing Network
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of a movement that's transforming education across India and beyond
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 relative overflow-hidden group"
            >
              <span className="relative z-10">Partner With Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
            <a
              href="/programs"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">View Programs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
