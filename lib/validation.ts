import { z } from "zod";
import { roomsData } from "@/data/rooms";

// Format helper to get today in YYYY-MM-DD (local time)
export function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Clean phone string helper
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/[\s-]/g, "");
}

// Regex for Indonesian phone: starts with 08 or +628 or 628, followed by digits, total 9-15 digits
const indoPhoneRegex = /^(\+62|62|0)8[0-9]{7,12}$/;

export const reservationFormSchema = z
  .object({
    fullName: z
      .string({ required_error: "Nama lengkap wajib diisi" })
      .trim()
      .min(3, "Nama lengkap minimal 3 karakter")
      .max(60, "Nama lengkap maksimal 60 karakter"),

    phone: z
      .string({ required_error: "Nomor WhatsApp wajib diisi" })
      .trim()
      .min(1, "Nomor WhatsApp wajib diisi")
      .refine(
        (val) => {
          const cleaned = cleanPhoneNumber(val);
          return indoPhoneRegex.test(cleaned) && cleaned.length >= 9 && cleaned.length <= 15;
        },
        {
          message: "Format nomor WhatsApp tidak valid. Gunakan format Indonesia (misal: 0812... atau +62812... 9-15 digit)",
        }
      ),

    email: z
      .string()
      .trim()
      .optional()
      .refine((val) => !val || val === "" || z.string().email().safeParse(val).success, {
        message: "Format alamat email tidak valid",
      }),

    roomSlug: z
      .string({ required_error: "Tipe kamar wajib dipilih" })
      .min(1, "Tipe kamar wajib dipilih")
      .refine((val) => roomsData.some((r) => r.slug === val), {
        message: "Tipe kamar tidak valid",
      }),

    checkIn: z
      .string({ required_error: "Tanggal check-in wajib dipilih" })
      .min(1, "Tanggal check-in wajib dipilih")
      .refine(
        (val) => {
          const today = getTodayString();
          return val >= today;
        },
        {
          message: "Tanggal check-in tidak boleh sebelum hari ini",
        }
      ),

    checkOut: z
      .string({ required_error: "Tanggal check-out wajib dipilih" })
      .min(1, "Tanggal check-out wajib dipilih"),

    guests: z.coerce
      .number({ invalid_type_error: "Jumlah tamu wajib diisi" })
      .int("Jumlah tamu harus berupa bilangan bulat")
      .min(1, "Minimal 1 orang tamu"),

    notes: z
      .string()
      .max(300, "Catatan maksimal 300 karakter")
      .optional(),

    demoConsent: z
      .boolean({ required_error: "Wajib menyetujui pernyataan mode demo" })
      .refine((val) => val === true, {
        message: "Anda wajib menyetujui pernyataan mode demo untuk melanjutkan",
      }),
  })
  .superRefine((data, ctx) => {
    // 1. Check-out must be after check-in
    if (data.checkIn && data.checkOut) {
      if (data.checkOut <= data.checkIn) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["checkOut"],
          message: "Tanggal check-out harus setelah tanggal check-in",
        });
      }
    }

    // 2. Guests count must not exceed room capacity
    if (data.roomSlug) {
      const selectedRoom = roomsData.find((r) => r.slug === data.roomSlug);
      if (selectedRoom) {
        if (data.guests > selectedRoom.capacity) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["guests"],
            message: `Kapasitas maksimal untuk ${selectedRoom.name} adalah ${selectedRoom.capacity} tamu`,
          });
        }
      }
    }
  });

export type ReservationFormData = z.infer<typeof reservationFormSchema>;

export interface ConfirmedReservation {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  roomSlug: string;
  roomName: string;
  roomPrice: number;
  roomImage: string;
  roomSpecs: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  notes?: string;
  totalPrice: number;
  totalFormatted: string;
  submittedAt: string;
}
