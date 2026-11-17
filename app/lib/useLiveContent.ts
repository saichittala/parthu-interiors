"use client";

import { useState, useEffect } from "react";
import {
  getDashboardProjects,
  getDashboardBlogs,
  getDashboardTestimonials,
  getDashboardSiteSettings,
  getDashboardBeforeAfter,
  syncContentWithServer,
  DEFAULT_SETTINGS,
  DEFAULT_BEFORE_AFTER,
  DashboardBlog,
  DashboardTestimonial,
  DashboardSiteSettings,
  DashboardBeforeAfter
} from "./contentStore";
import { ProjectDetail, projectsData as defaultProjects } from "./projectsData";

export function useLiveContent() {
  // Start with server-safe static defaults to guarantee 100% identical initial HTML hydration
  const [projects, setProjects] = useState<ProjectDetail[]>(defaultProjects);
  const [blogs, setBlogs] = useState<DashboardBlog[]>([]);
  const [testimonials, setTestimonials] = useState<DashboardTestimonial[]>([]);
  const [settings, setSettings] = useState<DashboardSiteSettings>(DEFAULT_SETTINGS);
  const [beforeAfter, setBeforeAfter] = useState<DashboardBeforeAfter>(DEFAULT_BEFORE_AFTER);

  useEffect(() => {
    // Read cached localStorage and sync with server after hydration completes
    setProjects(getDashboardProjects());
    setBlogs(getDashboardBlogs());
    setTestimonials(getDashboardTestimonials());
    setSettings(getDashboardSiteSettings());
    setBeforeAfter(getDashboardBeforeAfter());

    syncContentWithServer();

    const handleUpdate = () => {
      setProjects(getDashboardProjects());
      setBlogs(getDashboardBlogs());
      setTestimonials(getDashboardTestimonials());
      setSettings(getDashboardSiteSettings());
      setBeforeAfter(getDashboardBeforeAfter());
    };

    window.addEventListener("parthu_content_updated", handleUpdate);
    return () => {
      window.removeEventListener("parthu_content_updated", handleUpdate);
    };
  }, []);

  return { projects, blogs, testimonials, settings, beforeAfter };
}
