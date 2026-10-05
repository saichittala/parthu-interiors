import React from "react";
import Metadata from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms & Conditions | Parthu Interiors Hyderabad",
  description: "Terms and conditions governing turnkey residential interior design, execution contracts, payment schedules, and structural warranties with Parthu Interiors in Hyderabad.",
  canonical: "https://parthuinteriors.in/terms",
};

export default function TermsPage() {
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
              Legal Agreement
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
              Terms &amp; Conditions
            </h1>

            <p style={{ fontSize: "1.05rem", color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.7", margin: 0 }}>
              Last Updated: October 5, 2026 &bull; Effective for all turnkey interior design and execution projects by Parthu Interiors.
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid rgba(255, 255, 255, 0.12)", marginBottom: "56px" }} />

          {/* Body Section Container with Generous Spacing */}
          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>

            {/* Section 1 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                1. Scope of Agreement
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                These Terms &amp; Conditions govern all professional interior design consultation, 3D visualization, material procurement, factory manufacturing, modular fabrication, and site execution services provided by <strong>Parthu Interiors</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;) to the client (&quot;Client&quot;, &quot;you&quot;).
              </p>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                By signing a Project Bill of Quantities (BOQ), placing a booking deposit, or issuing a work order, the Client agrees to be legally bound by these terms.
              </p>
            </section>

            {/* Section 2 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                2. Design Phase &amp; 3D Visualizations
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                Initial design consultations include 2D layout planning and photorealistic 3D renders. Up to two (2) iterations per room are provided free of cost during the design phase. Additional revisions requested after 3D sign-off will incur separate design modification fees.
              </p>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                Material colors, wood grain textures, and lighting shown in 3D renders are high-fidelity representations; actual physical samples verified by the Client in person shall be final.
              </p>
            </section>

            {/* Section 3 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                3. Payment Schedule &amp; Financial Terms
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                All turnkey project payments follow a transparent milestone-based structure:
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "24px", color: "rgba(255, 255, 255, 0.78)", fontSize: "1.02rem", lineHeight: "1.75", margin: 0 }}>
                <li><strong>10% Booking Deposit:</strong> Initiates site measurement and 2D/3D design drafting.</li>
                <li><strong>40% Production Advance:</strong> Paid upon final 3D design and BOQ sign-off prior to factory plywood cutting and material dispatch.</li>
                <li><strong>45% Pre-Installation Milestone:</strong> Paid upon factory material delivery to site before modular assembly commences.</li>
                <li><strong>5% Final Handover:</strong> Paid upon completion of snag list inspection and site handover.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                4. Project Timeline &amp; Site Readiness
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                Our standard execution timeline is 45 working days from final BOQ sign-off and site handover by the builder/Client. Timelines depend on site readiness, continuous power/water supply, and uninhibited access for our installation technicians.
              </p>
            </section>

            {/* Section 5 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                5. 10-Year Structural Warranty
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                Parthu Interiors provides a 10-Year Warranty against structural manufacturing defects on all 100% BWP (Boiling Water Proof) marine plywood woodwork. Hardware (Hafele, Blum, Hettich) is covered under the respective manufacturer warranties.
              </p>
            </section>

            {/* Section 6 */}
            <section style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.01em", margin: 0 }}>
                6. Contact Information
              </h2>
              <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.8", margin: 0 }}>
                For any questions regarding these Terms &amp; Conditions, please contact us at:
              </p>
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
                <strong>Parthu Interiors</strong>
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
