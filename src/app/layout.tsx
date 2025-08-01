import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import StructuredData from "@/components/StructuredData";
import ProductStructuredData from "@/components/ProductStructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Croxono Perfumes - Perfumes de Lujo Exclusivos | Envío Gratis",
    template: "%s | Croxono Perfumes",
  },
  description:
    "Descubre nuestra colección exclusiva de perfumes de lujo. Fragancias únicas, envío gratis y atención personalizada. Los mejores perfumes para hombres y mujeres en Colombia.",
  keywords: [
    "perfumes de lujo",
    "fragancias exclusivas",
    "perfumes para hombres",
    "perfumes para mujeres",
    "perfumes importados",
    "fragancias premium",
    "perfumes originales",
    "tienda de perfumes",
    "perfumes Colombia",
    "perfumes Urabá",
    "perfumes Apartadó",
    "perfumes Turbo",
    "perfumes árabes",
    "oud perfumes",
    "fragancias orientales",
    "Croxono Perfumes",
  ],
  authors: [{ name: "Croxono Perfumes" }],
  creator: "Croxono Perfumes",
  publisher: "Croxono Perfumes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://croxono-perfumes-4rnh.onrender.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "0DxBeGJBCE8u3t0XxEjviEecoPMFfTCFILr77n2iCws",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://croxono-perfumes-4rnh.onrender.com",
    title: "Croxono Perfumes - Perfumes de Lujo Exclusivos",
    description:
      "Descubre nuestra colección exclusiva de perfumes de lujo. Fragancias únicas, envío gratis y atención personalizada.",
    siteName: "Croxono Perfumes",
    images: [
      {
        url: "/assets/hero-perfume.jpg",
        width: 1200,
        height: 630,
        alt: "Croxono Perfumes - Colección de Perfumes de Lujo",
      },
    ],
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <StructuredData />
        <ProductStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
