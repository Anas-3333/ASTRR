import React from "react";

function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-8
          pb-8
          pt-14

          sm:px-10
          sm:pt-16

          lg:px-[4.4%]
          lg:pb-9
          lg:pt-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12

            sm:grid-cols-2
            sm:gap-14

            lg:grid-cols-[1.55fr_0.9fr_1fr]
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT — CONTACT INFORMATION
          ================================================== */}

          <div
            className="
              flex
              flex-col
              gap-5
            "
          >
            {/* Phone */}

            <a
              href="tel:+919616242222"
              className="
                w-fit
                text-[14px]
                font-semibold
                leading-none
                text-white
                transition-colors
                duration-300
                hover:text-[#d93232]
              "
            >
              +91-961-6242222
            </a>

            {/* Email */}

            <a
              href="mailto:info@aligtannery.com"
              className="
                w-fit
                text-[14px]
                font-semibold
                leading-none
                text-white
                transition-colors
                duration-300
                hover:text-[#d93232]
              "
            >
              info@aligtannery.com
            </a>

            {/* Address */}

            <p
              className="
                max-w-[470px]
                text-[14px]
                font-semibold
                leading-6
                text-white
              "
            >
              150 Feet Road, Jajmau, Kanpur - 208010,
              U.P. INDIA
            </p>
          </div>

          {/* =================================================
              CENTER — QUICK LINKS
          ================================================== */}

          <div>
            <h2
              className="
                mb-5
                text-[34px]
                font-medium
                leading-none
                tracking-[-0.035em]
                text-white

                sm:text-[38px]

                lg:text-[40px]
              "
            >
              Quick Links
            </h2>

            <nav
              className="
                flex
                flex-col
                gap-1
              "
              aria-label="Footer navigation"
            >
              <a
                href="/"
                className="
                  w-fit
                  text-[15px]
                  font-semibold
                  leading-5
                  text-white
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#d93232]
                "
              >
                Home
              </a>

              <a
                href="#safety-shoes"
                className="
                  w-fit
                  text-[15px]
                  font-semibold
                  leading-5
                  text-white
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#d93232]
                "
              >
                Army Shoes
              </a>

              <a
                href="#production"
                className="
                  w-fit
                  text-[15px]
                  font-semibold
                  leading-5
                  text-white
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#d93232]
                "
              >
                Production
              </a>

              <a
                href="#contact"
                className="
                  w-fit
                  text-[15px]
                  font-semibold
                  leading-5
                  text-white
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#d93232]
                "
              >
                Contact
              </a>
            </nav>
          </div>

          {/* =================================================
              RIGHT — CONNECT
          ================================================== */}

          <div>
            <h2
              className="
                mb-6
                text-[34px]
                font-medium
                leading-none
                tracking-[-0.035em]
                text-white

                sm:text-[38px]

                lg:text-[40px]
              "
            >
              Connect
            </h2>

            {/* ================= SOCIAL ICONS ================= */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-7
              "
            >
              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="
                  text-white/25
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#d93232]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.66.34-1 1-1z" />
                </svg>
              </a>

              {/* Twitter / X */}

              <a
                href="#"
                aria-label="Twitter"
                className="
                  text-white/25
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#d93232]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  text-white/25
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#d93232]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
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
                  text-white/25
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#d93232]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4zM3.3 9h3.8v11.7H3.3V9zm6.2 0h3.6v1.6h.1c.5-.9 1.7-2 3.7-2 4 0 4.7 2.6 4.7 6v6.1h-3.8v-5.4c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.5H9.5V9z" />
                </svg>
              </a>
            </div>

            {/* ================= DESCRIPTION ================= */}

            <p
              className="
                max-w-[330px]
                text-[13px]
                font-medium
                leading-[1.65]
                text-white
              "
            >
              We bring the years, global experience,
              and stamina to guide our clients through
              new and often disruptive realities.
            </p>

            {/* ================= LOGO ================= */}

            <div
              className="
                mt-10
                flex
                justify-start
              "
            >
              <img
                src="https://astrr.co/img/army-shoes/astrr-logo-nav.webp"
                alt="ASTRR"
                className="
                  h-auto
                  w-[150px]
                  object-contain
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div
        className="
          flex
          w-full
          justify-center
          px-6
          pb-5
          pt-5
        "
      >
        <p
          className="
            text-center
            text-[12px]
            font-normal
            tracking-[0.01em]
            text-white/45
          "
        >
          Copyright © 2026 ASTRR. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;