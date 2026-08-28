import { useEffect } from "react";
import type { Product } from "./SafetyShoes";


type ProductQuickViewProps = {
  product: Product | null;
  onClose: () => void;
};


function ProductQuickView({
  product,
  onClose,
}: ProductQuickViewProps) {


  /* =========================================================
     ESC KEY
  ========================================================= */

  useEffect(() => {

    if (!product) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {

      if (event.key === "Escape") {
        onClose();
      }

    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, [product, onClose]);


  /* =========================================================
     LOCK PAGE SCROLL
  ========================================================= */

  useEffect(() => {

    if (!product) {
      return;
    }

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };

  }, [product]);


  /* =========================================================
     DON'T RENDER
  ========================================================= */

  if (!product) {
    return null;
  }


  return (

    <div
      className="
        fixed
        inset-0

        z-[9999]

        flex
        items-center
        justify-center

        bg-black/75

        p-3
        sm:p-5
        lg:p-8

        backdrop-blur-[8px]

        animate-[fadeIn_300ms_ease-out]
      "

      onClick={onClose}
    >


      {/* =====================================================
          MODAL
      ===================================================== */}

      <div
        className="
          relative

          flex

          h-auto
          max-h-[92vh]

          w-full
          max-w-[1180px]

          overflow-hidden

          rounded-[18px]

          border
          border-white/10

          bg-[#0c0c0c]

          shadow-[0_0_80px_rgba(0,0,0,0.8)]

          animate-[modalIn_400ms_ease-out]

          max-lg:flex-col
        "

        onClick={(event) =>
          event.stopPropagation()
        }
      >


        {/* =================================================
            RED OUTER GLOW
        ================================================= */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            rounded-[18px]

            ring-1
            ring-inset

            ring-[#d93232]/40
          "
        />


        {/* =================================================
            CLOSE BUTTON
        ================================================= */}

        <button
          type="button"

          aria-label="Close product preview"

          onClick={onClose}

          className="
            absolute

            right-4
            top-4

            z-50

            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-full

            border
            border-white/20

            bg-black/60

            text-2xl
            font-light

            text-white/70

            backdrop-blur-md

            transition-all
            duration-300

            hover:border-[#d93232]
            hover:bg-[#d93232]
            hover:text-white

            sm:right-5
            sm:top-5
          "
        >
          ×
        </button>


        {/* =================================================
            LEFT PRODUCT IMAGE
        ================================================= */}

        <div
          className="
            relative

            flex

            min-h-[330px]

            w-[58%]

            items-center
            justify-center

            overflow-hidden

            bg-[#111]

            max-lg:min-h-[360px]
            max-lg:w-full

            sm:min-h-[420px]
            lg:min-h-[650px]
          "
        >


          {/* BACKGROUND LIGHT */}

          <div
            className="
              pointer-events-none

              absolute
              left-1/2
              top-1/2

              h-[55%]
              w-[65%]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-[#d93232]/10

              blur-[100px]
            "
          />


          {/* TOP RED LINE */}

          <div
            className="
              absolute

              left-10
              right-10
              top-10

              h-[1px]

              bg-gradient-to-r
              from-[#d93232]
              via-white/10
              to-transparent

              opacity-70
            "
          />


          {/* PRODUCT IMAGE */}

          <img
            src={product.image}

            alt={product.title.replace("\n", " ")}

            draggable={false}

            className="
              relative
              z-10

              h-full
              max-h-[580px]

              w-full

              object-contain

              p-8
              sm:p-10
              lg:p-12

              transition-transform
              duration-700

              hover:scale-[1.025]
            "
          />


          {/* PRODUCT NUMBER */}

          <div
            className="
              absolute

              bottom-6
              left-6

              text-[10px]

              font-medium

              uppercase

              tracking-[0.2em]

              text-white/35
            "
          >
            PRODUCT {product.number}
          </div>


          {/* IMAGE DECORATION */}

          <div
            className="
              absolute

              bottom-6
              right-7

              h-2
              w-2

              rounded-full

              bg-[#d93232]

              shadow-[0_0_15px_rgba(217,50,50,0.8)]
            "
          />

        </div>


        {/* =================================================
            RIGHT PRODUCT INFORMATION
        ================================================= */}

        <div
          className="
            flex

            w-[42%]

            flex-col
            justify-center

            overflow-y-auto

            px-7
            py-10

            sm:px-9

            lg:px-10

            max-lg:w-full
            max-lg:px-7
            max-lg:py-8
          "
        >


          {/* SMALL LABEL */}

          <p
            className="
              mb-4

              text-[9px]

              font-medium

              uppercase

              tracking-[0.25em]

              text-white/40
            "
          >
            BUILT FOR THE MISSION
          </p>


          {/* PRODUCT TITLE */}

          <h2
            className="
              whitespace-pre-line

              text-[40px]

              font-black

              uppercase

              leading-[0.84]

              tracking-[-0.045em]

              text-white

              sm:text-[48px]

              lg:text-[56px]
            "
          >
            {product.title}
          </h2>


          {/* RED ACCENT */}

          <div
            className="
              mt-6

              h-[2px]
              w-14

              bg-[#d93232]

              shadow-[0_0_12px_rgba(217,50,50,0.5)]
            "
          />


          {/* DESCRIPTION */}

          <p
            className="
              mt-6

              max-w-[470px]

              text-[13px]

              leading-6

              text-white/55

              sm:text-sm
            "
          >
            Engineered for demanding environments,
            ASTRR tactical footwear combines durability,
            advanced grip and all-day performance.
          </p>


          {/* =================================================
              FEATURES
          ================================================= */}

          <div
            className="
              mt-7

              grid
              grid-cols-2

              gap-x-6
              gap-y-6
            "
          >


            {/* FEATURE 01 */}

            <div
              className="
                flex
                items-start
                gap-3
              "
            >

              <span
                className="
                  text-lg
                  text-white/60
                "
              >
                ◇
              </span>

              <div>

                <p
                  className="
                    text-[11px]

                    font-medium

                    uppercase

                    tracking-wide

                    text-white/85
                  "
                >
                  Extreme
                </p>

                <p
                  className="
                    text-[10px]

                    uppercase

                    text-white/35
                  "
                >
                  Durability
                </p>

              </div>

            </div>


            {/* FEATURE 02 */}

            <div
              className="
                flex
                items-start
                gap-3
              "
            >

              <span
                className="
                  text-lg
                  text-white/60
                "
              >
                ◇
              </span>

              <div>

                <p
                  className="
                    text-[11px]

                    font-medium

                    uppercase

                    tracking-wide

                    text-white/85
                  "
                >
                  Advanced
                </p>

                <p
                  className="
                    text-[10px]

                    uppercase

                    text-white/35
                  "
                >
                  Grip
                </p>

              </div>

            </div>


            {/* FEATURE 03 */}

            <div
              className="
                flex
                items-start
                gap-3
              "
            >

              <span
                className="
                  text-lg
                  text-white/60
                "
              >
                ◇
              </span>

              <div>

                <p
                  className="
                    text-[11px]

                    font-medium

                    uppercase

                    tracking-wide

                    text-white/85
                  "
                >
                  Ergonomic
                </p>

                <p
                  className="
                    text-[10px]

                    uppercase

                    text-white/35
                  "
                >
                  Comfort
                </p>

              </div>

            </div>


            {/* FEATURE 04 */}

            <div
              className="
                flex
                items-start
                gap-3
              "
            >

              <span
                className="
                  text-lg
                  text-white/60
                "
              >
                ◇
              </span>

              <div>

                <p
                  className="
                    text-[11px]

                    font-medium

                    uppercase

                    tracking-wide

                    text-white/85
                  "
                >
                  Mission
                </p>

                <p
                  className="
                    text-[10px]

                    uppercase

                    text-white/35
                  "
                >
                  Ready
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              PRODUCT CATEGORY
          ================================================= */}

          <div
            className="
              mt-7

              border-t
              border-white/10

              pt-5
            "
          >

            <p
              className="
                text-[9px]

                font-medium

                uppercase

                tracking-[0.18em]

                text-white/30
              "
            >
              CATEGORY
            </p>

            <p
              className="
                mt-1

                text-[10px]

                uppercase

                tracking-wide

                text-white/60
              "
            >
              {product.description}
            </p>

          </div>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            className="
              mt-7

              flex
              flex-col

              gap-3
            "
          >


            {/* EXPLORE PRODUCT */}

            <button
              type="button"

              className="
                group/button

                relative

                w-full

                overflow-hidden

                rounded-md

                bg-[#d93232]

                px-6
                py-4

                text-[11px]

                font-semibold

                uppercase

                tracking-[0.08em]

                text-white

                shadow-[0_0_25px_rgba(217,50,50,0.2)]

                transition-all
                duration-300

                hover:bg-[#ef3d3d]

                hover:shadow-[0_0_35px_rgba(217,50,50,0.4)]
              "
            >

              <span
                className="
                  relative
                  z-10
                "
              >
                Explore Product →
              </span>

            </button>


            {/* ENQUIRE */}

            <button
              type="button"

              className="
                w-full

                rounded-md

                border
                border-white/15

                bg-transparent

                px-6
                py-4

                text-[11px]

                font-medium

                uppercase

                tracking-[0.08em]

                text-white/75

                transition-all
                duration-300

                hover:border-white/35

                hover:bg-white/5

                hover:text-white
              "
            >
              Enquire Now
            </button>

          </div>

        </div>

      </div>


      {/* =====================================================
          ANIMATION KEYFRAMES
      ===================================================== */}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          @keyframes modalIn {
            from {
              opacity: 0;
              transform: scale(0.96) translateY(12px);
            }

            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
}


export default ProductQuickView;