import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  badgeType?: "amber" | "sand" | "teal";
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  badge,
  badgeType = "amber",
  eyebrow,
  title,
  subtitle,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  const badgeColors = {
    amber: "bg-amber-demo text-on-tertiary-container border border-tertiary-fixed-dim/30",
    sand: "bg-secondary-container/80 text-on-secondary-fixed-variant",
    teal: "bg-primary-fixed/40 text-primary-container",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-space-sm mb-space-xl",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-space-md py-1 rounded-full text-caption font-medium shadow-sm",
            badgeColors[badgeType]
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse" />
          <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider">
            {badge}
          </span>
        </div>
      )}

      {eyebrow && (
        <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-stone-muted block">
          {eyebrow}
        </span>
      )}

      <div
        className={cn(
          "w-full flex flex-col md:flex-row gap-space-md",
          align === "center"
            ? "justify-center"
            : "md:items-end justify-between"
        )}
      >
        <div className="max-w-3xl">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-text font-medium tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-body-md text-body-md text-stone-muted mt-space-xs leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
