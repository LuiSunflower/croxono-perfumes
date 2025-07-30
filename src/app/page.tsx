import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CatalogSection from "@/components/CatalogSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import "./app.css";
import MostPopular from "@/components/MostPopular";

const Page = () => {
  return (
    <div className="min-h-screen dark bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MostPopular />
      <CatalogSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
