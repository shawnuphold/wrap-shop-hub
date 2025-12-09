import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import PricingSection from "@/components/PricingSection";
import CompareSection from "@/components/CompareSection";
import AboutSection from "@/components/AboutSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <WhoItsForSection />
      <PricingSection />
      <CompareSection />
      <AboutSection />
      <FooterCTA />
      <Footer />
    </main>
  );
};

export default Index;
