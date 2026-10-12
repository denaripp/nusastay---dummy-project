import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nusastay.example.com"),
  title: {
    default: "NusaStay — Suaka Peristirahatan & Paviliun Jawa Tengah",
    template: "%s | NusaStay",
  },
  description:
    "Penginapan boutique bernuansa arsitektur vernakular Jawa di lembah sejuk Menoreh, Jawa Tengah. Menghadirkan ketenangan batin, kebun botani, dan keramahan hangat.",
  keywords: [
    "NusaStay",
    "Boutique Inn Jawa Tengah",
    "Penginapan Menoreh",
    "Resort Tradisional Klaten",
    "Sanctuary Jawa",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nusastay.example.com",
    siteName: "NusaStay Boutique Inn",
    title: "NusaStay — Suaka Peristirahatan & Paviliun Jawa Tengah",
    description:
      "Penginapan boutique bernuansa arsitektur vernakular Jawa di lembah sejuk Menoreh, Jawa Tengah.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-background text-on-surface font-sans antialiased selection:bg-secondary-container selection:text-on-surface min-h-screen flex flex-col">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-container focus:text-on-primary focus:rounded-full focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-tertiary-fixed font-button-text text-button-text"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
