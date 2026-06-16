import { ServicePageContent } from "../ServicePageTemplate";

const industrialConsultingContent: ServicePageContent = {
  hero: {
    badge: "Strategic Intelligence",
    title: "The Proprietary",
    titleAccent: "South India Origination Layer",
    description:
      "Warehouster originates, packages, and structures industrial real estate exclusively for institutional capital deploying into South India — deal flow unavailable through the Big 4 or local brokers, with the diligence your IC expects.",
    primaryCta: { label: "Request Deal Flow Access", href: "/contact" },
    secondaryCta: { label: "View Track Record", href: "/projects" },
    mainImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=85",
    accentImage1:
      "https://images.unsplash.com/photo-1454165833767-027ff33027b6?w=400&auto=format&fit=crop&q=80",
    accentImage2:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80",
    mainImageAlt: "Industrial warehouse aerial view",
  },
  stats: [
    { n: 42, suffix: "+", label: "Off-market deals originated" },
    { n: 3, suffix: "", label: "South India corridors" },
    { n: 8, suffix: "+", label: "Years of corridor expertise" },
  ],
  trustItems: [
    "IC-Grade Diligence",
    "Off-Market Only",
    "Founder-Led",
    "No Broker Chain",
    "NDA-First Engagement",
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1590684153400-e3e7a935b0e1?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80",
  ],
  pillarsSection: {
    eyebrow: "Your Operating Pillars",
    title: 'What "Institutional-Grade"',
    highlight: "Actually Means",
    description:
      "Every deal we originate passes through the same discipline a Big 4 advisory firm would apply — minus the conflict of interest. We act exclusively for institutional capital. We never represent the seller.",
  },
  pillars: [
    {
      tag: "01",
      title: "Off-Market Origination",
      body: "We do not bid on shopped assets. We source landowner-direct opportunities across South India before they reach any other desk.",
      img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=80",
    },
    {
      tag: "02",
      title: "Transaction Structuring",
      body: "Title diligence, encumbrance scrub, financial models, market context, and JV/BTS structuring delivered in IC-ready format.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    },
    {
      tag: "03",
      title: "Corridor Specialisation",
      body: "Chennai, Bengaluru, and Hyderabad — Tier 2 and Tier 3 nodes the Big 4 cannot systematically cover.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    },
    {
      tag: "04",
      title: "Structuring Sophistication",
      body: "Sale, JV, BTS, sale-leaseback. We co-design the structure that fits your fund's mandate, hurdle, and hold period.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    },
  ],
  archetypesSection: {
    eyebrow: "Segment Fit",
    title: "We Serve Four Institutional",
    highlight: "Archetypes",
  },
  archetypes: [
    {
      type: "PE Funds",
      tag: "Private Equity",
      desc: "Deployment-ready originated deal flow with institutional diligence. IC-ready packages from first delivery.",
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
    },
    {
      type: "REITs",
      tag: "Real Estate Investment Trusts",
      desc: "Stabilised and to-be-stabilised industrial assets, BTS pipeline, sale-leaseback structures ready for portfolio entry.",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&auto=format&fit=crop&q=80",
    },
    {
      type: "Family Offices",
      tag: "Ultra-High Net Worth",
      desc: "Discrete, off-market industrial allocations with corridor-level intelligence and direct landowner access.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80",
    },
    {
      type: "Developer-Promoters",
      tag: "Co-Development",
      desc: "JV co-development with landowner equity coordination and structuring lead from origination to close.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80",
    },
  ],
  processSection: {
    eyebrow: "The Playbook",
    title: "NDA, Mandate,",
    highlight: "Deal Flow",
    description:
      "Engagements begin with a confidential briefing and a corridor-specific deal flow walkthrough.",
  },
  steps: [
    {
      n: "01",
      title: "Confidential Briefing",
      body: "60-minute private call. We map your mandate, corridor preferences, ticket size, and hold period.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=960&auto=format&fit=crop&q=85",
    },
    {
      n: "02",
      title: "Mutual NDA + Mandate Scope",
      body: "Structured engagement letter covering exclusivity windows, success fees, and reporting cadence.",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=960&auto=format&fit=crop&q=85",
    },
    {
      n: "03",
      title: "Originated Deal Flow",
      body: "Curated, IC-ready opportunities delivered with full packaging — no noise, no shopped assets.",
      img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=960&auto=format&fit=crop&q=85",
    },
    {
      n: "04",
      title: "Structuring + Close",
      body: "We sit on the same side of the table through diligence, negotiation, and close.",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=960&auto=format&fit=crop&q=85",
    },
  ],
  corridorsSection: {
    eyebrow: "Coverage Map",
    title: "Three Corridors.",
    highlight: "One Origination Layer",
    description:
      "We originate exclusively across South India's three high-velocity industrial corridors — covering nodes that national platforms overlook.",
  },
  corridors: [
    {
      city: "Chennai",
      role: "Primary Corridor",
      nodes: ["Oragadam", "Sriperumbudur", "SIPCOT Irungattukottai"],
      sector: "Logistics · Auto-ancillary",
      img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=85",
    },
    {
      city: "Bengaluru",
      role: "Growth Corridor",
      nodes: ["Devanahalli", "Dobbaspet", "Hoskote"],
      sector: "Data Centres · Manufacturing",
      img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=85",
    },
    {
      city: "Hyderabad",
      role: "Emerging Corridor",
      nodes: ["Zaheerabad", "Patancheru", "IDA Pashamylaram"],
      sector: "Pharma · EV Supply Chain",
      img: "https://images.unsplash.com/photo-1589474564855-6a4c99b0ecb2?w=900&auto=format&fit=crop&q=85",
    },
  ],
  quote: {
    text: "The difference between Warehouster and a broker is the difference between a deal partner and a deal finder. They originated assets we hadn't underwritten, packaged the diligence, and sat beside us through close.",
    author: "Managing Director, Infrastructure PE Fund — Bengaluru",
  },
  insightsSection: {
    eyebrow: "Intelligence",
    title: "Corridor-Specific",
    highlight: "Market Intelligence",
  },
  insights: [
    {
      tag: "Market Intelligence",
      title: "Oragadam corridor: Q1 2026 land price index and demand drivers",
      date: "June 2026",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&auto=format&fit=crop&q=80",
    },
    {
      tag: "Structuring",
      title: "When BTS outperforms direct acquisition for PE fund deployment",
      date: "May 2026",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&auto=format&fit=crop&q=80",
    },
    {
      tag: "Deal Commentary",
      title: "Sale-leaseback mechanics for industrial REIT entry in South India",
      date: "April 2026",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&auto=format&fit=crop&q=80",
    },
  ],
  valueProp: {
    eyebrow: "What You Get",
    title: "An Originator On Your Side Of The Table",
    mainImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80",
    accentImage:
      "https://images.unsplash.com/photo-1507537243555-d41982b6c694?w=400&auto=format&fit=crop&q=80",
    mainImageAlt: "Team strategy session",
    offers: [
      "Off-market industrial land across Chennai, Bengaluru, and Hyderabad corridors",
      "IC-ready financial models, market context, and structuring options",
      "Title, encumbrance, zoning, and approvals diligence packaged for review",
      "JV, BTS, and sale-leaseback structuring with landowner equity coordination",
      "Quarterly corridor intelligence briefings exclusive to active mandates",
    ],
    cta: {
      eyebrow: "Begin Engagement",
      title: "Request A Private Briefing",
      description:
        "Founder-led conversation. NDA available on request. No mailing list, no marketing follow-up — institutional cadence only.",
      buttonLabel: "Begin",
      href: "/contact",
    },
  },
  caseStudy: {
    title: "National Supply Chain Overhaul",
    summary:
      "Advised a leading e-commerce giant on a nationwide logistics network redesign, optimizing 15 distribution centers and reducing last-mile delivery costs by 18%.",
    client: "Leading E-Commerce Retailer",
    location: "Pan-India",
    industry: "E-Commerce",
    serviceUsed: "Industrial Consulting",
    duration: "6 Months",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1582213706001-c918c0e29202?auto=format&fit=crop&q=80&w=1920",
    challenge: [
      "Inefficient routing and warehouse placements leading to bloated last-mile costs.",
      "A lack of data visibility across the existing 15 scattered distribution hubs.",
      "Need to scale fulfillment operations rapidly without proportional capital expenditure.",
    ],
    solution: [
      "Conducted a comprehensive gravity-model analysis to determine optimal hub locations.",
      "Recommended the consolidation of 4 underperforming nodes into 2 mega-hubs.",
      "Introduced a predictive inventory placement strategy based on regional demand mapping.",
    ],
    execution: [
      "Performed intensive on-ground audits of all 15 existing facilities.",
      "Delivered a staggered transition plan to prevent any disruption to current operations.",
      "Liaised with third-party logistics (3PL) partners to renegotiate transport contracts based on the new network geometry.",
    ],
    results: [
      "Successfully overhauled the entire network blueprint within the 6-month consulting timeframe.",
      "Identified immediate operational inefficiencies yielding a first-year ROI of 300% on consulting fees.",
    ],
    businessImpact:
      "The optimized network geometry drastically reduced transit times and slashed last-mile delivery costs by 18%, allowing the client to offer next-day delivery to 40% more pin codes nationwide.",
    highlights: {
      size: "15 Distribution Hubs",
      timeline: "6 Months",
      budget: "N/A (Consulting)",
      team: "8 Strategy Consultants",
      deliverables: "Network Blueprint, Transition Plan",
      metrics: "18% Cost Reduction",
    },
    outcomes: [
      "18% reduction in last-mile logistics costs",
      "Expanded next-day delivery coverage by 40%",
      "Eliminated redundant storage overheads",
      "Streamlined 3PL vendor contracts",
    ],
    testimonial: {
      quote:
        "Warehouster's consulting team brought a level of analytical rigor that completely transformed our perspective on our network. The cost savings were immediate, and our delivery speed has never been better.",
      author: "Chief Operating Officer, E-Commerce Retailer",
    },
    prevCaseStudyLink: "/services/warehouse-construction",
    nextCaseStudyLink: "/services/land-acquisition",
    relatedServicesLink: "/services",
  },
};

export default industrialConsultingContent;
