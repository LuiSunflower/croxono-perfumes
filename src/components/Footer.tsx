import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/croxono" },
    { icon: Instagram, href: "https://www.instagram.com/croxono" },
    { icon: Twitter, href: "https://www.x.com/croxono" },
  ];

  const quickLinks = [
    "Política de Privacidad",
    "Términos y Condiciones",
    "Garantía",
    "Envíos",
    "Devoluciones"
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="text-2xl font-bold text-foreground">CROXONO</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Tu plataforma de confianza para perfumes de lujo y asesoría profesional.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Perfumes para Hombres</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Perfumes para Mujeres</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Perfumes Unisex</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 Croxono. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;