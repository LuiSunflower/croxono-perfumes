export default function ProductStructuredData() {
  const products = [
    {
      "@type": "Product",
      name: "Oud Royal",
      description:
        "Una fragancia oriental exótica que combina la riqueza del oud con notas de especias y maderas preciosas.",
      brand: {
        "@type": "Brand",
        name: "Croxono",
      },
      category: "Perfumes para Hombres",
      offers: {
        "@type": "Offer",
        price: "150",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Croxono Perfumes",
        },
      },
      image: "https://croxono-perfumes-4rnh.onrender.com/assets/perfume-1.jpg",
    },
    {
      "@type": "Product",
      name: "Dubai Nights",
      description:
        "Una experiencia olfativa que captura la magia de las noches de Dubai con notas de incienso y especias orientales.",
      brand: {
        "@type": "Brand",
        name: "Croxono",
      },
      category: "Perfumes para Hombres",
      offers: {
        "@type": "Offer",
        price: "180",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Croxono Perfumes",
        },
      },
      image: "https://croxono-perfumes-4rnh.onrender.com/assets/perfume-3.jpg",
    },
    {
      "@type": "Product",
      name: "Arabian Rose",
      description:
        "Una rosa árabe exquisita combinada con notas florales y orientales para crear una fragancia femenina sofisticada.",
      brand: {
        "@type": "Brand",
        name: "Croxono",
      },
      category: "Perfumes para Mujeres",
      offers: {
        "@type": "Offer",
        price: "160",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Croxono Perfumes",
        },
      },
      image: "https://croxono-perfumes-4rnh.onrender.com/assets/perfume-1.jpg",
    },
    {
      "@type": "Product",
      name: "Desert Wind",
      description:
        "Una fragancia que evoca la brisa del desierto con notas frescas y terrosas que son perfectas para cualquier ocasión.",
      brand: {
        "@type": "Brand",
        name: "Croxono",
      },
      category: "Perfumes Unisex",
      offers: {
        "@type": "Offer",
        price: "140",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Croxono Perfumes",
        },
      },
      image: "https://croxono-perfumes-4rnh.onrender.com/assets/perfume-3.jpg",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de Perfumes Croxono",
    description:
      "Colección exclusiva de perfumes de lujo y fragancias orientales",
    url: "https://croxono-perfumes-4rnh.onrender.com",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: product,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
