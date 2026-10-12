import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://nusastay.example.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/reservasi/konfirmasi"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
