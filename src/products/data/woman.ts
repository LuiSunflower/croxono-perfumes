import { Product } from "@/lib/cart-context";
import afnan9am from "../images/Afnan - 9 am.png";
import afnan9pm from "../images/Afnan - 9 pm.png";

const womansPerfums: Product[] = [
  {
    id: 101,
    name: "Arabian Rose",
    price: "$160",
    image: afnan9am,
    category: "Mujeres",
    description:
      "Una rosa oriental sofisticada combinada con notas florales y ambaradas.",
    notes: ["Rosa", "Jazmín", "Ámbar", "Vainilla", "Sándalo"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "Emiratos Árabes Unidos",
  },
  {
    id: 102,
    name: "Velvet Bloom",
    price: "$140",
    image: afnan9pm,
    category: "Mujeres",
    description:
      "Floral dulce con fondo cremoso y elegante, ideal para uso diario.",
    notes: ["Peonía", "Gardenia", "Vainilla", "Musk"],
    concentration: "Eau de Parfum",
    duration: "6-10 horas",
    size: "100ml",
    origin: "Francia",
  },
];

export default womansPerfums;

