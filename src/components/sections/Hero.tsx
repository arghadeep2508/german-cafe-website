export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/assets/images/hero/hero-bg.jpg')",
        }}
      />

      {/* Warm Overlay (IMPORTANT UPGRADE) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      {/* Subtle warm tint */}
      <div className="absolute inset-0 bg-[rgba(200,155,60,0.08)]" />

      {/* Content */}
      <div className="relative z-10 text-center container-custom px-4 animate-fadeIn">

        {/* Top Label */}
        <p className="uppercase tracking-[0.3em] text-xs text-gray-300 mb-5">
          EST. 2024 • KOLKATA
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 drop-shadow-lg">
          Great Food. <br />
          <span className="text-[var(--accent)]">
            Great Vibes.
          </span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed">
          Experience authentic European café culture with handcrafted dishes,
          rich coffee, and a cozy atmosphere in the heart of Kolkata.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Primary CTA */}
          <a
            href="/menu"
            className="px-8 py-3 rounded-full bg-[var(--accent)] text-white font-medium shadow-lg hover:scale-105 hover:bg-[var(--accent-hover)] transition-all duration-300"
          >
            View Menu
          </a>

          {/* Secondary CTA */}
          <a
            href="tel:+919876543210"
            className="px-8 py-3 rounded-full border border-white/30 backdrop-blur-md bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            Call Now
          </a>
        </div>

      </div>

      {/* Bottom Fade (smooth transition to next section) */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0f0f0f] to-transparent" />

    </section>
  );
}