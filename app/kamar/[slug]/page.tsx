import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  roomsData,
  getRoomBySlug,
  getAllRoomSlugs,
  RoomAmenity,
  RoomRule,
} from "@/data/rooms";
import { RoomGallery } from "@/components/RoomGallery";
import { BookingCard } from "@/components/BookingCard";
import { RoomCard } from "@/components/RoomCard";
import { CTABanner } from "@/components/CTABanner";
import { MotionWrapper } from "@/components/MotionWrapper";
import {
  ChevronRight,
  Star,
  Users,
  Maximize2,
  Bed,
  Compass,
  Leaf,
  VolumeX,
  Clock,
  CigaretteOff,
  ShieldAlert,
  Sparkles,
  Wifi,
  Wind,
  Bath,
  Waves,
  Coffee,
  Tv,
  Utensils,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllRoomSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    return {
      title: "Bilik Tidak Ditemukan — NusaStay Menoreh",
    };
  }

  return {
    title: `${room.name} — Suaka NusaStay Menoreh`,
    description: room.description,
    openGraph: {
      title: `${room.name} — NusaStay`,
      description: room.description,
      images: [
        {
          url: room.mainImage,
          width: 1200,
          height: 800,
          alt: room.name,
        },
      ],
    },
  };
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  const otherRooms = roomsData.filter((r) => r.slug !== slug).slice(0, 2);

  // Icon mapping helper for room amenities
  const renderAmenityIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-primary" };
    switch (iconName.toLowerCase()) {
      case "wifi":
        return <Wifi {...props} />;
      case "wind":
        return <Wind {...props} />;
      case "bath":
        return <Bath {...props} />;
      case "waves":
        return <Waves {...props} />;
      case "coffee":
        return <Coffee {...props} />;
      case "tv":
        return <Tv {...props} />;
      case "utensils":
        return <Utensils {...props} />;
      case "usercheck":
        return <UserCheck {...props} />;
      case "sparkles":
        return <Sparkles {...props} />;
      default:
        return <CheckCircle2 {...props} />;
    }
  };

  // Icon mapping helper for sanctuary rules
  const renderRuleIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-on-tertiary-container shrink-0" };
    switch (iconName.toLowerCase()) {
      case "clock":
        return <Clock {...props} />;
      case "cigaretteoff":
        return <CigaretteOff {...props} />;
      case "volumex":
        return <VolumeX {...props} />;
      case "shieldalert":
        return <ShieldAlert {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div className="w-full bg-surface min-h-screen pb-28 lg:pb-0">
      {/* 1. Header & Breadcrumb */}
      <section className="w-full pt-8 pb-4">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-margin">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-stone-muted">
            <Link
              href="/"
              className="font-caption text-caption hover:text-primary transition-colors"
            >
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-muted" />
            <Link
              href="/kamar"
              className="font-caption text-caption hover:text-primary transition-colors"
            >
              Kamar & Suite
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-muted" />
            <span className="font-caption text-caption text-primary font-medium truncate max-w-[200px] sm:max-w-none">
              {room.name}
            </span>
          </nav>

          {/* Room Title Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-eyebrow text-label-eyebrow uppercase font-semibold">
                  {room.badge || room.category}
                </span>
                <div className="flex items-center gap-1 text-on-tertiary-container font-caption text-caption">
                  <Star className="w-4 h-4 fill-on-tertiary-container text-on-tertiary-container" />
                  <span className="font-semibold text-charcoal-text">
                    {room.rating}
                  </span>
                  <span className="text-stone-muted">
                    ({room.reviewCount} ulasan suaka)
                  </span>
                </div>
              </div>

              <h1 className="font-headline-lg text-headline-lg lg:text-[40px] text-charcoal-text tracking-tight">
                {room.name}
              </h1>
            </div>

            <p className="font-body-sm text-body-sm text-stone-muted max-w-md md:text-right">
              {room.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Photo Gallery (Desktop 1+4 Grid / Mobile Swipeable Carousel) */}
      <section className="w-full pb-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-margin">
          <RoomGallery
            images={room.galleryImages}
            roomName={room.name}
          />
        </div>
      </section>

      {/* 3. Main 2-Column Content (Left: Details, Right: Sticky Booking Card) */}
      <section className="w-full pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ================= LEFT COLUMN (Span 7) ================= */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              {/* Specification Chips (4 Grid items) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-surface-white p-4 rounded-[16px] shadow-xs border border-mist-border/50 flex flex-col gap-1">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/70 flex items-center justify-center text-primary mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="font-caption text-caption text-stone-muted">
                    Kapasitas
                  </span>
                  <span className="font-button-text text-button-text text-charcoal-text font-semibold">
                    {room.capacityText}
                  </span>
                </div>

                <div className="bg-surface-white p-4 rounded-[16px] shadow-xs border border-mist-border/50 flex flex-col gap-1">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/70 flex items-center justify-center text-primary mb-1">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <span className="font-caption text-caption text-stone-muted">
                    Luas Bilik
                  </span>
                  <span className="font-button-text text-button-text text-charcoal-text font-semibold">
                    {room.size}
                  </span>
                </div>

                <div className="bg-surface-white p-4 rounded-[16px] shadow-xs border border-mist-border/50 flex flex-col gap-1">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/70 flex items-center justify-center text-primary mb-1">
                    <Bed className="w-4 h-4" />
                  </div>
                  <span className="font-caption text-caption text-stone-muted">
                    Konfigurasi
                  </span>
                  <span className="font-button-text text-button-text text-charcoal-text font-semibold truncate">
                    {room.bedType}
                  </span>
                </div>

                <div className="bg-surface-white p-4 rounded-[16px] shadow-xs border border-mist-border/50 flex flex-col gap-1">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/70 flex items-center justify-center text-primary mb-1">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="font-caption text-caption text-stone-muted">
                    Orientasi
                  </span>
                  <span className="font-button-text text-button-text text-charcoal-text font-semibold truncate">
                    {room.view}
                  </span>
                </div>
              </div>

              {/* Description Card */}
              <div className="bg-surface-white p-6 sm:p-8 rounded-[20px] shadow-card border border-mist-border/60 flex flex-col gap-5">
                <div>
                  <span className="font-label-eyebrow text-label-eyebrow uppercase text-on-tertiary-container tracking-[0.14em] font-semibold block mb-1">
                    KISAH BILIK
                  </span>
                  <h2 className="font-headline-md text-headline-md text-charcoal-text">
                    Ketenangan Arsitektur Vernakular
                  </h2>
                </div>

                <div className="font-body-md text-body-md text-charcoal-text leading-relaxed flex flex-col gap-4">
                  <p>{room.longDescription}</p>
                </div>

                {/* Sub-features pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-mist-border/40">
                  <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-botanical-green shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-button-text text-button-text text-primary font-medium">
                        Bahan Alami & Berkelanjutan
                      </h3>
                      <p className="font-caption text-caption text-stone-muted mt-0.5">
                        Linen katun organik tanpa pemutih dan sabun herbal ramah
                        tanah Menoreh.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3">
                    <VolumeX className="w-5 h-5 text-on-tertiary-container shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-button-text text-button-text text-primary font-medium">
                        Insulasi Akustik Tenang
                      </h3>
                      <p className="font-caption text-caption text-stone-muted mt-0.5">
                        Dinding kayu jati rapat dan orientasi taman menjaga
                        keheningan privasi Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Amenities Grid Card */}
              <div className="bg-surface-white p-6 sm:p-8 rounded-[20px] shadow-card border border-mist-border/60 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-mist-border/40 pb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-charcoal-text font-medium">
                      Fasilitas Bilik Terpilih
                    </h3>
                    <p className="font-caption text-caption text-stone-muted">
                      Segala kelengkapan untuk kenyamanan istirahat paripurna
                    </p>
                  </div>
                  <span className="font-caption text-caption text-botanical-green font-medium bg-secondary-container/60 px-3 py-1 rounded-full">
                    {room.amenities.length} Fasilitas Lengkap
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                  {room.amenities.map((amenity: RoomAmenity, idx: number) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center shrink-0">
                        {renderAmenityIcon(amenity.icon)}
                      </div>
                      <div>
                        <p className="font-button-text text-button-text text-charcoal-text font-medium">
                          {amenity.name}
                        </p>
                        {amenity.description && (
                          <p className="font-caption text-caption text-stone-muted mt-0.5">
                            {amenity.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* House Rules & Policies Card */}
              <div className="bg-surface-white p-6 sm:p-8 rounded-[20px] shadow-card border border-mist-border/60 flex flex-col gap-5">
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal-text font-medium">
                    Tata Tertib & Kebijakan Suaka
                  </h3>
                  <p className="font-caption text-caption text-stone-muted">
                    Kami merawat keselarasan alam demi kedamaian batin setiap jiwa
                    yang singgah.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {room.rules.map((rule: RoomRule, idx: number) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-3.5"
                    >
                      <div className="w-8 h-8 rounded-full bg-surface-white flex items-center justify-center shrink-0 shadow-2xs">
                        {renderRuleIcon(rule.icon)}
                      </div>
                      <div>
                        <h4 className="font-button-text text-button-text text-charcoal-text font-semibold">
                          {rule.title}
                        </h4>
                        <p className="font-body-sm text-body-sm text-stone-muted mt-0.5 leading-relaxed">
                          {rule.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN (Sticky Booking Card - Span 5) ================= */}
            <div className="lg:col-span-5">
              <BookingCard room={room} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Kamar Lainnya (2 Other Room Cards) */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24 border-t border-mist-border/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-label-eyebrow text-label-eyebrow uppercase text-on-tertiary-container tracking-[0.14em] block mb-2 font-semibold">
                EKSPLORASI OPSI LAIN
              </span>
              <h2 className="font-headline-lg text-headline-lg text-charcoal-text tracking-tight">
                Pilihan Suaka Lainnya
              </h2>
            </div>
            <Link
              href="/kamar"
              className="font-button-text text-button-text text-primary hover:text-teal-dark flex items-center gap-1.5 transition-colors"
            >
              <span>Lihat Semua Bilik ({roomsData.length})</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherRooms.map((otherRoom) => (
              <RoomCard key={otherRoom.id} room={otherRoom} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <CTABanner
        title={`Siap Menikmati Kedamaian di ${room.name}?`}
        subtitle="Reservasikan masa peristirahatan Anda sekarang dengan konfirmasi langsung tanpa uang muka di muka."
        buttonText="Ajukan Reservasi Bilik Ini"
        buttonLink={`/reservasi?room=${room.slug}`}
      />
    </div>
  );
}
