

import type { TranslationKey } from "@constants/translations";

export interface ProgramContent {
  slug: string;
  badgeKey: TranslationKey;
  titleKey: TranslationKey;
  scheduleKey: TranslationKey;
  descKey: TranslationKey;
  detailTitleKey: TranslationKey;
  detailFocusKey: TranslationKey;
  detailFormatKey: TranslationKey;
  detailOutcomeKey: TranslationKey;
  image: string;
  alt: string;
}

export const PROGRAMS: ProgramContent[] = [
  {
    slug: "pertemuan-bulanan",
    badgeKey: "program.monthly.badge",
    titleKey: "program.monthly.title",
    scheduleKey: "program.monthly.schedule",
    descKey: "program.monthly.desc",
    detailTitleKey: "program.monthly.detailTitle",
    detailFocusKey: "program.monthly.detailFocus",
    detailFormatKey: "program.monthly.detailFormat",
    detailOutcomeKey: "program.monthly.detailOutcome",
    image: "/img/monthly-meeting.webp",
    alt: "Pertemuan bulanan VIS Society dengan para anggota",
  },
  {
    slug: "pertemuan-tematik-expert",
    badgeKey: "program.triwulan.badge",
    titleKey: "program.triwulan.title",
    scheduleKey: "program.triwulan.schedule",
    descKey: "program.triwulan.desc",
    detailTitleKey: "program.triwulan.detailTitle",
    detailFocusKey: "program.triwulan.detailFocus",
    detailFormatKey: "program.triwulan.detailFormat",
    detailOutcomeKey: "program.triwulan.detailOutcome",
    image: "/img/quarterly-semiannual-meeting.webp",
    alt: "Anggota VIS Society dalam pertemuan triwulanan atau semesteran",
  },
  {
    slug: "annual-gathering-mou",
    badgeKey: "program.tahunan.badge",
    titleKey: "program.tahunan.title",
    scheduleKey: "program.tahunan.schedule",
    descKey: "program.tahunan.desc",
    detailTitleKey: "program.tahunan.detailTitle",
    detailFocusKey: "program.tahunan.detailFocus",
    detailFormatKey: "program.tahunan.detailFormat",
    detailOutcomeKey: "program.tahunan.detailOutcome",
    image: "/img/semiannual-annual-forum.webp",
    alt: "Forum VIS Society dengan pembicara dan peserta acara",
  },
];
