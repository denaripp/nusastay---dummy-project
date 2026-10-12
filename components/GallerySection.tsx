"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
} from "lucide-react";
import {
  galleryData,
  galleryCategories,
  GalleryCategory,
  GalleryItem,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<"Semua" | GalleryCategory>("Semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // References for accessibility and focus management
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Touch coordinates for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Filter items
  const filteredItems = galleryData.filter((item) => {
    if (activeCategory === "Semua") return true;
    return item.kategori === activeCategory;
  });

  const openLightbox = (indexInFiltered: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setLightboxIndex(indexInFiltered);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    // Return focus to the thumbnail button that opened the lightbox
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
  }, [lightboxIndex, filteredItems.length]);

  // Focus trap & Keyboard Navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Set initial focus to close button
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextImage();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevImage();
        return;
      }

      // Focus trap logic
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  // Mobile Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next Image
      nextImage();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Previous Image
      prevImage();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentItem: GalleryItem | undefined =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : undefined;

  return (
    <div className="w-full">
      {/* Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-space-xl">
        {galleryCategories.map((cat) => {
          const isSelected = activeCategory === cat.value;
          const count =
            cat.value === "Semua"
              ? galleryData.length
              : galleryData.filter((i) => i.kategori === cat.value).length;

          return (
            <button
              key={cat.value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => {
                setActiveCategory(cat.value);
                setLightboxIndex(null);
              }}
              className={cn(
                "min-h-[44px] px-5 py-2.5 rounded-full font-button-text text-button-text transition-all duration-200 flex items-center gap-2 border select-none focus:outline-none focus:ring-2 focus:ring-tertiary-fixed focus:ring-offset-2",
                isSelected
                  ? "bg-primary-container text-on-primary border-primary-container shadow-sm -translate-y-0.5"
                  : "bg-secondary-container/50 hover:bg-secondary-container text-charcoal-text border-mist-border hover:border-primary/30"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "text-xs px-2 py-0.5 rounded-full font-medium",
                  isSelected
                    ? "bg-teal-dark/60 text-surface-bright"
                    : "bg-surface-white text-stone-muted"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Section Heading for Screen Readers */}
      <h2 className="sr-only">Koleksi Sudut Suaka</h2>

      {/* Masonry / Responsive Column Grid */}
      <div
        role="region"
        aria-label="Koleksi Foto Galeri"
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            className="break-inside-avoid group relative rounded-[20px] overflow-hidden border border-mist-border/80 shadow-card bg-surface-white transition-all duration-300 hover:-translate-y-1 hover:shadow-floating"
          >
            <button
              type="button"
              onClick={(e) => openLightbox(idx, e)}
              className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-[20px] block relative"
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden bg-surface-container-low",
                  item.aspect === "portrait"
                    ? "aspect-[3/4]"
                    : item.aspect === "square"
                    ? "aspect-square"
                    : "aspect-[4/3]"
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={idx < 2}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/85 via-teal-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="font-label-eyebrow text-[11px] text-tertiary-fixed uppercase tracking-wider font-semibold mb-1">
                    {item.kategori}
                  </span>
                  <h3 className="font-title-sm text-title-sm text-surface-white font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="font-caption text-caption text-surface-variant line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-primary-fixed">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Klik untuk memperbesar</span>
                  </div>
                </div>

                {/* Category Pill Tag Always Visible on Mobile */}
                <div className="absolute top-3 left-3 bg-surface-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-mist-border/60 text-xs font-label-eyebrow text-charcoal-text font-semibold uppercase tracking-wider md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  {item.kategori}
                </div>
              </div>

              {/* Mobile text caption bar */}
              <div className="p-4 sm:hidden bg-surface-white border-t border-mist-border/50">
                <span className="text-xs font-label-eyebrow text-stone-muted uppercase tracking-wider font-semibold block mb-0.5">
                  {item.kategori}
                </span>
                <h3 className="font-title-sm text-base text-primary font-medium">
                  {item.title}
                </h3>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightboxIndex !== null && currentItem && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau Foto ${currentItem.title}`}
          className="fixed inset-0 z-50 bg-teal-dark/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fadeIn"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Counter & Close Button */}
          <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between text-surface-white z-10 pt-2 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-secondary-container/20 border border-mist-border/30 text-surface-bright font-label-eyebrow text-xs tracking-wider">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <span className="font-body-sm text-surface-variant hidden sm:inline">
                {currentItem.kategori}
              </span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Tutup pratinjau foto (Tekan Esc)"
              title="Tutup (Esc)"
              className="min-w-[44px] min-h-[44px] rounded-full bg-surface-white/10 hover:bg-surface-white/20 active:scale-95 text-surface-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-tertiary-fixed"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image & Navigation Cluster */}
          <div className="relative flex-1 max-w-[1100px] w-full mx-auto flex items-center justify-center my-auto min-h-0">
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevImage}
              aria-label="Foto sebelumnya (Panah Kiri)"
              title="Sebelumnya (←)"
              className="absolute left-2 sm:left-4 z-20 min-w-[48px] min-h-[48px] rounded-full bg-surface-white/15 hover:bg-surface-white/30 active:scale-95 text-surface-white flex items-center justify-center transition-all backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-tertiary-fixed"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Main Stage Image */}
            <div className="relative w-full h-[60vh] sm:h-[68vh] max-h-[720px] rounded-[16px] overflow-hidden border border-mist-border/20 shadow-floating">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextImage}
              aria-label="Foto selanjutnya (Panah Kanan)"
              title="Selanjutnya (→)"
              className="absolute right-2 sm:right-4 z-20 min-w-[48px] min-h-[48px] rounded-full bg-surface-white/15 hover:bg-surface-white/30 active:scale-95 text-surface-white flex items-center justify-center transition-all backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-tertiary-fixed"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Bottom Bar: Caption Info & Thumbnail Strip */}
          <div className="w-full max-w-[1000px] mx-auto text-center z-10 pt-4 pb-2">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-xl sm:text-2xl text-surface-white font-medium mb-1">
                {currentItem.title}
              </h2>
              <p className="font-body-sm text-surface-variant text-xs sm:text-sm leading-relaxed mb-4">
                {currentItem.caption}
              </p>
            </div>

            {/* Thumbnail Strip */}
            <div className="hidden sm:flex items-center justify-center gap-2 overflow-x-auto py-1 max-w-full">
              {filteredItems.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Pindah ke foto ${thumb.title}`}
                  className={cn(
                    "relative w-14 h-10 rounded-md overflow-hidden shrink-0 transition-all border",
                    idx === lightboxIndex
                      ? "ring-2 ring-tertiary-fixed border-transparent scale-110"
                      : "opacity-50 hover:opacity-100 border-mist-border/30"
                  )}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <p className="font-caption text-[11px] text-surface-variant/70 mt-2 sm:block hidden">
              Navigasi: Tombol panah [← / →] untuk geser foto · [Esc] untuk menutup
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
