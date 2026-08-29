import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /* =====================================================
      CINEMATIC SECTION SCROLL
  ===================================================== */

  function scrollToSection(id: string) {
    const section = document.getElementById(id);

    if (!section) return;

    const headerOffset = 10;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  }


  return (
    <header
      className={`
        fixed
        left-0
        right-0
        z-50
        transition-all
        duration-500
        ease-out

        ${
          scrolled
            ? `
              top-0
              w-full
              rounded-none
              bg-[#0d0b0b]/95
              backdrop-blur-md
              border-b
              border-white/10
              shadow-lg
              py-2
            `
            : `
              top-4
              mx-auto
              w-[94%]
              max-w-[1200px]
              rounded-[30px]
              bg-black/65
              backdrop-blur-md
              border
              border-white/5
              py-3
            `
        }
      `}
    >

      <div
        className="
          mx-auto
          flex
          items-center
          justify-between
          px-5
          sm:px-7
          lg:px-9
        "
      >

        {/* =====================================================
            LOGO
        ====================================================== */}

        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="
            flex
            shrink-0
            items-center
          "
        >
          <img
            src="https://astrr.co/img/army-shoes/astrr-logo-nav.webp"
            alt="ASTRR"
            className="
              h-[42px]
              w-auto
              object-contain
              sm:h-[46px]
            "
          />
        </button>


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-8
            md:flex
            lg:gap-10
          "
        >

          {/* HOME */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="
              text-[14px]
              font-medium
              text-[#ff1f35]
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Home
          </button>


          {/* PROFILE */}

          <button
            type="button"
            onClick={() => scrollToSection("profile")}
            className="
              text-[14px]
              font-medium
              text-white
              transition-colors
              duration-300
              hover:text-[#ff1f35]
            "
          >
            Profile
          </button>


          {/* SAFETY SHOE */}

          <button
            type="button"
            onClick={() => scrollToSection("safety-shoes")}
            className="
              text-[14px]
              font-medium
              text-white
              transition-colors
              duration-300
              hover:text-[#ff1f35]
            "
          >
            Safety Shoe
          </button>


          {/* MILITARY SHOE */}

          <button
            type="button"
            onClick={() => scrollToSection("military")}
            className="
              text-[14px]
              font-medium
              text-white
              transition-colors
              duration-300
              hover:text-[#ff1f35]
            "
          >
            Military Shoe
          </button>


          {/* PRODUCTION */}

          <button
            type="button"
            onClick={() => scrollToSection("production")}
            className="
              text-[14px]
              font-medium
              text-white
              transition-colors
              duration-300
              hover:text-[#ff1f35]
            "
          >
            Production
          </button>


          {/* CONTACT */}

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="
              text-[14px]
              font-medium
              text-white
              transition-colors
              duration-300
              hover:text-[#ff1f35]
            "
          >
            Contact
          </button>

        </nav>


        {/* =====================================================
            MOBILE BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label="Open menu"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            md:hidden
          "
        >
          <div className="flex flex-col gap-[5px]">

            <span className="block h-[2px] w-5 bg-white" />

            <span className="block h-[2px] w-5 bg-white" />

            <span className="block h-[2px] w-3 bg-white" />

          </div>
        </button>

      </div>

    </header>
  );
}

export default Header;