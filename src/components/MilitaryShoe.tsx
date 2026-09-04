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
    desktopCardImage: "/converted-webp/webp-EMS-desktop.webp",
    quickViewImage: "/converted-webp/webp-ems.webp",
    description:
      "SECURITY FORCES | TACTICAL FOOTWEAR",
  },
  {
    number: "03",
    title: "Outdoor",
    cardImage: "/converted-webp/webp-outdoor.webp",
    desktopCardImage: "/converted-webp/webp-outdoor-desktop.webp",
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

function MilitaryShoes() {
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
              SHOES
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
            ENGINEERED FOOTWEAR FOR MILITARY
            <br />
            AND TACTICAL OPERATIONS.
          </p>
        </div>

        {/* =====================================================
            EXACT GRID STRUCTURE
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
              md:auto-rows-[clamp(180px,25vw,350px)]


            "
          >
            {/* 01 */}

            <AnimatedMilitaryCard
              product={militaryShoes[0]}
              onClick={() =>
                setSelectedProduct(
                  militaryShoes[0]
                )
              }
              isVisible={isVisible}
              animation="left"
              delay={100}
              className="
                md:col-start-1
                md:row-start-1
              "
            />

            {/* 02 — ROW 1 + ROW 2 */}

            <AnimatedMilitaryCard
              product={militaryShoes[1]}
              onClick={() =>
                setSelectedProduct(
                  militaryShoes[1]
                )
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

            {/* 03 — ROW 2 + ROW 3 */}

            <AnimatedMilitaryCard
              product={militaryShoes[2]}
              onClick={() =>
                setSelectedProduct(
                  militaryShoes[2]
                )
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

            <AnimatedMilitaryCard
              product={militaryShoes[3]}
              onClick={() =>
                setSelectedProduct(
                  militaryShoes[3]
                )
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

            <AnimatedMilitaryCard
              product={militaryShoes[4]}
              onClick={() =>
                setSelectedProduct(
                  militaryShoes[4]
                )
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

            <AnimatedMilitaryCard
              product={militaryShoes[5]}
              onClick={() =>
                setSelectedProduct(
                  militaryShoes[5]
                )
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
            BUILT FOR THE MISSION
          </h3>
        </div>
      </section>

      {/* =====================================================
          QUICK VIEW
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
   ANIMATED MILITARY CARD
========================================================= */

type AnimatedMilitaryCardProps = {
  product: Product;
  onClick: () => void;
  isVisible: boolean;
  animation: "left" | "right";
  delay: number;
  className?: string;
};

function AnimatedMilitaryCard({
  product,
  onClick,
  isVisible,
  animation,
  delay,
  className = "",
}: AnimatedMilitaryCardProps) {
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
        min-h-[clamp(260px,65vw,340px)]
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
        md:h-full

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

      {/* Mobile Image */}
      <img
        src={product.cardImage}
        alt={product.title.replace(
          "\n",
          " "
        )}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={`
          absolute
          inset-0
          h-full
          w-full
          object-contain md:object-cover
          object-center

          transition-transform
          duration-[1400ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          group-hover:scale-[1.04]
          ${product.desktopCardImage ? "md:hidden" : ""}
        `}
      />

      {/* Desktop Image */}
      {product.desktopCardImage && (
        <img
          src={product.desktopCardImage}
          alt={product.title.replace("\n", " ")}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-contain md:object-cover
            object-center

            transition-transform
            duration-[1400ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]

            group-hover:scale-[1.04]
            hidden
            md:block
          "
        />
      )}

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

      {/* BOTTOM GRADIENT */}

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
            text-[clamp(24px,7vw,55px)]
            font-black
            uppercase
            leading-[0.9]
            sm:leading-[0.84]
            tracking-[-0.05em]
            text-white
            

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
            mt-3
            sm:mt-4
            flex
            flex-col
            sm:flex-row
            sm:items-end
            justify-between
            gap-2
            sm:gap-4
            opacity-80
            transition-all
            duration-700
            group-hover:opacity-100
          "
        >
          <p
            className="
              max-w-full
              sm:max-w-[72%]
              text-[8px]
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
              text-[9px]
              sm:text-[8px]
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

      {/* RED HOVER EDGE */}

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

      {/* MOVING RED LINE */}

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

export default MilitaryShoes;