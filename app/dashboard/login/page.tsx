import React from "react";
import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Dashboard Login | Parthu Interiors Management Portal",
  description: "Secure executive administration login for Parthu Interiors Hyderabad.",
  robots: {
    index: false,
    follow: false
  }
};

export default function LoginPage() {
  return <LoginClient />;
}
