"use client";

import React from "react";
import {
  FaqSection,
  type FaqItem,
  type FaqSectionProps,
} from "./arc/blocks/faq-section/faq-section";

export const parthuFaqs: FaqItem[] = [
  {
    id: "locations-served",
    question: "Which locations do you serve in Hyderabad?",
    answer:
      "Parthu Interiors primarily serves Hyderabad and surrounding premium neighborhoods, including Gachibowli, Financial District, Kokapet, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Nallagandla, Tellapur, and Miyapur. Contact us to discuss your project location.",
    category: "Locations",
  },
  {
    id: "turnkey-services",
    question: "Do you provide complete turnkey home interiors?",
    answer:
      "Yes. We provide complete end-to-end interior design and execution services—including 2D/3D space planning, factory-finished modular woodwork, designer kitchens, wardrobes, false ceilings, electricals, decorative lighting, and final turnkey handover.",
    category: "Services",
  },
  {
    id: "apartment-villa-types",
    question: "Do you undertake 2BHK, 3BHK, and luxury villa projects?",
    answer:
      "Yes. We specialize in 2BHK and 3BHK residential apartments, luxury duplexes, penthouses, and gated community villas across Hyderabad.",
    category: "Services",
  },
  {
    id: "custom-designs",
    question: "Do you provide 100% customised designs?",
    answer:
      "Yes. Every design is custom engineered for your specific floor plan, family lifestyle, storage requirements, and aesthetic preferences. You receive photorealistic 3D visualizations before execution begins.",
    category: "Design",
  },
  {
    id: "materials-hardware",
    question: "What materials and hardware brands do you use?",
    answer:
      "We build exclusively with certified Boiling Water Proof (BWP) Plywood and HDHMR with anti-bubble factory press lamination. Hardware is sourced directly from global leaders including Hettich, Hafele, and Blum, backed by up to a 10-year material warranty.",
    category: "Materials",
  },
  {
    id: "project-timeline",
    question: "What is your typical project execution timeline?",
    answer:
      "Our standard handover timeline is 45 working days from final 3D design approval and material sign-off, backed by milestone tracking and dedicated site project managers.",
    category: "Timeline",
  },
  {
    id: "getting-started",
    question: "How can I start my interior project with Parthu Interiors?",
    answer:
      "You can schedule a free consultation with our senior designers. We will review your floor plan, understand your design preferences and budget, and provide a transparent, detailed estimate.",
    category: "General",
  },
];

export default function FaqAccordion(props: Partial<FaqSectionProps>) {
  return (
    <FaqSection
      id="faq"
      title="Got Questions? We Have Answers."
      description="Everything you need to know about our interior design process, materials, timelines, and turnkey execution in Hyderabad."
      items={parthuFaqs}
      contact={{
        label: "Still have a question?",
        description: "Chat directly with our Hyderabad design consultants.",
        href: `https://wa.me/918790905746?text=${encodeURIComponent(
          "Hi PARTHU INTERIORS! 👋 I have a question regarding interior design and execution for my home."
        )}`,
      }}
      {...props}
    />
  );
}

export { FaqSection };
export type { FaqItem, FaqSectionProps };
