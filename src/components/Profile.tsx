import { useEffect, useRef, useState } from "react";

function Profile() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="profile"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        px-6
        py-16
        sm:px-10
        sm:py-20
        md:px-12
        lg:px-[7%]
        lg:py-24
        xl:px-[8%]
      "
    >
      {/* =====================================================
          FULL-WIDTH BACKGROUND VIDEO
      ====================================================== */}

      <video
        src="/videos/about_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          opacity-90
        "
      />

      {/* =====================================================
          CINEMATIC DARK OVERLAY
          Reduced from 70% so video is more visible.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/45
        "
      />

      {/* =====================================================
          SUBTLE SIDE GRADIENT
          Lighter than before so the manufacturing video
          remains visible.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black/65
          via-black/35
          to-black/20
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1400px]
          grid-cols-1
          items-center
          gap-12
          lg:grid-cols-[1fr_0.85fr]
          lg:gap-16
          xl:gap-20
        "
      >
        {/* =================================================
            LEFT — TEXT
        ================================================== */}

        <div className="flex flex-col">

          {/* ================= MAIN HEADING ================= */}

          <div
            className={`
              transform
              transition-all
              duration-[1000ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }
            `}
          >
            <h2
              className="
                text-4xl
                font-bold
                leading-tight
                tracking-[-0.03em]
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Welcome to{" "}
              <span className="text-[#ff1738]">
                ASTRR
              </span>
            </h2>
          </div>

          {/* ================= SUB HEADING ================= */}

          <div
            className={`
              transform
              transition-all
              delay-150
              duration-[1100ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }
            `}
          >
            <h3
              className="
                mt-4
                text-xl
                font-medium
                leading-snug
                text-[#bcbcbc]
                sm:text-2xl
              "
            >
              Exporting to 18 Countries in 3
              continents.
            </h3>
          </div>

          {/* =================================================
              DESCRIPTION
              MAIN SLIDE-LEFT ANIMATION
          ================================================== */}

          <div
            className={`
              transform
              transition-all
              delay-300
              duration-[1400ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-28 opacity-0"
              }
            `}
          >
            <p
              className="
                mt-8
                max-w-[650px]
                text-[15px]
                leading-[1.75]
                text-[#b0b0b0]
                sm:text-base
              "
            >
              3 Decade of devotion to Customer
              Service and satisfaction, ASTRR
              welcomes you to an enterprise born
              out of principal and social
              responsibility. Generations of passion
              into leather manufacturing. ASTRR has
              built its reputation as one of the most
              innovative and creative Shoe Maker of
              the industry, delivering products for
              the Moments.
            </p>
          </div>

          {/* ================= RAW TO FINISHED ================= */}

          <div
            className={`
              transform
              transition-all
              delay-[500ms]
              duration-[1200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }
            `}
          >
            <div className="mt-10 sm:mt-12">

              <h3
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  text-[#ff3150]
                  sm:text-3xl
                "
              >
                Raw To Finished Shoe
              </h3>

              <p
                className="
                  mt-3
                  max-w-[650px]
                  text-base
                  font-semibold
                  leading-7
                  text-white
                  sm:text-lg
                "
              >
                50% to 70% vertically integrated
                company producing Inhouse material
                from raw hide to finished leather shoe.
              </p>

            </div>
          </div>

        </div>

        {/* =================================================
            RIGHT — BACKGROUND-LESS INTEGRATION IMAGE
        ================================================== */}

        <div
          className={`
            flex
            w-full
            items-center
            justify-center
            lg:justify-end
            transform
            transition-all
            delay-200
            duration-[1300ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }
          `}
        >
          <img
            src="/images/bg1-removed.png"
            alt="ASTRR vertically integrated shoe manufacturing process"
            draggable={false}
            loading="lazy"
            decoding="async"
            className="
              block
              h-auto
              w-full
              max-w-[440px]
              object-contain
              sm:max-w-[480px]
              md:max-w-[520px]
              lg:max-w-[500px]
              xl:max-w-[540px]
            "
          />
        </div>
      </div>

      {/* =====================================================
          MOBILE VIDEO TREATMENT
      ====================================================== */}

      <style>
        {`
          @media (max-width: 1023px) {
            #profile > video {
              opacity: 0.60;
            }
          }

          @media (max-width: 640px) {
            #profile > video {
              opacity: 0.48;
              object-position: center;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            #profile *,
            #profile *::before,
            #profile *::after {
              transition-duration: 0.01ms !important;
              animation-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Profile;