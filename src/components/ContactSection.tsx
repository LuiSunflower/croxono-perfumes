import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+57 320 3296712",
      href: "https://wa.me/573203296712",
    },
    {
      icon: Mail,
      title: "Email",
      info: "contacto@croxono.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Servicio Mundial",
    },
    {
      icon: Clock,
      title: "Horario",
      info: "24/7 Asesoría Online",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos aquí para ayudarte a encontrar tu fragancia perfecta
          </p>
        </div>

        <div className="flex items-center justify-center">
          {/* Contact Information */}
          <div className="">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h4 className="font-semibold">{item.title}</h4>
                          <div className="flex items-center space-x-2">
                            <item.icon className="w-6 h-6" />
                            <a
                              href={item.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <p className="text-muted-foreground">
                                {item.info}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
