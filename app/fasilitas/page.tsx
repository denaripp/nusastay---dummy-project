import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { facilitiesData, supportingServices } from "@/data/facilities";
import { CTABanner } from "@/components/CTABanner";
import { MotionWrapper } from "@/components/MotionWrapper";
import {
  ChevronRight,
  Droplets,
  Sprout,
  Leaf,
  Check,
  Clock,
  Wifi,
  Car,
  UserCheck,
  Sparkles,
  Signal,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fasilitas Suaka — Pemulihan Jiwa & Raga di NusaStay Menoreh",
  description:
    "Jelajahi fasilitas unggulan NusaStay: Kolam renang mata air pegunungan alami bebas kaporit, taman tropis & jalur meditasi hening, sarapan organik segar, serta pendopo kerja tenang.",
};

export default function FasilitasPage() {
  // Helper to render supporting service icon
  const renderServiceIcon = (icon: string) => {
    const props = { className: "w-7 h-7 text-primary-container group-hover:text-surface-white transition-colors" };
    switch (icon) {
      case "Wifi":
        return <Wifi {...props} />;
      case "Car":
        return <Car {...props} />;
      case "UserCheck":
        return <UserCheck {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* ================= SECTION 1: HEADER FASILITAS ================= */}
      <section className="relative w-full overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
        {/* Subtle Ambient Glow Overlays */}
        <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none" />
        <div className="absolute top-48 -left-20 w-80 h-80 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-margin relative">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-stone-muted mb-6">
            <Link
              href="/"
              className="font-caption text-caption hover:text-primary transition-colors"
            >
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-mist-border" />
            <span className="font-caption text-caption text-primary font-medium">
              Fasilitas Suaka
            </span>
          </nav>

          {/* Editorial Intro Block */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-demo shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              <span className="font-label-eyebrow text-label-eyebrow uppercase text-on-tertiary-container tracking-wider font-semibold">
                KENYAMANAN & KETENANGAN RETREAT
              </span>
            </div>

            <h1 className="font-headline-lg text-headline-lg lg:text-display-hero text-charcoal-text mb-6 tracking-tight">
              Fasilitas yang{" "}
              <span className="italic font-normal text-primary-container font-serif">
                Memulihkan Jiwa
              </span>
            </h1>

            <p className="font-body-lg text-body-lg text-stone-muted max-w-2xl leading-relaxed">
              Mengalirkan kesegaran alami dan ritme istirahat tanpa gangguan, menyatu
              harmonis dengan alam perbukitan serta keagungan tradisi keraton Jawa
              Tengah. Setiap sudut dirancang untuk merawat keteduhan batin Anda.
            </p>

            {/* Micro Feature Metric Bar */}
            <div className="mt-8 pt-6 border-t border-mist-border/50 flex flex-wrap items-center gap-6 sm:gap-10 text-stone-muted">
              <div className="flex items-center gap-2.5">
                <Droplets className="w-5 h-5 text-botanical-green" />
                <span className="font-body-sm text-body-sm">
                  <strong className="text-charcoal-text font-semibold">100%</strong> Air Alami Menoreh
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Sprout className="w-5 h-5 text-botanical-green" />
                <span className="font-body-sm text-body-sm">
                  <strong className="text-charcoal-text font-semibold">3 Hektar</strong> Kebun Botani & Hening
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Leaf className="w-5 h-5 text-botanical-green" />
                <span className="font-body-sm text-body-sm">
                  <strong className="text-charcoal-text font-semibold">Pangan Bersih</strong> Petik Harian
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: 4 BLOK FOTO & NARASI ZIG-ZAG ================= */}
      <section className="w-full pb-20 lg:pb-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-margin flex flex-col gap-16 lg:gap-24">
          {facilitiesData.map((facility, index) => {
            const isEven = index % 2 === 0;

            return (
              <MotionWrapper key={facility.id} delay={0.1}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group">
                  {/* Foto Kolom: di Desktop bergantian kiri (even) dan kanan (odd) */}
                  <div
                    className={`lg:col-span-7 relative ${
                      isEven ? "order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-surface-container shadow-card group-hover:shadow-card-hover transition-all duration-500">
                      <Image
                        src={facility.image}
                        alt={facility.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 700px"
                        priority={index === 0}
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Tag Badge */}
                      <div className="absolute top-4 left-4 bg-surface-white/95 backdrop-blur-md px-3.5 py-1 rounded-full shadow-sm">
                        <span className="font-caption text-caption text-primary-container font-semibold">
                          {facility.number} • {facility.tag}
                        </span>
                      </div>
                    </div>

                    {/* Decorative Background Tile Overlap (Desktop Only) */}
                    <div
                      className={`hidden lg:block absolute w-36 h-36 bg-secondary-container/50 rounded-2xl -z-10 transition-transform duration-500 ${
                        isEven
                          ? "-bottom-6 -right-6 group-hover:translate-x-2 group-hover:translate-y-2"
                          : "-top-6 -left-6 group-hover:-translate-x-2 group-hover:-translate-y-2"
                      }`}
                    />
                  </div>

                  {/* Narasi Kolom: di Desktop bergantian kanan (even) dan kiri (odd) */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isEven ? "order-2 lg:pl-4" : "order-2 lg:order-1 lg:pr-4"
                    }`}
                  >
                    <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest mb-2 font-semibold">
                      {facility.eyebrow}
                    </span>

                    <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-charcoal-text font-medium mb-4">
                      {facility.name}
                    </h2>

                    <p className="font-body-md text-body-md text-stone-muted leading-relaxed mb-6">
                      {facility.description}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="flex flex-col gap-3 mb-6">
                      {facility.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-3 text-charcoal-text font-body-sm text-body-sm"
                        >
                          <span className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Operating Hours Pill */}
                    <div className="flex items-center gap-3">
                      <div className="px-3.5 py-1.5 bg-surface-container-low rounded-xl flex items-center gap-2 border border-mist-border/40">
                        <Clock className="w-3.5 h-3.5 text-stone-muted" />
                        <span className="font-caption text-caption text-stone-muted">
                          Jam Operasional:{" "}
                          <strong className="text-charcoal-text font-medium">
                            {facility.hours}
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </MotionWrapper>
            );
          })}
        </div>
      </section>

      {/* ================= SECTION 3: GRID IKONIK LAYANAN PENDUKUNG ================= */}
      <section className="w-full bg-secondary-container py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-margin">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="font-label-eyebrow text-label-eyebrow text-on-secondary-container uppercase tracking-widest mb-2 block font-semibold">
              KERAMAHAN PARIPURNA
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal-text font-medium mb-3">
              Layanan Pendukung Suaka
            </h2>
            <p className="font-body-md text-body-md text-stone-muted">
              Perhatian menyeluruh hingga detail terkecil untuk memastikan masa
              tinggal Anda mengalir tanpa hambatan dan senantiasa berkesan.
            </p>
          </div>

          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportingServices.map((service, sIdx) => (
              <div
                key={sIdx}
                className="bg-surface-white p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors duration-300 shadow-2xs">
                    {renderServiceIcon(service.icon)}
                  </div>

                  <h3 className="font-title-sm text-title-sm text-charcoal-text font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="font-body-sm text-body-sm text-stone-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-mist-border/40 flex items-center gap-1.5 text-botanical-green font-caption text-caption">
                  <Signal className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-medium">{service.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CTA BANNER ================= */}
      <CTABanner
        title="Awali Masa Rehat Anda di NusaStay"
        subtitle="Nikmati fasilitas suaka yang menenangkan dan pulihkan raga Anda di lembah sejuk Menoreh."
        buttonText="Ajukan Reservasi Sekarang"
        buttonLink="/reservasi"
      />
    </div>
  );
}
