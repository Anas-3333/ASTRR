import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

/* =========================================================
   SHARED PRODUCT TYPE
========================================================= */
export interface Product {
  number: string;
  title: string;
  cardImage: string;
  desktopCardImage?: string;
  quickViewImage: string;
  catalogImage?: string;
  description: string;
  featured?: boolean;
  galleryImages?: string[]; // Array of gallery images
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
  const [activeImage, setActiveImage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById("contact") || document.getElementById("contact-form");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  /* =======================================================
     ESC KEY
  ======================================================== */
  useEffect(() => {
    if (!product) {
      document.body.style.overflow = "";
      return;
    }
    
    document.body.style.overflow = "hidden";
    setActiveImage(0); // reset image index on new product
    
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

  // Fallback gallery images if none provided (4 same images for now)
  const gallery = product.galleryImages || [
    product.quickViewImage,
    product.quickViewImage,
    product.quickViewImage,
    product.quickViewImage,
  ];

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
          bg-black/90
          backdrop-blur-md
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
          max-h-[95vh]
          w-full
          max-w-[1280px]
          flex-col
          overflow-y-auto
          overflow-x-hidden
          bg-[#0a0a0a]
          border
          border-white/10
          rounded-xl
          animate-[modalIn_0.4s_ease-out]
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
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

        {/* BRAND BADGE (Top Right styling) */}
        <div className="absolute right-20 top-0 hidden lg:flex z-50 origin-top scale-[0.85]">
          <div className="relative">
            <svg width="70" height="90" viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#d93232] drop-shadow-lg">
              <path d="M0 0H70V60.5L35 90L0 60.5V0Z" fill="currentColor" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center pt-5">
              <span className="text-[10px] font-bold uppercase text-white/90">ASTRR</span>
              <span className="text-[8px] font-medium uppercase text-white/60">APPROVED</span>
              <ShieldCheck className="mt-2 h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* =================================================
            TOP SECTION: Hero & Features (UPDATED)
        ================================================== */}
        <div className={`flex flex-col lg:relative ${product.catalogImage ? "lg:h-[580px] xl:h-[620px]" : "lg:h-[550px]"} w-full shrink-0`}>
          {/* LEFT SIDE CONTENT: Heading + Catalog visible size image below it */}
          <div className="order-1 lg:order-none lg:absolute lg:left-10 xl:left-12 lg:top-8 lg:bottom-6 lg:w-[48%] xl:w-[46%] z-30 flex flex-col justify-start p-6 pb-2 lg:p-0 pointer-events-none">
            {/* HEADING */}
            <div className="shrink-0 pointer-events-auto">
              <h4 className="text-[13px] font-bold text-[#d93232] tracking-wider uppercase mb-1.5 drop-shadow-md">
                ENGINEERED GEAR
              </h4>
              <h2 className="text-[32px] sm:text-[36px] lg:text-[34px] xl:text-[40px] leading-[0.94] font-black text-white uppercase tracking-[-0.04em] mb-2.5 whitespace-pre-line drop-shadow-lg">
                {product.title}
              </h2>
              <p className="text-[11px] sm:text-[12px] font-medium text-white/60 uppercase tracking-widest drop-shadow-md">
                LIGHT ON WEIGHT.<br className="hidden sm:inline lg:hidden xl:inline"/> HEAVY ON PERFORMANCE.
              </p>
            </div>

            {/* CATALOG VISIBLE SIZE IMAGE (Clearly below heading) */}
            {product.catalogImage && (
              <div className="mt-4 sm:mt-5 lg:mt-3 xl:mt-4 flex-1 flex items-center justify-center lg:justify-start">
                <img
                  src={product.catalogImage}
                  alt={`${product.title.replace("\n", " ")} Catalog`}
                  className="w-auto max-w-full max-h-[260px] sm:max-h-[320px] lg:max-h-[360px] xl:max-h-[400px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] filter transition-all duration-300"
                />
              </div>
            )}
          </div>

          {/* BACKGROUND / PRODUCT QUICKVIEW IMAGE (Desktop: right side visible image; Mobile: below catalog) */}
          <div className={`relative ${product.catalogImage ? "order-2" : "order-2"} lg:order-none lg:absolute lg:inset-0 w-full h-[250px] sm:h-[350px] lg:h-full z-10 lg:rounded-t-xl overflow-hidden bg-black flex items-center justify-center border-t lg:border-t-0 border-white/5`}>
            <img 
              src={gallery[activeImage]} 
              alt={product.title.replace("\n", " ")} 
              draggable={false}
              className="w-full h-full object-contain lg:object-cover object-center lg:object-right transition-all duration-300"
            />
            {/* Gradient overlay for contrast behind left-side text and catalog on desktop */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black via-black/85 via-50% to-transparent pointer-events-none" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent pointer-events-none h-36" />
          </div>
        </div>

        {/* =================================================
            MIDDLE BAR: Horizontal Specs
        ================================================== */}
        <div className="mx-8 lg:mx-12 border-y border-white/10 py-5 shrink-0">
          <div className="flex flex-wrap justify-between gap-4">
            <SpecItem title="LIGHTWEIGHT FEEL" />
            <div className="hidden w-px bg-white/10 md:block" />
            <SpecItem title="ALL DAY COMFORT" />
            <div className="hidden w-px bg-white/10 md:block" />
            <SpecItem title="PREMIUM QUALITY" />
            <div className="hidden w-px bg-white/10 md:block" />
            <SpecItem title="TRENDY & STYLISH" />
          </div>
        </div>

        {/* =================================================
            BOTTOM SECTION: Gallery
        ================================================== */}
        <div className="p-8 lg:px-12 flex flex-col gap-8 pb-10 shrink-0">
          <div className="relative group">
            {/* Left Navigation */}
            <button
              onClick={() => scrollGallery('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 lg:-translate-x-5 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-[#d93232] transition-colors sm:group-hover:flex border border-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Navigation */}
            <button
              onClick={() => scrollGallery('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 lg:translate-x-5 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-[#d93232] transition-colors sm:group-hover:flex border border-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div 
              ref={scrollRef}
              className="flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`shrink-0 snap-start w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(25%-1.125rem)] min-w-[200px] relative flex cursor-pointer flex-col items-center justify-center rounded-lg border p-4 transition-all duration-300 ${
                    activeImage === idx 
                      ? 'border-[#d93232] bg-[#d93232]/5' 
                      : 'border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img 
                    src={img} 
                    alt={`${product.title.replace("\n", " ")} view ${idx + 1}`} 
                    className="h-32 lg:h-40 w-full object-contain mix-blend-screen" 
                  />
                  <div className="mt-4 text-[10px] font-bold text-white/50 uppercase tracking-widest text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    {idx === 0 ? "SIDE VIEW" : idx === 1 ? "BACK VIEW" : idx === 2 ? "FRONT VIEW" : idx === 3 ? "SOLE VIEW" : `VIEW ${String(idx + 1).padStart(2, '0')}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={handleContactClick}
              className="group inline-flex items-center justify-center gap-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-white/70 hover:text-white uppercase transition-colors cursor-pointer py-1.5 px-4 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
            >
              <span>CONTACT US FOR MORE DESIGNS</span>
              <span className="inline-flex items-center text-[#d93232] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4 animate-slide-right group-hover:translate-x-1.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>

      </div>
      
      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.96) translateY(12px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes slideRight {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(6px);
            }
          }
          .animate-slide-right {
            animation: slideRight 1.4s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}



function SpecItem({ title }: { title: string }) {
  return (
    <div className="flex flex-1 items-center justify-center gap-3">
      <Star className="h-4 w-4 text-white/50" />
      <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">{title}</span>
    </div>
  );
}

export default ProductQuickView;
