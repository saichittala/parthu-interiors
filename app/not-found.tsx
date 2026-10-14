import React from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowRightIcon, HomeIcon, PhoneIcon } from "./components/Icons";

export const metadata = {
  title: "404 - Page Not Found | Parthu Interiors",
  description: "The page you are looking for does not exist or has been moved. Explore our interior design services and completed projects in Hyderabad.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        style={{
          background: "#060606",
          color: "#FFFFFF",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "140px 24px 80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(193, 18, 31, 0.15)",
              color: "var(--brand-primary, #C1121F)",
              border: "1px solid rgba(193, 18, 31, 0.3)",
              padding: "6px 14px",
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            404 Error • Page Not Found
          </span>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              marginBottom: "18px",
            }}
          >
            Looks Like You&apos;ve Stepped Into an Unfurnished Space
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255, 255, 255, 0.72)",
              lineHeight: "1.65",
              marginBottom: "36px",
            }}
          >
            The link you followed may be broken, or the page may have been moved or updated.
            Let&apos;s guide you back to our curated interior designs and completed homes in Hyderabad.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              justifyContent: "center",
              marginBottom: "48px",
            }}
          >
            <Link
              href="/"
              className="btn btn-primary btn-lg"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <HomeIcon size={18} />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/services"
              className="btn btn-secondary-glass btn-lg"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                borderRadius: "50px",
                padding: "14px 28px",
              }}
            >
              <span>Explore Services</span>
              <ArrowRightIcon size={18} />
            </Link>

            <Link
              href="/locations"
              className="btn btn-secondary-glass btn-lg"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                borderRadius: "50px",
                padding: "14px 28px",
              }}
            >
              <span>Hyderabad Locations</span>
              <ArrowRightIcon size={18} />
            </Link>
          </div>

          <div
            style={{
              padding: "20px 24px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "0.92rem",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <span>Need immediate interior design consultation?</span>
            <a
              href="tel:+918790905746"
              style={{
                color: "var(--brand-primary, #C1121F)",
                fontWeight: "700",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <PhoneIcon size={15} color="var(--brand-primary, #C1121F)" />
              <span>+91 87909 05746</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
