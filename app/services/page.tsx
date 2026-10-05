import React from "react";
import JsonLd, { defaultOrganizationSchema } from "../components/JsonLd";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Residential Interior Design Services in Hyderabad | Parthu Interiors",
  description: "Explore turnkey interior design services in Hyderabad. Modular kitchens, luxury bedrooms, living suites, wardrobes, pooja rooms & office space interiors.",
  alternates: {
    canonical: "https://parthuinteriors.com/services"
  },
  openGraph: {
    title: "Residential Interior Design Services in Hyderabad | Parthu Interiors",
    description: "Complete residential interior design & turnkey execution services in Hyderabad.",
    url: "https://parthuinteriors.com/services",
    siteName: "Parthu Interiors",
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
        "item": "https://parthuinteriors.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://parthuinteriors.com/services"
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
