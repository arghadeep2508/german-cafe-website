"use client";

export default function Location() {
  return (
    <section className="py-24 bg-[#f8f6f2]">
      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <p className="uppercase text-xs tracking-[0.3em] text-[var(--accent)] mb-3">
            Visit Us
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-3">
            Find Us
          </h2>

          <p className="text-[#6b6b6b]">
            Come and enjoy great food at our cozy café in Kolkata.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE (CARD STYLE) */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-6">

            {/* Rating (NEW - TRUST SIGNAL) */}
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)] text-lg">★★★★★</span>
              <span className="text-sm text-[#6b6b6b]">
                4.4 (1,900+ reviews)
              </span>
            </div>

            {/* Address */}
            <div>
              <p className="text-sm font-medium text-[#1a1a1a] mb-1">
                📍 Address
              </p>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Ground Floor, CF-9, Action Area I, Newtown,
                Kolkata, West Bengal 700156
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-sm font-medium text-[#1a1a1a] mb-1">
                📞 Phone
              </p>
              <a
                href="tel:+919831905544"
                className="text-sm text-[var(--accent)] hover:underline"
              >
                +91 9831905544
              </a>
            </div>

            {/* Hours */}
            <div>
              <p className="text-sm font-medium text-[#1a1a1a] mb-1">
                ⏰ Hours
              </p>
              <p className="text-sm text-[#6b6b6b]">
                Mon - Sun: 9:00 AM – 11:00 PM
              </p>
            </div>

            {/* BUTTON */}
            <a
              href="https://www.google.com/maps/place/German+Cafe+%26+Bistro/"
              target="_blank"
              className="inline-block w-full text-center px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium shadow-md hover:scale-105 hover:bg-[var(--accent-hover)] transition-all duration-300"
            >
              Get Directions
            </a>

          </div>

          {/* RIGHT SIDE MAP (UPGRADED) */}
          <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9946377935285!2d88.45722753762321!3d22.57930387683815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02759ebc73c365%3A0xeee30f6c6c807b4!2sGerman%20Cafe%20%26%20Bistro!5e0!3m2!1sen!2sin!4v1775617850097!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </div>
    </section>
  );
}