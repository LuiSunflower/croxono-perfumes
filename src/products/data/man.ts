import { Product } from "@/lib/cart-context";
import afnan9am from "../images/Afnan - 9 am.png";
import afnan9pm from "../images/Afnan - 9 pm.png";

const mansPerfums: Product[] = [
  {
    id: 1,
    name: "Afnan 9PM",
    price: "$120",
    image: afnan9pm,
    category: "Hombres",
    description: "Fragancia dulce y especiada con gran proyección, ideal para la noche.",
    notes: ["Vainilla", "Canela", "Lavanda", "Madera"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "Emiratos Árabes Unidos",
  },
  {
    id: 2,
    name: "Afnan 9AM",
    price: "$120",
    image: afnan9am,
    category: "Hombres",
    description: "Aromático y fresco, perfecto para el día con un toque cítrico y limpio.",
    notes: ["Bergamota", "Cardamomo", "Lavanda", "Madera"],
    concentration: "Eau de Parfum",
    duration: "6-10 horas",
    size: "100ml",
    origin: "Emiratos Árabes Unidos",
  },
];

export default mansPerfums;
