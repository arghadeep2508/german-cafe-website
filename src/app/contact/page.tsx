"use client";

export default function ContactPage() {
  return (
    <main className="bg-[#faf7f2] min-h-screen">

      <section className="container-custom py-24 text-center">

        <h1 className="heading-lg mb-6">Contact Us</h1>

        <p className="text-muted mb-10">
          We'd love to hear from you. Reach out to us anytime.
        </p>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm">

          <div className="mb-4">
            <p className="font-medium">📍 Address</p>
            <p className="text-gray-600 text-sm">
              German Cafe & Bistro, Kolkata
            </p>
          </div>

          <div className="mb-4">
            <p className="font-medium">📞 Phone</p>
            <a href="tel:+919831905544" className="text-blue-600 text-sm">
              +91 9831905544
            </a>
          </div>

          <div className="mb-4">
            <p className="font-medium">✉️ Email</p>
            <p className="text-gray-600 text-sm">
              contact@germancafe.com
            </p>
          </div>

          {/* SIMPLE FORM */}
          <form className="mt-6 space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-md px-4 py-2"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-200 rounded-md px-4 py-2"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-200 rounded-md px-4 py-2"
            />

            <button
              type="submit"
              className="btn-premium w-full"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}