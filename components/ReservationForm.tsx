"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Info,
  Calendar,
  CalendarCheck,
  User,
  Phone,
  Mail,
  Users,
  Bed,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { roomsData, Room } from "@/data/rooms";
import {
  reservationFormSchema,
  ReservationFormData,
  ConfirmedReservation,
  getTodayString,
  cleanPhoneNumber,
} from "@/lib/validation";

export function ReservationFormInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Compute default values with safe query param parsing
  const todayStr = useMemo(() => getTodayString(), []);
  const tomorrowStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, []);
  const dayAfterTomorrowStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split("T")[0];
  }, []);

  const defaultRoomParam = searchParams.get("room");
  const defaultCheckInParam = searchParams.get("checkIn");
  const defaultCheckOutParam = searchParams.get("checkOut");
  const defaultGuestsParam = searchParams.get("guests");

  // Validate room param
  const initialRoom = useMemo(() => {
    if (defaultRoomParam && roomsData.some((r) => r.slug === defaultRoomParam)) {
      return defaultRoomParam;
    }
    return roomsData[0]?.slug || "deluxe-teras-menoreh";
  }, [defaultRoomParam]);

  // Validate check-in param
  const initialCheckIn = useMemo(() => {
    if (defaultCheckInParam && defaultCheckInParam >= todayStr) {
      return defaultCheckInParam;
    }
    return tomorrowStr;
  }, [defaultCheckInParam, todayStr, tomorrowStr]);

  // Validate check-out param
  const initialCheckOut = useMemo(() => {
    if (defaultCheckOutParam && defaultCheckOutParam > initialCheckIn) {
      return defaultCheckOutParam;
    }
    const d = new Date(initialCheckIn);
    d.setDate(d.getDate() + 2);
    return d.toISOString().split("T")[0];
  }, [defaultCheckOutParam, initialCheckIn]);

  // Validate guests param
  const initialGuests = useMemo(() => {
    const foundRoom = roomsData.find((r) => r.slug === initialRoom);
    const maxCapacity = foundRoom ? foundRoom.capacity : 2;
    if (defaultGuestsParam) {
      const parsed = parseInt(defaultGuestsParam, 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= maxCapacity) {
        return parsed;
      }
    }
    return Math.min(2, maxCapacity);
  }, [defaultGuestsParam, initialRoom]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      roomSlug: initialRoom,
      checkIn: initialCheckIn,
      checkOut: initialCheckOut,
      guests: initialGuests,
      notes: "",
      demoConsent: false,
    },
    mode: "onTouched",
    shouldFocusError: true,
  });

  const watchedRoomSlug = watch("roomSlug");
  const watchedCheckIn = watch("checkIn");
  const watchedCheckOut = watch("checkOut");
  const watchedGuests = watch("guests");
  const watchedNotes = watch("notes") || "";

  // Selected room data
  const selectedRoom: Room = useMemo(() => {
    return (
      roomsData.find((r) => r.slug === watchedRoomSlug) ||
      roomsData[0]
    );
  }, [watchedRoomSlug]);

  // Adjust guests if chosen room capacity is lower than current selection
  useEffect(() => {
    if (selectedRoom && watchedGuests > selectedRoom.capacity) {
      setValue("guests", selectedRoom.capacity, { shouldValidate: true });
    }
  }, [selectedRoom, watchedGuests, setValue]);

  // Calculate nights
  const nights = useMemo(() => {
    if (!watchedCheckIn || !watchedCheckOut) return 1;
    const start = new Date(watchedCheckIn);
    const end = new Date(watchedCheckOut);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [watchedCheckIn, watchedCheckOut]);

  // Currency formatter
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const totalPrice = nights * (selectedRoom ? selectedRoom.price : 0);
  const totalFormatted = formatCurrency(totalPrice);

  // Friendly date formatter
  const formatDisplayDate = (dateStr: string) => {
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

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);

    // Simulate natural processing delay for demo feedback
    await new Promise((res) => setTimeout(res, 600));

    const reservationData: ConfirmedReservation = {
      id: `NS-DEMO-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName: data.fullName,
      phone: data.phone,
      email: data.email || "",
      roomSlug: selectedRoom.slug,
      roomName: selectedRoom.name,
      roomPrice: selectedRoom.price,
      roomImage: selectedRoom.mainImage,
      roomSpecs: `${selectedRoom.size} · ${selectedRoom.bedType} · ${selectedRoom.view}`,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      nights,
      guests: data.guests,
      notes: data.notes || "",
      totalPrice,
      totalFormatted,
      submittedAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem("nusastay_reservation", JSON.stringify(reservationData));
      router.push("/reservasi/konfirmasi");
    } catch (e) {
      console.error("Gagal menyimpan ke sessionStorage:", e);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Amber Banner Atas */}
      <div
        role="region"
        aria-label="Informasi Mode Demo"
        className="w-full bg-amber-demo border-y border-mist-border/60 py-3 px-margin-mobile md:px-margin mb-space-lg md:mb-space-xl"
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2.5 text-center">
          <Info className="w-5 h-5 text-primary-container shrink-0" />
          <p className="font-body-sm text-body-sm text-charcoal-text leading-snug">
            <span className="font-semibold text-charcoal-text">
              Mode demo — data tidak disimpan.
            </span>{" "}
            Seluruh proses reservasi ini hanya simulasi portofolio interaktif tanpa transaksi nyata.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* KOLOM KIRI: FORMULIR RESERVASI (7 Kolom) */}
          <section
            aria-labelledby="form-heading"
            className="lg:col-span-7 bg-surface-white border border-mist-border rounded-[16px] p-6 sm:p-8 md:p-10 shadow-card"
          >
            <h2 id="form-heading" className="sr-only">
              Formulir Permintaan Reservasi
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-8"
            >
              {/* Grup 1: Data Tamu */}
              <fieldset className="space-y-4">
                <legend className="w-full">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-mist-border/70">
                    <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center font-button-text text-button-text text-xs">
                      1
                    </span>
                    <h3 className="font-title-sm text-title-sm text-primary">
                      Identitas Tamu
                    </h3>
                  </div>
                </legend>

                {/* Nama Lengkap */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block font-body-sm text-body-sm font-medium text-charcoal-text mb-1.5"
                  >
                    Nama Lengkap <span className="text-terracotta-alert">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      placeholder="mis. Anindya Prameswari"
                      aria-required="true"
                      aria-invalid={errors.fullName ? "true" : "false"}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      {...register("fullName")}
                      className={`w-full h-[52px] pl-11 pr-4 rounded-[12px] border bg-surface-white text-charcoal-text font-body-md placeholder:text-outline-variant/80 transition-all focus:outline-none ${
                        errors.fullName
                          ? "border-terracotta-alert focus:border-terracotta-alert focus:ring-1 focus:ring-terracotta-alert bg-error-container/10"
                          : "border-mist-border focus:border-primary focus:ring-1 focus:ring-tertiary-container"
                      }`}
                    />
                    <User className="absolute left-3.5 top-3.5 w-5 h-5 text-stone-muted pointer-events-none" />
                  </div>
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      role="alert"
                      aria-live="polite"
                      className="mt-1.5 flex items-center gap-1.5 font-caption text-caption text-terracotta-alert"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-terracotta-alert" />
                      <span>{errors.fullName.message}</span>
                    </p>
                  )}
                </div>

                {/* WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nomor WhatsApp */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-body-sm text-body-sm font-medium text-charcoal-text mb-1.5"
                    >
                      Nomor WhatsApp <span className="text-terracotta-alert">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        type="tel"
                        placeholder="0812-0000-0000"
                        aria-required="true"
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        {...register("phone")}
                        className={`w-full h-[52px] pl-11 pr-4 rounded-[12px] border bg-surface-white text-charcoal-text font-body-md placeholder:text-outline-variant/80 transition-all focus:outline-none ${
                          errors.phone
                            ? "border-terracotta-alert focus:border-terracotta-alert focus:ring-1 focus:ring-terracotta-alert bg-error-container/10"
                            : "border-mist-border focus:border-primary focus:ring-1 focus:ring-tertiary-container"
                        }`}
                      />
                      <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-stone-muted pointer-events-none" />
                    </div>
                    {errors.phone && (
                      <p
                        id="phone-error"
                        role="alert"
                        aria-live="polite"
                        className="mt-1.5 flex items-center gap-1.5 font-caption text-caption text-terracotta-alert"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-terracotta-alert" />
                        <span>{errors.phone.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body-sm text-body-sm font-medium text-charcoal-text mb-1.5"
                    >
                      Email <span className="font-normal text-stone-muted">(Opsional)</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        placeholder="halo@example.com"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        {...register("email")}
                        className={`w-full h-[52px] pl-11 pr-4 rounded-[12px] border bg-surface-white text-charcoal-text font-body-md placeholder:text-outline-variant/80 transition-all focus:outline-none ${
                          errors.email
                            ? "border-terracotta-alert focus:border-terracotta-alert focus:ring-1 focus:ring-terracotta-alert bg-error-container/10"
                            : "border-mist-border focus:border-primary focus:ring-1 focus:ring-tertiary-container"
                        }`}
                      />
                      <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-stone-muted pointer-events-none" />
                    </div>
                    {errors.email && (
                      <p
                        id="email-error"
                        role="alert"
                        aria-live="polite"
                        className="mt-1.5 flex items-center gap-1.5 font-caption text-caption text-terracotta-alert"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-terracotta-alert" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>

              {/* Grup 2: Rincian Bilik & Tanggal */}
              <fieldset className="space-y-4">
                <legend className="w-full">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-mist-border/70">
                    <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center font-button-text text-button-text text-xs">
                      2
                    </span>
                    <h3 className="font-title-sm text-title-sm text-primary">
                      Rincian Bilik &amp; Tanggal
                    </h3>
                  </div>
                </legend>

                {/* Pilihan Tipe Kamar */}
                <div>
                  <label
                    htmlFor="roomSlug"
                    className="block font-body-sm text-body-sm font-medium text-charcoal-text mb-1.5"
                  >
                    Pilihan Tipe Kamar <span className="text-terracotta-alert">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="roomSlug"
                      aria-required="true"
                      aria-invalid={errors.roomSlug ? "true" : "false"}
                      aria-describedby={errors.roomSlug ? "roomSlug-error" : undefined}
                      {...register("roomSlug")}
                      className={`w-full h-[52px] pl-4 pr-10 rounded-[12px] border bg-surface-white text-charcoal-text font-body-md appearance-none transition-all cursor-pointer focus:outline-none ${
                        errors.roomSlug
                          ? "border-terracotta-alert focus:border-terracotta-alert focus:ring-1 focus:ring-terracotta-alert bg-error-container/10"
                          : "border-mist-border focus:border-primary focus:ring-1 focus:ring-tertiary-container"
                      }`}
                    >
                      {roomsData.map((room) => (
                        <option key={room.slug} value={room.slug}>
                          {room.name} — {room.priceFormatted} / malam (Maks. {room.capacity} tamu)
                        </option>
                      ))}
                    </select>
                    <Bed className="absolute right-3.5 top-3.5 w-5 h-5 text-stone-muted pointer-events-none" />
                  </div>
                  {errors.roomSlug && (
                    <p
                      id="roomSlug-error"
                      role="alert"
                      aria-live="polite"
                      className="mt-1.5 flex items-center gap-1.5 font-caption text-caption text-terracotta-alert"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-terracotta-alert" />
                      <span>{errors.roomSlug.message}</span>
                    </p>
                  )}
                </div>

                {/* Check-in & Check-out */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Check-in */}
                  <div>
                    <label
                      htmlFor="checkIn"
                      className="block font-body-sm text-body-sm font-medium text-charcoal-text mb-1.5"
                    >
                      Tanggal Check-in <span className="text-terracotta-alert">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="checkIn"
                        type="date"
                        min={todayStr}
                        aria-required="true"
                        aria-invalid={errors.checkIn ? "true" : "false"}
                        aria-describedby={errors.checkIn ? "checkIn-error" : undefined}
                        {...register("checkIn")}
                        className={`w-full h-[52px] pl-11 pr-4 rounded-[12px] border bg-surface-white text-charcoal-text font-body-md transition-all focus:outline-none ${
                          errors.checkIn
                            ? "border-terracotta-alert focus:border-terracotta-alert focus:ring-1 focus:ring-terracotta-alert bg-error-container/10"
                            : "border-mist-border focus:border-primary focus:ring-1 focus:ring-tertiary-container"
                        }`}
                      />
                      <Calendar className="absolute left-3.5 top-3.5 w-5 h-5 text-stone-muted pointer-events-none" />
                    </div>
                    {errors.checkIn && (
                      <p
                        id="checkIn-error"
                        role="alert"
                        aria-live="polite"
                        className="mt-1.5 flex items-center gap-1.5 font-caption text-caption text-terracotta-alert"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-terracotta-alert" />
                        <span>{errors.checkIn.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Check-out */}
                  <div>
                    <label
                      htmlFor="checkOut"
                      className="block font-body-sm text-body-sm font-medium text-charcoal-text mb-1.5"
                    >
                      Tanggal Check-out <span className="text-terracotta-alert">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="checkOut"
                        type="date"
                        min={watchedCheckIn || todayStr}
                        aria-required="true"
                        aria-invalid={errors.checkOut ? "true" : "false"}
                        aria-describedby={errors.checkOut ? "checkOut-error" : undefined}
                        {...register("checkOut")}
                        className={`w-full h-[52px] pl-11 pr-4 rounded-[12px] border bg-surface-white text-charcoal-text font-body-md transition-all focus:outline-none ${
                          errors.checkOut
                            ? "border-terracotta-alert focus:border-terracotta-alert focus:ring-1 focus:ring-terracotta-alert bg-error-container/10"
                            : "border-mist-border focus:border-primary focus:ring-1 focus:ring-tertiary-container"
                        }`}
                      />
                      <CalendarCheck className="absolute left-3.5 top-3.5 w-5 h-5 text-stone-muted pointer-events-none" />
                    </div>
                    {errors.checkOut && (
                      <p
                        id="checkOut-error"
                        role="alert"
                        aria-live="polite"
                        className="mt-1.5 flex items-center gap-1.5 font-caption text-caption text-terracotta-alert"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-terracotta-alert" />
                        <span>{errors.checkOut.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Jumlah Tamu */}
                <div>
                  <label
                    htmlFor="guests"
                    className="block font-body-sm text-body-sm font-medium text-charcoal-text mb-1.5"
                  >
                    Jumlah Tamu <span className="text-terracotta-alert">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="guests"
                      aria-required="true"
                      aria-invalid={errors.guests ? "true" : "false"}
                      aria-describedby={errors.guests ? "guests-error" : undefined}
                      {...register("guests")}
                      className={`w-full h-[52px] pl-11 pr-10 rounded-[12px] border bg-surface-white text-charcoal-text font-body-md appearance-none transition-all cursor-pointer focus:outline-none ${
                        errors.guests
                          ? "border-terracotta-alert focus:border-terracotta-alert focus:ring-1 focus:ring-terracotta-alert bg-error-container/10"
                          : "border-mist-border focus:border-primary focus:ring-1 focus:ring-tertiary-container"
                      }`}
                    >
                      {Array.from(
                        { length: selectedRoom ? selectedRoom.capacity : 2 },
                        (_, i) => i + 1
                      ).map((num) => (
                        <option key={num} value={num}>
                          {num} Tamu Dewasa {num === selectedRoom?.capacity ? `(Maksimal ${selectedRoom.name})` : ""}
                        </option>
                      ))}
                    </select>
                    <Users className="absolute left-3.5 top-3.5 w-5 h-5 text-stone-muted pointer-events-none" />
                  </div>
                  {errors.guests && (
                    <p
                      id="guests-error"
                      role="alert"
                      aria-live="polite"
                      className="mt-1.5 flex items-center gap-1.5 font-caption text-caption text-terracotta-alert"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-terracotta-alert" />
                      <span>{errors.guests.message}</span>
                    </p>
                  )}
                </div>
              </fieldset>

              {/* Grup 3: Preferensi Tambahan */}
              <fieldset className="space-y-4">
                <legend className="w-full">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-mist-border/70">
                    <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center font-button-text text-button-text text-xs">
                      3
                    </span>
                    <h3 className="font-title-sm text-title-sm text-primary">
                      Preferensi &amp; Catatan Khusus
                    </h3>
                  </div>
                </legend>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label
                      htmlFor="notes"
                      className="block font-body-sm text-body-sm font-medium text-charcoal-text"
                    >
                      Catatan Tambahan <span className="font-normal text-stone-muted">(Opsional)</span>
                    </label>
                    <span
                      className={`font-caption text-caption ${
                        watchedNotes.length > 300 ? "text-terracotta-alert" : "text-stone-muted"
                      }`}
                    >
                      {watchedNotes.length}/300
                    </span>
                  </div>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Permintaan khusus terkait estimasi jam tiba, preferensi wedang sambutan, atau pola makan bebas gluten..."
                    aria-invalid={errors.notes ? "true" : "false"}
                    aria-describedby={errors.notes ? "notes-error" : undefined}
                    {...register("notes")}
                    className={`w-full p-4 rounded-[12px] border bg-surface-white text-charcoal-text font-body-md placeholder:text-outline-variant/80 transition-all focus:outline-none ${
                      errors.notes
                        ? "border-terracotta-alert focus:border-terracotta-alert focus:ring-1 focus:ring-terracotta-alert bg-error-container/10"
                        : "border-mist-border focus:border-primary focus:ring-1 focus:ring-tertiary-container"
                    }`}
                  />
                  {errors.notes && (
                    <p
                      id="notes-error"
                      role="alert"
                      aria-live="polite"
                      className="mt-1.5 flex items-center gap-1.5 font-caption text-caption text-terracotta-alert"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-terracotta-alert" />
                      <span>{errors.notes.message}</span>
                    </p>
                  )}
                  <p className="font-caption text-caption text-stone-muted mt-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-on-tertiary-container shrink-0" />
                    Bilik kami senantiasa menyiapkan racikan wedang herbal hangat selamat datang.
                  </p>
                </div>
              </fieldset>

              {/* Grup 4: Persetujuan Mode Demo & Submit */}
              <div className="pt-2 border-t border-mist-border/80 space-y-5">
                <div>
                  <label
                    htmlFor="demoConsent"
                    className="flex items-start gap-3 cursor-pointer group select-none"
                  >
                    <input
                      id="demoConsent"
                      type="checkbox"
                      aria-required="true"
                      aria-invalid={errors.demoConsent ? "true" : "false"}
                      aria-describedby={errors.demoConsent ? "demoConsent-error" : undefined}
                      {...register("demoConsent")}
                      className="mt-1 w-5 h-5 rounded-[6px] border-mist-border text-primary-container focus:ring-0 focus:ring-offset-0 cursor-pointer transition-colors"
                    />
                    <span className="font-body-sm text-body-sm text-charcoal-text leading-relaxed group-hover:text-primary transition-colors">
                      Saya memahami ini adalah mode demo dan seluruh formulir ini merupakan simulasi
                      interaktif tanpa transaksi nyata. <span className="text-terracotta-alert">*</span>
                    </span>
                  </label>
                  {errors.demoConsent && (
                    <p
                      id="demoConsent-error"
                      role="alert"
                      aria-live="polite"
                      className="mt-2 flex items-center gap-1.5 font-caption text-caption text-terracotta-alert"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-terracotta-alert" />
                      <span>{errors.demoConsent.message}</span>
                    </p>
                  )}
                </div>

                {/* Tombol Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[52px] bg-primary-container hover:bg-teal-dark active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-on-primary font-button-text text-button-text py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Memproses Simulasi...</span>
                    </>
                  ) : (
                    <>
                      <span>Ajukan Reservasi Bilik</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center font-caption text-caption text-stone-muted flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-botanical-green shrink-0" />
                  Kerahasiaan data terjaga. Tanpa pembayaran kartu kredit di muka.
                </p>
              </div>
            </form>
          </section>

          {/* KOLOM KANAN: PANEL RINGKASAN (Sticky Desktop, Bawah di Mobile) */}
          <aside
            aria-label="Ringkasan Estimasi Reservasi"
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-4"
          >
            <div className="bg-surface-white border border-mist-border rounded-[16px] p-6 sm:p-7 shadow-card">
              {/* Header Ringkasan */}
              <div className="flex items-center justify-between pb-4 border-b border-mist-border/70 mb-5">
                <h2 className="font-title-sm text-title-sm text-primary">
                  Ringkasan Reservasi
                </h2>
                <span className="px-3 py-1 rounded-full bg-amber-demo text-charcoal-text font-label-eyebrow text-[11px] font-semibold border border-on-tertiary-container/30 uppercase tracking-wider">
                  Bilik Terpilih
                </span>
              </div>

              {/* Foto & Info Bilik */}
              {selectedRoom && (
                <div className="mb-5">
                  <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden mb-4 border border-mist-border">
                    <Image
                      src={selectedRoom.mainImage}
                      alt={`Foto bilik ${selectedRoom.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority
                    />
                    <div className="absolute bottom-3 left-3 bg-teal-dark/85 backdrop-blur-sm text-surface-bright text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <span>{selectedRoom.view}</span>
                    </div>
                  </div>

                  <h3 className="font-headline-md text-[22px] leading-tight text-primary font-semibold mb-1">
                    {selectedRoom.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-stone-muted">
                    {selectedRoom.size} · {selectedRoom.bedType} · Sarapan Organik &amp; Jamu Harian
                  </p>
                </div>
              )}

              <div className="border-t border-dashed border-mist-border my-4" />

              {/* Rincian Durasi & Jadwal */}
              <div className="bg-surface-container-low p-4 rounded-[12px] space-y-2 mb-4 font-body-sm text-body-sm">
                <div className="flex justify-between items-center text-charcoal-text">
                  <span className="text-stone-muted flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" /> Check-in:
                  </span>
                  <span className="font-medium text-right">
                    {formatDisplayDate(watchedCheckIn)} (14.00 WIB)
                  </span>
                </div>
                <div className="flex justify-between items-center text-charcoal-text">
                  <span className="text-stone-muted flex items-center gap-1.5">
                    <CalendarCheck className="w-4 h-4 text-primary" /> Check-out:
                  </span>
                  <span className="font-medium text-right">
                    {formatDisplayDate(watchedCheckOut)} (12.00 WIB)
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-mist-border/60 text-charcoal-text">
                  <span className="text-stone-muted">Durasi Rehat:</span>
                  <span className="font-semibold text-primary">{nights} Malam</span>
                </div>
              </div>

              {/* Rincian Simulasi Biaya */}
              <div className="space-y-2.5 font-body-sm text-body-sm pb-4 border-b border-mist-border/70 mb-4">
                <div className="flex justify-between text-charcoal-text">
                  <span className="text-stone-muted">
                    {nights} Malam × {selectedRoom?.priceFormatted}
                  </span>
                  <span className="font-medium">{totalFormatted}</span>
                </div>
                <div className="flex justify-between text-charcoal-text">
                  <span className="text-stone-muted">Biaya Layanan &amp; Pajak</span>
                  <span className="text-botanical-green font-medium">Termasuk (Gratis)</span>
                </div>
                <div className="flex justify-between text-charcoal-text">
                  <span className="text-stone-muted">Sarapan Kebun &amp; Jamu Harian</span>
                  <span className="text-botanical-green font-medium">Termasuk (Gratis)</span>
                </div>
              </div>

              {/* Total Biaya */}
              <div className="flex items-baseline justify-between mb-5">
                <div>
                  <span className="font-caption text-caption text-stone-muted block">
                    Total Simulasi Biaya
                  </span>
                  <span className="text-xs text-stone-muted">
                    Pelunasan saat kedatangan (Mode Demo)
                  </span>
                </div>
                <span className="font-headline-md text-[24px] font-bold text-primary tracking-tight">
                  {totalFormatted}
                </span>
              </div>

              {/* Badge Jaminan */}
              <div className="bg-secondary-container/40 border border-mist-border rounded-[12px] p-3.5 text-charcoal-text flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-botanical-green shrink-0 mt-0.5" />
                <p className="font-caption text-caption text-stone-muted leading-relaxed">
                  Tidak ada penarikan saldo perbankan nyata. Seluruh data disimulasikan secara aman di browser Anda.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export function ReservationForm() {
  return (
    <React.Suspense
      fallback={
        <div className="max-w-[1200px] mx-auto p-12 text-center flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="font-body-md text-stone-muted">Memuat formulir reservasi...</p>
        </div>
      }
    >
      <ReservationFormInner />
    </React.Suspense>
  );
}
