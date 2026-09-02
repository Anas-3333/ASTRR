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
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /*
   * =========================================================
   * SLIDE LOCK
   * =========================================================
   */

  const lockAnimation = () => {
    window.setTimeout(() => {
      setIsAnimating(false);
    }, 1150);
  };

  /*
   * =========================================================
   * NEXT
   * =========================================================
   */

  const goNext = () => {
    if (isAnimating) return;

    setDirection("next");
    setIsAnimating(true);

    setActiveIndex((current) => {
      return (current + 1) % productionItems.length;
    });

    lockAnimation();
  };

  /*
   * =========================================================
   * PREVIOUS
   * =========================================================
   */

  const goPrevious = () => {
    if (isAnimating) return;

    setDirection("prev");
    setIsAnimating(true);

    setActiveIndex((current) => {
      return (
        (current - 1 + productionItems.length) %
        productionItems.length
      );
    });

    lockAnimation();
  };

  /*
   * =========================================================
   * GO TO SPECIFIC CARD
   * =========================================================
   */

  const goTo = (index: number) => {
    if (isAnimating || index === activeIndex) return;

    setDirection(index > activeIndex ? "next" : "prev");
    setIsAnimating(true);
    setActiveIndex(index);

    lockAnimation();
  };

  /*
   * =========================================================
   * POSITION
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
   *
   * This keeps your exact reference composition.
   * =========================================================
   */

  const getCardTransform = (position: number) => {
    /*
     * CENTER
     */
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

    /*
     * LEFT
     */
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

    /*
     * RIGHT
     */
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

    /*
     * FAR LEFT
     */
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

    /*
     * FAR RIGHT
     */
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

    /*
     * HIDDEN
     */
    return {
      x: position < 0 ? "-280%" : "280%",
      y: "55px",
      scale: 0.5,
      rotate: position < 0 ? -12 : 12,
      z: 0,
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
        text-white
        py-14
        sm:py-18
        lg:py-20
      "
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_48%,rgba(217,50,50,0.055),transparent_48%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#d93232]/[0.025]
          blur-[120px]
        "
      />

      {/* =====================================================
          HEADING
      ====================================================== */}

      <div
        className={`
          relative
          z-[100]
          px-5
          text-center

          transition-all
          duration-[1400ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-12 scale-[0.96] opacity-0"
          }
        `}
      >
        <p
          className="
            mb-3
            text-[8px]
            font-medium
            uppercase
            tracking-[0.5em]
            text-white/30
          "
        >
          ASTRR / Manufacturing
        </p>

        <h2
          className="
            text-[34px]
            font-black
            uppercase
            leading-none
            tracking-[-0.04em]

            sm:text-[44px]

            md:text-[52px]

            lg:text-[60px]
          "
        >
          <span className="text-white">
            PROCESS
          </span>{" "}
          <span className="text-[#d93232]">
            AND INFORMATION
          </span>
        </h2>

        {/* Animated underline */}

        <div className="mx-auto mt-5 h-px w-20 overflow-hidden bg-white/10">
          <div
            className={`
              h-full
              bg-[#d93232]
              transition-all
              duration-[1400ms]
              delay-500
              ${
                isVisible
                  ? "w-full"
                  : "w-0"
              }
            `}
          />
        </div>
      </div>

      {/* =====================================================
          CARD STAGE
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          mt-10
          h-[455px]
          w-full

          sm:mt-12
          sm:h-[515px]

          md:mt-14
          md:h-[565px]

          lg:mt-16
          lg:h-[600px]
        "
        style={{
          perspective: "1800px",
        }}
      >
        {/* ===================================================
            SUBTLE HORIZONTAL LIGHT
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-px
            w-[85%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent
          "
        />

        {/* ===================================================
            CARDS
        ==================================================== */}

        {productionItems.map((item, index) => {
          const position = getPosition(index);

          if (Math.abs(position) > 2) {
            return null;
          }

          const transform = getCardTransform(position);

          const isCenter = position === 0;
          const isHovered = hoveredCard === item.id;

          return (
            <article
              key={item.id}
              onMouseEnter={() =>
                setHoveredCard(item.id)
              }
              onMouseLeave={() =>
                setHoveredCard(null)
              }
              onClick={() => {
                if (!isCenter) {
                  goTo(index);
                }
              }}
              className={`
                absolute
                left-1/2
                top-1/2

                h-[350px]
                w-[225px]

                overflow-hidden
                rounded-[22px]

                border
                border-white/[0.16]

                bg-[#090909]

                transform-gpu

                transition-all
                duration-[1100ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]

                sm:h-[410px]
                sm:w-[265px]
                sm:rounded-[25px]

                md:h-[455px]
                md:w-[290px]

                lg:h-[500px]
                lg:w-[315px]
                lg:rounded-[28px]

                ${
                  isCenter
                    ? "cursor-default"
                    : "cursor-pointer"
                }
              `}
              style={{
                transform: `
                  translate(-50%, -50%)
                  translateX(${transform.x})
                  translateY(${transform.y})
                  translateZ(${transform.z}px)
                  rotate(${transform.rotate}deg)
                  scale(${transform.scale})
                `,

                opacity: isVisible
                  ? transform.opacity
                  : 0,

                zIndex: transform.z,

                transitionDelay: isVisible
                  ? `${Math.abs(position) * 45}ms`
                  : "0ms",

                filter: isCenter
                  ? "brightness(1)"
                  : `brightness(${
                      0.72 +
                      (2 - Math.abs(position)) *
                        0.08
                    })`,
              }}
            >
              {/* =================================================
                  CARD IMAGE
              ================================================== */}

              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  className={`
                    h-full
                    w-full
                    object-cover
                    object-center

                    transform-gpu

                    transition-all
                    duration-[1800ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]

                    ${
                      isCenter
                        ? "scale-100"
                        : "scale-[1.045]"
                    }

                    ${
                      isHovered && isCenter
                        ? "scale-[1.055]"
                        : ""
                    }
                  `}
                />

                {/* =================================================
                    CINEMATIC TOP VIGNETTE
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-[40%]
                    bg-gradient-to-b
                    from-black/70
                    via-black/20
                    to-transparent
                  "
                />

                {/* =================================================
                    CINEMATIC BOTTOM VIGNETTE
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-[65%]
                    bg-gradient-to-t
                    from-black
                    via-black/70
                    to-transparent
                  "
                />

                {/* =================================================
                    IMAGE COLOR DEPTH
                ================================================== */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    transition-opacity
                    duration-1000

                    ${
                      isCenter
                        ? "bg-[#d93232]/[0.025] opacity-100"
                        : "bg-black/10 opacity-100"
                    }
                  `}
                />

                {/* =================================================
                    MOVING SHINE
                ================================================== */}

                {isCenter && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-[80%]
                      w-[45%]
                      rotate-[15deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.08]
                      to-transparent
                      animate-[productionShine_5s_ease-in-out_infinite]
                    "
                  />
                )}
              </div>

              {/* =================================================
                  NUMBER
              ================================================== */}

              <div
                className={`
                  absolute
                  left-5
                  top-5
                  flex
                  items-center
                  gap-2

                  transition-all
                  duration-700

                  sm:left-6
                  sm:top-6

                  ${
                    isCenter
                      ? "translate-x-0 opacity-100"
                      : "translate-x-1 opacity-70"
                  }
                `}
              >
                <span
                  className={`
                    h-px
                    bg-[#d93232]

                    transition-all
                    duration-700

                    ${
                      isCenter
                        ? "w-8"
                        : "w-5"
                    }
                  `}
                />

                <span
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.3em]
                    text-white
                  "
                >
                  {String(item.id).padStart(
                    2,
                    "0"
                  )}
                </span>
              </div>

              {/* =================================================
                  CENTER CARD "FEATURED"
              ================================================== */}

              {isCenter && (
                <div
                  className="
                    absolute
                    right-5
                    top-5

                    overflow-hidden
                    rounded-full
                    border
                    border-white/15
                    bg-black/30
                    px-2.5
                    py-1

                    backdrop-blur-sm

                    sm:right-6
                    sm:top-6
                  "
                >
                  <span
                    className="
                      text-[7px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-white/70
                    "
                  >
                    Featured
                  </span>
                </div>
              )}

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div
                className={`
                  absolute
                  inset-x-0
                  bottom-0

                  px-5
                  pb-6
                  pt-14

                  transition-all
                  duration-[900ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  sm:px-6
                  sm:pb-7

                  ${
                    isCenter
                      ? "translate-y-0 opacity-100"
                      : "translate-y-1 opacity-80"
                  }
                `}
              >
                <h3
                  className="
                    max-w-[280px]
                    text-[19px]
                    font-bold
                    leading-[1.08]
                    tracking-[-0.025em]
                    text-white

                    sm:text-[21px]

                    md:text-[23px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[280px]
                    text-[10px]
                    leading-[1.6]
                    text-white/65

                    sm:text-[11px]
                  "
                >
                  {item.description}
                </p>

                {/* =================================================
                    RED PROGRESS LINE
                ================================================== */}

                <div
                  className="
                    mt-4
                    h-[2px]
                    w-full
                    max-w-[60px]
                    overflow-hidden
                    bg-white/10
                  "
                >
                  <div
                    className={`
                      h-full
                      bg-[#d93232]

                      transition-all
                      duration-[900ms]

                      ${
                        isCenter
                          ? "w-full"
                          : "w-[45%]"
                      }
                    `}
                  />
                </div>
              </div>

              {/* =================================================
                  ACTIVE CARD GLOW
              ================================================== */}

              {isCenter && (
                <>
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[22px]
                      border
                      border-[#d93232]/40

                      shadow-[inset_0_0_35px_rgba(217,50,50,0.07)]

                      sm:rounded-[25px]

                      lg:rounded-[28px]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -inset-px
                      rounded-[22px]
                      opacity-40
                      blur-[1px]

                      sm:rounded-[25px]

                      lg:rounded-[28px]

                      shadow-[0_0_45px_rgba(217,50,50,0.10)]
                    "
                  />
                </>
              )}
            </article>
          );
        })}
      </div>

      {/* =====================================================
          CONTROLS
      ====================================================== */}

      <div
        className={`
          relative
          z-[100]
          -mt-3
          flex
          items-center
          justify-between
          px-6

          sm:px-10

          md:px-14

          lg:mx-auto
          lg:max-w-[1250px]
          lg:px-0

          transition-all
          duration-[1200ms]
          delay-500

          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }
        `}
      >
        {/* =================================================
            PREVIOUS
        ================================================== */}

        <button
          type="button"
          onClick={goPrevious}
          disabled={isAnimating}
          aria-label="Previous production item"
          className="
            group
            flex
            h-8
            items-center
            gap-2

            border
            border-white/20

            bg-black/40

            px-3

            text-[8px]
            uppercase
            tracking-[0.18em]
            text-white/60

            backdrop-blur-sm

            transition-all
            duration-400

            hover:border-[#d93232]
            hover:bg-[#d93232]
            hover:text-white

            active:scale-95

            disabled:pointer-events-none
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

          <span>Prev</span>
        </button>

        {/* =================================================
            DOTS
        ================================================== */}

        <div
          className="
            flex
            items-center
            gap-1
          "
        >
          {productionItems.map(
            (item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to production item ${item.id}`}
                onClick={() => goTo(index)}
                className="
                  group
                  flex
                  h-6
                  items-center
                  justify-center
                  px-0.5
                "
              >
                <span
                  className={`
                    block
                    h-[3px]
                    rounded-full

                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]

                    ${
                      index === activeIndex
                        ? "w-8 bg-[#d93232] shadow-[0_0_10px_rgba(217,50,50,0.35)]"
                        : "w-1.5 bg-white/20 group-hover:w-3 group-hover:bg-white/50"
                    }
                  `}
                />
              </button>
            )
          )}
        </div>

        {/* =================================================
            NEXT
        ================================================== */}

        <button
          type="button"
          onClick={goNext}
          disabled={isAnimating}
          aria-label="Next production item"
          className="
            group
            flex
            h-8
            items-center
            gap-2

            border
            border-white/20

            bg-black/40

            px-3

            text-[8px]
            uppercase
            tracking-[0.18em]
            text-white/60

            backdrop-blur-sm

            transition-all
            duration-400

            hover:border-[#d93232]
            hover:bg-[#d93232]
            hover:text-white

            active:scale-95

            disabled:pointer-events-none
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

      {/* =====================================================
          BRAND LABEL
      ====================================================== */}

      <div
        className={`
          relative
          z-20
          mt-7
          text-center

          transition-all
          duration-1000
          delay-700

          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }
        `}
      >
        <span
          className="
            text-[7px]
            font-medium
            uppercase
            tracking-[0.4em]
            text-white/20
          "
        >
          ASTRR / PRODUCTION
        </span>
      </div>

      {/* =====================================================
          CUSTOM ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes productionShine {
            0% {
              transform: translateX(-150%) rotate(15deg);
              opacity: 0;
            }

            12% {
              opacity: 1;
            }

            35% {
              transform: translateX(450%) rotate(15deg);
              opacity: 0;
            }

            100% {
              transform: translateX(450%) rotate(15deg);
              opacity: 0;
            }
          }

          @keyframes productionFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-4px);
            }
          }

          @media (max-width: 639px) {
            #production {
              overflow-x: hidden;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            #production *,
            #production *::before,
            #production *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Production;