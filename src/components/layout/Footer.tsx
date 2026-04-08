"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white mt-20">

      {/* TOP SECTION */}
      <div className="container-custom py-16 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            German Cafe & Bistro
          </h3>

          <p className="text-sm text-gray-400 mb-5 leading-relaxed">
            Experience authentic European café culture in the heart of Kolkata.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">

            {/* ✅ FACEBOOK (UPDATED LINK) */}
            <a
              href="https://www.facebook.com/share/1DnNVJrqGm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--accent)] transition"
            >
              <FaFacebookF size={14} />
            </a>

            {/* ⚠️ INSTAGRAM (ADD REAL LINK LATER) */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--accent)] transition opacity-50 cursor-not-allowed"
            >
              <FaInstagram size={14} />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* MENU LINKS */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">
            Menu
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>Breakfast</li>
            <li>Starters</li>
            <li>Main Course</li>
            <li>Desserts</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">
            Contact
          </h4>

          <ul className="space-y-3 text-sm text-gray-400">

            {/* 📍 LOCATION → GOOGLE MAPS */}
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt size={12} className="text-[var(--accent)]" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=German+Cafe+%26+Bistro+Newtown+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Newtown, Kolkata
              </a>
            </li>

            {/* 📞 CLICK TO CALL */}
            <li className="flex items-center gap-2">
              <FaPhoneAlt size={12} className="text-[var(--accent)]" />
              <a href="tel:+919831905544" className="hover:text-white">
                +91 9831905544
              </a>
            </li>

            {/* ⏰ TIME */}
            <li className="flex items-center gap-2">
              <FaClock size={12} className="text-[var(--accent)]" />
              Open Daily: 9:00 AM – 10:15 PM
            </li>

          </ul>
        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
        ⭐ 4.4 Rating • 10K+ Happy Guests • Since 2024
        <br />
        © {new Date().getFullYear()} German Cafe & Bistro. All rights reserved.
      </div>

    </footer>
  );
}