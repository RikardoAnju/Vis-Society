/**
 * Program cards.
 *
 * Render-only data for the Programs section: image + alt here, i18n keys for the
 * translated text.
 */

import type { TranslationKey } from "@constants/translations";

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
    alt: "Pertemuan bulanan anggota VIS Society",
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
