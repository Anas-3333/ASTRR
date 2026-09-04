cat << 'INNER_EOF' > src/components/MilitaryShoe.tsx.tmp
import { useEffect, useRef, useState } from "react";
import ProductQuickView, {
  type Product,
} from "./ProductQuickView";

const militaryShoes: Product[] = [
  {
    number: "01",
    title: "Oil & Gas",
    cardImage: "/converted-webp/webp-oil & gas.webp",
    quickViewImage: "/converted-webp/webp-oil & gas.webp",
    description:
      "TACTICAL FOOTWEAR | GRIP • DURABILITY • CONTROL",
  },
  {
    number: "02",
    title: "EMS",
    cardImage: "/converted-webp/webp-ems.webp",
    quickViewImage: "/converted-webp/webp-ems.webp",
    description:
      "SECURITY FORCES | TACTICAL FOOTWEAR",
  },
  {
    number: "03",
    title: "Outdoor",
    cardImage: "/converted-webp/webp-outdoor.webp",
    quickViewImage: "/converted-webp/webp-outdoor.webp",
    description:
      "EXECUTIVE OFFICERS | TACTICAL FOOTWEAR",
  },
  {
    number: "04",
    title: "Electrical",
    cardImage: "/converted-webp/webp-electrical.webp",
    quickViewImage: "/converted-webp/webp-electrical.webp",
    description:
      "INDUSTRIAL SAFETY | GRIP • DURABILITY",
  },
  {
    number: "05",
    title: "Construction",
    cardImage: "/converted-webp/webp-construction.webp",
    quickViewImage: "/converted-webp/webp-construction.webp",
    description:
      "ELITE FORCES | TACTICAL FOOTWEAR",
  },
  {
    number: "06",
    title: "Factory",
    cardImage: "/converted-webp/webp-factory.webp",
    quickViewImage: "/converted-webp/webp-factory.webp",
    description:
      "TACTICAL OPERATIONS | GRIP • CONTROL",
  },
];
INNER_EOF
tail -n +47 src/components/MilitaryShoe.tsx >> src/components/MilitaryShoe.tsx.tmp
mv src/components/MilitaryShoe.tsx.tmp src/components/MilitaryShoe.tsx
