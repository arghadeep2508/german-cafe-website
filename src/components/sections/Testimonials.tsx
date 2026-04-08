"use client";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Food Blogger",
    text: "Absolutely loved the schnitzel and the cozy ambience. Best cafe in Newtown, hands down!",
    rating: 5,
  },
  {
    name: "Rahul Das",
    role: "Regular Customer",
    text: "The coffee here is on another level. Perfect spot for a weekend brunch with family.",
    rating: 5,
  },
  {
    name: "Priya Mukherjee",
    role: "First-time Visitor",
    text: "Beautiful interiors and amazing food. The Black Forest cake is to die for!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f8f6f2]">
      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <p className="uppercase text-xs tracking-[0.3em] text-[var(--accent)] mb-3">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-3">
            What Our Guests Say
          </h2>

          <p className="text-[#6b6b6b]">
            Real experiences from our customers who love our food and ambience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 group"
            >

              {/* QUOTE ICON */}
              <div className="absolute top-4 right-5 text-5xl text-gray-100 font-serif">
                “
              </div>

              {/* STARS */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-[var(--accent)] text-base"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* TEXT */}
              <p className="text-[#6b6b6b] mb-6 leading-relaxed text-sm">
                {item.text}
              </p>

              {/* USER */}
              <div className="flex items-center gap-3 mt-auto">

                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm font-semibold shadow-sm">
                  {item.name.charAt(0)}
                </div>

                {/* Info */}
                <div>
                  <p className="font-medium text-sm text-[#1a1a1a]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#6b6b6b]">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}