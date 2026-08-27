import Header from "@components/layout/Header";
import HeroSection from "@components/sections/Hero";
import AboutSection from "@components/sections/About";
import MembershipSection from "@components/sections/Membership";
import FAQSection from "@components/sections/FAQ";
import { colors } from "@lib/color";
import { SITE_NAME } from "@constants/index";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Header />
      <HeroSection />
      <AboutSection />
      <MembershipSection />
      <FAQSection />

      {/* Footer */}
      <footer className="pt-16 pb-8 px-4 md:px-8" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
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
                Komunitas profesional lintas batas — menghubungkan, mengembangkan, dan menciptakan dampak berkelanjutan di Batam, Singapura, dan Malaysia.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Navigasi</h5>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Beranda</Link></li>
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#membership" className="text-white/70 hover:text-white transition-colors">Membership</a></li>
                <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Kontak</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li>Komplek perkantoran Mega Legenda II Blok C2/27</li>
                <li>0821-7601-818</li>
                <li>@vis.society</li>
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
