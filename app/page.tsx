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
    title: "Parthu Interiors | Premium Interior Design & Turnkey Execution Services Hyderabad",
    description: "Complete end-to-end responsibility from initial design to final handover. Advance planning, transparent budgeting, premium materials & regular site updates to complete your dream home stress-free.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/assets/logoo.png`,
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
