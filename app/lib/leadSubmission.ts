// Lead Submission Utility for Google Sheets Integration

// Replace with your published Google Apps Script Webhook URL when ready:
export const GOOGLE_SCRIPT_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  propertyType: string;
  location: string;
  budget: string;
  timeToStart: string;
  scope?: string;
  message?: string;
  source?: string;
  timestamp?: string;
}

export async function submitLeadToGoogleSheet(payload: LeadPayload): Promise<boolean> {
  const formattedPhone = payload.phone.trim().startsWith("+")
    ? payload.phone.trim()
    : `+91 ${payload.phone.trim()}`;

  const data = {
    ...payload,
    name: payload.name?.trim() || "Valued Client",
    phone: formattedPhone,
    timestamp: new Date().toISOString(),
    source: payload.source || "Website Form",
  };

  try {
    if (GOOGLE_SCRIPT_WEBHOOK_URL) {
      await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors mode for client-side fetches
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      console.log("Lead captured locally (Set NEXT_PUBLIC_GOOGLE_SCRIPT_URL to connect Google Sheet):", data);
    }
    return true;
  } catch (err) {
    console.error("Error submitting lead to Google Sheet:", err);
    return false;
  }
}

export function formatWhatsAppNumber(phone?: string): string {
  if (!phone) return "918790905746";
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  if (digits.length === 11 && digits.startsWith("0")) return `91${digits.slice(1)}`;
  if (digits.length >= 11) return digits;
  return digits || "918790905746";
}

export function getLeadWhatsAppMessage(payload: Partial<LeadPayload>): string {
  const greeting = payload.name && payload.name !== "Client" && payload.name !== "Valued Client"
    ? `Hi ${payload.name}! 👋`
    : `Hi! 👋`;

  const details = [
    payload.name ? `*Name:* ${payload.name}` : null,
    payload.phone ? `*Phone:* ${payload.phone}` : null,
    payload.location ? `*Location:* ${payload.location}` : null,
    payload.propertyType ? `*Property Type:* ${payload.propertyType}` : null,
    payload.budget ? `*Budget Range:* ${payload.budget}` : null,
    payload.scope ? `*Design Scope:* ${payload.scope}` : null,
    payload.timeToStart ? `*Timeline:* ${payload.timeToStart}` : null,
    payload.message ? `*Notes:* ${payload.message}` : null,
  ].filter(Boolean).join("\n");

  return `${greeting}\nThank you for choosing *Parthu Interiors*! Here are the details of your home interior planning consultation:\n\n${details}\n\nOur senior interior designer will connect with you to review your floorplan and schedule your site visit.\n\n*Parthu Interiors Hyderabad*\n📞 +91 87909 05746\n🌐 https://www.parthuinteriors.in`;
}

export function openWhatsAppLeadChat(payload: LeadPayload, targetPhone?: string) {
  const targetNumber = formatWhatsAppNumber(targetPhone || payload.phone);
  const text = encodeURIComponent(getLeadWhatsAppMessage(payload));
  window.open(`https://wa.me/${targetNumber}?text=${text}`, "_blank");
}
