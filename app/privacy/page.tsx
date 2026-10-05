import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Parthu Interiors Hyderabad",
  description: "Privacy policy detailing data collection, lead processing, customer privacy, and protection standards at Parthu Interiors Hyderabad.",
  canonical: "https://parthuinteriors.in/privacy",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "var(--bg-dark-primary, #060606)", color: "#FFFFFF", minHeight: "100vh" }}>
      <Header />

      <article style={{ padding: "clamp(90px, 11vw, 150px) 24px clamp(80px, 10vw, 120px) 24px" }}>
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          
          {/* Header Badge & Title */}
          <div style={{ marginBottom: "64px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--brand-primary, #C1121F)",
                marginBottom: "16px",
                padding: "6px 14px",
                background: "rgba(193, 18, 31, 0.12)",
                borderRadius: "9999px",
                border: "1px solid rgba(193, 18, 31, 0.25)",
              }}
            >
              Data Protection
            </span>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: "800",
                lineHeight: "1.2",
                color: "#FFFFFF",
                marginBottom: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              Privacy Policy
            </h1>

            <p style={{ fontSize: "1.05rem", color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.7", margin: 0 }}>
              Last Updated: October 5, 2026 &bull; Explaining how Parthu Interiors protects and handles your personal information.
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid rgba(255, 255, 255, 0.12)", marginBottom: "56px" }} />

          {/* Body Section Container with Generous Spacing */}
          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>

            {/* Section 1 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                1. Information We Collect
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                At <strong>Parthu Interiors</strong>, we respect your privacy and are committed to protecting all personal information shared with us. When you request a consultation, estimate, or site visit via our website or WhatsApp, we collect:
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "24px", color: "rgba(255, 255, 255, 0.78)", fontSize: "1.02rem", lineHeight: "1.75", margin: 0 }}>
                <li>Full Name and Contact Number</li>
                <li>Email Address</li>
                <li>Property Location (Gated Community, Apartment, or Villa Name in Hyderabad)</li>
                <li>Floor Plan preferences and scope of interior work requested</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                2. How We Use Your Information
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                The personal information provided is strictly utilized to:
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "24px", color: "rgba(255, 255, 255, 0.78)", fontSize: "1.02rem", lineHeight: "1.75", margin: 0 }}>
                <li>Schedule 2D/3D design consultations and site measurement visits.</li>
                <li>Generate itemized Bill of Quantities (BOQs) and project estimates.</li>
                <li>Provide WhatsApp or SMS updates regarding factory manufacturing and site progress.</li>
                <li>Deliver post-handover customer support and warranty services.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                3. Non-Disclosure &amp; Third-Party Sharing
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                We <strong>never sell, rent, or trade</strong> your personal information to external telemarketers, third-party lead brokers, or advertising agencies. Data is shared exclusively with internal project managers and assigned installation supervisors for site execution purposes.
              </p>
            </section>

            {/* Section 4 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                4. Data Security &amp; Retention
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                We implement industry-standard administrative, physical, and technical safeguards to secure your personal data against unauthorized access, loss, or alteration. Lead inquiries are stored in secure databases for the duration of your project and 10-year warranty period.
              </p>
            </section>

            {/* Section 5 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                5. Your Privacy Rights
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                You have the right to request access to the personal data we hold about you, request corrections, or opt-out of promotional updates at any time by contacting our support team at <strong>parthuinteriors.hyderabad@gmail.com</strong>.
              </p>
            </section>

            {/* Section 6 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                6. Contact Privacy Team
              </h2>
              <div
                style={{
                  padding: "24px 28px",
                  background: "rgba(255, 255, 255, 0.04)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "1rem",
                  color: "#FFFFFF",
                }}
              >
                <strong>Parthu Interiors Privacy Office</strong>
                <span style={{ color: "rgba(255, 255, 255, 0.75)" }}>Kukatpally, Hyderabad, Telangana 500072</span>
                <span style={{ color: "rgba(255, 255, 255, 0.75)" }}>Phone: +91 87909 05746</span>
                <span style={{ color: "rgba(255, 255, 255, 0.75)" }}>Email: parthuinteriors.hyderabad@gmail.com</span>
              </div>
            </section>

          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
