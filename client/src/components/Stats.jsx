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
      value: "50+", 
      label: "Schools Empowered", 
      desc: "Partnered schools across Maharashtra, Karnataka, and Gujarat",
      details: [
        "ATL-equipped schools guided for setup, training, and curriculum alignment",
        "Schools range from CBSE, ICSE, State Boards, and international curriculums",
        "Regular Tech Week & Robo Fair organized in collaboration with partner schools"
      ]
    },
    { 
      id: 2, 
      value: "100,000+", 
      label: "Students Trained", 
      desc: "In Robotics, Coding, AI, and Drones from Grade 1 to Engineering",
      details: [
        "Programs available for Grade 1 to Engineering Level",
        "Hands-on Practical Sessions in each course",
        "Live project submission for every enrolled batch (Optional)"
      ]
    },
    { 
      id: 3, 
      value: "1,200+", 
      label: "Innovative Projects", 
      desc: "Student projects in IoT, AI, Robotics & Automation",
      details: [
        "Smart Traffic Systems using IoT",
        "Face Recognition & Security Robots",
        "Automatic Plant Irrigation using Sensors",
        "Voice-Controlled Home Automation",
        "Python-based Chatbots & AI Assistants",
        "Project Expo Participation"
      ]
    },
    { 
      id: 4, 
      value: "Many", 
      label: "ATL Success & Collaboration", 
      desc: "ATL Setup & Mentorship with custom activity planners",
      details: [
        "ATL Teachers' Training Programs conducted",
        "Custom ATL Activity Planner run/designed by JoinBotics",
        "Cross-disciplinary Integration: Merged ATL projects with school curriculum in Science, Math & Social Studies"
      ]
    },
    { 
      id: 5, 
      value: "4+", 
      label: "Awards & Recognition", 
      desc: "National and International recognition for excellence in STEAM education",
      details: [
        "9th Global Education & Skills Summit 2024 (Delhi, India)",
        "Global Innovation Exhibition (Shanghai, China)",
        "Best STEM Education Partner (Maharashtra & Karnataka)",
        "National-Level ATL Recognition"
      ]
    },
  ];

  const [expandedId, setExpandedId] = useState(null);
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
        <p className="text-sm font-medium rounded-full px-3 py-1 bg-white/60 backdrop-blur-md inline-block text-gray-700 border-2 border-white/40 shadow-sm">OUR IMPACT</p>
        <h2 className="mt-4 text-3xl font-bold">Transforming Education with Real Numbers</h2>
        <p className="mt-2 text-gray-600">Our work speaks for itself. Here's how JoinBotics is transforming education.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
            
            {it.details && it.details.length > 0 && (
              <>
                <button
                  onClick={() => setExpandedId(expandedId === it.id ? null : it.id)}
                  className="mt-3 text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1 mx-auto"
                >
                  {expandedId === it.id ? (
                    <>
                      Less Details <FaChevronUp className="text-[10px]" />
                    </>
                  ) : (
                    <>
                      More Details <FaChevronDown className="text-[10px]" />
                    </>
                  )}
                </button>
                
                {expandedId === it.id && (
                  <ul className="mt-3 space-y-1.5 text-left text-[11px] text-gray-700">
                    {it.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-1.5 text-blue-600 font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
