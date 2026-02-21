import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";

export default function TechnoTamersLab() {
  const content = {
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
          "Maximize lab usage with technical & pedagogical help"
        ]
      },
      {
        title: "Competition & Event Support",
        items: [
          "National & international competition mentorship",
          "Science fair and project exhibition support",
          "Tech fest organization and activity curation",
          "Student portfolios and project showcase platforms"
        ]
      },
      {
        title: "Student Assessment & Tracking",
        items: [
          "Systematic skill assessments with progress tracking",
          "Individual and cohort-level performance dashboards",
          "Certification at various milestones for recognition",
          "Parent and admin reporting via LMS integration"
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80" 
            alt="Techno Tamers Lab"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{content.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all"
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
      </section>

      <Footer />
    </main>
  );
}
