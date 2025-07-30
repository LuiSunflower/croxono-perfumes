"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product, useCart } from "@/lib/cart-context";
import { Toast } from "./Toast";
import Image from "next/image";
import { Clock, MapPin, Droplets, Package, Star } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setShowToast(true);
    onClose();
    setQuantity(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {product.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Imagen del producto */}
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            {/* Precio y categoría */}
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-primary">
                {product.price}
              </div>
              <Badge variant="secondary" className="text-sm">
                {product.category}
              </Badge>
            </div>

            {/* Características principales */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Droplets className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Concentración</p>
                  <p className="text-sm">{product.concentration}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duración</p>
                  <p className="text-sm">{product.duration}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Tamaño</p>
                  <p className="text-sm">{product.size}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Origen</p>
                  <p className="text-sm">{product.origin}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          {/* Notas olfativas */}
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <Star className="h-5 w-5 mr-2 text-primary" />
              Notas Olfativas
            </h4>
            <div className="flex flex-wrap gap-2 w-full">
              {product.notes.map((note, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {note}
                </Badge>
              ))}
            </div>
          </div>

          {/* Selector de cantidad */}
          <div className="flex items-center space-x-4 mt-4 ">
            <label className="text-sm font-medium">Cantidad:</label>
            <div className="flex items-center border rounded-lg">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-8 w-8 p-0"
              >
                -
              </Button>
              <span className="px-4 py-1 min-w-[3rem] text-center">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
                className="h-8 w-8 p-0"
              >
                +
              </Button>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3 mr-4">
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-white text-gray-900 hover:bg-gray-100 hover:shadow-luxury"
            >
              Añadir al Carrito ({quantity})
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-white text-white hover:bg-white hover:text-gray-900"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContent>

      <Toast
        message={`${quantity} ${quantity === 1 ? "unidad" : "unidades"} de ${
          product.name
        } añadida${quantity === 1 ? "" : "s"} al carrito`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </Dialog>
  );
}
