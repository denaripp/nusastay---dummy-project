"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Kamar", href: "/kamar" },
  { name: "Fasilitas", href: "/fasilitas" },
  { name: "Galeri", href: "/galeri" },
  { name: "Lokasi", href: "/lokasi" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-surface/90 backdrop-blur-xl shadow-nav"
            : "bg-surface/70 backdrop-blur-md"
        )}
      >
        <div className="h-20 max-w-[1200px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-space-sm group focus:outline-none"
          >
            <span className="font-title-sm text-title-sm text-primary tracking-tight font-medium">
              NusaStay
            </span>
            <span className="font-label-eyebrow text-label-eyebrow uppercase text-stone-muted tracking-widest hidden sm:inline-block">
              Jawa Tengah
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-space-md">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-button-text font-button-text transition-all duration-200 py-space-xs",
                    isActive
                      ? "bg-secondary-container text-on-secondary-fixed-variant font-medium rounded-full px-space-md"
                      : "text-on-surface-variant hover:text-primary px-space-xs"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-space-sm sm:gap-space-md">
            <Button
              href="/reservasi"
              variant="primary"
              size="sm"
              className={cn(
                "hidden sm:inline-flex",
                pathname === "/reservasi" && "ring-2 ring-tertiary-fixed ring-offset-2 shadow-card"
              )}
            >
              Reservasi
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-primary hover:bg-secondary-container/50 rounded-full transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl md:hidden pt-24 px-margin-mobile flex flex-col justify-between pb-8 animate-fadeIn">
          <div className="flex flex-col gap-space-md">
            <span className="font-label-eyebrow text-label-eyebrow uppercase text-stone-muted tracking-widest px-space-sm">
              Navigasi Suaka
            </span>
            <nav className="flex flex-col gap-space-sm">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-headline-md-mobile font-serif py-space-sm px-space-sm rounded-xl flex items-center justify-between transition-colors",
                      isActive
                        ? "bg-secondary-container text-primary font-medium"
                        : "text-charcoal-text hover:bg-surface-container"
                    )}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-5 h-5 text-stone-muted" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-space-md pt-space-xl border-t border-mist-border">
            <div className="flex items-center gap-2 text-stone-muted text-caption">
              <span className="w-2 h-2 rounded-full bg-botanical-green" />
              <span>Reservasi Simulasi Demo • Klaten, Jawa Tengah</span>
            </div>
            <Button
              href="/reservasi"
              variant="primary"
              size="lg"
              className={cn(
                "w-full text-center",
                pathname === "/reservasi" && "ring-2 ring-tertiary-fixed ring-offset-2"
              )}
            >
              Ajukan Reservasi Sekarang
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
