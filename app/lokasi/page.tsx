import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Clock,
  Phone,
  Mail,
  Car,
  Train,
  Plane,
  Compass,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { LocationMap } from "@/components/LocationMap";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Lokasi & Panduan Kedatangan — NusaStay Menoreh",
  description:
    "Petunjuk arah, peta kawasan, dan panduan kedatangan dari Stasiun Klaten dan Bandara Adi Soemarmo menuju suaka peristirahatan NusaStay Menoreh, Jawa Tengah.",
  openGraph: {
    title: "Lokasi & Panduan Kedatangan — NusaStay Menoreh",
    description:
      "Akses menuju suaka ketenangan di lereng perbukitan Menoreh, Klaten, Jawa Tengah.",
  },
};

const nearbyAttractions = [
  {
    name: "Candi Prambanan",
    category: "Warisan Budaya UNESCO",
    duration: "25 Menit Berkendara",
    distance: "14 km",
    description:
      "Kompleks percandian Hindu termegah abad ke-9 dengan arsitektur ramping menjulang setinggi 47 meter dan relief Ramayana.",
  },
  {
    name: "Umbul Sigedang & Ponggok",
    category: "Mata Air Alami Klaten",
    duration: "20 Menit Berkendara",
    distance: "11 km",
    description:
      "Mata air alami sejernih kaca di bawah naungan pohon beringin purba yang menyegarkan tubuh di siang hari.",
  },
  {
    name: "Perkebunan Teh & Puncak Menoreh",
    category: "Panorama Alam Perbukitan",
    duration: "15 Menit Berkendara",
    distance: "8 km",
    description:
      "Hamparan perkebunan teh berkabut sejuk dengan pemandangan lembah purba dan rute jalan santai pagi hari.",
  },
  {
    name: "Desa Wisata Batik Tradisional",
    category: "Kriya & Tradisi Jawa",
    duration: "15 Menit Berkendara",
    distance: "7 km",
    description:
      "Sentra perajin canting batik tulis dengan pewarna alami nabati seperti kulit kayu soga dan daun nila.",
  },
];

export default function LokasiPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Header & Breadcrumb Section */}
      <section className="pt-space-xl pb-space-lg md:pt-space-2xl md:pb-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 font-caption text-caption text-stone-muted mb-4"
          >
            <Link
              href="/"
              className="hover:text-primary transition-colors focus:outline-none focus:underline"
            >
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-muted" />
            <span aria-current="page" className="text-charcoal-text font-medium">
              Lokasi
            </span>
          </nav>

          {/* Header Title & Intro */}
          <div className="max-w-2xl">
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container tracking-widest uppercase font-semibold block mb-2">
              PANDUAN KEDATANGAN &amp; AKSES
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-3">
              Lokasi &amp; Panduan Kedatangan
            </h1>
            <p className="font-body-md text-body-md text-stone-muted leading-relaxed">
              Tersembunyi di lereng bukit asri Menoreh, Klaten, Jawa Tengah. Mudah dijangkau melalui
              akses jalan beraspal mulus namun tetap jauh dari hiruk-pikuk keramaian kota.
            </p>
          </div>
        </div>
      </section>

      {/* Grid 2 Kolom: Peta & Kartu Alamat */}
      <section className="pb-space-2xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Kolom Kiri: Peta Kawasan (7 Kolom) */}
            <div className="lg:col-span-7">
              <LocationMap />
            </div>

            {/* Kolom Kanan: Kartu Kontak & Resepsionis (5 Kolom) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface-white border border-mist-border rounded-[20px] p-6 sm:p-8 shadow-card">
                <span className="text-xs font-label-eyebrow text-on-tertiary-container uppercase tracking-wider font-semibold block mb-1">
                  KANTOR RESEPSIONIS
                </span>
                <h2 className="font-title-sm text-title-sm text-primary mb-4">
                  Alamat &amp; Kontak Resor
                </h2>

                <div className="space-y-4 text-body-sm font-body-sm">
                  {/* Alamat */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-on-tertiary-container shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-charcoal-text block">
                        NusaStay Menoreh Sanctuary
                      </span>
                      <p className="text-stone-muted leading-relaxed mt-0.5">
                        Jl. Menoreh Asri No. 18, Perbukitan Menoreh, Delanggu / Prambanan Area,
                        Kabupaten Klaten, Jawa Tengah 57471
                      </p>
                      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-secondary-container/50 border border-mist-border text-xs text-charcoal-text font-medium">
                        Akses Jalan Beraspal &amp; Parkir Luas
                      </span>
                      <p className="font-caption text-caption text-on-tertiary-container font-medium mt-2 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Lokasi ilustrasi — proyek simulasi</span>
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-mist-border/60" />

                  {/* Jam Resepsionis */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-on-tertiary-container shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-charcoal-text block">
                        Jam Layanan Resepsionis
                      </span>
                      <p className="text-stone-muted mt-0.5">
                        24 Jam Penuh · Check-in 14.00 WIB · Check-out 12.00 WIB
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-mist-border/60" />

                  {/* Telepon & Email */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-on-tertiary-container shrink-0" />
                      <a
                        href="tel:081200000000"
                        className="hover:text-primary transition-colors text-charcoal-text"
                      >
                        0812-0000-0000 (Fiktif)
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-on-tertiary-container shrink-0" />
                      <a
                        href="mailto:halo@example.com"
                        className="hover:text-primary transition-colors text-charcoal-text"
                      >
                        halo@example.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-6 pt-5 border-t border-mist-border/70 space-y-3">
                  <a
                    href="https://wa.me/6281200000000?text=Halo%20NusaStay%2C%20saya%20ingin%20menanyakan%20panduan%20arah%20menuju%20suaka."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] bg-primary-container hover:bg-teal-dark active:scale-[0.98] text-on-primary font-button-text text-button-text py-3.5 px-6 rounded-full shadow-button transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Hubungi Resepsionis via WhatsApp</span>
                  </a>

                  <p className="text-center font-caption text-caption text-stone-muted">
                    Layanan antar-jemput privat stasiun/bandara tersedia dengan konfirmasi terlebih dahulu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rute Transportasi Kedatangan */}
      <section className="py-space-2xl bg-surface-container-low/60 border-y border-mist-border/70">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="text-center max-w-xl mx-auto mb-space-xl">
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest font-semibold block mb-2">
              PILIHAN TRANSPORTASI
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">
              Panduan Rute Menuju Suaka
            </h2>
            <p className="font-body-md text-body-md text-stone-muted mt-2">
              Dua simpul transportasi utama yang memudahkan perjalanan Anda menuju kedamaian Menoreh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rute 1: Dari Stasiun Klaten */}
            <div className="bg-surface-white border border-mist-border rounded-[20px] p-6 sm:p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container text-primary flex items-center justify-center">
                    <Train className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-amber-demo text-charcoal-text font-label-eyebrow text-xs font-semibold border border-on-tertiary-container/30">
                    Estimasi 30–40 Menit
                  </span>
                </div>

                <h3 className="font-title-sm text-title-sm text-primary font-semibold mb-2">
                  Dari Stasiun Klaten (KT)
                </h3>
                <p className="font-caption text-caption text-stone-muted uppercase tracking-wider mb-3">
                  Jarak Tempuh ~16 km · KRL Solo-Jogja &amp; KA Antarkota
                </p>
                <p className="font-body-sm text-body-sm text-charcoal-text leading-relaxed">
                  Pilihan paling populer bagi pelancong kereta api. Dari stasiun, ambil jalur jalan
                  kabupaten beraspal ke arah barat daya lereng Menoreh. Layanan taksi daring, rental
                  mobil lokal, maupun penjemputan staf resor siap menyambut Anda.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-mist-border/60 flex items-center gap-2 text-xs text-stone-muted">
                <Car className="w-4 h-4 text-botanical-green shrink-0" />
                <span>Rute bebas hambatan dan ramah untuk kendaraan roda empat.</span>
              </div>
            </div>

            {/* Rute 2: Dari Bandara Adi Soemarmo */}
            <div className="bg-surface-white border border-mist-border rounded-[20px] p-6 sm:p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container text-primary flex items-center justify-center">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-amber-demo text-charcoal-text font-label-eyebrow text-xs font-semibold border border-on-tertiary-container/30">
                    Estimasi 60–75 Menit
                  </span>
                </div>

                <h3 className="font-title-sm text-title-sm text-primary font-semibold mb-2">
                  Dari Bandara Adi Soemarmo Solo (SOC)
                </h3>
                <p className="font-caption text-caption text-stone-muted uppercase tracking-wider mb-3">
                  Jarak Tempuh ~38 km · Gerbang Tol Trans-Jawa
                </p>
                <p className="font-body-sm text-body-sm text-charcoal-text leading-relaxed">
                  Bagi tamu yang tiba melalui penerbangan udara. Perjalanan dapat ditempuh melalui ruas
                  Tol Solo-Yogyakarta (keluar Gerbang Tol Delanggu / Klaten), lalu dilanjutkan
                  menyusuri rimbun pedesaan tenang dengan pemandangan sawah terasering.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-mist-border/60 flex items-center gap-2 text-xs text-stone-muted">
                <ShieldCheck className="w-4 h-4 text-botanical-green shrink-0" />
                <span>Waktu tempuh merupakan perkiraan dan dapat bervariasi mengikuti arus lalu lintas.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tempat Menarik Sekitar */}
      <section className="py-space-2xl md:py-space-3xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="max-w-2xl mb-space-xl">
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest font-semibold block mb-2">
              EKSPLORASI SEKITAR
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">
              Destinasi Menarik Sekitar Suaka
            </h2>
            <p className="font-body-md text-body-md text-stone-muted mt-2">
              Jadikan NusaStay sebagai titik tolak menjelajahi situs bersejarah, kesegaran mata air,
              dan kehangatan perajin tradisi di Jawa Tengah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((spot) => (
              <div
                key={spot.name}
                className="bg-surface-white border border-mist-border rounded-[16px] p-5 shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-muted mb-2">
                    <span className="font-medium text-on-tertiary-container font-label-eyebrow uppercase tracking-wider">
                      {spot.category}
                    </span>
                  </div>

                  <h3 className="font-title-sm text-lg text-primary font-semibold mb-2">
                    {spot.name}
                  </h3>

                  <p className="font-caption text-caption text-stone-muted leading-relaxed mb-4">
                    {spot.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-mist-border/60 flex items-center justify-between text-xs">
                  <span className="font-medium text-primary flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-on-tertiary-container" />
                    {spot.duration}
                  </span>
                  <span className="text-stone-muted">{spot.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </main>
  );
}
