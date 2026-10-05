import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  SparklesIcon
} from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div>
            <img
              src="/assets/logo.png"
              alt="Parthu Interiors"
              className="footer-logo-img"
              style={{ height: "40px", maxHeight: "44px", width: "auto", objectFit: "contain", marginBottom: "16px" }}
            />
            <p style={{ color: "#FFFFFF", fontSize: "0.95rem", fontWeight: "500", lineHeight: "1.6", maxWidth: "320px", marginTop: "12px", opacity: 0.9 }}>
              Turnkey residential interior design &amp; execution firm in Hyderabad.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog &amp; Guides</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Hyderabad Locations */}
          <div>
            <h4 className="footer-heading">Hyderabad Locations</h4>
            <ul className="footer-links-list">
              <li><Link href="/locations/madhapur">Madhapur</Link></li>
              <li><Link href="/locations/gachibowli">Gachibowli</Link></li>
              <li><Link href="/locations/kondapur">Kondapur</Link></li>
              <li><Link href="/locations/jubilee-hills">Jubilee Hills</Link></li>
              <li><Link href="/locations/kokapet">Kokapet</Link></li>
              <li><Link href="/locations/financial-district">Financial District</Link></li>
              <li><Link href="/locations">All Locations</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="footer-heading">Get In Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "var(--fs-14)", color: "var(--text-light-muted)" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{ marginTop: "2px", flexShrink: 0 }}>
                  <MapPinIcon size={18} color="var(--brand-primary)" />
                </div>
                <span>
                  <strong style={{ color: "var(--text-light-primary)" }}>Location:</strong><br />
                  Kukatpally, Hyderabad, Telangana 500072
                </span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <PhoneIcon size={18} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
                <a href="tel:+918790905746" style={{ color: "var(--text-light-primary)", fontWeight: "600" }}>
                  +91 87909 05746
                </a>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <MailIcon size={18} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
                <a href="mailto:parthuinteriors.hyderabad@gmail.com" style={{ color: "var(--text-light-secondary)" }}>
                  parthuinteriors.hyderabad@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas We Provide Interiors (SEO Rich Bar) */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
            paddingBottom: "24px",
            marginTop: "40px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "16px",
              flexWrap: "wrap",
              fontSize: "0.88rem",
              color: "rgba(255, 255, 255, 0.75)",
              lineHeight: "1.8"
            }}
          >
            <strong
              style={{
                color: "#FFFFFF",
                fontWeight: "700",
                whiteSpace: "nowrap",
                fontSize: "0.95rem"
              }}
            >
              Service Areas:
            </strong>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 20px",
                alignItems: "center"
              }}
            >
              {[
                { name: "Kukatpally", slug: "kukatpally" },
                { name: "KPHB", slug: "kphb" },
                { name: "Madhapur", slug: "madhapur" },
                { name: "Gachibowli", slug: "gachibowli" },
                { name: "Kondapur", slug: "kondapur" },
                { name: "HITEC City", slug: "hitec-city" },
                { name: "Jubilee Hills", slug: "jubilee-hills" },
                { name: "Banjara Hills", slug: "banjara-hills" },
                { name: "Kokapet", slug: "kokapet" },
                { name: "Kompally", slug: "kompally" },
                { name: "Tellapur", slug: "tellapur" },
                { name: "Narsingi", slug: "narsingi" },
                { name: "Puppalguda", slug: "puppalguda" },
                { name: "Financial District", slug: "financial-district" },
                { name: "Manikonda", slug: "manikonda" },
                { name: "Miyapur", slug: "miyapur" },
                { name: "Bachupally", slug: "bachupally" },
                { name: "Mokila", slug: "mokila" },
                { name: "Kollur", slug: "kollur" },
                { name: "Ameenpur", slug: "ameenpur" }
              ].map((area) => (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  style={{
                    color: "rgba(255, 255, 255, 0.75)",
                    textDecoration: "none",
                    transition: "color 0.2s ease"
                  }}
                  className="footer-area-link"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Divider */}
        <div className="footer-divider" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", paddingTop: "24px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <p style={{ margin: 0 }}>© 2026 Parthu Interiors. All Rights Reserved.</p>
          <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.85)", margin: 0 }}>
            Made by{" "}
            <a
              href="https://reelscale.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FFFFFF", textDecoration: "none", fontWeight: "800", transition: "color 0.2s ease" }}
            >
              ReelScale CO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
