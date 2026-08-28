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
  href?: string;
}

export const BLOG_ARTICLES: ArticleContent[] = [
  {
    titleKey: "blog.a4.title",
    dateKey: "blog.a4.date",
    excerptKey: "blog.a4.excerpt",
    image: "/img/FOTO MOU/mou-01.webp",
    alt: "Suasana pertemuan dan pembahasan peluang kerja sama regional",
    href: "https://metropolis.batampos.co.id/batam-bidik-gelombang-investasi-baru-dari-negara-tetangga/",
  },
  {
    titleKey: "blog.a5.title",
    dateKey: "blog.a5.date",
    excerptKey: "blog.a5.excerpt",
    image: "/img/FOTO BERSAMA/bersama-14.webp",
    alt: "Cuplikan konten media sosial Batam Pos tentang kegiatan dan jejaring bisnis",
    href: "https://www.instagram.com/reel/DbegNUGyfKr/?igsh=MXkxZWN0ZTkwZWhkdQ==",
  },
  {
    titleKey: "blog.a6.title",
    dateKey: "blog.a6.date",
    excerptKey: "blog.a6.excerpt",
    image: "/img/FOTO SERAH TERIMA PELAKAT/serah-terima-01.webp",
    alt: "Publikasi media sosial Batam Pos tentang aktivitas komunitas dan kolaborasi",
    href: "https://www.instagram.com/p/DaRkR4FmoDq/?igsh=MWg4NHdwdGxrZXRoaQ==",
  },
];
