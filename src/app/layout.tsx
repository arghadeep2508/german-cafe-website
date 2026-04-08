import "./globals.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"; // ✅ ADD THIS

import { Playfair_Display, Inter } from "next/font/google";

// 🔥 Premium Heading Font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

// 🔥 Clean Body Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "German Cafe & Bistro",
  description: "Authentic Taste. Cozy Vibes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ✅ Prevent hydration mismatch */}
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >

        {/* ✅ NAVBAR */}
        <Navbar />

        {/* ✅ MAIN CONTENT */}
        <main className="pt-16 min-h-screen">
          {children}
        </main>

        {/* ✅ FOOTER (GLOBAL) */}
        <Footer />

      </body>
    </html>
  );
}