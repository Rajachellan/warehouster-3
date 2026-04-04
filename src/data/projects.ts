import { StaticImageData } from "next/image";

// Import existing assets if they exist, or use placeholders/Unsplash
// For now, I'll use strings for images if they are URLs, and type them accordingly.
import chengalpattu from "../assets/parks/kiliyanur-park-img.webp"
import pondichery from "../assets/parks/devanhalli-park.webp"
export interface ProjectMetric {
    label: string;
    value: string;
}

export interface ProjectTimelineItem {
    year: string;
    event: string;
}

export interface ExecutionStep {
    title: string;
    description: string;
    icon?: string; // Add icon name for mapping
}

export interface ExtraDetails {
    challenges: string[];
    solutions: string[];
    technicalSpecs: { label: string; value: string }[];
}

export interface ProjectContent {
    slug: string;
    title: string;
    location: string;
    category: "Completed" | "In Progress" | "Pipeline";
    status: string;
    heroLabel: string;
    subtext: string;
    scale: string;
    client: string;
    type: string;
    image: string | StaticImageData;
    metrics: ProjectMetric[];
    overview: string;
    story: {
        opportunity: StorySection;
        challenge: StorySection;
        strategy: StorySection;
        execution: StorySection;
        outcome: StorySection;
    };
    workflow: ExecutionStep[];
    outcomes: string[];
    stats: ProjectStat[];
    gallery: string[];
    timeline?: ProjectTimelineItem[];
    highlights?: string[];
    // Case Study Specific Fields
    badge: string;
    accentTag: string;
    partnerLabel: string;
    extraDetails?: ExtraDetails;
}

export const projects: ProjectContent[] = [
    {
        slug: "redhills-development",
        title: "Redhills Logistics Park",
        location: "Chennai North",
        category: "Completed",
        status: "Sold / Exited",
        heroLabel: "Successful Institutional Exit",
        subtext: "A 500,000 sq.ft Grade-A logistics landmark serving global supply chains.",
        scale: "25 Acres / 5L sq.ft",
        client: "Blackstone",
        type: "Full Cycle Exit",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        badge: "Successful Institutional Exit",
        accentTag: "Industrial",
        partnerLabel: "Transferred To Institutional Partner",
        metrics: [
            { label: "Scale", value: "25 Acres" },
            { label: "Area", value: "500,000 Sq.Ft" },
            { label: "Exit Partner", value: "Blackstone" }
        ],
        overview: "Redhills Logistics Park is a flagship project representing a full-cycle real estate investment and development success. Strategically located in North Chennai, it serves as a critical hub for regional distribution.",
        story: {
            opportunity: {
                title: "The Opportunity",
                content: "Identifying a gap in Grade-A warehousing supply in North Chennai, we targeted Redhills as a strategic entry point for institutional-grade logistics infrastructure."
            },
            challenge: {
                title: "The Challenge",
                content: "Navigating complex land titles and securing multi-departmental approvals while maintaining a strict development timeline for anchor tenants."
            },
            strategy: {
                title: "The Strategy",
                content: "A focused land aggregation approach followed by a rapid-build strategy using pre-engineered structures to minimize time-to-market."
            },
            execution: {
                title: "The Execution",
                content: "Deployment of Grade-A specifications, including clear heights of 12m, heavy-duty flooring, and advanced fire fighting systems."
            },
            outcome: {
                title: "The Outcome",
                content: "100% occupancy achieved within 6 months of completion, leading to a prestigious exit to Blackstone (Horizon Industrial Parks)."
            }
        },
        workflow: [
            { title: "Land Identification", description: "Off-market sourcing; yield catchment & utility checks.", icon: "Search" },
            { title: "Title Clean-up", description: "Diligence, clearance & legal structuring.", icon: "FileText" },
            { title: "SPV Creation", description: "Asset structured in SPV & transferred to Blackstone.", icon: "Building2" },
            { title: "Approvals", description: "DTCP layout approval, environmental clearance & NOCs.", icon: "ShieldCheck" },
            { title: "Dev. Management", description: "Master planning, vendor strategy & construction.", icon: "HardHat" },
            { title: "Completion", description: "Delivered 500k sq.ft on time & on budget.", icon: "Flag" }
        ],
        outcomes: ["Seamless Approvals & Compliance", "Successful Partnership Model", "On-Time Grade-A Delivery"],
        stats: [
            { label: "Acres", value: 25, suffix: "" },
            { label: "Sq.Ft", value: 500000, suffix: "+" },
            { label: "Exit Multiplier", value: 2.8, suffix: "x" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590684153400-e3e7a935b0e1?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
        ],
        timeline: [
            { year: "2018", event: "Land Acquisition Initiation" },
            { year: "2019", event: "Approvals & Master Planning" },
            { year: "2020", event: "Phase 1 Construction Completed" },
            { year: "2022", event: "Full Occupancy & Management" },
            { year: "2023", event: "Institutional Exit to Blackstone" }
        ],
        highlights: ["Institutional Grade Asset", "100% Occupancy at Exit", "Strategic North Chennai Location"],
        extraDetails: {
            challenges: ["Complex multi-parcel land aggregation spanning three distinct village jurisdictions.", "Requirement for high-voltage power sub-station within a restricted environmental zone."],
            solutions: ["Direct direct dialogue with local panchayats to resolve longstanding title encumbrances.", "Implementation of a 100% rainwater harvesting system to offset groundwater extraction limits."],
            technicalSpecs: [
                { label: "Clear Height", value: "12 Meters" },
                { label: "Floor Load", value: "6 Tons/sq.ft" },
                { label: "Fire Safety", value: "NFPA-13 Compliant" }
            ]
        }
    },
    {
        slug: "chengalpattu-development",
        title: "Chengalpattu Industrial Park",
        location: "Chennai South / GST Road",
        category: "In Progress",
        status: "Under Development",
        heroLabel: "Institutional Partnership",
        badge: "Industrial Logistics Hub",
        accentTag: "Logistics",
        partnerLabel: "Anchor Tenant",
        subtext: "A 1.4 million sq.ft industrial powerhouse in South Chennai's manufacturing heart.",
        scale: "54 Acres / 1.4 Mn sq.ft",
        client: "Horizon Industrial Parks",
        type: "Institutional JV",
        image: chengalpattu,
        metrics: [
            { label: "Scale", value: "54 Acres" },
            { label: "Potential", value: "1.4M Sq.Ft" },
            { label: "Partner", value: "Horizon" }
        ],
        overview: "A massive industrial development on the high-growth GST road corridor, being developed in partnership with Horizon Industrial Parks (Blackstone platform).",
        story: {
            opportunity: {
                title: "The Opportunity",
                content: "Capitalizing on the expansion of the manufacturing corridor along South Chennai's GST Road and automotive clusters."
            },
            challenge: {
                title: "The Challenge",
                content: "Large-scale consolidation of 54 acres with diverse land use history and ensuring multi-modal accessibility."
            },
            strategy: {
                title: "The Strategy",
                content: "Joint Venture with a global asset manager to leverage shared expertise in development and leasing."
            },
            execution: {
                title: "The Execution",
                content: "Creation of a robust SPV model with high governance standards and environmental sustainability (IGBC Platinum goals)."
            },
            outcome: {
                title: "The Outcome",
                content: "Project is currently under development with significant interest from Fortune 500 manufacturing tenants."
            }
        },
        workflow: [
            { title: "Site Selection", description: "Proximity to NH-45 & Chennai port; logistics yield analysis.", icon: "MapPin" },
            { title: "Land Aggregation", description: "Multi-parcel acquisition & title consolidation.", icon: "Layers" },
            { title: "Infra Design", description: "Grade-A warehouse design with 12m clear height.", icon: "Ruler" },
            { title: "Regulatory Clearances", description: "SIPCOT approvals, fire NOC & environmental clearance.", icon: "ShieldCheck" },
            { title: "Pre-Leasing", description: "Anchor tenant secured before construction completion.", icon: "Users" },
            { title: "Handover", description: "Full fit-out & operational handover to tenant.", icon: "Flag" }
        ],
        outcomes: ["100% Pre-Leased at Completion", "14% IRR Delivered to Investors", "Zero Cost Overrun"],
        stats: [
            { label: "Acres", value: 54, suffix: "" },
            { label: "Capacity", value: 1.4, suffix: "M Sq.Ft" },
            { label: "JV Stake", value: 50, suffix: "%" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1590684153400-e3e7a935b0e1?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
        ],
        timeline: [
            { year: "2022", event: "JV Agreement Signed" },
            { year: "2023", event: "Land Consolidation & Design" },
            { year: "2024", event: "Infrastructure Commencement" }
        ],
        extraDetails: {
            challenges: ["Integration with NH-45 widening project requiring precision grading.", "Proximity to wetland requiring advanced drainage management."],
            solutions: ["Collaborative engineering with NHAI for seamless access ramps.", "Implementation of a localized STP and natural bio-swales for water management."],
            technicalSpecs: [
                { label: "Bay Spacing", value: "12m x 24m" },
                { label: "Road Width", value: "18m Internal" },
                { label: "Solar", value: "2MW Capacity" }
            ]
        }
    },
    {
        slug: "pondicherry-bts",
        title: "BTS Facility (Pondicherry)",
        location: "Pondicherry",
        category: "In Progress",
        status: "Under Construction",
        heroLabel: "Built-To-Suit Excellence",
        badge: "Coastal Distribution Centre",
        accentTag: "Coastal",
        partnerLabel: "Institutional Investor",
        subtext: "Precision-engineered facility for Britannia's regional production requirements.",
        scale: "72,000 sq.ft",
        client: "Britannia",
        type: "BTS Delivery",
        image: pondichery,
        metrics: [
            { label: "Scale", value: "72,000 Sq.Ft" },
            { label: "Client", value: "Britannia" },
            { label: "Model", value: "Built-to-Suit" }
        ],
        overview: "A customized Built-to-Suit (BTS) facility for Britannia, designed to meet specific cold chain and dry storage requirements for food processing logistics.",
        story: {
            opportunity: {
                title: "The Opportunity",
                content: "Supporting a major FMCG brand in optimizing their regional distribution and production output."
            },
            challenge: {
                title: "The Challenge",
                content: "Meeting exact technical specifications including FM2 flooring and specialized dock heights within a compact footprint."
            },
            strategy: {
                title: "The Strategy",
                content: "Custom design-build solution with focus on operational efficiency and speed of delivery."
            },
            execution: {
                title: "The Execution",
                content: "Integration of specialized MEP and laboratory requirements during the structural phase."
            },
            outcome: {
                title: "The Outcome",
                content: "Facility is nearing completion on track for Q3 2024 handover."
            }
        },
        workflow: [
            { title: "Port Proximity Study", description: "Last-mile mapping to Pondicherry & Karaikal ports.", icon: "Anchor" },
            { title: "UT Compliance", description: "Union Territory land regulations & SIPCOT interface.", icon: "ScrollText" },
            { title: "Multi-Client Design", description: "Flexible bays for pharma, FMCG & cold-chain tenants.", icon: "LayoutGrid" },
            { title: "Approvals", description: "CRZ compliance, fire NOC & pollution control board.", icon: "ShieldCheck" },
            { title: "Leasing", description: "Multi-tenant pre-leased with 3 blue-chip occupiers.", icon: "Users" },
            { title: "Asset Handover", description: "Transferred to ESR Group with full occupancy at exit.", icon: "Flag" }
        ],
        outcomes: ["Full Occupancy at Exit", "CRZ & Multi-Reg Compliance", "₹420 Cr Asset Value Created"],
        stats: [
            { label: "Built Area", value: 72000, suffix: " Sq.Ft" },
            { label: "Docks", value: 12, suffix: "" },
            { label: "Delivery", value: 100, suffix: "%" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
        ],
        extraDetails: {
            challenges: ["Strict CRZ (Coastal Regulation Zone) norms limiting build height.", "Soil salinity issues requiring specialized concrete mixes."],
            solutions: ["Optimized horizontal layout with increased dock efficiency.", "Use of sulphate-resistant cement and cathodic protection for steel."],
            technicalSpecs: [
                { label: "Flooring", value: "FM2 Compliant" },
                { label: "Clearance", value: "9m Hub" },
                { label: "Loading", value: "Hydraulic Docks" }
            ]
        }
    },
    {
        slug: "jaisalmer-bts",
        title: "BTS Facility (Jaisalmer)",
        location: "Jaisalmer",
        category: "Pipeline",
        status: "₹84L/month revenue",
        heroLabel: "Renewable Energy Corridor",
        badge: "Renewable Energy Logistics",
        accentTag: "Renewable",
        partnerLabel: "Strategic Partner",
        subtext: "A mission-critical storage hub for Suzlon's wind energy components.",
        scale: "4.16L sq.ft",
        client: "Suzlon",
        type: "BTS Delivery",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200",
        metrics: [
            { label: "Scale", value: "4.16L Sq.Ft" },
            { label: "Revenue", value: "₹84L / Mo" },
            { label: "Tenant", value: "Suzlon" }
        ],
        overview: "A high-yielding industrial asset serving the renewable energy sector, specifically optimized for wind turbine component logistics and storage.",
        story: {
            opportunity: {
                title: "The Opportunity",
                content: "Alignment with India's renewable energy goals by providing infrastructure for wind energy assembly."
            },
            challenge: {
                title: "The Challenge",
                content: "Designing for oversized heavy components (blade storage) in a desert environment."
            },
            strategy: {
                title: "The Strategy",
                content: "Customized bay spacing and high-capacity floor pads for heavy assembly."
            },
            execution: {
                title: "The Execution",
                content: "Robust infrastructure with long-term lease lock-ins (15 years)."
            },
            outcome: {
                title: "The Outcome",
                content: "Consistent monthly revenue of ₹84L with significant yield appreciation."
            }
        },
        workflow: [
            { title: "Feasibility Study", description: "Solar irradiance mapping & renewable supply chain audit.", icon: "Sun" },
            { title: "Land Due Diligence", description: "Rajasthan land laws, tribal rights clearance & title.", icon: "FileSearch" },
            { title: "Specialised Design", description: "Wind load, dust mitigation & solar-ready roof design.", icon: "Ruler" },
            { title: "Approvals", description: "State industrial designation & MoEF clearance.", icon: "ShieldCheck" },
            { title: "Green Infra Build", description: "On-site solar, water recycling & EV charging dock.", icon: "Zap" },
            { title: "Commissioning", description: "Net-zero certified facility delivered ahead of schedule.", icon: "Flag" }
        ],
        outcomes: ["Stable Cash Flow", "Energy Alignment", "Yield Excellence"],
        stats: [
            { label: "Area", value: 4.16, suffix: "L Sq.Ft" },
            { label: "Revenue", value: 84, suffix: "L / Mo" },
            { label: "Lease", value: 15, suffix: " Years" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
        ],
        extraDetails: {
            challenges: ["High temperature variations causing thermal expansion in structures.", "Sandstorm protection for sensitive wind turbine assembly."],
            solutions: ["Implementation of expansion joints and insulated roofing panels.", "High-efficiency sand-trap louvers and sealed dock areas."],
            technicalSpecs: [
                { label: "Structure", value: "Pre-Engineered Steel" },
                { label: "Bay Width", value: "30m Clear" },
                { label: "Sustainability", value: "Net-Zero Goal" }
            ]
        }
    },
    {
        slug: "portfolio",
        title: "Pan-India Industrial Portfolio",
        location: "8 States · 12 Cities",
        category: "Pipeline",
        status: "Ongoing Portfolio",
        heroLabel: "Institutional Asset Management",
        badge: "Portfolio Consolidation",
        accentTag: "Portfolio",
        partnerLabel: "Capital Deployed",
        subtext: "A massive 2.5 million sq.ft industrial network across India's Tier-1 corridors.",
        scale: "220+ Acres / 2.5 Mn sq.ft",
        client: "₹2,000 CR+",
        type: "Portfolio Aggregation",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
        metrics: [
            { label: "Acres", value: "220+" },
            { label: "Built", value: "2.5 Mn Sq.Ft" },
            { label: "Capital", value: "₹2,000 Cr+" }
        ],
        overview: "A strategic pan-India portfolio comprising multiple industrial assets at various stages of the development cycle, optimized for long-term institutional returns.",
        story: {
            opportunity: {
                title: "The Opportunity",
                content: "Fragmented industrial market needing professional aggregation and Grade-A standardization."
            },
            challenge: {
                title: "The Challenge",
                content: "Managing multiple geographies with varying state-level compliance and regulatory frameworks."
            },
            strategy: {
                title: "The Strategy",
                content: "Standardized development playbooks and central procurement for cost efficiency."
            },
            execution: {
                title: "The Execution",
                content: "Active asset management and multi-tenant leasing strategies across diverse industry sectors."
            },
            outcome: {
                title: "The Outcome",
                content: "Successful exits of multiple sub-portfolios to global institutional funds like Blackstone and ESR."
            }
        },
        workflow: [
            { title: "Origination", description: "Off-market deal sourcing across Tier 1 & 2 corridors.", icon: "Binoculars" },
            { title: "Capital Raise", description: "HNIs, family offices & institutional co-investment.", icon: "Briefcase" },
            { title: "Legal Structuring", description: "SPV, JV & REIT-compatible structure for each asset.", icon: "Scale" },
            { title: "EPC Management", description: "In-house project management ensuring quality delivery.", icon: "HardHat" },
            { title: "Asset Management", description: "Active leasing, rent escalation & tenant retention.", icon: "TrendingUp" },
            { title: "Institutional Exit", description: "Structured exits to Blackstone, ESR, GLP & others.", icon: "Trophy" }
        ],
        outcomes: ["50+ Yrs Combined Experience", "12 Mn Sq.Ft Delivered", "Multiple Institutional Exits"],
        stats: [
            { label: "States", value: 8, suffix: "" },
            { label: "Cities", value: 12, suffix: "" },
            { label: "Area", value: 12, suffix: " Mn Sq.Ft" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
        ],
        extraDetails: {
            challenges: ["Diverse geographical regulations.", "Maintaining consistent Grade-A standards across all assets."],
            solutions: ["In-house legal and compliance team for per-state oversight.", "Centralized design and engineering audits."],
            technicalSpecs: [
                { label: "Standard", value: "Grade-A Assets" },
                { label: "Lease Type", value: "Triple Net (NNN)" },
                { label: "Occupancy", value: "95% Portfolio" }
            ]
        }
    }
];

