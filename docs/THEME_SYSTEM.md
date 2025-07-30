# Sistema de Temas - Croxono Perfumes

## 🎨 Descripción

Este proyecto incluye un sistema completo de cambio de temas (claro/oscuro) que permite a los usuarios alternar entre diferentes modos de visualización. El sistema está construido con React Context y Tailwind CSS.

## 🚀 Características

- ✅ **Cambio automático de temas**: Claro ↔ Oscuro
- ✅ **Persistencia**: El tema se guarda en localStorage
- ✅ **Detección automática**: Respeta las preferencias del sistema
- ✅ **Transiciones suaves**: Animaciones fluidas entre temas
- ✅ **Hidratación segura**: Compatible con SSR de Next.js
- ✅ **Accesibilidad**: Soporte para lectores de pantalla

## 📁 Estructura de Archivos

```
src/
├── lib/
│   └── theme-context.tsx     # Contexto principal del tema
├── components/
│   ├── ThemeToggle.tsx       # Botón de cambio de tema
│   └── ThemeDemo.tsx         # Componente de demostración
└── app/
    ├── layout.tsx            # Layout con ThemeProvider
    └── globals.css           # Variables CSS de temas
```

## 🔧 Cómo Usar

### 1. En cualquier componente

```tsx
"use client";
import { useTheme } from "@/lib/theme-context";

function MiComponente() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>
        Cambiar tema
      </button>
      <button onClick={() => setTheme('dark')}>
        Forzar tema oscuro
      </button>
    </div>
  );
}
```

### 2. Con clases de Tailwind

```tsx
// Las clases dark: se aplican automáticamente
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Contenido que cambia con el tema
</div>
```

### 3. Con variables CSS

```tsx
// Usar las variables CSS definidas en globals.css
<div style={{ 
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)'
}}>
  Contenido con variables CSS
</div>
```

## 🎯 API del Hook useTheme

### Propiedades

- `theme`: `'light' | 'dark'` - El tema actual
- `toggleTheme`: `() => void` - Función para alternar entre temas
- `setTheme`: `(theme: 'light' | 'dark') => void` - Función para establecer un tema específico

### Ejemplo de uso completo

```tsx
"use client";
import { useTheme } from "@/lib/theme-context";

export function MiComponente() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div className="p-4 bg-card text-card-foreground rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Control de Tema
      </h2>
      
      <div className="space-y-2">
        <p>Tema actual: {theme}</p>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setTheme('light')}
            className="px-3 py-1 bg-primary text-primary-foreground rounded"
          >
            Claro
          </button>
          <button 
            onClick={() => setTheme('dark')}
            className="px-3 py-1 bg-primary text-primary-foreground rounded"
          >
            Oscuro
          </button>
        </div>
        
        <button 
          onClick={toggleTheme}
          className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded"
        >
          Alternar Tema
        </button>
      </div>
    </div>
  );
}
```

## 🎨 Variables CSS Disponibles

### Colores Principales
- `--background` / `--foreground`
- `--card` / `--card-foreground`
- `--popover` / `--popover-foreground`
- `--primary` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--muted` / `--muted-foreground`
- `--accent` / `--accent-foreground`
- `--destructive` / `--destructive-foreground`

### Elementos de UI
- `--border`
- `--input`
- `--ring`
- `--radius`

### Sidebar (si aplica)
- `--sidebar` / `--sidebar-foreground`
- `--sidebar-primary` / `--sidebar-primary-foreground`
- `--sidebar-accent` / `--sidebar-accent-foreground`
- `--sidebar-border`
- `--sidebar-ring`

## 🔄 Cómo Funciona

1. **Inicialización**: El `ThemeProvider` se monta en el layout principal
2. **Detección**: Lee el tema guardado en localStorage o detecta la preferencia del sistema
3. **Aplicación**: Añade/remueve la clase `dark` en el elemento `<html>`
4. **Persistencia**: Guarda el tema seleccionado en localStorage
5. **Transiciones**: Las clases CSS manejan las transiciones suaves

## 🛠️ Personalización

### Añadir nuevos colores

1. Edita `src/app/globals.css`
2. Añade variables en `:root` y `.dark`
3. Usa las variables en tus componentes

```css
:root {
  --mi-color: hsl(220 15% 3%);
}

.dark {
  --mi-color: hsl(220 15% 95%);
}
```

### Crear componentes temáticos

```tsx
function MiBoton({ children, ...props }) {
  return (
    <button 
      className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      {...props}
    >
      {children}
    </button>
  );
}
```

## 🐛 Solución de Problemas

### El tema no persiste
- Verifica que el `ThemeProvider` esté en el layout principal
- Asegúrate de que localStorage esté habilitado

### Hidratación incorrecta
- El `ThemeProvider` incluye protección contra hidratación
- Usa `suppressHydrationWarning` en el elemento `<html>`

### Transiciones no funcionan
- Verifica que las clases `transition-colors` estén aplicadas
- Asegúrate de que las variables CSS estén definidas correctamente

## 📱 Compatibilidad

- ✅ Chrome/Edge (basado en Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers
- ✅ SSR/SSG con Next.js

## 🎯 Mejores Prácticas

1. **Siempre usa variables CSS** para colores temáticos
2. **Incluye transiciones** para cambios suaves
3. **Proporciona alternativas** para usuarios con JavaScript deshabilitado
4. **Usa contraste adecuado** en ambos temas
5. **Prueba en ambos temas** durante el desarrollo 