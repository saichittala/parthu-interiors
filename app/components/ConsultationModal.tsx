"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  XCloseIcon,
  CheckCircleIcon,
  LockIcon,
  WhatsAppIcon,
} from "./Icons";
import ChoiceChips, { ChoiceOption } from "./ui/ChoiceChips";
import { submitLeadToGoogleSheet, openWhatsAppLeadChat, formatWhatsAppNumber, getLeadWhatsAppMessage } from "../lib/leadSubmission";
import { Button } from "./arc/button/button";

const PROPERTY_TYPES: ChoiceOption[] = [
  { value: "2 BHK Apartment", label: "2 BHK" },
  { value: "3 BHK Apartment", label: "3 BHK" },
  { value: "Villa / Independent House", label: "Villa / House" },
  { value: "Home Renovation", label: "Renovation" },
];

const SCOPE_TYPES: ChoiceOption[] = [
  { value: "Complete Home Interior", label: "Complete Home" },
  { value: "Modular Kitchen & Wardrobes", label: "Kitchen & Wardrobes" },
  { value: "Living & TV Unit", label: "Living & TV Unit" },
  { value: "False Ceiling & Lighting", label: "Ceiling & Lighting" },
];

const BUDGET_TYPES: ChoiceOption[] = [
  { value: "Custom Budget", label: "Flexible Budget" },
  { value: "2BHK Complete", label: "2BHK Package" },
  { value: "3BHK Premium", label: "3BHK Package" },
  { value: "Luxury Villa Scope", label: "Luxury Villa" },
];

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [mounted, setMounted] = useState(false);
  const [showOptionalDetails, setShowOptionalDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "3 BHK Apartment",
    location: "Hyderabad",
    scope: "",
    budget: "",
    timeToStart: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cleanPhone = formData.phone.trim();
    const formattedPhone = cleanPhone.startsWith("+91") ? cleanPhone : `+91 ${cleanPhone}`;

    const leadPayload = {
      name: formData.name || "Client",
      phone: formattedPhone,
      email: formData.email,
      propertyType: formData.propertyType,
      location: formData.location || "Hyderabad",
      scope: formData.scope,
      budget: formData.budget,
      timeToStart: formData.timeToStart,
      source: "Book Consultation Modal",
    };

    await submitLeadToGoogleSheet(leadPayload);

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      openWhatsAppLeadChat(leadPayload);
    }, 800);
  };

  return ReactDOM.createPortal(
    <div className={`modal-backdrop ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "460px",
          padding: "24px 22px",
          background: "#0a0b0d",
          border: "none",
          boxShadow: "0 24px 64px rgba(0,0,0,0.95), 0 0 32px rgba(255, 99, 100, 0.08)",
        }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <XCloseIcon size={18} color="#FFFFFF" />
        </button>

        {submitted ? (
          <div className="form-success-state" style={{ padding: "16px 0", textAlign: "center" }}>
            <div
              className="form-success-icon featured-icon"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-circle)",
                background: "rgba(37, 211, 102, 0.12)",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px",
              }}
            >
              <CheckCircleIcon size={26} color="#25D366" />
            </div>
            <h3 className="modal-title" style={{ fontSize: "19px", marginBottom: "6px" }}>
              Consultation Requested!
            </h3>
            <p className="modal-body-text" style={{ fontSize: "13px", marginBottom: "16px", color: "rgba(255, 255, 255, 0.75)" }}>
              Data saved. Opening WhatsApp chat to share directly with {formData.phone || "the client"}...
            </p>

            <Button
              href={`https://wa.me/${formatWhatsAppNumber(formData.phone)}?text=${encodeURIComponent(getLeadWhatsAppMessage({ ...formData, source: "Book Consultation Modal" }))}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              style={{ width: "100%", marginBottom: "10px", gap: "8px" }}
            >
              <WhatsAppIcon size={18} />
              <span>Share to {formData.phone || "Client"} on WhatsApp</span>
            </Button>

            <Button
              variant="secondary"
              size="md"
              style={{ width: "100%" }}
              onClick={onClose}
            >
              Close Window
            </Button>
          </div>
        ) : (
          <div>
            <h3 className="modal-title" style={{ fontSize: "21px", marginBottom: "16px", fontWeight: "700", paddingRight: "32px" }}>
              Home Planning Consultation
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: "13px", marginBottom: "6px", fontWeight: 600, color: "rgba(255, 255, 255, 0.9)" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ananya Rao"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: "13px", marginBottom: "6px", fontWeight: 600, color: "rgba(255, 255, 255, 0.9)" }}>
                    WhatsApp Phone *
                  </label>
                  <div className="phone-input-group">
                    <span className="phone-prefix" style={{ fontSize: "13.5px" }}>+91</span>
                    <span className="phone-separator" />
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      className="phone-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label className="form-label" style={{ fontSize: "13px", marginBottom: "6px", fontWeight: 600, color: "rgba(255, 255, 255, 0.9)" }}>
                  Project Location / Apartment *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Magna Solitaire, Kokapet"
                  className="form-input"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <ChoiceChips
                label="Property Type"
                options={PROPERTY_TYPES}
                selectedValue={formData.propertyType}
                onChange={(val) => setFormData({ ...formData, propertyType: val })}
                variant="dark"
                columns={4}
                style={{ marginBottom: "12px" }}
              />

              {!showOptionalDetails ? (
                <button
                  type="button"
                  onClick={() => setShowOptionalDetails(true)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255, 255, 255, 0.65)",
                    fontSize: "13px",
                    cursor: "pointer",
                    padding: "4px 0",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C1121F")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)")}
                >
                  <span>+ Add Design Scope &amp; Budget (Optional)</span>
                </button>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
                  <ChoiceChips
                    label="Design Scope"
                    options={SCOPE_TYPES}
                    selectedValue={formData.scope}
                    onChange={(val) => setFormData({ ...formData, scope: val })}
                    variant="dark"
                    columns={2}
                    style={{ marginBottom: 0 }}
                  />

                  <ChoiceChips
                    label="Planned Investment / Budget"
                    options={BUDGET_TYPES}
                    selectedValue={formData.budget}
                    onChange={(val) => setFormData({ ...formData, budget: val })}
                    variant="dark"
                    columns={2}
                    style={{ marginBottom: 0 }}
                  />
                </div>
              )}

              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                variant="primary"
                size="lg"
                style={{
                  width: "100%",
                  height: "50px",
                  fontSize: "15.5px",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ whiteSpace: "nowrap", wordBreak: "keep-all" }}>
                  {isSubmitting ? "Submitting..." : "Get Quote on WhatsApp"}
                </span>
              </Button>

              <div className="modal-privacy-note" style={{ marginTop: "12px", fontSize: "12.5px", color: "rgba(255, 255, 255, 0.65)" }}>
                <LockIcon size={14} color="#C1121F" />
                <span>Zero Spam Guarantee • Expert Consultation &amp; Site Assessment</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
