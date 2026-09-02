'use client';

import Link from "next/link";
import Image from "next/image";
import Header from "@components/layout/Header";
import ScrollReveal from "@components/ui/ScrollReveal";
import { useLanguage } from "@lib/LanguageContext";
import { colors } from "@lib/color";
import { PROGRAMS } from "@constants/programs";

export default function ProgramDetailClient({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const program = PROGRAMS.find((item) => item.slug === slug);

  if (!program) {
    return null;
  }

  const detailParagraphs = [
    t(program.detailFocusKey),
    t(program.detailFormatKey),
    t(program.detailOutcomeKey),
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="slide-up">
            <Link
              href="/#program"
              className="inline-flex items-center gap-2 text-sm font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              <span>←</span>
              <span>Kembali ke Program</span>
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <ScrollReveal animation="slide-up" className="order-2 lg:order-1">
              <div
                className="inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] border bg-white mb-5"
                style={{ color: colors.primary, borderColor: "#dbe7ef" }}
              >
                {t(program.badgeKey)}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-950 leading-tight">
                {t(program.titleKey)}
              </h1>
              <p className="mt-4 text-lg font-semibold" style={{ color: colors.primary }}>
                {t(program.scheduleKey)}
              </p>
              <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t(program.descKey)}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-up" delay={100} className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl border border-slate-100 bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-8">
          <ScrollReveal animation="slide-up">
            <div className="rounded-[2rem] border border-slate-100 bg-white shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-950 mb-6">{t(program.detailTitleKey)}</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {detailParagraphs.map((paragraph) => (
                  <p key={paragraph} className="whitespace-pre-line">{paragraph}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={120}>
            <aside
              className="rounded-[2rem] p-6 md:p-7 text-white shadow-lg h-fit"
              style={{ backgroundColor: colors.primary }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/70 mb-3">VIS Society</p>
              <h3 className="text-2xl font-bold leading-tight mb-4">Bangun koneksi yang berlanjut jadi kolaborasi.</h3>
              <p className="text-sm text-white/75 leading-relaxed mb-6">
                Setiap program dirancang untuk mempertemukan anggota, mitra strategis, dan peluang baru dalam satu ekosistem yang terkurasi.
              </p>
              <Link
                href="/#membership"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold"
                style={{ color: colors.primary }}
              >
                Lihat Membership
              </Link>
            </aside>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
