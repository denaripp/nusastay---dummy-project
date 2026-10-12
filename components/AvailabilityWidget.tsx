"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, CalendarCheck, Users, ArrowRight } from "lucide-react";

export function AvailabilityWidget() {
  const router = useRouter();

  // Sensible default dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const checkoutDay = new Date(today);
  checkoutDay.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(checkoutDay));
  const [guests, setGuests] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests,
    });
    router.push(`/reservasi?${params.toString()}`);
  };

  return (
    <div className="w-full bg-surface-white rounded-[20px] p-space-md lg:p-space-lg shadow-floating border border-mist-border/60">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md items-center"
      >
        {/* Check-in */}
        <div className="flex flex-col bg-surface-container-low rounded-xl px-space-md py-space-sm transition-all focus-within:bg-surface-white focus-within:ring-2 focus-within:ring-tertiary-container">
          <label
            htmlFor="hero-checkin"
            className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider font-semibold"
          >
            Check-in
          </label>
          <div className="flex items-center gap-space-sm mt-1">
            <Calendar className="w-5 h-5 text-on-tertiary-container shrink-0" />
            <input
              id="hero-checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent font-button-text text-button-text text-charcoal-text focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="flex flex-col bg-surface-container-low rounded-xl px-space-md py-space-sm transition-all focus-within:bg-surface-white focus-within:ring-2 focus-within:ring-tertiary-container">
          <label
            htmlFor="hero-checkout"
            className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider font-semibold"
          >
            Check-out
          </label>
          <div className="flex items-center gap-space-sm mt-1">
            <CalendarCheck className="w-5 h-5 text-on-tertiary-container shrink-0" />
            <input
              id="hero-checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent font-button-text text-button-text text-charcoal-text focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Tamu & Bilik */}
        <div className="flex flex-col bg-surface-container-low rounded-xl px-space-md py-space-sm transition-all focus-within:bg-surface-white focus-within:ring-2 focus-within:ring-tertiary-container">
          <label
            htmlFor="hero-guests"
            className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-wider font-semibold"
          >
            Tamu &amp; Bilik
          </label>
          <div className="flex items-center gap-space-sm mt-1">
            <Users className="w-5 h-5 text-on-tertiary-container shrink-0" />
            <select
              id="hero-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent font-button-text text-button-text text-charcoal-text focus:outline-none cursor-pointer"
            >
              <option value="2">2 Tamu · 1 Paviliun</option>
              <option value="1">1 Tamu · 1 Paviliun</option>
              <option value="3">3 Tamu · 1 Paviliun</option>
              <option value="4">4 Tamu · 2 Paviliun</option>
            </select>
          </div>
        </div>

        {/* Submit CTA */}
        <div className="h-full flex items-end">
          <button
            type="submit"
            className="w-full h-[52px] bg-primary-container text-surface-white font-button-text text-button-text rounded-full flex items-center justify-center gap-space-xs hover:bg-teal-dark transition-all duration-300 shadow-button hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed"
          >
            <span>Cek Ketersediaan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
