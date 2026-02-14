import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#220b34] w-full">
      <div className="w-full">
        <div className="text-white">
          <div className="px-8 py-12 md:py-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <img 
                    src="/assets/joinbotics-logo.svg"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/joinbotics-logo.png'; }}
                    alt="JoinBotics" 
                    className="h-20 md:h-24 w-auto object-contain brightness-0 invert cursor-pointer"
                  />
                </Link>
                <p className="mt-4 text-slate-300 max-w-xs leading-relaxed">
                  Empowering the next generation with hands-on STEAM education in Robotics, AI, Coding, and Innovation.
                </p>

                {/* Contact Info */}
                <div className="mt-6 space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="flex-shrink-0" />
                    <a href="mailto:connect@joinbotics.com" className="hover:text-white transition-colors">connect@joinbotics.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="flex-shrink-0" />
                    <div className="flex gap-2">
                      <a href="tel:+919986780347" className="hover:text-white transition-colors">+91 99867 80347</a>
                      <span>/</span>
                      <a href="tel:+916361212260" className="hover:text-white transition-colors">+91 63612 12260</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt className="flex-shrink-0 mt-1" />
                    <span>Bangalore | Pune | Aurangabad | Ahmedabad</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-3">Follow Us</h4>
                  <div className="flex items-center gap-3">
                    <a href="https://www.facebook.com/joinbotic" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2] transition-colors text-white">
                      <FaFacebookF size={16} />
                    </a>
                    <a href="https://www.instagram.com/join.botics" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] transition-colors text-white">
                      <FaInstagram size={16} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCTKhHUVWkKGhawTqEwMl5AA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#FF0000] transition-colors text-white">
                      <FaYoutube size={16} />
                    </a>
                    <a href="https://www.linkedin.com/company/joinbotics" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#0A66C2] transition-colors text-white">
                      <FaLinkedinIn size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-slate-300 text-sm font-medium mb-4">Quick Links</h4>
                  <ul className="mt-4 space-y-3 text-slate-200 text-sm">
                    <li><a className="hover:text-white transition-colors" href="/">Home</a></li>
                    <li><a className="hover:text-white transition-colors" href="/about">About Us</a></li>
                    <li><a className="hover:text-white transition-colors" href="/programs">Programs</a></li>
                    <li><a className="hover:text-white transition-colors" href="/contact">Contact</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-300 text-sm font-medium mb-4">Services</h4>
                  <ul className="mt-4 space-y-3 text-slate-200 text-sm">
                    <li><a className="hover:text-white transition-colors" href="/programs">For Schools</a></li>
                    <li><a className="hover:text-white transition-colors" href="/programs">For Students</a></li>
                    <li><a className="hover:text-white transition-colors" href="/kits">Robotics Kits</a></li>
                    <li><a className="hover:text-white transition-colors" href="/lms">LMS Platform</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-300 text-sm font-medium mb-4">Resources</h4>
                  <ul className="mt-4 space-y-3 text-slate-200 text-sm">
                    <li><a className="hover:text-white transition-colors" href="/blogs">Blog</a></li>
                    <li><a className="hover:text-white transition-colors" href="/success-stories">Success Stories</a></li>
                    <li><a className="hover:text-white transition-colors" href="/faq">FAQ</a></li>
                    <li><a className="hover:text-white transition-colors" href="/careers">Careers</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-60"><path d="M12 16l-6-6h12l-6 6z" fill="currentColor"/></svg>
            </div>
          </div>

          <div className="px-8 pb-8 max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-slate-300 text-sm">© {new Date().getFullYear()} JoinBotics, Inc. All rights reserved.</div>
              <div className="flex items-center gap-6">
                <a className="text-slate-300 text-sm hover:text-white" href="/privacy-policy">Privacy Policy</a>
                <a className="text-slate-300 text-sm hover:text-white" href="/terms-of-service">Terms of Service</a>
                <a className="text-slate-300 text-sm hover:text-white" href="/contact">Report an Issue</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
