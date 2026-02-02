import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const OFFICES = [
  {
    city: "Bangalore",
    address: "JoinBotics Technology Pvt Ltd, Karnataka",
    phones: ["+919986780347", "+916361212260"],
    phoneDisplay: "+91 99867 80347 / +91 63612 12260",
    email: "connect@joinbotics.com"
  },
  {
    city: "Pune",
    address: "JoinBotics Office, Maharashtra",
    phones: ["+919986780347", "+916361212260"],
    phoneDisplay: "+91 99867 80347 / +91 63612 12260",
    email: "connect@joinbotics.com"
  },
  {
    city: "Aurangabad",
    address: "JoinBotics Center, Chh. Sambhaji Nagar, Maharashtra",
    phones: ["+919986780347", "+916361212260"],
    phoneDisplay: "+91 99867 80347 / +91 63612 12260",
    email: "connect@joinbotics.com"
  },
  {
    city: "Ahmedabad",
    address: "JoinBotics Hub, Gujarat",
    phones: ["+919986780347", "+916361212260"],
    phoneDisplay: "+91 99867 80347 / +91 63612 12260",
    email: "connect@joinbotics.com"
  }
];

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => {
          setSubmitted(false);
        }, 4000);
      } else {
        setError(result.error || "Failed to send message");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection and try again.");
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in learning more about JoinBotics programs.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" 
            alt="Get in Touch"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions? We're here to help you transform your learning journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-lg bg-green-50 border border-green-200 p-6 text-center"
              >
                <div className="text-5xl mb-3">✓</div>
                <div className="text-[#220b34] font-semibold">Message Sent Successfully!</div>
                <p className="text-sm text-gray-600 mt-2">We'll get back to you soon. Check your email for confirmation.</p>
              </motion.div>
            ) : error ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-lg bg-red-50 border border-red-200 p-6 text-center"
              >
                <div className="text-5xl mb-3">✕</div>
                <div className="text-red-600 font-semibold">Failed to Send</div>
                <p className="text-sm text-red-500 mt-2">{error}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Inquiry Type</label>
                  <select
                    {...register("inquiryType")}
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  >
                    <option value="">Select...</option>
                    <option value="program">Program Inquiry</option>
                    <option value="school">School Partnership</option>
                    <option value="demo">Request Demo</option>
                    <option value="kit">Kit Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    placeholder="Tell us how we can help you..."
                    className="w-full rounded-lg border border-gray-300 p-3 h-32 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white font-semibold py-4 rounded-lg hover:shadow-2xl hover:shadow-[#c11e38]/50 transition-all duration-300 hover:scale-[1.02] hover:from-[#d42847] hover:to-[#2d0e42] relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </form>
            )}
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* WhatsApp CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white p-8 shadow-lg hover:shadow-green-500/50 transition-all">
              <FaWhatsapp className="text-5xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Chat with us on WhatsApp</h3>
              <p className="mb-6 text-white/90">Get instant responses to your queries</p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 bg-white text-green-600 rounded-lg font-semibold shadow hover:shadow-lg transition-all hover:scale-105"
              >
                Open WhatsApp Chat
              </button>
            </div>

            {/* Contact Info */}
            <div className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-blue-600 text-xl mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@joinbotics.com" className="text-blue-600 hover:underline">
                      info@joinbotics.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-blue-600 text-xl mt-1" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Offices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our locations across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICES.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <FaMapMarkerAlt className="text-3xl text-[#220b34] mb-3" />
                <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <p className="flex items-center gap-2">
                    <FaPhone className="text-blue-500 flex-shrink-0" />
                    <div className="flex gap-2">
                      <a href={`tel:${office.phones[0]}`} className="hover:text-blue-600 transition">+91 99867 80347</a>
                      <span>/</span>
                      <a href={`tel:${office.phones[1]}`} className="hover:text-blue-600 transition">+91 63612 12260</a>
                    </div>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-500 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-blue-600 transition">{office.email}</a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124423.7567!2d77.5!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="JoinBotics Locations"
            className="w-full"
          />
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on courses, events, and tech trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 outline-none focus:ring-4 focus:ring-white/30 transition"
              />
              <button className="px-8 py-4 bg-white text-[#c11e38] rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              Join 10,000+ educators, students, and parents receiving our monthly updates
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
