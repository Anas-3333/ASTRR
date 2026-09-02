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
    cardImage: "/converted-webp/webp-security.webp",
    quickViewImage: "/converted-webp/security_quickview.webp",
    description:
      "SECURITY FORCES | TACTICAL FOOTWEAR",
  },
  {
    number: "03",
    title: "EXECUTIVE\nOFFICERS",
    cardImage: "/converted-webp/webp-officer.webp",
    quickViewImage: "/converted-webp/MIL3.webp",
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
    quickViewImage: "/converted-webp/security_quickview.webp",
    description:
      "TACTICAL OPERATIONS | GRIP • CONTROL",
  },
];

function SafetyShoes() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="safety-shoes"
        className="
          relative
          w-full
          overflow-hidden
          bg-black
          text-white
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className={`
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

            transform
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }
          `}
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
            EXACT 01-06 GRID
        ====================================================== */}

        <div
          className="
            w-full
            px-2
            sm:px-4
            lg:px-7
            xl:px-10
          "
        >
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-[2px]
              bg-black

              md:grid-cols-2
              md:grid-rows-[220px_220px_220px_220px]

              lg:grid-rows-[260px_260px_260px_260px]

              xl:grid-rows-[300px_300px_300px_300px]
            "
          >
            {/* 01 */}

            <AnimatedShoeCard
              product={shoes[0]}
              onClick={() =>
                setSelectedProduct(shoes[0])
              }
              isVisible={isVisible}
              animation="left"
              delay={100}
              className="
                md:col-start-1
                md:row-start-1
              "
            />

            {/* 02 — spans rows 1 + 2 */}

            <AnimatedShoeCard
              product={shoes[1]}
              onClick={() =>
                setSelectedProduct(shoes[1])
              }
              isVisible={isVisible}
              animation="right"
              delay={220}
              className="
                md:col-start-2
                md:row-start-1
                md:row-span-2
              "
            />

            {/* 03 — spans rows 2 + 3 */}

            <AnimatedShoeCard
              product={shoes[2]}
              onClick={() =>
                setSelectedProduct(shoes[2])
              }
              isVisible={isVisible}
              animation="left"
              delay={340}
              className="
                md:col-start-1
                md:row-start-2
                md:row-span-2
              "
            />

            {/* 04 */}

            <AnimatedShoeCard
              product={shoes[3]}
              onClick={() =>
                setSelectedProduct(shoes[3])
              }
              isVisible={isVisible}
              animation="right"
              delay={460}
              className="
                md:col-start-2
                md:row-start-3
              "
            />

            {/* 05 */}

            <AnimatedShoeCard
              product={shoes[4]}
              onClick={() =>
                setSelectedProduct(shoes[4])
              }
              isVisible={isVisible}
              animation="left"
              delay={580}
              className="
                md:col-start-1
                md:row-start-4
              "
            />

            {/* 06 */}

            <AnimatedShoeCard
              product={shoes[5]}
              onClick={() =>
                setSelectedProduct(shoes[5])
              }
              isVisible={isVisible}
              animation="right"
              delay={700}
              className="
                md:col-start-2
                md:row-start-4
              "
            />
          </div>
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
   ANIMATED CARD
========================================================= */

type AnimatedShoeCardProps = {
  product: Product;
  onClick: () => void;
  isVisible: boolean;
  animation: "left" | "right";
  delay: number;
  className?: string;
};

function AnimatedShoeCard({
  product,
  onClick,
  isVisible,
  animation,
  delay,
  className = "",
}: AnimatedShoeCardProps) {
  const initialPosition =
    animation === "left"
      ? "-translate-x-24"
      : "translate-x-24";

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
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        group
        relative
        min-h-[300px]
        w-full
        cursor-pointer
        overflow-hidden
        bg-[#111]
        outline-none

        transform
        transition-all
        duration-[1200ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        md:min-h-0

        ${
          isVisible
            ? "translate-x-0 translate-y-0 scale-100 opacity-100"
            : `${initialPosition} scale-[0.94] opacity-0`
        }

        focus-visible:ring-2
        focus-visible:ring-[#d93232]
        focus-visible:ring-inset

        ${className}
      `}
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
          duration-[1400ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          group-hover:scale-[1.08]
          group-hover:rotate-[0.3deg]
        "
      />

      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-black/25
          transition-all
          duration-700
          group-hover:bg-black/10
        "
      />

      {/* CINEMATIC GRADIENT */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[75%]
          bg-gradient-to-t
          from-black
          via-black/65
          to-transparent
          transition-opacity
          duration-700
          group-hover:opacity-80
        "
      />

      {/* TOP GRADIENT */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[35%]
          bg-gradient-to-b
          from-black/50
          to-transparent
        "
      />

      {/* NUMBER */}

      <div
        className="
          absolute
          left-5
          top-5
          z-20
          flex
          items-center
          gap-3
          sm:left-7
          sm:top-7
        "
      >
        <span
          className="
            h-px
            w-8
            origin-left
            bg-[#d93232]
            transition-all
            duration-500
            group-hover:w-14
          "
        />

        <span
          className="
            text-[10px]
            font-medium
            tracking-[0.12em]
            text-white/85
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
          z-20
          p-5
          sm:p-7
          lg:p-8
        "
      >
        <h3
          className="
            whitespace-pre-line
            text-[clamp(27px,4vw,55px)]
            font-black
            uppercase
            leading-[0.84]
            tracking-[-0.05em]
            text-white
            drop-shadow-[0_3px_15px_rgba(0,0,0,0.9)]

            transition-transform
            duration-700
            ease-out

            group-hover:-translate-y-2
          "
        >
          {product.title}
        </h3>

        <div
          className="
            mt-4
            flex
            items-end
            justify-between
            gap-4
            opacity-80
            transition-all
            duration-700
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <p
            className="
              max-w-[72%]
              text-[7px]
              font-medium
              uppercase
              leading-[1.5]
              tracking-[0.07em]
              text-white/80
              sm:text-[8px]
              lg:text-[9px]
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
              tracking-[0.08em]
              text-[#d93232]

              transition-all
              duration-500

              group-hover:translate-x-1
            "
          >
            Explore →
          </span>
        </div>
      </div>

      {/* RED EDGE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-30
          border
          border-[#d93232]/0
          transition-all
          duration-700
          group-hover:border-[#d93232]/70
        "
      />

      {/* MOVING RED LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-30
          h-[2px]
          w-0
          bg-[#d93232]
          transition-all
          duration-700
          group-hover:w-full
        "
      />
    </article>
  );
}

export default SafetyShoes;