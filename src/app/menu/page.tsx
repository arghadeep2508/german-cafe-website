"use client";

import { useRef, useState, useEffect } from "react";
import MenuSection from "../../components/menu/MenuSection";

const menuImages = [
  "/assets/images/menu-pages/menu-page-1.jpg.jpeg",
  "/assets/images/menu-pages/menu-page-2.jpg.jpeg",
  "/assets/images/menu-pages/menu-page-3.jpg.jpeg",
  "/assets/images/menu-pages/menu-page-4.jpg.jpeg",
  "/assets/images/menu-pages/menu-page-5.jpg.jpeg",
  "/assets/images/menu-pages/menu-page-6.jpg.jpeg",
  "/assets/images/menu-pages/menu-page-7.jpg.jpeg",
  "/assets/images/menu-pages/menu-page-8.jpg.jpeg",
];

export default function MenuPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // 🔥 Disable scroll when modal open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  // 🔥 Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "ArrowRight") nextModal();
      if (e.key === "ArrowLeft") prevModal();
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const child = container.children[index] as HTMLElement;

    if (child) {
      container.scrollTo({
        left: child.offsetLeft - 16,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const next = () => {
    if (activeIndex < menuImages.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const nextModal = () => {
    if (selectedImage !== null && selectedImage < menuImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevModal = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <main className="bg-[#faf7f2] min-h-screen">

      {/* HEADER */}
      <section className="pt-24 pb-12 text-center container-custom">
        <h1 className="heading-lg mb-3">Our Menu</h1>
        <p className="text-muted max-w-xl mx-auto">
          Explore our complete menu — from handcrafted dishes to refreshing beverages.
        </p>
      </section>

      {/* CAROUSEL */}
      <section className="pb-16 relative">
        <div className="container-custom">

          <h2 className="heading-md mb-6 text-center">
            Explore Our Menu
          </h2>

          <button
            onClick={prev}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 
            w-10 h-10 items-center justify-center rounded-full 
            bg-white shadow-md hover:scale-110 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 
            w-10 h-10 items-center justify-center rounded-full 
            bg-white shadow-md hover:scale-110 transition"
          >
            →
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4 snap-x snap-mandatory"
          >
            {menuImages.map((img, index) => (
              <div
                key={index}
                className="snap-center min-w-[70%] md:min-w-[280px] flex-shrink-0"
              >
                <div
                  onClick={() => setSelectedImage(index)}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition"
                >
                  <img
                    src={img}
                    alt={`Menu ${index + 1}`}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 MODAL */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >

          {/* CLOSE BUTTON (FIXED VISIBILITY) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-6 right-6 z-50 
            w-12 h-12 flex items-center justify-center 
            rounded-full bg-white/20 backdrop-blur-md 
            border border-white/30 text-white text-xl 
            hover:bg-white/30 hover:scale-110 transition"
          >
            ✕
          </button>

          {/* LEFT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevModal();
            }}
            disabled={selectedImage === 0}
            className={`absolute left-[8%] md:left-[12%] top-1/2 -translate-y-1/2 
            w-12 h-12 flex items-center justify-center rounded-full 
            bg-white/20 backdrop-blur-md border border-white/30 text-white 
            hover:scale-110 hover:bg-white/30 transition
            ${selectedImage === 0 ? "opacity-30 cursor-not-allowed" : ""}
          `}
          >
            ←
          </button>

          {/* IMAGE */}
          <img
            src={menuImages[selectedImage]}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl animate-fadeIn"
          />

          {/* RIGHT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextModal();
            }}
            disabled={selectedImage === menuImages.length - 1}
            className={`absolute right-[8%] md:right-[12%] top-1/2 -translate-y-1/2 
            w-12 h-12 flex items-center justify-center rounded-full 
            bg-white/20 backdrop-blur-md border border-white/30 text-white 
            hover:scale-110 hover:bg-white/30 transition
            ${selectedImage === menuImages.length - 1 ? "opacity-30 cursor-not-allowed" : ""}
          `}
          >
            →
          </button>

        </div>
      )}

      {/* DIVIDER */}
      <div className="container-custom">
        <div className="section-divider mb-12"></div>
      </div>

      {/* MENU LIST */}
      <MenuSection />

    </main>
  );
}