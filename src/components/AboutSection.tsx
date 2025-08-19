import { Shield, Lock, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Garantía",
      description: "Productos 100% originales con garantía de calidad"
    },
    {
      icon: Lock,
      title: "Seguridad",
      description: "Transacciones seguras y protección de datos"
    },
    {
      icon: Eye,
      title: "Transparencia",
      description: "Precios claros y asesoría profesional honesta"
    },
    {
      icon: Eye,
      title: "Asesoría",
      description: "Conexión personalizada con tu esencia ideal"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pasión por los perfumes de <span className="text-primary">élite</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Croxono es una plataforma virtual dedicada a ayudarte a elegir tu perfume ideal mediante la asesoría confiable y de alta calidad en perfumes de lujo. Nacimos en 2024 con la visión de hacer accesible lo exclusivo, facilitando la adquisición de perfumes de alta gama como Árabes y diseñadores desde cualquier lugar ofreciendo precios asombrosos y asesoría profesional para que puedas conectar tu esencia ideal con el mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-card-luxury transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-14 h-14 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;