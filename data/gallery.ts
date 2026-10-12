export type GalleryCategory = "Kamar" | "Fasilitas" | "Suasana";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  kategori: GalleryCategory;
  caption: string;
  title: string;
  aspect?: "landscape" | "portrait" | "square";
}

export const galleryCategories: { label: string; value: "Semua" | GalleryCategory }[] = [
  { label: "Semua", value: "Semua" },
  { label: "Kamar", value: "Kamar" },
  { label: "Fasilitas", value: "Fasilitas" },
  { label: "Suasana", value: "Suasana" },
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    src: "/images/gallery/gallery-1.webp",
    alt: "Bilik Deluxe Teras Menoreh dengan ranjang kayu dan kelambu lembut",
    kategori: "Kamar",
    title: "Deluxe Teras Menoreh",
    caption:
      "Bilik Deluxe Teras Menoreh dengan ranjang kayu bertiang kelambu linen lembut bermandikan cahaya alami fajar.",
    aspect: "landscape",
  },
  {
    id: "gal-2",
    src: "/images/gallery/gallery-2.webp",
    alt: "Pondok kayu jati gaya gladak pedesaan dengan teras santai",
    kategori: "Kamar",
    title: "Standard Gladak Kayu Jati",
    caption:
      "Pondok kayu jati lawas bergaya gladak pedesaan dengan teras santai menghadap taman botani dan kebun herbal.",
    aspect: "portrait",
  },
  {
    id: "gal-3",
    src: "/images/gallery/gallery-3.webp",
    alt: "Heritage Joglo Suite dengan arsitektur tumpang sari megah",
    kategori: "Kamar",
    title: "Heritage Joglo Suite",
    caption:
      "Ruang peristirahatan Heritage Joglo Suite dengan sentuhan arsitektur tumpang sari keraton dan suasana hening.",
    aspect: "square",
  },
  {
    id: "gal-4",
    src: "/images/gallery/gallery-4.webp",
    alt: "Sudut baca dan daybed santai bertekstur linen alami",
    kategori: "Kamar",
    title: "Sudut Santai & Daybed",
    caption:
      "Sudut baca dan daybed santai bertekstur linen alami dengan pemandangan rimbun lembah hijau Menoreh.",
    aspect: "landscape",
  },
  {
    id: "gal-5",
    src: "/images/gallery/gallery-5.webp",
    alt: "Kolam renang mata air batu kali alami dinaungi pepohonan pakis",
    kategori: "Fasilitas",
    title: "Kolam Mata Air Menoreh",
    caption:
      "Kolam renang mata air batu kali alami yang sejuk dan jernih, dinaungi pepohonan pakis dan palem tropis.",
    aspect: "landscape",
  },
  {
    id: "gal-6",
    src: "/images/gallery/gallery-6.webp",
    alt: "Sajian sarapan organik panen lokal dan racikan wedang herbal",
    kategori: "Fasilitas",
    title: "Sarapan Kebun & Jamu Tradisional",
    caption:
      "Sajian sarapan organik dari panen kebun lokal serta seduhan wedang herbal hangat racikan khas Jawa Tengah.",
    aspect: "portrait",
  },
  {
    id: "gal-7",
    src: "/images/gallery/gallery-7.webp",
    alt: "Paviliun terbuka di tepi taman untuk meditasi dan yoga fajar",
    kategori: "Fasilitas",
    title: "Bale Meditasi & Paviliun Hening",
    caption:
      "Paviliun kayu terbuka di tepi taman untuk sesi yoga fajar, meditasi hening, dan pemulihan napas santai.",
    aspect: "square",
  },
  {
    id: "gal-8",
    src: "/images/gallery/gallery-8.webp",
    alt: "Area kerja tenang beralas kayu jati dengan pencahayaan alami",
    kategori: "Fasilitas",
    title: "Pojok Baca & Ruang Kerja Hening",
    caption:
      "Area kerja tenang beralas kayu jati dengan pencahayaan alami dan semilir angin perbukitan yang menyegarkan pikiran.",
    aspect: "landscape",
  },
  {
    id: "gal-9",
    src: "/images/gallery/gallery-9.webp",
    alt: "Selimut kabut pagi perlahan membuka lanskap perbukitan Menoreh",
    kategori: "Suasana",
    title: "Kabut Fajar Perbukitan Menoreh",
    caption:
      "Selimut kabut pagi perlahan membuka lanskap hijau perbukitan Menoreh saat sinar mentari keemasan terbit.",
    aspect: "landscape",
  },
  {
    id: "gal-10",
    src: "/images/gallery/gallery-10.webp",
    alt: "Jalan setapak bebatuan alami di sela tanaman herbal dan bambu",
    kategori: "Suasana",
    title: "Jalan Setapak Kebun Botani",
    caption:
      "Jalan setapak bebatuan alami di sela rimbun tanaman herbal dan rumpun bambu yang asri menghantarkan ketenangan.",
    aspect: "portrait",
  },
  {
    id: "gal-11",
    src: "/images/gallery/gallery-11.webp",
    alt: "Pendar temaram lentera menyala di pelataran kayu jati saat senja",
    kategori: "Suasana",
    title: "Pendar Lentera Senja di Pelataran",
    caption:
      "Pendar temaram lentera menyala di pelataran kayu jati saat senja berganti malam, menciptakan suasana magis dan syahdu.",
    aspect: "square",
  },
  {
    id: "gal-12",
    src: "/images/gallery/gallery-12.webp",
    alt: "Siluet atap tajug joglo di antara rimbun dedaunan tropis saat petang",
    kategori: "Suasana",
    title: "Siluet Arsitektur Joglo Petang",
    caption:
      "Siluet atap tajug joglo di antara rimbun dedaunan tropis dalam keheningan senja perbukitan Klaten.",
    aspect: "landscape",
  },
];
