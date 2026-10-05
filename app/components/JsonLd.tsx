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

export const defaultOrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["InteriorDesignStudio", "LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://parthuinteriors.in/#organization",
      "name": "Parthu Interiors",
      "legalName": "Parthu Interiors",
      "alternateName": ["Parthu Interiors", "Parthu Interiors Interiors"],
      "url": "https://parthuinteriors.in",
      "logo": "https://parthuinteriors.in/logo.png",
      "image": "https://parthuinteriors.in/assets/main_images/luxury-living-room-with-classic-white-sofa-sofa-interior-design.webp",
      "description": "Turnkey residential interior design and execution firm in Hyderabad, Telangana. Specializing in luxury 2BHK/3BHK apartments, villas, modular kitchens & bespoke woodwork.",
      "telephone": "+91-8790905746",
      "email": "parthuinteriors.hyderabad@gmail.com",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.3850",
        "longitude": "78.4867"
      },
      "areaServed": [
        { "@type": "City", "name": "Hyderabad" },
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
        { "@type": "AdministrativeArea", "name": "Narsingi" },
        { "@type": "AdministrativeArea", "name": "Secunderabad" },
        { "@type": "AdministrativeArea", "name": "Kompally" },
        { "@type": "AdministrativeArea", "name": "Attapur" }
      ],
      "founder": {
        "@type": "Person",
        "name": "Venkatesh",
        "jobTitle": "CEO & Founder",
        "worksFor": {
          "@id": "https://parthuinteriors.in/#organization"
        }
      },
      "foundingDate": "2018",
      "knowsAbout": ["Turnkey Residential Interiors", "Modular Kitchen Design", "Luxury Living Suites", "Villa Interiors"],
      "sameAs": [
        "https://parthuinteriors.in"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://parthuinteriors.in/#website",
      "url": "https://parthuinteriors.in",
      "name": "Parthu Interiors",
      "publisher": {
        "@id": "https://parthuinteriors.in/#organization"
      }
    }
  ]
};
