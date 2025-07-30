"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductModal } from "./ProductModal";
import { Product, useCart } from "@/lib/cart-context";
import { Toast } from "./Toast";
import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState("Hombres");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { addToCart } = useCart();

  const categories = ["Hombres", "Mujeres", "Unisex"];

  const products: Product[] = [
    {
      id: 1,
      name: "Oud Royal",
      price: "$150",
      image: "/assets/perfume-3.jpg",
      category: "Hombres",
      description:
        "Una fragancia oriental exótica que combina la riqueza del oud con notas de especias y maderas preciosas.",
      notes: ["Oud", "Sándalo", "Rosa", "Azafrán", "Ámbar"],
      concentration: "Eau de Parfum",
      duration: "8-12 horas",
      size: "100ml",
      origin: "Emiratos Árabes Unidos",
    },
    {
      id: 2,
      name: "Dubai Nights",
      price: "$180",
      image: "/assets/perfume-1.jpg",
      category: "Hombres",
      description:
        "Una experiencia olfativa que captura la magia de las noches de Dubai con notas de incienso y especias orientales.",
      notes: ["Incienso", "Bergamota", "Cardamomo", "Vainilla", "Musk"],
      concentration: "Eau de Parfum",
      duration: "10-14 horas",
      size: "100ml",
      origin: "Emiratos Árabes Unidos",
    },
    {
      id: 3,
      name: "Arabian Rose",
      price: "$160",
      image: "/assets/perfume-3.jpg",
      category: "Mujeres",
      description:
        "Una rosa árabe exquisita combinada con notas florales y orientales para crear una fragancia femenina sofisticada.",
      notes: ["Rosa Damascena", "Jazmín", "Sándalo", "Ámbar", "Vainilla"],
      concentration: "Eau de Parfum",
      duration: "8-12 horas",
      size: "100ml",
      origin: "Emiratos Árabes Unidos",
    },
    {
      id: 4,
      name: "Desert Wind",
      price: "$140",
      image: "/assets/perfume-1.jpg",
      category: "Unisex",
      description:
        "Una fragancia que evoca la brisa del desierto con notas frescas y terrosas que son perfectas para cualquier ocasión.",
      notes: ["Bergamota", "Cedro", "Vetiver", "Musk", "Ámbar Gris"],
      concentration: "Eau de Toilette",
      duration: "6-8 horas",
      size: "100ml",
      origin: "Emiratos Árabes Unidos",
    },
    {
      id: 5,
      name: "Nueva fragancia",
      price: "$140",
      image: "/assets/perfume-1.jpg",
      category: "Unisex",
      description:
        "Una fragancia que evoca la brisa del desierto con notas frescas y terrosas que son perfectas para cualquier ocasión.",
      notes: ["Bergamota", "Cedro", "Vetiver", "Musk", "Ámbar Gris"],
      concentration: "Eau de Toilette",
      duration: "6-8 horas",
      size: "100ml",
      origin: "Emiratos Árabes Unidos",
    },
    {
      id: 6,
      name: "Nueva fragancia",
      price: "$140",
      image: "/assets/perfume-1.jpg",
      category: "Unisex",
      description:
        "Una fragancia que evoca la brisa del desierto con notas frescas y terrosas que son perfectas para cualquier ocasión.",
      notes: ["Bergamota", "Cedro", "Vetiver", "Musk", "Ámbar Gris"],
      concentration: "Eau de Toilette",
      duration: "6-8 horas",
      size: "100ml",
      origin: "Emiratos Árabes Unidos",
    },
    {
      id: 7,
      name: "Nueva fragancia",
      price: "$140",
      image: "/assets/perfume-1.jpg",
      category: "Unisex",
      description:
        "Una fragancia que evoca la brisa del desierto con notas frescas y terrosas que son perfectas para cualquier ocasión.",
      notes: ["Bergamota", "Cedro", "Vetiver", "Musk", "Ámbar Gris"],
      concentration: "Eau de Toilette",
      duration: "6-8 horas",
      size: "100ml",
      origin: "Emiratos Árabes Unidos",
    },
    {
      id: 8,
      name: "Nueva fragancia adfa sdf asdfa sdfa sdfas fasdfa sdfa",
      price: "$140",
      image: "/assets/perfume-1.jpg",
      category: "Unisex",
      description:
        "Una fragancia que evoca la brisa del desierto con notas frescas y terrosas que son perfectas para cualquier ocasión.",
      notes: ["Bergamota", "Cedro", "Vetiver", "Musk", "Ámbar Gris"],
      concentration: "Eau de Toilette",
      duration: "6-8 horas",
      size: "100ml",
      origin: "Emiratos Árabes Unidos",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      activeCategory === "Todos" || product.category === activeCategory
  );

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setToastMessage(`1 unidad de ${product.name} añadida al carrito`);
    setShowToast(true);
  };

  return (
    <section id="catalog" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro <span className="text-primary">Catálogo</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Descubre nuestra colección exclusiva de perfumes de lujo
          </p>

          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-white text-gray-900 hover:bg-gray-100 hover:shadow-luxury"
                    : "border-white text-white hover:bg-white hover:text-gray-900"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-card w-[150px] h-[250px] border-border hover:shadow-card-luxury transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <CardContent className="flex flex-col items-center">
                <div className="aspect-square w-[120px] h-[120px] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="text-xs font-bold truncate w-full text-center">{product.name}</h3>
                <p className="text-xs font-bold text-primary mb-2 mt-1">
                  {product.price}
                </p>
                {/* Botones de acción */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white text-white hover:bg-white hover:text-gray-900 btn-hover-lift"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product);
                    }}
                  >
                    <Eye className="h-2 w-2 mr-1" />
                  </Button>

                  <Button
                    size="sm"
                    className="flex-1 bg-white text-gray-900 hover:bg-gray-100 hover:shadow-luxury btn-hover-lift"
                    onClick={(e) => handleAddToCart(product, e)}
                  >
                    <ShoppingCart className="h-2 w-2 mr-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />

      {/* Toast de notificación */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
};

export default CatalogSection;
