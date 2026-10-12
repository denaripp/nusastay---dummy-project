export interface GalleryPreviewItem {
  id: string;
  title: string;
  alt: string;
  image: string;
  spanCol: string; // Tailwind col span class
}

export interface LocalExperienceItem {
  id: string;
  time: string;
  tag: string;
  title: string;
  description: string;
  benefit: string;
  image: string;
  imageAlt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  stayInfo: string;
  quote: string;
  rating: number;
}

export interface HomeAmenityItem {
  icon: string;
  title: string;
  description: string;
}

export const homeGalleryPreview: GalleryPreviewItem[] = [
  {
    id: "gal-1",
    title: "Pelataran Utama Kolam Teratai",
    alt: "Kolam teratai pelataran utama paviliun kayu jati saat senja keemasan",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOMvDjEvOUxrsK_yC_1HvThJoPXVV84axDjRX-ztd0-WJQ3SP272MndoI9lRAAE3aMwEnI5ZyU7q9ZMleFvNVKwMetd-pjae8sB4mgYOdCmOHCeq-iquMENKv957-T1UEALdXfNkXUj09-oXMxw8RXm7BVydIRA2P0K7eQKMbCanI1vax2HkGZfmo9G3mAo1F9GDssgh-04OIUogt7kp3Z4W73dR6hOR5me6421bCnmZ54amV0QdBX",
    spanCol: "md:col-span-8",
  },
  {
    id: "gal-2",
    title: "Detail Ukiran Tumpang Sari Jati",
    alt: "Detail ukiran kayu jati tumpang sari plafon joglo tradisional dengan pencahayaan hangat",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrzntRhfNpX6JwvT7ijPQu2bxyGCMWbSQQVDQflg4SyS95tr-5fKklWPfp_Fq2xS2y6u6C7bw_fezHD0cnkHTzQRSl-4tbig1MoGjh5rfXROfnR3kYvmAgvCeMjJgmd5Cm6XHKbOr4i6Y8l5X1ksOBgLNspHYb4dg7my_l7sTT5aSGVsgbKypHJSjsGQlEaRxDO9M6NQD7FoOJv824C5fvU73jAH76qLx4H8nX_65RkpxmqbNoVoci",
    spanCol: "md:col-span-4",
  },
  {
    id: "gal-3",
    title: "Sajian Jamu Sambutan Hangat",
    alt: "Botol jamu kunyit asam dan wedang serai di atas baki kuningan tradisional",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9-S9nK-oYO5ZnFQE3J6aZ7gm84HV3iJol5QKjSL9UfL44EUaWViTEn0hTAv4URKv5ICI9yC5JI5K3aZh-NRQF3TKQN7iDztuBdk8m7Xt14WSu361742ABSkP2TKw4Ct2kcc9tHilVrVkMIPmEPpvNQlAMiJ-FoJo4IhhbVwYWKQD7z2ubxw0xnnBi7SPTmyuLoAbfqKl6e1RsBnjwK3xZ4553mA29ln6Y6kRUtW9TdpxAYn4upUr",
    spanCol: "md:col-span-4",
  },
  {
    id: "gal-4",
    title: "Bilik Mandi Terbuka Tanaman Pakis",
    alt: "Kamar mandi semi terbuka dengan pancuran batu kali dan vegetasi pakis tropis",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsqPDMdLO68xHV0H6QtCKKJDB3PjKhFHIhPBnz7Td2li34qjLA_l46_PcOutx7fH5oHHWo_2h8evnqwFf9FG5pFsF3Vtxu8poGaHGRQbOeOaEMAM19nDqThjNdzdkc4bPxkRv8Z7DhW1kmwOmsn6O5I0aLyhfYLFaBtk0C5sp3FZbZUL03t1nnCBGncS-zus_FVKlmbV2L0HpEUghRmAFekTAKMda5ZLg1OcthCN5QbXZWOX_E-aac",
    spanCol: "md:col-span-4",
  },
  {
    id: "gal-5",
    title: "Beranda Sore Embun Menoreh",
    alt: "Teras kayu santai dengan lentera menyala menghadap siluet perbukitan Menoreh saat senja",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMqf7RI6tfOv5w3pko5uj3GxixCvZdp2PhXEpThYD8k4GLW1rrVSLStNS-rTmE1PcEFzzCJgglbqblSknhqi6zOp7TzE2xke442y4BZv99EotiXGgKMy-pmS6ghVL0Asq68YNyq94ZiEb8N7KY-e0Ze5mKYyIjIY8jbYh9D_6Eox-GdDq3kxEulTEwebNU28aCujcBciPgUdVwMoubSlGoiEPbjscCQDveKcp_wJkqb6bi8UkWOKxw",
    spanCol: "md:col-span-4",
  },
  {
    id: "gal-6",
    title: "Bale Meditasi Fajar Rerimbun",
    alt: "Bale kayu tempat meditasi dan hening di tengah taman hijau tropis",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    spanCol: "md:col-span-12 lg:col-span-12",
  },
];

export const homeLocalExperiences: LocalExperienceItem[] = [
  {
    id: "sunrise-menoreh",
    time: "05.00 WIB",
    tag: "Eksplorasi Pagi",
    title: "Sunrise di Bukit Menoreh",
    description:
      "Menyaksikan selimut kabut tipis terangkat di atas panorama perbukitan purba sambil menikmati secangkir kopi tubruk panas.",
    benefit: "Termasuk panduan pemandu lokal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWBXQr-5hjlhI4ToKAd3cTBThGjzx3HetBZJa1GmU4ga1GvYKZVO5Af07z6o_tWTkEWzFkKaDggeucPVitpWh06qcLMwgCfzBEaJuAeGE5kD0S5fv7MZ3VADo3qbQn6-63qL8hgbxXS3_jEJ0sRNO8ioPOAFxsIMtlRV6Hatft0mSN2Oc8PJYrv3dbvlmIToURljA17LpEgJl2Fbp8JfnrkHcsxcTlGC0_1iGvJodkeXnigsDff_Uv",
    imageAlt: "Pemandangan matahari terbit di atas perbukitan Menoreh berselimut kabut emas",
  },
  {
    id: "candi-bersejarah",
    time: "15.00 WIB",
    tag: "Budaya & Sejarah",
    title: "Eksplorasi Candi Bersejarah",
    description:
      "Kunjungan privat ke situs candi tersembunyi dengan narasi kurasi Mataram kuno dari sejarawan berpengalaman.",
    benefit: "Akses privat & transportasi antar-jemput",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAiebalNkp91sNLRq296QLihiihVcXV6lONTl9ZxxUdtP01anZQSRy4G13Beos6glOalqI8p6arnKw2h95Jzd1eoJOtBLV6EjL21qZJp9V7_TeO3XvSAIvFh9n_xB3KcoYBbV4N4ian3zNYDpaW0qVGOhWhSBSK6M3BIMv2yYh6n-9dCxXLCsTIwCihjOUODG5JRld90d6QIF9zJqzPqKrctfdOBFweTj8ObRPM6tHpvlf1iGppFFEv",
    imageAlt: "Candi batu andesit kuno dengan relief megah dinaungi pohon beringin teduh",
  },
  {
    id: "workshop-batik",
    time: "10.00 WIB",
    tag: "Lokakarya Kriya",
    title: "Workshop Membatik Tradisional",
    description:
      "Belajar menorehkan motif alami menggunakan canting dan pewarna nabati bersama maestro batik tulis desa sekitar.",
    benefit: "Bawa pulang karya kain sendiri",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKPcmAqhIftIaamNT_J9F7C1jMSIdpiiCBmzfS51gG2ZjJ8WxHv977q6VBtV-zp7cblJ_JRHixVSVR66pc2iTUIUipEBbn3JDGTuCIsBEiQaapyHYTVZyMVMA8wb0c65r1OQZy1Uo76hK1sEMZelbCOdx7A2fO88B0-0xVgItJvn2hS6g9nAQSLf1qr1om2LC0pOqeHpqefiVu12HxbljRzdb7-FPbI_zpHgpmkSGl8YaECEobrTbs",
    imageAlt: "Tangan perajin sedang menorehkan cairan lilin malam dengan canting di atas kain mori putih",
  },
];

export const homeTestimonials: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Dian Astuti",
    stayInfo: "Jakarta Selatan · Menginap 3 Malam",
    quote:
      "“Setelah hiruk-pikuk Jakarta, menginap 3 malam di NusaStay terasa seperti menyetel ulang pikiran. Gemericik kolam mata air dan aroma sereh di pendopo adalah kemewahan sejati.”",
    rating: 5,
  },
  {
    id: "testi-2",
    name: "Reza & Winda",
    stayInfo: "Surabaya · Menginap Akhir Pekan",
    quote:
      "“Detail arsitektur joglonya sangat rapi. Kamar mandi semi-outdoor di Deluxe Suite benar-benar menyejukkan. Makanan di restoran terasa sangat autentik tanpa bumbu berlebihan.”",
    rating: 5,
  },
  {
    id: "testi-3",
    name: "Siti Maryam",
    stayInfo: "Bandung · Menginap 5 Malam",
    quote:
      "“Staf memperlakukan kami seperti keluarga sendiri, ramah dan santun. Tempat sempurna untuk menyelesaikan tulisan buku saya tanpa gangguan ponsel.”",
    rating: 5,
  },
];

export const homeBoutiqueAmenities: HomeAmenityItem[] = [
  {
    icon: "Wifi",
    title: "Wi-Fi Cepat",
    description: "Fiber optik stabil di seluruh area pendopo utama maupun kamar tidur.",
  },
  {
    icon: "Wind",
    title: "AC Hening",
    description: "Penyejuk udara senyap hemat energi untuk istirahat lelap tanpa dengung.",
  },
  {
    icon: "Utensils",
    title: "Sarapan Organik",
    description: "Sajian segar panen harian dari kebun mitra petani lereng Magelang.",
  },
  {
    icon: "Waves",
    title: "Kolam Renang Alami",
    description: "Kolam mata air jernih tanpa kaporit diapit tepian taman pakis asri.",
  },
  {
    icon: "Trees",
    title: "Taman Tropis",
    description: "Suaka pakis purba dan koleksi kebun herbal rempah aromatik tradisional.",
  },
  {
    icon: "Laptop",
    title: "Area Kerja Tenang",
    description: "Sudut pendopo ergonomis lengkap dengan soket daya dan teh hangat.",
  },
  {
    icon: "ShieldCheck",
    title: "Parkir Luas & Aman",
    description: "Area parkir privat terdedikasi dengan pengawasan keamanan 24 jam.",
  },
  {
    icon: "ConciergeBell",
    title: "Resepsionis & Concierge",
    description: "Keramahan santun Jawa dan asisten kurasi rute eksplorasi lokal.",
  },
];
