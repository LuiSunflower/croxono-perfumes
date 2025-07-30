import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

import { CartSheet } from "./CartSheet";
import Image from "next/image";

const Navigation = () => {
  const navItems = [
    { name: "Inicio", href: "#" },
    { name: "Quiénes Somos", href: "#about" },
    { name: "Catálogo", href: "#catalog" },
    { name: "Líneas", href: "#gallery" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
            <Image
              src="/assets/croxono-logo.jpeg"
              alt="Croxono"
              className="w-8 h-8"
              width={40}
              height={40}
            />
            </div>
            <span className="text-2xl font-bold text-foreground">CROXONO</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <CartSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
