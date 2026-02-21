import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaSchool, FaBuilding, FaUserGraduate, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PROGRAM_CARDS = [
  {
    id: "technoTamersLab",
    title: "Techno Tamers Lab",
    subtitle: "For Schools (K-12)",
    description: "Complete, NEP‑aligned STEM lab solutions with curriculum, teacher training, and ongoing support.",
    icon: FaSchool,
    color: "from-blue-500 to-blue-700",
    link: "/programs/techno-tamers-lab"
  },
  {
    id: "activityCenter",
    title: "Activity Center",
    subtitle: "For Individual Learners",
    description: "Hands-on STEM, Robotics & AI programs, workshops, camps, and certifications for all ages.",
    icon: FaUserGraduate,
    color: "from-purple-500 to-purple-700",
    link: "/programs/activity-center"
  },
  {
    id: "college",
    title: "College Programs",
    subtitle: "For Higher Education",
    description: "Advanced labs, faculty development, skill workshops, and industry collaborations for colleges.",
    icon: FaBuilding,
    color: "from-green-500 to-green-700",
    link: "/programs/college"
  },
  {
    id: "corporateTraining",
    title: "Corporate Training",
    subtitle: "For Professionals & Engineers",
    description: "Internships, project guidance, workshops, certifications, and job-oriented training programs.",
    icon: FaLaptopCode,
    color: "from-orange-500 to-orange-700",
    link: "/programs/corporate-training"
  }
];

export default function Programs() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80" 
            alt="Educational Programs"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Program Pathways</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the program that best fits your learning journey—from schools to professionals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAM_CARDS.map((program, idx) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Link
                  to={program.link}
                  className="block h-full rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 group"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${program.color} text-white mb-6`}>
                    <Icon className="text-3xl" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">{program.title}</h2>
                  <p className="text-sm font-semibold text-[#c11e38] mb-4">{program.subtitle}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="flex items-center gap-2 text-[#220b34] font-semibold group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center rounded-2xl bg-gradient-to-r from-[#c11e38] to-[#220b34] p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Not sure which program is right for you?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Our team can help you choose the perfect learning path based on your goals and requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#220b34] rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Contact Us for Guidance
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
