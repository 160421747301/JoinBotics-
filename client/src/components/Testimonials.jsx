import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Principal",
    school: "Gaikwad Global School, Chh. Sambhaji Nagar",
    quote: "JoinBotics has transformed our STEM education approach. Students are now actively engaged in hands-on learning, and we've seen remarkable improvement in their problem-solving skills.",
    image: null,
  },
  {
    id: 2,
    name: "Mrs. Priya Sharma",
    role: "Science Teacher",
    school: "Riverdale School",
    quote: "The Techno Tamer's Lab has been a game-changer. Our students went from zero robotics knowledge to building AI-powered projects in just 3 months. The support from JoinBotics trainers is exceptional.",
    image: null,
  },
  {
    id: 3,
    name: "Aarav Patel",
    role: "Student, Grade 9",
    school: "Gaikwad Global School",
    quote: "I built my first line-following robot and learned Python programming through JoinBotics. Now I'm participating in national robotics competitions and it's amazing!",
    image: null,
  },
  {
    id: 4,
    name: "Prof. Anita Deshmukh",
    role: "HOD, Computer Science",
    school: "Engineering College, Pune",
    quote: "The industry-relevant curriculum and hands-on approach of JoinBotics internship programs have significantly improved our students' placement readiness.",
    image: null,
  },
  {
    id: 5,
    name: "Sneha Reddy",
    role: "Student, Engineering",
    school: "Bangalore",
    quote: "The 6-month internship with JoinBotics helped me work on real IoT and AI projects. I gained practical skills that directly helped me land my dream job.",
    image: null,
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

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12" aria-labelledby="testimonials-heading">
      <div className="text-center mb-8">
        <p className="text-sm font-medium rounded-full px-3 py-1 bg-white/60 backdrop-blur-md inline-block text-gray-700 border-2 border-white/40 shadow-sm">
          TESTIMONIALS
        </p>
        <h2 id="testimonials-heading" className="mt-4 text-3xl font-bold">
          What People Say About Us
        </h2>
      </div>

      <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 md:p-12 shadow-lg overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 z-10 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:scale-110"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="text-gray-800" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 z-10 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:scale-110"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="text-gray-800" />
        </button>

        {/* Testimonial Content */}
        <div className="w-full px-8 md:px-16 py-8">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="text-center"
            >
              <FaQuoteLeft className="text-4xl text-[#220b34] mx-auto mb-4" />
              
              <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed mb-6">
                "{TESTIMONIALS[current].quote}"
              </p>

              <div className="mt-6">
                <div className="font-bold text-gray-900 text-lg">
                  {TESTIMONIALS[current].name}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {TESTIMONIALS[current].role}
                </div>
                <div className="text-sm text-[#220b34] font-medium mt-1">
                  {TESTIMONIALS[current].school}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === current ? "w-8 bg-blue-600" : "w-2 bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
