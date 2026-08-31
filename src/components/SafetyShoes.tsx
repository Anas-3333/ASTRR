import { useState } from "react";
import ProductQuickView from "./ProductQuickView";

/* =========================================================
   SHARED PRODUCT TYPE
========================================================= */

export interface Product {
  number: string;
  title: string;
  cardImage: string;
  quickViewImage: string;
  description: string;
  featured?: boolean;
}

/* =========================================================
   LOCAL PUBLIC IMAGE HELPER
========================================================= */

const localImage = (file: string) =>
  `/converted-webp/${file}`;

/* =========================================================
   SAFETY SHOE DATA
========================================================= */

const shoes: Product[] = [
  {
    number: "01",
    title: "COMBAT\nFORCES",

    cardImage: localImage(
      "combat_shoes.webp"
    ),

    quickViewImage: localImage(
      "combat_quickview.webp"
    ),

    description:
      "TACTICAL FOOTWEAR | GRIP • DURABILITY • CONTROL",

    featured: true,
  },

  {
    number: "02",
    title: "SECURITY\nFORCES",

    cardImage: localImage(
      "security_force.webp"
    ),

    quickViewImage: localImage(
      "security_quickview.webp"
    ),

    description:
      "SECURITY FORCES | TACTICAL FOOTWEAR",
  },

  {
    number: "03",
    title: "EXECUTIVE\nOFFICERS",

    cardImage: localImage(
      "executive-officers.webp"
    ),

    quickViewImage: localImage(
      "executive_quickview.webp"
    ),

    description:
      "EXECUTIVE OFFICERS | TACTICAL FOOTWEAR",
  },

  {
    number: "04",
    title: "INDUSTRIAL\nSAFETY",

    cardImage: localImage(
      "industrial-safety.webp"
    ),

    quickViewImage: localImage(
      "industrial_quickview.webp"
    ),

    description:
      "INDUSTRIAL SAFETY | GRIP • DURABILITY",
  },

  {
    number: "05",
    title: "ELITE\nFORCES",

    cardImage: localImage(
      "elite_sh.webp"
    ),

    quickViewImage: localImage(
      "elite_quickview.webp"
    ),

    description:
      "ELITE FORCES | TACTICAL FOOTWEAR",
  },

  {
    number: "06",
    title: "TACTICAL\nOPERATIONS",

    cardImage: localImage(
      "security_sh.webp"
    ),

    quickViewImage: localImage(
      "security_quickview.webp"
    ),

    description:
      "TACTICAL OPERATIONS | GRIP • CONTROL",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function SafetyShoes() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  return (
    <>
      <section
        id="safety-shoes"
        className="
          w-full
          overflow-hidden
          bg-black
          px-4
          py-12
          text-white
          sm:px-6
          sm:py-16
          lg:px-10
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[1235px]">

          {/* =====================================================
              SECTION HEADER
          ====================================================== */}

          <div className="mb-8 text-center sm:mb-10">

            <p
              className="
                mb-5
                text-[10px]
                font-medium
                tracking-[0.12em]
                text-white
                sm:text-xs
              "
            >
              ASTRR.CO
            </p>

            <h2
              className="
                text-4xl
                font-black
                uppercase
                leading-none
                tracking-tight
                sm:text-5xl
                md:text-6xl
                lg:text-[58px]
              "
            >
              HEROES{" "}
              <span className="text-[#d93232]">
                WE SERVE
              </span>
            </h2>

            <p
              className="
                mt-2
                text-[8px]
                font-medium
                tracking-wide
                text-white/45
                sm:text-[10px]
              "
            >
              ENGINEERED FOR THOSE WHO SERVE
            </p>

          </div>

          {/* =====================================================
              CARD GRID
          ====================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-[5px]
              sm:grid-cols-2
              lg:grid-cols-6
              lg:grid-rows-[165px_165px_180px]
            "
          >

            {/* 01 — COMBAT FORCES */}

            <div
              className="
                min-h-[400px]
                sm:min-h-[350px]
                lg:col-span-3
                lg:row-span-2
                lg:min-h-0
              "
            >
              <ShoeCard
                product={shoes[0]}
                featured
                onClick={() =>
                  setSelectedProduct(shoes[0])
                }
              />
            </div>

            {/* 02 — SECURITY FORCES */}

            <div
              className="
                min-h-[230px]
                lg:col-span-2
                lg:col-start-4
                lg:row-start-1
              "
            >
              <ShoeCard
                product={shoes[1]}
                onClick={() =>
                  setSelectedProduct(shoes[1])
                }
              />
            </div>

            {/* 03 — EXECUTIVE OFFICERS */}

            <div
              className="
                min-h-[230px]
                lg:col-span-2
                lg:col-start-6
                lg:row-start-1
              "
            >
              <ShoeCard
                product={shoes[2]}
                onClick={() =>
                  setSelectedProduct(shoes[2])
                }
              />
            </div>

            {/* 04 — INDUSTRIAL SAFETY */}

            <div
              className="
                min-h-[230px]
                lg:col-span-2
                lg:col-start-1
                lg:row-start-3
              "
            >
              <ShoeCard
                product={shoes[3]}
                onClick={() =>
                  setSelectedProduct(shoes[3])
                }
              />
            </div>

            {/* 05 — ELITE FORCES */}

            <div
              className="
                min-h-[230px]
                lg:col-span-2
                lg:col-start-3
                lg:row-start-3
              "
            >
              <ShoeCard
                product={shoes[4]}
                onClick={() =>
                  setSelectedProduct(shoes[4])
                }
              />
            </div>

            {/* 06 — TACTICAL OPERATIONS */}

            <div
              className="
                min-h-[230px]
                lg:col-span-2
                lg:col-start-5
                lg:row-start-3
              "
            >
              <ShoeCard
                product={shoes[5]}
                onClick={() =>
                  setSelectedProduct(shoes[5])
                }
              />
            </div>

          </div>

          {/* =====================================================
              BOTTOM TITLE
          ====================================================== */}

          <div className="pt-6 text-center sm:pt-7">

            <h3
              className="
                text-xl
                font-black
                uppercase
                tracking-tight
                sm:text-2xl
                lg:text-3xl
              "
            >
              WHEN IT MATTERS MOST
            </h3>

          </div>

        </div>
      </section>

      {/* =====================================================
          ONE SHARED PRODUCT QUICK VIEW
      ====================================================== */}

      <ProductQuickView
        product={selectedProduct}
        onClose={() =>
          setSelectedProduct(null)
        }
      />
    </>
  );
}

/* =========================================================
   SHOE CARD
========================================================= */

type ShoeCardProps = {
  product: Product;
  featured?: boolean;
  onClick: () => void;
};

function ShoeCard({
  product,
  featured = false,
  onClick,
}: ShoeCardProps) {

  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          onClick();
        }
      }}
      className={`
        group
        relative
        h-full
        w-full
        cursor-pointer
        overflow-hidden
        rounded-[2px]
        border-l-[3px]
        border-[#d93232]
        bg-[#111]

        ${
          featured
            ? "min-h-[400px] sm:min-h-[350px]"
            : "min-h-[230px]"
        }
      `}
    >

      {/* ===================================================
          CARD IMAGE
      ==================================================== */}

      <img
        src={product.cardImage}
        alt={product.title.replace("\n", " ")}
        draggable={false}
        loading={featured ? "eager" : "lazy"}
        decoding="async"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
      />

      {/* ===================================================
          IMAGE DARKENING
      ==================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/10
          transition-colors
          duration-500
          group-hover:bg-black/0
        "
      />

      {/* ===================================================
          BOTTOM GRADIENT
      ==================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[70%]
          bg-gradient-to-t
          from-black
          via-black/70
          to-transparent
        "
      />

      {/* ===================================================
          CARD CONTENT
      ==================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          z-10
          p-4
          sm:p-5

          ${
            featured
              ? "lg:p-7"
              : "lg:p-4"
          }
        `}
      >

        {/* NUMBER */}

        <p
          className={`
            font-medium
            text-white/60

            ${
              featured
                ? "text-2xl lg:text-3xl"
                : "text-lg lg:text-xl"
            }
          `}
        >
          {product.number}
        </p>

        {/* TITLE */}

        <h3
          className={`
            mt-1
            whitespace-pre-line
            font-black
            uppercase
            leading-[0.88]
            tracking-tight
            text-white

            ${
              featured
                ? "text-4xl sm:text-5xl lg:text-[52px]"
                : "text-3xl sm:text-4xl lg:text-[30px]"
            }
          `}
        >
          {product.title}
        </h3>

        {/* BOTTOM INFORMATION */}

        <div
          className="
            mt-3
            flex
            items-end
            justify-between
            gap-3
          "
        >

          <p
            className="
              max-w-[75%]
              text-[7px]
              font-medium
              uppercase
              leading-tight
              tracking-wide
              text-white/75
              sm:text-[8px]
            "
          >
            {product.description}
          </p>

          <span
            className="
              shrink-0
              text-[8px]
              font-medium
              uppercase
              text-[#d93232]
              transition-all
              duration-300
              group-hover:translate-x-1
            "
          >
            Explore →
          </span>

        </div>

      </div>

      {/* ===================================================
          HOVER RED GLOW
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          ring-1
          ring-inset
          ring-[#d93232]/40
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

    </article>
  );
}

export default SafetyShoes;