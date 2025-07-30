"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductModal } from "./ProductModal";
import { Product, useCart } from "@/lib/cart-context";
import { Toast } from "./Toast";
import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";

const MostPopular = () => {
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
  ];


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
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo más <span className="text-primary">popular</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Descubre nuestros perfumes más vendidos
          </p>

        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-card border-border hover:shadow-card-luxury transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <CardContent className="p-6">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    width={300}
                    height={300}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  {product.price}
                </p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
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
                    <Eye className="h-4 w-4 mr-1" />
                    Ver
                  </Button>

                  <Button
                    size="sm"
                    className="flex-1 bg-white text-gray-900 hover:bg-gray-100 hover:shadow-luxury btn-hover-lift"
                    onClick={(e) => handleAddToCart(product, e)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Añadir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Contamos con más de 60 perfumes en stock para cada categoría
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 hover:shadow-luxury transform hover:scale-105 transition-all duration-300"
          >
            Ver Catálogo Completo
          </Button>
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

export default MostPopular;
