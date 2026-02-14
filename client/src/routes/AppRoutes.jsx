import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Certifications from "../pages/Certifications";
import GlobalExposure from "../pages/GlobalExposure";
import Programs from "../pages/Programs";
import Products from "../pages/Products";
import Kits from "../pages/Kits";
import Contact from "../pages/Contact";
import LMS from "../pages/LMS";
import SuccessStories from "../pages/SuccessStories";
import Blogs from "../pages/Blogs";
import Careers from "../pages/Careers";
import FAQ from "../pages/FAQ";
import AIProjects from "../pages/AIProjects";
import AdminEmails from "../pages/AdminEmails";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/global-exposure" element={<GlobalExposure />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/kits" element={<Kits />} />
      <Route path="/lms" element={<LMS />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/ai-projects" element={<AIProjects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/admin/manage-emails" element={<AdminEmails />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
