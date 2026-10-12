export interface Facility {
  id: string;
  number: string;
  tag: string;
  eyebrow: string;
  name: string;
  description: string;
  hours: string;
  image: string;
  imageAlt: string;
  features: string[];
}

export interface SupportingService {
  title: string;
  category: string;
  icon: string;
  description: string;
  badge: string;
}

export const facilitiesData: Facility[] = [
  {
    id: "kolam-mata-air",
    number: "01",
    tag: "Tirta Alami",
    eyebrow: "Suaka Air Gunung",
    name: "Kolam Renang Mata Air Pegunungan",
    description:
      "Air pegunungan segar murni tanpa bahan kimia kaporit yang mengalir langsung dari sumber mata air alami perbukitan Menoreh. Diapit oleh susunan bebatuan andesit alami dan pepohonan pakis hutan tropis yang teduh menyegarkan raga.",
    hours: "06.00 – 20.00 WIB",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBW9FGOAVL_faBwsQ9b34oJpf9jb1NE4N780_dQjC8fZSDx0uIqBexZJS7l-VS4ZYmYgXDxcjV2RvWfxHlgGDjP4tffOUjdIwHWq4h9_NPrnacXw7gbponyFikOqnlqhtVUhjXeCqgfl_Al4_rAcZrZmZ7Irh9u2GVcK7DxeyWyCIoHJx3utQ1qT7lsgF3eWsFJm2I9EVwkcTnU5bn5c2OQEcnljF3CFaKjwW2idskGuQm81XUJ2ikM",
    imageAlt:
      "Kolam renang mata air pegunungan yang jernih tenang dikelilingi bebatuan andesit dan tanaman tropis di lereng bukit Menoreh Jawa Tengah.",
    features: [
      "Kedalaman kolam 1.2m – 1.6m dengan area dangkal berendam",
      "Bebas kaporit murni, lembut untuk kulit sensitif",
      "Handuk katun organik & kursi malas berbahan kayu jati utuh",
    ],
  },
  {
    id: "taman-tropis",
    number: "02",
    tag: "Suasana Hening",
    eyebrow: "Hening & Rerimbun",
    name: "Taman Tropis & Jalur Meditasi",
    description:
      "Hamparan kebun herbal aromatik seperti serai, pandan wangi, serta pohon jati lawas. Dilengkapi jalan setapak batu kali untuk jalan hening pagi (kinhin) dengan aroma tanah basah sehabis embun fajar yang membangkitkan kesadaran penuh.",
    hours: "Fajar (05.30) & Senja (Sepanjang Hari)",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Jalan setapak batu kali halus membelah taman tropis asri di pedesaan Jawa Tengah dengan tanaman serai wangi dan pepohonan jati rimbun.",
    features: [
      "Koleksi tanaman jamu tradisional dan flora endemik Jawa",
      "Gazebo Pendopo Meditasi terbuka beralas tikar pandan",
      "Suasana tenang tanpa polusi suara musik sintetis",
    ],
  },
  {
    id: "sarapan-organik",
    number: "03",
    tag: "Hidangan Batin",
    eyebrow: "Pangan Murni & Rasa",
    name: "Sarapan Organik & Dapur Suaka",
    description:
      "Olahan pangan bersih dipetik segar setiap fajar dari kebun pertanian organik lokal warga lereng bukit. Menyajikan jamu beras kencur hangat, nasi liwet desa beraroma santan kelapa murni, serta seduhan teh tubruk harum dengan bongkahan gula batu aren.",
    hours: "06.30 – 11.00 WIB",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Penyajian sarapan tradisional Jawa elegan di atas meja kayu jati rustic, menampilkan sajian nasi liwet hangat, jamu beras kencur, dan cangkir teh tubruk.",
    features: [
      "100% bahan agrikultur lokal tanpa pengawet sintesis",
      "Pilihan menu ramah vegetarian, vegan, dan bebas gluten",
      "Seduhan jamu hangat diramu dari resep keraton tradisional",
    ],
  },
  {
    id: "area-kerja-pendopo",
    number: "04",
    tag: "Pendopo Karya",
    eyebrow: "Fokus & Perenungan",
    name: "Area Kerja Tenang & Pendopo Literasi",
    description:
      "Ruang terbuka semi-outdoor berangin sepoi dengan meja kayu jati solid berukuran lega, soket daya tersembunyi, dan koneksi internet serat optik berkecepatan tinggi. Tempat sempurna untuk membaca, merenung, menulis, atau menyelesaikan karya tanpa distraksi.",
    hours: "24 Jam bagi Penghuni Kamar",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1SvkjVP8yw4ylV4Fh-t4npqRuAUZSLC4p_t1Dwz6R22E-wQ0emk3jERWAAvAWiMXxiXKsZ7c_jUOVdde6btMyvmyt2RGWEUHxb8CtOle9bpLP0jI4kUskoiwqZC0EkJ6j9EsBg5KUR_QU0lERFNZw8SaXQH70OTQcd3Dp1ULltDknD33K-htCUlAp7E7pnmgNaSd7wPnrvY01V_CQKcwiMyvBzwYrAqaMsGtCP0XX7n3rmz1wytCT",
    imageAlt:
      "Pendopo kayu jati semi-terbuka dengan meja kerja kayu panjang kokoh, kursi anyaman rotan ergonomis, dan pemandangan kebun bambu hijau.",
    features: [
      "Wi-Fi simetris 100 Mbps stabil hingga teras luar",
      "Kurasi buku seni rupa, sejarah Jawa, arsitektur, dan puisi",
      "Kudapan sore tradisional & seduhan teh hangat bebas isi ulang",
    ],
  },
];

export const supportingServices: SupportingService[] = [
  {
    title: "Wi-Fi Serat Optik Stabil",
    category: "Konektivitas",
    icon: "Wifi",
    description:
      "Jangkauan nirkabel berkecepatan tinggi dan stabil di seluruh area paviliun, kolam renang, dan sudut taman hening.",
    badge: "Konektivitas Tanpa Batas",
  },
  {
    title: "Parkir Terlindung Luas",
    category: "Keamanan & Akses",
    icon: "Car",
    description:
      "Kawasan parkir privat berkanopi teduh dengan pengawasan petugas keamanan ramah selama 24 jam penuh.",
    badge: "Keamanan Terjamin 24/7",
  },
  {
    title: "Resepsionis & Asisten Tamu",
    category: "Layanan Pramutamu",
    icon: "UserCheck",
    description:
      "Pemandu pribadi yang siaga membantu rute budaya lokal, reservasi sanggar batik, maupun penataan jadwal hening Anda.",
    badge: "Pendampingan Hangat",
  },
  {
    title: "Laundry Linen Organik",
    category: "Perawatan Pakaian",
    icon: "Sparkles",
    description:
      "Perawatan pakaian dan linen menggunakan sabun lerak ramah lingkungan yang lembut, higienis, dan beraroma alami.",
    badge: "Sari Lerak Ramah Bumi",
  },
];
