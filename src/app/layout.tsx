import type { Metadata } from "next";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { CookieConsent } from "@/components/cookie-consent";
import { SiteNav } from "@/components/inner-page";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ferrax.in";

export const metadata: Metadata = {
  title: "FERRAX | Digital Growth x Technology x Automation",
  description:
    "FERRAX builds connected digital systems that attract, convert and retain customers.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "FERRAX",
    description: "Digital Growth x Technology x Automation.",
    url: siteUrl,
    siteName: "FERRAX",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "FERRAX",
    description: "Digital Growth x Technology x Automation.",
  },
  icons: {
    icon: [
      { url: "/Fav icon.png?v=5", type: "image/png", sizes: "32x32" },
      { url: "/Fav icon.png?v=5", type: "image/png", sizes: "192x192" },
      { url: "/Fav icon.png?v=5", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/Fav icon.png?v=5", type: "image/png", sizes: "180x180" }],
  },
  other: {
    "application-name": "FERRAX",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FERRAX",
  url: siteUrl,
  description: "Digital growth, technology and automation for connected customer acquisition systems.",
  areaServed: ["Coimbatore", "Tamil Nadu", "India"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <AnalyticsProvider />
        <CookieConsent />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
