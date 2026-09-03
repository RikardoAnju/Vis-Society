

import type { TranslationKey } from "@constants/translations";

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
    initials: "PR",
    color: "#053f5c",
  },
  {
    nameKey: "testimonials.t2.name",
    roleKey: "testimonials.t2.role",
    textKey: "testimonials.t2.text",
    initials: "SD",
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
