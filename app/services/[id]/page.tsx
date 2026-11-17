import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import JsonLd, { defaultOrganizationSchema } from "../../components/JsonLd";
import { servicesData } from "../../lib/servicesData";
import { getServices, getServiceBySlug } from "@/sanity/client";
import { SITE_URL, SITE_NAME } from "../../lib/siteConfig";

export const revalidate = 10;

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const sanityServices = await getServices();
  const allServices = sanityServices && sanityServices.length > 0 ? sanityServices : servicesData;
  return allServices.map((s) => ({
    id: s.id,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const service = await getServiceBySlug(id);

  if (!service) {
    return {
      title: "Service Not Found | Parthu Interiors"
    };
  }

  const canonicalUrl = `${SITE_URL}/services/${service.id}`;

  return {
    title: service.metaTitle || `${service.title} Interior Design Hyderabad | Parthu Interiors`,
    description: service.metaDescription || service.description.slice(0, 160),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: service.metaTitle || `${service.title} Interior Design Hyderabad | Parthu Interiors`,
      description: service.metaDescription || service.description.slice(0, 160),
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: service.mainImage.startsWith("http") ? service.mainImage : `${SITE_URL}${service.mainImage}`,
          alt: `${service.title} - Parthu Interiors Hyderabad`
        }
      ]
    }
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = await params;
  const service = await getServiceBySlug(id);

  if (!service) {
    notFound();
  }

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `${SITE_URL}/services/${service.id}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "InteriorDesignStudio",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "areaServed": {
      "@type": "City",
      "name": "Hyderabad"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.category,
      "itemListElement": service.features.map((feat, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feat
        }
      }))
    }
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <>
      <JsonLd data={[defaultOrganizationSchema, breadcrumbSchema, serviceSchema, ...(faqSchema ? [faqSchema] : [])]} />
      <ServiceDetailClient service={service} />
    </>
  );
}
