import { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "../lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us | Turnkey Residential Interior Designers in Hyderabad",
  description:
    "Learn about Parthu Interiors. Complete end-to-end responsibility from 3D planning to handover. In-house manufacturing, 10-year warranty, transparent budgeting & 45-day handover in Hyderabad.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Parthu Interiors | Turnkey Interior Designers in Hyderabad",
    description:
      "Learn about Parthu Interiors - residential turnkey interior design with factory-finished execution.",
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
