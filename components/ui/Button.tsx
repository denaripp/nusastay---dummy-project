import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "sand" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-button-text text-button-text font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

    const variantStyles = {
      primary:
        "bg-primary-container text-on-primary hover:bg-teal-dark hover:text-on-primary shadow-button hover:-translate-y-0.5 active:scale-95",
      secondary:
        "border-[1.5px] border-primary-container text-primary-container bg-transparent hover:bg-secondary-container/40 active:scale-95",
      sand:
        "bg-secondary-container/60 hover:bg-primary hover:text-on-primary text-primary active:scale-95",
      ghost:
        "bg-transparent text-primary hover:bg-secondary-container/30 active:scale-95",
      white:
        "bg-surface-white hover:bg-secondary-container text-primary shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 active:scale-95",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-caption gap-1.5",
      md: "h-[50px] px-6 text-button-text gap-2",
      lg: "h-[52px] px-8 text-button-text gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
