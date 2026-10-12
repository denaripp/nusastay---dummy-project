import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-hero",
            "display-hero-mobile",
            "headline-lg",
            "headline-lg-mobile",
            "headline-md",
            "headline-md-mobile",
            "title-sm",
            "body-lg",
            "body-md",
            "body-sm",
            "caption",
            "label-eyebrow",
            "button-text",
          ],
        },
      ],
      "text-color": [
        {
          text: [
            "background",
            "on-background",
            "surface",
            "surface-dim",
            "surface-bright",
            "surface-variant",
            "on-surface",
            "on-surface-variant",
            "surface-white",
            "surface-tint",
            "inverse-surface",
            "inverse-on-surface",
            "primary",
            "on-primary",
            "primary-container",
            "on-primary-container",
            "inverse-primary",
            "primary-fixed",
            "primary-fixed-dim",
            "on-primary-fixed",
            "on-primary-fixed-variant",
            "teal-dark",
            "secondary",
            "on-secondary",
            "secondary-container",
            "on-secondary-container",
            "secondary-fixed",
            "secondary-fixed-dim",
            "on-secondary-fixed",
            "on-secondary-fixed-variant",
            "tertiary",
            "on-tertiary",
            "tertiary-container",
            "on-tertiary-container",
            "tertiary-fixed",
            "tertiary-fixed-dim",
            "on-tertiary-fixed",
            "on-tertiary-fixed-variant",
            "charcoal-text",
            "stone-muted",
            "botanical-green",
            "terracotta-alert",
            "amber-demo",
            "error",
            "on-error",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
