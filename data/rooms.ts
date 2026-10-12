export interface RoomAmenity {
  name: string;
  icon: string;
  description?: string;
}

export interface RoomRule {
  title: string;
  description: string;
  icon: string;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  badge?: string;
  price: number;
  priceFormatted: string;
  capacity: number;
  capacityText: string;
  size: string;
  bedType: string;
  view: string;
  rating: number;
  reviewCount: number;
  description: string;
  longDescription: string;
  mainImage: string;
  galleryImages: string[];
  amenities: RoomAmenity[];
  rules: RoomRule[];
  featured?: boolean;
}

export const roomsData: Room[] = [
  {
    id: "standard-gladak",
    slug: "standard-gladak",
    name: "Standard Gladak",
    subtitle: "Pondok kayu jati pedesaan dengan teras taman tropis yang asri dan tenang.",
    category: "Pondok Gladak Asli",
    badge: "Bilik Tenang",
    price: 450000,
    priceFormatted: "Rp450.000",
    capacity: 2,
    capacityText: "2 Tamu Dewasa",
    size: "24 m²",
    bedType: "Queen Bed (160×200)",
    view: "Taman Herbal Menoreh",
    rating: 4.88,
    reviewCount: 52,
    description: "Kesejukan pondok kayu jati tradisional dengan beranda santai menghadap taman herbal Menoreh.",
    longDescription: "Standard Gladak dirancang menyerupai lumbung dan bilik kayu jati lawas khas pedesaan Jawa. Dilengkapi dinding kayu berpori alami yang sejuk, ranjang kayu bertiang dengan kelambu linen lembut, serta teras pribadi dengan pemandangan rimbun kebun botani. Cocok untuk penjelajah solo atau pasangan yang mencari ketenangan autentik.",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7-LZsVwE6YVumn5D-GPSxBq-s5IWG3dFDQ1mfzuGPDLKYP8Tp_nRrlC1I_Q4MkdQDUQuAesjjYtZ6bPbD8ERYAc-sC3Y-gKiAhm9xiU5iIDuDn3QCR1arBT_siUZP0YwCdxqYzpXRaHMusYyFNyATBrdltTlqWylne332p9dSc8LNsaU-z8yDV-AzeelsbiUbRpghvr3B7VmNhRyXnzfemwL7_cF2X97cD8795bLy_zrVnUEU6chc",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7-LZsVwE6YVumn5D-GPSxBq-s5IWG3dFDQ1mfzuGPDLKYP8Tp_nRrlC1I_Q4MkdQDUQuAesjjYtZ6bPbD8ERYAc-sC3Y-gKiAhm9xiU5iIDuDn3QCR1arBT_siUZP0YwCdxqYzpXRaHMusYyFNyATBrdltTlqWylne332p9dSc8LNsaU-z8yDV-AzeelsbiUbRpghvr3B7VmNhRyXnzfemwL7_cF2X97cD8795bLy_zrVnUEU6chc",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      { name: "Wi-Fi Serat Optik Cepat", icon: "Wifi", description: "Hingga 50 Mbps stabil" },
      { name: "Kipas Plafon Antik", icon: "Wind", description: "Sirkulasi angin alami sejuk" },
      { name: "Kamar Mandi Semi-Outdoor", icon: "ShowerHead", description: "Pancuran air hangat batu kali" },
      { name: "Teras Santai Kebun", icon: "Coffee", description: "Kursi sedan rotan khas Jawa" },
      { name: "Sarapan Organik Kebun", icon: "Utensils", description: "Nasi liwet / bubur tradisional" },
      { name: "Perlengkapan Mandi Herbal", icon: "Sparkles", description: "Sabun sereh & minyak kelapa murni" },
    ],
    rules: [
      { title: "Waktu Kedatangan & Keberangkatan", description: "Check-in dibuka pukul 14.00 WIB • Check-out selambatnya pukul 12.00 WIB.", icon: "Clock" },
      { title: "Kawasan Bersih Asap Rokok", description: "Dilarang merokok di dalam bilik kamar. Area merokok khusus tersedia di sudut terbuka beranda.", icon: "CigaretteOff" },
      { title: "Jam Hening (Pranawa Santai)", description: "Mulai pukul 21.00 WIB demi menjaga kualitas istirahat dan ketenangan bersama.", icon: "VolumeX" },
      { title: "Hewan Peliharaan", description: "Mohon maaf, demi kenyamanan bersama dan konservasi fauna lokal, hewan peliharaan tidak diperkenankan.", icon: "ShieldAlert" },
    ],
  },
  {
    id: "deluxe-teras-menoreh",
    slug: "deluxe-teras-menoreh",
    name: "Deluxe Teras Menoreh",
    subtitle: "Keteduhan bilik berlantai terakota dengan beranda jati lapang menghadap keheningan lembah Menoreh.",
    category: "Favorit Tamu • Suaka Menoreh",
    badge: "Favorit Tamu",
    price: 650000,
    priceFormatted: "Rp650.000",
    capacity: 3,
    capacityText: "3 Tamu Dewasa",
    size: "32 m²",
    bedType: "King Bed + Single Daybed",
    view: "Lembah Perbukitan Menoreh",
    rating: 4.96,
    reviewCount: 84,
    description: "Bilik berlantai terakota dengan beranda jati lapang menghadap keheningan lembah Menoreh, disapa embun dan halimun sejuk setiap fajar.",
    longDescription: "Deluxe Teras Menoreh memadukan keindahan material alami terakota buatan tangan dengan furnitur jati kokoh. Teras luasnya menghadap panorama lembah hijau Menoreh, tempat sempurna untuk menikmati secangkir teh serai hangat di pagi berkabut. Kamar mandi semi-terbuka dilengkapi bak rendam teraso bundar yang memanjakan tubuh setelah beraktivitas.",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB65UkprKSsF1aLelUm9xn0iqqrruNUjQi8wXZddtDgr53M6I94KQ5nYvc5qSvnBeW0kL1P4YP4cbOCAqSOpGwjh90jgnePJRkCmzSC_dUQnHmqwXPzsP5u-YS_gJFBfHGGex7FBzc2AYJsAoeyn7sOZfKee-IeYirvWx5B98W7TwVCmvrjsbSGUshjcfu7D3CEbde1NNmRTpmrGZnVFA40x36EvLv-hG_3I75qIukqdg8vGjISGmPY",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB65UkprKSsF1aLelUm9xn0iqqrruNUjQi8wXZddtDgr53M6I94KQ5nYvc5qSvnBeW0kL1P4YP4cbOCAqSOpGwjh90jgnePJRkCmzSC_dUQnHmqwXPzsP5u-YS_gJFBfHGGex7FBzc2AYJsAoeyn7sOZfKee-IeYirvWx5B98W7TwVCmvrjsbSGUshjcfu7D3CEbde1NNmRTpmrGZnVFA40x36EvLv-hG_3I75qIukqdg8vGjISGmPY",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZfoskk_4re9B6u0-Ozi2I7e5pg6nTvKHObuHEYWHubxr9MloClakFpvzrQdSZBOkyBcAVNCe-2znrawPXLMIuYgp_qjAk_BqZ9ezQZxw-hAlUvaMZdPiDU8rZHlPNQv7njVhJWNkaud7S97LBC9rVndOQwRsv22gMdHg3c1oQX2IzeHSHXp6lL1zQPXCX55J1UVjZiB6F-akmWPNZa8_GwaitDSnOH1oTssLpk498Y2t8pJOcjmQK",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7wRs_eEmL16Sk_V3U68L7iK8J4JfMfrNmVJ4NjQR5XtdAAVhkH1Y6zR9jT14r1LwnbGyicb1C35C8w612Egu26UeQaJRxTcaLaw1lj-exnbe5VOd0nr-7ccFEH90-WZwm8ITAFnhTwTYxeVi_ANeFavssfsUlNQYP0IWoXzz9rTf6gFxIfc4-fk4ZxNRrpJzMPbdJoYURALbrnJQIPQwgE1V6uGCN6QtfV2XJXiv9ugaqSGgGeeXo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCewlP2X4V17DK_yL5OMTyx_r-euonLv26rQEu8biovByMkPz2YmKVJE5FhtVffRz6hlKaqWKXRUBs695cfB5OVrDBhyVuYoLs2sW3sBh_D2aCNp1celwMZvZUuxkkQtoqe8C9CjuaekcBz1GljFDbSN2HEiXCnS66axfJ1HHxtv-v0Thng6alMDp7s1UjsCT2UWH4X8E6YyjgEWqXqof2pN-Nbt-BIofSRGtxMd25J-NGZh8VyCa6f",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      { name: "Wi-Fi Serat Optik Cepat", icon: "Wifi", description: "Hingga 100 Mbps stabil" },
      { name: "Penyejuk Udara Hening", icon: "Wind", description: "Sistem inverter senyap bisikan" },
      { name: "Bak Rendam Teraso Alami", icon: "Bath", description: "Semi-outdoor dengan garam rendam herbal" },
      { name: "Teras Pribadi Lembah", icon: "Armchair", description: "Dilengkapi daybed santai rotan" },
      { name: "Sarapan Organik Kebun", icon: "Utensils", description: "Pilihan menu Jawa atau Kontinental" },
      { name: "Seduhan Teh & Kopi Menoreh", icon: "Coffee", description: "French press & teko gerabah harian" },
      { name: "Perlengkapan Mandi Herbal", icon: "Sparkles", description: "Aroma serai wangi & pandan alami" },
      { name: "Sandal Bilik & Kimono Linen", icon: "Shirt", description: "Bahan tenun serat bambu lembut" },
    ],
    rules: [
      { title: "Waktu Kedatangan & Keberangkatan", description: "Check-in dibuka pukul 14.00 WIB • Check-out selambatnya pukul 12.00 WIB.", icon: "Clock" },
      { title: "Kawasan Bersih Asap Rokok", description: "Dilarang merokok di dalam bilik kamar. Area merokok khusus tersedia di sudut terbuka beranda.", icon: "CigaretteOff" },
      { title: "Jam Hening (Pranawa Santai)", description: "Mulai pukul 21.00 WIB demi menjaga kualitas istirahat dan ketenangan bersama.", icon: "VolumeX" },
      { title: "Hewan Peliharaan", description: "Mohon maaf, demi kenyamanan bersama dan konservasi fauna lokal, hewan peliharaan tidak diperkenankan.", icon: "ShieldAlert" },
    ],
    featured: true,
  },
  {
    id: "heritage-joglo-suite",
    slug: "heritage-joglo-suite",
    name: "Heritage Joglo Suite",
    subtitle: "Koleksi paviliun pusaka agung dengan tumpangsari megah, kolam rendam privat, dan layanan butler teh.",
    category: "Paviliun Tertinggi Suaka",
    badge: "Paviliun Pusaka",
    price: 950000,
    priceFormatted: "Rp950.000",
    capacity: 4,
    capacityText: "4 Tamu Dewasa",
    size: "48 m²",
    bedType: "Super King Bed + 2 Twin Tatami",
    view: "Gunung Merapi & Hutan Tropis",
    rating: 4.98,
    reviewCount: 39,
    description: "Koleksi paviliun pusaka agung dengan ukiran tumpangsari jati lawas, plunge pool privat, dan layanan butler teh Jawa.",
    longDescription: "Heritage Joglo Suite adalah penghormatan tertinggi pada arsitektur ningrat keraton Jawa. Menghadirkan konstruksi kayu jati utuh berumur lebih dari 80 tahun tanpa paku, ruang tamu pendopo terbuka, plunge pool batu andesit pribadi, serta kamar mandi megah beratap kaca bintang untuk pengalaman bermalam yang tak terlupakan.",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJvkURX0fZja4QnZMKh0eX28f3TSaLczbDWKPCZclsy6T6ZzwKgzwtI6rcg3OEKoKOcvcwwseos-Yb_KBixuaDohdWF4F3pUy6CAUaGnRaMoUL9edxxmmodXZqEJtTc2Pn2q0lhcdFUrfaMLl7ev1uXvlUgjGWA1TgaJGGkBNwLqkzcNCkUz6kHvs4K2LhlWFNtx9GTDsrk-JDQpkso-qAsAiW5p8Rgpbx2-iEC7jRhpW-Fyf1qP9",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJvkURX0fZja4QnZMKh0eX28f3TSaLczbDWKPCZclsy6T6ZzwKgzwtI6rcg3OEKoKOcvcwwseos-Yb_KBixuaDohdWF4F3pUy6CAUaGnRaMoUL9edxxmmodXZqEJtTc2Pn2q0lhcdFUrfaMLl7ev1uXvlUgjGWA1TgaJGGkBNwLqkzcNCkUz6kHvs4K2LhlWFNtx9GTDsrk-JDQpkso-qAsAiW5p8Rgpbx2-iEC7jRhpW-Fyf1qP9",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA81pCIPN3Y_Badd2JkNVlX6ocD8fj0dJCenr0dg7_ICrOkIS_YtRrzeeW-lERL7aghfh9LVoZPbCxc0FzSfuSj6fxpQUKcBTpP-7Q8E8MPQ10Jy_LtIjgEpaRUmCg0bUfdKHZ7T5h1OT5E9bo-lOyBNYBxEVhIm1A2XWJgYXDRCucfuGYmilI_uRi1Oto979pnOOajO94hIUSHTvWpfEhRL48HN5fj84-RaEoE8n66UGt4unDTcYtE",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      { name: "Plunge Pool Pribadi", icon: "Waves", description: "Kolam rendam air sejuk batu andesit" },
      { name: "Layanan Butler Suaka", icon: "UserCheck", description: "Bantuan khusus dan sajian teh sore" },
      { name: "Bak Rendam Batu Kali Utuh", icon: "Bath", description: "Dipahat dari batu sungai pegunungan" },
      { name: "Minibar Kopi Tubruk Premium", icon: "Coffee", description: "Biji kopi lokal Menoreh & jamu herbal" },
      { name: "Smart TV & Sound Speaker", icon: "Tv", description: "Audio jernih tersembunyi dalam lemari jati" },
      { name: "Area Bersantap Pendopo", icon: "Utensils", description: "Meja makan kayu trembesi 4 orang" },
    ],
    rules: [
      { title: "Waktu Kedatangan & Keberangkatan", description: "Check-in fleksibel mulai 13.00 WIB • Check-out 13.00 WIB (tergantung ketersediaan).", icon: "Clock" },
      { title: "Kawasan Bersih Asap Rokok", description: "Dilarang merokok di dalam area tertutup joglo.", icon: "CigaretteOff" },
      { title: "Ketenangan Suaka", description: "Menjaga volume suara setelah pukul 21.00 WIB demi kedamaian bersama.", icon: "VolumeX" },
      { title: "Hewan Peliharaan", description: "Hewan peliharaan tidak diperkenankan demi kelestarian suaka.", icon: "ShieldAlert" },
    ],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return roomsData.find((room) => room.slug === slug);
}

export function getAllRoomSlugs(): string[] {
  return roomsData.map((room) => room.slug);
}
