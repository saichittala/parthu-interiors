import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Parthu Interiors Hyderabad - Free 3D Design Consultation",
  description: "Get in touch with Parthu Interiors for your 2BHK, 3BHK or villa interior design in Hyderabad. Request a free quote, visit our factory in Kokapet, or schedule a free 3D design consultation.",
  alternates: {
    canonical: "https://parthuinteriors.in/contact",
  },
  openGraph: {
    title: "Contact Us | Parthu Interiors Hyderabad",
    description: "Request a free 3D home interior consultation and itemized quote with Parthu Interiors.",
    url: "https://parthuinteriors.in/contact",
    siteName: "Parthu Interiors",
    type: "website",
    images: [
      {
        url: "/assets/main_images/luxury-living-room-with-classic-white-sofa-sofa-interior-design.webp",
        width: 1200,
        height: 630,
        alt: "Contact Parthu Interiors Hyderabad",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
