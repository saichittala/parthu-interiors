import { groq } from 'next-sanity';

export const allProjectsQuery = groq`
  *[_type == "project" && !(_id in path("drafts.**"))] | order(featured desc, completionYear desc, _createdAt desc) {
    _id,
    title,
    "id": slug.current,
    "slug": slug.current,
    projectType,
    "location": locationName,
    locationName,
    scope,
    designStyle,
    completionYear,
    squareFootage,
    featured,
    "mainImage": coalesce(mainImage.asset->url, ""),
    "gallery": coalesce(gallery[].asset->url, []),
    concept,
    materials,
    keyFeatures,
    challenge,
    solution,
    "relatedLocationSlug": location->slug.current,
    "relatedServiceId": relatedService->slug.current,
    roomGalleries[] {
      roomName,
      roomType,
      description,
      images[] {
        "url": asset->url,
        alt,
        caption
      }
    },
    beforeAfter[] {
      title,
      "beforeImage": beforeImage.asset->url,
      "afterImage": afterImage.asset->url,
      note
    },
    "metaTitle": coalesce(seo.metaTitle, title + " | Parthu Interiors Project Showcase"),
    "metaDescription": coalesce(seo.metaDescription, concept, "Interior design project by Parthu Interiors in Hyderabad."),
    seo {
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      "ogImage": ogImage.asset->url,
      canonicalUrl,
      noIndex
    }
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && !(_id in path("drafts.**")) && (slug.current == $slug || _id == $slug)][0] {
    _id,
    title,
    "id": slug.current,
    "slug": slug.current,
    projectType,
    "location": locationName,
    locationName,
    scope,
    designStyle,
    completionYear,
    squareFootage,
    featured,
    "mainImage": coalesce(mainImage.asset->url, ""),
    "gallery": coalesce(gallery[].asset->url, []),
    concept,
    materials,
    keyFeatures,
    challenge,
    solution,
    "relatedLocationSlug": location->slug.current,
    "relatedServiceId": relatedService->slug.current,
    roomGalleries[] {
      roomName,
      roomType,
      description,
      images[] {
        "url": asset->url,
        alt,
        caption
      }
    },
    beforeAfter[] {
      title,
      "beforeImage": beforeImage.asset->url,
      "afterImage": afterImage.asset->url,
      note
    },
    "metaTitle": coalesce(seo.metaTitle, title + " | Parthu Interiors Project Showcase"),
    "metaDescription": coalesce(seo.metaDescription, concept, "Interior design project by Parthu Interiors in Hyderabad."),
    seo {
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      "ogImage": ogImage.asset->url,
      canonicalUrl,
      noIndex
    }
  }
`;

export const allServicesQuery = groq`
  *[_type == "service" && !(_id in path("drafts.**"))] | order(_createdAt asc) {
    _id,
    title,
    "id": slug.current,
    "slug": slug.current,
    category,
    tagline,
    description,
    "mainImage": coalesce(mainImage.asset->url, ""),
    "gallery": coalesce(gallery[].asset->url, []),
    features,
    specs,
    "faqs": coalesce(faqs[] { question, answer }, []),
    "metaTitle": coalesce(seo.metaTitle, title + " Interior Design Hyderabad | Parthu Interiors"),
    "metaDescription": coalesce(seo.metaDescription, tagline, description, ""),
    seo {
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      "ogImage": ogImage.asset->url,
      canonicalUrl,
      noIndex
    }
  }
`;

export const serviceBySlugQuery = groq`
  *[_type == "service" && !(_id in path("drafts.**")) && (slug.current == $slug || _id == $slug)][0] {
    _id,
    title,
    "id": slug.current,
    "slug": slug.current,
    category,
    tagline,
    description,
    "mainImage": coalesce(mainImage.asset->url, ""),
    "gallery": coalesce(gallery[].asset->url, []),
    features,
    specs,
    "faqs": coalesce(faqs[] { question, answer }, []),
    "metaTitle": coalesce(seo.metaTitle, title + " Interior Design Hyderabad | Parthu Interiors"),
    "metaDescription": coalesce(seo.metaDescription, tagline, description, ""),
    seo {
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      "ogImage": ogImage.asset->url,
      canonicalUrl,
      noIndex
    }
  }
`;

export const allLocationsQuery = groq`
  *[_type == "location" && !(_id in path("drafts.**"))] | order(priorityTier asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    zone,
    priorityTier,
    heroHeadline,
    heroSubheadline,
    intro,
    propertyTypes,
    keyHighlights,
    localDesignConsiderations,
    nearbyAreas,
    "featuredImage": coalesce(featuredImage.asset->url, ""),
    "faqs": coalesce(faqs[] { question, answer }, []),
    "metaTitle": coalesce(seo.metaTitle, name + " Interior Design | Parthu Interiors"),
    "metaDescription": coalesce(seo.metaDescription, heroSubheadline, intro, ""),
    seo {
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      "ogImage": ogImage.asset->url,
      canonicalUrl,
      noIndex
    }
  }
`;

export const locationBySlugQuery = groq`
  *[_type == "location" && !(_id in path("drafts.**")) && (slug.current == $slug || _id == $slug)][0] {
    _id,
    name,
    "slug": slug.current,
    zone,
    priorityTier,
    heroHeadline,
    heroSubheadline,
    intro,
    propertyTypes,
    keyHighlights,
    localDesignConsiderations,
    nearbyAreas,
    "featuredImage": coalesce(featuredImage.asset->url, ""),
    "faqs": coalesce(faqs[] { question, answer }, []),
    "metaTitle": coalesce(seo.metaTitle, name + " Interior Design | Parthu Interiors"),
    "metaDescription": coalesce(seo.metaDescription, heroSubheadline, intro, ""),
    seo {
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      "ogImage": ogImage.asset->url,
      canonicalUrl,
      noIndex
    }
  }
`;

export const allPostsQuery = groq`
  *[_type == "post" && status == "Published" && !(_id in path("drafts.**"))] | order(publishedDate desc) {
    _id,
    title,
    "id": slug.current,
    "slug": slug.current,
    description,
    "featuredImage": coalesce(featuredImage.asset->url, ""),
    author,
    "category": coalesce(category->title, "Interior Design"),
    tags,
    publishedDate,
    updatedDate,
    status,
    "content": coalesce(markdownContent, content, description, ""),
    markdownContent,
    "faq": coalesce(faq[] { question, answer }, []),
    "metaTitle": coalesce(seo.metaTitle, title + " | Parthu Interiors Blog"),
    "metaDescription": coalesce(seo.metaDescription, description, ""),
    "canonicalUrl": coalesce(seo.canonicalUrl, ""),
    "ogImage": coalesce(seo.ogImage.asset->url, featuredImage.asset->url, ""),
    seo {
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      "ogImage": ogImage.asset->url,
      canonicalUrl,
      noIndex
    }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && !(_id in path("drafts.**")) && (slug.current == $slug || _id == $slug)][0] {
    _id,
    title,
    "id": slug.current,
    "slug": slug.current,
    description,
    "featuredImage": coalesce(featuredImage.asset->url, ""),
    author,
    "category": coalesce(category->title, "Interior Design"),
    tags,
    publishedDate,
    updatedDate,
    status,
    "content": coalesce(markdownContent, content, description, ""),
    markdownContent,
    "faq": coalesce(faq[] { question, answer }, []),
    "metaTitle": coalesce(seo.metaTitle, title + " | Parthu Interiors Blog"),
    "metaDescription": coalesce(seo.metaDescription, description, ""),
    "canonicalUrl": coalesce(seo.canonicalUrl, ""),
    "ogImage": coalesce(seo.ogImage.asset->url, featuredImage.asset->url, ""),
    seo {
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      "ogImage": ogImage.asset->url,
      canonicalUrl,
      noIndex
    }
  }
`;

export const allTestimonialsQuery = groq`
  *[_type == "testimonial" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
    _id,
    clientName,
    propertyLocation,
    rating,
    reviewText,
    verified,
    "avatar": avatar.asset->url
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && !(_id in path("drafts.**"))][0] {
    brandName,
    legalName,
    tagline,
    phone,
    whatsappPhone,
    email,
    factoryAddress,
    studioAddress,
    workingHours,
    socialLinks,
    globalSeo {
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      "ogImage": ogImage.asset->url,
      canonicalUrl,
      noIndex
    }
  }
`;
