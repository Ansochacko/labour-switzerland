import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://labourswitzerland.com"),
  title: {
    default: "Labour Switzerland — Swiss Residence Permits, Wages & Tax Rights",
    template: "%s | Labour Switzerland",
  },
  description:
    "Plain-English guide to Swiss work permits (B, L, G, C), withholding tax (Quellensteuer), and benchmark wages. Sourced from SEM guidelines and FSO data.",
  keywords: [
    "B permit Switzerland explained",
    "L permit Switzerland",
    "G permit Switzerland cross-border",
    "C permit Switzerland permanent residence",
    "Quellensteuer Switzerland",
    "Swiss salary calculator",
    "withholding tax Switzerland permit",
    "moving to Switzerland for work",
  ],
  authors: [{ name: "Labour Switzerland Editorial Team" }],
  creator: "Labour Switzerland",
  publisher: "Labour Switzerland",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://labourswitzerland.com",
  },
  openGraph: {
    type: "website",
    locale: "en_CH",
    url: "https://labourswitzerland.com",
    siteName: "Labour Switzerland",
    title: "Labour Switzerland — Swiss Residence Permits, Wages & Tax Rights",
    description:
      "Plain-English guide to Swiss work permits (B, L, G, C), withholding tax (Quellensteuer), and benchmark wages. Sourced from SEM guidelines and FSO data.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labour Switzerland — Swiss Residence Permits, Wages & Tax Rights",
    description:
      "Plain-English guide to Swiss work permits (B, L, G, C), withholding tax (Quellensteuer), and benchmark wages. Sourced from SEM guidelines and FSO data.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Labour Switzerland",
    url: "https://labourswitzerland.com",
    logo: "https://labourswitzerland.com/logo.svg",
    description:
      "Independent information guide covering Swiss work permits, taxation at source, and labor standards.",
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    knowsAbout: [
      "Swiss Residence Permits (B, L, G, C)",
      "Quellensteuer (Withholding Tax at Source)",
      "Federal Act on Foreign Nationals and Integration (FNIA / AIG)",
      "Swiss Code of Obligations (CO / OR)",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Labour Switzerland",
    url: "https://labourswitzerland.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://labourswitzerland.com/cantons?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-surface text-on-surface antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
