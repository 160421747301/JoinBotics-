import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaSchool, FaBuilding, FaUserGraduate, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

const TABS = [
  { id: "technoTamersLab", label: "Techno Tamers Lab", icon: FaSchool },
  { id: "activityCenter", label: "Activity Center", icon: FaUserGraduate },
  { id: "college", label: "College", icon: FaBuilding },
  { id: "corporateTraining", label: "Corporate Training", icon: FaLaptopCode },
];

const CONTENT = {
  technoTamersLab: {
    title: "Empowering Schools with Future-Ready Tech Labs",
    subtitle: "Complete STEAM education solutions for K-12 schools",
    services: [
      {
        title: "Techno Tamer Lab Setup",
        items: [
          "State-of-the-art Robotics, AI, and Coding labs for K-12",
          "Turnkey solutions from planning to execution",
          "Hardware and software integration"
        ]
      },
      {
        title: "Curriculum Integration",
        items: [
          "Age-appropriate, NEP-aligned STEAM & Robotics syllabus",
          "Structured modules from Grade 1 to 10",
          "Covers Robotics, Coding, AI, IoT, Drones & 3D Printing"
        ]
      },
      {
        title: "Teacher Training & Certification",
        items: [
          "Well-Trained Faculties by JoinBotics experts",
          "Expert JB-certified trainers conduct all sessions",
          "Hands-on practical training for school teachers",
          "Certification programs & professional development",
          "Transform educators into certified 21st-century tech mentors"
        ]
      },
      {
        title: "Annual Maintenance & Support",
        items: [
          "Hardware and software support",
          "Regular upgrades and troubleshooting",
          "Dedicated support team"
        ]
      }
    ]
  },
  college: {
    title: "Advanced Tech Education for Higher Learning",
    subtitle: "Bringing industry-relevant programs to colleges and skill hubs",
    services: [
      {
        title: "Advanced Lab Setup",
        items: [
          "Robotics, AI/ML, IoT, Embedded Systems labs",
          "Custom labs for diploma, degree & skill-based learning",
          "Industry-standard equipment and tools"
        ]
      },
      {
        title: "Faculty Development Programs (FDPs)",
        items: [
          "Technical skill enhancement for instructors",
          "Hands-on sessions on latest tools & platforms",
          "Continuous professional development"
        ]
      },
      {
        title: "Skill Development Workshops",
        items: [
          "Short-term programs on trending technologies",
          "NSDC & Skill India-aligned modules",
          "Industry collaboration opportunities"
        ]
      },
      {
        title: "Industry Collaboration",
        items: [
          "Industry-recognized certifications",
          "Real-world project integration",
          "Placement assistance programs"
        ]
      }
    ]
  },
  activityCenter: {
    title: "Explore, Learn, and Innovate",
    subtitle: "Programs designed for young minds to discover their potential",
    services: [
      {
        title: "Online/Offline Courses",
        items: [
          "Robotics, Coding (Block/Python), AI & Drones",
          "Structured modules for ages 7-16",
          "Live interactive sessions with mentors"
        ]
      },
      {
        title: "Holiday Camps & Workshops",
        items: [
          "Themed camps: Robo-Fun Factory, AI Explorers, Drone Champs",
          "Engaging activities & take-home projects",
          "Certificate of participation"
        ]
      },
      {
        title: "Tech Talent Nurturing",
        items: [
          "Inter-school tech challenges",
          "Portfolio building & certifications",
          "Competition preparation and mentorship"
        ]
      },
      {
        title: "Junior Certifications",
        items: [
          "AI & Robotics certification at each level",
          "Progressive skill development tracking",
          "Recognition of achievements"
        ]
      }
    ]
  },
  corporateTraining: {
    title: "Project-Based Learning for Engineers",
    subtitle: "Industry-ready skills through hands-on experience",
    services: [
      {
        title: "Internship Programs (1-6 months)",
        items: [
          "Domains: Python, AI & ML, Embedded Systems, IoT, Computer Vision, Drones, Full-Stack Web Development",
          "Duration: 1-6 months - fully customizable",
          "Includes: Live projects, mentor guidance, weekly reports",
          "Certification upon completion",
          "Soft skill training & industry exposure"
        ]
      },
      {
        title: "Final Year Project Guidance",
        items: [
          "100% project-based learning with real-world problems",
          "Domains: AI Chatbots, Smart Agriculture, Home Automation, Face Recognition, IoT Health Monitoring",
          "Full documentation support and viva preparation",
          "Expert mentorship throughout the project lifecycle"
        ]
      },
      {
        title: "Hands-on Workshops & Bootcamps",
        items: [
          "Embedded C & Microcontrollers",
          "Python for AI, Arduino & Raspberry Pi",
          "Robotics with ROS, IoT with NodeMCU/ESP32",
          "Drone Technology with hands-on training",
          "Industry-recognized certifications"
        ]
      },
      {
        title: "Certification Courses",
        items: [
          "Python for Engineers",
          "AI-ML Foundation Program",
          "PCB Design & Fabrication",
          "Industrial Automation (PLC & SCADA)"
        ]
      },
      {
        title: "Job-Oriented Programs",
        items: [
          "Resume building & LinkedIn profile optimization",
          "Placement support & interview preparation",
          "Capstone projects for portfolio building",
          "Industry networking opportunities"
        ]
      },
      {
        title: "Tech Competitions & Hackathons",
        items: [
          "Team participation under JoinBotics mentorship",
          "Ideation to prototype development support",
          "Competition preparation and guidance"
        ]
      }
    ]
  }
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState("technoTamersLab");

  const currentContent = CONTENT[activeTab];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80" 
            alt="Educational Programs"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Explore Our Programs</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Techno Tamers Lab • Activity Center • College • Corporate Training
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white shadow-lg scale-105"
                    : "bg-white/60 backdrop-blur-md border border-white/30 text-gray-700 hover:shadow-lg hover:scale-105"
                }`}
              >
                <Icon />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{currentContent.title}</h2>
          <p className="text-lg text-gray-600 mb-8">{currentContent.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentContent.services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-xl bg-white border border-gray-200 p-6 shadow hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-[#220b34]">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <FaCheckCircle className="text-[#c11e38] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </section>

      {/* Additional Info */}
      <section className="bg-gradient-to-r from-[#c11e38]/10 to-[#220b34]/10 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose JoinBotics Programs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">NEP 2020 Aligned</h3>
              <p className="text-sm text-gray-600">Curriculum designed to meet national education standards</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="text-4xl mb-3">👨‍🏫</div>
              <h3 className="font-bold mb-2">Expert Trainers</h3>
              <p className="text-sm text-gray-600">Industry professionals with years of experience</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold mb-2">Proven Results</h3>
              <p className="text-sm text-gray-600">100,000+ students trained with measurable outcomes</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
