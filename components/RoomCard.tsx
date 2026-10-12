import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Room } from "@/data/rooms";
import { Bed, Wifi, Wind, Bath, ShowerHead, Waves, Sparkles, Utensils } from "lucide-react";

interface RoomCardProps {
  room: Room;
  priority?: boolean;
}

export function RoomCard({ room, priority = false }: RoomCardProps) {
  // Mapping icons for compact preview
  const getAmenityIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("bed")) return <Bed className="w-4 h-4 text-botanical-green" />;
    if (lower.includes("wifi")) return <Wifi className="w-4 h-4 text-botanical-green" />;
    if (lower.includes("ac") || lower.includes("inverter") || lower.includes("angin"))
      return <Wind className="w-4 h-4 text-botanical-green" />;
    if (lower.includes("bath") || lower.includes("rendam"))
      return <Bath className="w-4 h-4 text-botanical-green" />;
    if (lower.includes("pool") || lower.includes("kolam"))
      return <Waves className="w-4 h-4 text-botanical-green" />;
    if (lower.includes("sarapan") || lower.includes("pangan"))
      return <Utensils className="w-4 h-4 text-botanical-green" />;
    return <ShowerHead className="w-4 h-4 text-botanical-green" />;
  };

  return (
    <article className="group bg-surface rounded-[20px] overflow-hidden flex flex-col justify-between border border-mist-border/50 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div>
        {/* Aspect Ratio 4:3 Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[20px]">
          <Image
            src={room.mainImage}
            alt={`Foto kamar ${room.name} NusaStay`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <span className="absolute top-space-md left-space-md px-space-md py-1 bg-surface-white/95 backdrop-blur-sm rounded-full font-label-eyebrow text-label-eyebrow uppercase text-primary font-semibold shadow-sm">
            {room.name.includes("Standard")
              ? "Standard"
              : room.name.includes("Deluxe")
              ? "Deluxe"
              : "Suite"}
          </span>
        </div>

        {/* Content Body */}
        <div className="p-space-lg">
          <div className="flex items-baseline justify-between mb-space-xs gap-2">
            <h3 className="font-title-sm text-title-sm text-primary font-medium">
              {room.name}
            </h3>
            <span className="font-caption text-caption text-stone-muted shrink-0">
              {room.capacityText} · {room.size}
            </span>
          </div>

          <p className="font-body-sm text-body-sm text-stone-muted mb-space-md line-clamp-2">
            {room.description}
          </p>

          {/* Mini 4-Amenity Icons Grid */}
          <div className="grid grid-cols-2 gap-space-xs mb-space-lg text-charcoal-text font-caption text-caption">
            {room.amenities.slice(0, 4).map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-space-xs truncate">
                <span className="shrink-0">{getAmenityIcon(amenity.name)}</span>
                <span className="truncate">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & CTA Card Bottom Strip */}
      <div className="px-space-lg pb-space-lg pt-space-sm flex items-center justify-between bg-surface-container/40 border-t border-mist-border/40">
        <div>
          <span className="font-caption text-caption text-stone-muted block">
            Mulai dari
          </span>
          <span className="font-button-text text-button-text text-on-tertiary-container font-semibold">
            {room.priceFormatted}{" "}
            <span className="font-caption font-normal text-stone-muted">
              / malam
            </span>
          </span>
        </div>

        <Link
          href={`/kamar/${room.slug}`}
          className="px-space-md py-space-xs rounded-full bg-primary-container text-surface-white font-button-text text-button-text hover:bg-teal-dark hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-sm"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}
