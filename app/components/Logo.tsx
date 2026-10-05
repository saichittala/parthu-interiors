import React from "react";

interface LogoProps {
  light?: boolean;
  height?: number;
  className?: string;
}

export default function Logo({ light = true, height = 36, className = "" }: LogoProps) {
  const textColor = light ? "#FFFFFF" : "#292929";
  const subtitleColor = light ? "rgba(255, 255, 255, 0.75)" : "#C1121F";

  return (
    <div
      className={`brand-logo-container ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        height: `${height}px`,
        textDecoration: "none",
        userSelect: "none"
      }}
    >
      {/* Architectural Brand Emblem Icon */}
      <svg
        width={height}
        height={height}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect width="44" height="44" rx="10" fill="#C1121F" />
        <path
          d="M22 10L33 19V32C33 33.1046 32.1046 34 31 34H13C11.8954 34 11 33.1046 11 32V19L22 10Z"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 18H24C26.2091 18 28 19.7909 28 22C28 24.2091 26.2091 26 24 26H18V30"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Brand Name Typography */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", lineHeight: "1" }}>
        <span
          style={{
            fontSize: `${Math.max(15, height * 0.46)}px`,
            fontWeight: "800",
            letterSpacing: "0.04em",
            color: textColor,
            fontFamily: "var(--font-heading)",
            textTransform: "uppercase"
          }}
        >
          PARTHU
        </span>
        <span
          style={{
            fontSize: `${Math.max(9, height * 0.25)}px`,
            fontWeight: "700",
            letterSpacing: "0.22em",
            color: subtitleColor,
            fontFamily: "var(--font-heading)",
            textTransform: "uppercase",
            marginTop: "3px"
          }}
        >
          INTERIORS
        </span>
      </div>
    </div>
  );
}
