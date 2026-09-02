function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      <video
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/videos/HeroVideo.mp4"
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          CINEMATIC OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/25
        "
      />

      {/* Left dark gradient */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          w-full
          bg-gradient-to-r
          from-black/80
          via-black/35
          to-transparent
        "
      />

      {/* Bottom cinematic gradient */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[35%]
          bg-gradient-to-t
          from-black/80
          to-transparent
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-10
          flex
          items-center
        "
      >
        <div
          className="
            ml-[7%]
            max-w-[650px]
            text-white
          "
        >
          {/* SMALL LABEL */}

          <p
            className="
              hero-slide-right
              mb-5
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-white/60
              sm:text-[10px]
            "
          >
            ASTRR.CO
          </p>

          {/* MAIN HEADLINE */}

          <h1
            className="
              hero-slide-right
              text-[52px]
              font-black
              uppercase
              leading-[0.88]
              tracking-[-0.05em]
              sm:text-[68px]
              md:text-[82px]
              lg:text-[96px]
            "
            style={{
              animationDelay: "150ms",
            }}
          >
            BUILT
            <br />

            <span className="text-[#d93232]">
              FOR THE
            </span>

            <br />

            MISSION.
          </h1>

          {/* SUPPORTING LINE */}

          <p
            className="
              hero-slide-right
              mt-6
              max-w-[470px]
              text-[10px]
              font-medium
              uppercase
              leading-5
              tracking-[0.18em]
              text-white/65
              sm:text-xs
              sm:leading-6
            "
            style={{
              animationDelay: "300ms",
            }}
          >
            ENGINEERED FOOTWEAR FOR THOSE WHO
            <br className="hidden sm:block" />
            OPERATE WHERE PERFORMANCE MATTERS MOST.
          </p>

          {/* =================================================
              CTA
          ================================================== */}

          <div
            className="
              hero-slide-right
              mt-8
            "
            style={{
              animationDelay: "450ms",
            }}
          >
            <button
              type="button"
              onClick={scrollToContact}
              className="
                group
                inline-flex
                cursor-pointer
                items-center
                gap-4
                border
                border-white/25
                bg-black/20
                px-7
                py-4
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#d93232]
                hover:bg-[#d93232]
              "
            >
              <span>
                CONTACT ASTRR
              </span>

              <span
                className="
                  text-[#d93232]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-white
                "
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LABEL
      ====================================================== */}

      <div
        className="
          absolute
          bottom-7
          right-7
          z-10
          hidden
          sm:block
        "
      >
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-white/40
          "
        >
          ENGINEERED FOR THOSE WHO SERVE
        </p>
      </div>

      {/* =====================================================
          SLIDE RIGHT ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes heroSlideRight {
          0% {
            opacity: 0;
            transform: translateX(80px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-slide-right {
          opacity: 0;
          animation: heroSlideRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}

export default Hero;