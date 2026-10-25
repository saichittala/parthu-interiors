import React from "react";
import JsonLd, { defaultOrganizationSchema } from "../components/JsonLd";
import ServicesClient from "./ServicesClient";
import { SITE_URL, SITE_NAME } from "../lib/siteConfig";

export const metadata = {
  title: "Residential Interior Design Services in Hyderabad | Parthu Interiors",
  description: "Explore turnkey interior design services in Hyderabad. Modular kitchens, luxury bedrooms, living suites, wardrobes, pooja rooms & office space interiors.",
  alternates: {
    canonical: `${SITE_URL}/services`
  },
  openGraph: {
    title: "Residential Interior Design Services in Hyderabad | Parthu Interiors",
    description: "Complete residential interior design & turnkey execution services in Hyderabad.",
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    type: "website"
  }
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${SITE_URL}/services`
      }
    ]
  };

  return (
    <>
      <JsonLd data={[defaultOrganizationSchema, breadcrumbSchema]} />
      <ServicesClient />
    </>
  );
}
