import { useEffect, useState } from "react";

type ProductionItem = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const productionItems: ProductionItem[] = [
  {
    id: 1,
    image: "https://astrr.co/img/army-shoes/shoedryingandcuring.webp",
    title: "Shoe Drying and Curing",
    description:
      "Shoe Drying and Curing properly hardens adhesives and materials for stronger shoe construction.",
  },
  {
    id: 2,
    image: "https://astrr.co/img/army-shoes/ali-certeficate-1.webp",
    title: "Waterless Processing Cert.",
    description:
      "Waterless tanning saves water, reduces chemicals, and needs less drainage.",
  },
  {
    id: 3,
    image: "https://astrr.co/img/army-shoes/ali-certeficate-2.webp",
    title: "ISO 9001 Certified",
    description:
      "Ensuring adherence to the highest international quality, safety and environmental sustainability standards in our process.",
  },
  {
    id: 4,
    image: "https://astrr.co/img/army-shoes/automatedshoelasting.webp",
    title: "Advanced Production",
    description:
      "Modern production processes combined with generations of manufacturing expertise.",
  },
  {
    id: 5,
    image: "https://astrr.co/img/army-shoes/ali-certeficate-3.webp",
    title: "Quality Control",
    description:
      "Every stage of production is carefully monitored to maintain consistent quality.",
  },
  {
    id: 6,
    image: "https://astrr.co/img/army-shoes/stitching.webp",
    title: "Leather Processing",
    description:
      "Carefully controlled leather processing creates durable and reliable finished products.",
  },
  {
    id: 7,
    image: "https://astrr.co/img/army-shoes/automatedleatherstitching.webp",
    title: "Manufacturing",
    description:
      "Precision manufacturing supported by advanced technology and skilled craftsmanship.",
  },
  {
    id: 8,
    image: "/images/production/production-8.webp",
    title: "ASTRR Standards",
    description:
      "Our commitment to quality, safety, sustainability and dependable production.",
  },
];

function Production() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  /*
   * =========================================================
   * SECTION REVEAL
   * =========================================================
   */

  useEffect(() => {
    const section = document.getElementById("production");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /*
   * =========================================================
   * CHANGE SLIDE
   * =========================================================
   */

  const goNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setActiveIndex((current) => {
      return (current + 1) % productionItems.length;
    });

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 1050);
  };

  const goPrevious = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setActiveIndex((current) => {
      return (
        (current - 1 + productionItems.length) %
        productionItems.length
      );
    });

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 1050);
  };

  const goTo = (index: number) => {
    if (isAnimating || index === activeIndex) return;

    setIsAnimating(true);
    setActiveIndex(index);

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 1050);
  };

  /*
   * =========================================================
   * POSITION CALCULATION
   *
   * -2 = FAR LEFT
   * -1 = LEFT
   *  0 = CENTER
   * +1 = RIGHT
   * +2 = FAR RIGHT
   * =========================================================
   */

  const getPosition = (index: number) => {
    const total = productionItems.length;

    let position = index - activeIndex;

    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    return position;
  };

  /*
   * =========================================================
   * CARD TRANSFORM
   * =========================================================
   */

  const getCardTransform = (position: number) => {
    if (position === 0) {
      return {
        x: "0%",
        y: "0px",
        scale: 1,
        rotate: 0,
        z: 220,
        opacity: 1,
      };
    }

    if (position === -1) {
      return {
        x: "-87%",
        y: "18px",
        scale: 0.86,
        rotate: -4.5,
        z: 110,
        opacity: 0.92,
      };
    }

    if (position === 1) {
      return {
        x: "87%",
        y: "18px",
        scale: 0.86,
        rotate: 4.5,
        z: 110,
        opacity: 0.92,
      };
    }

    if (position === -2) {
      return {
        x: "-168%",
        y: "38px",
        scale: 0.72,
        rotate: -8,
        z: 50,
        opacity: 0.62,
      };
    }

    if (position === 2) {
      return {
        x: "168%",
        y: "38px",
        scale: 0.72,
        rotate: 8,
        z: 50,
        opacity: 0.62,
      };
    }

    return {
      x: position < 0 ? "-230%" : "230%",
      y: "55px",
      scale: 0.58,
      rotate: position < 0 ? -11 : 11,
      z: 10,
      opacity: 0,
    };
  };

  return (
    <section
      id="production"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        px-4
        py-16
        text-white
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[38%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#d93232]/[0.045]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#d93232]/40
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className={`
            mb-10
            transition-all
            duration-[1000ms]
            sm:mb-14
            lg:mb-16
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p
                className="
                  mb-4
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#d93232]
                  sm:text-[10px]
                "
              >
                ASTRR.CO / MANUFACTURING
              </p>

              <h2
                className="
                  text-[42px]
                  font-black
                  uppercase
                  leading-[0.86]
                  tracking-[-0.05em]
                  sm:text-[56px]
                  md:text-[68px]
                  lg:text-[78px]
                "
              >
                PRODUCTION{" "}
                <span className="text-[#d93232]">
                  PROCESS
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-[560px]
                  text-[9px]
                  font-medium
                  uppercase
                  leading-5
                  tracking-[0.15em]
                  text-white/40
                  sm:text-[10px]
                "
              >
                PRECISION MANUFACTURING • ADVANCED TECHNOLOGY
                <br className="hidden sm:block" />
                • CONTROLLED QUALITY • GLOBAL STANDARDS
              </p>
            </div>

            {/* COLLECTION NUMBER */}

            <div className="hidden shrink-0 text-right sm:block">
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                PROCESS
              </p>

              <p
                className="
                  mt-1
                  text-3xl
                  font-black
                  text-white/[0.08]
                "
              >
                08
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            CAROUSEL STAGE
        ==================================================== */}

        <div
          className="
            relative
            h-[410px]
            w-full
            sm:h-[455px]
            md:h-[490px]
            lg:h-[525px]
          "
          style={{
            perspective: "1600px",
          }}
        >
          {/* FLOOR GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-6
              left-1/2
              h-24
              w-[55%]
              -translate-x-1/2
              rounded-[50%]
              bg-[#d93232]/[0.06]
              blur-3xl
            "
          />

          {productionItems.map((item, index) => {
            const position = getPosition(index);
            const transform = getCardTransform(position);
            const isCenter = position === 0;

            return (
              <article
                key={item.id}
                className={`
                  production-card
                  absolute
                  left-1/2
                  top-1/2
                  w-[270px]
                  overflow-hidden
                  border
                  bg-[#0a0a0a]
                  shadow-2xl
                  sm:w-[320px]
                  md:w-[350px]
                  lg:w-[380px]
                  ${
                    isCenter
                      ? "border-white/20"
                      : "border-white/[0.08]"
                  }
                `}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${transform.x})
                    translateY(${transform.y})
                    scale(${transform.scale})
                    rotateY(${transform.rotate}deg)
                  `,
                  zIndex: transform.z,
                  opacity: transform.opacity,
                  transition: `
                    transform 1050ms cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 850ms ease,
                    border-color 500ms ease,
                    box-shadow 500ms ease
                  `,
                  transformStyle: "preserve-3d",
                  pointerEvents:
                    Math.abs(position) <= 2
                      ? "auto"
                      : "none",
                }}
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    bg-[#111]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading={isCenter ? "eager" : "lazy"}
                    decoding="async"
                    className={`
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1400ms]
                      ease-out
                      ${
                        isCenter
                          ? "scale-100"
                          : "scale-105"
                      }
                    `}
                  />

                  {/* IMAGE OVERLAY */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/75
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* CARD NUMBER */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-8
                      min-w-8
                      items-center
                      justify-center
                      border
                      border-white/15
                      bg-black/45
                      px-2
                      backdrop-blur-sm
                    "
                  >
                    <span
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-white/80
                      "
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* CENTER INDICATOR */}

                  {isCenter && (
                    <div
                      className="
                        absolute
                        right-4
                        top-4
                        flex
                        items-center
                        gap-2
                        border
                        border-[#d93232]/30
                        bg-black/50
                        px-3
                        py-2
                        backdrop-blur-sm
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#d93232]
                          
                        "
                      />

                      <span
                        className="
                          text-[7px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-white/60
                        "
                      >
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* CONTENT */}

                <div className="p-5 sm:p-6 lg:p-7">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3
                      className="
                        max-w-[280px]
                        text-[18px]
                        font-black
                        uppercase
                        leading-[0.95]
                        tracking-[-0.025em]
                        text-white
                        sm:text-[20px]
                        lg:text-[22px]
                      "
                    >
                      {item.title}
                    </h3>

                    <span
                      className="
                        mt-1
                        shrink-0
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-[#d93232]
                      "
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>
                  </div>

                  <div
                    className="
                      mb-5
                      h-px
                      w-full
                      bg-white/[0.08]
                    "
                  />

                  <p
                    className="
                      min-h-[52px]
                      text-[9px]
                      font-medium
                      leading-5
                      tracking-[0.08em]
                      text-white/45
                      sm:text-[10px]
                    "
                  >
                    {item.description}
                  </p>

                  {/* CARD BOTTOM */}

                  <div className="mt-6 flex items-center justify-between">
                    <span
                      className="
                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.25em]
                        text-white/20
                      "
                    >
                      ASTRR / QUALITY
                    </span>

                    <span
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-[#d93232]
                      "
                    >
                      Process →
                    </span>
                  </div>
                </div>

                {/* ACTIVE BORDER */}

                {isCenter && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      ring-1
                      ring-inset
                      ring-[#d93232]/30
                    "
                  />
                )}
              </article>
            );
          })}
        </div>

        {/* ===================================================
            CONTROLS
        ==================================================== */}

        <div
          className={`
            relative
            z-30
            mt-2
            flex
            items-center
            justify-center
            gap-3
            transition-all
            delay-200
            duration-700
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          {/* PREVIOUS */}

          <button
            type="button"
            onClick={goPrevious}
            disabled={isAnimating}
            aria-label="Previous production item"
            className="
              group
              flex
              h-11
              items-center
              gap-3
              border
              border-white/10
              bg-white/[0.02]
              px-5
              text-[8px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-white/60
              transition-all
              duration-300
              hover:border-[#d93232]
              hover:bg-[#d93232]
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <span
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            >
              ←
            </span>

            <span>Previous</span>
          </button>

          {/* DOTS */}

          <div
            className="
              mx-2
              flex
              items-center
              gap-2
            "
          >
            {productionItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                disabled={isAnimating}
                aria-label={`Go to production item ${item.id}`}
                className="
                  group
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  disabled:cursor-not-allowed
                "
              >
                <span
                  className={`
                    block
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      index === activeIndex
                        ? "h-1.5 w-5 bg-[#d93232] shadow-[0_0_12px_rgba(217,50,50,0.55)]"
                        : "h-1.5 w-1.5 bg-white/20 group-hover:bg-white/60"
                    }
                  `}
                />
              </button>
            ))}
          </div>

          {/* NEXT */}

          <button
            type="button"
            onClick={goNext}
            disabled={isAnimating}
            aria-label="Next production item"
            className="
              group
              flex
              h-11
              items-center
              gap-3
              border
              border-white/10
              bg-white/[0.02]
              px-5
              text-[8px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-white/60
              transition-all
              duration-300
              hover:border-[#d93232]
              hover:bg-[#d93232]
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <span>Next</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>
        </div>

        {/* ===================================================
            BRAND LABEL
        ==================================================== */}

        <div className="relative z-20 mt-6 text-center">
          <span
            className="
              text-[7px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-white/20
            "
          >
            ASTRR / PRODUCTION
          </span>
        </div>
      </div>

      {/* =====================================================
          REDUCED MOTION
      ====================================================== */}

      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            #production *,
            #production *::before,
            #production *::after {
              transition-duration: 0.01ms !important;
              animation-duration: 0.01ms !important;
            }
          }

          @media (max-width: 639px) {
            #production .production-card {
              max-width: 82vw;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Production;