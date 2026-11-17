// Dashboard Lead Storage & Live Cloud Synced Management

export type LeadStatus = "New" | "Contacted" | "Site Visit" | "Quoted" | "Won" | "Archived";

export interface DashboardLead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  propertyType: string;
  location: string;
  budget: string;
  timeToStart: string;
  scope?: string;
  message?: string;
  source: string;
  timestamp: string;
  status: LeadStatus;
  notes?: string;
}

const LEADS_STORAGE_KEY = "parthu_crm_leads_v2";

let isLeadsSyncing = false;

export async function syncLeadsWithServer(): Promise<void> {
  if (typeof window === "undefined" || isLeadsSyncing) return;
  isLeadsSyncing = true;

  try {
    const res = await fetch("/api/leads", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.leads) && data.leads.length > 0) {
        localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(data.leads));
        window.dispatchEvent(new Event("parthu_leads_updated"));
      }
    }
  } catch (err) {
    console.debug("Leads cloud sync skipped (using local storage):", err);
  } finally {
    isLeadsSyncing = false;
  }
}

export function getStoredLeads(): DashboardLead[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error("Error loading leads from storage:", err);
  }
  return [];
}

export function saveLeadToDashboard(lead: {
  id?: string;
  name?: string;
  phone: string;
  email?: string;
  propertyType: string;
  location: string;
  budget: string;
  timeToStart: string;
  scope?: string;
  message?: string;
  source?: string;
  status?: LeadStatus;
  notes?: string;
}): void {
  if (typeof window === "undefined") return;

  const newEntry: DashboardLead = {
    id: lead.id || `lead-${Date.now()}`,
    name: lead.name?.trim() || "Website Visitor",
    phone: lead.phone.trim().startsWith("+") ? lead.phone.trim() : `+91 ${lead.phone.trim()}`,
    email: lead.email?.trim(),
    propertyType: lead.propertyType || "Apartment",
    location: lead.location || "Hyderabad",
    budget: lead.budget || "Not Specified",
    timeToStart: lead.timeToStart || "Planning",
    scope: lead.scope,
    message: lead.message,
    source: lead.source || "Website Form",
    timestamp: new Date().toISOString(),
    status: lead.status || "New",
    notes: lead.notes || ""
  };

  try {
    const existing = getStoredLeads();
    const updated = [newEntry, ...existing.filter((l) => l.id !== newEntry.id)];
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("parthu_leads_updated"));

    // Sync to live cloud database
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry)
    }).catch((err) => console.warn("Could not sync lead to live server:", err));
  } catch (err) {
    console.error("Error saving lead:", err);
  }
}

export function updateLeadStatus(id: string, status: LeadStatus): void {
  if (typeof window === "undefined") return;

  try {
    const existing = getStoredLeads();
    const updated = existing.map((lead) => (lead.id === id ? { ...lead, status } : lead));
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("parthu_leads_updated"));

    fetch("/api/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status })
    }).catch((err) => console.warn("Could not patch lead status on server:", err));
  } catch (err) {
    console.error("Error updating lead status:", err);
  }
}

export function updateLeadNotes(id: string, notes: string): void {
  if (typeof window === "undefined") return;

  try {
    const existing = getStoredLeads();
    const updated = existing.map((lead) => (lead.id === id ? { ...lead, notes } : lead));
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("parthu_leads_updated"));

    fetch("/api/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, notes })
    }).catch((err) => console.warn("Could not patch lead notes on server:", err));
  } catch (err) {
    console.error("Error updating lead notes:", err);
  }
}

export function deleteLead(id: string): void {
  if (typeof window === "undefined") return;

  try {
    const existing = getStoredLeads();
    const updated = existing.filter((lead) => lead.id !== id);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("parthu_leads_updated"));

    fetch(`/api/leads?id=${id}`, {
      method: "DELETE"
    }).catch((err) => console.warn("Could not delete lead on server:", err));
  } catch (err) {
    console.error("Error deleting lead:", err);
  }
}

export function addManualLead(lead: Partial<DashboardLead>): DashboardLead {
  const newEntry: DashboardLead = {
    id: `lead-manual-${Date.now()}`,
    name: lead.name?.trim() || "Walk-in Client",
    phone: lead.phone?.trim() || "",
    email: lead.email?.trim(),
    propertyType: lead.propertyType || "3 BHK Apartment",
    location: lead.location || "Hyderabad",
    budget: lead.budget || "Custom Budget",
    timeToStart: lead.timeToStart || "Immediate",
    scope: lead.scope || "Full Interior",
    message: lead.message,
    source: lead.source || "Walk-in / Phone Inquiry",
    timestamp: new Date().toISOString(),
    status: (lead.status as LeadStatus) || "New",
    notes: lead.notes || ""
  };

  saveLeadToDashboard(newEntry);
  return newEntry;
}

export function exportLeadsToCSV(leads: DashboardLead[]): void {
  if (typeof window === "undefined" || leads.length === 0) return;

  const headers = ["ID", "Date", "Status", "Name", "Phone", "Email", "Property Type", "Location", "Budget", "Timeline", "Scope", "Source", "Notes"];

  const rows = leads.map((l) => [
    `"${l.id}"`,
    `"${new Date(l.timestamp).toLocaleString("en-IN")}"`,
    `"${l.status}"`,
    `"${(l.name || "").replace(/"/g, '""')}"`,
    `"${(l.phone || "").replace(/"/g, '""')}"`,
    `"${(l.email || "").replace(/"/g, '""')}"`,
    `"${(l.propertyType || "").replace(/"/g, '""')}"`,
    `"${(l.location || "").replace(/"/g, '""')}"`,
    `"${(l.budget || "").replace(/"/g, '""')}"`,
    `"${(l.timeToStart || "").replace(/"/g, '""')}"`,
    `"${(l.scope || "").replace(/"/g, '""')}"`,
    `"${(l.source || "").replace(/"/g, '""')}"`,
    `"${(l.notes || "").replace(/"/g, '""')}"`
  ]);

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `Parthu_Interiors_Leads_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
