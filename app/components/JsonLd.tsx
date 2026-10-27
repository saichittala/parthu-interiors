import React from "react";

interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

import { SITE_URL, CONTACT_INFO, SITE_NAME } from "../lib/siteConfig";

export const defaultOrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["InteriorDesignStudio", "LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${SITE_URL}/#organization`,
      "name": SITE_NAME,
      "legalName": SITE_NAME,
      "alternateName": [
        "Parthu Interiors",
        "Parthu Interiors Hyderabad",
        "Parthu Interiors Design",
        "Parthu Interiors Kukatpally"
      ],
      "url": SITE_URL,
      "logo": `${SITE_URL}/assets/logoo.png`,
      "image": `${SITE_URL}/assets/main_images/luxury-living-room-with-classic-white-sofa-sofa-interior-design.webp`,
      "description": "Turnkey residential interior design and execution firm in Hyderabad, Telangana. Specializing in luxury 2BHK/3BHK apartments, villas, modular kitchens & bespoke factory woodwork.",
      "telephone": CONTACT_INFO.phone,
      "email": CONTACT_INFO.email,
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT_INFO.address.streetAddress,
        "addressLocality": CONTACT_INFO.address.addressLocality,
        "addressRegion": CONTACT_INFO.address.addressRegion,
        "postalCode": CONTACT_INFO.address.postalCode,
        "addressCountry": CONTACT_INFO.address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": CONTACT_INFO.geo.latitude,
        "longitude": CONTACT_INFO.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:30",
          "closes": "20:30"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Hyderabad" },
        { "@type": "AdministrativeArea", "name": "Kukatpally" },
        { "@type": "AdministrativeArea", "name": "Madhapur" },
        { "@type": "AdministrativeArea", "name": "Gachibowli" },
        { "@type": "AdministrativeArea", "name": "Kondapur" },
        { "@type": "AdministrativeArea", "name": "Jubilee Hills" },
        { "@type": "AdministrativeArea", "name": "Banjara Hills" },
        { "@type": "AdministrativeArea", "name": "Kokapet" },
        { "@type": "AdministrativeArea", "name": "Financial District" },
        { "@type": "AdministrativeArea", "name": "Nanakramguda" },
        { "@type": "AdministrativeArea", "name": "Manikonda" },
        { "@type": "AdministrativeArea", "name": "HITEC City" },
        { "@type": "AdministrativeArea", "name": "Tellapur" },
        { "@type": "AdministrativeArea", "name": "Kollur" },
        { "@type": "AdministrativeArea", "name": "Narsingi" },
        { "@type": "AdministrativeArea", "name": "Secunderabad" },
        { "@type": "AdministrativeArea", "name": "Kompally" },
        { "@type": "AdministrativeArea", "name": "Miyapur" },
        { "@type": "AdministrativeArea", "name": "Bachupally" }
      ],
      "founder": {
        "@type": "Person",
        "name": "Venkatesh",
        "jobTitle": "CEO & Founder",
        "worksFor": {
          "@id": `${SITE_URL}/#organization`
        }
      },
      "foundingDate": "2018",
      "knowsAbout": [
        "Turnkey Residential Interiors",
        "Modular Kitchen Design",
        "Luxury Living Suites",
        "Villa Interiors",
        "Custom Wardrobes",
        "False Ceiling & Architectural Lighting"
      ],
      "sameAs": [
        "https://www.instagram.com/parthu_interiors",
        "https://www.facebook.com/parthuinteriors",
        "https://www.justdial.com/Hyderabad/Parthu-Interiors-Near-Rain-Bow-Hospital-Hyder-Nagar-Kukatpally/040PXX40-XX40-140709130324-G9R2_BZDET"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": SITE_NAME,
      "publisher": {
        "@id": `${SITE_URL}/#organization`
      }
    }
  ]
};
