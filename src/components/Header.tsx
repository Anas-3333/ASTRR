import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        className={`
          mx-auto
          flex
          items-center
          justify-between
          px-5
          sm:px-7
          lg:px-9

          ${scrolled ? "max-w-[1200px]" : "max-w-none"}
        `}
      >

        {/* =====================================
            LOGO
        ====================================== */}

        <Link
          to="/"
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
        </Link>


        {/* =====================================
            DESKTOP NAVIGATION
        ====================================== */}

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

          <Link
            to="/"
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
          </Link>


          {/* PROFILE */}

          <Link
            to="/Profile"
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
          </Link>


          {/* SAFETY SHOE */}

          <Link
            to="/SafetyShoes"
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
          </Link>


          {/* MILITARY SHOE */}

          <Link
            to="/MilitaryShoe"
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
          </Link>


          {/* PRODUCTION */}

          <Link
            to="/Production"
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
          </Link>


          {/* CONTACT */}

          <Link
            to="/Contact"
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
          </Link>

        </nav>


        {/* =====================================
            MOBILE MENU BUTTON
        ====================================== */}

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