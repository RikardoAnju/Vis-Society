'use client';

import { useState } from "react";
import Image from "next/image";
import { colors } from "@lib/color";
import { STATISTICS } from "@constants/index";
import AnimatedCounter from "@components/ui/AnimatedCounter";
import ScrollReveal from "@components/ui/ScrollReveal";
import { useLanguage } from "@lib/LanguageContext";
import { TranslationKey } from "@constants/translations";

const ORG_DEPARTMENTS = (t: (key: TranslationKey) => string) => [
  {
    title: "Registrasi & Keanggotaan",
    head: { name: "Yoseph Eduardus", role: t("about.org.roleKetuaUmum") === "General Chairman" ? "Registration & Membership" : "Registrasi dan Keanggotaan" },
    staff: [
      { name: "Sandedex", role: t("about.org.roleKetuaUmum") === "General Chairman" ? "Registration Staff" : "Staf Registrasi" },
      { name: "Septian E Wardoyo", role: t("about.org.roleKetuaUmum") === "General Chairman" ? "Registration Staff" : "Staf Registrasi" }
    ]
  },
  {
    title: "Human Development",
    head: { name: "Yohanes Ad Purnomo", role: "Human Development" },
    staff: []
  },
  {
    title: "Hubungan Internasional",
    head: { name: "Bisa Mulia", role: t("about.org.roleKetuaUmum") === "General Chairman" ? "International Relations" : "Hubungan Internasional" },
    staff: [
      { name: "Michael Dimas", role: t("about.org.roleKetuaUmum") === "General Chairman" ? "IR Staff" : "Staf Hubungan Internasional" }
    ]
  },
  {
    title: "Sekretariat Jenderal",
    head: { name: "Priyo", role: t("about.org.roleKetuaUmum") === "General Chairman" ? "Secretary General" : "Sekjen" },
    staff: [
      { name: "Muhammad Andika", role: t("about.org.roleKetuaUmum") === "General Chairman" ? "SG Staff" : "Staf Sekjen" },
      { name: "Adrian", role: t("about.org.roleKetuaUmum") === "General Chairman" ? "SG Staff" : "Staf Sekjen" }
    ]
  },
  {
    title: "Bendahara Umum",
    head: { name: "Elisabeth", role: t("about.org.roleKetuaUmum") === "General Chairman" ? "General Treasurer" : "Bendahara Umum" },
    staff: [
      { name: "Ditha", role: t("about.org.roleKetuaUmum") === "General Chairman" ? "Treasurer Staff" : "Staf Bendahara" }
    ]
  }
];

export default function AboutSection() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();
  const departments = ORG_DEPARTMENTS(t);

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <ScrollReveal animation="slide-up">
          <h2 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: colors.primary }}>
            {t("about.label")}
          </h2>
        </ScrollReveal>

        {/* Heading + Description */}
        <ScrollReveal animation="slide-up" delay={100}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-black">
              {t("about.heading")}
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {t("about.desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* Visi / Misi / Nilai Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Visi */}
          <ScrollReveal animation="slide-up" delay={150} className="flex">
            <div className="p-8 rounded-xl bg-gray-50 border border-transparent transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-200/50 hover:bg-white hover:border-slate-100 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="black" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.437 0 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-xl font-bold text-black">{t("about.vision.title")}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("about.vision.text")}
              </p>
            </div>
          </ScrollReveal>

          {/* Misi - Highlighted */}
          <ScrollReveal animation="slide-up" delay={300} className="flex">
            <div className="p-8 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-950/20 flex-1" style={{ backgroundColor: colors.primary }}>
              <div className="flex items-center gap-3 mb-5">
                <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="white" strokeWidth="1.6" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h4 className="text-xl font-bold text-white">{t("about.mission.title")}</h4>
              </div>
              <ul className="text-white/85 text-xs space-y-3.5">
                <li>
                  <strong className="text-white block text-sm font-semibold mb-0.5">{t("about.mission.networking.title")}</strong>
                  {t("about.mission.networking.text")}
                </li>
                <li>
                  <strong className="text-white block text-sm font-semibold mb-0.5">{t("about.mission.exchange.title")}</strong>
                  {t("about.mission.exchange.text")}
                </li>
                <li>
                  <strong className="text-white block text-sm font-semibold mb-0.5">{t("about.mission.collab.title")}</strong>
                  {t("about.mission.collab.text")}
                </li>
                <li>
                  <strong className="text-white block text-sm font-semibold mb-0.5">{t("about.mission.opportunity.title")}</strong>
                  {t("about.mission.opportunity.text")}
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Core Values */}
          <ScrollReveal animation="slide-up" delay={450} className="flex">
            <div className="p-8 rounded-xl bg-gray-50 flex flex-col justify-between border border-transparent transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-200/50 hover:bg-white hover:border-slate-100 flex-1">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="black" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  <h4 className="text-xl font-bold text-black">{t("about.coreValues.title")}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  <strong>{t("about.coreValues.text1")}</strong>{t("about.coreValues.text2")}
                </p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {t("about.coreValues.text3")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-12" />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATISTICS.map((stat, idx) => {
            const label = stat.label === "Berdiri Sejak" 
              ? (t("about.org.roleKetuaUmum") === "General Chairman" ? "Established Since" : "Berdiri Sejak")
              : stat.label === "Simpatisan"
              ? (t("about.org.roleKetuaUmum") === "General Chairman" ? "Sympathizers" : "Simpatisan")
              : stat.label === "Anggota Terdaftar"
              ? (t("about.org.roleKetuaUmum") === "General Chairman" ? "Registered Members" : "Anggota Terdaftar")
              : (t("about.org.roleKetuaUmum") === "General Chairman" ? "Cross-Border Countries" : "Negara Cross-Border");
            return (
              <ScrollReveal key={stat.label} animation="scale-up" delay={idx * 100} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: colors.primary }}>
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-sm text-gray-500">{label}</p>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Org Structure Sub-section */}
        <div className="mt-20 border-t border-gray-100 pt-16">
          <ScrollReveal animation="slide-up" className="text-center mb-12">
            <h2 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: colors.primary }}>
              {t("about.org.label")}
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-black mb-4">
              {t("about.org.heading")}
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
              {t("about.org.desc")}
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
              {t("about.org.imageBtn")}
            </button>
          </ScrollReveal>

          {/* Org Tree Visualization */}
          <div className="flex flex-col items-center">
            {/* Top Leadership */}
            <div className="flex flex-col items-center">
              {/* Ketua Umum */}
              <ScrollReveal animation="slide-up">
                <div
                  className="text-white p-5 rounded-2xl shadow-lg w-64 md:w-64 text-center transition-transform hover:scale-[1.02] duration-300"
                  style={{ backgroundColor: colors.primary }}
                >
                  <p className="font-bold text-lg">Enrico Moreno</p>
                  <p className="text-xs opacity-80 mt-1 uppercase tracking-wide">{t("about.org.roleKetuaUmum")}</p>
                </div>
              </ScrollReveal>

              {/* Connector line */}
              <div className="w-0.5 h-6 bg-slate-200"></div>

              {/* Co Founders */}
              <ScrollReveal animation="slide-up" delay={150} className="flex flex-col items-center relative">
                <div className="flex gap-4 md:gap-6 flex-wrap justify-center items-center flex-col md:flex-row">
                  <div
                    className="text-white p-4 rounded-2xl shadow-lg w-64 md:w-52 text-center transition-transform hover:scale-[1.02] duration-300"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <p className="font-bold text-sm">Muga Prasada Bhakti</p>
                    <p className="text-[10px] opacity-80 mt-1 uppercase tracking-wide">{t("about.org.roleCoFounder")}</p>
                  </div>
                  
                  {/* Vertical connector line between Co-Founders ONLY on mobile when they stack */}
                  <div className="w-0.5 h-4 bg-slate-200 md:hidden"></div>

                  <div
                    className="text-white p-4 rounded-2xl shadow-lg w-64 md:w-52 text-center transition-transform hover:scale-[1.02] duration-300"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <p className="font-bold text-sm">Y Seno Prakoso</p>
                    <p className="text-[10px] opacity-80 mt-1 uppercase tracking-wide">{t("about.org.roleCoFounder")}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Connector line */}
              <div className="w-0.5 h-6 bg-slate-200"></div>

              {/* Ketua Harian */}
              <ScrollReveal animation="slide-up" delay={300}>
                <div
                  className="text-white p-5 rounded-2xl shadow-lg w-64 md:w-64 text-center transition-transform hover:scale-[1.02] duration-300"
                  style={{ backgroundColor: colors.primary }}
                >
                  <p className="font-bold text-lg">Antonius Marco Lombardo</p>
                  <p className="text-xs opacity-80 mt-1 uppercase tracking-wide">{t("about.org.roleKetuaHarian")}</p>
                </div>
              </ScrollReveal>

              {/* Connector line down to split */}
              <div className="w-0.5 h-8 bg-slate-200"></div>
            </div>

            {/* Departments Row */}
            <div className="w-full relative mt-2">
              {/* Horizontal Line connecting columns on desktop */}
              <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-slate-200 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 justify-items-center relative">
                {departments.map((dept, idx) => (
                  <ScrollReveal key={idx} animation="slide-up" delay={idx * 100 + 100} className="w-full max-w-[290px] md:max-w-none flex flex-col items-center">
                    <div className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100/80 md:bg-transparent md:border-0 md:p-0 w-full flex flex-col items-center">
                      {/* Vertical line from connector to department head on desktop */}
                      <div className="w-0.5 h-6 bg-slate-200 hidden md:block"></div>

                      {/* Department Header/Title */}
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 md:mt-2 text-center">
                        {dept.title === "Registrasi & Keanggotaan" && t("about.org.roleKetuaUmum") === "General Chairman" 
                          ? "Registration & Membership"
                          : dept.title === "Hubungan Internasional" && t("about.org.roleKetuaUmum") === "General Chairman"
                          ? "International Relations"
                          : dept.title === "Sekretariat Jenderal" && t("about.org.roleKetuaUmum") === "General Chairman"
                          ? "General Secretariat"
                          : dept.title === "Bendahara Umum" && t("about.org.roleKetuaUmum") === "General Chairman"
                          ? "General Treasurer"
                          : dept.title}
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
                              <div className="bg-white border border-slate-200 text-slate-800 p-3 rounded-lg shadow-sm w-full max-w-[170px] text-center hover:bg-slate-50 transition-colors duration-200">
                                <p className="font-semibold text-xs text-slate-800">{staff.name}</p>
                                <p className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider">{staff.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Sub-section */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <ScrollReveal animation="slide-up" className="text-center mb-10">
            <h2 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: colors.primary }}>
              {t("about.partners.label")}
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-black mb-4">
              {t("about.partners.heading")}
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              {t("about.partners.desc")}
            </p>
          </ScrollReveal>

          <div className="flex items-center justify-center gap-4 md:gap-16 mt-8">
            {/* Partner 1: Aiving */}
            <ScrollReveal animation="scale-up" delay={100}>
              <div className="group flex items-center justify-center p-3 md:p-6 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300 w-36 h-20 md:w-52 md:h-28 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50">
                <Image
                  src="/img/aiving.webp"
                  alt="Aiving Partner Logo"
                  width={120}
                  height={120}
                  className="max-h-12 md:max-h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Partner 2: Match Advisory */}
            <ScrollReveal animation="scale-up" delay={250}>
              <div className="group flex items-center justify-center p-3 md:p-6 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300 w-36 h-20 md:w-52 md:h-28 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50">
                <Image
                  src="/img/match-advisory.webp"
                  alt="Match Advisory Partner Logo"
                  width={120}
                  height={120}
                  className="max-h-14 md:max-h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </ScrollReveal>
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
                <h4 className="font-bold text-black text-sm md:text-base">{t("about.org.modalTitle")}</h4>
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
                  src="/img/struktur-organisasi-v2.jpg"
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
