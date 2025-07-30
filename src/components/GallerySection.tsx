import Image from "next/image";

const GallerySection = () => {
  const galleryImages = [
    { src: "/assets/gallery-1.jpg", alt: "Colección de perfumes de lujo" },
    { src: "/assets/gallery-2.jpg", alt: "Perfumes árabes tradicionales" },
    { src: "/assets/gallery-3.jpg", alt: "Diseñadores exclusivos" },
    { src: "/assets/gallery-4.jpg", alt: "Boutique de fragancias" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Líneas de <span className="text-primary">Perfumes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explora nuestras líneas de perfumes exclusivas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-foreground text-lg font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
