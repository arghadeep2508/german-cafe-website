"use client";

import { useRef, useState } from "react";
import { menuHighlights } from "../../lib/menuHighlights";

export default function Highlights() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // 🖱️ Mouse Down
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;

    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  // 🖱️ Mouse Move
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // 🖱️ Mouse Up / Leave
  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section className="section bg-[var(--bg)]">
      <div className="container-custom">

        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <p className="uppercase text-xs tracking-[0.3em] text-[var(--accent)] mb-3">
            Our Specials
          </p>

          <h2 className="heading-lg mb-3">
            Signature Dishes
          </h2>

          <p className="text-muted">
            A curated selection of our most loved dishes — crafted with passion.
          </p>
        </div>

        {/* 🔥 SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
        >
          {menuHighlights.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px] flex-shrink-0 group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    draggable={false}
                  />

                  {/* GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* BADGE */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
                    Chef’s Pick
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {item.name}
                    </h3>

                    {item.price && (
                      <p className="text-sm text-[var(--accent)] mt-1">
                        ₹{item.price}
                      </p>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}