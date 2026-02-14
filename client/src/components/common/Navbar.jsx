import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [heroPresent, setHeroPresent] = useState(true);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const hero = document.getElementById("hero");

    function checkHero() {
      if (!hero) return false;
      // If hero contains a video element, treat it as present
      if (hero.querySelector("video")) return true;
      // otherwise try to detect background image on the hero's bg div
      const bgDiv = hero.querySelector(".bg-center.bg-cover") || hero.querySelector("div");
      if (!bgDiv) return false;
      const bg = getComputedStyle(bgDiv).backgroundImage || "none";
      return !!bg && bg !== "none" && bg !== "initial";
    }

    function onScroll() {
      setScrolled(window.scrollY > 60);
    }

    // determine hero presence once at mount and on resize
    setHeroPresent(checkHero());
    window.addEventListener("resize", () => setHeroPresent(checkHero()));

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", () => setHeroPresent(checkHero()));
    };
  }, []);

  // Home page: transparent when not scrolled, glassmorphism when scrolled
  // Other pages: white when not scrolled, glassmorphism when scrolled
  const headerClass = scrolled
    ? "fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300 ease-in-out"
    : isHomePage
    ? "fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ease-in-out"
    : "fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 ease-in-out";

  const linkClass = (isActive) => {
    // On home page: light text when not scrolled (transparent), dark when scrolled (glassmorphism)
    // On other pages: always dark text (white or glassmorphism background)
    const useDarkText = scrolled || !isHomePage;
    const base = `uppercase text-sm transition-colors duration-300 nav-underline`;
    if (useDarkText) {
      return `${base} ${isActive ? 'text-gray-900 font-semibold nav-underline-active' : 'text-gray-700 hover:text-gray-900'}`;
    }
    return `${base} ${isActive ? 'text-white font-semibold nav-underline-active' : 'text-white/90 hover:text-white'}`;
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={headerClass}
      >
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between gap-4 px-0 py-4 min-h-[88px] transition-all duration-300">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/assets/joinbotics-logo.svg"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/joinbotics-logo.png'; }}
              alt="JoinBotics"
              className={`h-[70px] md:h-20 w-auto object-contain transition-all duration-300 ${!scrolled && isHomePage ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 font-medium relative">
            {/** show first 5 links, rest go under More */}
            <NavLink to="/" end className={({ isActive }) => linkClass(isActive)}>
              Home
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => linkClass(isActive)}>
              About Us
            </NavLink>

            <NavLink to="/certifications" className={({ isActive }) => linkClass(isActive)}>
              AI Certs
            </NavLink>

            <NavLink to="/programs" className={({ isActive }) => linkClass(isActive)}>
              Programs
            </NavLink>

            <NavLink to="/kits" className={({ isActive }) => linkClass(isActive)}>
              Products
            </NavLink>

            {/* More dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setMoreOpen(true);
              }}
              onMouseLeave={() => {
                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = setTimeout(() => {
                  setMoreOpen(false);
                  closeTimeoutRef.current = null;
                }, 180);
              }}
            >
              <button
                onClick={() => setMoreOpen((s) => !s)}
                className={`uppercase text-sm transition-colors duration-300 flex items-center gap-2 ${scrolled || !isHomePage ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'}`}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
              >
                More
                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>

              {moreOpen && (
                <div className="absolute right-0 mt-3 w-48 rounded-lg shadow-lg bg-white text-gray-800 ring-1 ring-black/5 transition-all duration-200 ease-in-out" role="menu">
                  <div className="py-2">
                    <NavLink to="/global-exposure" className={({ isActive }) => `block px-4 py-2 text-sm transition-colors duration-200 ${isActive ? 'font-semibold bg-[#c11e38] text-white' : 'hover:bg-[#c11e38] hover:text-white'}`}>
                      Global Exposure
                    </NavLink>
                    <NavLink to="/success-stories" className={({ isActive }) => `block px-4 py-2 text-sm transition-colors duration-200 ${isActive ? 'font-semibold bg-[#c11e38] text-white' : 'hover:bg-[#c11e38] hover:text-white'}`}>
                      Success Stories
                    </NavLink>
                    <NavLink to="/ai-projects" className={({ isActive }) => `block px-4 py-2 text-sm transition-colors duration-200 ${isActive ? 'font-semibold bg-[#c11e38] text-white' : 'hover:bg-[#c11e38] hover:text-white'}`}>
                      AI Projects
                    </NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => `block px-4 py-2 text-sm transition-colors duration-200 ${isActive ? 'font-semibold bg-[#c11e38] text-white' : 'hover:bg-[#c11e38] hover:text-white'}`}>
                      Blogs
                    </NavLink>
                    <NavLink to="/careers" className={({ isActive }) => `block px-4 py-2 text-sm transition-colors duration-200 ${isActive ? 'font-semibold bg-[#c11e38] text-white' : 'hover:bg-[#c11e38] hover:text-white'}`}>
                      Careers
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `block px-4 py-2 text-sm transition-colors duration-200 ${isActive ? 'font-semibold bg-[#c11e38] text-white' : 'hover:bg-[#c11e38] hover:text-white'}`}>
                      Contact Us
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="group relative overflow-hidden rounded-xl h-11 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-[#c11e38] to-[#e63946] text-white text-sm font-bold shadow-lg shadow-[#c11e38]/30 hover:shadow-xl hover:shadow-[#c11e38]/50 max-w-fit transition-all duration-500 border border-[#c11e38]/20 active:shadow-[0_0_25px_rgba(193,30,56,0.8)]"
            >
              <span className="relative z-10 flex items-center gap-1">
                <span className="hidden sm:inline">Contact us</span>
                <FiArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 ml-1" aria-hidden />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#e63946] to-[#c11e38] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#c11e38] to-[#e63946] opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10"></span>
            </motion.a>
            {/* mobile menu button - visible on small screens */}
            <motion.button
              onClick={() => setMobileOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden ml-2 inline-flex items-center justify-center rounded-xl h-11 w-11 transition-all duration-500 border active:shadow-[0_0_25px_rgba(193,30,56,0.8)] ${
                scrolled || !isHomePage 
                  ? 'text-[#c11e38] bg-gradient-to-br from-gray-100 to-gray-200 border-[#c11e38]/20 shadow-md hover:shadow-lg hover:shadow-[#c11e38]/30' 
                  : 'text-white bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-md shadow-md hover:shadow-lg hover:shadow-white/30'
              }`}
              aria-label="Open menu"
            >
              <FaBars className="w-5 h-5" />
              <span className="absolute inset-0 rounded-xl blur-lg bg-gradient-to-r from-[#c11e38] to-[#e63946] opacity-0 hover:opacity-50 transition-opacity duration-500 -z-10"></span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden bg-gradient-to-br from-[#220b34] to-[#c11e38]">
          {/* Full screen menu content */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full flex flex-col p-6 overflow-y-auto"
          >
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between mb-12 flex-shrink-0">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <img src="/assets/joinbotics-logo.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/joinbotics-logo.png'; }} alt="JoinBotics" className="h-12 w-auto object-contain brightness-0 invert" />
              </Link>
              <button 
                onClick={() => setMobileOpen(false)} 
                className="p-3 rounded-full text-white bg-white/10 hover:bg-white/20 transition-all"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 flex flex-col justify-center gap-4 py-8">
              <NavLink 
                to="/" 
                end 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-2xl font-semibold py-3 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-2xl font-semibold py-3 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/certifications" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-2xl font-semibold py-3 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                AI Certs
              </NavLink>
              <NavLink 
                to="/programs" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-2xl font-semibold py-3 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                Programs
              </NavLink>
              <NavLink 
                to="/kits" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-2xl font-semibold py-3 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                Products
              </NavLink>
              
              {/* Divider */}
              <div className="border-t border-white/20 my-2"></div>
              
              <NavLink 
                to="/global-exposure" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-xl font-medium py-2 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                Global Exposure
              </NavLink>
              <NavLink 
                to="/success-stories" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-xl font-medium py-2 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                Success Stories
              </NavLink>
              <NavLink 
                to="/ai-projects" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-xl font-medium py-2 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                AI Projects
              </NavLink>
              <NavLink 
                to="/blogs" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-xl font-medium py-2 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                Blogs
              </NavLink>
              <NavLink 
                to="/careers" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-xl font-medium py-2 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                Careers
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `text-xl font-medium py-2 px-4 rounded-lg transition-all nav-underline ${isActive ? 'bg-white/20 text-white nav-underline-active' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                Contact Us
              </NavLink>
            </nav>

            {/* Footer */}
            <div className="mt-8 text-center text-white/60 text-sm flex-shrink-0">
              © 2026 JoinBotics. All rights reserved.
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
