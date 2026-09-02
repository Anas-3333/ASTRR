function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="w-full bg-black text-white">
      {/* =====================================================
          FOOTER CONTENT
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1365px] px-[60px] pt-[62px] pb-[35px]">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-[1fr_1fr_1fr]
            gap-y-12
            md:gap-y-0
          "
        >
          {/* =================================================
              LEFT — CONTACT DETAILS
          ================================================== */}

          <div className="flex flex-col">
            <a
              href="tel:+919616242222"
              className="
                w-fit
                text-[14px]
                font-medium
                leading-[1.6]
                text-white
                transition-opacity
                duration-200
                hover:opacity-70
              "
            >
              +91-961-6242222
            </a>

            <a
              href="mailto:info@aligtannery.com"
              className="
                mt-[17px]
                w-fit
                text-[14px]
                font-medium
                leading-[1.6]
                text-white
                transition-opacity
                duration-200
                hover:opacity-70
              "
            >
              info@aligtannery.com
            </a>

            <p
              className="
                mt-[17px]
                max-w-[430px]
                text-[14px]
                font-medium
                leading-[1.6]
                text-white
              "
            >
              150 Feet Road, Jajmau, Kanpur – 208010, U.P. INDIA
            </p>
          </div>

          {/* =================================================
              CENTER — QUICK LINKS
          ================================================== */}

          <div className="md:pl-[72px]">
            <h3
              className="
                text-[34px]
                font-semibold
                leading-none
                tracking-[-0.04em]
                text-white
              "
            >
              Quick Links
            </h3>

            <nav className="mt-[25px] flex flex-col gap-[5px]">
              <button
                type="button"
                onClick={() => scrollToSection("hero")}
                className="
                  w-fit
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  text-[15px]
                  font-medium
                  leading-[1.25]
                  text-white
                  transition-opacity
                  duration-200
                  hover:opacity-60
                "
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("safetyshoes")}
                className="
                  w-fit
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  text-[15px]
                  font-medium
                  leading-[1.25]
                  text-white
                  transition-opacity
                  duration-200
                  hover:opacity-60
                "
              >
                Army Shoes
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("production")}
                className="
                  w-fit
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  text-[15px]
                  font-medium
                  leading-[1.25]
                  text-white
                  transition-opacity
                  duration-200
                  hover:opacity-60
                "
              >
                Production
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="
                  w-fit
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  text-[15px]
                  font-medium
                  leading-[1.25]
                  text-white
                  transition-opacity
                  duration-200
                  hover:opacity-60
                "
              >
                Contact
              </button>
            </nav>
          </div>

          {/* =================================================
              RIGHT — CONNECT
          ================================================== */}

          <div className="md:pl-[45px]">
            <h3
              className="
                text-[34px]
                font-semibold
                leading-none
                tracking-[-0.04em]
                text-white
              "
            >
              Connect
            </h3>

            {/* SOCIAL ICONS */}

            <div className="mt-[28px] flex items-center gap-[27px]">
              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-[22px]
                  w-[22px]
                  items-center
                  justify-center
                  text-[#3d3d3d]
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.66.34-1 1-1z" />
                </svg>
              </a>

              {/* Twitter / X */}

              <a
                href="#"
                aria-label="Twitter"
                className="
                  flex
                  h-[22px]
                  w-[22px]
                  items-center
                  justify-center
                  text-[#3d3d3d]
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[21px] w-[21px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.28 4H6.42l11.38 15.9Z" />
                </svg>
              </a>

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-[22px]
                  w-[22px]
                  items-center
                  justify-center
                  text-[#3d3d3d]
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[21px] w-[21px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-[22px]
                  w-[22px]
                  items-center
                  justify-center
                  text-[#3d3d3d]
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[21px] w-[21px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.2 7H1.5V22h3.7V7ZM3.35 2C2.1 2 1 3.02 1 4.27s1.1 2.27 2.35 2.27S5.7 5.52 5.7 4.27 4.6 2 3.35 2ZM22.5 13.4c0-4.52-2.41-6.63-5.63-6.63-2.6 0-3.77 1.43-4.42 2.43V7H8.75v15h3.7v-7.42c0-1.96.37-3.86 2.8-3.86 2.4 0 2.43 2.25 2.43 3.99V22h3.7l.02-8.6Z" />
                </svg>
              </a>
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-[22px]
                max-w-[315px]
                text-[13px]
                font-medium
                leading-[1.8]
                text-white
              "
            >
              We bring the years, global experience,
              <br />
              and stamina to guide our clients through new and
              <br className="hidden xl:block" />
              often disruptive realities.
            </p>

            {/* LOGO */}

            <div className="mt-[47px]">
              <img
                src="https://astrr.co/img/army-shoes/astrr-logo-nav.webp"
                alt="ASTRR"
                className="
                  h-auto
                  w-[155px]
                  object-contain
                "
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =================================================
            COPYRIGHT
        ================================================== */}

        <div className="mt-[28px] flex justify-center">
          <p
            className="
              text-center
              text-[13px]
              font-normal
              leading-none
              text-[#777777]
            "
          >
            Copyright © 2026 ASTRR. All rights reserved
          </p>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE ADJUSTMENTS
      ====================================================== */}

      <style>
        {`
          @media (max-width: 767px) {
            footer > div:first-of-type {
              padding-left: 24px;
              padding-right: 24px;
              padding-top: 45px;
              padding-bottom: 30px;
            }
          }

          @media (min-width: 768px) and (max-width: 1100px) {
            footer > div:first-of-type {
              padding-left: 35px;
              padding-right: 35px;
            }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;