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
    title: "Empowering Schools with Future‑Ready STEM & AI Labs",
    subtitle: "Complete, NEP‑aligned STEM solutions designed for K‑12 institutions.",
    services: [
      {
        title: "Techno Tamer Lab Setup",
        items: [
          "Robotics, AI & Coding lab setup for schools (K–12)",
          "End‑to‑end execution—from planning to deployment",
          "Hardware + software integration with lab readiness support",
          "Activity planning to enable continuous hands‑on learning"
        ]
      },
      {
        title: "Curriculum Integration",
        items: [
          "NEP‑aligned, age‑appropriate STEAM & Robotics curriculum",
          "Structured learning pathway from Grade 1 onwards",
          "Covers Robotics, Coding, AI/ML, IoT, Drones & 3D Printing",
          "Project‑based modules with tracking and skill outcomes"
        ]
      },
      {
        title: "Teacher Training & Certification",
        items: [
          "Faculty enablement through hands‑on, practical training",
          "Sessions supported by expert mentors and engineers",
          "Certification and professional development pathways",
          "Build educator confidence to deliver STEM year‑round"
        ]
      },
      {
        title: "Annual Maintenance & Support",
        items: [
          "Ongoing hardware and software support for labs",
          "Regular troubleshooting and system upkeep assistance",
          "Dedicated support team for timely resolutions",
          "Program continuity support for events and showcases"
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
    title: "Explore, Learn & Build",
    subtitle: "Programs designed to help learners create with technology through hands-on STEM, Robotics & AI experiences.",
    services: [
      {
        title: "Online / Offline Programs",
        items: [
          "Learn Robotics, Coding & AI through structured modules",
          "Build real projects with guided, hands-on activities",
          "Interactive sessions led by experienced mentors"
        ]
      },
      {
        title: "Camps & Workshops",
        items: [
          "Themed STEM, Robotics, AI & Drone camps for all ages",
          "Engaging activities with fun, take‑home projects",
          "Certificates awarded for participation and completion"
        ]
      },
      {
        title: "Talent Development & Competitions",
        items: [
          "Build strong tech portfolios with real-world projects",
          "Mentorship for competitions, hackathons & showcases",
          "Progressive pathways to strengthen technical skills"
        ]
      },
      {
        title: "Certifications & Progress Tracking",
        items: [
          "STEM, Robotics & AI certification tracks at every level",
          "Systematic skill tracking through assessments & milestones",
          "Recognition of achievements with verified certificates"
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
          "Team participation under Join Botics mentorship",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Program Pathways</h1>
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

      <Footer />
    </main>
  );
}
