"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Room } from "@/data/rooms";
import {
  Calendar,
  Users,
  ShieldCheck,
  Info,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface BookingCardProps {
  room: Room;
}

export function BookingCard({ room }: BookingCardProps) {
  // Format YYYY-MM-DD helper
  const formatDateForInput = (d: Date) => {
    return d.toISOString().split("T")[0];
  };

  // Initial dates: tomorrow and +2 days
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const dayAfterTomorrow = new Date(tomorrow);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

  const [checkIn, setCheckIn] = useState<string>(formatDateForInput(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(
    formatDateForInput(dayAfterTomorrow)
  );
  const [guests, setGuests] = useState<string>("2");

  // Calculate nights
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [checkIn, checkOut]);

  // Format currency
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const totalPrice = nights * room.price;

  // Reservation query URL
  const reservationUrl = `/reservasi?room=${room.slug}&checkIn=${encodeURIComponent(
    checkIn
  )}&checkOut=${encodeURIComponent(checkOut)}&guests=${guests}`;

  // WhatsApp query
  const whatsappUrl = `https://wa.me/6281200000000?text=${encodeURIComponent(
    `Halo NusaStay, saya berminat menanyakan ketersediaan kamar *${room.name}* untuk tanggal ${checkIn} s/d ${checkOut} (${nights} malam, ${guests} tamu). Apakah masih tersedia?`
  )}`;

  return (
    <>
      {/* ================= DESKTOP STICKY CARD ================= */}
      <div className="hidden lg:block lg:sticky lg:top-28">
        <div className="bg-surface-white rounded-[24px] p-6 lg:p-8 shadow-card border border-mist-border/60 flex flex-col gap-6 relative overflow-hidden">
          {/* Top Decorative Amber Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-on-tertiary-container to-primary-container" />

          {/* Pricing Header */}
          <div className="flex items-baseline justify-between pt-1">
            <div>
              <span className="font-caption text-caption text-stone-muted uppercase tracking-wider block">
                Tarif Suaka
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-headline-lg text-headline-lg text-charcoal-text font-semibold">
                  {room.priceFormatted}
                </span>
                <span className="font-body-sm text-body-sm text-stone-muted">
                  / malam
                </span>
              </div>
            </div>
            <span className="bg-secondary-container/80 text-on-secondary-container font-caption text-caption px-3 py-1 rounded-full font-medium">
              Sarapan Termasuk
            </span>
          </div>

          {/* Booking Inputs */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Date Pickers */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="checkInInput"
                  className="font-caption text-caption text-stone-muted font-medium"
                >
                  Check-in
                </label>
                <div className="relative flex items-center">
                  <Calendar className="w-4 h-4 absolute left-3 text-stone-muted pointer-events-none" />
                  <input
                    id="checkInInput"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full h-12 pl-9 pr-3 rounded-[12px] bg-surface-container-low text-charcoal-text font-body-sm text-body-sm focus:outline-none focus:bg-surface-white focus:ring-1 focus:ring-primary shadow-sm cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="checkOutInput"
                  className="font-caption text-caption text-stone-muted font-medium"
                >
                  Check-out
                </label>
                <div className="relative flex items-center">
                  <Calendar className="w-4 h-4 absolute left-3 text-stone-muted pointer-events-none" />
                  <input
                    id="checkOutInput"
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full h-12 pl-9 pr-3 rounded-[12px] bg-surface-container-low text-charcoal-text font-body-sm text-body-sm focus:outline-none focus:bg-surface-white focus:ring-1 focus:ring-primary shadow-sm cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Guest Selector */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="guestSelect"
                className="font-caption text-caption text-stone-muted font-medium"
              >
                Jumlah Tamu
              </label>
              <div className="relative flex items-center">
                <Users className="w-4 h-4 absolute left-3 text-stone-muted pointer-events-none" />
                <select
                  id="guestSelect"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full h-12 pl-9 pr-8 rounded-[12px] bg-surface-container-low text-charcoal-text font-body-sm text-body-sm focus:outline-none focus:bg-surface-white focus:ring-1 focus:ring-primary shadow-sm cursor-pointer appearance-none"
                >
                  <option value="1">1 Tamu Dewasa</option>
                  <option value="2">2 Tamu Dewasa</option>
                  {room.capacity >= 3 && (
                    <option value="3">3 Tamu (2 Dewasa + 1 Anak)</option>
                  )}
                  {room.capacity >= 4 && (
                    <option value="4">4 Tamu (Keluarga / Rombongan)</option>
                  )}
                </select>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="p-4 rounded-[14px] bg-surface-container-low/70 flex flex-col gap-2.5 font-body-sm text-body-sm">
              <div className="flex justify-between items-center text-stone-muted">
                <span>
                  {nights} Malam × {room.priceFormatted}
                </span>
                <span className="text-charcoal-text font-medium">
                  {formatRupiah(totalPrice)}
                </span>
              </div>
              <div className="flex justify-between items-center text-stone-muted">
                <span>Pajak & Layanan Suaka</span>
                <span className="text-botanical-green font-medium">
                  Termasuk
                </span>
              </div>
              <div className="flex justify-between items-center text-stone-muted">
                <span>Seduhan Teh & Sarapan Kebun</span>
                <span className="text-botanical-green font-medium">Gratis</span>
              </div>
              <div className="pt-2 border-t border-mist-border/50 flex justify-between items-baseline font-title-sm text-primary">
                <span>Total Simulasi</span>
                <span className="text-headline-md font-semibold text-charcoal-text">
                  {formatRupiah(totalPrice)}
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <Link
              href={reservationUrl}
              className="w-full h-13 py-3.5 rounded-full bg-primary-container hover:bg-teal-dark text-on-primary font-button-text text-button-text flex items-center justify-center gap-2 transition-all shadow-[0_12px_28px_rgba(18,60,58,0.18)] hover:-translate-y-0.5 active:scale-95"
            >
              <span>Ajukan Reservasi Sekarang</span>
              <ArrowRight className="w-4 h-4 text-on-tertiary-container" />
            </Link>

            {/* Secondary WhatsApp Inquiry */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 py-3 rounded-full bg-secondary-container/40 hover:bg-secondary-container text-primary font-button-text text-button-text flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              <span>Tanya Ketersediaan via WhatsApp</span>
            </a>
          </form>

          {/* Reassurance & Demo Badge */}
          <div className="flex flex-col gap-2.5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-stone-muted font-caption text-caption">
              <ShieldCheck className="w-4 h-4 text-botanical-green shrink-0" />
              <span>
                Pembatalan cuma-cuma hingga 48 jam sebelum kedatangan
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-demo/70 text-charcoal-text font-caption text-caption flex items-center justify-center gap-1.5">
              <Info className="w-4 h-4 text-tertiary shrink-0" />
              <span>Mode Demo: Simulasi pemesanan tanpa transaksi finansial</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE BOTTOM FIXED BAR ================= */}
      {/* Placed at bottom-0, high z-index (z-40). Notice WhatsApp button floats above this bar! */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-white/95 backdrop-blur-md border-t border-mist-border shadow-[0_-8px_24px_rgba(18,60,58,0.08)] px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-caption text-stone-muted block leading-none mb-1">
              Tarif per malam
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-title-sm text-title-sm text-primary font-bold">
                {room.priceFormatted}
              </span>
              <span className="font-caption text-caption text-stone-muted">
                / malam
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-caption text-botanical-green font-medium">
              <CheckCircle2 className="w-3 h-3" />
              <span>Sarapan termasuk</span>
            </div>
          </div>

          <Link
            href={reservationUrl}
            className="h-12 px-6 rounded-full bg-primary-container text-on-primary font-button-text text-button-text flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(18,60,58,0.25)] active:scale-95 transition-all shrink-0"
          >
            <span>Ajukan Reservasi</span>
            <ArrowRight className="w-4 h-4 text-on-tertiary-container" />
          </Link>
        </div>
      </div>
    </>
  );
}
