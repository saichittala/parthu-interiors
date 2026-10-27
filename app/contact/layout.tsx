import { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "../lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us & Book Free Design Consultation | Parthu Interiors Hyderabad",
  description:
    "Get in touch with Parthu Interiors. Visit our Kukatpally Experience Center, call +91 87909 05746 or book a free 3D design consultation for your 2BHK, 3BHK or villa in Hyderabad.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Parthu Interiors | Hyderabad Experience Center & Consultations",
    description:
      "Book a free design consultation with Parthu Interiors or visit our Kukatpally Experience Center.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
