cat << 'INNER_EOF' > src/components/SafetyShoes.tsx.tmp
import { useEffect, useRef, useState } from "react";
import ProductQuickView, {
  type Product,
} from "./ProductQuickView";

const shoes: Product[] = [
  {
    number: "01",
    title: "COMBAT\nFORCES",
    cardImage: "/converted-webp/webp-combat.webp",
    quickViewImage: "/converted-webp/combat_quickview.webp",
    description:
      "TACTICAL FOOTWEAR | GRIP • DURABILITY • CONTROL",
  },
  {
    number: "02",
    title: "SECURITY\nFORCES",
    cardImage: "/converted-webp/webp-securityforce.webp",
    quickViewImage: "/converted-webp/webp-securityforce.webp",
    description:
      "SECURITY FORCES | TACTICAL FOOTWEAR",
  },
  {
    number: "03",
    title: "EXECUTIVE\nOFFICERS",
    cardImage: "/converted-webp/webp-executiveOfficer.webp",
    quickViewImage: "/converted-webp/webp-executiveOfficer.webp",
    description:
      "EXECUTIVE OFFICERS | TACTICAL FOOTWEAR",
  },
  {
    number: "04",
    title: "INDUSTRIAL\nSAFETY",
    cardImage: "/converted-webp/webp-industrialsafety.webp",
    quickViewImage: "/converted-webp/MIL4.webp",
    description:
      "INDUSTRIAL SAFETY | GRIP • DURABILITY",
  },
  {
    number: "05",
    title: "ELITE\nFORCES",
    cardImage: "/converted-webp/webp-elite.webp",
    quickViewImage: "/converted-webp/elite_quickview.webp",
    description:
      "ELITE FORCES | TACTICAL FOOTWEAR",
  },
  {
    number: "06",
    title: "TACTICAL\nOPERATIONS",
    cardImage: "/converted-webp/webp-tactical.webp",
    quickViewImage: "/converted-webp/webp-tactical.webp",
    description:
      "TACTICAL OPERATIONS | GRIP • CONTROL",
  },
];
INNER_EOF
tail -n +47 src/components/SafetyShoes.tsx >> src/components/SafetyShoes.tsx.tmp
mv src/components/SafetyShoes.tsx.tmp src/components/SafetyShoes.tsx
