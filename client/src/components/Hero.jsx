import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 md:pt-24">
      {/* Background video playlist. Place your videos in /public/assets and update filenames if needed. */}
      <BackgroundVideo />

      

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl px-6 py-28"
      >
        <div className="flex flex-col items-start gap-8">
          <div className="w-full max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block text-white"
              >
                <span>Empowering </span>
                <span>the </span>
                <span>Future </span>
                <span>with </span>
                <span className="shimmer-text" style={{ animationDelay: '0s' }}>Robotics, </span>
                <span className="shimmer-text" style={{ animationDelay: '1.2s' }}>Automation </span>
                <span className="shimmer-text" style={{ animationDelay: '2.4s' }}>& </span>
                <span className="shimmer-text" style={{ animationDelay: '3.6s' }}>STEAM</span>
              </motion.span>
            </h1>
            <div className="mt-6 flex gap-4">
              <a
                href="/contact"
                className="demo-btn inline-block rounded-xl px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold border border-white/20 transition-all relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Request Demo</span>
                </span>
              </a>
              <a
                href="/programs"
                className="inline-block rounded-xl px-6 py-3 bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-[#c11e38]/50 transition-all duration-300 hover:scale-105 hover:from-[#d42847] hover:to-[#2d0e42] relative overflow-hidden group"
              >
                <span className="relative z-10">Download Brochure</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BackgroundVideo() {
  const videos = [
    "/assets/hero1.mp4",
    "/assets/hero2.mp4",
    "/assets/hero3.mp4",
    "/assets/hero4.mp4",
  ];

  const videoRef = useRef(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // try to autoplay muted for modern browsers
    vid.muted = true;
    vid.playsInline = true;
    vid.autoplay = true;

    function handleEnded() {
      const next = (idx + 1) % videos.length;
      setIdx(next);
    }

    vid.addEventListener("ended", handleEnded);

    // load/play current
    vid.src = videos[idx];
    vid.load();
    const p = vid.play();
    if (p && typeof p.catch === "function") p.catch(() => { /* autoplay blocked */ });

    return () => {
      vid.removeEventListener("ended", handleEnded);
    };
  }, [idx]);

  return (
    <>
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover bg-center"
          aria-hidden
        />
      </div>

      {/* Dark overlay to improve contrast */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />
    </>
  );
}
