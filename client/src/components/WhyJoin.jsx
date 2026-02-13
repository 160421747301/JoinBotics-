import { FaGraduationCap, FaCogs, FaUserTie, FaHandshake, FaCertificate, FaRobot } from "react-icons/fa";

const ITEMS = [
  {
    key: "steam",
    title: "Comprehensive STEAM Curriculum",
    details: [
      "Aligned with CBSE, ICSE, IB & State Boards",
      "Covers Robotics, Coding, AI & IoT",
      "Designed for all learner levels",
      "Future ready academic integration"
    ],
    icon: FaGraduationCap,
  },
  {
    key: "handson",
    title: "Hands On, Project Based Learning",
    details: [
      "Build real robots & prototypes",
      "Code using Python, C & Scratch",
      "Create AI/IoT automation projects",
      "Participate in tech fairs & events"
    ],
    icon: FaCogs,
  },
  {
    key: "mentors",
    title: "Expert Mentors & Industry Guidance",
    details: [
      "Trainers skilled in Robotics & AI",
      "Backed by engineering expertise",
      "Practical, learn by doing support",
      "High quality program delivery"
    ],
    icon: FaUserTie,
  },
  {
    key: "trusted",
    title: "Trusted by Institutions",
    details: [
      "120+ partnered schools",
      "100+ workshops completed",
      "Adopted by schools & colleges",
      "Proven scalable implementation"
    ],
    icon: FaHandshake,
  },
  {
    key: "certification",
    title: "AI/ML Certification Pathways",
    details: [
      "AI CERTs® certification partner",
      "Validated AI/ML skill tracks",
      "Supports portfolio development",
      "Enables institution wide upskilling"
    ],
    icon: FaCertificate,
  },
  {
    key: "labsetup",
    title: "Complete Lab & Program Setup",
    details: [
      "Robotics/AI/IoT lab design & setup",
      "Faculty training & enablement",
      "Curriculum planning support",
      "Smooth end to end execution"
    ],
    icon: FaRobot,
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
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-8" aria-labelledby="why-join-heading">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <div>
            <h2 id="why-join-heading" className="text-3xl font-bold text-center">Why JoinBotics is The Right Choice for You?</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-6">
          {ITEMS.map((item, i) => {
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
                    
                    {item.details && item.details.length > 0 && (
                      <ul className="mt-4 space-y-2 text-sm text-gray-700 group-hover:text-white/90 transition-colors">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-1.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
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
  

