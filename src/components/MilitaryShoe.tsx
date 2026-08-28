type MilitaryCardProps = {
  number: string;
  title: string;
  image: string;
  description: string;
  featured?: boolean;
};

const militaryShoes = [
  {
    number: "01",
    title: "MILITARY\nFORCES",
    image: "/images/MIL1.png",
    description:
      "FIELD FOOTWEAR | STABILITY • DURABILITY • CONTROL",
  },

  {
    number: "02",
    title: "SECURITY\nFORCES",
    image: "/images/MIL4.png",
    description:
      "TACTICAL FOOTWEAR | PROTECTION • GRIP",
  },

  {
    number: "03",
    title: "OFFICER\nSHOES",
    image: "/images/MIL3.png",
    description:
      "FORMAL FIELD FOOTWEAR | COMFORT • CONTROL",
  },

  {
    number: "04",
    title: "POLICE\nFORCES",
    image: "/images/MIL2.png",
    description:
      "DUTY FOOTWEAR | GRIP • DURABILITY • CONTROL",
  },
];


function MilitaryShoe() {
  return (
    <section
      id="military-shoe"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        px-4
        py-16
        text-white

        sm:px-6
        lg:px-8
        lg:py-24
      "
    >

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#d93232]/5
          blur-[150px]
        "
      />


      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 lg:mb-16">

          <div className="flex items-end justify-between gap-8">

            <div>

              <p
                className="
                  mb-4
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#d93232]
                "
              >
                ASTRR.CO / DEFENCE
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
                MILITARY{" "}
                <span className="text-[#d93232]">
                  SHOE
                </span>
              </h2>


              <p
                className="
                  mt-5
                  max-w-[520px]
                  text-[9px]
                  font-medium
                  uppercase
                  leading-5
                  tracking-[0.15em]
                  text-white/40

                  sm:text-[10px]
                "
              >
                ENGINEERED FOOTWEAR FOR DEMANDING
                <br className="hidden sm:block" />
                DUTY ENVIRONMENTS.
              </p>

            </div>


            {/* SIDE NUMBER */}

            <div className="hidden shrink-0 text-right sm:block">

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                COLLECTION
              </p>

              <p
                className="
                  mt-1
                  text-3xl
                  font-black
                  text-white/10
                "
              >
                04
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            FEATURED MILITARY CARD
        ====================================================== */}

        <div className="mb-[6px]">

          <MilitaryCard
            number={militaryShoes[0].number}
            title={militaryShoes[0].title}
            image={militaryShoes[0].image}
            description={militaryShoes[0].description}
            featured
          />

        </div>


        {/* =====================================================
            SECONDARY GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[6px]

            sm:grid-cols-2
          "
        >

          {militaryShoes.slice(1).map((shoe) => (
            <MilitaryCard
              key={shoe.number}
              number={shoe.number}
              title={shoe.title}
              image={shoe.image}
              description={shoe.description}
            />
          ))}

        </div>


        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}

        <div
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-6
          "
        >

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            MILITARY & DEFENCE FOOTWEAR
          </p>


          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-[#d93232]
            "
          >
            WHEN IT MATTERS MOST
          </p>

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   MILITARY CARD
============================================================ */

function MilitaryCard({
  number,
  title,
  image,
  description,
  featured = false,
}: MilitaryCardProps) {

  return (
    <article
      className={`
        group
        relative
        w-full
        overflow-hidden
        rounded-[3px]
        border-l-[3px]
        border-[#d93232]
        bg-[#111]

        ${
          featured
            ? "h-[420px] sm:h-[480px] lg:h-[520px]"
            : "h-[300px] sm:h-[330px] lg:h-[350px]"
        }

        transition-transform
        duration-500
        ease-out

        hover:-translate-y-[2px]
      `}
    >

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <img
        src={image}
        alt={title.replace("\n", " ")}
        draggable={false}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center

          scale-[1.01]

          transition-transform
          duration-[1000ms]
          ease-out

          group-hover:scale-[1.06]
        "
      />


      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/20
          transition-all
          duration-500
          group-hover:bg-black/5
        "
      />


      {/* =====================================================
          TOP GRADIENT
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[45%]
          bg-gradient-to-b
          from-black/55
          to-transparent
        "
      />


      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[70%]
          bg-gradient-to-t
          from-black
          via-black/75
          to-transparent
        "
      />


      {/* =====================================================
          TOP NUMBER
      ====================================================== */}

      <div
        className="
          absolute
          left-5
          top-5
          z-10
          flex
          items-center
          gap-3
        "
      >

        <span
          className="
            h-[1px]
            w-7
            bg-[#d93232]
          "
        />

        <span
          className="
            text-[9px]
            font-medium
            tracking-[0.2em]
            text-white/60
          "
        >
          {number}
        </span>

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          z-10

          ${
            featured
              ? "p-6 sm:p-8 lg:p-10"
              : "p-5 sm:p-6"
          }
        `}
      >

        <h3
          className={`
            whitespace-pre-line
            font-black
            uppercase
            leading-[0.85]
            tracking-[-0.04em]

            ${
              featured
                ? "text-[42px] sm:text-[52px] lg:text-[64px]"
                : "text-[30px] sm:text-[36px]"
            }
          `}
        >
          {title}
        </h3>


        <div
          className="
            mt-5
            flex
            items-end
            justify-between
            gap-5
          "
        >

          <p
            className="
              max-w-[70%]
              text-[7px]
              font-medium
              uppercase
              leading-[1.5]
              tracking-[0.08em]
              text-white/55

              sm:text-[8px]
            "
          >
            {description}
          </p>


          <button
            type="button"
            className="
              shrink-0
              text-[8px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#d93232]

              transition-all
              duration-300

              group-hover:translate-x-1
            "
          >
            Explore →
          </button>

        </div>

      </div>


      {/* =====================================================
          HOVER BORDER
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          ring-1
          ring-inset
          ring-white/20
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

    </article>
  );
}


export default MilitaryShoe;