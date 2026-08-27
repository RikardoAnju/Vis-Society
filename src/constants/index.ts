import type { NavLink, Statistic, FAQItem } from "@app-types/index";

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

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Apakah Vis hanya ada di Batam?",
    answer: "Ya, saat ini Vis masih ada di Batam saja. Tetapi Vis sudah mulai membangun kemitraan dan MOU dengan organisasi di Singapore dan Korea. Ke depan, Vis akan terus mencoba bertumbuh dan ekspansi baik dengan organisasi di negara tetangga, maupun di seluruh Indonesia."
  },
  {
    question: "Apakah dalam setiap pertemuan bulanan, setiap anggota harus membayar biaya pertemuan atau biaya konsumsinya?",
    answer: "Tidak. Biaya membership digunakan untuk membiayai pertemuan networking bulanan, sehingga anggota tidak lagi dikenakan biaya pada pertemuan bulanan. Bahkan di setiap pertemuan, anggota boleh mengajak 1 (satu) relasinya yang berbeda setiap bulan untuk hadir, dan tetap mendapat konsumsi tanpa ada biaya tambahan."
  },
  {
    question: "Apakah Member Vis punya kewajiban atau tugas?",
    answer: "Tugas hanya akan ada bagi para pengurus harian Vis Society saja. Sedangkan untuk anggota Vis disarankan untuk selalu membawa relasi baru di setiap pertemuan networking bulanan yang dihadirinya, sebagaimana yang disebutkan pada pertanyaan sebelumnya (anggota diperbolehkan mengajak satu relasi berbeda setiap bulan)."
  }
];
