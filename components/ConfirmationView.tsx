"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Info,
  Calendar,
  Users,
  Home,
  Bed,
  Phone,
  Mail,
  User,
  Sparkles,
  ArrowRight,
  Loader2,
  Copy,
  Check,
} from "lucide-react";

import { ConfirmedReservation } from "@/lib/validation";
import { Button } from "@/components/ui/Button";

export function ConfirmationView() {
  const router = useRouter();
  const [reservation, setReservation] = useState<ConfirmedReservation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Read from sessionStorage
    try {
      const stored = sessionStorage.getItem("nusastay_reservation");
      if (!stored) {
        // Direct access without data: redirect to /reservasi
        router.replace("/reservasi");
        return;
      }

      const parsed: ConfirmedReservation = JSON.parse(stored);
      if (!parsed || !parsed.fullName || !parsed.roomName) {
        router.replace("/reservasi");
        return;
      }

      setReservation(parsed);
      setIsLoading(false);
    } catch {
      router.replace("/reservasi");
    }
  }, [router]);

  const copyCode = () => {
    if (reservation?.id) {
      navigator.clipboard.writeText(reservation.id);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const formatDisplayDate = (dateStr?: string) => {
    if (!dateStr) return "-";
    try {
      const d = new Date(dateStr + "T00:00:00");
      return new Intl.DateTimeFormat("id-ID", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(d);
    } catch {
      return dateStr;
    }
  };

  if (isLoading || !reservation) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <p className="font-body-md text-stone-muted">Memverifikasi rincian reservasi...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[760px] mx-auto px-margin-mobile md:px-margin">
      {/* Kartu Tengah */}
      <div className="bg-surface-white border border-mist-border rounded-[20px] p-6 sm:p-10 md:p-12 shadow-card text-center relative overflow-hidden">
        {/* Banner Mode Demo */}
        <div
          role="region"
          aria-label="Informasi Mode Demo"
          className="w-full bg-amber-demo border border-on-tertiary-container/20 rounded-xl p-3.5 mb-8 flex items-center gap-3 text-left"
        >
          <Info className="w-5 h-5 text-primary-container shrink-0" />
          <p className="font-body-sm text-body-sm text-charcoal-text leading-snug">
            <span className="font-semibold text-charcoal-text">
              Mode demo — data tidak disimpan.
            </span>{" "}
            Seluruh proses reservasi ini merupakan simulasi portofolio interaktif tanpa transaksi nyata.
          </p>
        </div>

        {/* Ikon Sukses Sentral */}
        <div className="w-20 h-20 rounded-full bg-botanical-green/10 border-2 border-botanical-green flex items-center justify-center mx-auto mb-5 text-botanical-green shadow-sm">
          <CheckCircle2 className="w-10 h-10 text-botanical-green" />
        </div>

        {/* Heading & Subtitle */}
        <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container tracking-widest uppercase font-semibold block mb-2">
          RESERVASI BERHASIL DIAJUKAN
        </span>
        <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-3">
          Permintaan Terkirim
        </h1>
        <p className="font-body-md text-body-md text-stone-muted max-w-lg mx-auto leading-relaxed mb-6">
          Matur nuwun telah mempercayakan waktu rehat Anda kepada NusaStay. Kami telah mencatat
          permohonan reservasi bilik suaka Anda untuk tanggal yang dipilih.
        </p>

        {/* Kode Referensi Simulasi */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-mist-border text-center mx-auto mb-8">
          <span className="font-caption text-caption text-stone-muted">
            KODE REFERENSI SIMULASI:
          </span>
          <span className="font-button-text font-semibold text-primary tracking-wide">
            {reservation.id}
          </span>
          <button
            type="button"
            onClick={copyCode}
            aria-label="Salin Kode Referensi"
            className="p-1 hover:text-primary transition-colors text-stone-muted"
            title="Salin Kode"
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-botanical-green" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Rincian Pemesanan Card */}
        <div className="text-left bg-surface-container-low/60 border border-mist-border rounded-[16px] p-5 sm:p-6 mb-6 space-y-4">
          {/* Header Bilik Singkat */}
          <div className="flex items-center gap-4 pb-4 border-b border-mist-border/80">
            {reservation.roomImage && (
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[12px] overflow-hidden shrink-0 border border-mist-border">
                <Image
                  src={reservation.roomImage}
                  alt={reservation.roomName}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <span className="text-xs font-label-eyebrow text-on-tertiary-container font-semibold uppercase tracking-wider block">
                Bilik Terkonfirmasi
              </span>
              <h2 className="font-title-sm text-title-sm text-primary font-semibold">
                {reservation.roomName}
              </h2>
              <p className="font-caption text-caption text-stone-muted mt-0.5">
                {reservation.roomSpecs}
              </p>
            </div>
          </div>

          {/* Grid Metadata Tamu & Tanggal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body-sm text-body-sm">
            <div>
              <span className="text-stone-muted block text-xs">Nama Tamu</span>
              <span className="font-medium text-charcoal-text flex items-center gap-1.5 mt-0.5">
                <User className="w-3.5 h-3.5 text-stone-muted" /> {reservation.fullName}
              </span>
            </div>

            <div>
              <span className="text-stone-muted block text-xs">Nomor WhatsApp</span>
              <span className="font-medium text-charcoal-text flex items-center gap-1.5 mt-0.5">
                <Phone className="w-3.5 h-3.5 text-stone-muted" /> {reservation.phone}
              </span>
            </div>

            {reservation.email && (
              <div>
                <span className="text-stone-muted block text-xs">Email</span>
                <span className="font-medium text-charcoal-text flex items-center gap-1.5 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-stone-muted" /> {reservation.email}
                </span>
              </div>
            )}

            <div>
              <span className="text-stone-muted block text-xs">Jumlah Tamu</span>
              <span className="font-medium text-charcoal-text flex items-center gap-1.5 mt-0.5">
                <Users className="w-3.5 h-3.5 text-stone-muted" /> {reservation.guests} Tamu Dewasa
              </span>
            </div>

            <div className="sm:col-span-2">
              <span className="text-stone-muted block text-xs">Jadwal Menginap</span>
              <span className="font-medium text-charcoal-text flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-stone-muted" />
                {formatDisplayDate(reservation.checkIn)} – {formatDisplayDate(reservation.checkOut)} (
                {reservation.nights} Malam)
              </span>
            </div>

            {reservation.notes && (
              <div className="sm:col-span-2 pt-2 border-t border-mist-border/60">
                <span className="text-stone-muted block text-xs">Catatan Khusus</span>
                <p className="font-caption text-caption text-charcoal-text mt-0.5 italic">
                  &ldquo;{reservation.notes}&rdquo;
                </p>
              </div>
            )}
          </div>

          {/* Baris Total Biaya */}
          <div className="pt-3 border-t border-mist-border/80 flex items-baseline justify-between">
            <div>
              <span className="text-xs text-stone-muted block">Total Estimasi Biaya</span>
              <span className="text-[11px] text-stone-muted">Pelunasan saat kedatangan</span>
            </div>
            <span className="font-headline-md text-[22px] font-bold text-primary">
              {reservation.totalFormatted}
            </span>
          </div>
        </div>

        {/* Hospitality Note */}
        <div className="bg-secondary-container/40 border border-mist-border rounded-[12px] p-3.5 text-charcoal-text flex items-start gap-2.5 mb-8 text-left">
          <Sparkles className="w-4 h-4 text-on-tertiary-container shrink-0 mt-0.5" />
          <p className="font-caption text-caption text-stone-muted leading-relaxed">
            Staf resepsionis kami akan menghubungi Anda via WhatsApp dalam waktu 1×24 jam sebelum
            kedatangan untuk konfirmasi penyambutan dan persiapan wedang herbal Menoreh.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/"
            variant="primary"
            icon={<Home className="w-4 h-4" />}
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
            Lihat Kamar Lain
          </Button>
        </div>
      </div>
    </div>
  );
}
