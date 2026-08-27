'use client';

import { useState } from "react";
import Image from "next/image";
import { colors } from "@lib/color";
import { STATISTICS } from "@constants/index";
import AnimatedCounter from "@components/ui/AnimatedCounter";

const ORG_DEPARTMENTS = [
  {
    title: "Registrasi & Keanggotaan",
    head: { name: "Yoseph Eduardus", role: "Registrasi dan Keanggotaan" },
    staff: [
      { name: "Sandedex", role: "Staf Registrasi" },
      { name: "Septian E Wardoyo", role: "Staf Registrasi" }
    ]
  },
  {
    title: "Human Development",
    head: { name: "Yohanes Ad Purnomo", role: "Human Development" },
    staff: []
  },
  {
    title: "Hubungan Internasional",
    head: { name: "Bisa Mulia", role: "Hubungan Internasional" },
    staff: [
      { name: "Michael Dimas", role: "Staf Hubungan Internasional" }
    ]
  },
  {
    title: "Sekretariat Jenderal",
    head: { name: "Priyo", role: "Sekjen" },
    staff: [
      { name: "Muhammad Andika", role: "Staf Sekjen" },
      { name: "Adrian", role: "Staf Sekjen" }
    ]
  },
  {
    title: "Bendahara Umum",
    head: { name: "Elisabeth", role: "Bendahara Umum" },
    staff: [
      { name: "Ditha", role: "Staf Bendahara" }
    ]
  }
];

export default function AboutSection() {
  const [showModal, setShowModal] = useState(false);

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

        {/* Org Structure Sub-section */}
        <div className="mt-20 border-t border-gray-100 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: colors.primary }}>
              Struktur Organisasi
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-black mb-4">
              Susunan Dewan Pengurus Vis Society
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
              Struktur kepengurusan harian yang berdedikasi untuk menghubungkan dan memfasilitasi kolaborasi bisnis lintas batas.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
              style={{ color: colors.primary, borderColor: colors.primary }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.437 0 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Lihat Bagan Gambar Asli
            </button>
          </div>

          {/* Org Tree Visualization */}
          <div className="flex flex-col items-center">
            {/* Top Leadership */}
            <div className="flex flex-col items-center">
              {/* Ketua Umum 1 */}
              <div
                className="text-white p-5 rounded-2xl shadow-lg w-64 text-center transition-transform hover:scale-[1.02] duration-300"
                style={{ backgroundColor: colors.primary }}
              >
                <p className="font-bold text-lg">Enrico Moreno</p>
                <p className="text-xs opacity-80 mt-1 uppercase tracking-wide">Ketua Umum</p>
              </div>

              {/* Connector line */}
              <div className="w-0.5 h-8 bg-slate-200"></div>

              {/* Ketua Umum 2 */}
              <div
                className="text-white p-5 rounded-2xl shadow-lg w-64 text-center transition-transform hover:scale-[1.02] duration-300"
                style={{ backgroundColor: colors.primary }}
              >
                <p className="font-bold text-lg">Antonius Marco Lombardo</p>
                <p className="text-xs opacity-80 mt-1 uppercase tracking-wide">Ketua Umum</p>
              </div>

              {/* Connector line down to split */}
              <div className="w-0.5 h-8 bg-slate-200"></div>
            </div>

            {/* Departments Row */}
            <div className="w-full relative mt-2">
              {/* Horizontal Line connecting columns on desktop */}
              <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-slate-200 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
                {ORG_DEPARTMENTS.map((dept, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Vertical line from connector to department head on desktop */}
                    <div className="w-0.5 h-6 bg-slate-200 hidden md:block"></div>

                    {/* Department Header/Title */}
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 md:mt-2 text-center">
                      {dept.title}
                    </p>

                    {/* Department Head Card */}
                    <div
                      className="border-2 p-4 rounded-xl shadow-md w-full max-w-[200px] text-center bg-white transition-all hover:shadow-lg duration-300"
                      style={{ borderColor: colors.secondary }}
                    >
                      <p className="font-bold text-sm text-black leading-tight">{dept.head.name}</p>
                      <p className="text-[10px] text-gray-500 mt-1 uppercase font-medium">{dept.head.role}</p>
                    </div>

                    {/* Staff list */}
                    {dept.staff.length > 0 && (
                      <div className="flex flex-col items-center w-full">
                        {dept.staff.map((staff) => (
                          <div key={staff.name} className="flex flex-col items-center w-full">
                            {/* Vertical connector line */}
                            <div className="w-0.5 h-4 bg-slate-200"></div>

                            {/* Staff Card */}
                            <div className="bg-slate-50 border border-slate-200 text-slate-800 p-3 rounded-lg shadow-sm w-full max-w-[170px] text-center hover:bg-slate-100/70 transition-colors duration-200">
                              <p className="font-semibold text-xs text-slate-800">{staff.name}</p>
                              <p className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider">{staff.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fadeIn"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl p-2 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-3 border-b border-slate-100">
                <h4 className="font-bold text-black text-sm md:text-base">Bagan Struktur Organisasi</h4>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-black cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="relative flex-1 overflow-auto p-4 flex justify-center items-center bg-slate-50 min-h-[300px]">
                <Image
                  src="/img/struktur-organisasi.jpg"
                  alt="Bagan Struktur Organisasi Vis Society"
                  width={1200}
                  height={750}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg border border-slate-200"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
