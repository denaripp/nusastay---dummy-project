import React from "react";
import Link from "next/link";
import { Sparkles, MessageCircle, ShieldCheck } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTABanner({
  title = "Awali Perjalanan Menuju Ketenangan",
  subtitle = "Pilihlah tanggal rehat terbaik Anda di NusaStay. Kami menyiapkan ruang, keteduhan, serta keramahan Jawa sejati untuk menyambut kedatangan Anda.",
  buttonText = "Ajukan Reservasi",
  buttonLink = "/reservasi",
}: CTABannerProps) {
  return (
    <section className="relative w-full bg-primary-container text-surface-white py-space-3xl lg:py-space-4xl overflow-hidden">
      {/* Decorative Javanese geometric filigree accent background */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <svg
          className="w-full h-full max-w-4xl"
          fill="currentColor"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <circle
            cx="100"
            cy="100"
            fill="none"
            r="80"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polygon
            fill="none"
            points="100,20 180,100 100,180 20,100"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="100"
            cy="100"
            fill="none"
            r="40"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[860px] mx-auto px-margin-mobile lg:px-margin text-center">
        {/* Gold divider emblem */}
        <div className="flex items-center justify-center gap-space-sm mb-space-md text-on-tertiary-container">
          <div className="w-8 h-[1px] bg-on-tertiary-container" />
          <Sparkles className="w-5 h-5 text-tertiary-fixed-dim" />
          <div className="w-8 h-[1px] bg-on-tertiary-container" />
        </div>

        <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.14em] text-tertiary-fixed block mb-space-sm">
          SUAKA MENANTI ANDA
        </span>

        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface-white mb-space-md">
          {title}
        </h2>

        <p className="font-body-lg text-body-lg text-surface-container-highest max-w-xl mx-auto mb-space-2xl leading-relaxed">
          {subtitle}
        </p>

        {/* Action Button & WhatsApp Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md mb-space-lg">
          <Link
            href={buttonLink}
            className="w-full sm:w-auto px-space-xl py-space-md rounded-full bg-secondary-container text-primary font-button-text text-button-text font-semibold hover:bg-surface-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
          >
            {buttonText}
          </Link>

          <a
            href="https://wa.me/6281200000000?text=Halo%20NusaStay%2C%20saya%20ingin%20berkonsultasi%20mengenai%20jadwal%20rehat."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-full bg-surface-white/10 text-surface-white font-button-text text-button-text hover:bg-surface-white/20 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 text-tertiary-fixed" />
            <span>Konsultasi WhatsApp</span>
          </a>
        </div>

        {/* Trust Notice */}
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-white/10 text-surface-container-highest font-caption text-caption border border-surface-white/10">
          <ShieldCheck className="w-4 h-4 text-botanical-green" />
          <span>
            Pembatalan fleksibel hingga 48 jam sebelum kedatangan · Mode demo aktif
          </span>
        </div>
      </div>
    </section>
  );
}
