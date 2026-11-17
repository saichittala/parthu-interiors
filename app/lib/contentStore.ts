// In-Dashboard Live Synced CMS Store for Projects, Blogs, Testimonials & Settings
import { ProjectDetail, projectsData as defaultProjects } from "./projectsData";
import { CONTACT_INFO, SITE_TITLE, SITE_DESCRIPTION } from "./siteConfig";

export interface DashboardBlog {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedDate: string;
  description: string;
  featuredImage: string;
  author: string;
  status: "Published" | "Draft";
  content?: string;
}

export interface DashboardTestimonial {
  id: string;
  clientName: string;
  community: string;
  rating: number;
  reviewTitle: string;
  reviewText: string;
  initials?: string;
}

export interface DashboardSiteSettings {
  phoneDisplay: string;
  whatsappPhone: string;
  email: string;
  experienceCenter: string;
  hours: string;
  tagline: string;
  description: string;
}

export interface DashboardBeforeAfter {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  headline: string;
  subheadline: string;
}

const STORAGE_KEYS = {
  PROJECTS: "parthu_cms_projects_v2",
  BLOGS: "parthu_cms_blogs_v2",
  TESTIMONIALS: "parthu_cms_testimonials_v2",
  SETTINGS: "parthu_cms_settings_v2",
  BEFORE_AFTER: "parthu_cms_before_after_v2"
};

export const DEFAULT_BEFORE_AFTER: DashboardBeforeAfter = {
  beforeImage: "/assets/main_images/Before_image.webp",
  afterImage: "/assets/main_images/After-Image.webp",
  beforeLabel: "BEFORE: Bare Concrete & Brick Shell",
  afterLabel: "AFTER: Parthu Interiors Luxury Execution",
  headline: "Every Detail Considered. Every Space Transformed.",
  subheadline: "Drag the slider to reveal the precision engineering and craftsmanship behind every Parthu Interiors home."
};

export const DEFAULT_SETTINGS: DashboardSiteSettings = {
  phoneDisplay: CONTACT_INFO.phoneDisplay || "+91 87909 05746",
  whatsappPhone: "918790905746",
  email: CONTACT_INFO.email || "parthuinteriors.hyderabad@gmail.com",
  experienceCenter: CONTACT_INFO.experienceCenter || "Near Rainbow Hospital, Hyder Nagar, Kukatpally, Hyderabad",
  hours: CONTACT_INFO.hours || "Monday - Sunday: 9:30 AM - 8:30 PM",
  tagline: "Designing Spaces. Creating Dream Homes.",
  description: SITE_DESCRIPTION
};

// ─── CLOUD & SERVER SYNC ENGINE ───────────────────────────────────────────────

let isSyncing = false;

export async function syncContentWithServer(): Promise<void> {
  if (typeof window === "undefined" || isSyncing) return;
  isSyncing = true;

  try {
    const res = await fetch("/api/content", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        if (Array.isArray(data.projects) && data.projects.length > 0) {
          localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(data.projects));
        }
        if (Array.isArray(data.blogs) && data.blogs.length > 0) {
          localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(data.blogs));
        }
        if (Array.isArray(data.testimonials) && data.testimonials.length > 0) {
          localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(data.testimonials));
        }
        if (data.siteSettings) {
          localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(data.siteSettings));
        }
        if (data.beforeAfter) {
          localStorage.setItem(STORAGE_KEYS.BEFORE_AFTER, JSON.stringify(data.beforeAfter));
        }
        window.dispatchEvent(new Event("parthu_content_updated"));
      }
    }
  } catch (err) {
    // Network or static build fallback
    console.debug("Server sync skipped (running from local cache):", err);
  } finally {
    isSyncing = false;
  }
}

async function pushUpdateToServer(type: "projects" | "blogs" | "testimonials" | "settings" | "before_after", data: any) {
  if (typeof window === "undefined") return;

  try {
    await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, data })
    });
  } catch (err) {
    console.warn(`Could not persist ${type} to live server:`, err);
  }
}

// ─── PROJECTS CMS ─────────────────────────────────────────────────────────────

export function getDashboardProjects(): ProjectDetail[] {
  if (typeof window === "undefined") return defaultProjects;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(defaultProjects));
  } catch (err) {
    console.error("Error reading projects:", err);
  }
  return defaultProjects;
}

export function saveDashboardProject(project: ProjectDetail): void {
  if (typeof window === "undefined") return;
  try {
    const current = getDashboardProjects();
    const index = current.findIndex((p) => p.id === project.id);
    let updated: ProjectDetail[];
    if (index >= 0) {
      updated = [...current];
      updated[index] = project;
    } else {
      updated = [project, ...current];
    }
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
    window.dispatchEvent(new Event("parthu_content_updated"));
    pushUpdateToServer("projects", updated);
  } catch (err) {
    console.error("Error saving project:", err);
  }
}

export function deleteDashboardProject(id: string): void {
  if (typeof window === "undefined") return;
  try {
    const current = getDashboardProjects();
    const updated = current.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
    window.dispatchEvent(new Event("parthu_content_updated"));
    pushUpdateToServer("projects", updated);
  } catch (err) {
    console.error("Error deleting project:", err);
  }
}

// ─── BLOGS CMS ────────────────────────────────────────────────────────────────

export function getDashboardBlogs(): DashboardBlog[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BLOGS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (err) {
    console.error("Error reading blogs:", err);
  }
  return [];
}

export function saveDashboardBlog(blog: DashboardBlog): void {
  if (typeof window === "undefined") return;
  try {
    const current = getDashboardBlogs();
    const index = current.findIndex((b) => b.id === blog.id);
    let updated: DashboardBlog[];
    if (index >= 0) {
      updated = [...current];
      updated[index] = blog;
    } else {
      updated = [blog, ...current];
    }
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(updated));
    window.dispatchEvent(new Event("parthu_content_updated"));
    pushUpdateToServer("blogs", updated);
  } catch (err) {
    console.error("Error saving blog:", err);
  }
}

export function deleteDashboardBlog(id: string): void {
  if (typeof window === "undefined") return;
  try {
    const current = getDashboardBlogs();
    const updated = current.filter((b) => b.id !== id);
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(updated));
    window.dispatchEvent(new Event("parthu_content_updated"));
    pushUpdateToServer("blogs", updated);
  } catch (err) {
    console.error("Error deleting blog:", err);
  }
}

// ─── TESTIMONIALS CMS ─────────────────────────────────────────────────────────

export function getDashboardTestimonials(): DashboardTestimonial[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (err) {
    console.error("Error reading testimonials:", err);
  }
  return [];
}

export function saveDashboardTestimonial(testimonial: DashboardTestimonial): void {
  if (typeof window === "undefined") return;
  try {
    const current = getDashboardTestimonials();
    const index = current.findIndex((t) => t.id === testimonial.id);
    let updated: DashboardTestimonial[];
    if (index >= 0) {
      updated = [...current];
      updated[index] = testimonial;
    } else {
      updated = [testimonial, ...current];
    }
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(updated));
    window.dispatchEvent(new Event("parthu_content_updated"));
    pushUpdateToServer("testimonials", updated);
  } catch (err) {
    console.error("Error saving testimonial:", err);
  }
}

export function deleteDashboardTestimonial(id: string): void {
  if (typeof window === "undefined") return;
  try {
    const current = getDashboardTestimonials();
    const updated = current.filter((t) => t.id !== id);
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(updated));
    window.dispatchEvent(new Event("parthu_content_updated"));
    pushUpdateToServer("testimonials", updated);
  } catch (err) {
    console.error("Error deleting testimonial:", err);
  }
}

// ─── SITE SETTINGS CMS ───────────────────────────────────────────────────────

export function getDashboardSiteSettings(): DashboardSiteSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (raw) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    }
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_SETTINGS));
  } catch (err) {
    console.error("Error reading settings:", err);
  }
  return DEFAULT_SETTINGS;
}

export function saveDashboardSiteSettings(settings: DashboardSiteSettings): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    window.dispatchEvent(new Event("parthu_content_updated"));
    pushUpdateToServer("settings", settings);
  } catch (err) {
    console.error("Error saving settings:", err);
  }
}

// ─── BEFORE & AFTER TRANSFORMATION CMS ──────────────────────────────────────

export function getDashboardBeforeAfter(): DashboardBeforeAfter {
  if (typeof window === "undefined") return DEFAULT_BEFORE_AFTER;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BEFORE_AFTER);
    if (raw) {
      return { ...DEFAULT_BEFORE_AFTER, ...JSON.parse(raw) };
    }
    localStorage.setItem(STORAGE_KEYS.BEFORE_AFTER, JSON.stringify(DEFAULT_BEFORE_AFTER));
  } catch (err) {
    console.error("Error reading beforeAfter:", err);
  }
  return DEFAULT_BEFORE_AFTER;
}

export function saveDashboardBeforeAfter(data: DashboardBeforeAfter): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.BEFORE_AFTER, JSON.stringify(data));
    window.dispatchEvent(new Event("parthu_content_updated"));
    pushUpdateToServer("before_after", data);
  } catch (err) {
    console.error("Error saving beforeAfter:", err);
  }
}

// ─── EXPORT ALL BACKUP ───────────────────────────────────────────────────────

export function exportAllContentBackup(): void {
  if (typeof window === "undefined") return;
  const backup = {
    exportDate: new Date().toISOString(),
    site: "Parthu Interiors Hyderabad",
    projects: getDashboardProjects(),
    blogs: getDashboardBlogs(),
    testimonials: getDashboardTestimonials(),
    settings: getDashboardSiteSettings()
  };

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Parthu_Interiors_Content_Backup_${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
