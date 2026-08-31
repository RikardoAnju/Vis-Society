import type { NavLink, Statistic, FAQItem } from "@app-types/index";

export const SITE_NAME = "VIS Society";
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
    question: "Apa manfaat bergabung VIS Society?",
    answer: "Jika Anda adalah individu yang memiliki mindset terus bertumbuh, khususnya dengan cara:\n\na. Suka melakukan networking\nb. Suka bertukar wawasan dan mengembangkan cakrawala Anda\nc. Atau mencari peluang untuk ekspansi bisnis Anda ke depan,\n\nMaka VIS adalah organisasi yang akan mencoba untuk terus mengakomodir kebutuhan Anda untuk bertumbuh tersebut."
  },
  {
    question: "Apa yang membedakan VIS Society dari organisasi lainnya?",
    answer: "a. Umumnya sebuah organisasi jarang konsisten dalam menjalankan visi, misi, dan programnya. Tetapi di VIS, sejak berdiri selalu berusaha konsisten menjalankan Visi, Misi, dan Programnya, dengan tetap menyesuaikan kondisi di lapangan.\n\nb. VIS Society memiliki filosofi Aquarium, yang artinya untuk sebuah organisasi dapat konsisten menjalankan Visi, Misi, dan programnya, maka organisasi tersebut harus dibangun dengan aturan main yang mampu mendukung menjadi sebuah ekosistem."
  },
  {
    question: "Type Membership apa yang cocok buat saya?",
    answer: "Sepanjang Anda punya mindset untuk bertumbuh dalam networking, memperluas wawasan, dan keinginan ekspansi ke depan, maka semua jenis membership cocok untuk Anda, dan bisa Anda pilih sesuai kebutuhan dan kondisi Anda."
  },
  {
    question: "Apakah VIS hanya ada di Batam?",
    answer: "Ya, saat ini VIS masih ada di Batam saja. Tetapi VIS sudah mulai membangun kemitraan dan MOU dengan organisasi di Singapore dan Korea. Ke depan, VIS akan terus mencoba bertumbuh dan ekspansi baik dengan organisasi di negara tetangga, maupun di seluruh Indonesia."
  },
  {
    question: "Apakah dalam setiap pertemuan bulanan, setiap anggota harus membayar biaya pertemuan atau biaya konsumsinya?",
    answer: "Tidak. Biaya membership digunakan untuk membiayai pertemuan networking bulanan, sehingga anggota tidak lagi dikenakan biaya pada pertemuan bulanan. Bahkan di setiap pertemuan, anggota boleh mengajak 1 (satu) relasinya yang berbeda setiap bulan untuk hadir, dan tetap mendapat konsumsi tanpa ada biaya tambahan."
  },
  {
    question: "Apakah Member VIS punya kewajiban atau tugas?",
    answer: "Tugas hanya akan ada bagi para pengurus harian VIS Society saja. Sedangkan untuk anggota VIS disarankan untuk selalu membawa relasi baru di setiap pertemuan networking bulanan yang dihadirinya, sebagaimana yang disebutkan pada FAQ no. 5."
  }
];
