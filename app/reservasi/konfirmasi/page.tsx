import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { ConfirmationView } from "@/components/ConfirmationView";

export const metadata: Metadata = {
  title: "Konfirmasi Reservasi — NusaStay Menoreh",
  description:
    "Permintaan simulasi reservasi bilik suaka NusaStay Menoreh berhasil diajukan dalam mode demo.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function KonfirmasiPage() {
  return (
    <main className="min-h-screen bg-surface py-space-lg md:py-space-xl">
      <div className="max-w-[760px] mx-auto px-margin-mobile md:px-margin mb-space-md">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 font-caption text-caption text-stone-muted"
        >
          <Link
            href="/"
            className="hover:text-primary transition-colors focus:outline-none focus:underline"
          >
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-muted" />
          <Link
            href="/reservasi"
            className="hover:text-primary transition-colors focus:outline-none focus:underline"
          >
            Reservasi
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-muted" />
          <span aria-current="page" className="text-charcoal-text font-medium">
            Konfirmasi
          </span>
        </nav>
      </div>

      <ConfirmationView />
    </main>
  );
}
