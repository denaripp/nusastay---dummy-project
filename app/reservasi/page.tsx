import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { ReservationForm } from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "Reservasi Bilik Suaka — NusaStay Menoreh",
  description:
    "Rencanakan waktu rehat Anda di NusaStay Menoreh. Formulir simulasi reservasi bilik suaka bernuansa Javanese Sanctuary yang tenang dan autentik.",
  openGraph: {
    title: "Reservasi Bilik Suaka — NusaStay Menoreh",
    description:
      "Rencanakan waktu rehat Anda di NusaStay Menoreh. Formulir reservasi bilik suaka Jawa Tengah.",
  },
};

export default function ReservasiPage() {
  return (
    <main className="min-h-screen bg-surface py-space-lg md:py-space-xl">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin mb-space-md">
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
            Reservasi
          </span>
        </nav>

        {/* Page Header */}
        <div className="max-w-2xl">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container tracking-widest uppercase font-semibold block mb-2">
            RESERVASI SUAKA
          </span>
          <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-3">
            Formulir Reservasi Bilik Suaka
          </h1>
          <p className="font-body-md text-body-md text-stone-muted leading-relaxed">
            Lengkapi data Anda di bawah ini untuk merencanakan waktu rehat yang tenang di tengah
            keasrian alam Jawa Tengah. Konfirmasi ketersediaan diproses dalam simulasi interaktif.
          </p>
        </div>
      </div>

      {/* Reservation Form (includes Amber banner & 2-column layout) */}
      <ReservationForm />
    </main>
  );
}
