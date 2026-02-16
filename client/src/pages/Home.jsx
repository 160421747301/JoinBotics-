import Hero from "../components/Hero";
import WhyJoin from "../components/WhyJoin";
import Movement from "../components/Movement";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CurriculumStructure from "../components/CurriculumStructure";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Top Banner: Students + Robotics video, Tagline, CTAs */}
      <Hero />

      {/* Why Join Botics: Key features in icon/card layout */}
      <WhyJoin />

      {/* Join the Join Botics Movement */}
      <Movement />

      {/* Impact Metrics: Stats on schools, students, projects, ATL success */}
      <Stats />

      {/* Testimonials: Carousel of principal, teacher, student quotes */}
      <Testimonials />

      {/* Curriculum Structure: Age-based pathways and tech topics */}
      <CurriculumStructure />

      {/* Call to Action: "Partner with Us," "Book the Demo" */}
      <CTA />

      <Footer />
    </main>
  );
}
