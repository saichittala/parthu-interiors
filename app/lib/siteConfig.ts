/**
 * Centralized site configuration for SEO, indexing, and canonical URLs.
 * Default is configured to match the live 200 OK serving domain (www.parthuinteriors.in).
 * If primary domain is switched to apex (parthuinteriors.in) in Vercel,
 * simply set NEXT_PUBLIC_SITE_URL=https://parthuinteriors.in in environment variables.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.parthuinteriors.in';

export const SITE_NAME = 'Parthu Interiors';

export const SITE_TITLE =
  'Parthu Interiors | Premium Interior Design & Turnkey Execution Hyderabad';

export const SITE_DESCRIPTION =
  'Complete end-to-end responsibility from initial design to final handover. Advance planning, transparent budgeting, premium materials & regular site updates to make your dream home interior journey stress-free - Parthu Interiors.';

export const CONTACT_INFO = {
  phone: '+91-8790905746',
  phoneDisplay: '+91 87909 05746',
  email: 'parthuinteriors.hyderabad@gmail.com',
  experienceCenter: 'Near Rainbow Hospital, Hyder Nagar, Kukatpally, Hyderabad, Telangana - 500072',
  hours: 'Monday - Sunday: 9:30 AM - 8:30 PM (Experience Center open till 7:30 PM)',
  address: {
    streetAddress: 'Near Rainbow Hospital, Hyder Nagar, Kukatpally',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500072',
    addressCountry: 'IN',
  },
  geo: {
    latitude: '17.4947',
    longitude: '78.3996',
  },
  justdialUrl: 'https://www.justdial.com/Hyderabad/Parthu-Interiors-Near-Rain-Bow-Hospital-Hyder-Nagar-Kukatpally/040PXX40-XX40-140709130324-G9R2_BZDET',
};
