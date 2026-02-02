import { FaChalkboardTeacher, FaRocket, FaCertificate, FaCogs, FaRobot, FaLightbulb, FaHandshake } from "react-icons/fa";

const ITEMS = [
  {
    key: "steam",
    title: "Comprehensive STEAM Curriculum",
    desc: "We integrate Science, Technology, Engineering, Arts, and Mathematics (STEAM) into every course. Our curriculum is aligned with NEP 2020 and designed for various age groups — from primary school students to engineering graduates.",
    details: [
      "Robotics & Coding for School Students (Grade 1 to 10)",
      "AI, ML, and IoT for High School & College",
      "Advanced Projects for Diploma/Engineering Students"
    ],
    icon: FaLightbulb,
  },
  {
    key: "instructors",
    title: "Project-Based, Hands-On Learning",
    desc: "Students learn by building and doing, not just watching. We ensure every student:",
    details: [
      "Builds their own working robots",
      "Programs with real code (Python, C, Scratch, Blockly)",
      "Works on real-time AI, IoT, and automation projects",
      "Participates in exhibitions, hackathons, and tech fairs"
    ],
    icon: FaChalkboardTeacher,
  },
  {
    key: "certs",
    title: "Experienced Mentors & Engineers",
    desc: "Our trainers are not just teachers — they are industry professionals, researchers, and certified experts from JoinBotics Technology Pvt Ltd, Bangalore with experience in:",
    details: [
      "Embedded Systems",
      "Robotics Automation",
      "Artificial Intelligence",
      "EdTech innovation"
    ],
    icon: FaRocket,
  },
  {
    key: "partnerships",
    title: "Strong Institutional Partnerships",
    desc: "We collaborate with leading schools, colleges, and activity centers. Our notable partners include:",
    details: [
      "Gaikwad Global School",
      "Riverdale School",
      "Engineering Institutes across India"
    ],
    icon: FaCertificate,
  },
  {
    key: "courses",
    title: "Skill Development with Industry Relevance",
    desc: "We teach students the skills that matter today and tomorrow:",
    details: [
      "Programming (Python, C, Java)",
      "AI & Machine Learning with real datasets",
      "Internet of Things (IoT) using microcontrollers",
      "Drone technology and 3D designing",
      "Augmented & Virtual Reality applications",
      "Blockchain concepts for beginners"
    ],
    note: "More focus on IoT, AI/ML and Blockchain",
    icon: FaCogs,
  },
  {
    key: "projects",
    title: "Certified Programs & Career Support",
    desc: "Students receive certificates and portfolios that boost their academic and professional profiles. We also:",
    details: [
      "Help build real project documentation",
      "Prepare students for national/international competitions",
      "Offer internships and mentorship opportunities"
    ],
    icon: FaRobot,
  },
  {
    key: "custom",
    title: "Custom Solutions for Institutions",
    desc: "Whether you're a school, college, or after-school center, we provide:",
    details: [
      "End-to-end curriculum planning",
      "Faculty training and infrastructure setup",
      "Robotics/AI/Coding-lab design and execution",
      "Annual tech events and exhibitions"
    ],
    icon: FaHandshake,
  },
];

const ICON_COLORS = [
  '#c11e38', // crimson
  '#220b34', // dark purple
  '#f97316', // orange
  '#10b981', // teal
  '#3b82f6', // blue
  '#8b5cf6', // violet
  '#ef4444', // bright red
];

export default function WhyJoin() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8" aria-labelledby="why-join-heading">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium rounded-full px-3 py-1 bg-white/60 backdrop-blur-md inline-block text-gray-700 border-2 border-white/40 shadow-sm">WHY CHOOSE US</p>
            <h2 id="why-join-heading" className="mt-4 text-3xl font-bold">Why JoinBotics is The Right Choice for You?</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-6">
          {Array.from({ length: 9 }).map((_, i) => {
            const item = ITEMS[i];
            if (!item) return <div key={i} />;

            const Icon = item.icon;

            const color = ICON_COLORS[i] || 'currentColor';

            return (
              <div
                key={item.key}
                className={
                  "relative group rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow transition-all hover:scale-[1.02] flex flex-col"
                }
              >
                <div className="flex items-start gap-4 relative z-10 pb-2">
                  <div style={{ ['--icon-color']: color }} className="h-12 w-12 rounded-full flex items-center justify-center text-2xl text-[var(--icon-color)] group-hover:text-white transition-colors flex-shrink-0">
                    <Icon />
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm group-hover:text-white transition-colors">{item.desc}</p>
                    
                    {item.details && item.details.length > 0 && (
                      <ul className="mt-3 space-y-1 text-xs text-gray-600 group-hover:text-white/90 transition-colors">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-1.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {item.note && (
                      <p className="mt-2 text-xs italic text-gray-500 group-hover:text-white/80 transition-colors">
                        Note: {item.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* overlay effect to adopt the purple card style on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity z-0" aria-hidden>
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#220b34] to-[#3d1454]" />
                </div>

                {/* CTA placed in normal flow to avoid overlap */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
  

