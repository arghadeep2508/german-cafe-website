"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-[#f8f6f2]/95 backdrop-blur-md shadow-md"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div
        className={`container-custom flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/logo.png"
            alt="German Cafe & Bistro"
            width={120}
            height={40}
            className={`object-contain transition ${
              scrolled ? "brightness-100" : "brightness-125"
            }`}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group transition ${
                  scrolled ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                <span
                  className={`transition ${
                    isActive ? "text-[var(--accent)]" : ""
                  }`}
                >
                  {link.name}
                </span>

                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--accent)] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <a
          href="tel:+919876543210"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-[var(--accent)] text-white text-sm font-medium shadow-md hover:scale-105 hover:bg-[var(--accent-hover)] transition"
        >
          Call Now
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-2xl ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#f8f6f2] px-6 py-4 flex flex-col gap-4 shadow-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[#1a1a1a]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <a
            href="tel:+919876543210"
            className="mt-2 text-center px-5 py-2 rounded-full bg-[var(--accent)] text-white font-medium"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}