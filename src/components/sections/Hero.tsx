'use client';

import Image from "next/image";
import { colors } from "@lib/color";

export default function HeroSection() {
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
              {["Komunitas", "Profesional"].map((word, index) => (
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
              {["Lintas", "Batas"].map((word, index) => (
                <span
                  key={word}
                  className="inline-block opacity-0"
                  style={{ animation: `fadeInUp 0.6s ease-out ${(index + 2) * 0.2}s forwards` }}
                >
                  {word}
                </span>
              ))}
              <span
                className="text-base sm:text-lg md:text-xl font-light italic text-white/80 opacity-0"
                style={{ animation: "fadeInUp 0.8s ease-out 0.8s forwards" }}
              >
                / Growth Mindset Community
              </span>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl opacity-0 font-light"
            style={{ animation: "fadeInUp 0.8s ease-out 1s forwards" }}
          >
            Terhubung, berkolaborasi, dan berkembang bersama profesional dan pengusaha di Batam, Singapura, dan Malaysia dalam ekosistem terpercaya kami.
          </p>

          {/* CTA Button */}
          <button
            className="w-fit px-8 py-3 rounded-md font-medium transition-opacity hover:opacity-90 opacity-0"
            style={{
              backgroundColor: colors.primary,
              color: "#ffffff",
              animation: "fadeInUp 0.8s ease-out 1.2s forwards"
            }}
          >
            Bergabung Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
