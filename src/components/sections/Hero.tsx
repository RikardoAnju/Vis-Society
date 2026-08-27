'use client';

import Image from "next/image";
import { colors } from "@lib/color";
import { useLanguage } from "@lib/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  const wordsRow1 = [t("hero.word1"), t("hero.word2")].filter(Boolean);
  const wordsRow2 = [t("hero.word3"), t("hero.word4")].filter(Boolean);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/FOTO BERSAMA/bersama-11-enhanced.png"
        alt="Hero Background"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 w-full">
        <div className="max-w-4xl flex flex-col gap-6">
          {/* Heading + Tagline */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              {wordsRow1.map((word, index) => (
                <span
                  key={word}
                  className="inline-block mr-3 opacity-0"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards` }}
                >
                  {word}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              {wordsRow2.map((word, index) => (
                <span
                  key={word}
                  className="inline-block mr-3 opacity-0"
                  style={{ animation: `fadeInUp 0.6s ease-out ${(index + wordsRow1.length) * 0.2}s forwards` }}
                >
                  {word}
                </span>
              ))}
              <span
                className="text-base sm:text-lg md:text-xl font-light italic text-white/80 opacity-0"
                style={{ animation: "fadeInUp 0.8s ease-out 0.8s forwards" }}
              >
                {t("hero.subtitle")}
              </span>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl opacity-0 font-light"
            style={{ animation: "fadeInUp 0.8s ease-out 1s forwards" }}
          >
            {t("hero.desc")}
          </p>

          {/* CTA Button */}
          <a
            href="#membership"
            className="w-fit px-8 py-3 rounded-md font-medium transition-opacity hover:opacity-90 opacity-0 inline-flex items-center justify-center cursor-pointer"
            style={{
              backgroundColor: colors.primary,
              color: "#ffffff",
              animation: "fadeInUp 0.8s ease-out 1.2s forwards"
            }}
          >
            {t("hero.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
