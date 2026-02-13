import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaAward, FaCheckCircle, FaHandshake, FaLightbulb } from "react-icons/fa";

const TIMELINE = [
  { year: "2019", milestone: "Founded with a vision to bring robotics to every student" },
  { year: "2020", milestone: "Launched first school partnerships and STEAM curriculum" },
  { year: "2021", milestone: "Expanded to 20+ schools, trained 5,000+ students" },
  { year: "2022", milestone: "Introduced ATL setup services and advanced AI/ML programs" },
  { year: "2023", milestone: "Reached 50+ school partnerships, 50,000+ students trained" },
  { year: "2024", milestone: "Awarded at 9th Global Education Summit, expanded to multiple states" },
  { year: "2025", milestone: "Achieved 100,000+ students milestone, launched engineering programs" },
];

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Mr. Javed Dodamani",
    role: "Founder & CEO",
    quote: "Every child is a creator — our job is to unlock their tools.",
    experience: "15+ years in EdTech and Robotics Innovation",
  },
  {
    id: 2,
    name: "Mr. Balaji",
    role: "Director",
    quote: "Robotics isn't just wires and code — it's imagination made real.",
    experience: "20+ years in Education Technology",
  },
  {
    id: 3,
    name: "Academic Head",
    role: "Head of Curriculum",
    quote: "Designing tomorrow's learning experiences today.",
    experience: "Curriculum Design & STEAM Education",
  },
  {
    id: 4,
    name: "Lead AI Developer & Trainer",
    role: "AI/ML Specialist",
    quote: "Teaching machines to learn, teaching students to innovate.",
    experience: "AI/ML Development & Training",
  },
  {
    id: 5,
    name: "STEAM Program Coordinator",
    role: "Outreach & Programs",
    quote: "Bringing STEAM education to every corner of India.",
    experience: "Program Management & School Partnerships",
  },
  {
    id: 6,
    name: "Social Media Developer",
    role: "Digital Marketing",
    quote: "Sharing innovation stories, one post at a time.",
    experience: "Digital Strategy & Content Creation",
  },
];

const RECOGNITIONS = [
  {
    id: 1,
    title: "9th Global Education & Skills Summit 2024",
    location: "Delhi, India",
    desc: "Recognized for excellence in STEAM education",
  },
  {
    id: 2,
    title: "Global Innovation Event",
    location: "Shanghai, China",
    desc: "Participated at National Convention and Exhibition Center",
  },
  {
    id: 3,
    title: "ATL & Sparltech Collaboration",
    location: "India",
    desc: "Partnership for Atal Tinkering Labs support and innovation ecosystem development",
  },
  {
    id: 4,
    title: "MoU with Baba Farid College",
    location: "Bathinda, Punjab",
    desc: "Partnership for Engineering Education",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80" 
            alt="Robotics Education"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About JoinBotics</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Empowering the next generation of innovators through hands-on STEAM education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & NEP Alignment */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaLightbulb className="text-4xl text-yellow-500" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 font-semibold text-lg">
              To ignite young minds with the power of innovation and prepare them to lead in a tech-driven world.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where every student, regardless of background, has access to practical,
              project-based STEM education that cultivates 21st-century skills: <strong>critical thinking, creativity, collaboration, and coding fluency</strong> — essential for thriving in the modern world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCheckCircle className="text-4xl text-[#c11e38]" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              JoinBotics fully aligns with the National Education Policy (NEP) 2020 by:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>Offering experiential, hands-on learning across disciplines</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>Introducing coding, AI, robotics, and digital literacy from foundational stages</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>Promoting inquiry-based, inter-disciplinary education through real-world projects</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>Enabling vocational skill development from school to college</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From a vision to transform education to impacting 100,000+ students
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-white via-[#c11e38] via-[#220b34] to-white hidden md:block" />
          
          {/* Timeline Line - Mobile */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-white via-[#c11e38] via-[#220b34] to-white md:hidden" />

          <div className="space-y-8">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex items-center gap-4 md:gap-4 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Desktop Layout */}
                <div className={`flex-1 hidden md:block ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg">
                    <div className="text-2xl font-bold text-[#220b34] mb-2">{item.year}</div>
                    <p className="text-gray-700">{item.milestone}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="w-8 h-8 rounded-full bg-[#c11e38] border-4 border-white shadow-lg flex-shrink-0 z-10 hidden md:flex" />
                
                {/* Mobile Dot */}
                <div className="w-8 h-8 rounded-full bg-[#c11e38] border-4 border-white shadow-lg flex-shrink-0 z-10 md:hidden" />
                
                {/* Desktop Spacer */}
                <div className="flex-1 hidden md:block" />
                
                {/* Mobile Layout */}
                <div className="flex-1 md:hidden">
                  <div className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-4 shadow-lg">
                    <div className="text-xl font-bold text-[#220b34] mb-2">{item.year}</div>
                    <p className="text-gray-700 text-sm">{item.milestone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powered by passion, driven by innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Placeholder for photo */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 text-center mb-2">{member.role}</p>
                <p className="text-xs text-gray-600 text-center mb-3">{member.experience}</p>
                <p className="text-sm text-gray-700 italic text-center">"{member.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognitions & Collaborations */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaAward className="text-4xl text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold">Recognitions & Collaborations</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our impact is recognized by schools, institutions, and innovation platforms across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECOGNITIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 p-6 shadow-lg text-center"
            >
              <FaAward className="text-5xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.location}</p>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Schools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow-lg text-center"
        >
          <FaHandshake className="text-5xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Our Key Partners</h3>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700">
            <span className="px-4 py-2 bg-blue-50 rounded-full">Gaikwad Global School</span>
            <span className="px-4 py-2 bg-blue-50 rounded-full">Riverdale School</span>
            <span className="px-4 py-2 bg-blue-50 rounded-full">Engineering Institutes</span>
            <span className="px-4 py-2 bg-blue-50 rounded-full">ATL Schools</span>
            <span className="px-4 py-2 bg-blue-50 rounded-full">Activity Centers</span>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in creating a generation of thinkers, builders, and leaders through tech education that inspires
            and empowers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/programs"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
