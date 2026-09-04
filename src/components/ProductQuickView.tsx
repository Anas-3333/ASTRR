import { useEffect } from "react";

/* =========================================================
   SHARED PRODUCT TYPE
========================================================= */
export interface Product {
  number: string;
  title: string;
  cardImage: string;
  desktopCardImage?: string;
  quickViewImage: string;
  description: string;
  featured?: boolean;
}

/* =========================================================
   PROPS
========================================================= */
type ProductQuickViewProps = {
  product: Product | null;
  onClose: () => void;
};

/* =========================================================
   COMPONENT
========================================================= */
function ProductQuickView({
  product,
  onClose,
}: ProductQuickViewProps) {
  /* =======================================================
     ESC KEY
  ======================================================== */
  useEffect(() => {
    if (!product) {
      document.body.style.overflow = "";
      return;
    }
    
    document.body.style.overflow = "hidden";
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    window.addEventListener("keydown", handleEsc);
    
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        px-4
        py-8
        sm:p-8
        lg:p-12
        animate-[fadeIn_0.3s_ease-out]
      "
    >
      {/* BACKDROP */}
      <div
        className="
          absolute
          inset-0
          bg-black/80
          backdrop-blur-sm
        "
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          max-w-[1200px]
          flex-col
          overflow-hidden
          bg-[#0a0a0a]
          border
          border-white/10
          animate-[modalIn_0.4s_ease-out]
          lg:flex-row
        "
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/5
            text-white/60
            backdrop-blur-md
            transition-colors
            hover:bg-[#d93232]
            hover:text-white
          "
        >
          ✕
        </button>

        {/* =================================================
            IMAGE CONTAINER
        ================================================== */}
        <div
          className="
            relative
            flex
            w-full
            shrink-0
            items-center
            justify-center
            bg-[#111111]
            lg:w-[58%]
          "
        >
          {/* GLOW BACKGROUND */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              h-[55%]
              w-[65%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#d93232]/10
              blur-[100px]
            "
          />
          
          {/* TOP LINE */}
          <div
            className="
              absolute
              left-8
              right-8
              top-8
              h-px
              bg-gradient-to-r
              from-[#d93232]
              via-white/10
              to-transparent
              opacity-70
              sm:left-10
              sm:right-10
            "
          />
          
          {/* PRODUCT IMAGE */}
          <img
            src={product.quickViewImage}
            alt={product.title.replace(
              "\n",
              " "
            )}
            draggable={false}
            decoding="async"
            className="
              relative
              z-10
              h-full
              max-h-[580px]
              w-full
              object-contain
              p-8
              transition-transform
              duration-700
              hover:scale-[1.025]
              sm:p-10
              lg:p-12
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
          
          {/* RED DOT */}
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
            INFORMATION
        ================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            justify-center
            overflow-y-auto
            px-6
            py-8
            sm:px-9
            lg:w-[42%]
            lg:px-10
            lg:py-10
          "
        >
          {/* LABEL */}
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
          
          {/* TITLE */}
          <h2
            className="
              whitespace-pre-line
              text-[38px]
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
          
          {/* ACCENT */}
          <div
            className="
              mt-6
              h-[2px]
              w-14
              bg-[#d93232]
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
            Engineered for demanding
            environments, ASTRR tactical
            footwear combines durability,
            advanced grip and all-day
            performance.
          </p>
          
          {/* =================================================
              FEATURES
          ================================================== */}
          <div
            className="
              mt-7
              grid
              grid-cols-2
              gap-x-6
              gap-y-6
            "
          >
            <Feature
              title="Extreme"
              subtitle="Durability"
            />
            <Feature
              title="Advanced"
              subtitle="Grip"
            />
            <Feature
              title="Ergonomic"
              subtitle="Comfort"
            />
            <Feature
              title="Mission"
              subtitle="Ready"
            />
          </div>
          
          {/* CATEGORY */}
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
              ACTIONS
          ================================================== */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
            "
          >
            <button
              type="button"
              className="
                w-full
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
              Explore Product →
            </button>
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
          ANIMATION
      ====================================================== */}
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
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </div>
  );
}

/* =========================================================
   FEATURE
========================================================= */
type FeatureProps = {
  title: string;
  subtitle: string;
};

function Feature({
  title,
  subtitle,
}: FeatureProps) {
  return (
    <div
      className="
        flex
        items-start
        gap-3
      "
    >
      <span
        className="
          mt-0.5
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
          {title}
        </p>
        <p
          className="
            text-[10px]
            uppercase
            text-white/35
          "
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default ProductQuickView;
