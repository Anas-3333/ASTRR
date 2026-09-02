import {
  useEffect,
  useRef,
  useState,
} from "react";

type Hero = {
  number: string;
  title: string;
  image: string;
  description?: string;
};

const heroes: Hero[] = [
  {
    number: "01",
    title: "Combat Forces",
    image: "/converted-webp/Combat-Force.webp",
    description: "Engineered for combat operations.",
  },
  {
    number: "02",
    title: "Air Forces",
    image: "/converted-webp/Air-force.webp",
    description: "Protection for demanding environments.",
  },
  {
    number: "03",
    title: "Police",
    image: "/converted-webp/Police.webp",
    description: "Built for law enforcement professionals.",
  },
  {
    number: "04",
    title: "Officer",
    image: "/converted-webp/webp-officer.webp",
    description: "Professional footwear for those who lead.",
  },
  {
    number: "05",
    title: "Security Forces",
    image: "/converted-webp/Security.webp",
    description: "Reliable footwear for security operations.",
  },
  {
    number: "06",
    title: "Safety Work",
    image: "/converted-webp/Industrial-safety.webp",
    description: "Designed for tactical performance.",
  },
];

function HeroesWeServe() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isVisible, setIsVisible] =
    useState(false);

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const intervalRef =
    useRef<ReturnType<typeof setInterval> | null>(
      null
    );

  /*
   * =====================================================
   * SECTION REVEAL
   * =====================================================
   */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            observer.unobserve(section);
          }
        },
        {
          threshold: 0.2,
        }
      );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /*
   * =====================================================
   * AUTOMATIC LEFT ↔ RIGHT CAROUSEL
   * =====================================================
   */

  useEffect(() => {
    if (!isVisible) return;

    intervalRef.current =
      setInterval(() => {
        setActiveIndex((current) =>
          (current + 1) % heroes.length
        );
      }, 3200);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]);

  /*
   * =====================================================
   * GET POSITION RELATIVE TO ACTIVE CARD
   * =====================================================
   */

  const getRelativePosition = (
    index: number
  ) => {
    let difference =
      index - activeIndex;

    const half =
      Math.floor(heroes.length / 2);

    if (difference > half) {
      difference -= heroes.length;
    }

    if (difference < -half) {
      difference += heroes.length;
    }

    return difference;
  };

  /*
   * =====================================================
   * MANUAL NAVIGATION
   * =====================================================
   */

  const moveNext = () => {
    setActiveIndex(
      (current) =>
        (current + 1) % heroes.length
    );
  };

  const movePrevious = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + heroes.length) %
        heroes.length
    );
  };

  return (
    <section
      ref={sectionRef}
      id="heroes-we-serve"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        py-20
        text-white
        sm:py-24
        lg:py-28
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
          bg-[radial-gradient(circle_at_50%_42%,rgba(217,50,50,0.10),transparent_42%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[38%]
          h-[420px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#d93232]/[0.035]
          blur-[120px]
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className={`
          relative
          z-20
          px-6
          text-center

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
            tracking-[0.35em]
            text-[#d93232]
            sm:text-[10px]
          "
        >
          ASTRR.CO / WHO WE SERVE
        </p>

        <h2
          className="
            text-[clamp(42px,6vw,78px)]
            font-black
            uppercase
            leading-[0.85]
            tracking-[-0.055em]
          "
        >
          <span className="text-white">
            Heroes
          </span>{" "}
          <span className="text-[#d93232]">
            We Serve
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-[520px]
            text-[9px]
            uppercase
            leading-[1.8]
            tracking-[0.18em]
            text-white/40
            sm:text-[10px]
          "
        >
          ENGINEERED FOOTWEAR FOR THOSE
          <br />
          WHO SERVE, PROTECT AND LEAD.
        </p>
      </div>

      {/* =====================================================
          3D CARD STAGE
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-14
          h-[470px]
          w-full
          max-w-[1500px]
          sm:mt-16
          sm:h-[540px]
          lg:mt-20
          lg:h-[610px]
        "
        style={{
          perspective: "1400px",
        }}
      >
        {/* ===================================================
            CARDS
        ==================================================== */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          {heroes.map(
            (hero, index) => {
              const position =
                getRelativePosition(index);

              /*
               * Only render cards close enough
               * to the center.
               */

              if (Math.abs(position) > 3) {
                return null;
              }

              const isCenter =
                position === 0;

              /*
               * Horizontal position
               */

              let translateX = 0;

              if (position === -1) {
                translateX = -255;
              }

              if (position === 1) {
                translateX = 255;
              }

              if (position === -2) {
                translateX = -465;
              }

              if (position === 2) {
                translateX = 465;
              }

              if (position === -3) {
                translateX = -625;
              }

              if (position === 3) {
                translateX = 625;
              }

              /*
               * Depth
               */

              const translateZ =
                isCenter
                  ? 120
                  : Math.max(
                      0,
                      50 -
                        Math.abs(position) *
                          25
                    );

              /*
               * Scale
               */

              const scale =
                isCenter
                  ? 1
                  : position === -1 ||
                    position === 1
                  ? 0.78
                  : position === -2 ||
                    position === 2
                  ? 0.58
                  : 0.45;

              /*
               * Rotation
               */

              let rotateY = 0;

              if (position < 0) {
                rotateY =
                  position === -1
                    ? 22
                    : position === -2
                    ? 32
                    : 40;
              }

              if (position > 0) {
                rotateY =
                  position === 1
                    ? -22
                    : position === 2
                    ? -32
                    : -40;
              }

              /*
               * Vertical curve
               */

              const translateY =
                isCenter
                  ? 0
                  : Math.min(
                      45,
                      Math.abs(position) *
                        20
                    );

              /*
               * Opacity
               */

              const opacity =
                Math.abs(position) >= 3
                  ? 0.32
                  : Math.abs(position) === 2
                  ? 0.65
                  : 1;

              return (
                <article
                  key={hero.number}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(index);
                    }
                  }}
                  className={`
                    absolute
                    left-1/2
                    top-1/2
                    h-[390px]
                    w-[245px]
                    cursor-pointer
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-[#101010]
                    shadow-[0_30px_80px_rgba(0,0,0,0.7)]

                    sm:h-[460px]
                    sm:w-[290px]
                    sm:rounded-[32px]

                    lg:h-[520px]
                    lg:w-[330px]
                    lg:rounded-[36px]

                    transform-gpu
                    transition-all
                    duration-[1100ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]

                    ${
                      isVisible
                        ? "opacity-100"
                        : "translate-y-20 opacity-0"
                    }

                    ${
                      isCenter
                        ? "z-20"
                        : position === -1 ||
                          position === 1
                        ? "z-10"
                        : "z-0"
                    }

                    ${
                      isCenter
                        ? "hover:scale-[1.025]"
                        : ""
                    }
                  `}
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      translateX(${translateX}px)
                      translateY(${translateY}px)
                      translateZ(${translateZ}px)
                      rotateY(${rotateY}deg)
                      scale(${scale})
                    `,
                    opacity:
                      isVisible
                        ? opacity
                        : 0,
                    transitionDelay: `${
                      Math.abs(position) *
                      60
                    }ms`,
                  }}
                >
                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <img
                    src={hero.image}
                    alt={hero.title}
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
                      ease-out

                      hover:scale-[1.06]
                    "
                  />

                  {/* =================================================
                      CINEMATIC OVERLAY
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/15
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-[65%]
                      bg-gradient-to-t
                      from-black
                      via-black/65
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-x-0
                      top-0
                      h-[30%]
                      bg-gradient-to-b
                      from-black/45
                      to-transparent
                    "
                  />

                  {/* =================================================
                      CARD NUMBER
                  ================================================== */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
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
                        w-7
                        bg-[#d93232]
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        font-medium
                        tracking-[0.18em]
                        text-white/80
                      "
                    >
                      {hero.number}
                    </span>
                  </div>

                  {/* =================================================
                      CARD CONTENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      p-6
                      sm:p-7
                    "
                  >
                    <h3
                      className="
                        text-[clamp(24px,3vw,42px)]
                        font-black
                        uppercase
                        leading-[0.88]
                        tracking-[-0.045em]
                        text-white
                        drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]
                      "
                    >
                      {hero.title}
                    </h3>

                    {hero.description && (
                      <p
                        className="
                          mt-3
                          text-[8px]
                          uppercase
                          leading-[1.6]
                          tracking-[0.08em]
                          text-white/60
                          sm:text-[9px]
                        "
                      >
                        {hero.description}
                      </p>
                    )}

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        gap-3
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
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-[#d93232]
                        "
                      >
                        ASTRR
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      CENTER CARD RED EDGE
                  ================================================== */}

                  {isCenter && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[28px]
                        border
                        border-[#d93232]/50
                        sm:rounded-[32px]
                        lg:rounded-[36px]
                      "
                    />
                  )}
                </article>
              );
            }
          )}
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <div
        className={`
          relative
          z-30
          mt-2
          flex
          items-center
          justify-center
          gap-5

          transition-all
          duration-1000

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
          onClick={movePrevious}
          aria-label="Previous hero"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            text-white/70
            transition-all
            duration-300
            hover:border-[#d93232]
            hover:bg-[#d93232]
            hover:text-white
          "
        >
          ←
        </button>

        {/* INDICATORS */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          {heroes.map(
            (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show hero ${
                  index + 1
                }`}
                onClick={() =>
                  setActiveIndex(index)
                }
                className={`
                  h-[2px]
                  transition-all
                  duration-500

                  ${
                    index === activeIndex
                      ? "w-8 bg-[#d93232]"
                      : "w-3 bg-white/20"
                  }
                `}
              />
            )
          )}
        </div>

        {/* NEXT */}

        <button
          type="button"
          onClick={moveNext}
          aria-label="Next hero"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            text-white/70
            transition-all
            duration-300
            hover:border-[#d93232]
            hover:bg-[#d93232]
            hover:text-white
          "
        >
          →
        </button>
      </div>

      {/* =====================================================
          FOOTER LABEL
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mt-8
          text-center
        "
      >
        <p
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-white/25
          "
        >
          DRAG / CLICK TO EXPLORE
        </p>
      </div>
    </section>
  );
}

export default HeroesWeServe;