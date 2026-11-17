const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

const DATABASE_URL =
  process.env.DATABASE_URL ||
  'postgresql://neondb_owner:npg_rv6Kg5InXGNL@ep-dry-forest-b3wk5pmu-pooler.c-4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

const sql = neon(DATABASE_URL);

async function seed() {
  console.log('Connecting to Neon Postgres to seed initial content...');

  // 1. Load blogs
  let blogs = [];
  const blogsPath = path.join(__dirname, '..', 'content', 'blogs.json');
  if (fs.existsSync(blogsPath)) {
    blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
  }

  // 2. Initial projects
  const initialProjects = [
    {
      id: "kokapet-gated-villa-interior",
      title: "Gated Villa Interior in Kokapet",
      location: "Kokapet, Hyderabad",
      projectType: "Luxury Villa",
      scope: "Full Turnkey Interior Design & Execution",
      designStyle: "Warm Contemporary Minimalist",
      completionYear: "2026",
      mainImage: "/assets/main_images/luxury-modern-european-design-cafe-interior-downtown-with-colorful-furniture-3d-rendering.webp",
      concept: "Designed for an executive family in Kokapet, this 5,400 sq. ft. villa seamlessly blends modern architectural minimalism with warm natural textures.",
      materials: ["100% BWP Marine Plywood", "Anti-Fingerprint Acrylic", "Book-Matched Botticino Italian Marble"],
      keyFeatures: ["Double-height living room TV console", "German modular kitchen with island breakfast counter"]
    },
    {
      id: "financial-district-3bhk-apartment",
      title: "Executive 3BHK Residence in Financial District",
      location: "Financial District, Nanakramguda",
      projectType: "3 BHK Apartment",
      scope: "End-to-End Modular Woodwork, False Ceiling & Lighting",
      designStyle: "Modern Japandi / Scandinavian Warmth",
      completionYear: "2026",
      mainImage: "/assets/main_images/luxury-living-room-with-classic-white-sofa-sofa-interior-design.webp",
      concept: "A 2,450 sq. ft. contemporary apartment interior tailored for tech executives requiring clean geometry and integrated workspace cabinetry.",
      materials: ["IS 710 Marine Grade Plywood", "Anti-Scratch Matte Acrylic", "Fluted Charcoal Acoustic Panelling"],
      keyFeatures: ["Acoustic-lined study cabin with glass sliding door", "Zero-maintenance quartz kitchen countertop"]
    },
    {
      id: "jubilee-hills-luxury-residence",
      title: "Architectural Villa in Jubilee Hills",
      location: "Jubilee Hills, Hyderabad",
      projectType: "Luxury Villa",
      scope: "Turnkey Bespoke Architecture & Custom Furniture",
      designStyle: "Neo-Classical Contemporary Luxury",
      completionYear: "2025",
      mainImage: "/assets/main_images/luxury-interior-design-private-apartment-contemporary-dining-room.webp",
      concept: "Spanning 7,200 sq. ft., this palatial family residence highlights high-end natural teak woodwork, brushed gold accents, and bespoke ceiling design.",
      materials: ["Burma Teak Wood", "Calacatta Gold Italian Marble", "High-Gloss PU Lacquer Shutters"],
      keyFeatures: ["Private home theater with Dolby Atmos acoustic framing", "Master suite walk-in wardrobe with island jewelry chest"]
    },
    {
      id: "gachibowli-modular-kitchen-suite",
      title: "German Precision Modular Kitchen in Gachibowli",
      location: "Gachibowli (Lansum Etania)",
      projectType: "Modular Kitchen Suite",
      scope: "Turnkey Kitchen Civil, Plumbing & Precision Cabinetry",
      designStyle: "Sleek Minimalist Monochrome",
      completionYear: "2026",
      mainImage: "/assets/main_images/luxury-interior-exterior-design-collection-highend-architectural-home-decor-concepts-feat.webp",
      concept: "Engineered with anti-fingerprint acrylic and Blum motorized servo-drive lift-up wall cabinets for effortless functionality.",
      materials: ["100% Calibrated BWP Marine Ply Carcass", "KalingaStone Calacatta Quartz Counter", "Blum Aventos HK-S Lift Systems"],
      keyFeatures: ["Concealed appliance garage with roll-up tambour door", "Corner magic carousel organizer with soft-closing dampeners"]
    }
  ];

  // 3. Initial Testimonials
  const initialTestimonials = [
    {
      id: "test-1",
      clientName: "Srinivas & Swapna",
      community: "My Home Bhooja, HITEC City, Hyderabad",
      rating: 5,
      reviewTitle: "A Smooth and Professional Experience",
      reviewText: "Parthu Interiors understood our requirements clearly and provided customised solutions for our home at My Home Bhooja. The overall design, 3D planning, and execution experience was smooth and professional.",
      initials: "SS"
    },
    {
      id: "test-2",
      clientName: "Karthik & Priyanka",
      community: "Lansum Etania, Gachibowli, Hyderabad",
      rating: 5,
      reviewTitle: "Beautiful and Functional Design",
      reviewText: "We wanted an interior that looked modern but was also practical for everyday use. The team at Parthu Interiors helped us achieve a beautiful and functional home at Lansum Etania.",
      initials: "KP"
    },
    {
      id: "test-3",
      clientName: "Venkat Rao",
      community: "Aparna Sarovar Zenith, Nallagandla",
      rating: 5,
      reviewTitle: "Exceptional Woodwork & Turnkey Delivery",
      reviewText: "Delivered within 45 days as committed with zero budget escalation. The factory-finish modular kitchen and acrylic wardrobes look extraordinary.",
      initials: "VR"
    }
  ];

  // 4. Initial Site Settings
  const initialSettings = {
    phoneDisplay: "+91 87909 05746",
    whatsappPhone: "918790905746",
    email: "parthuinteriors.hyderabad@gmail.com",
    experienceCenter: "Near Rainbow Hospital, Hyder Nagar, Kukatpally, Hyderabad, Telangana - 500072",
    hours: "Monday - Sunday: 9:30 AM - 8:30 PM (Experience Center open till 7:30 PM)",
    tagline: "Designing Spaces. Creating Dream Homes.",
    description: "Complete end-to-end responsibility from initial design to final handover. Advance planning, transparent budgeting, premium materials & regular site updates to make your dream home interior journey stress-free - Parthu Interiors."
  };

  // Insert into parthu_content
  await sql`
    INSERT INTO parthu_content (key, data, updated_at)
    VALUES ('projects', ${JSON.stringify(initialProjects)}, NOW())
    ON CONFLICT (key) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW();
  `;

  await sql`
    INSERT INTO parthu_content (key, data, updated_at)
    VALUES ('blogs', ${JSON.stringify(blogs.length > 0 ? blogs : [])}, NOW())
    ON CONFLICT (key) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW();
  `;

  await sql`
    INSERT INTO parthu_content (key, data, updated_at)
    VALUES ('testimonials', ${JSON.stringify(initialTestimonials)}, NOW())
    ON CONFLICT (key) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW();
  `;

  await sql`
    INSERT INTO parthu_content (key, data, updated_at)
    VALUES ('site_settings', ${JSON.stringify(initialSettings)}, NOW())
    ON CONFLICT (key) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW();
  `;

  console.log('Successfully seeded projects, blogs, testimonials and site settings into Neon database!');
}

seed().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});
