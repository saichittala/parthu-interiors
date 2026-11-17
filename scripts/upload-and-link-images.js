const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const ts = require('typescript');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o2o9ouqt';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-01';
const token = process.env.SANITY_API_WRITE_TOKEN || 'skWRVEot4y9EkGvOa3XO0TeEplM4taOO98hznYrst4K81gnxXHyMn2Q0LxNBtQNjrZFQYiLXRAuneQtZg5oraQ31qXV7nYTquu64J01ipJVmcyg48JTY3NNpuDg9zIQiSwb0RVxWdbo8BiYbntU0lEj3aAYvvvqITujeQYOsUGVoFbQYpEB5';

const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const assetCache = new Map(); // localPath -> assetDocument

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

/**
 * Converts an image file to WebP buffer (if not already WebP) and uploads to Sanity.
 */
async function uploadImageToSanity(relPath) {
  if (!relPath) return null;
  
  const cleanRel = relPath.startsWith('/') ? relPath.substring(1) : relPath;
  const fullPath = path.join(PUBLIC_DIR, cleanRel);

  if (assetCache.has(cleanRel)) {
    return assetCache.get(cleanRel);
  }

  if (!fs.existsSync(fullPath)) {
    console.warn(`[Image Uploader] File not found: ${fullPath}`);
    return null;
  }

  try {
    const ext = path.extname(cleanRel).toLowerCase();
    const baseName = path.basename(cleanRel, ext);
    let buffer;
    let finalFilename = `${baseName}.webp`;

    if (ext === '.webp') {
      buffer = fs.readFileSync(fullPath);
    } else {
      console.log(`[Sharp] Converting ${cleanRel} to WebP...`);
      buffer = await sharp(fullPath)
        .webp({ quality: 85, effort: 4 })
        .toBuffer();
    }

    console.log(`[Sanity Asset Upload] Uploading ${finalFilename} (${(buffer.length / 1024).toFixed(1)} KB)...`);
    const uploadUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/assets/images/${dataset}?filename=${encodeURIComponent(finalFilename)}`;

    const res = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'image/webp',
      },
      body: buffer,
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`Upload error for ${finalFilename}:`, errText);
      return null;
    }

    const json = await res.json();
    const doc = json.document;
    console.log(`✅ Uploaded ${finalFilename} -> ${doc._id}`);

    assetCache.set(cleanRel, doc);
    return doc;
  } catch (err) {
    console.error(`Error processing ${cleanRel}:`, err);
    return null;
  }
}

async function sendMutations(mutations) {
  if (!mutations.length) return;
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ mutations }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Mutation failed: ${text}`);
  }
  return res.json();
}

async function main() {
  console.log(`\n======================================================`);
  console.log(`PARTHU INTERIORS — SANITY WEBP ASSET UPLOAD & LINKER`);
  console.log(`Project: ${projectId} | Dataset: ${dataset}`);
  console.log(`======================================================\n`);

  // 1. Upload All Assets in public/assets/main_images and brand logos
  const mainImagesDir = path.join(PUBLIC_DIR, 'assets', 'main_images');
  const files = fs.readdirSync(mainImagesDir);

  for (const file of files) {
    if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')) {
      await uploadImageToSanity(`assets/main_images/${file}`);
    }
  }

  // Upload logos
  await uploadImageToSanity('assets/logo.png');
  await uploadImageToSanity('assets/logo-white.png');

  console.log(`\nTotal assets uploaded/cached: ${assetCache.size}`);

  // 2. Fetch Projects, Services, Locations, Posts
  const projectsData = loadTsModule(path.join(ROOT, 'app', 'lib', 'projectsData.ts'), 'projectsData');
  const servicesData = loadTsModule(path.join(ROOT, 'app', 'lib', 'servicesData.ts'), 'servicesData');
  const locationsData = loadTsModule(path.join(ROOT, 'app', 'lib', 'locationsData.ts'), 'locationsData');
  const blogsData = JSON.parse(fs.readFileSync(path.join(ROOT, 'content', 'blogs.json'), 'utf8') || '[]');

  const mutations = [];

  // 3. Link Images to Projects
  for (const p of projectsData) {
    const mainAsset = await uploadImageToSanity(p.mainImage);
    const galleryAssets = [];
    for (const gPath of (p.gallery || [])) {
      const gAsset = await uploadImageToSanity(gPath);
      if (gAsset) {
        galleryAssets.push({
          _key: Math.random().toString(36).substring(2, 9),
          _type: 'image',
          asset: { _type: 'reference', _ref: gAsset._id },
          alt: `${p.title} - Interior Showcase`,
        });
      }
    }

    const patchDoc = {
      patch: {
        id: `project-${p.id}`,
        set: {
          mainImage: mainAsset ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: mainAsset._id },
            alt: `${p.title} - ${p.location}`,
          } : undefined,
          gallery: galleryAssets.length ? galleryAssets : undefined,
        },
      },
    };
    mutations.push(patchDoc);
  }

  // 4. Link Images to Services
  for (const s of servicesData) {
    const mainAsset = await uploadImageToSanity(s.mainImage);
    const galleryAssets = [];
    for (const gPath of (s.gallery || [])) {
      const gAsset = await uploadImageToSanity(gPath);
      if (gAsset) {
        galleryAssets.push({
          _key: Math.random().toString(36).substring(2, 9),
          _type: 'image',
          asset: { _type: 'reference', _ref: gAsset._id },
          alt: `${s.title} Design Showcase`,
        });
      }
    }

    const patchDoc = {
      patch: {
        id: `service-${s.id}`,
        set: {
          mainImage: mainAsset ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: mainAsset._id },
            alt: `${s.title} - Parthu Interiors`,
          } : undefined,
          gallery: galleryAssets.length ? galleryAssets : undefined,
        },
      },
    };
    mutations.push(patchDoc);
  }

  // 5. Link Images to Locations
  for (const loc of locationsData) {
    const featAsset = await uploadImageToSanity(loc.featuredImage);
    if (featAsset) {
      mutations.push({
        patch: {
          id: `location-${loc.slug}`,
          set: {
            featuredImage: {
              _type: 'image',
              asset: { _type: 'reference', _ref: featAsset._id },
              alt: `Luxury Interior Design in ${loc.name}, Hyderabad`,
            },
          },
        },
      });
    }
  }

  // 6. Link Images to Blog Posts
  for (const b of blogsData) {
    const featAsset = await uploadImageToSanity(b.featuredImage);
    if (featAsset) {
      mutations.push({
        patch: {
          id: `post-${b.slug}`,
          set: {
            featuredImage: {
              _type: 'image',
              asset: { _type: 'reference', _ref: featAsset._id },
              alt: b.title,
            },
          },
        },
      });
    }
  }

  // 7. Link Images to Site Settings
  const logoAsset = await uploadImageToSanity('assets/logo.png');
  const ogAsset = await uploadImageToSanity('assets/main_images/luxury-living-room-with-classic-white-sofa-sofa-interior-design.webp');
  if (logoAsset || ogAsset) {
    mutations.push({
      patch: {
        id: 'siteSettings',
        set: {
          logo: logoAsset ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: logoAsset._id },
            alt: 'Parthu Interiors Logo',
          } : undefined,
          ogImage: ogAsset ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: ogAsset._id },
            alt: 'Parthu Interiors Hyderabad',
          } : undefined,
        },
      },
    });
  }

  console.log(`\nApplying ${mutations.length} image patches across Sanity documents...`);

  // Batch patches in groups of 20
  for (let i = 0; i < mutations.length; i += 20) {
    const batch = mutations.slice(i, i + 20);
    console.log(`Submitting patch batch ${Math.floor(i / 20) + 1} (${batch.length} docs)...`);
    await sendMutations(batch);
  }

  console.log(`\n🎉 SUCCESS! All image assets have been converted to WebP, uploaded, and linked across Sanity documents!\n`);
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
