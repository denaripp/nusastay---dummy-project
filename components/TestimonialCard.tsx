import React from "react";
import { Star } from "lucide-react";
import { TestimonialItem } from "@/data/homeData";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-surface-white rounded-[20px] p-space-xl flex flex-col justify-between shadow-card hover:-translate-y-1 transition-transform duration-300 border border-mist-border/50">
      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-space-md text-on-tertiary-container">
          {Array.from({ length: testimonial.rating }).map((_, idx) => (
            <Star
              key={idx}
              className="w-5 h-5 fill-on-tertiary-container text-on-tertiary-container"
            />
          ))}
        </div>

        {/* Guest Quote */}
        <p className="font-headline-md-mobile text-headline-md-mobile italic text-charcoal-text mb-space-lg font-normal leading-relaxed">
          {testimonial.quote}
        </p>
      </div>

      {/* Guest Attribution */}
      <div className="pt-space-sm border-t border-mist-border/40">
        <h4 className="font-button-text text-button-text font-semibold text-primary">
          {testimonial.name}
        </h4>
        <p className="font-caption text-caption text-stone-muted">
          {testimonial.stayInfo}
        </p>
      </div>
    </div>
  );
}
