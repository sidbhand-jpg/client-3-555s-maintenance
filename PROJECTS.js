// ============================================================
// PROJECTS.js — Project photo gallery data
// ============================================================
// Separate from CONFIG.js on purpose: this file updates far more
// often (new completed jobs) than the rest of the site config, and
// is written automatically by the Houzflow asset pipeline's publish
// step once that's live. Keeping it isolated means a malformed write
// here can never break the rest of the site (header, services, etc).
//
// Format is a plain global array — intentionally NOT nested in an
// object — so the publish step can write this whole file with simple
// string templating (assign the JSON-stringified array to a single
// top-level array variable). No AST-aware JS writer or bundler
// required on the Worker side.
//
// Field notes:
//   alt          — descriptive alt text (from the pipeline's alt_text
//                  field). Never reuse `title` here — title is a project
//                  label, alt should describe what's actually in the photo.
//   width/height — explicit intrinsic dimensions (post-Photon-resize),
//                  prevents layout shift (CLS) while the image loads.
//   featured     — true = eligible to show in the home page "Recent Work"
//                  section (capped at 8–9 there). Lets curation/approval
//                  decide what's a homepage-worthy shot vs. just-the-gallery.
//   publishedAt  — optional, supports freshness sorting later.
// ============================================================

const PROJECTS = [
  {
    title: "Outdoor Kitchen & Paver Patio",
    category: "Paver Installations",
    img: "https://images.unsplash.com/photo-1602860739945-9a61573cd62d?w=800&q=80&auto=format&fit=crop",
    alt: "Finished paver patio with an outdoor kitchen, pergola, dining area, and fire pit",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-06-08",
  },
  {
    title: "Custom Paver Courtyard",
    category: "Paver Installations",
    img: "https://images.unsplash.com/photo-1761637823407-ef47925c2714?w=800&q=80&auto=format&fit=crop",
    alt: "Detailed circular paver courtyard with steps, stone borders, and landscaped planting beds",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-30",
  },
  {
    title: "Paver Patio & Garden Border",
    category: "Paver Installations",
    img: "https://images.unsplash.com/photo-1780838446281-9394772d07a8?w=800&q=80&auto=format&fit=crop",
    alt: "Circular stone paver patio framed by a low block border and established landscaping",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-20",
  },
  {
    title: "Stone Garden Wall",
    category: "Stone Masonry",
    img: "https://images.unsplash.com/photo-1761637823941-0ffae96ec487?w=800&q=80&auto=format&fit=crop",
    alt: "Crafted stone garden wall built with varied rectangular blocks and a finished cap",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-11",
  },
  {
    title: "Natural Stone Masonry Detail",
    category: "Stone Masonry",
    img: "https://images.unsplash.com/photo-1605932870425-8c18882e1e49?w=800&q=80&auto=format&fit=crop",
    alt: "Close view of precisely fitted natural stone masonry in varied neutral tones",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-02",
  },
  {
    title: "Fresh Concrete Installation",
    category: "Concrete Installations",
    img: "https://images.unsplash.com/photo-1685464196332-ed9c9da28d9a?w=800&q=80&auto=format&fit=crop",
    alt: "Concrete professional leveling a newly poured slab with powered finishing equipment",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-04-24",
  },
  {
    title: "Residential Landscape Design",
    category: "Landscape Design",
    img: "https://images.unsplash.com/photo-1763878121493-cefae6d5e66d?w=800&q=80&auto=format&fit=crop",
    alt: "Lush residential entrance with layered tropical plants, trimmed hedges, and a paved walkway",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-04-15",
  },
  {
    title: "Garden Path & Planting Design",
    category: "Landscape Design",
    img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80&auto=format&fit=crop",
    alt: "Landscaped garden path bordered by flowering shrubs, clipped hedges, and mature greenery",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-04-06",
  },
];
