import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parthuinteriors.in"),
  alternates: {
    canonical: "https://parthuinteriors.in",
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
  title: "Parthu Interiors | Premium Interior Design & Turnkey Execution Hyderabad",
  description: "Complete end-to-end responsibility from initial design to final handover. Advance planning, transparent budgeting, premium materials & regular site updates to make your dream home interior journey stress-free - Parthu Interiors.",
  keywords: [
    "Parthu Interiors",
    "Parthu Interiors Hyderabad",
    "Parthu Interiors interior design",
    "interior design Hyderabad",
    "Hyderabad 2BHK 3BHK villa interiors",
    "modular kitchen Hyderabad",
    "turnkey execution Hyderabad",
    "transparent interior budget Hyderabad",
    "complete home interiors Hyderabad"
  ],
  authors: [{ name: "Parthu Interiors Team" }],
  openGraph: {
    title: "Parthu Interiors | Premium Interior Design & Turnkey Execution Services",
    description: "Complete end-to-end responsibility from initial design to final handover. Advance planning, transparent budgeting, premium materials & regular site updates to complete your dream home stress-free.",
    url: "https://parthuinteriors.in",
    siteName: "Parthu Interiors",
    images: [
      {
        url: "/assets/logoo.png",
        width: 1024,
        height: 360,
        alt: "Parthu Interiors - Premium Interior Design & Turnkey Execution",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parthu Interiors | Premium Interior Design & Turnkey Execution Hyderabad",
    description: "Complete end-to-end responsibility from initial design to final handover. Transparent budgeting & 10-year warranty.",
    images: ["/assets/logoo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/assets/favicon.png", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  }
};

import ScrollRevealProvider from "./components/ScrollRevealProvider";
import Header from "./components/Header";

const FloatingWhatsApp = dynamic(() => import("./components/FloatingWhatsApp"));
const TimedLeadModal = dynamic(() => import("./components/TimedLeadModal"));

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakartaSans.variable}>
      <head />
      <body className={`${plusJakartaSans.className} antialiased`}>
        <ScrollRevealProvider>
          <Header />
          {children}
          <FloatingWhatsApp />
          <TimedLeadModal />
        </ScrollRevealProvider>
      </body>
    </html>
  );
}