/**
 * Blog / activity articles — render-only data for the Blog section.
 * Each entry keeps image + alt here and points at the i18n keys for its text.
 */
import type { TranslationKey } from "@constants/translations";

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
    image: "/img/FOTO MOU/mou-03.webp",
    alt: "Penandatangan menunjukkan dokumen MOU kerja sama AI internasional",
  },
  {
    titleKey: "blog.a2.title",
    dateKey: "blog.a2.date",
    excerptKey: "blog.a2.excerpt",
    image: "/img/FOTO BERSAMA/bersama-09.webp",
    alt: "Foto bersama peserta Batam Monthly Meeting Vis Society",
  },
  {
    titleKey: "blog.a3.title",
    dateKey: "blog.a3.date",
    excerptKey: "blog.a3.excerpt",
    image: "/img/FOTO SERAH TERIMA PELAKAT/serah-terima-03.webp",
    alt: "Serah terima plakat apresiasi kepada pembicara spesial triwulan",
  },
];
