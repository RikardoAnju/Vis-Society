'use client';

import Header from "@components/layout/Header";
import HeroSection from "@components/sections/Hero";
import AboutSection from "@components/sections/About";
import ProgramsSection from "@components/sections/Programs";
import MembershipSection from "@components/sections/Membership";
import FAQSection from "@components/sections/FAQ";
import TestimonialsSection from "@components/sections/Testimonials";
import { colors } from "@lib/color";
import { SITE_NAME } from "@constants/index";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <MembershipSection />
      <FAQSection />
      <TestimonialsSection />

      {/* Footer */}
      <footer className="pt-16 pb-8 px-4 md:px-8" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            {/* Brand */}
            <div>
              <Image
                src="/img/vis_logo.png"
                alt={SITE_NAME}
                width={56}
                height={56}
                className="h-14 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                {t("footer.desc")}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                {t("footer.navTitle")}
              </h5>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-white/70 hover:text-white transition-colors">{t("nav.home")}</Link></li>
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors">{t("nav.about")}</a></li>
                <li><a href="#program" className="text-white/70 hover:text-white transition-colors">{t("nav.program")}</a></li>
                <li><a href="#membership" className="text-white/70 hover:text-white transition-colors">{t("nav.membership")}</a></li>
                <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">{t("nav.faq")}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                {t("footer.contactTitle")}
              </h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li>Komplek perkantoran Mega Legenda II Blok C2/27</li>
                <li>0821-7601-818</li>
                <li>@vis.society</li>
              </ul>
            </div>

            {/* Legalities */}
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                {t("footer.legalTitle")}
              </h5>
              <ul className="space-y-3.5 text-xs text-white/70">
                <li>
                  <strong className="text-white block text-sm font-semibold">{t("footer.aktaLabel")}</strong>
                  <span className="inline-flex items-center gap-1.5 mt-1 text-emerald-400 font-semibold bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/30">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    {t("about.org.roleKetuaUmum") === "General Chairman" ? "Deed Available (Photo)" : "Ada (Foto)"}
                  </span>
                </li>
                <li>
                  <strong className="text-white block text-sm font-semibold">{t("footer.skLabel")}</strong>
                  <span className="font-mono mt-0.5 block text-white/90">AHU-0004449.AH.01.07.Tahun 2026</span>
                </li>
                <li>
                  <strong className="text-white block text-sm font-semibold">{t("footer.npwpLabel")}</strong>
                  <span className="font-mono mt-0.5 block text-white/90">1 000 0000 1013 5426</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center">
            <p className="text-white/50 text-sm">&copy; 2026 Vis Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
