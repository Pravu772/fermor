import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fermor — Smart Financial Decisions for India",
  description:
    "Clarity for every financial decision. Free calculators, insights and tools that help you understand, plan and grow your money, built for India.",
  keywords: [
    "SIP calculator India",
    "Home loan EMI calculator",
    "PPF calculator",
    "New Tax Regime calculator",
    "Indian personal finance",
    "Fermor",
  ],
  authors: [{ name: "Fermor Technologies Pvt. Ltd." }],
  creator: "Fermor Technologies Pvt. Ltd.",
  publisher: "Fermor Technologies Pvt. Ltd.",
  metadataBase: new URL("https://fermor.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fermor — Smart Financial Decisions for India",
    description:
      "Free tools, insights and calculators that help you understand, plan and grow your money, built for India.",
    url: "https://fermor.in",
    siteName: "Fermor",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fermor — Smart Financial Decisions for India",
    description:
      "Clarity for every financial decision. Free calculators and tools built for India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Fermor",
              url: "https://fermor.in",
              description:
                "Smart financial decisions for India. Free tools, insights and calculators.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF9F5] text-[#111A15] antialiased selection:bg-[#D3E7DE] selection:text-[#0E2F22]">
        {children}
      </body>
    </html>
  );
}
