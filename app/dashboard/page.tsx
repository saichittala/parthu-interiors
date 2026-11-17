import React from "react";
import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Executive Dashboard | Parthu Interiors Management",
  description: "Administrative CRM, client leads & studio management for Parthu Interiors.",
  robots: {
    index: false,
    follow: false
  }
};

export default function DashboardPage() {
  return <DashboardClient />;
}
