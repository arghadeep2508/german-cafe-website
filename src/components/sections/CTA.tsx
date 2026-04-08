"use client";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#f8f6f2]">

      {/* 🔥 BACKGROUND GLOW (SUBTLE PREMIUM TOUCH) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,155,60,0.15),_transparent_70%)]" />

      <div className="container-custom relative z-10 text-center">

        {/* LABEL */}
        <p className="uppercase text-xs tracking-[0.3em] text-[var(--accent)] mb-3">
          Visit Us
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a1a1a] mb-5 leading-tight">
          Experience Great Food <br className="hidden md:block" />
          & Atmosphere
        </h2>

        {/* SUBTEXT */}
        <p className="text-[#6b6b6b] max-w-xl mx-auto mb-10 leading-relaxed">
          Join us for a memorable dining experience with handcrafted dishes,
          rich coffee, and a cozy European café vibe.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* PRIMARY CTA */}
          <a
            href="tel:+919831905544"
            className="px-8 py-3 rounded-full bg-[var(--accent)] text-white font-medium shadow-md hover:scale-105 hover:bg-[var(--accent-hover)] transition-all duration-300"
          >
            Call Now
          </a>

          {/* SECONDARY CTA */}
          <a
            href="/menu"
            className="px-8 py-3 rounded-full border border-gray-300 text-[#1a1a1a] bg-white hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            View Full Menu
          </a>

        </div>

      </div>
    </section>
  );
}