import { Product } from "@/lib/cart-context";
import afnan9am from "../images/Afnan - 9 am.png";
import afnan9pm from "../images/Afnan - 9 pm.png";
import cacio from "../images/CACIO.png";

const unisexPerfums: Product[] = [
  {
    id: 201,
    name: "Desert Wind",
    price: "$140",
    image: afnan9am,
    category: "Unisex",
    description:
      "Notas frescas y terrosas que evocan una brisa limpia y versátil.",
    notes: ["Bergamota", "Cedro", "Vetiver", "Musk", "Ámbar Gris"],
    concentration: "Eau de Toilette",
    duration: "6-8 horas",
    size: "100ml",
    origin: "Italia",
  },
  {
    id: 202,
    name: "Citrus Musk",
    price: "$130",
    image: afnan9pm,
    category: "Unisex",
    description:
      "Cítrico limpio con fondo almizclado, perfecto para clima cálido.",
    notes: ["Limón", "Neroli", "Musk", "Ámbar"],
    concentration: "Eau de Cologne",
    duration: "4-6 horas",
    size: "100ml",
    origin: "España",
  },
];

export default unisexPerfums;

