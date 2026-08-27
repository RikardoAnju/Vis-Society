/**
 * Static content for the landing-page sections.
 *
 * These lists hold only the parts that never change per language: image paths,
 * alt text, avatar colours, and the i18n keys for each translated field. The
 * section components stay render-only — they read a list from here and pass the
 * keys straight to `t(...)` at render time.
 */

import type { TranslationKey } from "@constants/translations";

/** Blog / activity articles. */
export interface ArticleContent {
  titleKey: TranslationKey;
  dateKey: TranslationKey;
  excerptKey: TranslationKey;
  image: string;
  alt: string;
}

export const BLOG_ARTICLES: ArticleContent[] = [
  {
    titleKey: "blog.a1.title",
    dateKey: "blog.a1.date",
    excerptKey: "blog.a1.excerpt",
    image: "/img/FOTO MOU/mou-02.webp",
    alt: "Nota Kesepahaman MOU Kerja Sama AI Internasional",
  },
  {
    titleKey: "blog.a2.title",
    dateKey: "blog.a2.date",
    excerptKey: "blog.a2.excerpt",
    image: "/img/FOTO BERSAMA/bersama-03.webp",
    alt: "Suasana Pertemuan Bulanan Member Vis Society di Batam",
  },
  {
    titleKey: "blog.a3.title",
    dateKey: "blog.a3.date",
    excerptKey: "blog.a3.excerpt",
    image: "/img/FOTO SERAH TERIMA PELAKAT/serah-terima-02.webp",
    alt: "Pemberian Plakat Apresiasi Pembicara Triwulan",
  },
];

/** Program cards. */
export interface ProgramContent {
  badgeKey: TranslationKey;
  titleKey: TranslationKey;
  scheduleKey: TranslationKey;
  descKey: TranslationKey;
  image: string;
  alt: string;
}

export const PROGRAMS: ProgramContent[] = [
  {
    badgeKey: "program.monthly.badge",
    titleKey: "program.monthly.title",
    scheduleKey: "program.monthly.schedule",
    descKey: "program.monthly.desc",
    image: "/img/FOTO BERSAMA/bersama-02.webp",
    alt: "Pertemuan bulanan anggota Vis Society",
  },
  {
    badgeKey: "program.triwulan.badge",
    titleKey: "program.triwulan.title",
    scheduleKey: "program.triwulan.schedule",
    descKey: "program.triwulan.desc",
    image: "/img/FOTO SERAH TERIMA PELAKAT/serah-terima-01.webp",
    alt: "Serah terima plakat dengan narasumber ahli",
  },
  {
    badgeKey: "program.tahunan.badge",
    titleKey: "program.tahunan.title",
    scheduleKey: "program.tahunan.schedule",
    descKey: "program.tahunan.desc",
    image: "/img/FOTO MOU/mou-01.webp",
    alt: "Penandatanganan MOU kemitraan internasional",
  },
];

/** Testimonials. */
export interface TestimonialContent {
  nameKey: TranslationKey;
  roleKey: TranslationKey;
  textKey: TranslationKey;
  initials: string;
  color: string;
}

export const TESTIMONIALS: TestimonialContent[] = [
  {
    nameKey: "testimonials.t1.name",
    roleKey: "testimonials.t1.role",
    textKey: "testimonials.t1.text",
    initials: "LJ",
    color: "#053f5c",
  },
  {
    nameKey: "testimonials.t2.name",
    roleKey: "testimonials.t2.role",
    textKey: "testimonials.t2.text",
    initials: "SL",
    color: "#a5dded",
  },
  {
    nameKey: "testimonials.t3.name",
    roleKey: "testimonials.t3.role",
    textKey: "testimonials.t3.text",
    initials: "HW",
    color: "#f1f5f9",
  },
];

/** FAQ accordion entries. */
export interface FaqContent {
  questionKey: TranslationKey;
  answerKey: TranslationKey;
}

export const FAQ_ITEMS: FaqContent[] = [
  { questionKey: "faq.q1.q", answerKey: "faq.q1.a" },
  { questionKey: "faq.q2.q", answerKey: "faq.q2.a" },
  { questionKey: "faq.q3.q", answerKey: "faq.q3.a" },
  { questionKey: "faq.q4.q", answerKey: "faq.q4.a" },
  { questionKey: "faq.q5.q", answerKey: "faq.q5.a" },
  { questionKey: "faq.q6.q", answerKey: "faq.q6.a" },
];
