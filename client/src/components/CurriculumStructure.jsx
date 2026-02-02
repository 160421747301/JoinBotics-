import { FaRobot, FaBrain, FaCode, FaNetworkWired, FaVrCardboard, FaCube, FaShieldAlt, FaPlane } from "react-icons/fa";

const AGE_PATHWAYS = [
  {
    id: 1,
    grades: "Grade 1-2",
    title: "Tinker & Play",
    desc: "Introduction to basic STEM concepts through fun activities and simple projects.",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    grades: "Grade 3-5",
    title: "Build & Explore",
    desc: "Hands-on building with robotics kits, basic coding with block programming.",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 3,
    grades: "Grade 6-8",
    title: "Innovate & Create",
    desc: "Advanced robotics, Python programming, AI concepts, and IoT projects.",
    color: "from-[#c11e38] to-[#220b34]",
  },
  {
    id: 4,
    grades: "Grade 9+",
    title: "Future Tech Leaders",
    desc: "AI/ML, Drone tech, VR/AR, Blockchain, and competition-level projects.",
    color: "from-purple-500 to-violet-500",
  },
];

const TECH_TOPICS = [
  { id: 1, name: "Robotics", icon: FaRobot, color: "text-[#220b34]" },
  { id: 2, name: "Artificial Intelligence", icon: FaBrain, color: "text-purple-600" },
  { id: 3, name: "Coding", icon: FaCode, color: "text-[#c11e38]" },
  { id: 4, name: "IoT", icon: FaNetworkWired, color: "text-cyan-600" },
  { id: 5, name: "VR/AR", icon: FaVrCardboard, color: "text-pink-600" },
  { id: 6, name: "Blockchain", icon: FaCube, color: "text-amber-600" },
  { id: 7, name: "Cybersecurity", icon: FaShieldAlt, color: "text-red-600" },
  { id: 8, name: "Drones", icon: FaPlane, color: "text-indigo-600" },
];

export default function CurriculumStructure() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12" aria-labelledby="curriculum-heading">
      <div className="text-center mb-12">
        <p className="text-sm font-medium rounded-full px-3 py-1 bg-white/60 backdrop-blur-md inline-block text-gray-700 border-2 border-white/40 shadow-sm">
          CURRICULUM
        </p>
        <h2 id="curriculum-heading" className="mt-4 text-3xl md:text-4xl font-bold">
          Age-Based Learning Pathways
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Structured programs designed to match every student's learning stage
        </p>
      </div>

      {/* Age-Based Pathways */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {AGE_PATHWAYS.map((pathway) => (
          <div
            key={pathway.id}
            className="group relative rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${pathway.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
            
            <div className="relative z-10">
              <div className="text-xs font-bold text-[#220b34] uppercase tracking-wide mb-2">
                {pathway.grades}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pathway.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {pathway.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Topics */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold">Technology Topics We Cover</h3>
        <p className="mt-2 text-gray-600">Comprehensive coverage of cutting-edge technologies</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {TECH_TOPICS.map((topic) => {
          const Icon = topic.icon;
          return (
            <div
              key={topic.id}
              className="group rounded-xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow hover:shadow-lg transition-all text-center hover:scale-105"
            >
              <Icon className={`${topic.color} text-4xl mx-auto mb-3 group-hover:scale-110 transition-transform`} />
              <div className="text-sm font-semibold text-gray-900">{topic.name}</div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <a
          href="/programs"
          className="inline-block rounded-xl px-8 py-4 bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-[#c11e38]/50 transition-all duration-300 hover:scale-110 hover:from-[#d42847] hover:to-[#2d0e42] relative overflow-hidden group"
        >
          <span className="relative z-10">Explore Our Programs</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </a>
      </div>
    </section>
  );
}
