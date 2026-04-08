"use client";

import { useEffect, useRef, useState } from "react";
import { menuData } from "../../lib/menuData";
import { categoryLabels } from "../../lib/constants";
import MenuGrid from "./MenuGrid";

export default function MenuSection() {
  // ✅ FIX: use menuData as source of truth
  const categories = Object.keys(menuData);

  const [active, setActive] = useState<string>(categories[0] || "");

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // 🔥 Scroll to section + center tab
  const scrollToCategory = (category: string) => {
    const el = sectionRefs.current[category];
    const tab = tabRefs.current[category];

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (tab) {
      tab.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }

    setActive(category);
  };

  // 🔥 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      let current = categories[0];

      for (const cat of categories) {
        const el = sectionRefs.current[cat];
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 140 && rect.bottom >= 140) {
          current = cat;
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  return (
    <section className="container-custom py-12">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Menu
      </h1>

      {/* 🔥 CATEGORY BAR */}
      <div className="sticky top-[80px] z-40 bg-[#faf7f2] pb-4">

        <div className="relative">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-[#faf7f2] to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-[#faf7f2] to-transparent z-10" />

          {/* TABS */}
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap px-2 scrollbar-hide">

            {categories.map((cat) => (
              <button
                key={cat}
                ref={(el) => {
                  tabRefs.current[cat] = el;
                }}
                onClick={() => scrollToCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  active === cat
                    ? "bg-black text-white shadow-md scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}

          </div>
        </div>
      </div>

      {/* 🔥 ALL MENU SECTIONS */}
      <div className="mt-10 space-y-16">

        {categories.map((cat) => {
          const items = menuData[cat] || [];

          return (
            <div
              key={cat}
              ref={(el) => {
                sectionRefs.current[cat] = el;
              }}
              className="scroll-mt-[140px]"
            >
              {/* CATEGORY TITLE */}
              <h2 className="text-2xl font-semibold mb-6">
                {categoryLabels[cat] || cat}
              </h2>

              {/* ITEMS */}
              <MenuGrid items={items} />
            </div>
          );
        })}

      </div>

    </section>
  );
}