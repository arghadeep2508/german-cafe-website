"use client";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-[#f8f6f2]">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative group">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/assets/images/about/interior.jpg"
              alt="Cafe Interior"
              className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />

          {/* Floating badge */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium shadow-md">
            Cozy European Vibes
          </div>
        </div>

        {/* CONTENT */}
        <div>

          {/* Label */}
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
            Our Story
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a1a1a] mb-5 leading-tight">
            A Taste of Europe in Kolkata
          </h2>

          {/* Description */}
          <p className="text-[#6b6b6b] mb-4 leading-relaxed">
            German Cafe & Bistro brings the charm of European café culture to Newtown.
            From handcrafted dishes to rich aromatic coffee, every detail is curated
            for an authentic and cozy experience.
          </p>

          <p className="text-[#6b6b6b] mb-8 leading-relaxed">
            Whether it's a quick espresso, a relaxed brunch, or a night out with friends,
            we create moments that feel warm, elegant, and memorable.
          </p>

          {/* STATS (UPGRADED) */}
          <div className="grid grid-cols-3 gap-4 mb-8">

            <div className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition">
              <p className="text-xl font-semibold text-[var(--accent)]">3+</p>
              <p className="text-xs text-[#6b6b6b]">Years</p>
            </div>

            <div className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition">
              <p className="text-xl font-semibold text-[var(--accent)]">50+</p>
              <p className="text-xs text-[#6b6b6b]">Dishes</p>
            </div>

            <div className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition">
              <p className="text-xl font-semibold text-[var(--accent)]">10K+</p>
              <p className="text-xs text-[#6b6b6b]">Guests</p>
            </div>

          </div>

          {/* CTA */}
          <a
            href="/about"
            className="inline-block px-7 py-3 rounded-full bg-[var(--accent)] text-white font-medium shadow-md hover:scale-105 hover:bg-[var(--accent-hover)] transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}