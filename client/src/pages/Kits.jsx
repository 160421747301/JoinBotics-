import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaRobot, FaCube, FaPrint, FaPen, FaPlane, FaTools, FaBrain } from "react-icons/fa";

const KITS = [
  {
    id: 1,
    name: "WhalesBot Kits",
    icon: FaRobot,
    tagline: "Programmable robotics for complete beginners to advanced",
    idealFor: "School & College Robotics Labs | AI-ML | Mechanical Design",
    features: [
      "Programmable controllers (MC-101S)",
      "Drag-and-drop & C-language coding support",
      "Multiple sensors: IR, Ultrasonic, Light, Line Follower",
      "Robotics chassis, gears, servo & DC motors"
    ],
    useCases: ["Line following robot", "Object-avoiding bots", "AI-based automation tasks"],
    outcomes: ["Logical thinking", "Coding fundamentals", "Sensor integration skills"],
    color: "from-[#c11e38] to-[#220b34]"
  },
  {
    id: 2,
    name: "Quarky by STEMpedia",
    icon: FaBrain,
    tagline: "AI-powered learning with Wi-Fi enabled microcontroller",
    idealFor: "AI, Machine Learning, Coding with Scratch & Python",
    features: [
      "Wi-Fi enabled microcontroller with AI camera",
      "Scratch-based and Python programming",
      "Built-in face detection, object recognition",
      "Speech processing capabilities"
    ],
    useCases: ["AI face detection", "Object classification", "Gesture control", "IoT projects using Wi-Fi"],
    outcomes: ["Understanding AI concepts in real-time", "Hands-on ML projects", "IoT fundamentals"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Cretile Electronics Kits",
    icon: FaCube,
    tagline: "Plug-and-play modular circuits for electronics beginners",
    idealFor: "Beginner-level electronics & logic building (Grade 4+)",
    features: [
      "Plug-and-play modular circuits (no soldering)",
      "LEDs, sensors, motors, buzzers, switches, logic gates",
      "Safe and easy for young learners"
    ],
    useCases: ["Burglar alarm system", "Auto streetlight project", "Sound-activated lights"],
    outcomes: ["Strong electronics foundation", "Logical design thinking", "Creative problem-solving"],
    color: "from-[#c11e38] to-[#8a1532]"
  },
  {
    id: 4,
    name: "3D Pens",
    icon: FaPen,
    tagline: "Draw in 3D and bring your imagination to life",
    idealFor: "Art & Design | DIY Creativity | Prototyping",
    features: [
      "PLA filament support",
      "Adjustable temperature and speed",
      "Easy to use for all age groups"
    ],
    useCases: ["3D art & crafts", "Miniature model creation", "Decorative items"],
    outcomes: ["Creativity enhancement", "Spatial understanding", "Design thinking"],
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 5,
    name: "3D Printers",
    icon: FaPrint,
    tagline: "From design to reality - professional prototyping",
    idealFor: "Engineering, Design Labs, Product Prototyping",
    features: [
      "FDM printers with PLA/ABS filament support",
      "Bed leveling, slicer software compatibility",
      "Ideal for middle school to college level"
    ],
    useCases: ["Prototyping robotics parts", "Mechanical components", "Design to production workflows"],
    outcomes: ["CAD design skills", "Product development knowledge", "Manufacturing concepts"],
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 6,
    name: "Make-U Kits",
    icon: FaTools,
    tagline: "STEM concept building for young learners",
    idealFor: "Grade 1 and 2 – Foundation STEM Concepts",
    features: [
      "Reusable, theme-based kits",
      "Covers electricity, force, motion concepts",
      "DIY models: windmill, motors, hydraulic systems"
    ],
    useCases: ["Science fair models", "Classroom activity kits", "Basic physics demonstrations"],
    outcomes: ["Hands-on learning of physics", "General science understanding", "Early STEM exposure"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 7,
    name: "Educational Drones",
    icon: FaPlane,
    tagline: "Learn aerodynamics, coding, and flight control",
    idealFor: "Aerodynamics | Coding | Real-world Simulations",
    features: [
      "Drone kits with coding interface (block & Python)",
      "Obstacle-avoidance, altitude hold, GPS modules",
      "Safety-first training approach"
    ],
    useCases: ["Drone flying simulations", "Aerial photography basics", "Search & rescue mission simulations"],
    outcomes: ["Flight mechanics understanding", "Drone regulations awareness", "Advanced coding skills"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 8,
    name: "DIY Robotic Kits",
    icon: FaRobot,
    tagline: "Snap-fit magnetic blocks for creative robotics",
    idealFor: "DIY Robotics | Logic Circuits | Innovation Challenges",
    features: [
      "Magnetic snap-fit blocks with in-built logic",
      "Smart blocks: motion, sensors, logic, output",
      "No programming required for basic models"
    ],
    useCases: ["Logic-based bots", "Home automation models", "Creative tinkering projects"],
    outcomes: ["Tinkering mindset", "Block-based innovation", "Logical thinking"],
    color: "from-cyan-500 to-blue-500"
  }
];

export default function Kits() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" 
            alt="Robotics Kits"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Robotics & STEAM Kits</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive range of educational kits designed to inspire curiosity, build innovation, and enhance 21st-century skills
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kits Showcase */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-12">
          {KITS.map((kit, idx) => {
            const Icon = kit.icon;
            return (
              <motion.div
                key={kit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 md:p-10 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${kit.color} text-white`}>
                    <Icon className="text-5xl" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">{kit.name}</h2>
                    <p className="text-lg text-gray-600 mb-2">{kit.tagline}</p>
                    <p className="text-sm text-blue-600 font-semibold">Ideal For: {kit.idealFor}</p>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-[#220b34]">Key Features</h3>
                    <ul className="space-y-2">
                      {kit.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#c11e38] mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-purple-600">Use Cases</h3>
                    <ul className="space-y-2">
                      {kit.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-purple-500">●</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Learning Outcomes</h3>
                  <div className="flex flex-wrap gap-2">
                    {kit.outcomes.map((outcome, i) => (
                      <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className={`px-6 py-3 bg-gradient-to-r ${kit.color} text-white rounded-xl font-semibold shadow hover:shadow-2xl transition-all duration-300 hover:scale-110 relative overflow-hidden group`}
                  >
                    <span className="relative z-10">Request Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3 bg-white border-2 border-gray-300 rounded-xl font-semibold hover:border-[#c11e38] hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get Quote</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-gray-100/50 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Common Outcomes */}
      <section className="bg-gradient-to-r from-[#c11e38]/10 to-[#220b34]/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Outcomes Across All Kits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">21st Century Skills</h3>
              <p className="text-sm text-gray-600">Critical thinking, creativity, collaboration, communication</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow text-center">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="font-bold mb-2">Technical Skills</h3>
              <p className="text-sm text-gray-600">Coding, AI, electronics, design, mechanics</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow text-center">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-bold mb-2">Curriculum Integration</h3>
              <p className="text-sm text-gray-600">Aligns with NEP 2020, CBSE, ICSE, State Boards</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold mb-2">Project-Based Learning</h3>
              <p className="text-sm text-gray-600">Real-world applications & competitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Learning Space?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get in touch to explore our kits and find the perfect solution for your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Schedule a Demo
            </a>
            <a
              href="/programs"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              View Programs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
