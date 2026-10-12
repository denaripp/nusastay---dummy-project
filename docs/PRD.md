# PRD — NusaStay (Website Penginapan)

| Item | Detail |
|---|---|
| Nama produk | NusaStay |
| Jenis | Website company profile + permintaan reservasi (demo) |
| Status | Proyek simulasi mandiri untuk portofolio |
| Versi | 1.0 |
| Tanggal | 12 Oktober 2026 |
| Penyusun | EDY |

Catatan: seluruh identitas, data, harga, dan testimoni bersifat fiktif.

---

## 1. Ringkasan Produk
NusaStay adalah penginapan boutique fiktif di Jawa Tengah. Website ini menampilkan kamar, fasilitas, galeri, dan lokasi, lalu mengarahkan pengunjung mengisi form permintaan reservasi. Form berjalan dalam mode demo tanpa penyimpanan data.

## 2. Latar Belakang dan Masalah
- Penginapan kecil sering bergantung pada platform pihak ketiga yang menarik komisi.
- Informasi di media sosial tersebar dan tidak terstruktur.
- Calon tamu butuh satu tempat untuk melihat kamar, harga, fasilitas, dan cara memesan.

## 3. Tujuan
**Tujuan produk**
1. Menampilkan penginapan secara profesional dan meyakinkan.
2. Memudahkan pengunjung mengisi permintaan reservasi dalam kurang dari 2 menit.
3. Memberi informasi lengkap sehingga pengunjung tidak perlu bertanya dasar.

**Tujuan portofolio**
1. Menunjukkan kemampuan UI design, front-end, dan struktur informasi.
2. Menghasilkan studi kasus dengan demo langsung, screenshot, dan dokumentasi proses.

## 4. Non-Tujuan
- Pembayaran online.
- Login atau akun pengguna.
- Ketersediaan kamar real-time dan channel manager.
- Panel admin dan database.
- Pengiriman email atau WhatsApp otomatis.
- Multi-bahasa (versi 1.0).

## 5. Target Pengguna

| Persona | Profil | Kebutuhan | Perilaku |
|---|---|---|---|
| Wisatawan pasangan | 25–35 th, suka tempat estetik | Foto bagus, suasana tenang | Akses via HP, cek Instagram dulu |
| Keluarga kecil | 30–45 th | Kapasitas, fasilitas, lokasi aman | Bandingkan harga dan fasilitas |
| Pekerja remote | 25–40 th | Wi-Fi, area kerja, durasi menginap fleksibel | Cari info praktis cepat |

## 6. Skenario Pengguna (User Stories)
1. Sebagai pengunjung, saya ingin melihat foto dan fasilitas penginapan agar bisa menilai kecocokannya.
2. Sebagai pengunjung, saya ingin membandingkan tipe kamar dan harga agar bisa memilih.
3. Sebagai pengunjung, saya ingin melihat detail satu kamar agar yakin sebelum memesan.
4. Sebagai pengunjung, saya ingin mengisi form reservasi dengan mudah di HP.
5. Sebagai pengunjung, saya ingin tahu lokasi dan akses menuju penginapan.
6. Sebagai pengunjung, saya ingin menghubungi pengelola lewat WhatsApp jika ada pertanyaan.
7. Sebagai pengunjung, saya ingin melihat konfirmasi bahwa permintaan saya terkirim (dalam mode demo).

## 7. Ruang Lingkup Fitur

| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| F1 | Navbar | Sticky, transparan di hero, solid saat scroll, menu mobile fullscreen | Tinggi |
| F2 | Hero + widget ketersediaan | Foto utama, headline, input tanggal dan tamu, tombol menuju /reservasi dengan data terisi | Tinggi |
| F3 | Katalog kamar | Kartu 3 tipe kamar dengan foto, fasilitas singkat, harga "mulai dari" | Tinggi |
| F4 | Detail kamar | Galeri foto, deskripsi, fasilitas, kapasitas, ukuran, aturan, tombol reservasi | Tinggi |
| F5 | Form reservasi (demo) | Validasi, ringkasan, redirect ke konfirmasi | Tinggi |
| F6 | Halaman konfirmasi | Ringkasan data dan catatan mode demo | Tinggi |
| F7 | Fasilitas | Daftar fasilitas dengan ikon dan foto | Sedang |
| F8 | Galeri | Grid masonry dengan lightbox dan filter kategori | Sedang |
| F9 | Lokasi & kontak | Peta embed, alamat, jam resepsionis, tombol WhatsApp | Sedang |
| F10 | Pengalaman sekitar | Rekomendasi aktivitas lokal (statis) | Rendah |
| F11 | Testimoni contoh | Berlabel fiktif | Rendah |
| F12 | Floating tombol WhatsApp | Tautan wa.me ke nomor fiktif/placeholder | Sedang |
| F13 | Halaman 404 | Tampilan custom dengan tautan kembali | Rendah |

## 8. Struktur Informasi dan Route

| Route | Halaman | Isi utama |
|---|---|---|
| / | Beranda | Hero, pengantar, 3 kamar unggulan, fasilitas, galeri preview, pengalaman sekitar, testimoni, CTA |
| /kamar | Daftar kamar | Seluruh tipe kamar |
| /kamar/[slug] | Detail kamar | Informasi lengkap satu kamar |
| /fasilitas | Fasilitas | Fasilitas dan layanan |
| /galeri | Galeri | Foto dengan lightbox |
| /lokasi | Lokasi & kontak | Peta, alamat, kontak |
| /reservasi | Form reservasi | Form dan ringkasan |
| /reservasi/konfirmasi | Konfirmasi | Ringkasan dan catatan demo |

## 9. Alur Utama
1. Beranda → isi widget tanggal dan tamu → /reservasi (data terisi otomatis).
2. Beranda → /kamar → /kamar/[slug] → tombol "Ajukan Reservasi" → /reservasi (kamar terpilih otomatis).
3. /reservasi → isi dan kirim → validasi lolos → /reservasi/konfirmasi.
4. Validasi gagal → pesan error inline, fokus ke field pertama yang salah.

## 10. Spesifikasi Form Reservasi

| Field | Tipe | Aturan |
|---|---|---|
| Nama lengkap | Teks | Wajib, 3–60 karakter |
| Nomor WhatsApp | Telepon | Wajib, format Indonesia (08… atau +62…), 9–15 digit |
| Email | Email | Opsional, format valid |
| Tipe kamar | Select | Wajib, dari data kamar |
| Check-in | Tanggal | Wajib, tidak boleh sebelum hari ini |
| Check-out | Tanggal | Wajib, setelah check-in |
| Jumlah tamu | Angka | Wajib, 1 hingga kapasitas kamar terpilih |
| Catatan | Textarea | Opsional, maksimal 300 karakter |
| Persetujuan | Checkbox | Wajib: memahami ini mode demo |

Perilaku:
- Validasi memakai React Hook Form dan Zod.
- Estimasi malam dan total harga dihitung otomatis dari harga simulasi.
- Setelah submit, data dikirim ke halaman konfirmasi lewat state atau sessionStorage, lalu dihapus saat halaman ditutup. Tidak ada pengiriman ke server.
- Tombol submit nonaktif saat memproses; tampil status loading singkat.
- Banner di halaman form dan konfirmasi: "Mode demo — data tidak disimpan."

## 11. Konten

**Tipe kamar (fiktif)**

| Kamar | Kapasitas | Ukuran | Harga simulasi/malam |
|---|---|---|---|
| Standard | 2 | 24 m² | Rp450.000 |
| Deluxe | 3 | 32 m² | Rp650.000 |
| Suite | 4 | 48 m² | Rp950.000 |

- Fasilitas: Wi-Fi, AC, sarapan, kolam renang, taman, area kerja, parkir, resepsionis.
- Foto: 10–14 gambar lisensi bebas (Unsplash/Pexels), kredit dicatat di halaman atau README.
- Bahasa Indonesia, nada hangat dan tenang. Detail gaya visual ada di DESIGN.md.
- Alamat, nomor telepon, dan nama pengelola menggunakan data fiktif atau placeholder.

## 12. Kebutuhan Non-Fungsional
- Responsif: berfungsi dari lebar 360px hingga layar lebar, tanpa horizontal scroll.
- Performa: Lighthouse Performance ≥ 90 (mobile), LCP < 2,5 detik pada koneksi uji.
- Aksesibilitas: Lighthouse Accessibility ≥ 95, navigasi keyboard, kontras WCAG AA, alt text, label form, target sentuh ≥ 44px.
- SEO dasar: title dan meta description per halaman, heading terstruktur, Open Graph, sitemap dan robots.
- Browser: versi terbaru Chrome, Safari, Firefox, Edge.
- Keamanan dan privasi: tidak ada pengumpulan atau penyimpanan data pribadi.
- Motion: hormati `prefers-reduced-motion`.

## 13. Spesifikasi Teknis
- Framework: Next.js (App Router) dengan TypeScript.
- Styling: Tailwind CSS, design token di `tailwind.config.ts`.
- Font: next/font (Playfair Display, Inter).
- Gambar: next/image, format WebP, lazy loading.
- Form: React Hook Form dan Zod.
- Animasi: Framer Motion.
- Ikon: Lucide React.
- Data: file statis `data/rooms.ts`, `data/facilities.ts`.
- Peta: embed Google Maps (iframe) atau placeholder.
- Deploy: Vercel.
- Versi kontrol: Git dan GitHub.

Struktur folder yang disarankan:
- `app/` — route dan layout
- `components/` — Navbar, Footer, RoomCard, BookingForm, Gallery, SectionHeading, WhatsAppButton
- `data/` — data statis
- `lib/` — utilitas dan skema validasi
- `public/images/` — aset gambar

## 14. Analitik dan Metrik Keberhasilan
Karena proyek simulasi, ukuran keberhasilan berbasis kualitas, bukan konversi nyata.

| Metrik | Target |
|---|---|
| Halaman selesai dan terhubung | 8 dari 8 |
| Lighthouse (mobile) | Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 90 |
| Form | Semua aturan validasi teruji |
| Responsif | Teruji di 360, 768, 1280px |
| Portofolio | Studi kasus lengkap dengan screenshot desktop dan mobile |

Jangan mencantumkan klaim kenaikan booking atau konversi.

## 15. Rencana Pengerjaan

| Fase | Pekerjaan | Hasil |
|---|---|---|
| 1 | Finalisasi PRD dan DESIGN.md, kumpulkan foto | Dokumen dan aset |
| 2 | Setup Next.js, token desain, Navbar, Footer, data | Fondasi project |
| 3 | Beranda | Halaman utama |
| 4 | Kamar dan detail kamar | Katalog |
| 5 | Reservasi dan konfirmasi | Alur form demo |
| 6 | Fasilitas, galeri, lokasi, 404 | Halaman pendukung |
| 7 | QA, aksesibilitas, performa, SEO | Laporan uji |
| 8 | Deploy dan studi kasus portofolio | Demo dan dokumentasi |

## 16. Kriteria Penerimaan (Definition of Done)
- [ ] Seluruh route di bagian 8 berfungsi tanpa error.
- [ ] Alur reservasi dari beranda hingga konfirmasi berjalan.
- [ ] Validasi form sesuai bagian 10.
- [ ] Banner mode demo tampil di form dan konfirmasi.
- [ ] Tampilan sesuai DESIGN.md.
- [ ] Target bagian 12 dan 14 tercapai.
- [ ] Tidak ada error di konsol browser dan build berhasil.
- [ ] Kredit foto dan disclaimer simulasi tercantum.
- [ ] Deploy publik aktif dan README berisi cara menjalankan project.

## 17. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Foto tidak konsisten | Tampilan kurang elegan | Pilih satu gaya cahaya dan warna, edit seragam |
| Pengunjung mengira form menyimpan data | Menyesatkan | Banner demo dan checkbox persetujuan |
| Scope melebar | Terlambat | Patuhi non-tujuan, fitur baru masuk versi 2 |
| Gambar berat | Performa turun | Kompres WebP, gunakan next/image |
| Lisensi foto | Masalah hak cipta | Pakai sumber lisensi bebas, catat kredit |

## 18. Pengembangan Lanjutan (Di Luar Versi 1.0)
- Panel admin sederhana dan penyimpanan reservasi ke database.
- Notifikasi email atau WhatsApp.
- Multi-bahasa (ID/EN).
- Kalender ketersediaan kamar.
- Blog atau artikel wisata lokal.

## 19. Keputusan yang Sudah Ditetapkan
- Form reservasi: mode demo, tanpa penyimpanan data.
- Framework: Next.js (App Router, TypeScript).
- Deploy: Vercel.