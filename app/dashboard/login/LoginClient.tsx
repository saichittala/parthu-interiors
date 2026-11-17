"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import Logo from "../../components/Logo";
import { login, isAuthenticated } from "../../lib/auth";
import { Button } from "../../components/arc/button/button";

export default function LoginClient() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/dashboard");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Artificial tiny delay for smooth button feedback
    await new Promise((res) => setTimeout(res, 400));

    const result = login(username, password);
    if (result.success) {
      router.push("/dashboard");
    } else {
      setError(result.error || "Authentication failed.");
      setIsLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#060606",
          color: "#FFFFFF"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "3px solid rgba(193, 18, 31, 0.2)",
              borderTopColor: "#C1121F",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite"
            }}
          />
          <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)", letterSpacing: "0.05em" }}>
            Verifying Session...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="dashboard-portal"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px 16px",
        background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(193, 18, 31, 0.22), transparent), #060606",
        position: "relative",
        fontFamily: "var(--font-body, sans-serif)",
        color: "#FFFFFF"
      }}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none"
        }}
      />

      {/* Main Login Card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "440px",
          background: "linear-gradient(180deg, rgba(20, 20, 22, 0.96) 0%, rgba(11, 11, 13, 0.98) 100%)",
          border: "none",
          boxShadow: "0 24px 64px rgba(0, 0, 0, 0.8), 0 0 32px rgba(193, 18, 31, 0.12)",
          borderRadius: "20px",
          padding: "36px 32px",
          backdropFilter: "blur(20px)"
        }}
      >
        {/* Header Branding */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ display: "inline-flex", justifyContent: "center", marginBottom: "16px" }}>
            <Logo light={true} height={42} />
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              background: "rgba(193, 18, 31, 0.12)",
              border: "none",
              borderRadius: "100px",
              marginBottom: "12px"
            }}
          >
            <ShieldCheck size={13} color="#C1121F" />
            <span
              style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF6B6B"
              }}
            >
              Executive Management
            </span>
          </div>

          <h1
            style={{
              fontSize: "26px",
              fontWeight: "800",
              color: "#FFFFFF !important",
              letterSpacing: "-0.02em",
              margin: "0 0 8px 0",
              fontFamily: "var(--font-heading)"
            }}
          >
            Dashboard Login
          </h1>
          <p style={{ fontSize: "14px", color: "#E4E4E7 !important", margin: 0, lineHeight: "1.5" }}>
            Sign in to access your CRM leads, analytics & content studio
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(193, 18, 31, 0.15)",
              border: "none",
              borderRadius: "10px",
              padding: "12px 14px",
              marginBottom: "20px",
              fontSize: "13px",
              color: "#FFA8A8"
            }}
          >
            <AlertCircle size={16} color="#FF6B6B" style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.85)",
                marginBottom: "8px"
              }}
            >
              Username
            </label>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "rgba(255, 255, 255, 0.4)",
                  pointerEvents: "none"
                }}
              >
                <User size={16} />
              </div>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                required
                autoComplete="username"
                style={{
                  width: "100%",
                  padding: "12px 14px 12px 42px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#C1121F";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(193, 18, 31, 0.2)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <label
                htmlFor="password"
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "rgba(255, 255, 255, 0.85)"
                }}
              >
                Password
              </label>
            </div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "rgba(255, 255, 255, 0.4)",
                  pointerEvents: "none"
                }}
              >
                <Lock size={16} />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                autoComplete="current-password"
                style={{
                  width: "100%",
                  padding: "12px 44px 12px 42px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#C1121F";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(193, 18, 31, 0.2)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px"
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading}
            variant="primary"
            size="lg"
            style={{
              marginTop: "8px",
              width: "100%",
              height: "48px",
              fontSize: "15px",
            }}
          >
            <span>Sign In to Dashboard</span>
          </Button>
        </form>

        {/* Quick Credential Hint Box for Owner Convenience */}
        <div
          style={{
            marginTop: "28px",
            padding: "14px 16px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "none",
            borderRadius: "10px",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.6)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", color: "#FFB4A2" }}>
            <Sparkles size={13} color="#FF6B6B" />
            <span style={{ fontWeight: "600" }}>Parthu Interiors Credentials</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
            <span>Username: <strong style={{ color: "#FFFFFF" }}>parthu</strong></span>
            <button
              type="button"
              onClick={() => {
                setUsername("parthu");
                setPassword("parthu@5746");
              }}
              style={{
                background: "rgba(193, 18, 31, 0.2)",
                border: "1px solid rgba(193, 18, 31, 0.4)",
                color: "#FF8E8E",
                padding: "3px 8px",
                borderRadius: "4px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Auto Fill
            </button>
          </div>
        </div>

        {/* Back Link */}
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Link
            href="/"
            style={{
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.5)",
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)")}
          >
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
