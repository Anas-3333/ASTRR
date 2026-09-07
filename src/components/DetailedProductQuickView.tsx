import { useEffect, useState } from "react";
import type { Product } from "./ProductQuickView";

type DetailedProductQuickViewProps = {
  product: Product | null;
  onClose: () => void;
};

export default function DetailedProductQuickView({
  product,
  onClose,
}: DetailedProductQuickViewProps) {
  const [activeImage, setActiveImage] = useState(0);

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

  // Reset active image when product changes
  useEffect(() => {
    setActiveImage(0);
  }, [product]);

  if (!product) return null;

  // Mock gallery if not provided, just to demonstrate the layout
  const gallery = product.galleryImages || [
    product.quickViewImage,
    product.quickViewImage,
    product.quickViewImage,
    product.quickViewImage,
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative z-10 flex h-full max-h-[90vh] w-full max-w-[1200px] flex-col overflow-y-auto overflow-x-hidden bg-[#0a0a0a] border border-white/10 rounded-xl animate-[modalIn_0.4s_ease-out]">
        
        {/* CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 backdrop-blur-md transition-colors hover:bg-[#d93232] hover:text-white"
        >
          ✕
        </button>

        {/* TOP SECTION: Hero & Features */}
        <div className="flex flex-col lg:flex-row min-h-[500px]">
          
          {/* LEFT: Text & List */}
          <div className="flex w-full flex-col justify-center p-8 lg:w-[40%] lg:pl-12 lg:pr-6">
            <h4 className="text-[14px] font-bold text-[#d93232] tracking-wider uppercase mb-2">ASTRR ENGINEERED</h4>
            <h2 className="text-[42px] leading-[0.9] font-black text-white uppercase tracking-[-0.04em] mb-4">
              {product.title}
            </h2>
            <p className="text-[13px] font-medium text-white/60 uppercase tracking-widest mb-10">
              {product.description}
            </p>

            <div className="flex flex-col gap-8">
              <DetailedFeature 
                icon="M13 10V3L4 14h7v7l9-11h-7z" // Lightning bolt
                title="ULTRA LIGHTWEIGHT" 
                desc="Designed for all-day comfort & ease." 
              />
              <DetailedFeature 
                icon="M3 15a4 4 4 0 004 4h9a5 5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" // Cloud
                title="BREATHABLE MESH" 
                desc="Keeps your feet cool and fresh." 
              />
              <DetailedFeature 
                icon="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" // Shock/Bounce (actually a dollar sign path, I'll use a better one)
                title="SHOCK ABSORBING SOLE" 
                desc="Superior cushioning with every step." 
              />
              <DetailedFeature 
                icon="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" // Grid/Grip
                title="ANTI-SLIP OUTSOLE" 
                desc="Maximum grip for all terrains." 
              />
            </div>
          </div>

          {/* RIGHT: Main Image */}
          <div className="relative flex w-full items-center justify-center p-8 lg:w-[60%]">
            {/* GLOW */}
            <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d93232]/10 blur-[120px]" />
            <img 
              src={gallery[activeImage]} 
              alt={product.title} 
              className="relative z-10 w-full max-w-[500px] h-auto object-contain drop-shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* MIDDLE BAR: Horizontal Specs */}
        <div className="mx-8 lg:mx-12 border-y border-white/10 py-5">
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

        {/* BOTTOM SECTION: Gallery */}
        <div className="p-8 lg:px-12 flex flex-col gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative flex cursor-pointer flex-col items-center justify-center rounded-lg border p-4 transition-all duration-300 ${activeImage === idx ? 'border-[#d93232] bg-[#d93232]/5' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                onClick={() => setActiveImage(idx)}
              >
                <img src={img} alt={`${product.title} view ${idx + 1}`} className="h-32 w-full object-contain mix-blend-screen" />
                <div className="mt-4 text-[10px] font-bold text-white/50 uppercase tracking-widest">
                  {idx === 0 ? "SIDE VIEW" : idx === 1 ? "BACK VIEW" : idx === 2 ? "FRONT VIEW" : "SOLE VIEW"}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pb-4">
            <p className="text-[11px] font-medium tracking-[0.3em] text-white/40 uppercase">
              STEP INTO <span className="text-[#d93232]">COMFORT</span>. MOVE WITH <span className="text-[#d93232]">STYLE</span>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

function DetailedFeature({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d93232]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div>
        <h5 className="text-[12px] font-bold text-white uppercase tracking-wider">{title}</h5>
        <p className="text-[11px] text-white/50">{desc}</p>
      </div>
    </div>
  );
}

function SpecItem({ title }: { title: string }) {
  return (
    <div className="flex flex-1 items-center justify-center gap-3">
      <div className="h-1.5 w-1.5 rotate-45 bg-[#d93232]" />
      <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">{title}</span>
    </div>
  );
}
