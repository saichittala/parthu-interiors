"use client";

import React, { useState } from "react";
import { PlusIcon } from "./Icons";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Which locations do you serve?",
    answer:
      "Parthu Interiors primarily serves Hyderabad and surrounding areas. Please contact us to discuss your project location.",
  },
  {
    question: "Do you provide complete home interiors?",
    answer:
      "Yes. We provide end-to-end interior design and execution services, including design, planning, furniture, kitchens, wardrobes, ceilings, lighting and other interior requirements.",
  },
  {
    question: "Do you undertake 2BHK and 3BHK projects?",
    answer:
      "Yes. We specialise in 2BHK, 3BHK, apartments, villas and other residential interior projects.",
  },
  {
    question: "Do you provide customised designs?",
    answer:
      "Yes. Every design is developed according to the client’s requirements, available space, lifestyle and design preferences.",
  },
  {
    question: "What materials do you use?",
    answer:
      "Material selection depends on the specific project and client requirements. We work with premium-quality materials, including Plywood and HDHMR, along with suitable hardware and finishes.",
  },
  {
    question: "How can I start my interior project?",
    answer:
      "You can contact us to schedule an initial consultation. Our team will understand your requirements and guide you through the next steps.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? "active" : ""}`}>
            <button
              className="faq-button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
            >
              <span className="faq-question-text">{faq.question}</span>
              <span
                className="faq-icon-circle"
                style={{
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <PlusIcon size={20} color="var(--icon-primary)" strokeWidth={1.5} />
              </span>
            </button>
            <div className="faq-answer-wrapper">
              <div className="faq-answer-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
