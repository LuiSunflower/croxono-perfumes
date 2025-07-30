"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { ShoppingBag, Trash2, Plus, Minus, MessageCircle } from "lucide-react";
import Image from "next/image";

export function CartSheet() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const phoneNumber = "+573203296712";
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const generateWhatsAppMessage = () => {
    const header = "🛍️ *SOLICITUD DE COMPRA - CROXONO PERFUMES*\n\n";
    const itemsList = items
      .map(
        (item) =>
          `• *${item.product.name}* - ${item.product.price} x${item.quantity}`
      )
      .join("\n");
    const total = `\n💰 *Total: ${getTotalPrice()}*\n\n`;
    const footer =
      "Por favor, confirma mi pedido y proporciona información de envío. ¡Gracias!";

    return header + itemsList + total + footer;
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Carrito de Compras</span>
          </SheetTitle>
          <SheetDescription>
            {items.length === 0
              ? "Tu carrito está vacío"
              : `${getTotalItems()} producto${
                  getTotalItems() !== 1 ? "s" : ""
                } en el carrito`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full p-4">
          {/* Lista de productos */}
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No hay productos en tu carrito</p>
                <p className="text-sm">
                  ¡Agrega algunos perfumes para comenzar!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex space-x-4 p-4 border rounded-lg"
                  >
                    {/* Imagen del producto */}
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>

                    {/* Información del producto */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.product.price}
                      </p>

                      {/* Controles de cantidad */}
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="h-6 w-6 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="h-6 w-6 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Botón eliminar */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.product.id)}
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Resumen y botones */}
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">
                  {getTotalPrice()}
                </span>
              </div>

              {/* Botones de acción */}
              <div className="space-y-2">
                <Button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-white text-gray-900 hover:bg-gray-100"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Comprar por WhatsApp
                </Button>

                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="w-full border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Vaciar Carrito
                </Button>
              </div>

              {/* Información adicional */}
              <div className="text-xs text-muted-foreground text-center">
                <p>
                  Al hacer clic en &quot;Comprar por WhatsApp&quot; se abrirá una
                  conversación con nuestro equipo de ventas.
                </p>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
