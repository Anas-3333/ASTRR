import { useState } from "react";
import ProductQuickView from "./ProductQuickView";


/* =========================================================
   TYPES
========================================================= */

export type Product = {
  number: string;
  title: string;
  image: string;
  description: string;
};


/* =========================================================
   SHOE DATA
========================================================= */

const shoes: Product[] = [
  {
    number: "01",
    title: "COMBAT\nFORCES",
    image: "/images/combat_shoes.png",
    description:
      "TACTICAL FOOTWEAR | GRIP • DURABILITY • CONTROL",
  },

  {
    number: "02",
    title: "SECURITY\nFORCES",
    image: "/images/security_force.png",
    description:
      "SECURITY FORCES | TACTICAL FOOTWEAR",
  },

  {
    number: "03",
    title: "EXECUTIVE\nOFFICERS",
    image: "/images/L1_shoes.png",
    description:
      "EXECUTIVE OFFICERS | TACTICAL FOOTWEAR",
  },

  {
    number: "04",
    title: "INDUSTRIAL\nSAFETY",
    image: "/images/R1_shoes.png",
    description:
      "INDUSTRIAL SAFETY | GRIP • DURABILITY",
  },

  {
    number: "05",
    title: "ELITE\nFORCES",
    image: "/images/elite_sh.png",
    description:
      "ELITE FORCES | TACTICAL FOOTWEAR",
  },

  {
    number: "06",
    title: "TACTICAL\nOPERATIONS",
    image: "/images/security_sh.png",
    description:
      "TACTICAL OPERATIONS | GRIP • CONTROL",
  },
];


/* =========================================================
   SHOE CARD PROPS
========================================================= */

type ShoeCardProps = {
  number: string;
  title: string;
  image: string;
  description: string;
  featured?: boolean;
  compact?: boolean;
  onClick: () => void;
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

function SafetyShoes() {

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);


  return (
    <section
      id="safety-shoes"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        px-4
        py-14
        text-white

        sm:px-6
        sm:py-16

        lg:px-8
        lg:py-20
      "
    >

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="mx-auto w-full max-w-[1280px]">


        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <header
          className="
            mb-9
            text-center

            sm:mb-10

            lg:mb-12
          "
        >

          {/* SMALL BRAND */}

          <p
            className="
              mb-3

              text-[9px]
              font-medium
              uppercase
              tracking-[0.3em]

              text-white/40
            "
          >
            ASTRR.CO
          </p>


          {/* MAIN TITLE */}

          <h2
            className="
              text-[38px]
              font-black
              uppercase

              leading-[0.9]

              tracking-[-0.045em]

              sm:text-[48px]

              md:text-[56px]

              lg:text-[62px]
            "
          >
            HEROES{" "}

            <span className="text-[#d93232]">
              WE SERVE
            </span>

          </h2>


          {/* SUBTITLE */}

          <p
            className="
              mt-3

              text-[8px]
              font-medium
              uppercase

              tracking-[0.2em]

              text-white/40

              sm:text-[9px]
            "
          >
            ENGINEERED FOR THOSE WHO SERVE
          </p>

        </header>


        {/* =====================================================
            CINEMATIC GRID

            12 COLUMN SYSTEM

            ROW 1

            COMBAT       = 5
            SECURITY     = 5
            EXECUTIVE    = 2

            ROW 2

            INDUSTRIAL   = 2
            ELITE        = 3
            TACTICAL     = 7
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[6px]

            sm:grid-cols-2

            lg:grid-cols-12
            lg:grid-rows-[340px_220px]
          "
        >


          {/* =================================================
              01 — COMBAT FORCES
          ================================================= */}

          <div
            className="
              h-[380px]

              sm:h-[400px]

              lg:col-span-5
              lg:h-auto
            "
          >

            <ShoeCard
              number={shoes[0].number}
              title={shoes[0].title}
              image={shoes[0].image}
              description={shoes[0].description}
              featured
              onClick={() =>
                setSelectedProduct(shoes[0])
              }
            />

          </div>


          {/* =================================================
              02 — SECURITY FORCES
          ================================================= */}

          <div
            className="
              h-[280px]

              sm:h-[300px]

              lg:col-span-5
              lg:h-auto
            "
          >

            <ShoeCard
              number={shoes[1].number}
              title={shoes[1].title}
              image={shoes[1].image}
              description={shoes[1].description}
              onClick={() =>
                setSelectedProduct(shoes[1])
              }
            />

          </div>


          {/* =================================================
              03 — EXECUTIVE OFFICERS
          ================================================= */}

          <div
            className="
              h-[280px]

              sm:h-[300px]

              lg:col-span-2
              lg:h-auto
            "
          >

            <ShoeCard
              number={shoes[2].number}
              title={shoes[2].title}
              image={shoes[2].image}
              description={shoes[2].description}
              compact
              onClick={() =>
                setSelectedProduct(shoes[2])
              }
            />

          </div>


          {/* =================================================
              04 — INDUSTRIAL SAFETY
          ================================================= */}

          <div
            className="
              h-[240px]

              sm:h-[260px]

              lg:col-span-2
              lg:h-auto
            "
          >

            <ShoeCard
              number={shoes[3].number}
              title={shoes[3].title}
              image={shoes[3].image}
              description={shoes[3].description}
              compact
              onClick={() =>
                setSelectedProduct(shoes[3])
              }
            />

          </div>


          {/* =================================================
              05 — ELITE FORCES
          ================================================= */}

          <div
            className="
              h-[240px]

              sm:h-[260px]

              lg:col-span-3
              lg:h-auto
            "
          >

            <ShoeCard
              number={shoes[4].number}
              title={shoes[4].title}
              image={shoes[4].image}
              description={shoes[4].description}
              onClick={() =>
                setSelectedProduct(shoes[4])
              }
            />

          </div>


          {/* =================================================
              06 — TACTICAL OPERATIONS
          ================================================= */}

          <div
            className="
              h-[340px]

              sm:col-span-2

              sm:h-[360px]

              lg:col-span-7

              lg:h-auto
            "
          >

            <ShoeCard
              number={shoes[5].number}
              title={shoes[5].title}
              image={shoes[5].image}
              description={shoes[5].description}
              featured
              onClick={() =>
                setSelectedProduct(shoes[5])
              }
            />

          </div>

        </div>


        {/* =====================================================
            FOOTER TITLE
        ===================================================== */}

        <div
          className="
            mt-7
            flex
            justify-center

            sm:mt-8

            lg:mt-9
          "
        >

          <p
            className="
              text-[10px]
              font-medium
              uppercase

              tracking-[0.22em]

              text-white/35

              sm:text-[11px]
            "
          >
            WHEN IT MATTERS MOST
          </p>

        </div>

      </div>


      {/* =====================================================
          PRODUCT QUICK VIEW MODAL
      ===================================================== */}

      <ProductQuickView
        product={selectedProduct}
        onClose={() =>
          setSelectedProduct(null)
        }
      />

    </section>
  );
}


/* ============================================================
   SHOE CARD
============================================================ */

function ShoeCard({
  number,
  title,
  image,
  description,
  featured = false,
  compact = false,
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

      className="
        group
        relative
        h-full
        w-full

        cursor-pointer
        select-none

        overflow-hidden

        rounded-[3px]

        border-l-[3px]
        border-[#d93232]

        bg-[#101010]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-[2px]
      "
    >


      {/* =================================================
          PRODUCT IMAGE
      ================================================= */}

      <img
        src={image}
        alt={title.replace("\n", " ")}

        draggable={false}

        className="
          absolute
          inset-0

          h-full
          w-full

          object-cover
          object-center

          scale-[1.01]

          transition-transform
          duration-[900ms]
          ease-out

          group-hover:scale-[1.045]
        "
      />


      {/* =================================================
          DARK OVERLAY
      ================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-black/20

          transition-opacity
          duration-500

          group-hover:bg-black/10
        "
      />


      {/* =================================================
          TOP VIGNETTE
      ================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          top-0

          h-[40%]

          bg-gradient-to-b
          from-black/50
          to-transparent
        "
      />


      {/* =================================================
          BOTTOM CINEMATIC GRADIENT
      ================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          bottom-0

          h-[72%]

          bg-gradient-to-t
          from-black
          via-black/75
          to-transparent
        "
      />


      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0

          z-10

          ${
            compact
              ? "p-3 sm:p-4 lg:p-4"
              : featured
                ? "p-5 sm:p-6 lg:p-6"
                : "p-4 sm:p-5 lg:p-5"
          }
        `}
      >

        {/* NUMBER */}

        <div
          className={`
            font-medium
            leading-none

            text-white/60

            ${
              featured
                ? "text-base sm:text-lg"
                : compact
                  ? "text-xs"
                  : "text-sm"
            }
          `}
        >
          {number}
        </div>


        {/* TITLE */}

        <h3
          className={`
            mt-2

            whitespace-pre-line

            font-black
            uppercase

            leading-[0.84]

            tracking-[-0.04em]

            text-white

            ${
              featured
                ? `
                  text-[36px]
                  sm:text-[42px]
                  lg:text-[46px]
                `
                : compact
                  ? `
                    text-[20px]
                    sm:text-[24px]
                    lg:text-[25px]
                  `
                  : `
                    text-[26px]
                    sm:text-[29px]
                    lg:text-[30px]
                  `
            }
          `}
        >
          {title}
        </h3>


        {/* =================================================
            BOTTOM INFORMATION
        ================================================= */}

        <div
          className="
            mt-3

            flex
            w-full

            items-end
            justify-between

            gap-3
          "
        >

          {/* DESCRIPTION */}

          <p
            className={`
              min-w-0

              overflow-hidden

              text-[6px]
              font-medium
              uppercase

              leading-[1.35]

              tracking-[0.04em]

              text-white/65

              sm:text-[7px]

              ${
                compact
                  ? "max-w-[60%]"
                  : "max-w-[72%]"
              }
            `}
          >
            {description}
          </p>


          {/* EXPLORE */}

          <span
            className="
              shrink-0

              whitespace-nowrap

              text-[7px]
              font-medium
              uppercase

              tracking-wide

              text-[#d93232]

              transition-transform
              duration-300

              group-hover:translate-x-1

              sm:text-[8px]
            "
          >
            EXPLORE →
          </span>

        </div>

      </div>


      {/* =================================================
          HOVER BORDER
      ================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-0

          ring-1
          ring-inset
          ring-white/20

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />


      {/* =================================================
          RED EDGE
      ================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          left-0
          top-0

          h-full
          w-[3px]

          bg-[#d93232]

          opacity-80

          transition-all
          duration-500

          group-hover:opacity-100
        "
      />

    </article>
  );
}


export default SafetyShoes;