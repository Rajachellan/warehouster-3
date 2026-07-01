import { ServicePageContent } from "../ServicePageTemplate";

const warehouseConstructionContent: ServicePageContent = {
  hero: {
    badge: "Warehouse Construction",
    title: "Grade-A Construction For",
    titleAccent: "South India's Industrial Future",
    description:
      "Warehouster builds institutional-grade warehouses and logistics facilities using pre-engineered building systems, FM2 flooring, and global construction standards — delivering faster time-to-market with superior durability and operational efficiency.",
    primaryCta: { label: "Request A Construction Brief", href: "/contact" },
    secondaryCta: { label: "View Our Portfolio", href: "/projects" },
    mainImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=85",
    accentImage1:
      "/images/warehouse/warehouse-inside (9).png",
    accentImage2:
     "/images/warehouse/warehouse (6).jpg",
    mainImageAlt: "Grade-A warehouse under construction",
  },
  stats: [
    { n: 11, suffix: "", label: "Months record delivery" },
    { n: 12, suffix: "M+", label: "Sq. ft. constructed" },
    { n: 40, suffix: "ft", label: "Clear height standard" },
  ],
  trustItems: [
    "PEB Construction",
    "FM2 Flooring",
    "Grade-A Specs",
    "Safety Certified",
    "Rapid Deployment",
  ],
  galleryImages: [
    "/images/warehouse/warehouse-inside (11).png",
"/images/warehouse/ware-house (7).jpg",
    "/images/warehouse/warehouse (2).jpg",
    "/images/warehouse/warehouse (3).jpg",
  ],
  pillarsSection: {
    eyebrow: "Construction Excellence",
    title: "The Gold Standard",
    highlight: "In Every Build",
    description:
      "We don't settle for mediocre builds. Every Warehouster facility is an institutional-grade asset engineered for structural integrity, operational throughput, and long-term capital appreciation.",
  },
  pillars: [
    {
      tag: "01",
      title: "Pre-Engineered Buildings",
      body: "Off-site fabrication of structural components for rapid on-site assembly — compressing delivery timelines without compromising structural integrity.",
      img: "/images/warehouse/warehouse-inside (4).png",
    },
    {
      tag: "02",
      title: "FM2 Specialized Flooring",
      body: "Laser-screed technology delivering perfectly flat FM2 flooring for high-density racking systems — the foundation of productive warehouse operations.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
    },
    {
      tag: "03",
      title: "Smart Safety Systems",
      body: "NFPA-compliant fire protection, advanced ventilation, dock levelers, and integrated safety systems meeting international warehouse standards.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80",
    },
    {
      tag: "04",
      title: "Sustainable Infrastructure",
      body: "Rainwater harvesting, LED lighting, climate-adaptive insulation, and green building practices as standard — reducing lifecycle operating costs.",
      img: "/images/warehouse/warehouster-land (1).jpg",
    },
  ],
  archetypesSection: {
    eyebrow: "Built For",
    title: "Four Industry",
    highlight: "Verticals",
  },
  archetypes: [
    {
      type: "3PL & Logistics",
      tag: "Distribution",
      desc: "Large-scale Grade-A distribution centres with multi-temperature zones, cross-docking, and high-throughput dock configurations.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80",
    },
    {
      type: "FMCG & Retail",
      tag: "Consumer Goods",
      desc: "Hygiene-compliant storage with climate control, FM2 flooring, and rapid deployment for festive season readiness.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80",
    },
    {
      type: "Automotive & Manufacturing",
      tag: "Industrial",
      desc: "Heavy-duty industrial shells with crane-ready structures, reinforced flooring, and BTS customisation for component manufacturers.",
      img: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=600&auto=format&fit=crop&q=80",
    },
    {
      type: "E-Commerce & Fulfilment",
      tag: "Last-Mile",
      desc: "High-clearance fulfilment centres optimised for automated sorting, mezzanine levels, and last-mile delivery hub operations.",
      img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop&q=80",
    },
  ],
  processSection: {
    eyebrow: "Construction Process",
    title: "Design, Fabricate,",
    highlight: "Deliver",
    description:
      "Our modular construction methodology combines off-site precision with on-site speed — setting regional benchmarks for warehouse delivery timelines.",
  },
  steps: [
    {
      n: "01",
      title: "Modular Design & Engineering",
      body: "Custom structural design optimised for clear heights, floor loads, and operational layout — engineered to institutional specifications.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=960&auto=format&fit=crop&q=85",
    },
    {
      n: "02",
      title: "Off-Site Fabrication",
      body: "PEB components manufactured in controlled environments for precision quality, then transported for rapid on-site assembly.",
      img:"/images/warehouse/industrial-park.jpg",
    },
    {
      n: "03",
      title: "Site Assembly & Fit-Out",
      body: "Parallel workstreams for structural erection, FM2 flooring, MEP installation, and fire safety systems — 24/7 schedules when required.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=960&auto=format&fit=crop&q=85",
    },
    {
      n: "04",
      title: "Commissioning & Handover",
      body: "Final quality inspections, safety certifications, and formal handover with complete as-built documentation and warranty package.",
      img: "https://images.unsplash.com/photo-1590684153400-e3e7a935b0e1?w=960&auto=format&fit=crop&q=85",
    },
  ],
  corridorsSection: {
    eyebrow: "Construction Footprint",
    title: "Built Across",
    highlight: "South India",
    description:
      "From Chennai to Bengaluru, Hosur to Madurai — our construction teams deliver Grade-A facilities across every major industrial corridor in the region.",
  },
  corridors: [
    {
      city: "Chennai",
      role: "Primary Hub",
      nodes: ["Redhills", "Ennathur", "Oragadam", "Sriperumbudur"],
      sector: "Logistics · Auto · BTS",
      img: "/images/warehouse/chennai.jpg",
    },
    {
      city: "Bengaluru-Hosur",
      role: "Growth Corridor",
      nodes: ["Hosur", "Devanahalli", "Shoolagiri"],
      sector: "Manufacturing · E-Commerce",
      img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=85",
    },
    {
      city: "Multi-Corridor",
      role: "Expanding",
      nodes: ["Madurai", "Pondicherry", "Coimbatore"],
      sector: "FMCG · Agri-Logistics",
      img:"https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=85",
    },
  ],
  quote: {
    text: "The speed and quality of construction delivered by Warehouster were unprecedented. They built a 1.2M sq. ft. facility in 11 months — a full month ahead of our most aggressive timeline.",
    author: "Head of Supply Chain, Global FMCG Conglomerate",
  },
  insightsSection: {
    eyebrow: "Construction Insights",
    title: "Engineering",
    highlight: "Intelligence",
  },
  insights: [
    {
      tag: "PEB Technology",
      title: "How pre-engineered buildings cut warehouse delivery timelines by 40%",
      date: "June 2026",
      img: "/images/warehouse/warehouse-inside (4).png",
    },
    {
      tag: "Flooring Standards",
      title: "FM2 flatness requirements for high-density automated racking systems",
      date: "May 2026",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&auto=format&fit=crop&q=80",
    },
    {
      tag: "Sustainability",
      title: "Green warehouse construction: ROI analysis for South India logistics assets",
      date: "April 2026",
      img: "/images/warehouse/warehouse-inside (6).png",
    },
  ],
  valueProp: {
    eyebrow: "Construction Guarantee",
    title: "Faster Delivery. Superior Quality.",
    mainImage:
      "/images/warehouse/warehouse (6).jpg",
    accentImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&auto=format&fit=crop&q=80",
    mainImageAlt: "Completed Grade-A warehouse facility",
    offers: [
      "Pre-engineered building systems for 40% faster delivery vs conventional",
      "FM2 laser-screed flooring with zero rework guarantee",
      "40ft clear heights with institutional-grade structural specifications",
      "NFPA-compliant fire protection and smart safety systems",
      "Sustainable construction with rainwater harvesting and LED as standard",
    ],
    cta: {
      eyebrow: "Build With Us",
      title: "Request A Construction Consultation",
      description:
        "Share your facility requirements and receive a preliminary design concept and timeline estimate within 7 business days.",
      buttonLabel: "Start Building",
      href: "/contact",
    },
  },
  caseStudy: {
    title: "Multi-Specialty Grade-A Hub",
    summary:
      "Constructed a 1.2M sq. ft. Grade-A distribution center in Bengaluru in a record 11 months, setting a new regional benchmark for speed and structural quality.",
    client: "Global FMCG Conglomerate",
    location: "Bengaluru, India",
    industry: "FMCG",
    serviceUsed: "Warehouse Construction",
    duration: "11 Months",
    status: "Completed",
    image:
      "/images/warehouse/ware-house (2).jpg",
    challenge: [
      "Constructing a massive 1.2M sq. ft. facility within an extremely compressed timeline of 12 months.",
      "Ensuring FM2 specialized flooring for high-density racking systems across the entire floorplate.",
      "Navigating unseasonal heavy monsoons during the peak construction phase.",
    ],
    solution: [
      "Deployed Pre-Engineered Building (PEB) structural components fabricated off-site for rapid assembly.",
      "Utilized advanced laser screed technology to achieve perfectly flat FM2 flooring in record time.",
      "Implemented a 24/7 dual-shift construction schedule to recover days lost to weather.",
    ],
    execution: [
      "Completed foundation work and column erection simultaneously across different zones.",
      "Installed energy-efficient roofing and climate-adaptive insulation to meet FMCG storage standards.",
      "Integrated state-of-the-art NFPA fire protection and smart safety systems.",
    ],
    results: [
      "Delivered the entire 1.2M sq. ft. facility fully commissioned in just 11 months.",
      "Achieved FM2 flooring standards with zero rework required.",
    ],
    businessImpact:
      "The early delivery allowed the client to consolidate 4 regional warehouses into this central hub ahead of their peak festive season, resulting in a 30% increase in operational throughput.",
    highlights: {
      size: "1.2M Sq. Ft.",
      timeline: "11 Months",
      budget: "$75M+",
      team: "450+ Workers & Engineers",
      deliverables: "Grade-A Hub, FM2 Flooring",
      metrics: "1 Month Early Delivery",
    },
    outcomes: [
      "30% increase in client's operational throughput",
      "Zero structural defects during final handover",
      "100% compliance with international safety standards",
      "Optimized construction waste management",
    ],
    testimonial: {
      quote:
        "The speed and quality of construction delivered by Warehouster were unprecedented. They didn't just build a warehouse; they built a strategic asset that has fundamentally transformed our supply chain capabilities.",
      author: "Head of Supply Chain, Global FMCG",
    },
    prevCaseStudyLink: "/services/development-management",
    nextCaseStudyLink: "/services/industrial-consulting",
    relatedServicesLink: "/services",
  },
};

export default warehouseConstructionContent;
