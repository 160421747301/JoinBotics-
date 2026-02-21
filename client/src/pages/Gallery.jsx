import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaImage, FaVideo, FaExpand, FaTimes } from "react-icons/fa";
import { useState } from "react";

const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Join Botics Gallery - 1",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/1.jpeg",
  },
  {
    id: 2,
    title: "Join Botics Gallery - 2",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/2.jpeg",
  },
  {
    id: 3,
    title: "Join Botics Gallery - 3",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/3.jpeg",
  },
  {
    id: 4,
    title: "Join Botics Gallery - 4",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/4.jpeg",
  },
  {
    id: 5,
    title: "Join Botics Gallery - 5",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/5.jpeg",
  },
  {
    id: 6,
    title: "Join Botics Gallery - 6",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/6.jpeg",
  },
  {
    id: 7,
    title: "Join Botics Gallery - 7",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/7.jpeg",
  },
  {
    id: 8,
    title: "Join Botics Gallery - 8",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/8.jpeg",
  },
  {
    id: 9,
    title: "Join Botics Gallery - 9",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/9.jpeg",
  },
  {
    id: 10,
    title: "Join Botics Gallery - 10",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/10.jpeg",
  },
  {
    id: 11,
    title: "Join Botics Gallery - 11",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/11.jpeg",
  },
  {
    id: 12,
    title: "Join Botics Gallery - 12",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/12.jpg",
  },
  {
    id: 13,
    title: "Join Botics Gallery - 13",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/13.jpg",
  },
  {
    id: 14,
    title: "Join Botics Gallery - 14",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/14.jpeg",
  },
  {
    id: 15,
    title: "Join Botics Gallery - 15",
    description: "Highlights from our STEM education programs and activities",
    category: "all",
    image: "/assets/Gallery Images JB/15.jpeg",
  },
];

const VIDEOS = [
  {
    id: 1,
    title: "Join Botics Video 1",
    description: "Highlights from Join Botics STEM programs and activities",
    youtubeId: "5YH3E8jHQyw",
    category: "all",
  },
  {
    id: 2,
    title: "Join Botics Video 2",
    description: "Highlights from Join Botics STEM programs and activities",
    youtubeId: "s5HHZ-_jHKg",
    category: "all",
  },
  {
    id: 3,
    title: "Join Botics Video 3",
    description: "Highlights from Join Botics STEM programs and activities",
    youtubeId: "nNCsgsVXrr4",
    category: "all",
  },
  {
    id: 4,
    title: "Join Botics Video 4",
    description: "Highlights from Join Botics STEM programs and activities",
    youtubeId: "LOtN-oVDsj8",
    category: "all",
  },
  {
    id: 5,
    title: "Join Botics Video 5",
    description: "Highlights from Join Botics STEM programs and activities",
    youtubeId: "d_tg1bfkCXI",
    category: "all",
  },
  {
    id: 6,
    title: "Join Botics Video 6",
    description: "Highlights from Join Botics STEM programs and activities",
    youtubeId: "QxaD0CBkwGU",
    category: "all",
  },
];

const CATEGORIES = [
  { id: "all", name: "All Gallery Images" },
];

const VIDEO_CATEGORIES = [
  { id: "all", name: "All Videos" },
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
            src="/assets/Gallery Images JB/1.jpeg" 
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
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
              >
                <div className="aspect-video overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
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
