// Site configuration and constants
import type { NavLink, Statistic } from "@app-types/index";

export const SITE_NAME = "Vis Society";
export const SITE_DESCRIPTION = "Building Tomorrow's Sustainable Future";

export const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Program", href: "#programs" },
  { label: "Galeri", href: "#gallery" },
];

export const STATISTICS: Statistic[] = [
  { label: "Berdiri Sejak", value: "2025" },
  { label: "Simpatisan", value: "82+" },
  { label: "Anggota Terdaftar", value: "47+" },
  { label: "Negara Cross-Border", value: "3" },
];

export const MISSION_POINTS = [
  "Jejaring (Networking)",
  "Pertukaran Pengetahuan (Knowledge Exchange)",
  "Kolaborasi Strategis (Strategic Collaboration)",
  "Peluang Regional/Investasi (Regional Opportunities/Investment)",
];
