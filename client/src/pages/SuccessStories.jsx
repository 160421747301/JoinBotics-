import { motion } from "framer-motion";
import { FaTrophy, FaChartLine, FaUsers, FaGraduationCap, FaRobot, FaAward, FaQuoteLeft, FaStar } from "react-icons/fa";
import { useState } from "react";
import Footer from "../components/Footer";

export default function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState(null);

  const TRANSFORMATION_STORIES = [
    {
      id: 1,
      school: "Gaikwad Global School",
      location: "Pune, Maharashtra",
      category: "Complete Transformation",
      year: "2020-2024",
      image: "school1",
      before: {
        situation: "Traditional classroom setup with minimal hands-on learning",
        challenges: [
          "Students showed limited interest in STEM subjects",
          "No practical exposure to robotics or automation",
          "Teachers lacked training in modern STEM pedagogy",
          "No participation in competitions or external events"
        ],
        stats: {
          stemInterest: 35,
          competitions: 0,
          projects: 0
        }
      },
      after: {
        transformation: "State-of-the-art STEAM lab with Join Botics curriculum integration",
        achievements: [
          "Students won 15+ state and national level competitions",
          "100% participation in project-based learning activities",
          "Teachers certified in robotics and AI education",
          "Became a model school for STEAM education in Maharashtra"
        ],
        stats: {
          stemInterest: 92,
          competitions: 15,
          projects: 250
        }
      },
      testimonial: {
        quote: "Join Botics has completely transformed our approach to education. Our students are now innovators, not just learners.",
        author: "Principal, Gaikwad Global School",
        rating: 5
      },
      highlights: [
        {
          metric: "Student Engagement",
          before: "35%",
          after: "92%",
          change: "+163%"
        },
        {
          metric: "Competition Wins",
          before: "0",
          after: "15+",
          change: "Infinite Growth"
        },
        {
          metric: "Annual Projects",
          before: "0",
          after: "250+",
          change: "New Achievement"
        },
        {
          metric: "Teacher Training",
          before: "0 hrs",
          after: "120 hrs",
          change: "Complete Upskilling"
        }
      ]
    },
    {
      id: 2,
      school: "Riverdale School",
      location: "Bangalore, Karnataka",
      category: "Excellence in Innovation",
      year: "2021-2024",
      image: "school2",
      before: {
        situation: "Good academic school but lacking innovation culture",
        challenges: [
          "STEM was theory-heavy with little practical work",
          "No robotics or IoT exposure for students",
          "Difficulty attracting students interested in technology",
          "Limited collaboration with tech industry"
        ],
        stats: {
          stemInterest: 40,
          competitions: 2,
          projects: 15
        }
      },
      after: {
        transformation: "Innovation hub with dedicated maker space and Join Botics programs",
        achievements: [
          "Students developed 12 patent-pending innovations",
          "Won Best Innovation School Award 2023",
          "Established partnerships with 5 tech companies",
          "Launched student-led tech startup incubator"
        ],
        stats: {
          stemInterest: 88,
          competitions: 20,
          projects: 400
        }
      },
      testimonial: {
        quote: "Our partnership with Join Botics didn't just add robotics classes—it created a culture of innovation that permeates everything we do.",
        author: "Director, Riverdale School",
        rating: 5
      },
      highlights: [
        {
          metric: "Innovation Projects",
          before: "15/year",
          after: "400+/year",
          change: "+2,566%"
        },
        {
          metric: "Patent Applications",
          before: "0",
          after: "12",
          change: "Breakthrough"
        },
        {
          metric: "Industry Partnerships",
          before: "0",
          after: "5+",
          change: "New Ecosystem"
        },
        {
          metric: "STEM Enrollment",
          before: "40%",
          after: "88%",
          change: "+120%"
        }
      ]
    }
  ];

  const IMPACT_METRICS = [
    {
      icon: FaTrophy,
      value: "150+",
      label: "Competition Wins",
      description: "Students winning at state, national, and international levels"
    },
    {
      icon: FaGraduationCap,
      value: "500+",
      label: "Certified Students",
      description: "Students completing advanced robotics certifications"
    },
    {
      icon: FaRobot,
      value: "1,200+",
      label: "Projects Completed",
      description: "Innovative projects developed by students"
    },
    {
      icon: FaAward,
      value: "25+",
      label: "School Awards",
      description: "Partner schools recognized for excellence in STEM"
    }
  ];

  const AWARDS_RECOGNITIONS = [
    {
      icon: FaAward,
      title: "9th Global Education & Skills Summit 2024",
      location: "Delhi, India",
      description: "Recognized for excellence in STEAM education and innovation in EdTech",
      year: "2024",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaTrophy,
      title: "Global Innovation Exhibition",
      location: "Shanghai, China",
      description: "Featured at the National Convention and Exhibition Center for pioneering work in robotics education",
      year: "2024",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaAward,
      title: "Best STEM Education Partner",
      location: "Maharashtra & Karnataka",
      description: "Awarded by multiple schools and educational institutions for transformative impact",
      year: "2023-2024",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: FaTrophy,
      title: "National-Level ATL Recognition",
      location: "India",
      description: "Recognized for supporting Atal Tinkering Labs and fostering innovation in schools",
      year: "2023",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c11e38]/5 via-[#220b34]/3 to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80" 
            alt="Success Stories"
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
              <FaTrophy />
              <span className="font-semibold">Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming Education
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Real stories of schools and students achieving extraordinary results with Join Botics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_METRICS.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all"
              >
                <metric.icon className="text-5xl text-[#220b34] mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </h3>
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  {metric.label}
                </p>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full mb-6">
              <FaAward />
              <span className="font-semibold">Awards & Recognition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry Recognition & Global Impact
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our commitment to excellence in STEAM education has been recognized nationally and internationally
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {AWARDS_RECOGNITIONS.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className={`bg-gradient-to-br ${award.color} p-4 sm:p-6 rounded-2xl flex-shrink-0`}>
                    <award.icon className="text-3xl sm:text-4xl text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">
                        {award.title}
                      </h3>
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap flex-shrink-0 self-start">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#c11e38] mb-3 flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      {award.location}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Media Mentions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Media & Press Coverage</h3>
            <p className="text-gray-700 mb-6">
              Featured in leading education publications and news outlets for our innovative approach to STEAM education
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {["Education Times", "EdTech India", "Innovation News", "STEM Today", "Future Schools"].map((media, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-[#c11e38]/10 to-[#220b34]/10 border border-[#220b34]/20 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-gray-800"
                >
                  {media}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how schools partnered with Join Botics evolved from traditional learning to innovation powerhouses
            </p>
          </motion.div>

          <div className="space-y-16">
            {TRANSFORMATION_STORIES.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Story Header */}
                <div className="bg-gradient-to-r from-[#c11e38] to-[#220b34] p-4 sm:p-6 md:p-8 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 sm:mb-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 break-words">{story.school}</h3>
                      <p className="text-white/90 text-sm sm:text-base">{story.location} • {story.year}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg self-start sm:self-auto flex-shrink-0">
                      <p className="font-semibold text-sm sm:text-base whitespace-nowrap">{story.category}</p>
                    </div>
                  </div>
                </div>

                {/* Before & After Grid */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8">
                  {/* Before */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl sm:text-2xl">📊</span>
                      </div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 break-words">Before Join Botics</h4>
                    </div>
                    <p className="text-gray-700 mb-4">{story.before.situation}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-800 mb-2">Challenges:</p>
                      {story.before.challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">✗</span>
                          <p className="text-gray-600">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* After */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl sm:text-2xl">🚀</span>
                      </div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 break-words">After Join Botics</h4>
                    </div>
                    <p className="text-gray-700 mb-4">{story.after.transformation}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-800 mb-2">Achievements:</p>
                      {story.after.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#c11e38] mt-1">✓</span>
                          <p className="text-gray-600">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics Comparison */}
                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                    Impact Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {story.highlights.map((highlight, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-[#c11e38]/10 to-[#220b34]/10 p-3 sm:p-4 rounded-xl border border-[#c11e38]/20">
                        <p className="text-xs sm:text-sm text-gray-600 mb-2 break-words">{highlight.metric}</p>
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
                          <span className="text-sm sm:text-base text-gray-400 line-through">{highlight.before}</span>
                          <span className="text-lg sm:text-2xl flex-shrink-0">→</span>
                          <span className="text-lg sm:text-xl font-bold text-[#c11e38]">{highlight.after}</span>
                        </div>
                        <p className="text-xs text-[#220b34] font-semibold break-words">{highlight.change}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-[#c11e38]/10 to-[#220b34]/10 p-4 sm:p-6 md:p-8 border-t border-gray-200">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <FaQuoteLeft className="text-2xl sm:text-3xl text-[#c11e38] flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-base sm:text-lg text-gray-800 italic mb-3 sm:mb-4 break-words">
                        "{story.testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-semibold text-sm sm:text-base text-gray-900 break-words">{story.testimonial.author}</p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(story.testimonial.rating)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-500 text-sm sm:text-base" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 md:p-12 text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join 50+ schools that have transformed their STEM education with Join Botics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Request a Demo
              </a>
              <a
                href="/programs"
                className="bg-white border-2 border-[#220b34] text-[#220b34] px-8 py-4 rounded-lg font-semibold hover:bg-[#220b34]/10 transition-all"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
