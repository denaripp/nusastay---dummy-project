import React from "react";
import Link from "next/link";
import { ArrowLeft, Bed, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center bg-surface px-6 py-16 md:py-24">
      <div className="max-w-xl w-full text-center flex flex-col items-center">
        {/* Micro Eyebrow */}
        <span className="font-label-eyebrow text-xs uppercase text-on-tertiary-container tracking-[0.16em] font-semibold mb-2">
          KESALAHAN PENELUSURAN · 404
        </span>

        {/* Large Decorative Display 404 */}
        <div className="relative mb-2 select-none">
          <span className="font-display-hero text-[72px] sm:text-[96px] md:text-[112px] font-bold text-on-tertiary-container/30 tracking-tight block leading-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display-hero text-[56px] sm:text-[76px] md:text-[88px] font-semibold text-primary tracking-tight block leading-none">
              404
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mb-3">
          Bilik yang Anda Cari Tidak Ditemukan
        </h1>

        {/* Body Text */}
        <p className="font-body-md text-body-md text-stone-muted leading-relaxed max-w-lg mb-8">
          Sepertinya jalan setapak yang Anda tuju belum terpetakan di suaka kami. Mari kembali ke
          beranda untuk menjelajahi bilik dan ketenangan Menoreh.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <Button
            href="/"
            variant="primary"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto min-h-[48px] justify-center !text-on-primary"
          >
            Kembali ke Beranda
          </Button>

          <Button
            href="/kamar"
            variant="secondary"
            icon={<Bed className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto min-h-[48px] justify-center"
          >
            Lihat Pilihan Kamar
          </Button>
        </div>

        {/* Quick Assistance Card */}
        <div className="w-full max-w-md bg-surface-white border border-mist-border rounded-[16px] p-5 shadow-sm text-left">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-on-tertiary-container shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-xs text-charcoal-text font-label-eyebrow uppercase tracking-wider block">
                Butuh bantuan panduan arah?
              </span>
              <p className="font-caption text-caption text-stone-muted mt-0.5">
                Staf resepsionis kami siap mendampingi kebutuhan reservasi dan arah suaka 24 jam.
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs font-medium">
                <a
                  href="https://wa.me/6281200000000?text=Halo%20NusaStay%2C%20saya%20butuh%20bantuan%20navigasi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-teal-dark underline underline-offset-4"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-botanical-green" />
                  <span>WhatsApp Resepsionis</span>
                </a>
                <Link
                  href="/lokasi"
                  className="text-stone-muted hover:text-primary underline underline-offset-4"
                >
                  Lihat Peta Lokasi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
