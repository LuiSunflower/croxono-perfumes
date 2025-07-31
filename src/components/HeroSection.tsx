import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/assets/hero-perfume.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-overlay"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Tu aroma, <span className="text-primary">tu huella</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Perfumes de alta gama para cada ocasión
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-luxury transform hover:scale-105 transition-all duration-300"
          >
            <Link href="#most-popular">Ver Perfumes más populares</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            <Link href="#contact">Contáctanos</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
