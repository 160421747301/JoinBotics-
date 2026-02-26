import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaChevronDown, FaChevronUp, FaSearch, FaRobot, FaGraduationCap, FaUsers, FaMoneyBillWave, FaTools } from "react-icons/fa";
import { useState } from "react";
import Footer from "../components/Footer";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openAccordion, setOpenAccordion] = useState(null);

  const CATEGORIES = [
    { id: "all", name: "All Questions", icon: FaQuestionCircle },
    { id: "general", name: "General", icon: FaUsers },
    { id: "programs", name: "Programs", icon: FaGraduationCap },
    { id: "technical", name: "Technical", icon: FaRobot },
    { id: "pricing", name: "Pricing & Fees", icon: FaMoneyBillWave }
  ];

  const FAQS = [
    // General
    {
      id: 1,
      category: "general",
      question: "Who can join Join Botics programs?",
      answer: "Our programs are designed for:\n\n• School Students: Grade 1-12 with age-appropriate content\n• College Students: Engineering, Diploma, B.Sc, BCA students\n• Educators and STEM Enthusiasts: Teachers and lifelong learners\n• Beginner to Advanced Levels: We cater to all skill levels, from absolute beginners to advanced learners\n\nEveryone from curious young minds to aspiring engineers can join our programs. No prior experience is required for our beginner courses!"
    },
    {
      id: 2,
      category: "general",
      question: "What are the prerequisites to start learning robotics?",
      answer: "No prior coding or robotics knowledge is required!\n\n• Our beginner courses start from the very basics of logic building and block coding (Scratch, Blockly)\n• We gradually introduce Python and C as students progress\n• Concepts are taught through hands-on projects, making them easy to understand\n• Our trainers ensure every student grasps fundamentals before moving to advanced topics\n\nWhether you're 7 or 70, if you're curious and willing to learn, you're ready for Join Botics!"
    },
    {
      id: 3,
      category: "general",
      question: "Do you provide tools and kits for learning?",
      answer: "Yes, absolutely!\n\n• All robotics kits and tools are provided as part of our programs\n• For in-person programs: Kits are available during classes\n• For online programs: Kits are shipped to your location where applicable\n• School Programs: Complete lab setup with all equipment included\n\nOur kits include industry-standard components like Arduino, Raspberry Pi, sensors, and programming tools. Everything you need to learn and build projects is included!"
    },
    {
      id: 4,
      category: "general",
      question: "Is the curriculum aligned with school education standards?",
      answer: "Absolutely!\n\n• Fully aligned with NEP 2020 (National Education Policy 2020)\n• Complies with CBSE ATL Guidelines\n• Supports STEAM education framework\n• Integrates seamlessly with Science, Math, and Computer Science subjects through hands-on learning\n\nOur curriculum enhances classroom learning with practical, real-world applications. We don't replace traditional education — we make it more engaging and relevant!"
    },
    // Programs
    {
      id: 5,
      category: "programs",
      question: "What formats are the courses available in (online/offline)?",
      answer: "We offer multiple learning formats:\n\n• Offline Workshops & Bootcamps: Hands-on, in-person intensive sessions\n• Regular In-School Programs: Scheduled classes at partner schools\n• Online Live Courses: Interactive sessions via Zoom/Google Meet\n• Internships for College Students: 1-6 months practical training\n• Self-paced LMS modules: Coming soon with our Techno Tamer's Virtual Lab\n\nAll formats include live projects, assessments, and industry-recognized certifications."
    },
    {
      id: 6,
      category: "programs",
      question: "Do you provide certifications after course completion?",
      answer: "Yes, we provide comprehensive certifications:\n\n• Certificates of completion for each course/module\n• Achievement badges based on performance\n• Skill-specific certifications (Python, Robotics, AI, etc.)\n• Project completion certificates\n• Advanced learners get mentorship opportunities for national and international competitions\n\nAll certificates are digitally verifiable and can be shared on LinkedIn, portfolios, and college applications to showcase your skills!"
    },
    {
      id: 7,
      category: "programs",
      question: "Are classes conducted online or in-person?",
      answer: "We offer both formats to suit your needs:\n\n• In-Person: Conducted at schools, colleges, and learning centers across India (Bengaluru, Hyderabad, Ch. Sambhajinagar, and more)\n• Online Live Classes: Interactive sessions via Zoom/Google Meet with real-time doubt solving\n• Hybrid Learning: Combination of online theory and in-person practical sessions with LMS support\n\nFor schools, we primarily conduct in-person classes. For individual students and college learners, all formats are available!"
    },
    {
      id: 8,
      category: "programs",
      question: "How does Join Botics partner with schools?",
      answer: "Yes! We actively partner with schools and institutions for:\n\n• Robotics & Innovation Lab Setup: Complete infrastructure with tools, kits, and software\n• STEM Clubs & Activity Centers: After-school programs and competitions\n• Faculty Training Programs: Upskilling teachers in robotics, coding, and AI\n• Curriculum Integration: NEP 2020-aligned STEAM content\n• ATL (Atal Tinkering Lab) Support: Complete lab implementation and management\n• Robotics/AI/Coding Lab Setup: Turnkey solutions from design to deployment\n\nWe work with 50+ schools across Maharashtra, Karnataka, Gujarat, and beyond. Contact us for customized partnership models!"
    },
    // Technical
    {
      id: 9,
      category: "technical",
      question: "What is the duration of each course?",
      answer: "Duration varies by program type:\n\n• Workshops: 1-15 days (intensive, hands-on sessions)\n• Short-term Courses: 1-3 months (focused on specific skills)\n• Long-term School Programs: 6 months to 1 year (comprehensive STEAM education)\n• Internships (for college students): 2-6 months (project-based learning)\n• Custom Programs: Flexible duration based on requirements\n\nEach class is typically 60-90 minutes. We offer weekend and vacation batches as well!"
    },
    {
      id: 10,
      category: "technical",
      question: "Do you offer trial classes or demo sessions?",
      answer: "Yes, absolutely!\n\n• Free demo classes are available for schools, parents, and institutions\n• Experience our teaching methods, interact with trainers, and try out our kits before enrolling\n• See students in action during live project demonstrations\n• Parents and educators can observe our hands-on, project-based learning approach\n• No obligations — we want you to make an informed decision!\n\nContact us or visit our website to schedule your free demo session today!"
    },
    {
      id: 11,
      category: "technical",
      question: "What technologies and programming languages are taught?",
      answer: "We teach a wide range of cutting-edge technologies:\n\nProgramming:\n• Block Coding (Scratch, Blockly) for beginners\n• Python Programming (AI, ML, Data Science)\n• C/C++ (Embedded systems, competitive coding)\n\nTechnologies Covered:\n• Artificial Intelligence & Machine Learning\n• Internet of Things (IoT)\n• 3D Designing & 3D Printing\n• Drone Programming & Autonomous Systems\n• Robotics (Mechanical + Embedded Systems)\n• AR/VR (Augmented & Virtual Reality)\n• Blockchain (Introduction for advanced learners)\n\nThe specific curriculum is tailored to age groups and program levels, ensuring everyone learns at the right pace!"
    },
    // Pricing
    {
      id: 12,
      category: "pricing",
      question: "What are the course fees and payment options?",
      answer: "Pricing varies depending on the course type, duration, and format. Please get in touch with us for detailed information tailored to your specific needs and requirements."
    }
  ];

  const filteredFAQs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c11e38]/5 via-[#220b34]/3 to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80" 
            alt="Frequently Asked Questions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#220b34]/75"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white px-6 py-2 rounded-full mb-6">
              <FaQuestionCircle />
              <span className="font-semibold">Help Center</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about Join Botics programs, courses, and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for questions..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-lg bg-white/60 backdrop-blur-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sticky top-20 bg-white/80 backdrop-blur-md z-30 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                <category.icon />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FaQuestionCircle className="text-6xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search or filter</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/40 transition-all"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#c11e38] to-[#220b34] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                        Q
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 flex-1">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {openAccordion === faq.id ? (
                        <FaChevronUp className="text-[#220b34] text-xl" />
                      ) : (
                        <FaChevronDown className="text-gray-400 text-xl" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openAccordion === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-20">
                          <div className="bg-gradient-to-r from-[#c11e38]/10 to-[#220b34]/10 rounded-lg p-6 border-l-4 border-[#c11e38]">
                            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#c11e38] to-[#220b34]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaQuestionCircle className="text-6xl text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-[#220b34] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all"
              >
                WhatsApp Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More</h2>
            <p className="text-lg text-gray-700">
              Learn more about our programs and offerings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Programs", link: "/programs", icon: FaGraduationCap, color: "from-[#c11e38] to-[#220b34]" },
              // { title: "Products", link: "/kits", icon: FaTools, color: "from-[#c11e38] to-[#8a1532]" },
              { title: "Success Stories", link: "/success-stories", icon: FaUsers, color: "from-[#8a1532] to-[#220b34]" },
              { title: "Blogs", link: "/blogs", icon: FaQuestionCircle, color: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-r ${item.color} text-white p-6 rounded-xl text-center hover:shadow-xl transition-all transform hover:scale-105`}
              >
                <item.icon className="text-4xl mx-auto mb-3" />
                <h3 className="text-xl font-bold">{item.title}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
