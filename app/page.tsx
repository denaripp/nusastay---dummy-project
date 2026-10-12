import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Flower2,
  Landmark,
  Sprout,
  SunDim,
  Clock,
  ChevronRight,
  Compass,
} from "lucide-react";
import { roomsData } from "@/data/rooms";
import {
  homeGalleryPreview,
  homeLocalExperiences,
  homeTestimonials,
  homeBoutiqueAmenities,
} from "@/data/homeData";
import { AvailabilityWidget } from "@/components/AvailabilityWidget";
import { RoomCard } from "@/components/RoomCard";
import { AmenityItem } from "@/components/AmenityItem";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABanner } from "@/components/CTABanner";
import { MotionWrapper } from "@/components/MotionWrapper";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* ========================================================
          SECTION 1: FULL-SCREEN HERO & AVAILABILITY WIDGET
      ======================================================== */}
      <section className="relative w-full min-h-[820px] lg:min-h-[920px] flex flex-col justify-between -mt-20 pt-28 pb-16 lg:pb-24 bg-primary-container overflow-hidden">
        {/* Hero Background Image with next/image priority */}
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBggx_liiLflog5LLnl6iD4sFYlnlkG9M0kKZ_Y8oWGr90CSl1ejaLM9sgf6KfOK4Zt0gIxe0RFVmcYC5Wb8dby3HbQH_7tQMoP_sKHV2zjBEoB15TEUl6rhzseaNdx0nyqASqjr6d76vUO9fatRzUu8SYXdCIQBqmeMv_4bp8Jxz7DFQavDYCAzkRSKqsmsdnFnIw4H3sJWmYnZHBDv6EabRsMsTIIRaBiu5vxvmdYmi_xbxIbiZBf"
            alt="Suasana senja di paviliun kayu jati NusaStay dengan pemandangan lembah bukit Menoreh"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Layered Scrim Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary-container/60 to-primary/95" />
          
          {/* Subtle Kawung Filigree Watermark */}
          <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay flex items-center justify-center">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <pattern
                id="hero-kawung"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="0.7" />
                <circle cx="20" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="0.7" />
                <circle cx="0" cy="20" fill="none" stroke="currentColor" strokeWidth="0.7" />
                <circle cx="20" cy="20" fill="none" stroke="currentColor" strokeWidth="0.7" />
                <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#hero-kawung)" />
            </svg>
          </div>
        </div>

        {/* Hero Copy Container */}
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-margin-mobile lg:px-margin pt-space-xl lg:pt-space-2xl my-auto">
          <MotionWrapper direction="up" delay={0.1} className="max-w-3xl">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface/10 backdrop-blur-md mb-space-lg border border-surface/10">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              <span className="font-label-eyebrow text-label-eyebrow tracking-[0.14em] uppercase text-tertiary-fixed">
                BOUTIQUE INN · JAWA TENGAH
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-surface text-balance mb-space-lg font-serif">
              Menginap tenang, di tengah cerita Jawa.
            </h1>

            <p className="font-body-lg text-body-lg text-surface-container-highest max-w-2xl leading-relaxed text-balance">
              Penginapan butik berjiwa tenang di lereng bukit Jawa Tengah,
              memadukan kehangatan kayu jati tradisional dan kenyamanan modern.
            </p>
          </MotionWrapper>
        </div>

        {/* Docked Availability Widget */}
        <div className="relative z-20 max-w-[1200px] w-full mx-auto px-margin-mobile lg:px-margin mt-8 lg:-mb-10">
          <MotionWrapper direction="up" delay={0.2}>
            <AvailabilityWidget />
          </MotionWrapper>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: PENGANTAR DAN HIGHLIGHT (Ivory Canvas)
      ======================================================== */}
      <section className="relative w-full bg-surface pt-20 lg:pt-28 pb-space-3xl lg:pb-space-4xl overflow-hidden">
        {/* Subtle Background Watermark */}
        <div className="absolute -right-24 top-1/4 w-96 h-96 pointer-events-none opacity-[0.03]">
          <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M100 10 C 60 70, 60 130, 100 190 C 140 130, 140 70, 100 10 Z" />
            <path d="M10 100 C 70 60, 130 60, 190 100 C 130 140, 70 140, 10 100 Z" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
          {/* Section Header */}
          <MotionWrapper direction="up" className="max-w-2xl mb-space-2xl">
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.14em] text-on-tertiary-container block mb-space-xs font-semibold">
              TENTANG NUSASTAY
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-space-md">
              Harmoni Alam, Sentuhan Budaya, &amp; Kenyamanan Otentik
            </h2>
            <p className="font-body-lg text-body-lg text-stone-muted leading-relaxed">
              NusaStay lahir dari kerinduan akan jeda yang hakiki. Di bawah naungan
              atap joglo yang anggun, kami merajut keindahan material alam,
              keramahtamahan luhur keraton, dan keteduhan hutan tropis untuk
              meregenerasi jiwa raga Anda.
            </p>
          </MotionWrapper>

          {/* Bento-style Imagery and Narrative Collage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center mb-space-2xl">
            {/* Left 7 cols: 2 photos */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-space-md">
              <MotionWrapper direction="left" delay={0.1} className="sm:col-span-7 h-72 sm:h-80 rounded-[20px] overflow-hidden shadow-card relative group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApLRdegIBb98EQyvf0Z0-HqO5vyVq_1RiuNGSq4yvBrnHqc0_45Q3OFxpWNFMAEZfkN2rU3PixNvsywqNZl5eZQNRAxqg2bgeFq2ooAN06pz45mB_IrEfHko-HGpIpEcBXNuaWr-I_Am4IMFwZVv1PRfWHli08hlj-RSu_7QP-YJL78tHmKXRSY7cgy9weubyGfyTmKji7oJT7MnATJlpweTQD8aYvWMSrRw94IVjwXUXpf4XYXkjb"
                  alt="Arsitektur kayu jati dengan cahaya alami menembus jendela kisi-kisi tradisional"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </MotionWrapper>

              <MotionWrapper direction="right" delay={0.2} className="sm:col-span-5 h-72 sm:h-80 rounded-[20px] overflow-hidden shadow-card sm:mt-space-lg relative group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPMXxLsEMJSspzrwQbFmNq_Uji6GhbQERPiKySSDiCJpIF2yKr6x_nKj4VFTwGtDRdwo350TuMcDB83aP4cJzT4Nn4UyPQVBveDMmjdjLRd1AKbgtM216OcoUsTiX83nGw5yDfTS5ibTg948pLe989lsY3uuRwuc9VfnS4E5qWXD8G3AACMVIpiico0mQf35LdhpR7KDBkEx_44I-02Bo6L1xFvqL3toEK286eCZX7NUn5ARTEq5bq"
                  alt="Teko tanah liat buatan tangan dengan cangkir teh sereh aromatik hangat"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </MotionWrapper>
            </div>

            {/* Right 5 cols: Sanctuary Narrative Card */}
            <MotionWrapper direction="up" delay={0.3} className="lg:col-span-5 bg-surface-container rounded-[20px] p-space-xl border border-mist-border/60">
              <Flower2 className="w-8 h-8 text-botanical-green mb-space-sm" />
              <h3 className="font-title-sm text-title-sm text-primary mb-space-sm">
                Ritme Hening Jawa Tengah
              </h3>
              <p className="font-body-md text-body-md text-stone-muted mb-space-md leading-relaxed">
                Setiap jengkal ruang dirancang untuk melambatkan tempo. Gemercik
                pancuran bambu, wangi kayu cendana, dan desir angin bukit menjadi
                simfoni harian yang menemani istirahat Anda.
              </p>
              <Link
                href="/fasilitas"
                className="inline-flex items-center gap-space-xs font-button-text text-button-text text-on-tertiary-container hover:text-primary transition-colors group"
              >
                <span>Kurasi Pengalaman Suaka</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MotionWrapper>
          </div>

          {/* 3 Highlight Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <MotionWrapper direction="up" delay={0.1}>
              <div className="bg-surface-white rounded-[16px] p-space-lg shadow-soft border border-mist-border/50 hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary-container mb-space-md">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <h4 className="font-title-sm text-title-sm text-charcoal-text mb-space-xs">
                    Arsitektur Joglo Modern
                  </h4>
                  <p className="font-body-sm text-body-sm text-stone-muted leading-relaxed">
                    Kayu jati lawas proporsi kontemporer yang menghadirkan
                    sirkulasi udara sejuk alami dan keagungan visual warisan leluhur.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="up" delay={0.2}>
              <div className="bg-surface-white rounded-[16px] p-space-lg shadow-soft border border-mist-border/50 hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary-container mb-space-md">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <h4 className="font-title-sm text-title-sm text-charcoal-text mb-space-xs">
                    Bahan Organik &amp; Lokal
                  </h4>
                  <p className="font-body-sm text-body-sm text-stone-muted leading-relaxed">
                    Linen katun serat bambu, sabun racikan minyak kelapa murni,
                    serta aromaterapi sereh cengkih khas kebun lereng.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="up" delay={0.3}>
              <div className="bg-surface-white rounded-[16px] p-space-lg shadow-soft border border-mist-border/50 hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary-container mb-space-md">
                    <SunDim className="w-6 h-6" />
                  </div>
                  <h4 className="font-title-sm text-title-sm text-charcoal-text mb-space-xs">
                    Ketenangan Alami
                  </h4>
                  <p className="font-body-sm text-body-sm text-stone-muted leading-relaxed">
                    Ritme hening bebas bising metropolitan, memberikan ruang
                    bernapas yang damai untuk memulihkan energi terdalam.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: 'KAMAR KAMI' (Background White)
      ======================================================== */}
      <section className="w-full bg-surface-white py-space-3xl lg:py-space-4xl border-t border-b border-mist-border/40">
        <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <MotionWrapper direction="up">
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.14em] text-on-tertiary-container block mb-space-xs font-semibold">
                PILIHAN KAMAR
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Kamar Kami
              </h2>
            </MotionWrapper>
            <p className="font-body-md text-body-md text-stone-muted max-w-md leading-relaxed">
              Setiap bilik dirancang dengan matras berkualitas tinggi, kain tenun
              buatan tangan, dan beranda pribadi yang menghadap taman suaka.
            </p>
          </div>

          {/* 3 Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {roomsData.map((room, index) => (
              <MotionWrapper
                key={room.id}
                direction="up"
                delay={0.1 * (index + 1)}
              >
                <RoomCard room={room} />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: FASILITAS BUTIK (Warm Sand Secondary Container)
      ======================================================== */}
      <section className="w-full bg-secondary-container py-space-3xl lg:py-space-4xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
          {/* Section Header */}
          <MotionWrapper direction="up" className="text-center max-w-2xl mx-auto mb-space-2xl">
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.14em] text-on-tertiary-container block mb-space-xs font-semibold">
              KENYAMANAN LENGKAP
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-space-sm">
              Fasilitas Butik
            </h2>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Layanan penuh perhatian untuk menjaga relaksasi dan ritme hening
              Anda selama berada dalam dekap alam Menoreh.
            </p>
          </MotionWrapper>

          {/* 8 Amenities Grid (4x2 on Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {homeBoutiqueAmenities.map((amenity, idx) => (
              <MotionWrapper key={idx} direction="up" delay={0.05 * (idx + 1)}>
                <AmenityItem
                  title={amenity.title}
                  description={amenity.description}
                  iconName={amenity.icon}
                />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: PREVIEW GALERI (Ivory Canvas)
      ======================================================== */}
      <section className="w-full bg-surface py-space-3xl lg:py-space-4xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
          {/* Section Header with Right Link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-2xl gap-space-md">
            <MotionWrapper direction="up">
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.14em] text-on-tertiary-container block mb-space-xs font-semibold">
                MOMEN SANCTUARY
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Kisah Ruang, Cahaya, &amp; Waktu
              </h2>
            </MotionWrapper>

            <Link
              href="/galeri"
              className="inline-flex items-center gap-space-xs font-button-text text-button-text text-on-tertiary-container hover:text-primary transition-colors group"
            >
              <span>Lihat Galeri Lengkap</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 6-Photo Masonry Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
            {homeGalleryPreview.map((item, idx) => {
              const spanClass =
                idx === 0
                  ? "md:col-span-8"
                  : idx === 1 || idx === 2 || idx === 3 || idx === 4
                  ? "md:col-span-4"
                  : "md:col-span-12";

              return (
                <MotionWrapper
                  key={item.id}
                  direction="up"
                  delay={0.05 * (idx + 1)}
                  className={`${spanClass} h-72 sm:h-80 rounded-[20px] overflow-hidden shadow-card group relative`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-space-md">
                    <span className="font-body-md text-surface-white font-medium">
                      {item.title}
                    </span>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: PENGALAMAN DI SEKITAR (White Background)
      ======================================================== */}
      <section className="w-full bg-surface-white py-space-3xl lg:py-space-4xl border-t border-mist-border/40">
        <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
          {/* Header */}
          <MotionWrapper direction="up" className="max-w-2xl mb-space-2xl">
            <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.14em] text-on-tertiary-container block mb-space-xs font-semibold">
              AKTIVITAS LOKAL
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-space-xs">
              Pengalaman di Sekitar
            </h2>
            <p className="font-body-md text-body-md text-stone-muted leading-relaxed">
              Menjelajahi jiwa tanah Jawa bersama panduan warga lokal tanpa
              hiruk pikuk turisme massal.
            </p>
          </MotionWrapper>

          {/* 3 Activity Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {homeLocalExperiences.map((exp, idx) => (
              <MotionWrapper key={exp.id} direction="up" delay={0.1 * (idx + 1)}>
                <div className="bg-surface rounded-[20px] overflow-hidden shadow-card border border-mist-border/50 flex flex-col justify-between group h-full hover:shadow-card-hover transition-all duration-300">
                  <div>
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={exp.image}
                        alt={exp.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-space-lg">
                      <div className="flex items-center gap-space-xs text-on-tertiary-container font-caption text-caption font-medium mb-space-xs">
                        <Clock className="w-4 h-4" />
                        <span>
                          {exp.time} · {exp.tag}
                        </span>
                      </div>
                      <h3 className="font-title-sm text-title-sm text-primary mb-space-xs">
                        {exp.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-stone-muted leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-space-lg pb-space-lg pt-space-xs border-t border-mist-border/30">
                    <span className="font-caption text-caption text-primary flex items-center gap-space-xs font-semibold">
                      <span>{exp.benefit}</span>
                      <ChevronRight className="w-4 h-4 text-on-tertiary-container" />
                    </span>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: CONTOH TESTIMONI (Ivory Canvas)
      ======================================================== */}
      <section className="w-full bg-surface py-space-3xl lg:py-space-4xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
          {/* Section Header */}
          <MotionWrapper direction="up" className="text-center max-w-2xl mx-auto mb-space-2xl">
            <span className="inline-block px-space-md py-1 rounded-full bg-amber-demo text-charcoal-text font-label-eyebrow text-label-eyebrow uppercase tracking-[0.12em] mb-space-xs border border-tertiary-fixed-dim/30">
              Contoh testimoni (fiktif)
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Kesan dari Tamu yang Pernah Rehat
            </h2>
          </MotionWrapper>

          {/* 3 Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {homeTestimonials.map((item, idx) => (
              <MotionWrapper key={item.id} direction="up" delay={0.1 * (idx + 1)}>
                <TestimonialCard testimonial={item} />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 8: CTA BANNER DEEP TEAL
      ======================================================== */}
      <MotionWrapper direction="none">
        <CTABanner />
      </MotionWrapper>
    </div>
  );
}
