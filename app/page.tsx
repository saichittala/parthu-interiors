import React from "react";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_URL, SITE_NAME } from "./lib/siteConfig";

export const metadata: Metadata = {
  title: "Parthu Interiors | Premium Interior Design & Turnkey Execution Hyderabad",
  description: "Complete end-to-end responsibility from initial design to final handover. Advance planning, transparent budgeting, premium materials & regular site updates to make your dream home interior journey stress-free - Parthu Interiors.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Parthu Interiors | Premium Interior Design & Turnkey Execution Hyderabad",
    description: "Complete end-to-end responsibility from initial design to final handover - Parthu Interiors.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/assets/main_images/luxury-living-room-with-classic-white-sofa-sofa-interior-design.webp",
        width: 1200,
        height: 630,
        alt: "Parthu Interiors Hyderabad",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
