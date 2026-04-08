"use client";

export default function About() {
  return (
    <section className="section bg-[var(--bg)]">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

        {/* 🔥 IMAGE */}
        <div className="relative">
          <img
            src="/assets/images/about/interior.jpg"
            alt="Cafe Interior"
            className="w-full h-[420px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* 🔥 CONTENT */}
        <div>

          {/* Tag */}
          <p className="uppercase text-sm tracking-[3px] text-[var(--accent)] mb-3">
            Our Story
          </p>

          {/* Heading */}
          <h2 className="heading-lg mb-4">
            About Us
          </h2>

          {/* Description */}
          <p className="text-muted mb-6 leading-relaxed">
            German Cafe & Bistro brings the essence of European café culture to Kolkata.
            From handcrafted dishes to rich aromatic coffee, every detail is designed
            to offer a warm and memorable experience.
          </p>

          <p className="text-muted mb-8 leading-relaxed">
            Whether you're here for a relaxed brunch, a casual meet-up, or a quiet
            coffee break, our space blends comfort, taste, and ambience perfectly.
          </p>

          {/* 🔥 STATS */}
          <div className="flex gap-10">

            <div>
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                3+
              </h3>
              <p className="text-sm text-muted">Years</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                50+
              </h3>
              <p className="text-sm text-muted">Dishes</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                10K+
              </h3>
              <p className="text-sm text-muted">Guests</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}