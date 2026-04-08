"use client";

const sections = [
  {
    title: "Service & Experience",
    items: ["Dine-in", "Takeaway", "Delivery", "Table Service"],
  },
  {
    title: "Highlights",
    items: ["Great Coffee", "Great Desserts", "European Cuisine", "Cozy Interior"],
  },
  {
    title: "Dining Options",
    items: ["Breakfast", "Lunch", "Dinner", "Brunch"],
  },
  {
    title: "Atmosphere",
    items: ["Cozy", "Romantic", "Casual", "Premium"],
  },
  {
    title: "Facilities",
    items: ["Parking Available", "Family Friendly", "Free WiFi"],
  },
  {
    title: "Payments",
    items: ["UPI", "Cards", "Cash"],
  },
];

export default function AboutDetails() {
  return (
    <section className="section bg-[var(--bg)]">
      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="uppercase text-xs tracking-[0.3em] text-[var(--accent)] mb-3">
            Details
          </p>

          <h2 className="heading-lg mb-3">
            Everything You Need to Know
          </h2>

          <p className="text-muted max-w-xl mx-auto">
            Discover what makes our café special — from dining experience to ambience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-4">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[var(--accent)]">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}