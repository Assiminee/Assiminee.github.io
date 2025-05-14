
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Technical from "@/components/Technical";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Technical />
      <Testimonials />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
