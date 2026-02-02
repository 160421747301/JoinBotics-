import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

export default function TopCTABar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white py-2 px-4 shadow-lg"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 text-sm md:text-base">
          <span className="hidden sm:inline">🎓</span>
          <span className="font-medium">Transform Learning with Robotics & AI</span>
        </div>
        
        <div className="flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden md:flex items-center gap-2 text-sm hover:underline"
          >
            <FaPhone className="text-xs" />
            <span>+91 98765 43210</span>
          </a>
          
          <a
            href="/contact"
            className="px-4 py-1.5 bg-white text-blue-600 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Request Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
