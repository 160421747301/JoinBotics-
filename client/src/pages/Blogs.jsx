import { motion } from "framer-motion";
import { FaBlog, FaRocket, FaLightbulb, FaChalkboardTeacher, FaUsers, FaEnvelope, FaCalendar, FaUser, FaClock, FaArrowRight, FaPen } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);
  const [showGuestPostForm, setShowGuestPostForm] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [guestPostSubmitted, setGuestPostSubmitted] = useState(false);

  const { register: registerNewsletter, handleSubmit: handleNewsletterSubmit, formState: { errors: newsletterErrors }, reset: resetNewsletter } = useForm();
  const { register: registerGuestPost, handleSubmit: handleGuestPostSubmit, formState: { errors: guestPostErrors }, reset: resetGuestPost } = useForm();

  const onNewsletterSubmit = (data) => {
    console.log("Newsletter:", data);
    setNewsletterSubmitted(true);
    resetNewsletter();
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setShowNewsletterForm(false);
    }, 2000);
  };

  const onGuestPostSubmit = (data) => {
    console.log("Guest Post:", data);
    setGuestPostSubmitted(true);
    resetGuestPost();
    setTimeout(() => {
      setGuestPostSubmitted(false);
      setShowGuestPostForm(false);
    }, 2000);
  };

  const CATEGORIES = [
    {
      id: "all",
      name: "All Posts",
      icon: FaBlog,
      color: "from-gray-600 to-gray-700"
    },
    {
      id: "stem-trends",
      name: "STEM Education Trends",
      icon: FaRocket,
      color: "from-[#c11e38] to-[#220b34]"
    },
    {
      id: "student-projects",
      name: "Student Projects & Innovations",
      icon: FaLightbulb,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: "edtech",
      name: "EdTech Innovations",
      icon: FaRocket,
      color: "from-purple-600 to-pink-500"
    },
    {
      id: "guides",
      name: "Teacher & Parent Guides",
      icon: FaChalkboardTeacher,
      color: "from-[#8a1532] to-[#220b34]"
    }
  ];

  const BLOG_POSTS = [
    // STEM Education Trends
    {
      id: 1,
      category: "stem-trends",
      title: "NEP 2020 and the Future of STEAM Education in India",
      excerpt: "How the National Education Policy 2020 is revolutionizing STEAM learning and what it means for schools and students.",
      author: "Dr. Javed Dodamani",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "blog1",
      featured: true
    },
    {
      id: 2,
      category: "stem-trends",
      title: "Why Every Student Needs Robotics Education in 2024",
      excerpt: "The critical importance of robotics and automation skills in preparing students for the jobs of tomorrow.",
      author: "Balaji R.",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "blog2"
    },
    {
      id: 3,
      category: "stem-trends",
      title: "The Rise of AI Education: Teaching Students to Think Like Machines",
      excerpt: "Exploring how AI and machine learning are becoming essential parts of K-12 curriculum worldwide.",
      author: "Technology Team",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "blog3"
    },
    // Student Projects
    {
      id: 4,
      category: "student-projects",
      title: "Grade 8 Students Build Smart Home Automation System",
      excerpt: "How students from Gaikwad Global School created an IoT-based home automation project that won national recognition.",
      author: "Student Showcase",
      date: "February 28, 2024",
      readTime: "5 min read",
      image: "blog4",
      featured: true
    },
    {
      id: 5,
      category: "student-projects",
      title: "12 Innovative Robotics Projects by JoinBotics Students",
      excerpt: "A showcase of the most creative and impactful robotics projects developed by our students in 2024.",
      author: "Innovation Team",
      date: "February 20, 2024",
      readTime: "12 min read",
      image: "blog5"
    },
    {
      id: 6,
      category: "student-projects",
      title: "From Idea to Patent: Student Innovation Journey",
      excerpt: "The inspiring story of Riverdale School students who developed a patent-pending solution for water conservation.",
      author: "Success Stories",
      date: "February 15, 2024",
      readTime: "7 min read",
      image: "blog6"
    },
    // EdTech Innovations
    {
      id: 7,
      category: "edtech",
      title: "Virtual Labs: The Future of Hands-On Learning",
      excerpt: "How virtual laboratories are democratizing access to expensive equipment and enabling experimentation at scale.",
      author: "EdTech Insights",
      date: "February 10, 2024",
      readTime: "9 min read",
      image: "blog7"
    },
    {
      id: 8,
      category: "edtech",
      title: "Gamification in STEM: Making Learning Addictive",
      excerpt: "The science behind gamified learning and why students are more engaged than ever before.",
      author: "Learning Science Team",
      date: "February 5, 2024",
      readTime: "6 min read",
      image: "blog8"
    },
    {
      id: 9,
      category: "edtech",
      title: "JoinBotics LMS: Behind the Scenes",
      excerpt: "A sneak peek into the development of our upcoming Learning Management System and its innovative features.",
      author: "Product Team",
      date: "January 30, 2024",
      readTime: "8 min read",
      image: "blog9",
      featured: true
    },
    // Teacher & Parent Guides
    {
      id: 10,
      category: "guides",
      title: "A Teacher's Guide to Implementing STEAM in the Classroom",
      excerpt: "Practical strategies and lesson plans for educators looking to integrate STEAM concepts into their teaching.",
      author: "Curriculum Team",
      date: "January 25, 2024",
      readTime: "11 min read",
      image: "blog10"
    },
    {
      id: 11,
      category: "guides",
      title: "What Parents Need to Know About Coding Education",
      excerpt: "Everything parents should understand about coding languages, learning paths, and career opportunities.",
      author: "Parent Resources",
      date: "January 20, 2024",
      readTime: "7 min read",
      image: "blog11"
    },
    {
      id: 12,
      category: "guides",
      title: "Choosing the Right STEM Program for Your Child",
      excerpt: "A comprehensive guide to help parents evaluate and select the best STEM education programs for their children.",
      author: "Advisory Team",
      date: "January 15, 2024",
      readTime: "10 min read",
      image: "blog12"
    }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const featuredPosts = BLOG_POSTS.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c11e38]/5 via-[#220b34]/3 to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[78vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80" 
            alt="Blog Articles"
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
              <FaBlog />
              <span className="font-semibold">Insights & Resources</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              JoinBotics Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Explore the latest in STEM education, student innovations, and EdTech trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowNewsletterForm(true)}
                className="bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                <FaEnvelope className="inline mr-2" />
                Subscribe to Newsletter
              </button>
              <button
                onClick={() => setShowGuestPostForm(true)}
                className="bg-white border-2 border-[#220b34] text-[#220b34] px-8 py-4 rounded-lg font-semibold hover:bg-[#220b34]/10 transition-all"
              >
                <FaPen className="inline mr-2" />
                Submit Guest Post
              </button>
            </div>
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
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
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

      {/* Featured Posts */}
      {selectedCategory === "all" && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                >
                  <div className="relative bg-gradient-to-br from-[#c11e38] to-[#220b34] h-48 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                    <span className="text-6xl">📚</span>
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendar />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#220b34] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-gray-600">
                        <FaUser />
                        {post.author}
                      </span>
                      <span className="text-[#220b34] font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                        Read More
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === "all" ? "All Posts" : CATEGORIES.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="relative bg-gradient-to-br from-gray-600 to-gray-800 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  <span className="text-6xl">
                    {post.category === "stem-trends" && "🚀"}
                    {post.category === "student-projects" && "💡"}
                    {post.category === "edtech" && "💻"}
                    {post.category === "guides" && "📖"}
                  </span>
                  {post.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-gray-600">
                      <FaUser />
                      {post.author}
                    </span>
                    <span className="text-blue-600 font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                      Read More
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Form Modal */}
      {showNewsletterForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Subscribe to Newsletter</h3>
              <button
                onClick={() => setShowNewsletterForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            {newsletterSubmitted ? (
              <div className="text-center py-8">
                <FaEnvelope className="text-6xl text-[#c11e38] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-700">You've successfully subscribed to our newsletter.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit(onNewsletterSubmit)} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    {...registerNewsletter("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Your name"
                  />
                  {newsletterErrors.name && (
                    <p className="text-red-600 text-sm mt-1">{newsletterErrors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    {...registerNewsletter("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="your@email.com"
                  />
                  {newsletterErrors.email && (
                    <p className="text-red-600 text-sm mt-1">{newsletterErrors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Interests</label>
                  <select
                    {...registerNewsletter("interests")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    <option value="">Select your interests</option>
                    <option value="stem-trends">STEM Education Trends</option>
                    <option value="student-projects">Student Projects</option>
                    <option value="edtech">EdTech Innovations</option>
                    <option value="guides">Teacher & Parent Guides</option>
                    <option value="all">All Topics</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white font-semibold py-3 rounded-lg hover:shadow-2xl hover:shadow-[#c11e38]/50 hover:scale-[1.02] transition-all duration-300 hover:from-[#d42847] hover:to-[#2d0e42] relative overflow-hidden group"
                >
                  <span className="relative z-10">Subscribe</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div> Now
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}

      {/* Guest Post Form Modal */}
      {showGuestPostForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl my-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Submit Guest Post</h3>
              <button
                onClick={() => setShowGuestPostForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            {guestPostSubmitted ? (
              <div className="text-center py-8">
                <FaPen className="text-6xl text-[#c11e38] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Submission Received!</h4>
                <p className="text-gray-700">We'll review your guest post and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleGuestPostSubmit(onGuestPostSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                    <input
                      type="text"
                      {...registerGuestPost("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Full name"
                    />
                    {guestPostErrors.name && (
                      <p className="text-red-600 text-sm mt-1">{guestPostErrors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      {...registerGuestPost("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="your@email.com"
                    />
                    {guestPostErrors.email && (
                      <p className="text-red-600 text-sm mt-1">{guestPostErrors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Category *</label>
                  <select
                    {...registerGuestPost("category", { required: "Category is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    <option value="">Select category</option>
                    <option value="stem-trends">STEM Education Trends</option>
                    <option value="student-projects">Student Projects & Innovations</option>
                    <option value="edtech">EdTech Innovations</option>
                    <option value="guides">Teacher & Parent Guides</option>
                  </select>
                  {guestPostErrors.category && (
                    <p className="text-red-600 text-sm mt-1">{guestPostErrors.category.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Article Title *</label>
                  <input
                    type="text"
                    {...registerGuestPost("title", { required: "Title is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Enter article title"
                  />
                  {guestPostErrors.title && (
                    <p className="text-red-600 text-sm mt-1">{guestPostErrors.title.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Article Content *</label>
                  <textarea
                    {...registerGuestPost("content", {
                      required: "Content is required",
                      minLength: { value: 500, message: "Article must be at least 500 characters" }
                    })}
                    rows="10"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Write your article here (minimum 500 characters)..."
                  />
                  {guestPostErrors.content && (
                    <p className="text-red-600 text-sm mt-1">{guestPostErrors.content.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Bio</label>
                  <textarea
                    {...registerGuestPost("bio")}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Tell us about yourself (optional)"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white font-semibold py-3 rounded-lg hover:shadow-2xl hover:shadow-[#c11e38]/50 hover:scale-[1.02] transition-all duration-300 hover:from-[#d42847] hover:to-[#2d0e42] relative overflow-hidden group"
                >
                  <span className="relative z-10">Submit Guest Post</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
