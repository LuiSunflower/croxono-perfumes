export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Croxono Perfumes",
    description:
      "Tienda especializada en perfumes de lujo y fragancias exclusivas para hombres y mujeres",
    url: "https://croxono-perfumes-4rnh.onrender.com",
    logo: "https://croxono-perfumes-4rnh.onrender.com/assets/croxono-logo.jpeg",
    image: "https://croxono-perfumes-4rnh.onrender.com/assets/hero-perfume.jpg",
    telephone: "+57 320 3296712",
    email: "contacto@croxono.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
      addressLocality: "Colombia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "4.7110",
      longitude: "-74.0721",
    },
    openingHours: "Mo-Su 09:00-18:00",
    priceRange: "$$",
    currenciesAccepted: "COP, USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Perfumes de Lujo",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Perfumes para Hombres",
            description: "Colección exclusiva de perfumes para hombres",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Perfumes para Mujeres",
            description: "Colección exclusiva de perfumes para mujeres",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/croxonoperfumes",
      "https://www.instagram.com/croxonoperfumes",
      "https://twitter.com/croxonoperfumes",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
