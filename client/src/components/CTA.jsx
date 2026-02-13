import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white p-12 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Bring Future‑Ready Learning to Your Campus?</h2>
            <p className="text-xl text-white/90">Empower your students with industry‑aligned STEM, Robotics & AI programs.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact" 
              className="rounded-xl bg-white text-[#c11e38] px-8 py-4 font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 whitespace-nowrap"
            >
              Partner with Us
            </a>
            <a 
              href="/contact" 
              className="rounded-xl border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-[#c11e38] transition-all whitespace-nowrap"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
