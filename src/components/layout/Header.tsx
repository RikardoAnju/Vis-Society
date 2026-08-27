'use client';

import Image from "next/image";
import { SITE_NAME } from "@constants/index";
import { colors } from "@lib/color";
import { useState, useEffect } from "react";
import { useLanguage } from "@lib/LanguageContext";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_ITEMS = [
    { label: t("nav.home"), href: "/", desc: "Halaman utama" },
    { label: t("nav.about"), href: "#about", desc: "Profil organisasi" },
    { label: t("nav.program"), href: "#program", desc: "Program & inisiatif" },
    { label: t("nav.membership"), href: "#membership", desc: "Pilihan membership" },
    { label: t("nav.faq"), href: "#faq", desc: "Pertanyaan sering diajukan" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 12px rgba(0, 0, 0, 0.08)",
        opacity: showNav ? 1 : 0,
        pointerEvents: showNav ? "auto" : "none"
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo - Left */}
        <div className="relative h-12 w-32 sm:h-14 sm:w-36 md:h-16 md:w-44 flex-shrink-0">
          <Image
            src="/img/vis_logo.png"
            alt={SITE_NAME}
            fill
            sizes="(max-width: 768px) 150px, 200px"
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation - Center */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex gap-8 lg:gap-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-75 group relative text-slate-700"
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: colors.secondary }}
                ></span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA & Language Selector - Right */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-0.5 border border-slate-200 bg-slate-50 rounded-lg p-0.5 text-[10px] sm:text-xs font-bold transition-all duration-300">
            <button
              onClick={() => setLanguage("id")}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                language === "id"
                  ? "bg-[#053f5c] text-white shadow-sm"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                language === "en"
                  ? "bg-[#053f5c] text-white shadow-sm"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/628217601818"
            className="hidden sm:inline-flex px-5 py-2 rounded-md font-bold text-xs sm:text-sm transition-all hover:opacity-90 flex-shrink-0 text-white cursor-pointer"
            style={{ backgroundColor: colors.primary }}
          >
            {t("nav.contactBtn")}
          </a>
        </div>
      </nav>
    </header>
  );
}
