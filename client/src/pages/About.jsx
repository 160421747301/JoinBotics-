import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaAward, FaCheckCircle, FaHandshake, FaLightbulb } from "react-icons/fa";

const TIMELINE = [
  { year: "2018", milestone: "Founded Join Botics and launched our first Techno Tamers Lab, marking the beginning of our STEM innovation journey." },
  { year: "2019", milestone: "Pioneered Bengaluru's first 3D Printing Labs exclusively for school students, giving young learners early exposure to cutting‑edge technology." },
  { year: "2020", milestone: "Formed our first major partnerships with 10 schools, expanding STEAM learning across institutions." },
  { year: "2021", milestone: "Introduced structured Coding Programs to strengthen digital literacy and foundational programming skills." },
  { year: "2022", milestone: "Established dedicated AI Labs to bring future‑ready learning directly into classrooms." },
  { year: "2023", milestone: "Expanded our reach through partnerships with 25 schools, accelerating impact across multiple regions." },
  { year: "2024", milestone: "Honored with the AI/ML Implementation of the Year award for excellence in future‑tech education." },
  { year: "2025", milestone: "Set up immersive VR Labs to unlock interactive and experiential learning at scale." },
  { year: "2026", milestone: "Joined hands with AI Certs through a strategic partnership to strengthen global‑standard certification pathways for learners." },
];

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Mr. Javed N Doddamani",
    role: "Founder & CEO",
    quote: "Every child is a creator — our job is to unlock their tools.",
    experience: "25+ years in EdTech and Robotics Innovation",
    image: "/assets/Javid-Joinbotics.jpeg",
  },
  {
    id: 2,
    name: "Ms. Swathi M S",
    role: "Founder & COO",
    quote: "True education begins when students move from consuming technology to creating with it.",
    experience: "15+ Years in EdTech & STEM Implementation",
    image: "/assets/Swathi MS.jpg",
  },
  {
    id: 3,
    name: "Ms. Kavyashree N",
    role: "Academic Head",
    quote: "Designing tomorrow's learning experiences today.",
    experience: "Curriculum Design & STEM Implementation",
    image: "/assets/Kavyashree.jpg",
  },
  {
    id: 4,
    name: "Ms. Snehal Thorat",
    role: "Academic Head",
    quote: "Empowering educators to inspire the next generation.",
    experience: "Educational Leadership & Program Development",
    image: "/assets/Snehal.jpg",
  },
];

const RECOGNITIONS = [
  {
    id: 1,
    title: "Global Education Summit - 2024",
    image: "/assets/Global Education Summit - 2024.jpg",
  },
  {
    id: 2,
    title: "MoU with Baba Farid College of Engineering to setup Advanced Robotics Lab",
    image: "/assets/MoU with Baba Farid.jpeg",
  },
  {
    id: 3,
    title: "Enjoy AI Competition at Shanghai, China",
    image: "/assets/AI Competition at Shangai.jpeg",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Join Botics</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Where young minds explore, build, and innovate through real‑world STEM, Robotics, and AI experience
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
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Future‑ready STEM & AI access for all learners</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>NEP 2020‑aligned innovation‑driven learning</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Confident creators solving real problems</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Practical, inclusive, measurable education impact</span>
              </li>
            </ul>
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
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#c11e38] mt-1 flex-shrink-0" />
                <span>Hands‑on STEM programs built around projects</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#c11e38] mt-1 flex-shrink-0" />
                <span>NEP 2020‑aligned curriculum + labs + training</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#c11e38] mt-1 flex-shrink-0" />
                <span>Outcomes validated through portfolios + certifications</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#c11e38] mt-1 flex-shrink-0" />
                <span>Scalable implementation with long‑term support</span>
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
          {/* Timeline Line - Desktop with Glow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-white via-[#c11e38] via-[#220b34] to-white hidden md:block shadow-[0_0_15px_rgba(193,30,56,0.5)]" />
          
          {/* Timeline Line - Mobile with Glow */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-white via-[#c11e38] via-[#220b34] to-white md:hidden shadow-[0_0_10px_rgba(193,30,56,0.4)]" />

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
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-2xl hover:shadow-[#c11e38]/20 transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Shimmer Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    <div className="relative z-10">
                      <div className="text-2xl font-bold text-[#220b34] mb-2 drop-shadow-[0_0_8px_rgba(193,30,56,0.3)]">
                        {item.year}
                      </div>
                      <p className="text-gray-700">{item.milestone}</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Timeline Dot with Pulsing Glow - Desktop */}
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      "0 0 10px rgba(193, 30, 56, 0.5)",
                      "0 0 25px rgba(193, 30, 56, 0.8)",
                      "0 0 10px rgba(193, 30, 56, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] border-4 border-white flex-shrink-0 z-10 hidden md:flex"
                />
                
                {/* Mobile Dot with Pulsing Glow */}
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      "0 0 8px rgba(193, 30, 56, 0.5)",
                      "0 0 20px rgba(193, 30, 56, 0.8)",
                      "0 0 8px rgba(193, 30, 56, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] border-4 border-white flex-shrink-0 z-10 md:hidden"
                />
                
                {/* Desktop Spacer */}
                <div className="flex-1 hidden md:block" />
                
                {/* Mobile Layout */}
                <div className="flex-1 md:hidden">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-4 shadow-lg hover:shadow-xl hover:shadow-[#c11e38]/15 transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    <div className="relative z-10">
                      <div className="text-xl font-bold text-[#220b34] mb-2 drop-shadow-[0_0_6px_rgba(193,30,56,0.3)]">
                        {item.year}
                      </div>
                      <p className="text-gray-700 text-sm">{item.milestone}</p>
                    </div>
                  </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The minds driving our mission to transform STEM, Robotics & AI education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Photo or Placeholder */}
                {member.image ? (
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={`w-full h-full object-cover scale-110 ${member.name === "Ms. Kavyashree N" || member.name === "Ms. Snehal Thorat" ? "object-[center_20%]" : "object-center"}`}
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                )}
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
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <FaAward className="text-5xl text-yellow-500 animate-pulse" />
              <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-20"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#c11e38] to-[#220b34] bg-clip-text text-transparent">
              Recognitions & Collaborations
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Celebrating excellence through prestigious partnerships and global recognition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RECOGNITIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-2 ${idx === 0 ? 'md:col-span-2' : ''}`}
            >
              {/* Featured Badge for first item */}
              {idx === 0 && (
                <div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <FaAward className="text-lg" />
                  Featured Recognition
                </div>
              )}
              
              {/* Image Container with Overlay */}
              <div className={`relative overflow-hidden ${idx === 0 ? 'h-96' : 'h-64'}`}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${idx === 0 ? 'object-[center_30%]' : ''}`}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Decorative Corner Pattern */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#c11e38]/30 to-transparent"></div>
              </div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-start gap-3">
                  <FaHandshake className="text-yellow-400 text-2xl flex-shrink-0 mt-1" />
                  <h3 className={`font-bold text-white leading-tight ${idx === 0 ? 'text-2xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                </div>
              </div>
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Schools with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative rounded-3xl bg-gray-50 border-2 border-gray-100 p-10 shadow-2xl overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c11e38]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#220b34]/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaHandshake className="text-6xl text-[#c11e38] animate-bounce" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#c11e38] to-[#220b34] bg-clip-text text-transparent">
                Our Ecosystem of Partners
              </h3>
            </div>
            <p className="text-gray-500 text-center mb-10 text-sm">
              Transforming STEM education through trusted partnerships
            </p>
            
            {/* Infinite Scrolling Logos */}
            <div className="relative overflow-hidden py-4">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
              
              <div className="flex animate-scroll hover:pause">
                {/* First set of logos */}
                {[
                  { name: 'Alpine Public School', logo: '/assets/Alpine Public School.jpg' },
                  { name: 'Ashoka High School', logo: '/assets/Ashoka High School.jpg' },
                  { name: 'Arise International School', logo: '/assets/Arise International School.jpg' },
                  { name: 'Bangalore International Academy', logo: '/assets/Bangalore International Academy.jpg' },
                  { name: 'Bangalore International Public School', logo: '/assets/Bangalore International Public School.jpg' },
                  { name: 'Bangalore International Kids High', logo: '/assets/Bangalore International Kids High.jpg' },
                  { name: 'Bhavan Bangalore Press School', logo: '/assets/Bhavan Bangalore Press School.jpg' },
                  { name: 'Billabong High International School', logo: '/assets/Billabong High International School.jpg' },
                  { name: 'Riverdale High School', logo: '/assets/Riverdale High School.jpg' },
                  { name: 'Gaikwad Global School', logo: '/assets/Gaikwad Global School.jpg' },
                  { name: 'SEA International School', logo: '/assets/SEA International School.jpg' },
                  { name: 'SM English School', logo: '/assets/SM English School.jpg' },
                  { name: 'SVR Chinmaya School', logo: '/assets/SVR Chinmaya School.jpg' },
                ].concat([
                  /* Duplicate set for seamless loop */
                  { name: 'Alpine Public School', logo: '/assets/Alpine Public School.jpg' },
                  { name: 'Ashoka High School', logo: '/assets/Ashoka High School.jpg' },
                  { name: 'Arise International School', logo: '/assets/Arise International School.jpg' },
                  { name: 'Bangalore International Academy', logo: '/assets/Bangalore International Academy.jpg' },
                  { name: 'Bangalore International Public School', logo: '/assets/Bangalore International Public School.jpg' },
                  { name: 'Bangalore International Kids High', logo: '/assets/Bangalore International Kids High.jpg' },
                  { name: 'Bhavan Bangalore Press School', logo: '/assets/Bhavan Bangalore Press School.jpg' },
                  { name: 'Billabong High International School', logo: '/assets/Billabong High International School.jpg' },
                  { name: 'Riverdale High School', logo: '/assets/Riverdale High School.jpg' },
                  { name: 'Gaikwad Global School', logo: '/assets/Gaikwad Global School.jpg' },
                  { name: 'SEA International School', logo: '/assets/SEA International School.jpg' },
                  { name: 'SM English School', logo: '/assets/SM English School.jpg' },
                  { name: 'SVR Chinmaya School', logo: '/assets/SVR Chinmaya School.jpg' },
                ]).map((partner, idx) => (
                  <div
                    key={idx}
                    className="group relative flex-shrink-0 mx-4 w-64"
                  >
                    <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#c11e38]/30">
                      {/* Logo Container */}
                      <div className="relative overflow-hidden rounded-xl bg-gray-50 h-32 flex items-center justify-center p-4">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* School Name */}
                      <div className="text-center mt-4">
                        <h4 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
                          {partner.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap justify-center gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c11e38]">13+</div>
                <div className="text-sm text-gray-600 mt-1">Partner Schools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c11e38]">5,000+</div>
                <div className="text-sm text-gray-600 mt-1">Students Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c11e38]">100+</div>
                <div className="text-sm text-gray-600 mt-1">Programs Delivered</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white p-12 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Let's Build the Future Together</h2>
              <p className="text-xl text-white/90">Join us in creating a generation of thinkers, builders, and leaders through tech education that inspires and empowers.</p>
            </div>

            <div>
              <a 
                href="/contact" 
                className="rounded-xl bg-white text-[#c11e38] px-8 py-4 font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 whitespace-nowrap inline-block"
              >
                Partner with Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
