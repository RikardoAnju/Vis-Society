'use client';

import { colors } from "@lib/color";
import { STATISTICS } from "@constants/index";
import AnimatedCounter from "@components/ui/AnimatedCounter";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <h2 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: colors.primary }}>
          Tentang Kami
        </h2>

        {/* Heading + Description */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-black">
            Komunitas yang Dibangun atas Dasar Kepercayaan dan Kolaborasi.
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Vis Society adalah organisasi lintas industri, lintas profesi, dan lintas jabatan/usia yang dibentuk sebagai wadah bagi mereka yang mempunyai keinginan untuk selalu belajar dan bertumbuh — melampaui latar belakang, pendidikan, pengalaman, bahkan batas negara.
          </p>
        </div>

        {/* Visi / Misi / Nilai Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Visi */}
          <div className="p-8 rounded-xl bg-gray-50">
            <svg className="w-7 h-7 mb-5" fill="none" stroke="black" strokeWidth="1.6" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.437 0 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h4 className="text-xl font-bold text-black mb-3">Visi</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Membangun ekosistem lintas batas yang berkembang pesat, tempat pemimpin bisnis dan profesional dapat terhubung dan bertumbuh bersama.
            </p>
          </div>

          {/* Misi - Highlighted */}
          <div className="p-8 rounded-xl" style={{ backgroundColor: colors.primary }}>
            <svg className="w-7 h-7 mb-5" fill="none" stroke="white" strokeWidth="1.6" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4 className="text-xl font-bold text-white mb-3">Misi</h4>
            <p className="text-white/85 text-sm leading-relaxed">
              Menghadirkan jejaring, pertukaran pengetahuan, dan kolaborasi strategis yang berdampak dan berkelanjutan bagi anggota.
            </p>
          </div>

          {/* Nilai-Nilai Kami */}
          <div className="p-8 rounded-xl bg-gray-50">
            <svg className="w-7 h-7 mb-5" fill="none" stroke="black" strokeWidth="1.6" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <h4 className="text-xl font-bold text-black mb-3">Nilai-Nilai Kami</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex gap-2">
                <span style={{ color: colors.primary }}>•</span>
                Integritas dalam setiap kolaborasi
              </li>
              <li className="flex gap-2">
                <span style={{ color: colors.primary }}>•</span>
                Kepedulian antar anggota
              </li>
              <li className="flex gap-2">
                <span style={{ color: colors.primary }}>•</span>
                Transparansi dan profesionalisme
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-12" />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATISTICS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: colors.primary }}>
                <AnimatedCounter value={stat.value} />
              </div>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
