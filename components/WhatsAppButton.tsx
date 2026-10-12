"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function WhatsAppButton() {
  const pathname = usePathname();
  const whatsappUrl =
    "https://wa.me/6281200000000?text=Halo%20NusaStay%2C%20saya%20ingin%20bertanya%20mengenai%20ketersediaan%20kamar%20suaka.";

  // Elevate WhatsApp button on room detail page so it doesn't overlap the fixed mobile bottom booking bar
  const isDetailPage = pathname?.startsWith("/kamar/") && pathname !== "/kamar";
  const bottomClass = isDetailPage ? "bottom-24 lg:bottom-6" : "bottom-6";

  return (
    <aside aria-label="Kontak Cepat WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi NusaStay lewat WhatsApp"
        className={`fixed right-4 sm:right-6 z-40 w-14 h-14 min-w-[44px] min-h-[44px] rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-floating hover:bg-teal-dark hover:text-on-primary hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-250 ease-out focus:outline-none focus:ring-2 focus:ring-tertiary-fixed focus:ring-offset-2 focus:ring-offset-background ring-1 ring-on-tertiary-container/30 hover:ring-on-tertiary-container/70 group motion-reduce:transition-none motion-reduce:hover:transform-none ${bottomClass}`}
      >
        {/* Official WhatsApp Glyph (Simple Icons - Speech bubble with phone handset) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
          className="w-7 h-7 text-on-primary transition-transform duration-250 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none shrink-0"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>

        {/* Desktop Tooltip on Hover */}
        <span
          role="tooltip"
          className="hidden lg:group-hover:flex items-center absolute right-[68px] bg-primary-container text-on-primary font-button-text text-caption py-1.5 px-3.5 rounded-full shadow-floating whitespace-nowrap pointer-events-none transition-all duration-200 border border-mist-border/20 select-none ring-1 ring-on-tertiary-container/30"
        >
          Chat via WhatsApp
        </span>
      </a>
    </aside>
  );
}
