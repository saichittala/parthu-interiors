"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LogOut,
  ExternalLink,
  Building2,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Search,
  Filter,
  Download,
  Plus,
  Trash2,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Home,
  Check,
  X,
  FileSpreadsheet,
  Layers,
  ArrowUpRight,
  TrendingUp,
  FolderKanban,
  PenTool,
  Star,
  Settings,
  Edit3,
  Save,
  Share2
} from "lucide-react";
import Logo from "../components/Logo";
import { isAuthenticated, logout, getAuthUser, AdminUser } from "../lib/auth";
import {
  getStoredLeads,
  updateLeadStatus,
  updateLeadNotes,
  deleteLead,
  addManualLead,
  exportLeadsToCSV,
  syncLeadsWithServer,
  DashboardLead,
  LeadStatus
} from "../lib/leadStore";
import { formatWhatsAppNumber } from "../lib/leadSubmission";
import {
  getDashboardProjects,
  saveDashboardProject,
  deleteDashboardProject,
  getDashboardBlogs,
  saveDashboardBlog,
  deleteDashboardBlog,
  getDashboardTestimonials,
  saveDashboardTestimonial,
  deleteDashboardTestimonial,
  getDashboardSiteSettings,
  saveDashboardSiteSettings,
  getDashboardBeforeAfter,
  saveDashboardBeforeAfter,
  exportAllContentBackup,
  syncContentWithServer,
  DashboardBlog,
  DashboardTestimonial,
  DashboardSiteSettings,
  DashboardBeforeAfter
} from "../lib/contentStore";
import { ProjectDetail } from "../lib/projectsData";

// Strict WCAG 2.1 AAA Compliant Status Color Palettes (>7:1 Contrast Ratio against dark cards)
const STATUS_CONFIG: Record<LeadStatus, { label: string; bg: string; text: string; border: string }> = {
  New: { label: "New", bg: "#431407", text: "#FED7AA", border: "#EA580C" },
  Contacted: { label: "Contacted", bg: "#172554", text: "#BFDBFE", border: "#3B82F6" },
  "Site Visit": { label: "Site Visit", bg: "#3B0764", text: "#E9D5FF", border: "#A855F7" },
  Quoted: { label: "Quoted", bg: "#422006", text: "#FEF08A", border: "#EAB308" },
  Won: { label: "Won / Executing", bg: "#052E16", text: "#BBF7D0", border: "#22C55E" },
  Archived: { label: "Archived", bg: "#1F2937", text: "#E5E7EB", border: "#6B7280" }
};

export default function DashboardClient() {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Active top tab
  const [activeTab, setActiveTab] = useState<"leads" | "content" | "overview">("content");

  // CRM State
  const [leads, setLeads] = useState<DashboardLead[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState("");
  const [newLeadForm, setNewLeadForm] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "3 BHK Apartment",
    location: "",
    budget: "",
    timeToStart: "Immediate (< 30 days)",
    scope: "",
    notes: ""
  });

  // Content Editor State
  const [contentSubTab, setContentSubTab] = useState<"projects" | "blogs" | "testimonials" | "before_after" | "settings">("projects");
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [blogs, setBlogs] = useState<DashboardBlog[]>([]);
  const [testimonials, setTestimonials] = useState<DashboardTestimonial[]>([]);
  const [siteSettings, setSiteSettings] = useState<DashboardSiteSettings>({
    phoneDisplay: "+91 87909 05746",
    whatsappPhone: "918790905746",
    email: "parthuinteriors.hyderabad@gmail.com",
    experienceCenter: "Near Rainbow Hospital, Hyder Nagar, Kukatpally, Hyderabad",
    hours: "Monday - Sunday: 9:30 AM - 8:30 PM",
    tagline: "Designing Spaces. Creating Dream Homes.",
    description: "Complete end-to-end responsibility from initial design to final handover."
  });
  const [settingsSavedMessage, setSettingsSavedMessage] = useState(false);
  const [beforeAfter, setBeforeAfter] = useState<DashboardBeforeAfter>({
    beforeImage: "/assets/main_images/Before_image.webp",
    afterImage: "/assets/main_images/After-Image.webp",
    beforeLabel: "BEFORE: Bare Concrete & Brick Shell",
    afterLabel: "AFTER: Parthu Interiors Luxury Execution",
    headline: "Every Detail Considered. Every Space Transformed.",
    subheadline: "Drag the slider to reveal the precision engineering and craftsmanship behind every Parthu Interiors home."
  });
  const [beforeAfterSavedMessage, setBeforeAfterSavedMessage] = useState(false);

  // Content Modals
  const [editingProject, setEditingProject] = useState<ProjectDetail | null>(null);
  const [isNewProject, setIsNewProject] = useState(false);
  const [editingBlog, setEditingBlog] = useState<DashboardBlog | null>(null);
  const [isNewBlog, setIsNewBlog] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<DashboardTestimonial | null>(null);
  const [isNewTestimonial, setIsNewTestimonial] = useState(false);

  // Verify auth on mount & load data
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/dashboard/login");
    } else {
      setUser(getAuthUser());
      setLeads(getStoredLeads());
      setProjects(getDashboardProjects());
      setBlogs(getDashboardBlogs());
      setTestimonials(getDashboardTestimonials());
      setSiteSettings(getDashboardSiteSettings());
      setBeforeAfter(getDashboardBeforeAfter());
      setCheckingAuth(false);

      // Live cloud sync from Neon database
      syncContentWithServer();
      syncLeadsWithServer();
    }

    const handleLeadsUpdated = () => setLeads(getStoredLeads());
    const handleContentUpdated = () => {
      setProjects(getDashboardProjects());
      setBlogs(getDashboardBlogs());
      setTestimonials(getDashboardTestimonials());
      setSiteSettings(getDashboardSiteSettings());
      setBeforeAfter(getDashboardBeforeAfter());
    };

    window.addEventListener("parthu_leads_updated", handleLeadsUpdated);
    window.addEventListener("parthu_content_updated", handleContentUpdated);
    return () => {
      window.removeEventListener("parthu_leads_updated", handleLeadsUpdated);
      window.removeEventListener("parthu_content_updated", handleContentUpdated);
    };
  }, [router]);

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out of the dashboard?")) {
      logout();
      router.replace("/dashboard/login");
    }
  };

  // ─── Lead CRM Handlers ──────────────────────────────────────────────────────
  const handleStatusChange = (id: string, newStatus: LeadStatus) => {
    updateLeadStatus(id, newStatus);
    setLeads(getStoredLeads());
  };

  const handleDeleteLead = (id: string, name: string) => {
    if (confirm(`Delete lead entry for "${name}"?`)) {
      deleteLead(id);
      setLeads(getStoredLeads());
    }
  };

  const handleSaveNotes = (id: string) => {
    updateLeadNotes(id, tempNotes);
    setEditingNotesId(null);
    setLeads(getStoredLeads());
  };

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadForm.phone.trim()) {
      alert("Please enter a phone number.");
      return;
    }

    addManualLead({
      name: newLeadForm.name || "Client",
      phone: newLeadForm.phone,
      email: newLeadForm.email,
      propertyType: newLeadForm.propertyType,
      location: newLeadForm.location || "Hyderabad",
      budget: newLeadForm.budget || "Custom Budget",
      timeToStart: newLeadForm.timeToStart,
      scope: newLeadForm.scope,
      notes: newLeadForm.notes,
      source: "Manual Entry"
    });

    setLeads(getStoredLeads());
    setShowAddLeadModal(false);
    setNewLeadForm({
      name: "",
      phone: "",
      email: "",
      propertyType: "3 BHK Apartment",
      location: "",
      budget: "",
      timeToStart: "Immediate (< 30 days)",
      scope: "",
      notes: ""
    });
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesStatus = selectedStatus === "All" || lead.status === selectedStatus;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        lead.name?.toLowerCase().includes(q) ||
        lead.phone?.toLowerCase().includes(q) ||
        lead.location?.toLowerCase().includes(q) ||
        lead.propertyType?.toLowerCase().includes(q) ||
        lead.email?.toLowerCase().includes(q);

      return matchesStatus && matchesSearch;
    });
  }, [leads, selectedStatus, searchQuery]);

  const stats = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter((l) => l.status === "New").length;
    const inProgress = leads.filter((l) => l.status === "Contacted" || l.status === "Site Visit").length;
    const quoted = leads.filter((l) => l.status === "Quoted").length;
    const won = leads.filter((l) => l.status === "Won").length;
    return { total, newCount, inProgress, quoted, won };
  }, [leads]);

  // ─── Content Editor Handlers ────────────────────────────────────────────────
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;
    saveDashboardProject(editingProject);
    setProjects(getDashboardProjects());
    setEditingProject(null);
  };

  const handleDeleteProject = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete project "${title}"?`)) {
      deleteDashboardProject(id);
      setProjects(getDashboardProjects());
    }
  };

  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog) return;
    saveDashboardBlog(editingBlog);
    setBlogs(getDashboardBlogs());
    setEditingBlog(null);
  };

  const handleDeleteBlog = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete article "${title}"?`)) {
      deleteDashboardBlog(id);
      setBlogs(getDashboardBlogs());
    }
  };

  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTestimonial) return;
    saveDashboardTestimonial(editingTestimonial);
    setTestimonials(getDashboardTestimonials());
    setEditingTestimonial(null);
  };

  const handleDeleteTestimonial = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete review from "${name}"?`)) {
      deleteDashboardTestimonial(id);
      setTestimonials(getDashboardTestimonials());
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveDashboardSiteSettings(siteSettings);
    setSettingsSavedMessage(true);
    setTimeout(() => setSettingsSavedMessage(false), 3000);
  };

  const handleSaveBeforeAfter = (e: React.FormEvent) => {
    e.preventDefault();
    saveDashboardBeforeAfter(beforeAfter);
    setBeforeAfterSavedMessage(true);
    setTimeout(() => setBeforeAfterSavedMessage(false), 3000);
  };

  if (checkingAuth) {
    return (
      <div
        className="dashboard-portal"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              border: "3px solid rgba(193, 18, 31, 0.3)",
              borderTopColor: "#C1121F",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite"
            }}
          />
          <span style={{ fontSize: "15px", color: "#E4E4E7", fontWeight: "600" }}>Loading Dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-portal" style={{ paddingBottom: "80px" }}>
      {/* Top Administrative Bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(10, 10, 14, 0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.16)",
          padding: "16px 24px"
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          {/* Logo & Section Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Logo light={true} height={38} />
            <div
              style={{
                width: "1px",
                height: "26px",
                background: "rgba(255, 255, 255, 0.24)",
                display: "inline-block"
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "#C1121F",
                  color: "#FFFFFF",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  boxShadow: "0 2px 8px rgba(193, 18, 31, 0.4)"
                }}
              >
                ADMIN CMS
              </span>
              <span style={{ fontSize: "14px", color: "#E4E4E7", fontWeight: "500" }}>
                Welcome, <strong style={{ color: "#FFFFFF", fontWeight: "700" }}>{user?.username || "parthu"}</strong>
              </span>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            {/* View Live Website Link */}
            <Link
              href="/"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 16px",
                background: "#16161E",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                borderRadius: "8px",
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#23232E";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#16161E";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
              }}
            >
              <ExternalLink size={15} color="#FFFFFF" />
              <span>Live Website</span>
            </Link>

            {/* Sanity Studio CMS Access */}
            <Link
              href="/studio"
              target="_blank"
              title="Open Sanity Content Studio to manage website content, projects, services and blogs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 16px",
                background: "rgba(193, 18, 31, 0.14)",
                border: "1px solid rgba(193, 18, 31, 0.45)",
                borderRadius: "8px",
                color: "#FECACA",
                fontSize: "13.5px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C1121F";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(193, 18, 31, 0.14)";
                e.currentTarget.style.color = "#FECACA";
              }}
            >
              <span>Sanity Studio CMS ↗</span>
            </Link>

            {/* Download Content Backup Button */}
            <button
              onClick={exportAllContentBackup}
              title="Download backup of all projects, blogs, testimonials and business details"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 16px",
                background: "#1C1C26",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                borderRadius: "8px",
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2A2A38")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1C1C26")}
            >
              <Download size={15} color="#60A5FA" />
              <span>Backup Data</span>
            </button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 16px",
                background: "rgba(239, 68, 68, 0.14)",
                border: "1px solid rgba(239, 68, 68, 0.45)",
                borderRadius: "8px",
                color: "#FECACA",
                fontSize: "13.5px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#DC2626";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(239, 68, 68, 0.14)";
                e.currentTarget.style.color = "#FECACA";
              }}
            >
              <LogOut size={15} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main style={{ maxWidth: "1400px", margin: "28px auto", padding: "0 24px" }}>
        {/* KPI Summary Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "28px"
          }}
        >
          {/* Card 1: Total Leads */}
          <div
            className="dashboard-card"
            style={{
              padding: "20px 22px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <span style={{ fontSize: "14px", color: "#E4E4E7", fontWeight: "600", display: "block" }}>
                Total Leads
              </span>
              <div style={{ fontSize: "30px", fontWeight: "800", color: "#FFFFFF", marginTop: "4px" }}>
                {stats.total}
              </div>
            </div>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "#1C1C24",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF"
              }}
            >
              <Users size={22} />
            </div>
          </div>

          {/* Card 2: Live Portfolio Projects */}
          <div
            className="dashboard-card"
            style={{
              padding: "20px 22px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "none",
            }}
          >
            <div>
              <span style={{ fontSize: "14px", color: "#FFB4B4", fontWeight: "700", display: "block" }}>
                Live Projects
              </span>
              <div style={{ fontSize: "30px", fontWeight: "800", color: "#FFFFFF", marginTop: "4px" }}>
                {projects.length}
              </div>
            </div>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "rgba(193, 18, 31, 0.25)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FF8E8E"
              }}
            >
              <FolderKanban size={22} />
            </div>
          </div>

          {/* Card 3: Published Blog Articles */}
          <div
            className="dashboard-card"
            style={{
              padding: "20px 22px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "none",
            }}
          >
            <div>
              <span style={{ fontSize: "14px", color: "#BFDBFE", fontWeight: "700", display: "block" }}>
                Published Blogs
              </span>
              <div style={{ fontSize: "30px", fontWeight: "800", color: "#60A5FA", marginTop: "4px" }}>
                {blogs.length}
              </div>
            </div>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "#172554",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#BFDBFE"
              }}
            >
              <PenTool size={22} />
            </div>
          </div>

          {/* Card 4: Verified Client Reviews */}
          <div
            className="dashboard-card"
            style={{
              padding: "20px 22px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "none",
            }}
          >
            <div>
              <span style={{ fontSize: "14px", color: "#FEF08A", fontWeight: "700", display: "block" }}>
                Client Reviews
              </span>
              <div style={{ fontSize: "30px", fontWeight: "800", color: "#FACC15", marginTop: "4px" }}>
                {testimonials.length}
              </div>
            </div>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "#422006",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FEF08A"
              }}
            >
              <Star size={22} />
            </div>
          </div>
        </div>

        {/* Master Navigation Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255, 255, 255, 0.16)",
            paddingBottom: "18px",
            marginBottom: "26px",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              onClick={() => setActiveTab("content")}
              className={`dashboard-tab-btn ${activeTab === "content" ? "dashboard-tab-active" : "dashboard-tab-inactive"}`}
            >
              <Edit3 size={17} />
              <span>Direct Content Editor</span>
            </button>

            <button
              onClick={() => setActiveTab("leads")}
              className={`dashboard-tab-btn ${activeTab === "leads" ? "dashboard-tab-active" : "dashboard-tab-inactive"}`}
            >
              <Users size={17} />
              <span>Client Leads CRM</span>
              <span
                style={{
                  background: activeTab === "leads" ? "rgba(0, 0, 0, 0.35)" : "#22222C",
                  color: "#FFFFFF",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "700"
                }}
              >
                {leads.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("overview")}
              className={`dashboard-tab-btn ${activeTab === "overview" ? "dashboard-tab-active" : "dashboard-tab-inactive"}`}
            >
              <Layers size={17} />
              <span>Website Quick Links</span>
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {activeTab === "leads" && (
              <>
                <button
                  onClick={() => exportLeadsToCSV(filteredLeads)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "9px 16px",
                    background: "#16161E",
                    border: "1px solid rgba(255, 255, 255, 0.22)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "13.5px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  <Download size={15} color="#FFFFFF" />
                  <span>Export CSV</span>
                </button>

                <button
                  onClick={() => setShowAddLeadModal(true)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "9px 18px",
                    background: "linear-gradient(135deg, #C1121F 0%, #A00E19 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "13.5px",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(193, 18, 31, 0.4)"
                  }}
                >
                  <Plus size={16} />
                  <span>Add Offline Lead</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* =========================================================================
            TAB 1: DIRECT WEBSITE CONTENT EDITOR (NO SANITY REQUIRED)
           ========================================================================= */}
        {activeTab === "content" && (
          <div>
            {/* Sub-navigation for Content Types */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#111116",
                border: "none",
                borderRadius: "12px",
                padding: "8px 12px",
                marginBottom: "24px",
                flexWrap: "wrap",
                gap: "10px"
              }}
            >
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <button
                  onClick={() => setContentSubTab("projects")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "13.5px",
                    fontWeight: "700",
                    cursor: "pointer",
                    background: contentSubTab === "projects" ? "#C1121F" : "transparent",
                    color: "#FFFFFF",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <FolderKanban size={16} />
                  <span>Projects ({projects.length})</span>
                </button>

                <button
                  onClick={() => setContentSubTab("blogs")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "13.5px",
                    fontWeight: "700",
                    cursor: "pointer",
                    background: contentSubTab === "blogs" ? "#C1121F" : "transparent",
                    color: "#FFFFFF",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <PenTool size={16} />
                  <span>Blogs ({blogs.length})</span>
                </button>

                <button
                  onClick={() => setContentSubTab("testimonials")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "13.5px",
                    fontWeight: "700",
                    cursor: "pointer",
                    background: contentSubTab === "testimonials" ? "#C1121F" : "transparent",
                    color: "#FFFFFF",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <Star size={16} />
                  <span>Testimonials ({testimonials.length})</span>
                </button>

                <button
                  onClick={() => setContentSubTab("before_after")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "13.5px",
                    fontWeight: "700",
                    cursor: "pointer",
                    background: contentSubTab === "before_after" ? "#C1121F" : "transparent",
                    color: "#FFFFFF",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <Sparkles size={16} />
                  <span>Before &amp; After</span>
                </button>

                <button
                  onClick={() => setContentSubTab("settings")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "13.5px",
                    fontWeight: "700",
                    cursor: "pointer",
                    background: contentSubTab === "settings" ? "#C1121F" : "transparent",
                    color: "#FFFFFF",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <Settings size={16} />
                  <span>Business Contacts & Info</span>
                </button>
              </div>

              {/* Action button corresponding to sub-tab */}
              {contentSubTab === "projects" && (
                <button
                  onClick={() => {
                    setIsNewProject(true);
                    setEditingProject({
                      id: `project-${Date.now()}`,
                      title: "",
                      location: "Hyderabad",
                      projectType: "3 BHK Apartment",
                      scope: "Complete Turnkey Interiors",
                      designStyle: "Contemporary Luxury",
                      completionYear: "2026",
                      mainImage: "/assets/main_images/luxury-living-room-with-classic-white-sofa-sofa-interior-design.webp",
                      gallery: [],
                      metaTitle: "",
                      metaDescription: "",
                      concept: "",
                      materials: ["100% BWP Marine Plywood", "Anti-Fingerprint Acrylic", "Italian Marble"],
                      keyFeatures: ["German Modular Kitchen", "False Ceiling with Magnetic Track Lights"],
                      challenge: "",
                      solution: "",
                      relatedServiceId: "home-interior-design",
                      relatedLocationSlug: "kokapet"
                    });
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    background: "linear-gradient(135deg, #C1121F 0%, #A00E19 100%)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                >
                  <Plus size={15} />
                  <span>Add Project</span>
                </button>
              )}

              {contentSubTab === "blogs" && (
                <button
                  onClick={() => {
                    setIsNewBlog(true);
                    setEditingBlog({
                      id: `blog-${Date.now()}`,
                      title: "",
                      slug: "",
                      category: "Interior Guides",
                      publishedDate: new Date().toISOString().split("T")[0],
                      description: "",
                      featuredImage: "/assets/main_images/luxury-living-room-with-classic-white-sofa-sofa-interior-design.webp",
                      author: "Parthu Interiors Team",
                      status: "Published"
                    });
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    background: "linear-gradient(135deg, #C1121F 0%, #A00E19 100%)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                >
                  <Plus size={15} />
                  <span>New Blog Article</span>
                </button>
              )}

              {contentSubTab === "testimonials" && (
                <button
                  onClick={() => {
                    setIsNewTestimonial(true);
                    setEditingTestimonial({
                      id: `test-${Date.now()}`,
                      clientName: "",
                      community: "Hyderabad",
                      rating: 5,
                      reviewTitle: "",
                      reviewText: "",
                      initials: "PI"
                    });
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    background: "linear-gradient(135deg, #C1121F 0%, #A00E19 100%)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                >
                  <Plus size={15} />
                  <span>Add Client Review</span>
                </button>
              )}
            </div>

            {/* SUBTAB 1: PROJECTS LIST */}
            {contentSubTab === "projects" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "18px" }}>
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className="dashboard-card"
                    style={{
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "700",
                            background: "rgba(193, 18, 31, 0.25)",
                            color: "#FF8E8E",
                            padding: "3px 8px",
                            borderRadius: "6px",
                            border: "1px solid rgba(193, 18, 31, 0.5)"
                          }}
                        >
                          {p.projectType}
                        </span>
                        <span style={{ fontSize: "12px", color: "#D4D4D8", fontWeight: "600" }}>{p.completionYear}</span>
                      </div>

                      <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#FFFFFF !important", margin: "0 0 6px 0" }}>
                        {p.title}
                      </h4>

                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#A1A1AA", fontSize: "13px", marginBottom: "10px" }}>
                        <MapPin size={13} color="#FF6B6B" />
                        <span>{p.location}</span>
                      </div>

                      <p style={{ fontSize: "13px", color: "#D4D4D8 !important", margin: "0 0 12px 0", lineHeight: "1.5" }}>
                        {p.concept.length > 120 ? `${p.concept.slice(0, 120)}...` : p.concept}
                      </p>

                      <div style={{ fontSize: "12px", color: "#A1A1AA", marginBottom: "14px" }}>
                        <strong style={{ color: "#E4E4E7" }}>Scope: </strong>{p.scope}
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "12px" }}>
                      <Link
                        href={`/projects/${p.id}`}
                        target="_blank"
                        style={{ fontSize: "13px", color: "#60A5FA", textDecoration: "none", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "4px" }}
                      >
                        <span>Preview Page</span>
                        <ExternalLink size={12} />
                      </Link>

                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => {
                            setIsNewProject(false);
                            setEditingProject(p);
                          }}
                          style={{
                            padding: "6px 12px",
                            background: "#22222C",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "6px",
                            color: "#FFFFFF",
                            fontSize: "12px",
                            fontWeight: "700",
                            cursor: "pointer"
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProject(p.id, p.title)}
                          style={{
                            padding: "6px 10px",
                            background: "rgba(239, 68, 68, 0.15)",
                            border: "1px solid rgba(239, 68, 68, 0.4)",
                            borderRadius: "6px",
                            color: "#FCA5A5",
                            fontSize: "12px",
                            cursor: "pointer"
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SUBTAB 2: BLOGS LIST */}
            {contentSubTab === "blogs" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "18px" }}>
                {blogs.map((b) => (
                  <div
                    key={b.id}
                    className="dashboard-card"
                    style={{
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "700",
                            background: "rgba(59, 130, 246, 0.2)",
                            color: "#93C5FD",
                            padding: "3px 8px",
                            borderRadius: "6px",
                            border: "1px solid rgba(59, 130, 246, 0.4)"
                          }}
                        >
                          {b.category}
                        </span>
                        <span style={{ fontSize: "12px", color: "#D4D4D8" }}>{b.publishedDate}</span>
                      </div>

                      <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#FFFFFF !important", margin: "0 0 8px 0" }}>
                        {b.title}
                      </h4>

                      <p style={{ fontSize: "13px", color: "#D4D4D8 !important", margin: "0 0 14px 0", lineHeight: "1.5" }}>
                        {b.description.length > 130 ? `${b.description.slice(0, 130)}...` : b.description}
                      </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "12px" }}>
                      <Link
                        href={`/blog/${b.slug}`}
                        target="_blank"
                        style={{ fontSize: "13px", color: "#60A5FA", textDecoration: "none", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "4px" }}
                      >
                        <span>View Article</span>
                        <ExternalLink size={12} />
                      </Link>

                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => {
                            setIsNewBlog(false);
                            setEditingBlog(b);
                          }}
                          style={{
                            padding: "6px 12px",
                            background: "#22222C",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "6px",
                            color: "#FFFFFF",
                            fontSize: "12px",
                            fontWeight: "700",
                            cursor: "pointer"
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(b.id, b.title)}
                          style={{
                            padding: "6px 10px",
                            background: "rgba(239, 68, 68, 0.15)",
                            border: "1px solid rgba(239, 68, 68, 0.4)",
                            borderRadius: "6px",
                            color: "#FCA5A5",
                            fontSize: "12px",
                            cursor: "pointer"
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SUBTAB 3: TESTIMONIALS LIST */}
            {contentSubTab === "testimonials" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "18px" }}>
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="dashboard-card"
                    style={{
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", gap: "3px", marginBottom: "8px" }}>
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} size={15} color="#FACC15" fill="#FACC15" />
                        ))}
                      </div>

                      <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#FFFFFF !important", margin: "0 0 4px 0" }}>
                        “{t.reviewTitle}”
                      </h4>

                      <p style={{ fontSize: "13px", color: "#D4D4D8 !important", margin: "0 0 12px 0", lineHeight: "1.55" }}>
                        “{t.reviewText}”
                      </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "12px" }}>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "700", color: "#FFFFFF" }}>{t.clientName}</div>
                        <div style={{ fontSize: "12px", color: "#A1A1AA" }}>{t.community}</div>
                      </div>

                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => {
                            setIsNewTestimonial(false);
                            setEditingTestimonial(t);
                          }}
                          style={{
                            padding: "6px 12px",
                            background: "#22222C",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "6px",
                            color: "#FFFFFF",
                            fontSize: "12px",
                            fontWeight: "700",
                            cursor: "pointer"
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteTestimonial(t.id, t.clientName)}
                          style={{
                            padding: "6px 10px",
                            background: "rgba(239, 68, 68, 0.15)",
                            border: "1px solid rgba(239, 68, 68, 0.4)",
                            borderRadius: "6px",
                            color: "#FCA5A5",
                            fontSize: "12px",
                            cursor: "pointer"
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SUBTAB 4: BUSINESS PROFILE & CONTACT SETTINGS */}
            {contentSubTab === "settings" && (
              <div className="dashboard-card" style={{ padding: "32px", maxWidth: "800px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#FFFFFF !important", margin: "0 0 6px 0" }}>
                      Business Profile & Contact Hotline
                    </h3>
                    <p style={{ color: "#D4D4D8 !important", fontSize: "14px", margin: 0 }}>
                      Change your company phone numbers, address, and tagline directly without touching code.
                    </p>
                  </div>
                  {settingsSavedMessage && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "#052E16",
                        border: "1px solid #22C55E",
                        color: "#BBF7D0",
                        padding: "6px 14px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: "700"
                      }}
                    >
                      <Check size={16} />
                      <span>Changes Saved!</span>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSaveSettings} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                        Phone Number Display
                      </label>
                      <input
                        type="text"
                        value={siteSettings.phoneDisplay}
                        onChange={(e) => setSiteSettings({ ...siteSettings, phoneDisplay: e.target.value })}
                        className="dashboard-input"
                        style={{ width: "100%", padding: "10px 14px" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                        WhatsApp Number (digits with country code)
                      </label>
                      <input
                        type="text"
                        value={siteSettings.whatsappPhone}
                        onChange={(e) => setSiteSettings({ ...siteSettings, whatsappPhone: e.target.value })}
                        className="dashboard-input"
                        style={{ width: "100%", padding: "10px 14px" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                      Inquiry Email Address
                    </label>
                    <input
                      type="email"
                      value={siteSettings.email}
                      onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })}
                      className="dashboard-input"
                      style={{ width: "100%", padding: "10px 14px" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                      Experience Center Address
                    </label>
                    <input
                      type="text"
                      value={siteSettings.experienceCenter}
                      onChange={(e) => setSiteSettings({ ...siteSettings, experienceCenter: e.target.value })}
                      className="dashboard-input"
                      style={{ width: "100%", padding: "10px 14px" }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                        Operating Hours
                      </label>
                      <input
                        type="text"
                        value={siteSettings.hours}
                        onChange={(e) => setSiteSettings({ ...siteSettings, hours: e.target.value })}
                        className="dashboard-input"
                        style={{ width: "100%", padding: "10px 14px" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                        Primary Tagline
                      </label>
                      <input
                        type="text"
                        value={siteSettings.tagline}
                        onChange={(e) => setSiteSettings({ ...siteSettings, tagline: e.target.value })}
                        className="dashboard-input"
                        style={{ width: "100%", padding: "10px 14px" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                      Company Description
                    </label>
                    <textarea
                      rows={3}
                      value={siteSettings.description}
                      onChange={(e) => setSiteSettings({ ...siteSettings, description: e.target.value })}
                      className="dashboard-input"
                      style={{ width: "100%", padding: "10px 14px", resize: "vertical" }}
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                    <button
                      type="submit"
                      style={{
                        padding: "12px 28px",
                        background: "linear-gradient(135deg, #C1121F 0%, #A00E19 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: "700",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 14px rgba(193, 18, 31, 0.4)"
                      }}
                    >
                      <Save size={16} />
                      <span>Save Business Details</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 2: CLIENT LEADS CRM
           ========================================================================= */}
        {activeTab === "leads" && (
          <div>
            {/* Search and Status Filters */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "22px"
              }}
            >
              {/* Search Bar */}
              <div style={{ position: "relative", minWidth: "300px", flex: "1", maxWidth: "450px" }}>
                <Search
                  size={17}
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#D4D4D8"
                  }}
                />
                <input
                  type="text"
                  placeholder="Search by client, phone, location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="dashboard-input"
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 42px"
                  }}
                />
              </div>

              {/* Status Filter Badges */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["All", "New", "Contacted", "Site Visit", "Quoted", "Won", "Archived"].map((st) => {
                  const isSelected = selectedStatus === st;
                  return (
                    <button
                      key={st}
                      onClick={() => setSelectedStatus(st)}
                      style={{
                        padding: "8px 14px",
                        borderRadius: "8px",
                        border: isSelected ? "1px solid #C1121F" : "1px solid rgba(255, 255, 255, 0.18)",
                        background: isSelected ? "#C1121F" : "#14141A",
                        color: "#FFFFFF",
                        fontSize: "13px",
                        fontWeight: isSelected ? "700" : "600",
                        cursor: "pointer",
                        transition: "all 0.15s"
                      }}
                    >
                      {st}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Leads Listing */}
            {filteredLeads.length === 0 ? (
              <div
                className="dashboard-card"
                style={{
                  padding: "60px 20px",
                  textAlign: "center"
                }}
              >
                <Users size={44} color="#A1A1AA" style={{ margin: "0 auto 14px" }} />
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF !important", margin: "0 0 8px 0" }}>
                  No leads found
                </h3>
                <p style={{ fontSize: "14px", color: "#D4D4D8 !important", margin: 0 }}>
                  {searchQuery || selectedStatus !== "All"
                    ? "Try adjusting your search criteria or status filter."
                    : "New leads submitted on the website will automatically appear here."}
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {filteredLeads.map((lead) => {
                  const statusStyle = STATUS_CONFIG[lead.status] || STATUS_CONFIG.New;
                  const dateStr = new Date(lead.timestamp).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                  });

                  return (
                    <div
                      key={lead.id}
                      className="dashboard-card"
                      style={{
                        padding: "22px 24px"
                      }}
                    >
                      {/* Top Header of Card */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexWrap: "wrap",
                          gap: "12px",
                          marginBottom: "16px"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "700",
                              color: "#FFFFFF !important",
                              margin: 0,
                              letterSpacing: "-0.01em"
                            }}
                          >
                            {lead.name}
                          </h3>

                          {/* Status Dropdown */}
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                            style={{
                              background: statusStyle.bg,
                              color: statusStyle.text,
                              border: `1.5px solid ${statusStyle.border}`,
                              borderRadius: "6px",
                              padding: "5px 10px",
                              fontSize: "12.5px",
                              fontWeight: "800",
                              cursor: "pointer",
                              outline: "none"
                            }}
                          >
                            <option value="New" style={{ background: "#111", color: "#FED7AA" }}>
                              New
                            </option>
                            <option value="Contacted" style={{ background: "#111", color: "#BFDBFE" }}>
                              Contacted
                            </option>
                            <option value="Site Visit" style={{ background: "#111", color: "#E9D5FF" }}>
                              Site Visit
                            </option>
                            <option value="Quoted" style={{ background: "#111", color: "#FEF08A" }}>
                              Quoted
                            </option>
                            <option value="Won" style={{ background: "#111", color: "#BBF7D0" }}>
                              Won / Executing
                            </option>
                            <option value="Archived" style={{ background: "#111", color: "#E5E7EB" }}>
                              Archived
                            </option>
                          </select>

                          <span
                            style={{
                              fontSize: "12px",
                              color: "#D4D4D8",
                              background: "#181822",
                              border: "none",
                              padding: "4px 10px",
                              borderRadius: "6px",
                              fontWeight: "600"
                            }}
                          >
                            Source: {lead.source}
                          </span>
                        </div>

                        {/* Date and Delete */}
                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                          <span style={{ fontSize: "13px", color: "#D4D4D8", fontWeight: "500" }}>{dateStr}</span>
                          <button
                            onClick={() => handleDeleteLead(lead.id, lead.name)}
                            aria-label="Delete Lead"
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "#FCA5A5",
                              cursor: "pointer",
                              padding: "6px",
                              borderRadius: "6px"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4D4D")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#FCA5A5")}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                          gap: "14px",
                          background: "#121217",
                          padding: "16px 18px",
                          borderRadius: "10px",
                          border: "none",
                          marginBottom: "16px"
                        }}
                      >
                        <div>
                          <span style={{ color: "#A1A1AA", display: "block", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                            Phone & Contact
                          </span>
                          <div style={{ fontWeight: "700", color: "#FFFFFF", fontSize: "15px", marginTop: "3px" }}>
                            {lead.phone}
                          </div>
                          {lead.email && (
                            <div style={{ color: "#E4E4E7", fontSize: "13px", marginTop: "2px" }}>{lead.email}</div>
                          )}
                        </div>

                        <div>
                          <span style={{ color: "#A1A1AA", display: "block", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                            Property & Location
                          </span>
                          <div style={{ fontWeight: "700", color: "#FFFFFF", fontSize: "15px", marginTop: "3px" }}>
                            {lead.propertyType}
                          </div>
                          <div style={{ color: "#E4E4E7", fontSize: "13px", marginTop: "2px" }}>{lead.location}</div>
                        </div>

                        <div>
                          <span style={{ color: "#A1A1AA", display: "block", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                            Budget & Timeline
                          </span>
                          <div style={{ fontWeight: "700", color: "#FEF08A", fontSize: "15px", marginTop: "3px" }}>
                            {lead.budget}
                          </div>
                          <div style={{ color: "#E4E4E7", fontSize: "13px", marginTop: "2px" }}>
                            {lead.timeToStart}
                          </div>
                        </div>
                      </div>

                      {/* Scope & Message */}
                      {(lead.scope || lead.message) && (
                        <div
                          style={{
                            fontSize: "13.5px",
                            color: "#FFFFFF",
                            background: "#14141A",
                            border: "none",
                            padding: "12px 16px",
                            borderRadius: "8px",
                            marginBottom: "14px"
                          }}
                        >
                          {lead.scope && (
                            <div style={{ lineHeight: "1.5" }}>
                              <strong style={{ color: "#FCA5A5" }}>Scope: </strong>
                              {lead.scope}
                            </div>
                          )}
                          {lead.message && (
                            <div style={{ marginTop: lead.scope ? "6px" : "0", lineHeight: "1.5" }}>
                              <strong style={{ color: "#93C5FD" }}>Note: </strong>
                              {lead.message}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Internal Notes Section */}
                      <div style={{ marginBottom: "16px" }}>
                        {editingNotesId === lead.id ? (
                          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <input
                              type="text"
                              value={tempNotes}
                              onChange={(e) => setTempNotes(e.target.value)}
                              placeholder="Add internal designer remarks or site visit observations..."
                              className="dashboard-input"
                              style={{
                                flex: 1,
                                padding: "10px 14px"
                              }}
                            />
                            <button
                              onClick={() => handleSaveNotes(lead.id)}
                              style={{
                                padding: "10px 16px",
                                background: "#C1121F",
                                border: "none",
                                borderRadius: "8px",
                                color: "#FFFFFF",
                                fontSize: "13px",
                                fontWeight: "700",
                                cursor: "pointer"
                              }}
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingNotesId(null)}
                              style={{
                                padding: "10px 14px",
                                background: "#27272A",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                borderRadius: "8px",
                                color: "#FFFFFF",
                                fontSize: "13px",
                                fontWeight: "600",
                                cursor: "pointer"
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              setEditingNotesId(lead.id);
                              setTempNotes(lead.notes || "");
                            }}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              fontSize: "13px",
                              color: lead.notes ? "#BBF7D0" : "#E4E4E7",
                              cursor: "pointer",
                              padding: "6px 12px",
                              borderRadius: "6px",
                              background: lead.notes ? "#052E16" : "#1A1A22",
                              border: lead.notes ? "1px solid #16A34A" : "1px dashed rgba(255, 255, 255, 0.2)"
                            }}
                          >
                            <PenTool size={14} color={lead.notes ? "#4ADE80" : "#D4D4D8"} />
                            <span style={{ fontWeight: "600" }}>
                              {lead.notes ? `Remarks: ${lead.notes}` : "+ Click to add designer remarks"}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Bottom Direct Actions */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          gap: "12px",
                          flexWrap: "wrap",
                          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                          paddingTop: "14px"
                        }}
                      >
                        {/* Direct Phone Call */}
                        <a
                          href={`tel:${lead.phone.replace(/\s+/g, "")}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "9px 16px",
                            background: "#16161E",
                            border: "1px solid rgba(255, 255, 255, 0.24)",
                            borderRadius: "8px",
                            color: "#FFFFFF",
                            fontSize: "13.5px",
                            fontWeight: "700",
                            textDecoration: "none"
                          }}
                        >
                          <Phone size={15} color="#93C5FD" />
                          <span>Call Client</span>
                        </a>

                        {/* Direct WhatsApp Client */}
                        <button
                          onClick={() => {
                            const formatted = formatWhatsAppNumber(lead.phone);
                            const text = encodeURIComponent(
                              `Hi ${lead.name || "Sir/Madam"}! 👋 Greetings from Parthu Interiors Hyderabad.\n\nThank you for reaching out regarding your ${lead.propertyType || "home"} interior project in ${lead.location || "Hyderabad"}.\n\nOur senior interior designer is ready to discuss your floor plan and 3D concept. What is a convenient time for a quick 10-minute discovery call or site visit?\n\n*Parthu Interiors*\n📞 +91 87909 05746\n🌐 https://www.parthuinteriors.in`
                            );
                            window.open(`https://wa.me/${formatted}?text=${text}`, "_blank");
                          }}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "9px 18px",
                            background: "#052E16",
                            border: "1.5px solid #22C55E",
                            borderRadius: "8px",
                            color: "#FFFFFF",
                            fontSize: "13.5px",
                            fontWeight: "700",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(34, 197, 94, 0.25)"
                          }}
                        >
                          <MessageSquare size={15} color="#4ADE80" />
                          <span>WhatsApp Client</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 3: WEBSITE QUICK LINKS & ESSENTIALS
           ========================================================================= */}
        {activeTab === "overview" && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px"
              }}
            >
              <div
                className="dashboard-card"
                style={{ padding: "28px" }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: "700", margin: "0 0 18px 0", color: "#FFFFFF !important" }}>
                  Website Direct Navigation
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "Homepage", href: "/" },
                    { label: "Portfolio Projects", href: "/projects" },
                    { label: "Design Services", href: "/services" },
                    { label: "Hyderabad Locations", href: "/locations" },
                    { label: "Blog & Interior Guides", href: "/blog" },
                    { label: "About Parthu Interiors", href: "/about" },
                    { label: "Contact Us", href: "/contact" }
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 16px",
                        background: "#16161E",
                        border: "none",
                        borderRadius: "8px",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        textDecoration: "none",
                        fontWeight: "600",
                        transition: "all 0.15s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#23232E";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#16161E";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
                      }}
                    >
                      <span>{l.label}</span>
                      <ExternalLink size={14} color="#D4D4D8" />
                    </Link>
                  ))}
                </div>
              </div>

              <div
                className="dashboard-card"
                style={{ padding: "28px" }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: "700", margin: "0 0 18px 0", color: "#FFFFFF !important" }}>
                  Active Business Contacts
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px" }}>
                  <div>
                    <span style={{ color: "#A1A1AA", display: "block", fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>
                      Primary Contact Phone
                    </span>
                    <strong style={{ color: "#FFFFFF", fontSize: "16px", display: "block", marginTop: "2px" }}>
                      {siteSettings.phoneDisplay}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: "#A1A1AA", display: "block", fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>
                      WhatsApp Helpline
                    </span>
                    <strong style={{ color: "#4ADE80", fontSize: "15px", display: "block", marginTop: "2px" }}>
                      +{siteSettings.whatsappPhone}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: "#A1A1AA", display: "block", fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>
                      Email Inquiries
                    </span>
                    <strong style={{ color: "#FFFFFF", fontSize: "15px", display: "block", marginTop: "2px" }}>
                      {siteSettings.email}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: "#A1A1AA", display: "block", fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>
                      Experience Center
                    </span>
                    <strong style={{ color: "#FFFFFF", fontSize: "14px", display: "block", marginTop: "2px", lineHeight: "1.4" }}>
                      {siteSettings.experienceCenter}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ─── MODAL: EDIT / ADD PROJECT ────────────────────────────────────────── */}
      {editingProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setEditingProject(null)}
        >
          <div
            className="dashboard-card"
            style={{
              maxWidth: "640px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "32px",
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.95), 0 0 32px rgba(193, 18, 31, 0.2)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#FFFFFF !important" }}>
                {isNewProject ? "Add New Project" : "Edit Project Details"}
              </h3>
              <button
                onClick={() => setEditingProject(null)}
                style={{ background: "transparent", border: "none", color: "#FFFFFF", cursor: "pointer" }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveProject} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  placeholder="e.g. Kokapet 3BHK Luxury Residence"
                  className="dashboard-input"
                  style={{ width: "100%", padding: "10px 14px" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                    Location in Hyderabad
                  </label>
                  <input
                    type="text"
                    value={editingProject.location}
                    onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                    placeholder="e.g. Kokapet, Hyderabad"
                    className="dashboard-input"
                    style={{ width: "100%", padding: "10px 14px" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                    Project Type
                  </label>
                  <select
                    value={editingProject.projectType}
                    onChange={(e) => setEditingProject({ ...editingProject, projectType: e.target.value })}
                    className="dashboard-input"
                    style={{ width: "100%", padding: "10px 12px" }}
                  >
                    <option value="Luxury Villa">Luxury Villa</option>
                    <option value="3 BHK Apartment">3 BHK Apartment</option>
                    <option value="2 BHK Apartment">2 BHK Apartment</option>
                    <option value="Modular Kitchen Suite">Modular Kitchen Suite</option>
                    <option value="Master Bedroom Suite">Master Bedroom Suite</option>
                    <option value="Commercial / Office">Commercial / Office</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                    Scope of Work
                  </label>
                  <input
                    type="text"
                    value={editingProject.scope}
                    onChange={(e) => setEditingProject({ ...editingProject, scope: e.target.value })}
                    placeholder="e.g. Full Turnkey Interior Design"
                    className="dashboard-input"
                    style={{ width: "100%", padding: "10px 14px" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                    Completion Year
                  </label>
                  <input
                    type="text"
                    value={editingProject.completionYear}
                    onChange={(e) => setEditingProject({ ...editingProject, completionYear: e.target.value })}
                    placeholder="2026"
                    className="dashboard-input"
                    style={{ width: "100%", padding: "10px 14px" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                  Main Image URL or Path
                </label>
                <input
                  type="text"
                  value={editingProject.mainImage}
                  onChange={(e) => setEditingProject({ ...editingProject, mainImage: e.target.value })}
                  placeholder="/assets/main_images/... or https://..."
                  className="dashboard-input"
                  style={{ width: "100%", padding: "10px 14px" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                  Design Concept & Description
                </label>
                <textarea
                  rows={4}
                  value={editingProject.concept}
                  onChange={(e) => setEditingProject({ ...editingProject, concept: e.target.value })}
                  placeholder="Describe the architectural concept, layout highlights, color scheme, etc."
                  className="dashboard-input"
                  style={{ width: "100%", padding: "10px 14px", resize: "vertical" }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "14px" }}>
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  style={{
                    padding: "10px 18px",
                    background: "#27272A",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "10px 24px",
                    background: "linear-gradient(135deg, #C1121F 0%, #A00E19 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(193, 18, 31, 0.4)"
                  }}
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── MODAL: EDIT / ADD BLOG ───────────────────────────────────────────── */}
      {editingBlog && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setEditingBlog(null)}
        >
          <div
            className="dashboard-card"
            style={{
              maxWidth: "600px",
              width: "100%",
              padding: "32px",
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.95)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#FFFFFF !important" }}>
                {isNewBlog ? "New Blog Article" : "Edit Article"}
              </h3>
              <button
                onClick={() => setEditingBlog(null)}
                style={{ background: "transparent", border: "none", color: "#FFFFFF", cursor: "pointer" }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveBlog} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={editingBlog.title}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                  placeholder="e.g. Best Modular Kitchen Designs in Hyderabad"
                  className="dashboard-input"
                  style={{ width: "100%", padding: "10px 14px" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                    Category
                  </label>
                  <input
                    type="text"
                    value={editingBlog.category}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                    placeholder="e.g. Design Trends, Cost & Budgeting"
                    className="dashboard-input"
                    style={{ width: "100%", padding: "10px 14px" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                    Publication Date
                  </label>
                  <input
                    type="date"
                    value={editingBlog.publishedDate}
                    onChange={(e) => setEditingBlog({ ...editingBlog, publishedDate: e.target.value })}
                    className="dashboard-input"
                    style={{ width: "100%", padding: "10px 14px" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                  Short Summary / Meta Description
                </label>
                <textarea
                  rows={3}
                  value={editingBlog.description}
                  onChange={(e) => setEditingBlog({ ...editingBlog, description: e.target.value })}
                  placeholder="Brief summary shown on the blog index and search engines..."
                  className="dashboard-input"
                  style={{ width: "100%", padding: "10px 14px", resize: "vertical" }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "14px" }}>
                <button
                  type="button"
                  onClick={() => setEditingBlog(null)}
                  style={{
                    padding: "10px 18px",
                    background: "#27272A",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "10px 24px",
                    background: "linear-gradient(135deg, #C1121F 0%, #A00E19 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(193, 18, 31, 0.4)"
                  }}
                >
                  Save Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── MODAL: EDIT / ADD TESTIMONIAL ────────────────────────────────────── */}
      {editingTestimonial && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setEditingTestimonial(null)}
        >
          <div
            className="dashboard-card"
            style={{
              maxWidth: "560px",
              width: "100%",
              padding: "32px",
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.95)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#FFFFFF !important" }}>
                {isNewTestimonial ? "Add Client Review" : "Edit Client Review"}
              </h3>
              <button
                onClick={() => setEditingTestimonial(null)}
                style={{ background: "transparent", border: "none", color: "#FFFFFF", cursor: "pointer" }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveTestimonial} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingTestimonial.clientName}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, clientName: e.target.value })}
                    placeholder="e.g. Srinivas & Swapna"
                    className="dashboard-input"
                    style={{ width: "100%", padding: "10px 14px" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                    Gated Community / Apartment
                  </label>
                  <input
                    type="text"
                    value={editingTestimonial.community}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, community: e.target.value })}
                    placeholder="e.g. My Home Bhooja, HITEC City"
                    className="dashboard-input"
                    style={{ width: "100%", padding: "10px 14px" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                  Review Headline / Title
                </label>
                <input
                  type="text"
                  value={editingTestimonial.reviewTitle}
                  onChange={(e) => setEditingTestimonial({ ...editingTestimonial, reviewTitle: e.target.value })}
                  placeholder="e.g. Smooth Experience and Quality Woodwork"
                  className="dashboard-input"
                  style={{ width: "100%", padding: "10px 14px" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#E4E4E7", marginBottom: "6px" }}>
                  Client Testimonial Review Text *
                </label>
                <textarea
                  rows={4}
                  required
                  value={editingTestimonial.reviewText}
                  onChange={(e) => setEditingTestimonial({ ...editingTestimonial, reviewText: e.target.value })}
                  placeholder="Write the full feedback from the client..."
                  className="dashboard-input"
                  style={{ width: "100%", padding: "10px 14px", resize: "vertical" }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "14px" }}>
                <button
                  type="button"
                  onClick={() => setEditingTestimonial(null)}
                  style={{
                    padding: "10px 18px",
                    background: "#27272A",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "10px 24px",
                    background: "linear-gradient(135deg, #C1121F 0%, #A00E19 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(193, 18, 31, 0.4)"
                  }}
                >
                  Save Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── MODAL: ADD MANUAL / OFFLINE LEAD ─────────────────────────────────── */}
      {showAddLeadModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setShowAddLeadModal(false)}
        >
          <div
            className="dashboard-card"
            style={{
              maxWidth: "540px",
              width: "100%",
              padding: "32px",
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.95), 0 0 32px rgba(193, 18, 31, 0.2)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#FFFFFF !important" }}>
                Add Offline / Phone Lead
              </h3>
              <button
                onClick={() => setShowAddLeadModal(false)}
                style={{ background: "transparent", border: "none", color: "#FFFFFF", cursor: "pointer" }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateLead} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#E4E4E7", marginBottom: "6px" }}>
                  Client Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Reddy"
                  value={newLeadForm.name}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                  className="dashboard-input"
                  style={{ width: "100%", padding: "10px 14px" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#E4E4E7", marginBottom: "6px" }}>
                  Phone Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 98490 00000"
                  value={newLeadForm.phone}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                  className="dashboard-input"
                  style={{ width: "100%", padding: "10px 14px" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#E4E4E7", marginBottom: "6px" }}>
                    Property Type
                  </label>
                  <select
                    value={newLeadForm.propertyType}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, propertyType: e.target.value })}
                    className="dashboard-input"
                    style={{
                      width: "100%",
                      padding: "10px 12px"
                    }}
                  >
                    <option value="2 BHK Apartment">2 BHK Apartment</option>
                    <option value="3 BHK Apartment">3 BHK Apartment</option>
                    <option value="4 BHK Apartment">4 BHK Apartment</option>
                    <option value="Luxury Villa">Luxury Villa</option>
                    <option value="Independent House">Independent House</option>
                    <option value="Commercial / Office">Commercial / Office</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#E4E4E7", marginBottom: "6px" }}>
                    Location in Hyderabad
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kokapet, Gachibowli"
                    value={newLeadForm.location}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, location: e.target.value })}
                    className="dashboard-input"
                    style={{ width: "100%", padding: "10px 14px" }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#E4E4E7", marginBottom: "6px" }}>
                    Estimated Budget
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹15L - ₹20L"
                    value={newLeadForm.budget}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, budget: e.target.value })}
                    className="dashboard-input"
                    style={{ width: "100%", padding: "10px 14px" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#E4E4E7", marginBottom: "6px" }}>
                    Timeline
                  </label>
                  <select
                    value={newLeadForm.timeToStart}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, timeToStart: e.target.value })}
                    className="dashboard-input"
                    style={{
                      width: "100%",
                      padding: "10px 12px"
                    }}
                  >
                    <option value="Immediate (< 30 days)">Immediate (&lt; 30 days)</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="Planning Stage (> 3 months)">Planning Stage (&gt; 3 months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#E4E4E7", marginBottom: "6px" }}>
                  Remarks / Meeting Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Notes from initial phone call or site visit..."
                  value={newLeadForm.notes}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, notes: e.target.value })}
                  className="dashboard-input"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    resize: "vertical"
                  }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "14px" }}>
                <button
                  type="button"
                  onClick={() => setShowAddLeadModal(false)}
                  style={{
                    padding: "10px 18px",
                    background: "#27272A",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "10px 22px",
                    background: "linear-gradient(135deg, #C1121F 0%, #A00E19 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(193, 18, 31, 0.4)"
                  }}
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
