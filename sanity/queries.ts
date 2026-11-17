import { groq } from 'next-sanity';

export const allProjectsQuery = groq`
  *[_type == "project"] | order(featured desc, completionYear desc, _createdAt desc) {
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
  *[_type == "project" && (slug.current == $slug || _id == $slug)][0] {
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
  *[_type == "service"] | order(_createdAt asc) {
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
  *[_type == "service" && (slug.current == $slug || _id == $slug)][0] {
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
  *[_type == "location"] | order(priorityTier asc, name asc) {
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
  *[_type == "location" && (slug.current == $slug || _id == $slug)][0] {
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
  *[_type == "post" && status == "Published"] | order(publishedDate desc) {
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
    content,
    markdownContent,
    "faq": coalesce(faq[] { question, answer }, []),
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
  *[_type == "post" && slug.current == $slug][0] {
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
    content,
    markdownContent,
    "faq": coalesce(faq[] { question, answer }, []),
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
  *[_type == "testimonial"] | order(_createdAt desc) {
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
  *[_type == "siteSettings"][0] {
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

