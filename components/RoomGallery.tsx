"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Grid, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface RoomGalleryProps {
  images: string[];
  roomName: string;
}

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  // Sync mobile scroll position with activeIndex
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const scrollLeft = mobileScrollRef.current.scrollLeft;
    const width = mobileScrollRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    if (index !== activeIndex && index >= 0 && index < images.length) {
      setActiveIndex(index);
    }
  };

  const scrollToMobileIndex = (index: number) => {
    if (!mobileScrollRef.current) return;
    const width = mobileScrollRef.current.clientWidth;
    mobileScrollRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight")
        setActiveIndex((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, images.length]);

  return (
    <div className="w-full">
      {/* ================= DESKTOP GALLERY (md and up) ================= */}
      <div className="hidden md:grid grid-cols-12 gap-space-md h-[460px] lg:h-[500px]">
        {/* Main Hero Photo (8 Cols) */}
        <div
          className="col-span-8 relative h-full rounded-[20px] overflow-hidden group cursor-pointer shadow-card bg-surface-container"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={images[activeIndex] || images[0]}
            alt={`Foto utama bilik ${roomName} - Tampilan ${activeIndex + 1}`}
            fill
            sizes="(max-width: 1200px) 70vw, 800px"
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Photo Counter Pill */}
          <div className="absolute top-space-md left-space-md bg-primary-container/85 backdrop-blur-md text-surface-white font-caption text-caption px-space-md py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Maximize2 className="w-3.5 h-3.5 text-on-tertiary-container" />
            <span>
              {activeIndex + 1} / {images.length} Foto
            </span>
          </div>

          <span className="sr-only">Klik untuk memperbesar galeri foto</span>
        </div>

        {/* 4 Thumbnail Grid (4 Cols) */}
        <div className="col-span-4 grid grid-cols-2 gap-space-md h-full">
          {images.slice(1, 5).map((img, idx) => {
            const actualIndex = idx + 1;
            const isLast = idx === 3;
            const isSelected = activeIndex === actualIndex;

            return (
              <div
                key={actualIndex}
                onClick={() => {
                  if (isLast) {
                    setIsLightboxOpen(true);
                  } else {
                    setActiveIndex(actualIndex);
                  }
                }}
                className={`relative h-full rounded-[16px] overflow-hidden cursor-pointer shadow-sm group transition-all duration-300 ${
                  isSelected
                    ? "ring-2 ring-primary ring-offset-2 scale-[0.98]"
                    : "opacity-85 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Sudut ruang ${roomName} ${actualIndex}`}
                  fill
                  sizes="(max-width: 1200px) 25vw, 200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />

                {/* Overlay on the 4th thumbnail */}
                {isLast && (
                  <div className="absolute inset-0 bg-primary-container/60 hover:bg-primary-container/70 backdrop-blur-[2px] flex items-center justify-center transition-colors">
                    <span className="font-button-text text-caption lg:text-button-text text-surface-white flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-container/80">
                      <Grid className="w-4 h-4 text-on-tertiary-container" />
                      <span>Semua Foto</span>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE SWIPEABLE GALLERY (under md) ================= */}
      <div className="md:hidden relative w-full">
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full aspect-[4/3] rounded-[20px] bg-surface-container"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-full flex-shrink-0 snap-center"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={img}
                alt={`Foto bilik ${roomName} ${idx + 1}`}
                fill
                sizes="100vw"
                priority={idx === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Mobile floating pill counter */}
        <div className="absolute top-4 right-4 bg-primary-container/80 backdrop-blur-md text-surface-white text-caption font-caption px-3 py-1 rounded-full pointer-events-none shadow-sm">
          {activeIndex + 1} / {images.length}
        </div>

        {/* Mobile Dot Indicators with accessible touch targets */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToMobileIndex(idx)}
              aria-label={`Lihat foto ${idx + 1}`}
              className="min-w-[44px] min-h-[44px] p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-tertiary-fixed rounded-full"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 block ${
                  activeIndex === idx
                    ? "w-6 bg-primary-container"
                    : "w-2 bg-mist-border hover:bg-stone-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-surface-white w-full max-w-6xl mx-auto">
            <div>
              <p className="font-title-sm text-surface-white">{roomName}</p>
              <p className="font-caption text-stone-muted">
                Foto {activeIndex + 1} dari {images.length}
              </p>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-surface-white/10 hover:bg-surface-white/20 text-surface-white transition-colors"
              aria-label="Tutup galeri"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Active Image View */}
          <div className="relative flex-1 max-w-5xl w-full mx-auto my-4 flex items-center justify-center">
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={images[activeIndex]}
                alt={`Foto tampilan penuh ${roomName} ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Left Nav Button */}
            <button
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + images.length) % images.length
                )
              }
              className="absolute left-2 md:-left-6 p-3 rounded-full bg-surface-white/10 hover:bg-surface-white/20 text-surface-white backdrop-blur-sm transition-colors"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % images.length)
              }
              className="absolute right-2 md:-right-6 p-3 rounded-full bg-surface-white/10 hover:bg-surface-white/20 text-surface-white backdrop-blur-sm transition-colors"
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 max-w-xl mx-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 transition-all ${
                  activeIndex === idx
                    ? "ring-2 ring-on-tertiary-container scale-105"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
