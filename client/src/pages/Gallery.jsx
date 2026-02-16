import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaImage, FaVideo, FaPlay, FaExpand, FaTimes } from "react-icons/fa";
import { useState } from "react";

const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Robotics Workshop at Gaikwad Global School",
    description: "Students learning robotics fundamentals with Arduino kits",
    category: "workshops",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: 2,
    title: "AI/ML Project Showcase",
    description: "Students presenting their machine learning projects",
    category: "projects",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    id: 3,
    title: "Drone Assembly Session",
    description: "Hands-on drone building and flight training",
    category: "workshops",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
  },
  {
    id: 4,
    title: "3D Printing Lab",
    description: "Students designing and printing 3D models",
    category: "labs",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    id: 5,
    title: "Coding Competition Winners",
    description: "Annual coding championship celebration",
    category: "events",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    id: 6,
    title: "IoT Smart Home Project",
    description: "Student-built IoT automation system",
    category: "projects",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
  },
  {
    id: 7,
    title: "VR Experience Session",
    description: "Immersive virtual reality learning experience",
    category: "workshops",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80",
  },
  {
    id: 8,
    title: "Robot Competition",
    description: "Inter-school robotics championship",
    category: "events",
    image: "https://images.unsplash.com/photo-1563799520-b15ff9654772?w=800&q=80",
  },
];

const VIDEOS = [
  {
    id: 1,
    title: "Introduction to Join Botics Programs",
    description: "Overview of our comprehensive STEM education programs",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    duration: "3:45",
    category: "overview",
  },
  {
    id: 2,
    title: "Student Success Stories",
    description: "Hear from students who transformed through Join Botics",
    thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    duration: "5:20",
    category: "testimonials",
  },
  {
    id: 3,
    title: "Robotics Workshop Highlights",
    description: "Behind the scenes of our hands-on robotics sessions",
    thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    duration: "4:15",
    category: "workshops",
  },
  {
    id: 4,
    title: "AI Project Demonstrations",
    description: "Students showcasing their AI/ML projects",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    duration: "6:30",
    category: "projects",
  },
  {
    id: 5,
    title: "Drone Flight Training",
    description: "Learn how we teach drone assembly and flight",
    thumbnail: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    duration: "4:50",
    category: "workshops",
  },
  {
    id: 6,
    title: "School Partnership Program",
    description: "How schools benefit from partnering with Join Botics",
    thumbnail: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80",
    duration: "3:30",
    category: "overview",
  },
];

const CATEGORIES = [
  { id: "all", name: "All" },
  { id: "workshops", name: "Workshops" },
  { id: "projects", name: "Projects" },
  { id: "events", name: "Events" },
  { id: "labs", name: "Labs" },
];

const VIDEO_CATEGORIES = [
  { id: "all", name: "All" },
  { id: "overview", name: "Overview" },
  { id: "testimonials", name: "Testimonials" },
  { id: "workshops", name: "Workshops" },
  { id: "projects", name: "Projects" },
];

export default function Gallery() {
  const [selectedTab, setSelectedTab] = useState("gallery");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "all" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const filteredVideos = selectedCategory === "all" 
    ? VIDEOS 
    : VIDEOS.filter(video => video.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 min-h-[78vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492681290082-e932832941e6?w=1920&q=80" 
            alt="Gallery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#220b34]/90 to-[#c11e38]/80"></div>
        </div>
        <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <FaImage className="text-6xl mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gallery & Videos</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our journey through images and videos showcasing student achievements, workshops, and innovations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setSelectedTab("gallery"); setSelectedCategory("all"); }}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
              selectedTab === "gallery"
                ? "bg-gradient-to-r from-[#c11e38] to-[#8a1532] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            <FaImage />
            Photo Gallery
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setSelectedTab("videos"); setSelectedCategory("all"); }}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
              selectedTab === "videos"
                ? "bg-gradient-to-r from-[#c11e38] to-[#8a1532] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            <FaVideo />
            Videos
          </motion.button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(selectedTab === "gallery" ? CATEGORIES : VIDEO_CATEGORIES).map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-[#c11e38] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      {selectedTab === "gallery" && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-white">
                    <FaExpand className="text-sm" />
                    <span className="text-sm">Click to view</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Videos Grid */}
      {selectedTab === "videos" && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-white"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="bg-[#c11e38] rounded-full p-6 shadow-2xl"
                    >
                      <FaPlay className="text-white text-3xl ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all"
          >
            <FaTimes className="text-2xl" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/80">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
