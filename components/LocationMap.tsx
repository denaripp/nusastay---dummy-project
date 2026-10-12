"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Copy, Check, ExternalLink } from "lucide-react";

export function LocationMap() {
  const [copied, setCopied] = useState(false);
  const [mapError, setMapError] = useState(false);
  const coordinates = "-7.7289, 110.5892";

  const handleCopy = () => {
    navigator.clipboard.writeText(coordinates);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-surface-white border border-mist-border rounded-[20px] p-4 sm:p-6 shadow-card overflow-hidden">
      <div className="flex items-center justify-between pb-4 border-b border-mist-border/70 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary" />
          </span>
          <div>
            <h2 className="font-title-sm text-title-sm text-primary">
              Peta Kawasan Suaka
            </h2>
            <p className="font-caption text-caption text-stone-muted">
              Elevasi ~420 mdpl · Udara sejuk lereng perbukitan
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1.5">
          <span className="px-3 py-1 rounded-full bg-surface-container-low border border-mist-border text-xs font-label-eyebrow text-stone-muted uppercase tracking-wider hidden sm:inline-block">
            Klaten, Jawa Tengah
          </span>
          <span className="px-2.5 py-1 rounded-full bg-amber-demo border border-on-tertiary-container/30 text-[11px] font-medium text-charcoal-text">
            Lokasi ilustrasi — proyek simulasi
          </span>
        </div>
      </div>

      {/* Map Embed Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[16px] overflow-hidden border border-mist-border bg-surface-container-low shadow-inner">
        {!mapError ? (
          <iframe
            title="Peta Lokasi NusaStay Menoreh Klaten"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=-7.7289,110.5892&z=14&output=embed"
            onError={() => setMapError(true)}
            className="w-full h-full border-0 filter contrast-[0.95] saturate-[0.85]"
            allowFullScreen
            aria-hidden="false"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-surface-container-low">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-title-sm text-title-sm text-primary mb-1">
              Peta Interaktif Belum Dapat Dimuat
            </h3>
            <p className="font-caption text-caption text-stone-muted max-w-sm mb-4">
              Koneksi embed peta sedang dibatasi oleh peramban atau jaringan. Anda dapat membuka titik lokasi koordinat simulasi langsung di Google Maps.
            </p>
            <a
              href="https://www.google.com/maps?q=-7.7289,110.5892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-on-primary font-button-text text-button-text shadow-button hover:bg-teal-dark hover:text-on-primary transition-all"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Floating Custom Location Badge */}
        {!mapError && (
          <div className="absolute top-3 left-3 bg-surface-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-mist-border shadow-md flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-botanical-green animate-pulse" />
            <div className="text-left">
              <span className="text-xs font-semibold text-charcoal-text block leading-tight">
                NusaStay Menoreh
              </span>
              <span className="text-[10px] text-stone-muted block">Area Asri &amp; Hening</span>
            </div>
          </div>
        )}
      </div>

      {/* Map Interactive Quick Actions */}
      <div className="mt-4 pt-3 border-t border-mist-border/60 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-stone-muted">
          <span>Koordinat GPS:</span>
          <code className="bg-surface-container-low px-2 py-1 rounded font-mono text-charcoal-text">
            {coordinates}
          </code>
          <button
            type="button"
            onClick={handleCopy}
            title="Salin Koordinat GPS"
            className="p-1 hover:text-primary transition-colors text-stone-muted"
            aria-label="Salin Koordinat GPS"
          >
            {copied ? (
              <Check className="w-4 h-4 text-botanical-green" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        <a
          href="https://www.google.com/maps?q=-7.7289,110.5892"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-button-text text-primary hover:text-teal-dark font-medium underline underline-offset-4 focus:outline-none"
        >
          <span>Buka di Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
