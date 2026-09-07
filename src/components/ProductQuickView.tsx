import { useEffect, useState } from "react";
import { Feather, Grid3x3, Activity, ShieldCheck, Star } from "lucide-react";

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
            TOP SECTION: Hero & Features
        ================================================== */}
        <div className="flex flex-col lg:flex-row min-h-[450px] shrink-0">
          
          {/* LEFT: Text & List */}
          <div className="flex w-full flex-col justify-center p-8 lg:w-[40%] lg:pl-12 lg:pr-6 pt-16 lg:pt-12">
            <h4 className="text-[14px] font-bold text-[#d93232] tracking-wider uppercase mb-2">
              ENGINEERED GEAR
            </h4>
            <h2 className="text-[42px] leading-[0.9] font-black text-white uppercase tracking-[-0.04em] mb-4 whitespace-pre-line">
              {product.title}
            </h2>
            <p className="text-[13px] font-medium text-white/60 uppercase tracking-widest mb-10">
              LIGHT ON WEIGHT.<br/>HEAVY ON PERFORMANCE.
            </p>

            <div className="flex flex-col gap-8">
              <DetailedFeature 
                icon={<Feather className="h-5 w-5" />} 
                title="ULTRA LIGHTWEIGHT" 
                desc="Designed for all-day comfort & ease." 
              />
              <DetailedFeature 
                icon={<Grid3x3 className="h-5 w-5" />} 
                title="BREATHABLE MESH" 
                desc="Keeps your feet cool and fresh." 
              />
              <DetailedFeature 
                icon={<Activity className="h-5 w-5" />} 
                title="SHOCK ABSORBING SOLE" 
                desc="Superior cushioning with every step." 
              />
              <DetailedFeature 
                icon={<ShieldCheck className="h-5 w-5" />} 
                title="ANTI-SLIP OUTSOLE" 
                desc="Maximum grip for all terrains." 
              />
            </div>
          </div>

          {/* RIGHT: Main Image */}
          <div className="relative flex w-full items-center justify-center p-8 lg:w-[60%]">
            {/* GLOW */}
            <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d93232]/15 blur-[120px]" />
            <img 
              src={gallery[activeImage]} 
              alt={product.title.replace("\n", " ")} 
              draggable={false}
              className="relative z-10 w-full max-w-[550px] h-auto max-h-[500px] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
            />
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {gallery.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative flex cursor-pointer flex-col items-center justify-center rounded-lg border p-4 transition-all duration-300 ${
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
                <div className="mt-4 text-[10px] font-bold text-white/50 uppercase tracking-widest">
                  {idx === 0 ? "SIDE VIEW" : idx === 1 ? "BACK VIEW" : idx === 2 ? "FRONT VIEW" : "SOLE VIEW"}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <p className="text-[11px] font-medium tracking-[0.3em] text-white/40 uppercase">
              STEP INTO <span className="text-[#d93232]">COMFORT</span>. MOVE WITH <span className="text-[#d93232]">STYLE</span>.
            </p>
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
        `}
      </style>
    </div>
  );
}

/* =========================================================
   FEATURE COMPONENT
========================================================= */
function DetailedFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d93232]/30 bg-[#d93232]/10 text-[#d93232]">
        {icon}
      </div>
      <div>
        <h5 className="text-[12px] font-bold text-white uppercase tracking-wider">{title}</h5>
        <p className="text-[11px] text-white/50 mt-0.5">{desc}</p>
      </div>
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
