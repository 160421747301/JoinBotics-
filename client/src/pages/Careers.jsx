import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaUsers, FaRocket, FaHeart, FaLaptop, FaClock, FaMapMarkerAlt, FaCheckCircle, FaMoneyBillWave, FaMountain, FaLightbulb } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://joinboticswebsite.onrender.com/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        setSelectedPosition(null);
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(result.error || "Failed to submit application");
      }
    } catch (err) {
      setError("Failed to submit application. Please check your connection and try again.");
      console.error("Careers form error:", err);
    } finally {
      setLoading(false);
    }
  };

  const applyForPosition = (position) => {
    setSelectedPosition(position);
    setValue("position", position.title);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const JOB_OPENINGS = [
    {
      id: 1,
      title: "STEM Trainer",
      type: "Full-Time",
      locations: ["Bangalore", "Pune", "Aurangabad"],
      experience: "1-3 years",
      category: "Education",
      description: "Passionate educator to deliver robotics and STEAM curriculum to students across grades",
      responsibilities: [
        "Conduct hands-on robotics and STEAM sessions for students",
        "Prepare and execute engaging lesson plans aligned with curriculum",
        "Manage classroom environments and student engagement",
        "Assess student progress and provide feedback",
        "Collaborate with schools and coordinate with parents",
        "Participate in teacher training and professional development"
      ],
      qualifications: [
        "B.Tech/BE (Electronics/Computer/AI/IT) or M.Sc/MCA",
        "1-3 years in EdTech or STEM teaching",
        "Skills: Arduino, Python, Scratch, Quarky, Cretile",
        "Excellent communication and presentation skills",
        "Passion for teaching and working with children",
        "**Freshers can apply with strong technical knowledge**"
      ],
      skills: ["Robotics", "Python/Scratch", "Communication", "Classroom Management"],
      icon: FaGraduationCap,
      color: "from-[#c11e38] to-[#220b34]"
    },
    {
      id: 2,
      title: "Curriculum Developer",
      type: "Full-Time",
      locations: ["Bangalore", "Pune"],
      experience: "2-5 years",
      category: "Content",
      description: "Creative minds to design innovative STEAM curriculum and learning materials",
      responsibilities: [
        "Design grade-wise curriculum aligned with NEP 2020 and international standards",
        "Create engaging learning materials, worksheets, and activity guides",
        "Develop project-based learning modules and assessment frameworks",
        "Research latest trends in STEM education and EdTech",
        "Collaborate with trainers and gather feedback for improvements",
        "Create content for digital platforms and LMS integration"
      ],
      qualifications: [
        "Bachelor's or Master's degree in Education or Engineering",
        "2+ years in content creation for education",
        "Skills: STEM content writing, LMS platforms, project-based learning design",
        "Deep understanding of K-12 education and pedagogy",
        "Strong writing and content creation skills",
        "**Freshers with strong academic background can apply**"
      ],
      skills: ["Curriculum Design", "Instructional Design", "Research", "Content Writing"],
      icon: FaBriefcase,
      color: "from-purple-600 to-pink-500"
    },
    {
      id: 3,
      title: "Marketing & Outreach Executive",
      type: "Full-Time",
      locations: ["Bangalore", "Pune", "Aurangabad", "Ahmedabad"],
      experience: "1-2 years",
      category: "Business",
      description: "Dynamic marketers to drive growth and expand our reach to schools and institutions",
      responsibilities: [
        "Identify and approach potential schools and educational institutions",
        "Conduct product demonstrations and presentations",
        "Build and maintain relationships with school administrators",
        "Develop and execute marketing strategies for lead generation",
        "Organize workshops, webinars, and promotional events",
        "Achieve sales targets and contribute to business growth"
      ],
      qualifications: [
        "Any graduate with excellent communication skills",
        "1-2 years in education marketing (preferred)",
        "Skills: School outreach, CRM, social media, event management",
        "Self-motivated with strong interpersonal skills",
        "Ability to work independently and meet targets",
        "**Freshers with strong communication can apply**"
      ],
      skills: ["Sales", "Communication", "Relationship Building", "Presentation"],
      icon: FaUsers,
      color: "from-[#8a1532] to-[#220b34]"
    }
  ];

  const INTERNSHIPS = [
    {
      id: 1,
      title: "STEM Teaching Internship",
      duration: "3-6 months",
      locations: ["Bangalore", "Pune", "Aurangabad"],
      stipend: "Certificate & Stipend provided",
      description: "For college students and freshers - Get hands-on training in teaching robotics & AI in schools",
      learnings: ["Teaching methodologies", "Robotics & coding delivery", "Student engagement", "Classroom management", "Certificate upon completion"]
    },
    {
      id: 2,
      title: "Content Development Internship",
      duration: "3-6 months",
      locations: ["Bangalore", "Pune"],
      stipend: "Certificate & Stipend provided",
      description: "Create educational content and learning materials for STEAM programs",
      learnings: ["Content writing", "Curriculum design", "EdTech tools", "Instructional design", "Digital content creation"]
    },
    {
      id: 3,
      title: "Business Development Internship",
      duration: "3-6 months",
      locations: ["All locations"],
      stipend: "Certificate & Stipend + Incentives",
      description: "Support sales and marketing efforts, work with schools and clients",
      learnings: ["Sales skills", "Client management", "Marketing strategies", "Business communication", "School outreach"]
    }
  ];

  const CORE_VALUES = [
    {
      icon: FaLightbulb,
      title: "Innovation in Education",
      description: "We believe in transforming traditional learning through cutting-edge STEAM methodologies and hands-on experiences"
    },
    {
      icon: FaHeart,
      title: "Passion for Teaching & Learning",
      description: "Driven by the mission to ignite curiosity and empower young minds to become future innovators and problem-solvers"
    },
    {
      icon: FaUsers,
      title: "Collaboration & Team Spirit",
      description: "We thrive on teamwork, open communication, and supporting each other to achieve collective goals"
    },
    {
      icon: FaRocket,
      title: "Growth Mindset",
      description: "Continuous learning and development for both our team and the students we serve"
    },
    {
      icon: FaCheckCircle,
      title: "Outcome-Driven Work Culture",
      description: "Focused on measurable impact - student engagement, skill development, and real-world project success"
    }
  ];

  const BENEFITS = [
    {
      icon: FaGraduationCap,
      title: "Continuous Training & Certification",
      description: "Regular upskilling in robotics, AI, coding platforms, and modern teaching methodologies with industry-recognized certifications"
    },
    {
      icon: FaClock,
      title: "Flexible Work Options",
      description: "Hybrid work for content/design roles, on-ground engagement at partner schools for trainers, and remote opportunities for tech roles"
    },
    {
      icon: FaMoneyBillWave,
      title: "Stipends & Performance Bonuses",
      description: "Competitive salaries with performance-based incentives and rewards for exceptional contributions"
    },
    {
      icon: FaRocket,
      title: "Startup Energy + Education Purpose",
      description: "Experience the dynamic pace of a growing edtech company while making a meaningful impact on children's education"
    },
    {
      icon: FaMountain,
      title: "Annual Retreats & Team-Building",
      description: "Company-wide offsites, team bonding activities, and celebrations to foster collaboration and recharge"
    },
    {
      icon: FaHeart,
      title: "Impactful Mission",
      description: "Be part of shaping India's future by empowering 1,00,000+ students across 90+ schools with 21st-century skills"
    }
  ];

  const WORK_LOCATIONS = [
    {
      city: "Bangalore",
      state: "Karnataka",
      address: "Koramangala, Bangalore",
      type: "Head Office"
    },
    {
      city: "Pune",
      state: "Maharashtra",
      address: "Kalyani Nagar, Pune",
      type: "Regional Office"
    },
    {
      city: "Aurangabad",
      state: "Maharashtra",
      address: "CIDCO, Aurangabad",
      type: "Regional Office"
    },
    {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Satellite, Ahmedabad",
      type: "Regional Office"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c11e38]/5 via-[#220b34]/3 to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
            alt="Join Our Team"
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
              <FaBriefcase />
              <span className="font-semibold">Join Our Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Build Your Career at JoinBotics
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Join a mission-driven team transforming STEAM education across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture & Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do at JoinBotics
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#c11e38]/10 to-[#220b34]/10 border-2 border-[#220b34]/20 rounded-2xl p-4 sm:p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                <value.icon className="text-4xl sm:text-5xl text-[#c11e38] mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 break-words">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive benefits and growth opportunities for our team members
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-4 sm:p-6 text-center shadow-xl hover:shadow-2xl transition-all"
              >
                <benefit.icon className="text-4xl sm:text-5xl text-[#220b34] mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 break-words">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find your perfect role and start making an impact
            </p>
          </motion.div>

          <div className="space-y-8">
            {JOB_OPENINGS.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className={`bg-gradient-to-r ${job.color} p-4 sm:p-6 text-white`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <job.icon className="text-2xl sm:text-3xl" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-1 break-words">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
                          <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">{job.type}</span>
                          <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">{job.experience}</span>
                          <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">{job.category}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => applyForPosition(job)}
                      className="bg-white text-[#220b34] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group self-start lg:self-auto flex-shrink-0"
                    >
                      <span className="relative z-10">Apply Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                  </div>
                  <p className="text-white/90 text-base sm:text-lg break-words">{job.description}</p>
                </div>

                <div className="p-4 sm:p-6 md:p-8 grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                      <FaCheckCircle className="text-[#c11e38] flex-shrink-0" />
                      <span className="break-words">Key Responsibilities</span>
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#220b34] mt-1 flex-shrink-0">•</span>
                          <span className="text-sm sm:text-base text-gray-700 break-words">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                      <FaGraduationCap className="text-[#220b34] flex-shrink-0" />
                      <span className="break-words">Qualifications</span>
                    </h4>
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {job.qualifications.map((qual, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#220b34] mt-1 flex-shrink-0">•</span>
                          <span className="text-sm sm:text-base text-gray-700 break-words">{qual}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-3 sm:mb-4">
                      <h5 className="font-semibold text-sm sm:text-base text-gray-800 mb-2">Required Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span key={idx} className="bg-[#220b34]/10 text-[#220b34] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm break-words">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-sm sm:text-base text-gray-800 mb-2 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-600 flex-shrink-0" />
                        <span>Work Locations:</span>
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {job.locations.map((location, idx) => (
                          <span key={idx} className="bg-[#c11e38]/10 text-[#c11e38] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap">
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Internship Opportunities</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Kickstart your career with hands-on experience and mentorship
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {INTERNSHIPS.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 break-words">{internship.title}</h3>
                <div className="space-y-2 mb-4 text-sm sm:text-base text-white/90">
                  <p className="flex items-center gap-2">
                    <FaClock className="flex-shrink-0" />
                    <span className="break-words">{internship.duration}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="flex-shrink-0" />
                    <span className="break-words">{internship.locations.join(", ")}</span>
                  </p>
                  <p className="font-semibold text-yellow-300 break-words">{internship.stipend}</p>
                </div>
                <p className="text-sm sm:text-base text-white/80 mb-4 break-words">{internship.description}</p>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white mb-2">What you'll learn:</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {internship.learnings.map((learning, idx) => (
                      <span key={idx} className="bg-white/20 text-white px-2 py-1 rounded text-xs sm:text-sm break-words">
                        {learning}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Locations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-lg text-gray-700 mb-2">We're growing across major cities in India</p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Work with partner schools across Maharashtra, Karnataka, Telangana, and Madhya Pradesh. Remote opportunities available for design, content development, and tech roles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_LOCATIONS.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <FaMapMarkerAlt className="text-4xl text-red-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{location.city}</h3>
                <p className="text-sm text-gray-600 mb-2">{location.state}</p>
                <p className="text-gray-700 text-sm mb-2">{location.address}</p>
                <span className="inline-block bg-[#220b34]/10 text-[#220b34] px-3 py-1 rounded-full text-xs font-semibold">
                  {location.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4" id="application-form">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Apply Now
              </h2>
              <p className="text-lg text-gray-700">
                Fill out the form below and we'll get back to you within 3-5 business days
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-8"
              >
                <FaCheckCircle className="text-6xl text-[#c11e38] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
                <p className="text-gray-700">Thank you for applying. Check your email for confirmation. We'll review your application and contact you soon.</p>
              </motion.div>
            ) : error ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-6xl mx-auto mb-4">✕</div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">Submission Failed</h3>
                <p className="text-red-500">{error}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter valid 10-digit number"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="10-digit number"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Position *</label>
                    <select
                      {...register("position", { required: "Position is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                      <option value="">Select position</option>
                      {JOB_OPENINGS.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      {INTERNSHIPS.map((internship) => (
                        <option key={internship.id} value={internship.title}>{internship.title}</option>
                      ))}
                    </select>
                    {errors.position && (
                      <p className="text-red-600 text-sm mt-1">{errors.position.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Preferred Location *</label>
                    <select
                      {...register("location", { required: "Location is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                      <option value="">Select location</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Pune">Pune</option>
                      <option value="Aurangabad">Aurangabad</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                    </select>
                    {errors.location && (
                      <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Experience *</label>
                    <input
                      type="text"
                      {...register("experience", { required: "Experience is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="e.g., 2 years"
                    />
                    {errors.experience && (
                      <p className="text-red-600 text-sm mt-1">{errors.experience.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Resume/CV Link *</label>
                  <input
                    type="url"
                    {...register("resume", {
                      required: "Resume link is required",
                      pattern: {
                        value: /^https?:\/\/.+/,
                        message: "Enter a valid URL (e.g., Google Drive link)"
                      }
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="https://drive.google.com/... or LinkedIn profile"
                  />
                  {errors.resume && (
                    <p className="text-red-600 text-sm mt-1">{errors.resume.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Cover Letter / Why Join JoinBotics?</label>
                  <textarea
                    {...register("coverLetter")}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Tell us about yourself and why you want to join JoinBotics..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white font-semibold py-4 rounded-lg hover:shadow-2xl hover:shadow-[#c11e38]/50 transition-all duration-300 transform hover:scale-[1.03] hover:from-[#d42847] hover:to-[#2d0e42] relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">{loading ? "Submitting..." : "Submit Application"}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
