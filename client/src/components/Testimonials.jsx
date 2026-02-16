import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ms. Madhuri Sharma",
    role: "Principal",
    school: "Bangalore Bhavan Public School (BBPS)",
    quote: "Partnering with Join Botics has transformed how our students learn STEM. Their hands on approach helped our learners confidently explain and demonstrate their robotics and STEM projects during our Scholars' Showcase. The level of creativity, curiosity, and problem solving we witness now is remarkable.",
    image: null,
    color: "#c11e38",
  },
  {
    id: 2,
    name: "Mr. Aryan",
    role: "Student",
    school: "Bangalore International Academy, Jayanagar",
    quote: "At Join Botics, I don't just watch technology — I build it. Working on robotics and AI projects has helped me think like an engineer and turn ideas into working prototypes. Every session pushes me to explore more and innovate fearlessly.",
    image: null,
    color: "#3b82f6",
  },
  {
    id: 3,
    name: "Ms. Varsha",
    role: "Parent",
    school: "SVR Chinmaya School",
    quote: "Our students were able to design a fully functional Voting Booth Security System using sensors — something we never imagined they could build at this age. Join Botics made complex concepts simple, practical, and exciting, helping students connect technology with real world problems.",
    image: null,
    color: "#10b981",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="testimonials-heading">
      <div className="text-center mb-12">
        <h2 id="testimonials-heading" className="text-4xl font-bold bg-gradient-to-r from-[#c11e38] to-[#220b34] bg-clip-text text-transparent">
          Success Stories That Inspire
        </h2>
        <p className="mt-3 text-gray-600 text-lg">Hear from our community of learners, educators, and innovators</p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-4 rounded-full bg-gradient-to-r from-[#c11e38] to-[#8a1532] text-white shadow-2xl transition-all hover:scale-110 hover:shadow-[#c11e38]/50"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-4 rounded-full bg-gradient-to-r from-[#c11e38] to-[#8a1532] text-white shadow-2xl transition-all hover:scale-110 hover:shadow-[#c11e38]/50"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="text-xl" />
        </button>

        {/* Testimonial Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-white to-gray-50 p-12 md:p-16 shadow-2xl overflow-hidden border border-gray-100">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#c11e38]/10 to-transparent rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#220b34]/10 to-transparent rounded-full blur-3xl -z-0" />

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="relative z-10"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div
                  style={{ backgroundColor: TESTIMONIALS[current].color }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg rotate-3 transform transition-transform hover:rotate-6"
                >
                  <FaQuoteRight className="text-white text-3xl" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                "{TESTIMONIALS[current].quote}"
              </p>

              {/* Profile Section */}
              <div className="flex flex-col items-center gap-4">
                {/* Avatar with Initials */}
                <div
                  style={{ backgroundColor: TESTIMONIALS[current].color }}
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl border-4 border-white"
                >
                  {getInitials(TESTIMONIALS[current].name)}
                </div>

                {/* Name and Role */}
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-xl mb-1">
                    {TESTIMONIALS[current].name}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {TESTIMONIALS[current].role}
                  </div>
                  <div
                    style={{ color: TESTIMONIALS[current].color }}
                    className="text-sm font-semibold"
                  >
                    {TESTIMONIALS[current].school}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "w-10 bg-gradient-to-r from-[#c11e38] to-[#220b34]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
