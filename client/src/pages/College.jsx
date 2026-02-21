import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";

export default function College() {
  const content = {
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
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80" 
            alt="College Programs"
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
