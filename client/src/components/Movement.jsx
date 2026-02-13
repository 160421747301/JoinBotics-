import { FaRobot, FaCertificate, FaMicrochip, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Movement() {
  const features = [
    { text: "Build Robots, Code Systems, Create Solutions", icon: FaRobot },
    { text: "AI/ML Certifications for Future Careers", icon: FaCertificate },
    { text: "IoT, Drones, VR & Emerging Tech Included", icon: FaMicrochip },
    { text: "Portfolio, Projects & Competition Support", icon: FaTrophy }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-gradient-to-br from-[#c11e38] via-[#8a1532] to-[#220b34] p-12 text-center text-white shadow-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Future Skills Start with Join Botics
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Join Botics equips every learner with the tools to invent, innovate, and shape the future.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all"
              >
                <Icon className="text-white text-xl flex-shrink-0" />
                <span className="font-medium text-left">{feature.text}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
