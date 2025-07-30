# Sistema de Compras - Croxono Perfumes

## 🛍️ Descripción

Este proyecto incluye un sistema completo de compras con carrito, modal de productos detallados e integración con WhatsApp para finalizar las compras.

## 🚀 Características Principales

- ✅ **Catálogo detallado**: Información completa de cada perfume
- ✅ **Modal de producto**: Vista detallada con especificaciones
- ✅ **Carrito de compras**: Gestión completa de productos
- ✅ **Integración WhatsApp**: Compra directa por mensaje
- ✅ **Persistencia**: Carrito guardado en localStorage
- ✅ **Notificaciones**: Toast de confirmación
- ✅ **Responsive**: Funciona en todos los dispositivos

## 📁 Estructura de Archivos

```
src/
├── lib/
│   └── cart-context.tsx     # Contexto del carrito
├── components/
│   ├── ProductModal.tsx     # Modal de producto detallado
│   ├── CartSheet.tsx        # Carrito lateral
│   ├── Toast.tsx            # Notificaciones
│   └── CatalogSection.tsx   # Catálogo actualizado
└── app/
    └── layout.tsx           # Layout con providers
```

## 🎯 Funcionalidades

### 1. **Catálogo Mejorado**

Cada producto ahora incluye:
- **Descripción detallada**
- **Notas olfativas**
- **Concentración**
- **Duración**
- **Tamaño**
- **Origen**

### 2. **Modal de Producto**

Al hacer clic en "Ver Detalles":
- Vista completa del producto
- Imagen en alta resolución
- Todas las especificaciones
- Selector de cantidad
- Botón "Añadir al Carrito"

### 3. **Carrito de Compras**

Características:
- **Contador de productos** en la navegación
- **Vista lateral** con lista de productos
- **Control de cantidades** (+/-)
- **Eliminar productos**
- **Cálculo automático** del total
- **Vaciar carrito**

### 4. **Integración WhatsApp**

Al hacer clic en "Comprar por WhatsApp":
- Genera mensaje automático con productos
- Incluye cantidades y precios
- Calcula total automáticamente
- Abre conversación con +57 320 3296712

## 🔧 Cómo Usar

### **Ver Productos**
1. Navega a la sección "Catálogo"
2. Filtra por categoría (Hombres/Mujeres/Unisex)
3. Haz clic en cualquier producto o "Ver Detalles"

### **Añadir al Carrito**
1. Abre el modal del producto
2. Selecciona la cantidad deseada
3. Haz clic en "Añadir al Carrito"
4. Recibe notificación de confirmación

### **Gestionar Carrito**
1. Haz clic en el icono del carrito en la navegación
2. Modifica cantidades con +/- 
3. Elimina productos con el botón de basura
4. Vacía todo el carrito si es necesario

### **Comprar por WhatsApp**
1. Asegúrate de tener productos en el carrito
2. Haz clic en "Comprar por WhatsApp"
3. Se abrirá WhatsApp con el mensaje pre-llenado
4. Envía el mensaje para confirmar tu pedido

## 📱 Mensaje de WhatsApp

El sistema genera automáticamente un mensaje como este:

```
🛍️ SOLICITUD DE COMPRA - CROXONO PERFUMES

• Oud Royal - $150 x2
• Dubai Nights - $180 x1

💰 Total: $480.00

Por favor, confirma mi pedido y proporciona información de envío. ¡Gracias!
```

## 🎨 Componentes UI

### **ProductModal**
- Modal responsivo con información completa
- Selector de cantidad integrado
- Botones de acción claros
- Notificación de éxito

### **CartSheet**
- Panel lateral deslizable
- Lista de productos con controles
- Resumen de compra
- Botón de WhatsApp destacado

### **Toast**
- Notificación temporal
- Auto-desaparición
- Diseño atractivo
- Posición fija

## 🔄 Flujo de Compra

1. **Explorar**: Usuario navega por el catálogo
2. **Detalles**: Abre modal para ver información completa
3. **Añadir**: Selecciona cantidad y añade al carrito
4. **Revisar**: Abre carrito para ver productos
5. **Comprar**: Hace clic en WhatsApp para finalizar
6. **Confirmar**: Envía mensaje al equipo de ventas

## 🛠️ Personalización

### **Añadir Nuevos Productos**

Edita `src/components/CatalogSection.tsx`:

```tsx
const products: Product[] = [
  {
    id: 5,
    name: "Nuevo Perfume",
    price: "$200",
    image: "/assets/nuevo-perfume.jpg",
    category: "Hombres",
    description: "Descripción del nuevo perfume...",
    notes: ["Nota 1", "Nota 2", "Nota 3"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "Emiratos Árabes Unidos",
  },
];
```

### **Cambiar Número de WhatsApp**

Edita `src/components/CartSheet.tsx`:

```tsx
const phoneNumber = "+573203296712"; // Cambia aquí
```

### **Personalizar Mensaje**

Modifica la función `generateWhatsAppMessage()` en `CartSheet.tsx`.

## 🐛 Solución de Problemas

### **Carrito no persiste**
- Verifica que `CartProvider` esté en el layout
- Asegúrate de que localStorage esté habilitado

### **Modal no se abre**
- Verifica que el producto tenga todos los campos requeridos
- Revisa la consola para errores de JavaScript

### **WhatsApp no abre**
- Verifica que el número esté en formato internacional
- Asegúrate de que el mensaje no sea demasiado largo

### **Imágenes no cargan**
- Verifica que las rutas sean correctas
- Asegúrate de que las imágenes estén en `public/assets/`

## 📊 Datos de Productos

### **Estructura de Product**
```typescript
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  notes: string[];
  concentration: string;
  duration: string;
  size: string;
  origin: string;
}
```

### **Categorías Disponibles**
- Hombres
- Mujeres
- Unisex

### **Concentraciones**
- Eau de Toilette
- Eau de Parfum
- Parfum

## 🎯 Mejores Prácticas

1. **Siempre incluye descripciones** completas
2. **Usa imágenes de alta calidad** (300x300px mínimo)
3. **Mantén precios actualizados**
4. **Verifica que las notas olfativas** sean precisas
5. **Prueba el flujo completo** antes de publicar

## 📱 Compatibilidad

- ✅ Chrome/Edge (basado en Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers
- ✅ WhatsApp Web/App

## 🔮 Próximas Mejoras

- [ ] Filtros avanzados (precio, concentración)
- [ ] Wishlist de productos
- [ ] Historial de compras
- [ ] Reseñas de clientes
- [ ] Sistema de cupones
- [ ] Múltiples métodos de pago 