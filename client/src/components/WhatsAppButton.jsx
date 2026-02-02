import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Replace with your actual WhatsApp number (use international format without + or spaces)
  const whatsappNumber = "919986780347"; // JoinBotics primary number
  const defaultMessage = "Hi! I'm interested in learning more about JoinBotics programs.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-green-500/50 transition-all group"
        aria-label="Contact us on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="text-2xl" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <FaWhatsapp className="text-2xl" />
              {/* Pulse animation */}
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Quick Action Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-72"
          >
            <div className="mb-4">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <FaWhatsapp className="text-green-500 text-xl" />
                Chat with us!
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Have questions? We're here to help!
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left px-4 py-3 rounded-lg bg-green-50 hover:bg-green-100 border border-green-200 transition-colors"
              >
                <div className="font-semibold text-gray-900 text-sm">Request Demo</div>
                <div className="text-xs text-gray-600">Book a free demo class</div>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left px-4 py-3 rounded-lg bg-green-50 hover:bg-green-100 border border-green-200 transition-colors"
              >
                <div className="font-semibold text-gray-900 text-sm">Program Inquiry</div>
                <div className="text-xs text-gray-600">Ask about our courses</div>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left px-4 py-3 rounded-lg bg-green-50 hover:bg-green-100 border border-green-200 transition-colors"
              >
                <div className="font-semibold text-gray-900 text-sm">School Partnership</div>
                <div className="text-xs text-gray-600">Partner with JoinBotics</div>
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={handleWhatsAppClick}
                className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Open WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
