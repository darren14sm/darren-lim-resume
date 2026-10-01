import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { person, site } from "@/data/cv";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: person.name }],
  alternates: { canonical: "/" },
  facebook: { appId: "1138151802103382" },
  openGraph: {
    type: "website",
    title: site.social.title,
    description: site.social.description,
    url: site.url,
    siteName: site.social.title,
    locale: "en_GB",
    images: [
      {
        url: new URL(site.social.image.src, site.url).toString(),
        width: site.social.image.width,
        height: site.social.image.height,
        alt: site.social.image.alt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.social.title,
    description: site.social.description,
    images: [
      {
        url: new URL(site.social.image.src, site.url).toString(),
        width: site.social.image.width,
        height: site.social.image.height,
        alt: site.social.image.alt,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#f1ece3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
