# Guía de Manejo de Imágenes - Croxono Perfumes

## 🖼️ Descripción

Esta guía explica cómo manejar correctamente las imágenes en el proyecto Next.js de Croxono Perfumes.

## 📁 Estructura de Archivos

```
public/
└── assets/
    ├── croxono-logo.jpeg
    ├── hero-perfume.jpg
    ├── perfume-1.jpg
    ├── perfume-3.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    └── gallery-4.jpg
```

## 🚀 Cómo Usar Imágenes

### 1. **Imágenes Estáticas (Recomendado)**

Para imágenes que no cambian, colócalas en `public/assets/` y úsalas así:

```tsx
import Image from "next/image";

// En componentes
<Image 
  src="/assets/croxono-logo.jpeg" 
  alt="Logo Croxono" 
  width={40} 
  height={40}
  className="rounded"
/>
```

### 2. **Imágenes de Fondo**

Para imágenes de fondo en CSS:

```tsx
// En componentes
<div 
  className="bg-cover bg-center"
  style={{
    backgroundImage: `url('/assets/hero-perfume.jpg')`
  }}
>
  Contenido
</div>
```

### 3. **Imágenes Dinámicas**

Para imágenes que cambian según datos:

```tsx
const products = [
  {
    id: 1,
    name: "Oud Royal",
    image: "/assets/perfume-3.jpg"
  }
];

{products.map(product => (
  <Image 
    key={product.id}
    src={product.image}
    alt={product.name}
    width={300}
    height={300}
  />
))}
```

## ⚙️ Configuración de Next.js

El archivo `next.config.ts` está configurado para optimizar imágenes:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
```

## 🎯 Mejores Prácticas

### 1. **Optimización**
- ✅ Usa el componente `Image` de Next.js
- ✅ Especifica `width` y `height`
- ✅ Añade `alt` descriptivo
- ✅ Usa formatos optimizados (WebP, AVIF)

### 2. **Organización**
- ✅ Coloca imágenes en `public/assets/`
- ✅ Usa nombres descriptivos
- ✅ Mantén una estructura clara

### 3. **Rendimiento**
- ✅ Comprime imágenes antes de subirlas
- ✅ Usa tamaños apropiados
- ✅ Considera lazy loading para imágenes grandes

## 🔧 Comandos Útiles

### Mover imágenes a public/assets
```bash
# Crear directorio
mkdir -p public/assets

# Copiar imágenes
copy src\assets\* public\assets\
```

### Optimizar imágenes
```bash
# Instalar herramienta de optimización
npm install -g imagemin-cli

# Optimizar todas las imágenes
imagemin public/assets/* --out-dir=public/assets/optimized
```

## 🐛 Solución de Problemas

### Error: "Cannot find module"
- Verifica que la ruta sea correcta
- Asegúrate de que la imagen existe en `public/assets/`
- Usa rutas absolutas desde la raíz (`/assets/`)

### Error: "Invalid src prop"
- Verifica que la imagen esté en el directorio correcto
- Asegúrate de que el formato sea soportado
- Revisa la configuración de `next.config.ts`

### Imágenes no cargan
- Verifica la consola del navegador
- Asegúrate de que el servidor esté ejecutándose
- Revisa que las rutas sean correctas

## 📱 Formatos Soportados

- ✅ JPEG (.jpg, .jpeg)
- ✅ PNG (.png)
- ✅ WebP (.webp)
- ✅ AVIF (.avif)
- ✅ GIF (.gif)
- ✅ SVG (.svg)

## 🎨 Optimización Automática

Next.js optimiza automáticamente las imágenes:
- **Redimensionamiento**: Ajusta el tamaño según el dispositivo
- **Compresión**: Reduce el tamaño del archivo
- **Formato moderno**: Sirve WebP/AVIF cuando es posible
- **Lazy loading**: Carga imágenes solo cuando son visibles

## 📊 Tamaños Recomendados

| Uso | Tamaño | Formato |
|-----|--------|---------|
| Logo | 40x40px | JPEG/PNG |
| Hero | 1920x1080px | JPEG |
| Producto | 400x400px | JPEG |
| Galería | 800x600px | JPEG |
| Thumbnail | 150x150px | JPEG |

## 🔄 Flujo de Trabajo

1. **Añadir imagen**: Coloca en `public/assets/`
2. **Optimizar**: Comprime si es necesario
3. **Usar en componente**: Importa y usa con `Image`
4. **Probar**: Verifica que cargue correctamente
5. **Documentar**: Actualiza esta guía si es necesario 