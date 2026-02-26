import { motion } from "framer-motion";
import { FaRobot, FaPhone, FaUserTie, FaMicrophone, FaChartLine, FaBriefcase, FaEnvelope, FaFileAlt, FaCheckCircle, FaClock, FaDollarSign, FaGlobe, FaBrain, FaHandshake, FaRocket, FaShieldAlt, FaUsers, FaHeadset, FaLanguage, FaDesktop, FaCog, FaDatabase, FaChartBar, FaLightbulb, FaAward } from "react-icons/fa";
import Footer from "../components/Footer";

export default function AIProjects() {
  const AI_PRODUCTS = [
    {
      id: 1,
      title: "AI Metahuman System",
      subtitle: "Revolutionize customer engagement with hyper-realistic digital humans",
      description: "Deliver personalized, 24/7 interactions across kiosks, websites, and immersive VR/AR environments.",
      icon: FaRobot,
      gradient: "from-[#c11e38] to-[#220b34]",
      features: [
        {
          icon: FaUsers,
          title: "Hyper-Realistic Presence",
          desc: "Real-time digital humans with emotionally responsive facial animation, natural speech synthesis, and lifelike gestures that create authentic connections."
        },
        {
          icon: FaLanguage,
          title: "Multilingual Intelligence",
          desc: "Context-aware conversations in multiple languages, adapting tone and content based on user behavior and preferences."
        },
        {
          icon: FaDesktop,
          title: "Seamless Integration",
          desc: "Easy-to-deploy API/SDK that connects with existing websites, retail kiosks, and enterprise systems without disrupting operations."
        }
      ],
      businessValue: [
        "Reduce in-store staffing costs by up to 40%",
        "Increase visitor engagement time by 3×",
        "Enable 24/7 personalized customer interaction",
        "Improve brand perception with cutting-edge technology"
      ],
      useCases: [
        "Retail stores and shopping malls",
        "Corporate lobbies and reception areas",
        "Trade shows and experiential marketing",
        "Virtual showrooms and product demonstrations"
      ]
    },
    {
      id: 2,
      title: "AI Telecalling Assistant",
      subtitle: "Intelligent voice agent for customer calls",
      description: "Handle customer calls with natural conversation, contextual memory, and emotion-aware responses—slashing costs while elevating satisfaction.",
      icon: FaPhone,
      gradient: "from-purple-600 to-pink-500",
      features: [
        {
          icon: FaHeadset,
          title: "Natural Voice Conversations",
          desc: "LLM-driven reasoning enables human-like dialogue with accent-neutral, low-latency speech recognition and synthesis that feels authentic."
        },
        {
          icon: FaBrain,
          title: "Contextual Intelligence",
          desc: "Maintains conversation memory across multiple calls with live CRM synchronization, ensuring continuity and personalized service."
        },
        {
          icon: FaChartBar,
          title: "Emotion Detection",
          desc: "Analyzes caller sentiment in real-time and adapts tone, pacing, and responses to de-escalate tension or amplify positive interactions."
        },
        {
          icon: FaRocket,
          title: "Scalable Automation",
          desc: "Handles routine inquiries, appointment scheduling, order tracking, and basic troubleshooting without human intervention."
        }
      ],
      metrics: [
        { value: "70%", label: "Autonomous Call Handling", desc: "Manage the majority of routine inbound calls without human agents" },
        { value: "50%", label: "Cost Reduction", desc: "Cut average call cost per minute in half through intelligent automation" },
        { value: "25%", label: "Satisfaction Boost", desc: "Increase customer satisfaction scores with faster, more consistent service" }
      ]
    },
    {
      id: 3,
      title: "AI Interviewer",
      subtitle: "Transform your hiring process with AI-powered interviews",
      description: "Screen candidates, evaluate responses, and deliver structured insights—dramatically reducing time-to-hire.",
      icon: FaUserTie,
      gradient: "from-[#8a1532] to-[#220b34]",
      features: [
        {
          icon: FaLightbulb,
          title: "Intelligent Screening",
          desc: "Automatically understands job descriptions and builds tailored interview flows with relevant questions based on role requirements, experience level, and industry context."
        },
        {
          icon: FaCheckCircle,
          title: "Real-Time Evaluation",
          desc: "Conducts interviews through voice or chat, scoring candidate responses on technical knowledge, cultural fit, and behavioral indicators using advanced natural language understanding."
        },
        {
          icon: FaCog,
          title: "Seamless Integration",
          desc: "Auto-filters and ranks candidates by overall fit, then exports structured evaluation reports directly to your ATS or HRIS systems for streamlined decision-making."
        }
      ],
      metrics: [
        { value: "80%", label: "Faster Screening", desc: "Reduce time spent per candidate from hours to minutes" },
        { value: "2.5x", label: "Quality of Hire", desc: "Improve hiring accuracy with data-driven candidate evaluation" }
      ],
      savings: "Mid-size teams typically save approximately $20,000 per year in recruiter hours while improving candidate quality and experience."
    },
    {
      id: 4,
      title: "Voice Analysis & Feedback",
      subtitle: "Unlock the hidden insights in every sales conversation",
      description: "AI analyzes tone, sentiment, and key moments to deliver actionable coaching that transforms agent performance.",
      icon: FaMicrophone,
      gradient: "from-blue-600 to-indigo-600",
      steps: [
        {
          icon: FaDatabase,
          title: "Capture",
          desc: "Integrate with Zoom, Twilio, or CRM systems to record and process all sales calls automatically."
        },
        {
          icon: FaChartLine,
          title: "Analyze",
          desc: "AI-based sentiment and tone analysis identifies successful patterns and red flags in real-time conversations."
        },
        {
          icon: FaBrain,
          title: "Identify",
          desc: "Pinpoint exact moments that led to conversion or loss, highlighting objection handling and persuasion techniques."
        },
        {
          icon: FaAward,
          title: "Coach",
          desc: "Generate personalized feedback reports for each agent with specific improvement recommendations."
        }
      ],
      impacts: [
        { title: "Conversion Impact", desc: "Improve sales conversion rates by 15-25% through data-driven insights and targeted coaching interventions." },
        { title: "Training Efficiency", desc: "Cut onboarding time for new agents by 50% with AI-generated best practice examples from top performers." },
        { title: "ROI Amplification", desc: "Maximize the return on training investments with continuous, personalized feedback loops for every team member." }
      ]
    },
    {
      id: 5,
      title: "Account Management & Reconciliation AI",
      subtitle: "Eliminate manual reconciliation headaches",
      description: "Intelligent automation that connects your financial systems, detects anomalies, and provides predictive cash-flow insights.",
      icon: FaChartLine,
      gradient: "from-green-600 to-teal-600",
      steps: [
        {
          number: "01",
          title: "Automated Data Connection",
          desc: "Seamlessly integrates with bank APIs, email systems, and CRMs to aggregate transaction data in real-time."
        },
        {
          number: "02",
          title: "Intelligent Matching",
          desc: "Automatically matches payments to invoices, detecting over-payments, under-payments, and missing transactions with precision."
        },
        {
          number: "03",
          title: "Anomaly Detection",
          desc: "Configurable rules combined with AI-powered anomaly detection flag unusual patterns before they become problems."
        },
        {
          number: "04",
          title: "Predictive Analytics",
          desc: "Generate cash-flow forecasts and aging analysis with proactive alerts for potential collection issues."
        }
      ],
      benefits: [
        { title: "Eliminate Manual Work", desc: "Remove over 90% of manual reconciliation effort, freeing finance teams to focus on strategic activities and analysis." },
        { title: "Early Issue Detection", desc: "Identify payment issues an average of 2 weeks earlier, improving cash flow and reducing write-offs." },
        { title: "Significant Savings", desc: "Mid-size finance teams typically save approximately $100,000 annually in labor costs and error correction." }
      ]
    },
    {
      id: 6,
      title: "Programming Operating Partner",
      subtitle: "AI-driven financial modeling for PE/VC firms",
      description: "Accelerate due diligence, enhance value creation, and make faster investment decisions.",
      icon: FaBriefcase,
      gradient: "from-orange-600 to-red-600",
      features: [
        {
          number: "1",
          title: "Automated Financial Models",
          desc: "Instantly generates three-statement financial models for portfolio companies, eliminating days of manual spreadsheet work."
        },
        {
          number: "2",
          title: "Value Creation Plans",
          desc: "Analyzes company documents to automatically build comprehensive Value-Creation Plans with prioritized initiatives and expected impact."
        },
        {
          number: "3",
          title: "Scenario Analysis",
          desc: "Integrates forecasting and scenario analysis dashboards that model multiple growth trajectories and exit scenarios."
        },
        {
          number: "4",
          title: "Continuous Monitoring",
          desc: "Tracks KPIs across your portfolio in real-time with risk alerts and performance benchmarking against industry standards."
        }
      ],
      quote: "Reduce analyst modeling time by 90%, deliver real-time portfolio insights across investments, and enable faster investment decisions with data-driven value realization."
    },
    {
      id: 7,
      title: "AI Email Cold Outreach",
      subtitle: "Supercharge your sales pipeline",
      description: "Intelligent email campaigns that deliver 4× higher reply rates. AI crafts personalized messages, manages deliverability, and tracks engagement automatically.",
      icon: FaEnvelope,
      gradient: "from-cyan-600 to-blue-600",
      features: [
        {
          number: "1",
          title: "Domain Warm-up",
          desc: "Automated warm-up sequences establish sender reputation and maximize deliverability before launch."
        },
        {
          number: "2",
          title: "Personalized Generation",
          desc: "AI creates bulk emails with personalized copy tailored to each recipient's profile, role, and company."
        },
        {
          number: "3",
          title: "Quality Control",
          desc: "Similarity and tone checks ensure messages avoid spam triggers and maintain consistent brand voice."
        },
        {
          number: "4",
          title: "Smart Delivery",
          desc: "Mailbox rotation and auto-reply tracking optimize send patterns and capture responses instantly."
        }
      ],
      results: [
        { title: "Reply Rates", desc: "Achieve a 4× increase in reply rates compared to traditional cold email campaigns through personalization and deliverability optimization." },
        { title: "Deliverability", desc: "Keep bounce rates below 2% with anti-spam engines and domain health monitoring that protect your sender reputation." },
        { title: "Time Savings", desc: "Save approximately 200 hours per month in manual email crafting, research, and campaign management tasks." }
      ]
    },
    {
      id: 8,
      title: "AI Report Generation & Document Management",
      subtitle: "Transform how your organization creates reports",
      description: "AI understands templates, auto-fills data from multiple sources, and ensures compliance—delivering 10× faster report cycles.",
      icon: FaFileAlt,
      gradient: "from-[#c11e38] to-purple-600",
      features: [
        {
          icon: FaDatabase,
          title: "Template Intelligence",
          desc: "Automatically understands document templates and structures, intelligently mapping data fields from APIs, forms, and databases to the correct locations."
        },
        {
          icon: FaRocket,
          title: "Dynamic Regeneration",
          desc: "Re-generates reports instantly with updated inputs while maintaining consistent formatting, branding, and compliance standards across all versions."
        },
        {
          icon: FaGlobe,
          title: "Universal Integration",
          desc: "Connects seamlessly to multiple data sources including ERP systems, CRM platforms, databases, and third-party APIs for comprehensive data aggregation."
        },
        {
          icon: FaShieldAlt,
          title: "Version Control",
          desc: "Maintains complete version history with automatic change highlighting, audit trails, and rollback capabilities for governance and compliance requirements."
        }
      ],
      metrics: [
        { value: "90%", label: "Faster Report Generation", desc: "Complete report cycles 10× faster than manual processes" },
        { value: "70%", label: "Documentation Cost Reduction", desc: "Slash documentation costs through intelligent automation" },
        { value: "95%", label: "Accuracy & Compliance", desc: "AI-based validation ensures regulatory compliance" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[78vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80" 
            alt="AI Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#220b34]/90 to-[#c11e38]/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6">
              <FaRocket />
              <span className="font-semibold">AI Innovation Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Transform Your Business with<br />AI-Powered Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              With over 15 years of specialized expertise, we deliver cutting-edge AI SaaS products that revolutionize how enterprises operate. Our fully customizable, white-label solutions integrate seamlessly into your ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your Trusted AI Innovation Partner</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: FaAward,
                title: "Proven Expertise",
                desc: "For over 15 years, we've been at the forefront of AI SaaS innovation, building transformative products for enterprises across industries. Our track record speaks for itself: scalable solutions, measurable ROI, and seamless integration."
              },
              {
                icon: FaCog,
                title: "White-Label Ready",
                desc: "Every product we build can be fully customized and branded as your own. From UI/UX to backend infrastructure, we ensure your vision comes to life while maintaining the highest standards of quality and security."
              },
              {
                icon: FaHandshake,
                title: "End-to-End Support",
                desc: "We don't just deliver software—we become your strategic partner. From initial consultation and custom development to deployment and ongoing optimization, we're with you every step of the way."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#c11e38]/10 to-[#220b34]/10 border-2 border-[#220b34]/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all"
              >
                <item.icon className="text-5xl text-[#c11e38] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      {AI_PRODUCTS.map((product, index) => (
        <section key={product.id} className={`py-16 sm:py-20 px-4 ${index % 2 === 0 ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Product Header */}
              <div className={`bg-gradient-to-r ${product.gradient} p-6 sm:p-8 md:p-12 text-white`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <product.icon className="text-3xl sm:text-4xl" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 break-words">{product.title}</h2>
                    <p className="text-lg sm:text-xl text-white/90">{product.subtitle}</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-white/90">{product.description}</p>
              </div>

              {/* Product Content */}
              <div className="p-6 sm:p-8 md:p-12">
                {/* Features Grid */}
                {product.features && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-[#220b34]/5 to-[#c11e38]/5 rounded-xl p-6 border border-[#220b34]/10">
                        {feature.icon && <feature.icon className="text-3xl sm:text-4xl text-[#c11e38] mb-4" />}
                        {feature.number && <span className="text-3xl sm:text-4xl font-bold text-[#c11e38] mb-4 block">{feature.number}</span>}
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">{feature.title}</h4>
                        <p className="text-sm sm:text-base text-gray-700 break-words">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Steps (for products with step-by-step process) */}
                {product.steps && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {product.steps.map((step, idx) => (
                      <div key={idx} className="bg-white border-2 border-[#220b34]/20 rounded-xl p-6 text-center hover:shadow-xl transition-all">
                        {step.icon && <step.icon className="text-4xl sm:text-5xl text-[#220b34] mx-auto mb-4" />}
                        {step.number && <span className="text-4xl sm:text-5xl font-bold text-[#220b34] mb-4 block">{step.number}</span>}
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">{step.title}</h4>
                        <p className="text-sm sm:text-base text-gray-700 break-words">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Metrics */}
                {product.metrics && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {product.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-[#c11e38] to-[#220b34] rounded-xl p-6 text-center text-white">
                        <div className="text-4xl sm:text-5xl font-bold mb-2">{metric.value}</div>
                        <h4 className="text-lg sm:text-xl font-semibold mb-2">{metric.label}</h4>
                        <p className="text-sm text-white/90 break-words">{metric.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Business Value */}
                {product.businessValue && (
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Business Value</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {product.businessValue.map((value, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="text-[#c11e38] text-xl flex-shrink-0 mt-1" />
                          <span className="text-gray-700 break-words">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Use Cases */}
                {product.useCases && (
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ideal Use Cases</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {product.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="text-[#220b34] text-xl flex-shrink-0 mt-1" />
                          <span className="text-gray-700 break-words">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impacts/Results/Benefits */}
                {(product.impacts || product.results || product.benefits) && (
                  <div className="space-y-4">
                    {(product.impacts || product.results || product.benefits).map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-[#220b34]/10 to-[#c11e38]/10 rounded-xl p-6 border-l-4 border-[#c11e38]">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">{item.title}</h4>
                        <p className="text-gray-700 break-words">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quote */}
                {product.quote && (
                  <div className="bg-gradient-to-r from-[#c11e38]/10 to-[#220b34]/10 rounded-xl p-6 sm:p-8 border-l-4 border-[#c11e38] italic text-gray-800 text-lg sm:text-xl">
                    "{product.quote}"
                  </div>
                )}

                {/* Savings */}
                {product.savings && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 flex items-start gap-4">
                    <FaDollarSign className="text-3xl sm:text-4xl text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Cost Savings</h4>
                      <p className="text-gray-700 break-words">{product.savings}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#c11e38] to-[#220b34]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Let's discuss how our AI solutions can drive measurable impact for your organization
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#220b34] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
