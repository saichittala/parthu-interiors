import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion, useCdn, token, isSanityConfigured } from './env';
import {
  allProjectsQuery,
  projectBySlugQuery,
  allServicesQuery,
  serviceBySlugQuery,
  allLocationsQuery,
  locationBySlugQuery,
  allPostsQuery,
  postBySlugQuery,
  allTestimonialsQuery,
  siteSettingsQuery,
} from './queries';
import { projectsData, type ProjectDetail } from '../app/lib/projectsData';
import { servicesData, type ServiceDetail } from '../app/lib/servicesData';
import { locationsData, type LocationDetail } from '../app/lib/locationsData';
import { getBlogsFromDB, getBlogBySlug, type BlogPost } from '../app/lib/blog';

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset: dataset || 'production',
  apiVersion,
  useCdn,
  token: token || undefined,
  perspective: 'published',
});

// ---------------------------------------------------------------------------
// 1. PROJECTS
// ---------------------------------------------------------------------------
export async function getProjects(): Promise<ProjectDetail[]> {
  if (!isSanityConfigured()) {
    return projectsData;
  }
  try {
    const data = await client.fetch<ProjectDetail[]>(allProjectsQuery, {}, {
      next: { revalidate: 60, tags: ['projects'] },
    });
    if (data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('[Sanity Data Layer] Error fetching projects, using local fallback:', err);
  }
  return projectsData;
}

export async function getProjectBySlug(slug: string): Promise<ProjectDetail | null> {
  if (!isSanityConfigured()) {
    return projectsData.find((p) => p.id === slug) || null;
  }
  try {
    const data = await client.fetch<ProjectDetail | null>(
      projectBySlugQuery,
      { slug },
      { next: { revalidate: 60, tags: [`project-${slug}`] } }
    );
    if (data) return data;
  } catch (err) {
    console.warn(`[Sanity Data Layer] Error fetching project ${slug}, using local fallback:`, err);
  }
  return projectsData.find((p) => p.id === slug) || null;
}

// ---------------------------------------------------------------------------
// 2. SERVICES
// ---------------------------------------------------------------------------
export async function getServices(): Promise<ServiceDetail[]> {
  if (!isSanityConfigured()) {
    return servicesData;
  }
  try {
    const data = await client.fetch<ServiceDetail[]>(allServicesQuery, {}, {
      next: { revalidate: 60, tags: ['services'] },
    });
    if (data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('[Sanity Data Layer] Error fetching services, using local fallback:', err);
  }
  return servicesData;
}

export async function getServiceBySlug(slug: string): Promise<ServiceDetail | null> {
  if (!isSanityConfigured()) {
    return servicesData.find((s) => s.id === slug) || null;
  }
  try {
    const data = await client.fetch<ServiceDetail | null>(
      serviceBySlugQuery,
      { slug },
      { next: { revalidate: 60, tags: [`service-${slug}`] } }
    );
    if (data) return data;
  } catch (err) {
    console.warn(`[Sanity Data Layer] Error fetching service ${slug}, using local fallback:`, err);
  }
  return servicesData.find((s) => s.id === slug) || null;
}

// ---------------------------------------------------------------------------
// 3. LOCATIONS (HYDERABAD LOCAL SEO)
// ---------------------------------------------------------------------------
export async function getLocations(): Promise<LocationDetail[]> {
  if (!isSanityConfigured()) {
    return locationsData;
  }
  try {
    const data = await client.fetch<LocationDetail[]>(allLocationsQuery, {}, {
      next: { revalidate: 60, tags: ['locations'] },
    });
    if (data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('[Sanity Data Layer] Error fetching locations, using local fallback:', err);
  }
  return locationsData;
}

export async function getLocationBySlug(slug: string): Promise<LocationDetail | null> {
  if (!isSanityConfigured()) {
    return locationsData.find((l) => l.slug === slug) || null;
  }
  try {
    const data = await client.fetch<LocationDetail | null>(
      locationBySlugQuery,
      { slug },
      { next: { revalidate: 60, tags: [`location-${slug}`] } }
    );
    if (data) return data;
  } catch (err) {
    console.warn(`[Sanity Data Layer] Error fetching location ${slug}, using local fallback:`, err);
  }
  return locationsData.find((l) => l.slug === slug) || null;
}

// ---------------------------------------------------------------------------
// 4. BLOGS
// ---------------------------------------------------------------------------
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured()) {
    return getBlogsFromDB().filter((b) => b.status === 'Published');
  }
  try {
    const data = await client.fetch<BlogPost[]>(allPostsQuery, {}, {
      next: { revalidate: 60, tags: ['posts'] },
    });
    if (data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('[Sanity Data Layer] Error fetching blog posts, using local fallback:', err);
  }
  return getBlogsFromDB().filter((b) => b.status === 'Published');
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSanityConfigured()) {
    return getBlogBySlug(slug) || null;
  }
  try {
    const data = await client.fetch<BlogPost | null>(
      postBySlugQuery,
      { slug },
      { next: { revalidate: 60, tags: [`post-${slug}`] } }
    );
    if (data) return data;
  } catch (err) {
    console.warn(`[Sanity Data Layer] Error fetching post ${slug}, using local fallback:`, err);
  }
  return getBlogBySlug(slug) || null;
}

// ---------------------------------------------------------------------------
// 5. SITE SETTINGS & BRAND DEFAULTS
// ---------------------------------------------------------------------------
export async function getSiteSettings() {
  const fallback = {
    brandName: 'Parthu Interiors',
    legalName: 'Parthu Interiors Design & Execution LLP',
    tagline: 'Designing Spaces. Creating Homes.',
    phone: '+91 87909 05746',
    whatsappPhone: '+918790905746',
    email: 'parthuinteriors.hyderabad@gmail.com',
    factoryAddress: 'Parthu Interiors Modern Woodwork Manufacturing Facility, Kokapet, Hyderabad, Telangana 500075',
    studioAddress: 'Parthu Interiors Experience Centre, Near Pillar 143, Attapur Main Road, Hyderabad, Telangana 500048',
    workingHours: 'Monday – Sunday: 9:30 AM – 8:30 PM',
  };

  if (!isSanityConfigured()) {
    return fallback;
  }
  try {
    const data = await client.fetch(siteSettingsQuery, {}, {
      next: { revalidate: 300, tags: ['siteSettings'] },
    });
    if (data) return { ...fallback, ...data };
  } catch (err) {
    console.warn('[Sanity Data Layer] Error fetching site settings, using fallback:', err);
  }
  return fallback;
}

