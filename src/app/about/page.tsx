"use client";

export default function AboutPage() {
  return (
    <main className="bg-[#faf7f2] min-h-screen">

      <section className="container-custom py-24 text-center">

        <h1 className="heading-lg mb-6">About Us</h1>

        <p className="text-muted max-w-2xl mx-auto mb-10">
          Welcome to German Cafe & Bistro — a place where European flavors meet
          a cozy atmosphere. We are passionate about serving handcrafted dishes,
          premium coffee, and unforgettable dining experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">🌍 Global Cuisine</h3>
            <p className="text-sm text-gray-600">
              Inspired by European and global flavors crafted with care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">☕ Premium Coffee</h3>
            <p className="text-sm text-gray-600">
              Freshly brewed coffee with rich aroma and taste.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">🍽️ Cozy Ambience</h3>
            <p className="text-sm text-gray-600">
              A warm and elegant environment for every occasion.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}