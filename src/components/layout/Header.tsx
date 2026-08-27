'use client';

import Image from "next/image";
import { SITE_NAME } from "@constants/index";
import { colors } from "@lib/color";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Beranda", href: "/", desc: "Halaman utama" },
  { label: "Tentang Kami", href: "#about", desc: "Profil organisasi" },
  { label: "Membership", href: "#membership", desc: "Pilihan membership" },
  { label: "Program", href: "#program", desc: "Program & inisiatif" },
  { label: "Galeri", href: "#gallery", desc: "Dokumentasi kegiatan" },
  { label: "FAQ", href: "#faq", desc: "Pertanyaan sering diajukan" },
];

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{
      backgroundColor: showNav ? "#ffffff" : "transparent",
      boxShadow: showNav ? "0 1px 12px rgba(0, 0, 0, 0.08)" : "none",
      opacity: showNav ? 1 : 0,
      pointerEvents: showNav ? "auto" : "none"
    }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo - Left */}
        <Image
          src="/img/vis_logo.png"
          alt={SITE_NAME}
          width={220}
          height={114}
          className="h-12 sm:h-14 md:h-16 w-auto flex-shrink-0"
          priority
        />

        {/* Navigation - Center */}
        <div className="flex-1 flex justify-center">
          {showNav && (
            <div className="hidden md:flex gap-12 animate-fadeIn">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-light tracking-wide transition-all duration-300 hover:text-opacity-60 group relative"
                  style={{ color: "#374151" }}
                  title={item.desc}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.secondary }}></span>
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {item.desc}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* CTA Button - Right */}
        <button
          className="px-6 py-2 rounded-md font-medium transition-opacity hover:opacity-90 flex-shrink-0"
          style={{ backgroundColor: colors.primary, color: "#ffffff" }}
        >
          Kirim Pesan
        </button>
      </nav>
    </header>
  );
}
