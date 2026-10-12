import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { GallerySection } from "@/components/GallerySection";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Galeri Suaka — Rekaman Keheningan NusaStay Menoreh",
  description:
    "Eksplorasi visual bilik kayu jati, kolam mata air alami, sarapan kebun, dan keheningan lanskap perbukitan Menoreh di NusaStay Jawa Tengah.",
  openGraph: {
    title: "Galeri Suaka — Rekaman Keheningan NusaStay Menoreh",
    description:
      "Eksplorasi visual sudut-sudut syahdu dan arsitektur tetirah NusaStay Menoreh, Klaten, Jawa Tengah.",
  },
};

export default function GaleriPage() {
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
              Galeri
            </span>
          </nav>

          {/* Header Title & Intro */}
          <div className="max-w-2xl">
            <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container tracking-widest uppercase font-semibold block mb-2">
              SUAKA VISUAL · MENOREH
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-3">
              Galeri Suaka Menoreh
            </h1>
            <p className="font-body-md text-body-md text-stone-muted leading-relaxed">
              Setiap sudut dirancang untuk menghadirkan ketenangan jiwa. Rekaman visual arsitektur
              kayu jati, sejuknya kolam mata air alami, serta ritme lambat alam pedesaan Menoreh.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section with Filter and Masonry Grid */}
      <section className="pb-space-3xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <GallerySection />
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </main>
  );
}
