import { useState } from "react";
import ProductQuickView, {
  type Product,
} from "./ProductQuickView";

const shoes: Product[] = [
  {
    number: "01",
    title: "COMBAT\nFORCES",
    cardImage: "/converted-webp/combat_shoes.webp",
    quickViewImage: "/converted-webp/combat_quickview.webp",
    description:
      "TACTICAL FOOTWEAR | GRIP • DURABILITY • CONTROL",
  },
  {
    number: "02",
    title: "SECURITY\nFORCES",
    cardImage: "/converted-webp/security_force.webp",
    quickViewImage: "/converted-webp/security_quickview.webp",
    description:
      "SECURITY FORCES | TACTICAL FOOTWEAR",
  },
  {
    number: "03",
    title: "EXECUTIVE\nOFFICERS",
    cardImage: "/converted-webp/MIL3.webp",
    quickViewImage: "/converted-webp/MIL3.webp",
    description:
      "EXECUTIVE OFFICERS | TACTICAL FOOTWEAR",
  },
  {
    number: "04",
    title: "INDUSTRIAL\nSAFETY",
    cardImage: "/converted-webp/MIL4.webp",
    quickViewImage: "/converted-webp/MIL4.webp",
    description:
      "INDUSTRIAL SAFETY | GRIP • DURABILITY",
  },
  {
    number: "05",
    title: "ELITE\nFORCES",
    cardImage: "/converted-webp/elite_sh.webp",
    quickViewImage: "/converted-webp/elite_quickview.webp",
    description:
      "ELITE FORCES | TACTICAL FOOTWEAR",
  },
  {
    number: "06",
    title: "TACTICAL\nOPERATIONS",
    cardImage: "/converted-webp/security_sh.webp",
    quickViewImage: "/converted-webp/security_quickview.webp",
    description:
      "TACTICAL OPERATIONS | GRIP • CONTROL",
  },
];

function SafetyShoes() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  return (
    <>
      <section
        id="safety-shoes"
        className="
          relative
          w-full
          max-w-full
          overflow-hidden
          bg-black
          text-white
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            w-full
            px-5
            pt-16
            pb-10
            sm:px-8
            sm:pt-20
            sm:pb-12
            lg:px-10
            lg:pt-24
            lg:pb-16
            xl:px-14
          "
        >
          <p
            className="
              mb-4
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#d93232]
              sm:text-[10px]
              lg:text-[11px]
            "
          >
            ASTRR.CO&nbsp;&nbsp;/&nbsp;&nbsp;DEFENCE
          </p>

          <h2
            className="
              flex
              w-full
              flex-wrap
              items-baseline
              gap-x-3
              gap-y-1
              text-[clamp(42px,7vw,96px)]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.055em]
            "
          >
            <span className="text-white">
              SAFETY
            </span>

            <span className="text-[#d93232]">
              SHOE
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-[430px]
              text-[8px]
              font-medium
              uppercase
              leading-[1.8]
              tracking-[0.18em]
              text-white/45
              sm:text-[9px]
              lg:text-[10px]
            "
          >
            ENGINEERED FOOTWEAR FOR DEMANDING
            <br />
            DUTY ENVIRONMENTS.
          </p>
        </div>

        {/* =====================================================
            UNIFORM GRID
        ====================================================== */}

        <div
          className="
            grid
            w-full
            max-w-full
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {shoes.map((product) => (
            <ShoeCard
              key={product.number}
              product={product}
              onClick={() =>
                setSelectedProduct(product)
              }
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            w-full
            px-5
            py-12
            text-center
            sm:py-14
            lg:py-20
          "
        >
          <h3
            className="
              text-[clamp(22px,3vw,42px)]
              font-black
              uppercase
              leading-none
              tracking-[-0.04em]
              text-white
            "
          >
            WHEN IT MATTERS MOST
          </h3>
        </div>
      </section>

      {/* SHARED QUICK VIEW */}

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
  onClick: () => void;
};

function ShoeCard({
  product,
  onClick,
}: ShoeCardProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          onClick();
        }
      }}
      className="
        group
        relative
        aspect-[1.35/1]
        min-h-[300px]
        w-full
        min-w-0
        cursor-pointer
        overflow-hidden
        rounded-none
        border-l
        border-b
        border-[#d93232]
        bg-[#111]
        outline-none
        focus-visible:ring-2
        focus-visible:ring-[#d93232]
        focus-visible:ring-inset

        sm:aspect-[1.3/1]

        lg:aspect-[1.25/1]
      "
    >
      {/* IMAGE */}

      <img
        src={product.cardImage}
        alt={product.title.replace(
          "\n",
          " "
        )}
        loading="lazy"
        decoding="async"
        draggable={false}
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
          group-hover:scale-[1.04]
        "
      />

      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-black/20
          transition-colors
          duration-500
          group-hover:bg-black/10
        "
      />

      {/* TOP GRADIENT */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[45%]
          bg-gradient-to-b
          from-black/45
          via-black/10
          to-transparent
        "
      />

      {/* BOTTOM GRADIENT */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[78%]
          bg-gradient-to-t
          from-black
          via-black/75
          to-transparent
        "
      />

      {/* NUMBER */}

      <div
        className="
          absolute
          left-5
          top-5
          z-10
          flex
          items-center
          gap-3
          sm:left-6
          sm:top-6
        "
      >
        <span
          className="
            h-px
            w-8
            bg-[#d93232]
          "
        />

        <span
          className="
            text-[10px]
            font-medium
            tracking-[0.08em]
            text-white/80
            sm:text-xs
          "
        >
          {product.number}
        </span>
      </div>

      {/* CONTENT */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          p-5
          sm:p-6
          lg:p-7
          xl:p-8
        "
      >
        {/* TITLE */}

        <h3
          className="
            max-w-full
            whitespace-pre-line
            break-words
            text-[clamp(27px,3vw,46px)]
            font-black
            uppercase
            leading-[0.86]
            tracking-[-0.045em]
            text-white
            drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]

            sm:text-[clamp(30px,3vw,42px)]

            lg:text-[clamp(28px,2.5vw,40px)]
          "
        >
          {product.title}
        </h3>

        {/* FOOTER */}

        <div
          className="
            mt-4
            flex
            min-w-0
            items-end
            justify-between
            gap-4
          "
        >
          <p
            className="
              min-w-0
              max-w-[75%]
              text-[7px]
              font-medium
              uppercase
              leading-[1.5]
              tracking-[0.07em]
              text-white/75
              sm:text-[8px]
              lg:text-[9px]
            "
          >
            {product.description}
          </p>

          <span
            className="
              shrink-0
              whitespace-nowrap
              text-[8px]
              font-medium
              uppercase
              tracking-[0.06em]
              text-[#d93232]
              transition-transform
              duration-300
              group-hover:translate-x-1
              sm:text-[9px]
            "
          >
            Explore →
          </span>
        </div>
      </div>

      {/* HOVER BORDER */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          opacity-0
          ring-1
          ring-inset
          ring-[#d93232]/70
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </article>
  );
}

export default SafetyShoes;