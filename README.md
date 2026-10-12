# NusaStay Boutique Inn — Jawa Tengah

Website resmi & eksplorasi desain interaktif untuk **NusaStay Boutique Inn Menoreh**, suaka peristirahatan dan bilik tetirah bergaya *Javanese Sanctuary* (arsitektur vernakular Jawa Tengah modern).

> [!NOTE]
> Proyek ini merupakan eksplorasi desain interaktif dan prototipe portofolio. Seluruh data pemesanan bersifat simulasi (mode demo tanpa transaksi nyata).

---

## 🛠️ Tech Stack & Arsitektur
- **Framework**: Next.js 15 (App Router, Server Components & Client Components terpisah rapi)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS (Desain Sistem Kustom Javanese Sanctuary tanpa *hex hardcoded*)
- **Icons**: Lucide React
- **Forms & Validations**: React Hook Form, Zod
- **Animations**: Framer Motion (mematuhi `prefers-reduced-motion`)
- **Optimization**: `next/image` dengan format WebP lokal, metadata dinamis, `sitemap.xml`, dan `robots.txt`

---

## 🧭 Struktur Halaman & Fitur Lengkap

| Rute | Jenis Halaman | Fitur Utama |
| :--- | :--- | :--- |
| `/` | **Beranda** | Hero fullscreen, widget ketersediaan terhubung ke reservasi, seksi Kamar Kami, cuplikan Fasilitas, galeri preview, Pengalaman Lokal, Testimoni, CTA Banner |
| `/kamar` | **Kamar & Suite** | Header breadcrumb, grid 3 kartu kamar, strip fasilitas inklusif, dan CTA Banner |
| `/kamar/[slug]` | **Detail Kamar** | Galeri foto thumbnail & swipe mobile, spesifikasi mendalam, aturan kamar, Booking card sticky desktop & fixed bar mobile |
| `/fasilitas` | **Fasilitas Suaka** | Narasi zig-zag 4 fasilitas utama (Kolam Mata Air, Taman Tropis, Sarapan Lokal, Area Kerja), grid layanan pendukung |
| `/galeri` | **Galeri Suaka** | Filter pills (*Semua*, *Kamar*, *Fasilitas*, *Suasana*) dengan `aria-pressed`, masonry grid 12 foto WebP lokal, modal Lightbox lengkap (keyboard `ArrowLeft`/`ArrowRight`/`Esc`, mobile swipe, *focus trap* & *focus restore*) |
| `/lokasi` | **Lokasi & Kontak** | Peta interaktif tersemat, kartu kontak resmi fiktif Klaten (0812-0000-0000, halo@example.com, wa.me), panduan rute Stasiun Klaten & Bandara Adi Soemarmo, 4 destinasi sekitar |
| `/reservasi` | **Formulir Reservasi** | Validasi Zod ketat, banner mode demo amber, prefill query params URL, auto-focus ke error pertama, live sticky summary card, penyimpanan sesi di `sessionStorage` |
| `/reservasi/konfirmasi` | **Tiket Konfirmasi** | Proteksi akses langsung (auto-redirect jika session kosong), kode referensi simulasi `NS-DEMO-XXXX`, ringkasan pesanan, tombol navigasi, metadata `noindex` |
| `/_not-found` | **404 Halaman** | Tipografi display 404 Javanese Sanctuary elegan, narasi santun, tombol navigasi kembali, dan kartu bantuan concierge WhatsApp |

---

## 📁 Struktur Direktori

```text
nusastay/
├── app/                      # Next.js App Router (Halaman & Rute)
│   ├── fasilitas/            # /fasilitas
│   ├── galeri/               # /galeri
│   ├── kamar/                # /kamar & /kamar/[slug]
│   ├── lokasi/               # /lokasi
│   ├── reservasi/            # /reservasi & /reservasi/konfirmasi
│   ├── layout.tsx            # Root layout, fonts, skip link, OpenGraph
│   ├── not-found.tsx         # Halaman 404 kustom Javanese Sanctuary
│   ├── sitemap.ts            # Dynamic Sitemap XML generator
│   ├── robots.ts             # Robots.txt generator
│   └── globals.css           # Token base & utility classes
├── components/               # Komponen UI Reusable
│   ├── ui/                   # Button, SectionHeading
│   ├── AvailabilityWidget    # Widget ketersediaan beranda
│   ├── BookingCard.tsx       # Booking card sticky detail kamar
│   ├── ConfirmationView.tsx  # Tampilan tiket konfirmasi reservasi
│   ├── GallerySection.tsx    # Filter pill masonry & modal lightbox
│   ├── LocationMap.tsx       # Peta kawasan & aksi salin GPS
│   ├── Navbar.tsx            # Header navigasi desktop & mobile drawer
│   ├── Footer.tsx            # Footer Deep Teal & kontak
│   ├── ReservationForm.tsx   # Formulir reservasi Hook Form + Zod
│   ├── RoomCard.tsx          # Kartu bilik kamar
│   └── WhatsAppButton.tsx    # FAB WhatsApp sudut kanan bawah
├── data/                     # Sumber Data Statis & Konten Fiktif
│   ├── rooms.ts              # Data kamar & spesifikasi
│   ├── facilities.ts         # Data fasilitas suaka
│   ├── gallery.ts            # 12 data foto galeri & kategori
│   └── homeData.ts           # Highlight, pengalaman lokal, testimoni
├── lib/                      # Helper & Skema Validasi
│   ├── utils.ts              # Classnames merger (cn)
│   └── validation.ts         # Skema Zod reservasi form
├── public/images/            # Foto lokal format WebP
├── scripts/                  # Skrip QA & Utilitas Aset
│   ├── download-gallery.mjs  # Kurasi & download foto Unsplash WebP
│   └── run-lighthouse.mjs    # Otomasi audit Lighthouse Mobile 7 rute
└── design/stitch/            # Acuan Desain Stitch MCP (PNG & HTML)
```

---

## 🚀 Cara Menjalankan

### 1. Prasyarat
- Node.js versi 18.17+ atau 20+
- Manajer paket npm / pnpm / yarn

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Akses di peramban: `http://localhost:3000`

### 4. Build & Production Start
```bash
npm run build
npm run start
```

### 5. Menjalankan Lint
```bash
npm run lint
```

---

## 🛡️ Catatan Mode Demo & Data Fiktif
- Seluruh nomor kontak (`0812-0000-0000`), surel (`halo@example.com`), dan nama staf adalah data fiktif untuk keperluan demonstrasi portofolio.
- Data reservasi yang diinput pada `/reservasi` disimpan sementara pada `sessionStorage` peramban pengguna dan tidak dikirimkan ke peladen (server) backend atau pihak ketiga manapun.

---

## 📷 Kredit Foto & Aset Gambar
Semua foto dikurasi secara legal untuk demonstrasi portofolio non-komersial dan disimpan secara lokal di `public/images/gallery/` dalam format WebP:

| Nama Berkas | Kategori | Sumber / Fotografer | Tautan Unsplash |
| :--- | :--- | :--- | :--- |
| `gallery-1.webp` | Kamar | visualsofdana | [unsplash.com/@visualsofdana](https://unsplash.com/@visualsofdana) |
| `gallery-2.webp` | Kamar | Edvin Johansson | [unsplash.com/@edvinjohansson](https://unsplash.com/@edvinjohansson) |
| `gallery-3.webp` | Kamar | Roberto Nickson | [unsplash.com/@roberto_nickson](https://unsplash.com/@roberto_nickson) |
| `gallery-4.webp` | Kamar | Francesca Tosolini | [unsplash.com/@francescatosolini](https://unsplash.com/@francescatosolini) |
| `gallery-5.webp` | Fasilitas | Dim Hou | [unsplash.com/@dimhou](https://unsplash.com/@dimhou) |
| `gallery-6.webp` | Fasilitas | Jared Rice | [unsplash.com/@jareddrice](https://unsplash.com/@jareddrice) |
| `gallery-7.webp` | Fasilitas | Mor Shani | [unsplash.com/@morshani](https://unsplash.com/@morshani) |
| `gallery-8.webp` | Fasilitas | Dan Gold | [unsplash.com/@danielcgold](https://unsplash.com/@danielcgold) |
| `gallery-9.webp` | Suasana | Sean Oulashin | [unsplash.com/@oulashin](https://unsplash.com/@oulashin) |
| `gallery-10.webp` | Suasana | Luca Bravo | [unsplash.com/@lucabravo](https://unsplash.com/@lucabravo) |
| `gallery-11.webp` | Suasana | Mike Petrucci | [unsplash.com/@mikepetrucci](https://unsplash.com/@mikepetrucci) |
| `gallery-12.webp` | Suasana | Patrick Hendry | [unsplash.com/@worldsbetweenlines](https://unsplash.com/@worldsbetweenlines) |
| Foto Kamar & Fasilitas Tambahan | Kamar & Fasilitas | Chastity Cortijo & Devon Janse van Rensburg | [unsplash.com/@chastity_cortijo](https://unsplash.com/@chastity_cortijo) |
