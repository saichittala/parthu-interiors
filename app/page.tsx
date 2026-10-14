import React from "react";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Parthu Interiors | Premium Interior Design & Turnkey Execution Hyderabad",
  description: "Complete end-to-end responsibility from initial design to final handover. Advance planning, transparent budgeting, premium materials & regular site updates to make your dream home interior journey stress-free - Parthu Interiors.",
  alternates: {
    canonical: "https://parthuinteriors.in",
  },
  openGraph: {
    title: "Parthu Interiors | Premium Interior Design & Turnkey Execution Services Hyderabad",
    description: "Complete end-to-end responsibility from initial design to final handover. Advance planning, transparent budgeting, premium materials & regular site updates to complete your dream home stress-free.",
    url: "https://parthuinteriors.in",
    siteName: "Parthu Interiors",
    images: [
      {
        url: "/assets/logoo.png",
        width: 1024,
        height: 360,
        alt: "Parthu Interiors - Premium Interior Design & Turnkey Execution Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
