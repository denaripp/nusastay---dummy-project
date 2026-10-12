import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-primary-container text-surface-container-high py-space-3xl lg:py-space-4xl border-t border-primary/20">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl lg:gap-gutter pb-space-2xl border-b border-primary-fixed-dim/10">
          {/* Kolom 1: Profil Brand */}
          <div className="flex flex-col gap-space-md">
            <span className="font-headline-md text-headline-md text-surface-white font-medium">
              NusaStay
            </span>
            <p className="font-body-sm text-body-sm text-outline-variant leading-relaxed">
              Suaka peristirahatan kontemporer di jantung Jawa Tengah. Merangkul
              ketenangan arsitektur vernakular, kehangatan kerajinan lokal, dan
              sentuhan keramahan Jawa yang tulus.
            </p>
            <div className="flex items-center gap-space-xs mt-space-sm text-tertiary-fixed-dim">
              <Sparkles className="w-4 h-4 shrink-0 text-tertiary-fixed-dim" />
              <span className="font-caption text-caption text-secondary-fixed">
                Boutique Sanctuary &amp; Cultural Pavilion
              </span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="flex flex-col gap-space-md">
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-tertiary-fixed">
              Navigasi Suaka
            </span>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-outline-variant">
              <li>
                <Link
                  href="/kamar"
                  className="hover:text-surface-white transition-colors"
                >
                  Kamar &amp; Paviliun Pribadi
                </Link>
              </li>
              <li>
                <Link
                  href="/fasilitas"
                  className="hover:text-surface-white transition-colors"
                >
                  Fasilitas &amp; Kolam Tirta
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="hover:text-surface-white transition-colors"
                >
                  Galeri Waktu &amp; Suasana
                </Link>
              </li>
              <li>
                <Link
                  href="/lokasi"
                  className="hover:text-surface-white transition-colors"
                >
                  Petunjuk Akses Lokasi
                </Link>
              </li>
              <li>
                <Link
                  href="/reservasi"
                  className="hover:text-surface-white transition-colors"
                >
                  Permintaan Reservasi (Demo)
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Kedatangan */}
          <div className="flex flex-col gap-space-md">
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-tertiary-fixed">
              Kontak &amp; Kedatangan
            </span>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-outline-variant">
              <div className="flex items-start gap-space-xs">
                <MapPin className="w-4 h-4 text-tertiary-fixed-dim shrink-0 mt-1" />
                <span>
                  Jl. Merapi-Prambanan No. 18, Delanggu, Klaten, Jawa Tengah 57471
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <Phone className="w-4 h-4 text-tertiary-fixed-dim shrink-0" />
                <span>0812-0000-0000</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <Mail className="w-4 h-4 text-tertiary-fixed-dim shrink-0" />
                <span>halo@example.com</span>
              </div>
            </div>
          </div>

          {/* Kolom 4: Jam Operasional */}
          <div className="flex flex-col gap-space-md">
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-tertiary-fixed">
              Jam Operasional
            </span>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-outline-variant">
              <div>
                <p className="text-surface-white font-medium">
                  Check-in / Check-out
                </p>
                <p>Check-in: 14.00 WIB • Check-out: 12.00 WIB</p>
              </div>
              <div>
                <p className="text-surface-white font-medium">
                  Layanan Resepsionis &amp; Concierge
                </p>
                <p>Setiap Hari: 24 Jam Penuh</p>
              </div>
              <div>
                <p className="text-surface-white font-medium">
                  Paviliun Santap &amp; Teh
                </p>
                <p>Pukul 06.30 - 22.00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Hak Cipta & Catatan Fiktif */}
        <div className="pt-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left">
          <p className="font-caption text-caption text-outline-variant">
            © 2026 NusaStay Boutique Inn Jawa Tengah. Hak cipta dilindungi undang-undang.
          </p>
          <div className="bg-surface-container-highest/10 px-space-md py-space-xs rounded-full border border-tertiary-fixed/20">
            <p className="font-caption text-caption text-tertiary-fixed">
              Proyek simulasi portofolio. Seluruh identitas, foto, dan tarif bersifat fiktif.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
