import React from "react";
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Parthu Interiors Hyderabad - Turnkey Interior Firm",
  description: "Learn about Parthu Interiors. Dedicated residential interior design & turnkey execution firm in Hyderabad. Direct factory manufacturing in Kokapet, 100% BWP marine plywood, and 10-year warranty.",
  alternates: {
    canonical: "https://parthuinteriors.in/about",
  },
  openGraph: {
    title: "About Parthu Interiors | Turnkey Interior Design Firm Hyderabad",
    description: "Complete end-to-end responsibility from initial design to final handover. Advance planning, transparent budgeting, premium materials & regular site updates.",
    url: "https://parthuinteriors.in/about",
    siteName: "Parthu Interiors",
    type: "website",
    images: [
      {
        url: "/assets/main_images/luxury-living-room-with-classic-white-sofa-sofa-interior-design.webp",
        width: 1200,
        height: 630,
        alt: "Parthu Interiors About Us",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
