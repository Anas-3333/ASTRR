function Contact() {
  const scrollToContactForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white"
    >
      {/* =====================================================
          CONTACT HERO
      ====================================================== */}

      <section
        className="
          relative
          flex
          min-h-[55vh]
          items-center
          justify-center
          overflow-hidden
        "
      >
        {/* Background */}

        <img
          src="/images/back_contact.png"
          alt="ASTRR Contact"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* Dark overlay */}

        <div
          className="
            absolute
            inset-0
            bg-black/70
          "
        />

        {/* Red cinematic glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#d93232]/10
            blur-[120px]
          "
        />

        {/* Hero content */}

        <div
          className="
            relative
            z-10
            px-6
            text-center
          "
        >
          <p
            className="
              mb-5
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/50
            "
          >
            ASTRR.CO
          </p>

          <h1
            className="
              text-5xl
              font-black
              uppercase
              leading-none
              tracking-[-0.05em]

              sm:text-6xl
              md:text-7xl
              lg:text-[88px]
            "
          >
            CONTACT{" "}
            <span className="text-[#d93232]">
              US
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-white/50

              sm:text-xs
            "
          >
            BUILT FOR THE MISSION. READY WHEN IT MATTERS MOST.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION + FORM
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#050505]
          px-5
          py-20

          sm:px-8
          lg:px-12
          lg:py-28
        "
      >
        {/* Background grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-40
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Red glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-150px]
            top-[20%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#d93232]/5
            blur-[130px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1200px]
            gap-16

            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div>
            <p
              className="
                mb-4
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#d93232]
              "
            >
              GET IN TOUCH
            </p>

            <h2
              className="
                text-4xl
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.04em]

                sm:text-5xl
                lg:text-6xl
              "
            >
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-[#d93232]">
                STRONG.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-md
                text-sm
                leading-7
                text-white/50
              "
            >
              Have a requirement, partnership enquiry or
              need more information about ASTRR footwear?
              Our team is ready to connect with you.
            </p>

            {/* =================================================
                CONTACT DETAILS
            ================================================== */}

            <div className="mt-10 space-y-7">
              {/* HEAD OFFICE */}

              <div className="flex gap-5">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-[#d93232]
                  "
                >
                  <span className="text-lg">
                    ◇
                  </span>
                </div>

                <div>
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                    "
                  >
                    HEAD OFFICE
                  </p>

                  <p
                    className="
                      mt-2
                      max-w-xs
                      text-sm
                      leading-6
                      text-white/75
                    "
                  >
                    ASTRR.CO
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div className="flex gap-5">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-[#d93232]
                  "
                >
                  <span className="text-lg">
                    ☎
                  </span>
                </div>

                <div>
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                    "
                  >
                    PHONE
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-white/75
                    "
                  >
                    +91-961-6242222
                  </p>
                </div>
              </div>

              {/* EMAIL */}

              <div className="flex gap-5">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-[#d93232]
                  "
                >
                  <span className="text-lg">
                    @
                  </span>
                </div>

                <div>
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                    "
                  >
                    EMAIL
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-white/75
                    "
                  >
                    info@astrr.co
                  </p>
                </div>
              </div>
            </div>

            {/* Brand line */}

            <div
              className="
                mt-12
                border-t
                border-white/10
                pt-7
              "
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/35
                "
              >
                ENGINEERED FOR THOSE WHO SERVE
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — ENQUIRY FORM
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              border
              border-white/10
              bg-[#0b0b0b]
              p-6

              sm:p-8
              lg:p-10
            "
          >
            {/* Red top line */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-[2px]
                bg-[#d93232]
              "
            />

            <div className="mb-8">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#d93232]
                "
              >
                SEND AN ENQUIRY
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-black
                  uppercase
                  tracking-tight
                "
              >
                YOUR DETAILS
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  text-white/40
                "
              >
                Tell us what you are looking for.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              id="contact-form"
              className="space-y-6"
            >
              {/* NAME + EMAIL */}

              <div
                className="
                  grid
                  gap-6
                  sm:grid-cols-2
                "
              >
                {/* NAME */}

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/40
                    "
                  >
                    NAME *
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="
                      h-12
                      w-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      text-sm
                      text-white
                      outline-none

                      placeholder:text-white/20

                      transition
                      duration-300

                      focus:border-[#d93232]
                      focus:bg-white/[0.05]
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/40
                    "
                  >
                    EMAIL *
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="
                      h-12
                      w-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      text-sm
                      text-white
                      outline-none

                      placeholder:text-white/20

                      transition
                      duration-300

                      focus:border-[#d93232]
                      focus:bg-white/[0.05]
                    "
                  />
                </div>
              </div>

              {/* COMPANY */}

              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                  "
                >
                  COMPANY
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  className="
                    h-12
                    w-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    text-sm
                    text-white
                    outline-none

                    placeholder:text-white/20

                    transition
                    duration-300

                    focus:border-[#d93232]
                    focus:bg-white/[0.05]
                  "
                />
              </div>

              {/* SUBJECT */}

              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                  "
                >
                  SUBJECT *
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="What can we help you with?"
                  required
                  className="
                    h-12
                    w-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    text-sm
                    text-white
                    outline-none

                    placeholder:text-white/20

                    transition
                    duration-300

                    focus:border-[#d93232]
                    focus:bg-white/[0.05]
                  "
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                  "
                >
                  MESSAGE *
                </label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your requirement..."
                  required
                  className="
                    w-full
                    resize-none
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-4
                    text-sm
                    text-white
                    outline-none

                    placeholder:text-white/20

                    transition
                    duration-300

                    focus:border-[#d93232]
                    focus:bg-white/[0.05]
                  "
                />
              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="
                  group
                  relative
                  w-full
                  overflow-hidden
                  bg-[#d93232]
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white

                  transition
                  duration-300

                  hover:bg-[#ef3d3d]
                "
              >
                <span
                  className="
                    relative
                    z-10
                  "
                >
                  SEND ENQUIRY →
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP SECTION
      ====================================================== */}

      <section
        className="
          relative
          bg-black
          py-16

          lg:py-20
        "
      >
        {/* Heading */}

        <div
          className="
            mx-auto
            max-w-[1200px]
            px-5
            pb-8

            sm:px-8
            lg:px-12
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#d93232]
            "
          >
            FIND US
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-black
              uppercase
              tracking-tight

              sm:text-4xl
              lg:text-5xl
            "
          >
            OUR{" "}
            <span className="text-[#d93232]">
              LOCATION
            </span>
          </h2>
        </div>

        {/* MAP */}

        <div
          className="
            relative
            h-[420px]
            w-full
            overflow-hidden
            border-y
            border-white/10

            sm:h-[500px]
          "
        >
          <iframe
            title="ASTRR Location"
            src="https://www.google.com/maps?q=Hasanpur%2C%20Amroha%2C%20Uttar%20Pradesh&output=embed"
            className="
              h-full
              w-full
              border-0
              grayscale
              invert
              opacity-70
            "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Map overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-b
              from-black/20
              via-transparent
              to-black/50
            "
          />
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#090909]
          px-6
          py-24
          text-center
        "
      >
        {/* Red glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[250px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#d93232]/10
            blur-[120px]
          "
        />

        <div className="relative z-10">
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            WHEN IT MATTERS MOST
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-black
              uppercase
              leading-none
              tracking-[-0.04em]

              sm:text-5xl
              md:text-6xl
            "
          >
            READY FOR THE
            <br />
            <span className="text-[#d93232]">
              MISSION?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-lg
              text-xs
              leading-6
              text-white/40
            "
          >
            Connect with ASTRR for footwear engineered
            for demanding environments.
          </p>

          {/* =================================================
              FIXED CONTACT ASTRR BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={scrollToContactForm}
            className="
              group
              relative
              mt-8
              overflow-hidden
              border
              border-[#d93232]
              px-8
              py-4
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white

              transition-all
              duration-500

              hover:bg-[#d93232]
              hover:shadow-[0_0_30px_rgba(217,50,50,0.25)]

              active:scale-95
            "
          >
            <span
              className="
                relative
                z-10
                transition-all
                duration-300
                group-hover:tracking-[0.22em]
              "
            >
              CONTACT ASTRR →
            </span>
          </button>
        </div>
      </section>
    </section>
  );
}

export default Contact;