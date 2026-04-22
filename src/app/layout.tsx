import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galleria Shoe Care | Luxury Shoe & Leather Repair — Glendale, CA",
  description:
    "Expert repair and restoration for designer shoes, bags, and leather goods. Louis Vuitton, Hermès, Louboutin, Goyard, Chanel, Amiri. Located at Glendale Galleria.",
  openGraph: {
    title: "Galleria Shoe Care",
    description:
      "Luxury shoe and leather repair in Glendale, California. Two decades of craftsmanship at the Glendale Galleria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
