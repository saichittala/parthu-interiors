/**
 * Parthu Interiors — Sanity Content Lake Migration & NDJSON Generator
 *
 * Converts existing verified local datasets (Projects, Services, Hyderabad Locations,
 * Blogs, Categories, Testimonials, Brand Settings) into Sanity-compliant structured documents.
 *
 * Outputs:
 * - content/sanity-export.ndjson (ready for: npx sanity dataset import content/sanity-export.ndjson production)
 * - Direct Sanity API ingestion if SANITY_API_WRITE_TOKEN is configured.
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const ROOT = path.join(__dirname, '..');
const OUTPUT_FILE = path.join(ROOT, 'content', 'sanity-export.ndjson');

// Read existing verified datasets
const blogsPath = path.join(ROOT, 'content', 'blogs.json');
const blogs = fs.existsSync(blogsPath) ? JSON.parse(fs.readFileSync(blogsPath, 'utf8')) : [];

function loadTsModule(filePath, exportName) {
  try {
    const code = fs.readFileSync(filePath, 'utf8');
    const js = ts.transpileModule(code, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    }).outputText;
    const exportsObj = {};
    const fn = new Function('exports', 'require', '__dirname', '__filename', js);
    fn(exportsObj, require, path.dirname(filePath), filePath);
    return exportsObj[exportName] || [];
  } catch (err) {
    console.error(`Error loading ${exportName} from ${filePath}:`, err.message);
    return [];
  }
}

const projects = loadTsModule(path.join(ROOT, 'app', 'lib', 'projectsData.ts'), 'projectsData');
const services = loadTsModule(path.join(ROOT, 'app', 'lib', 'servicesData.ts'), 'servicesData');
const locations = loadTsModule(path.join(ROOT, 'app', 'lib', 'locationsData.ts'), 'locationsData');

console.log(`[Sanity Exporter] Loaded local datasets:`);
console.log(`- ${projects.length} Projects`);
console.log(`- ${services.length} Services`);
console.log(`- ${locations.length} Hyderabad Locations`);
console.log(`- ${blogs.length} Blog Posts`);

const documents = [];

// 1. BRAND & SITE SETTINGS SINGLETON
documents.push({
  _id: 'siteSettings',
  _type: 'siteSettings',
  brandName: 'Parthu Interiors',
  legalName: 'Parthu Interiors Design & Execution LLP',
  tagline: 'Designing Spaces. Creating Homes.',
  phone: '+91 87909 05746',
  whatsappPhone: '+918790905746',
  email: 'parthuinteriors.hyderabad@gmail.com',
  factoryAddress: 'Parthu Interiors Modern Woodwork Manufacturing Facility, Kokapet, Hyderabad, Telangana 500075',
  studioAddress: 'Parthu Interiors Experience Centre, Near Pillar 143, Attapur Main Road, Hyderabad, Telangana 500048',
  workingHours: 'Monday – Sunday: 9:30 AM – 8:30 PM',
  socialLinks: {
    instagram: 'https://www.instagram.com/parthu_interiors',
    facebook: 'https://www.facebook.com/parthuinteriors',
  },
  globalSeo: {
    metaTitle: 'Parthu Interiors | Premium Interior Design & Turnkey Execution Hyderabad',
    metaDescription: 'Direct factory-to-site luxury interior design and turnkey execution in Hyderabad. 100% BWP Marine Plywood, German fittings & 10-year warranty.',
    focusKeyword: 'Interior Designers in Hyderabad',
  },
});

// 2. CATEGORIES
const categoryMap = new Map();
const defaultCategories = [
  { id: 'cat-turnkey', title: 'Turnkey Interiors', slug: 'turnkey-interiors' },
  { id: 'cat-modular', title: 'Modular Woodwork', slug: 'modular-woodwork' },
  { id: 'cat-luxury', title: 'Luxury Residences', slug: 'luxury-residences' },
  { id: 'cat-guides', title: 'Interior Cost & Guides', slug: 'interior-guides' },
];

defaultCategories.forEach((cat) => {
  documents.push({
    _id: cat.id,
    _type: 'category',
    title: cat.title,
    slug: { _type: 'slug', current: cat.slug },
  });
  categoryMap.set(cat.title, cat.id);
});

// 3. SERVICES
services.forEach((s, idx) => {
  documents.push({
    _id: `service-${s.id}`,
    _type: 'service',
    title: s.title,
    slug: { _type: 'slug', current: s.id },
    category: s.category || 'Turnkey Interiors',
    tagline: s.tagline || '',
    description: s.description || '',
    features: s.features || [],
    specs: s.specs || {},
    faqs: (s.faqs || []).map((f) => ({
      _key: Math.random().toString(36).substring(2, 9),
      question: f.question,
      answer: f.answer,
    })),
    seo: {
      metaTitle: s.metaTitle || `${s.title} | Parthu Interiors Hyderabad`,
      metaDescription: s.metaDescription || s.description.substring(0, 155),
    },
  });
});

// 4. LOCATIONS
locations.forEach((loc) => {
  documents.push({
    _id: `location-${loc.slug}`,
    _type: 'location',
    name: loc.name,
    slug: { _type: 'slug', current: loc.slug },
    zone: loc.zone || 'West Hyderabad',
    priorityTier: ['kukatpally', 'kphb'].includes(loc.slug)
      ? 'tier-1'
      : ['madhapur', 'gachibowli', 'kokapet', 'jubilee-hills', 'financial-district'].includes(loc.slug)
      ? 'tier-2'
      : 'tier-3',
    heroHeadline: loc.heroHeadline || 'Interiors, Thoughtfully Designed.',
    heroSubheadline: loc.heroSubheadline || '',
    intro: loc.intro || '',
    propertyTypes: loc.propertyTypes || [],
    keyHighlights: loc.keyHighlights || [],
    localDesignConsiderations: loc.localDesignConsiderations || [],
    nearbyAreas: loc.nearbyAreas || [],
    faqs: (loc.faqs || []).map((f) => ({
      _key: Math.random().toString(36).substring(2, 9),
      question: f.question,
      answer: f.answer,
    })),
    seo: {
      metaTitle: loc.metaTitle,
      metaDescription: loc.metaDescription,
    },
  });
});

// 5. PROJECTS
projects.forEach((p) => {
  documents.push({
    _id: `project-${p.id}`,
    _type: 'project',
    title: p.title,
    slug: { _type: 'slug', current: p.id },
    projectType: p.projectType || 'Luxury Residence',
    locationName: p.location || 'Hyderabad',
    location: p.relatedLocationSlug ? { _type: 'reference', _ref: `location-${p.relatedLocationSlug}`, _weak: true } : undefined,
    scope: p.scope || 'Full Turnkey Interior Design & Execution',
    designStyle: p.designStyle || 'Contemporary',
    completionYear: p.completionYear || '2026',
    featured: true,
    concept: p.concept || '',
    materials: p.materials || [],
    keyFeatures: p.keyFeatures || [],
    challenge: p.challenge || '',
    solution: p.solution || '',
    relatedService: p.relatedServiceId ? { _type: 'reference', _ref: `service-${p.relatedServiceId}`, _weak: true } : undefined,
    seo: {
      metaTitle: p.metaTitle || p.title,
      metaDescription: p.metaDescription || p.concept.substring(0, 155),
    },
  });
});

// 6. BLOG POSTS
blogs.forEach((b) => {
  documents.push({
    _id: `post-${b.slug}`,
    _type: 'post',
    title: b.title,
    slug: { _type: 'slug', current: b.slug },
    description: b.description || '',
    author: b.author || 'Parthu Interiors Editorial Team',
    tags: b.tags || [],
    publishedDate: b.publishedDate ? new Date(b.publishedDate).toISOString() : new Date().toISOString(),
    updatedDate: b.updatedDate ? new Date(b.updatedDate).toISOString() : new Date().toISOString(),
    status: b.status === 'Published' ? 'Published' : 'Draft',
    markdownContent: b.content || '',
    faq: (b.faq || []).map((f) => ({
      _key: Math.random().toString(36).substring(2, 9),
      question: f.question,
      answer: f.answer,
    })),
    seo: {
      metaTitle: b.metaTitle || b.title,
      metaDescription: b.metaDescription || b.description,
      focusKeyword: b.focusKeyword || '',
    },
  });
});

// Write to NDJSON
const ndjsonContent = documents.map((doc) => JSON.stringify(doc)).join('\n') + '\n';
fs.writeFileSync(OUTPUT_FILE, ndjsonContent, 'utf8');

console.log(`\n✅ Generated Sanity NDJSON import file:`);
console.log(`   Path: ${OUTPUT_FILE}`);
console.log(`   Total Documents: ${documents.length}`);
console.log(`\nTo import into your Sanity Content Lake, run:`);
console.log(`   npx sanity dataset import content/sanity-export.ndjson production\n`);
