import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Croxono Perfumes - Perfumes de Lujo",
  description: "Descubre nuestra colección exclusiva de perfumes de lujo",
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "0DxBeGJBCE8u3t0XxEjviEecoPMFfTCFILr77n2iCws",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
