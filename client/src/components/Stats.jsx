import { useState, useEffect, useRef } from "react";
// Animated Counter component
function Counter({ value, start = false }) {
  // If value isn't numeric (e.g. "Many"), just render it directly
  const match = String(value).match(/([\d,]+)(\+|\w+)?/);
  if (!match) return <span>{value}</span>;

  const target = parseInt(match[1].replace(/,/g, ""), 10);
  const suffix = match[2] ? match[2] : "";
  const [count, setCount] = useState(0);
  const raf = useRef();

  useEffect(() => {
    if (!start) return; // only run when start is true

    let startVal = 0;
    let duration = 1200; // ms
    let startTime = null;
    function animateCounter(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // Ease out: fast at start, slow at end
      const eased = 1 - Math.pow(1 - progress, 2);
      const current = Math.floor(eased * (target - startVal) + startVal);
      setCount(current);
      if (progress < 1) {
        raf.current = requestAnimationFrame(animateCounter);
      } else {
        setCount(target);
      }
    }
    raf.current = requestAnimationFrame(animateCounter);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [target, start]);

  // Format with commas
  function formatNumber(n) {
    return n.toLocaleString();
  }

  return (
    <span>
      {formatNumber(count)}{suffix}
    </span>
  );
}
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Stats() {
  const items = [
    { 
      id: 1, 
      value: "10+", 
      label: "Programs Offered", 
      desc: "Comprehensive STEM, Robotics, AI, and skill development programs designed for schools, colleges, and individual learners."
    },
    { 
      id: 2, 
      value: "50+", 
      label: "Partner Schools", 
      desc: "Partnering with institutions across India to build hands on STEM, Robotics & AI ecosystems."
    },
    { 
      id: 3, 
      value: "100K+", 
      label: "Students Enriched", 
      desc: "Learners from Grade 1 to Engineering trained in Robotics, Coding, AI, IoT & Drones through real, project based experiences."
    },
    { 
      id: 4, 
      value: "4+", 
      label: "Recognitions", 
      desc: "National and international acknowledgements celebrating our contribution to STEM innovation and future skills education."
    },
  ];

  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-6xl px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Driving Meaningful Change Through Future Ready Learning</h2>
        <p className="mt-2 text-gray-600">Our work speaks through the outcomes we create. Here's how Join Botics is reshaping STEM, Robotics & AI education across India.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div 
            key={it.id} 
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 text-center hover:shadow-lg transition-all"
          >
            <div className="text-4xl font-extrabold text-blue-600">
              <Counter value={it.value} start={started} />
            </div>
            <div className="mt-2 text-lg font-semibold text-gray-900">{it.label}</div>
            <div className="mt-1 text-xs text-gray-600">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
