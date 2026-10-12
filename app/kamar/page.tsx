import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { roomsData } from "@/data/rooms";
import { RoomCard } from "@/components/RoomCard";
import { CTABanner } from "@/components/CTABanner";
import { MotionWrapper } from "@/components/MotionWrapper";
import {
  Bed,
  CheckCircle2,
  Utensils,
  Coffee,
  Waves,
  Sparkles,
  Wifi,
  Droplets,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kamar & Suite — Pilihan Bilik Suaka NusaStay Menoreh",
  description:
    "Jelajahi koleksi kamar dan suite bernuansa arsitektur kayu jati vernakular di NusaStay. Dari bilik intim hingga paviliun joglo privat berpemandangan lembah.",
};

const inclusiveAmenities = [
  {
    title: "Sarapan Pagi Organik",
    description:
      "Dipetik segar dari kebun agrikultur lokal Menoreh, disajikan hangat setiap fajar.",
    icon: Utensils,
  },
  {
    title: "Seduhan Teh & Kopi Menoreh",
    description:
      "Pilihan teh melati wangi dan biji kopi tubruk Menoreh sangrai rumahan otentik.",
    icon: Coffee,
  },
  {
    title: "Akses Kolam Mata Air",
    description:
      "Segarnya air pegunungan alami tanpa kaporit, mengalir langsung dari lereng bukit.",
    icon: Waves,
  },
  {
    title: "Perlengkapan Mandi Herbal",
    description:
      "Sabun dan sampo beraroma serai wangi, kenanga, dan minyak atsiri murni alami.",
    icon: Sparkles,
  },
  {
    title: "Wi-Fi Serat Optik Cepat",
    description:
      "Koneksi internet andal hingga 100 Mbps di seluruh bilik dan area publik suaka.",
    icon: Wifi,
  },
  {
    title: "Air Mineral Kaca & Minibar",
    description:
      "Air mineral murni dalam botol kaca ramah lingkungan yang diisi ulang setiap hari.",
    icon: Droplets,
  },
];

export default function KamarPage() {
  return (
    <div className="w-full bg-surface min-h-screen">
      {/* 1. Header Kompak dengan Breadcrumb & Tipografi Elegan */}
      <section className="relative w-full bg-primary-container text-on-primary pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        {/* Latar Belakang Tekstur Alami Halus */}
        <Image
          src="/images/gallery/gallery-1.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20 mix-blend-overlay pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/95 via-primary-container/90 to-primary-container/80 pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-margin">
          {/* Breadcrumb Navigasi */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6">
            <Link
              href="/"
              className="font-caption text-caption text-secondary-fixed-dim hover:text-surface-white transition-colors"
            >
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-on-tertiary-container" />
            <span className="font-caption text-caption text-surface-white font-medium">
              Kamar & Suite
            </span>
          </nav>

          {/* Eyebrow Label */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-on-tertiary-container" />
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.16em] text-on-tertiary-container font-semibold">
              Suaka Peristirahatan
            </span>
          </div>

          {/* Judul Halaman */}
          <h1 className="font-headline-lg text-headline-lg lg:text-display-hero text-surface-white tracking-tight max-w-3xl mb-4">
            Kamar & Suite
          </h1>

          {/* Deskripsi Pengantar */}
          <p className="font-body-lg text-body-lg text-secondary-fixed-dim max-w-2xl leading-relaxed">
            Setiap bilik dirancang dengan penghormatan mendalam pada kayu jati
            lawas, sirkulasi udara alami pegunungan, dan ketenangan batin yang
            memulihkan.
          </p>
        </div>
      </section>

      {/* 2. Reassuring Info Strip (3 Tipe Bilik & Transparansi Tarif) */}
      <section className="w-full bg-surface-container-low py-5 border-b border-mist-border/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-margin flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0">
              <Bed className="w-4 h-4" />
            </span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-button-text text-button-text text-charcoal-text font-semibold">
                3 Tipe Bilik Tersedia
              </span>
              <span className="text-stone-muted hidden sm:inline">•</span>
              <span className="font-body-sm text-body-sm text-stone-muted">
                Didesain dengan privasi hening dan panorama alam terbuka
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-surface-container-lowest px-4 py-1.5 rounded-full shadow-sm text-charcoal-text shrink-0">
            <CheckCircle2 className="w-4 h-4 text-botanical-green" />
            <span className="font-caption text-caption text-stone-muted">
              Tarif langsung tanpa biaya tersembunyi
            </span>
          </div>
        </div>
      </section>

      {/* 3. Grid 3 RoomCard (1 Kolom Mobile, 3 Kolom Desktop) */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-margin">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-label-eyebrow text-label-eyebrow uppercase text-on-tertiary-container tracking-[0.14em] block mb-2 font-semibold">
                PILIHAN AKOMODASI
              </span>
              <h2 className="font-headline-lg text-headline-lg text-charcoal-text tracking-tight">
                Koleksi Suaka
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-stone-muted max-w-md">
              Pilihlah tempat berteduh yang selaras dengan ritme istirahat Anda,
              dari bilik intim hingga paviliun joglo tumpang sari megah.
            </p>
          </div>

          {/* Grid Kartu Kamar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roomsData.map((room, idx) => (
              <MotionWrapper key={room.id} delay={idx * 0.15}>
                <RoomCard room={room} priority={idx === 0} />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strip "Termasuk di Semua Kamar" */}
      <section className="w-full pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-margin">
          <div className="bg-secondary-fixed/40 rounded-[28px] p-8 lg:p-14 border border-mist-border/60 shadow-sm relative overflow-hidden">
              {/* Header Teks */}
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="font-label-eyebrow text-label-eyebrow uppercase text-on-tertiary-container tracking-[0.16em] font-semibold block mb-2">
                  STANDAR KENYAMANAN NUSASTAY
                </span>
                <h2 className="font-headline-md text-headline-md text-charcoal-text tracking-tight mb-3">
                  Termasuk di Semua Kamar & Suite
                </h2>
                <p className="font-body-sm text-body-sm text-stone-muted">
                  Setiap masa menginap dirancang menyeluruh agar raga dan jiwa
                  Anda senantiasa dimanjakan tanpa kekhawatiran tambahan.
                </p>
              </div>

              {/* 6 Grid Item Kenyamanan */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inclusiveAmenities.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-sm border border-mist-border/40 shadow-xs hover:shadow-card transition-all"
                    >
                      <div className="w-11 h-11 rounded-full bg-secondary-container flex items-center justify-center shrink-0 text-primary-container">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-button-text text-button-text text-charcoal-text font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="font-caption text-caption text-stone-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <CTABanner
        title="Temukan Ketenangan yang Sejati"
        subtitle="Rencanakan waktu luang Anda sekarang dan nikmati keramahan hangat lembah Menoreh."
        buttonText="Mulai Reservasi Sekarang"
        buttonLink="/reservasi"
      />
    </div>
  );
}
