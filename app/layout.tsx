import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "./lib/siteConfig";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Parthu Interiors",
    "Parthu Interiors Hyderabad",
    "Parthu Interiors interior design",
    "interior design Hyderabad",
    "best interior designers in Hyderabad",
    "Hyderabad 2BHK 3BHK villa interiors",
    "modular kitchen Hyderabad",
    "turnkey execution Hyderabad",
    "transparent interior budget Hyderabad",
    "complete home interiors Hyderabad",
    "interior designers in Kukatpally",
    "interior designers in Madhapur",
    "interior designers in Gachibowli",
    "interior designers in Kondapur"
  ],
  authors: [{ name: "Parthu Interiors Team", url: SITE_URL }],
  creator: "Parthu Interiors",
  publisher: "Parthu Interiors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/assets/logoo.png"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon.png", type: "image/png" }
    ],
    apple: "/assets/favicon.png"
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
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