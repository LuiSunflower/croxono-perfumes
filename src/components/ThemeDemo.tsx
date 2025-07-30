"use client";

import { useTheme } from "@/lib/theme-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ThemeDemo() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Control de Tema</span>
          <span className="text-sm font-normal text-muted-foreground">
            {theme === "dark" ? "🌙 Oscuro" : "☀️ Claro"}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Tema actual:{" "}
            <span className="font-medium text-foreground">{theme}</span>
          </p>

          <div className="flex space-x-2">
            <Button
              onClick={() => setTheme("light")}
              variant={theme === "light" ? "default" : "outline"}
              size="sm"
            >
              Claro
            </Button>
            <Button
              onClick={() => setTheme("dark")}
              variant={theme === "dark" ? "default" : "outline"}
              size="sm"
            >
              Oscuro
            </Button>
          </div>

          <Button onClick={toggleTheme} className="w-full" variant="outline">
            Alternar Tema
          </Button>
        </div>

        <div className="p-4 rounded-lg bg-muted">
          <p className="text-sm text-muted-foreground">
            Este es un ejemplo de cómo los colores cambian automáticamente según
            el tema seleccionado.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
