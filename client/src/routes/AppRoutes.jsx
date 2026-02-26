import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Certifications from "../pages/Certifications";
// import GlobalExposure from "../pages/GlobalExposure";
import Programs from "../pages/Programs";
import TechnoTamersLab from "../pages/TechnoTamersLab";
import ActivityCenter from "../pages/ActivityCenter";
import College from "../pages/College";
import CorporateTraining from "../pages/CorporateTraining";
import Products from "../pages/Products";
// import Kits from "../pages/Kits";
import Contact from "../pages/Contact";
import LMS from "../pages/LMS";
// import SuccessStories from "../pages/SuccessStories";
import Gallery from "../pages/Gallery";
import Careers from "../pages/Careers";
import FAQ from "../pages/FAQ";
import AIProjects from "../pages/AIProjects";
import Franchise from "../pages/Franchise";
import AdminEmails from "../pages/AdminEmails";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/certifications" element={<Certifications />} />
      {/* <Route path="/global-exposure" element={<GlobalExposure />} /> */}
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/techno-tamers-lab" element={<TechnoTamersLab />} />
      <Route path="/techno-tamers-lab" element={<TechnoTamersLab />} />
      <Route path="/programs/activity-center" element={<ActivityCenter />} />
      <Route path="/activity-center" element={<ActivityCenter />} />
      <Route path="/programs/college" element={<College />} />
      <Route path="/programs/corporate-training" element={<CorporateTraining />} />
      <Route path="/products" element={<Products />} />
      {/* <Route path="/kits" element={<Kits />} /> */}
      <Route path="/lms" element={<LMS />} />
      {/* <Route path="/success-stories" element={<SuccessStories />} /> */}
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/ai-projects" element={<AIProjects />} />
      <Route path="/franchise" element={<Franchise />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/admin/manage-emails" element={<AdminEmails />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
