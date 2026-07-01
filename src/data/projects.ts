import { StaticImageData } from "next/image";
import chengalpattu from "../assets/parks/kiliyanur-park-img.webp"
import pondichery from "../assets/parks/devanhalli-park.webp"

export interface ProjectMetric {
    label: string;
    value: string;
}

export interface ProjectStat {
    label: string;
    value: number;
    suffix: string;
}

export interface StorySection {
    title: string;
    content: string;
}

export interface ProjectTimelineItem {
    year: string;
    event: string;
}

export interface ExecutionStep {
    title: string;
    description: string;
    icon?: string;
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
    detailedOverview?: string;
    locationAdvantages?: string[];
    connectivity?: { label: string; detail: string }[];
    developmentDetails?: { label: string; detail: string }[];
    businessBenefits?: string[];
    futureGrowth?: string;
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
    badge: string;
    accentTag: string;
    partnerLabel: string;
    extraDetails?: ExtraDetails;
}

export const projects: ProjectContent[] = [
    {
        slug: "redhills-development",
        title: "Redhills Development",
        location: "Chennai North",
        category: "Completed",
        status: "Sold / Exited",
        heroLabel: "Successful Institutional Exit",
        subtext: "A 500,000 sq.ft Grade-A logistics landmark serving global supply chains.",
        scale: "25 Acres / 5L sq.ft",
        client: "Blackstone",
        type: "Full Cycle Exit",
        image: "/images/warehouse/warehouster-land (7).jpg",
        badge: "Institutional Landmark",
        accentTag: "Logistics",
        partnerLabel: "Exit Partner: Blackstone",
        metrics: [
            { label: "Land Area", value: "25 Acres" },
            { label: "Connectivity", value: "NH-5 (GNT Road)" },
            { label: "Status", value: "100% Completed" }
        ],
        overview: "Redhills Logistics Park is a flagship project representing a full-cycle real estate investment and development success. Strategically located in North Chennai.",
        detailedOverview: "Redhills Logistics Park stands as a testament to Warehouster's ability to identify high-potential corridors and transform them into institutional-grade assets. Spanning 25 acres, this facility was engineered to meet the stringent demands of global 3PL and e-commerce giants. The project involved complex land aggregation across multiple jurisdictions, followed by a rapid-build execution that delivered 500,000 sq.ft of premium warehousing space. Upon reaching 100% occupancy with blue-chip tenants, the asset was successfully exited to Blackstone (Horizon Industrial Parks), marking one of the most significant full-cycle transactions in the region's industrial real estate history.",
        locationAdvantages: [
            "Situated at the heart of the North Chennai logistics cluster.",
            "Immediate access to the Grand Northern Trunk (GNT) Road.",
            "Proximity to major manufacturing hubs in Ennore and Minjur.",
            "Established ecosystem with a ready pool of skilled and semi-skilled industrial labor.",
            "Non-flooding zone with robust natural drainage characteristics."
        ],
        connectivity: [
            { label: "Roadways", detail: "Directly on NH-5 (Chennai-Kolkata Highway), providing seamless pan-India connectivity." },
            { label: "Sea Ports", detail: "Located within 25km of Chennai Port and 20km of Kamarajar Port (Ennore)." },
            { label: "Airports", detail: "45-minute drive to Chennai International Airport via the Outer Ring Road." },
            { label: "Railways", detail: "Close proximity to the Minjur and Ponneri rail sidings for multi-modal logistics." }
        ],
        developmentDetails: [
            { label: "Structure", detail: "Pre-Engineered Building (PEB) with a clear height of 12 meters." },
            { label: "Flooring", detail: "Laser-screed FM2 compliant flooring with a 6-ton per sq.ft load capacity." },
            { label: "Fire Safety", detail: "Fully automated sprinkler system compliant with NFPA-13 standards." },
            { label: "Power", detail: "Dedicated HT substation with 100% backup for common area services." }
        ],
        businessBenefits: [
            "Optimized time-to-market for tenants through pre-cleared statutory approvals.",
            "Reduced operational costs due to efficient building design and insulation.",
            "Institutional governance ensuring high standards of safety and maintenance.",
            "Scalability options for tenants within the integrated logistics park ecosystem."
        ],
        futureGrowth: "The Redhills corridor continues to see massive infrastructure investment, including the expansion of the Chennai Peripheral Ring Road (CPRR). This development is poised to further enhance connectivity between the industrial hubs of North and South Chennai, ensuring that assets in this region remain at the forefront of the logistics demand curve for the next decade.",
        story: {
            opportunity: { title: "The Opportunity", content: "Identifying a gap in Grade-A warehousing supply in North Chennai." },
            challenge: { title: "The Challenge", content: "Navigating complex land titles and securing approvals." },
            strategy: { title: "The Strategy", content: "Focused land aggregation and rapid-build strategy." },
            execution: { title: "The Execution", content: "Deployment of Grade-A specifications including 12m clear heights." },
            outcome: { title: "The Outcome", content: "100% occupancy leading to a prestigious exit to Blackstone." }
        },
        workflow: [
            { title: "Sourcing", description: "Off-market identification of the 25-acre contiguous land parcel.", icon: "Search" },
            { title: "Consolidation", description: "Legal title cleanup across 14 distinct survey numbers.", icon: "FileText" },
            { title: "Statutory", description: "Securing DTCP and Environmental clearances in record time.", icon: "ShieldCheck" },
            { title: "EPC Management", description: "Direct oversight of pre-engineered structure deployment.", icon: "HardHat" },
            { title: "Asset Transfer", description: "Institutional transfer of the SPV to the Blackstone platform.", icon: "Building2" },
            { title: "Delivery", description: "On-time handover of 500,000 sq.ft Grade-A facility.", icon: "Flag" }
        ],
        outcomes: ["Institutional Grade Exit", "100% Pre-leased Occupancy", "Zero Statutory Deviation"],
        stats: [
            { label: "Land Area", value: 25, suffix: " Ac" },
            { label: "Built Area", value: 500, suffix: "K" },
            { label: "Exit Value", value: 100, suffix: "%" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590684153400-e3e7a935b0e1?auto=format&fit=crop&q=80&w=800"
        ],
        extraDetails: {
            challenges: [
                "Fragmented land holdings required meticulous negotiation with multiple stakeholders.",
                "Tight construction timelines driven by anchor tenant deployment schedules.",
                "Ensuring international ESG standards for potential institutional exit."
            ],
            solutions: [
                "Established a dedicated land-liaison desk to speed up title consolidation.",
                "Pre-ordering PEB components to hedge against global supply chain delays.",
                "Implementation of LEED-standard infrastructure from day one."
            ],
            technicalSpecs: [
                { label: "Clear Height", value: "12 Meters" },
                { label: "Floor Load", value: "6 Tons/sq.ft" },
                { label: "Dock Ratio", value: "1:7,000 Sq.Ft" }
            ]
        }
    },
    {
        slug: "chengalpattu-industrial",
        title: "Chengalpattu Industrial Park",
        location: "GST Road, Chennai South",
        category: "Completed",
        status: "Completed",
        heroLabel: "Institutional Collaboration",
        subtext: "A 1.4 million sq.ft industrial powerhouse in South Chennai's manufacturing heart.",
        scale: "54 Acres",
        client: "Horizon Industrial Parks",
        type: "Industrial Park",
        image:"/images/warehouse/industrial-park.jpg",
        badge: "Manufacturing Hub",
        accentTag: "Industrial",
        partnerLabel: "Project Partner: Horizon",
        metrics: [
            { label: "Land Area", value: "54 Acres" },
            { label: "Connectivity", value: "GST Road / NH-45" },
            { label: "Status", value: "Completed" }
        ],
        overview: "A 54-acre South Chennai industrial park developed with institutional standards for large-scale manufacturing and assembly demand.",
        detailedOverview: "The Chengalpattu Industrial Park is a landmark 54-acre development situated on the high-growth GST Road corridor. Developed as a strategic partnership with Horizon Industrial Parks (a Blackstone platform), this facility addresses the critical need for large-scale manufacturing and assembly infrastructure in South Chennai.",
        locationAdvantages: [
            "Located on the NH-45 corridor, primary artery to Southern Tamil Nadu.",
            "Proximity to automotive clusters like Maraimalai Nagar and Oragadam.",
            "Access to the SIPCOT Industrial Parks at Mahindra World City."
        ],
        connectivity: [
            { label: "Highway", detail: "Direct access to GST Road (NH-45)." },
            { label: "Logistics", detail: "Adjacent to major container rail terminals." }
        ],
        developmentDetails: [
            { label: "Built Potential", detail: "1.4 Million sq.ft development potential." },
            { label: "ESG", detail: "Planned for IGBC Platinum/Gold certification." }
        ],
        businessBenefits: [
            "Ideal for high-throughput manufacturing with heavy floor loading.",
            "Statutory mastery ensures zero compliance risk."
        ],
        futureGrowth: "Evolution from a logistics node into a core manufacturing ecosystem with massive electronics demand.",
        story: {
            opportunity: { title: "The Opportunity", content: "Expanding manufacturing corridor." },
            challenge: { title: "The Challenge", content: "Title consolidation of 54 acres." },
            strategy: { title: "The Strategy", content: "JV with global asset manager." },
            execution: { title: "The Execution", content: "Institutional governance and IGBC Platinum goals." },
            outcome: { title: "The Outcome", content: "Successful development serving Fortune 500 tenants." }
        },
        workflow: [
            { title: "JV Formation", description: "Structured a 50:50 Joint Venture with Horizon.", icon: "Briefcase" },
            { title: "Title Mapping", description: "Consolidation of 54 acres across complex survey lines.", icon: "Layers" },
            { title: "Design", description: "Master planning for 1.4 Mn sq.ft of industrial space.", icon: "Ruler" },
            { title: "Statutory", description: "Obtained single-window clearances for industrial use.", icon: "ShieldCheck" },
            { title: "Pre-Lease", description: "Secured anchor tenants for the first development phase.", icon: "Users" },
            { title: "Execution", description: "Grade-A construction management of multi-client shells.", icon: "HardHat" }
        ],
        outcomes: ["1.4 Mn Sq.Ft Capacity", "Institutional JV Success", "Anchor Tenant Secured"],
        stats: [
            { label: "Land Area", value: 54, suffix: " Ac" },
            { label: "Potential", value: 1.4, suffix: "M" },
            { label: "IRR", value: 22, suffix: "%" }
        ],
        gallery: [],
        highlights: ["12m Clear Height", "Heavy Duty Floors", "IGBC Green Certified"],
        extraDetails: {
            challenges: [
                "Integrating diverse land uses into a unified industrial layout.",
                "Meeting stringent global health and safety (HSE) standards of the JV partner."
            ],
            solutions: [
                "Implementation of a centralized utility spine for multi-tenant efficiency.",
                "On-site dedicated safety training center for all construction vendors."
            ],
            technicalSpecs: [
                { label: "Structure", value: "Industrial PEB" },
                { label: "Load", value: "7 Tons/sq.ft" },
                { label: "Green", value: "Solar Ready" }
            ]
        }
    },
    {
        slug: "jaisalmer-bts",
        title: "Jaisalmer Facility",
        location: "Jaisalmer, Rajasthan",
        category: "Completed",
        status: "Operational",
        heroLabel: "Energy Sector Infrastructure",
        subtext: "Mission-critical storage hub for Suzlon's renewable energy operations.",
        scale: "4.16L sq.ft",
        client: "Suzlon",
        type: "Built-To-Suit",
        image: "/images/warehouse/warehouster-land (7).jpg",
        badge: "Energy Hub",
        accentTag: "Renewable",
        partnerLabel: "Client: Suzlon",
        metrics: [
            { label: "Built Area", value: "4.16L Sq.Ft" },
            { label: "Connectivity", value: "National Highway Hub" },
            { label: "Status", value: "Operational" }
        ],
        overview: "A mission-critical built-to-suit facility in Jaisalmer supporting Suzlon's renewable energy storage and logistics operations.",
        detailedOverview: "Specialized Built-to-Suit (BTS) development serving the renewable energy sector. Engineered to store and maintain heavy wind turbine components.",
        locationAdvantages: ["Wind energy corridor of Rajasthan", "Proximity to major wind farm sites"],
        connectivity: [{ label: "Highway", detail: "NH-15 Frontage" }],
        developmentDetails: [{ label: "Hardstand", detail: "Reinforced external yard for heavy blades." }],
        businessBenefits: ["15-year lease lock-in", "High-yield revenue of ₹84L/month"],
        futureGrowth: "Strategic positioning to capture the rapid expansion of India's green energy sector.",
        story: {
            opportunity: { title: "Opportunity", content: "Renewable energy infrastructure." },
            challenge: { title: "Challenge", content: "Desert environment logistics." },
            strategy: { title: "Strategy", content: "Specialized bay spacing." },
            execution: { title: "Execution", content: "Robust desert-grade construction." },
            outcome: { title: "Outcome", content: "Stabilized operational asset." }
        },
        workflow: [
            { title: "BTS Mandate", description: "Secured 15-year BTS mandate from Suzlon Energy.", icon: "FileText" },
            { title: "Climatic Design", description: "Structural design for desert thermal and wind loads.", icon: "Ruler" },
            { title: "Land Prep", description: "Stabilization of sandy terrain for heavy loads.", icon: "Layers" },
            { title: "Infrastructure", description: "Deployment of specialized heavy-duty external yards.", icon: "Zap" },
            { title: "Delivery", description: "Commissioning of 4.16 lakh sq.ft facility.", icon: "Flag" }
        ],
        outcomes: ["₹84L Monthly Revenue", "15-Year Lease Lock-in", "Zero Climate Downtime"],
        stats: [
            { label: "Built Area", value: 416, suffix: "K" },
            { label: "Revenue", value: 84, suffix: "L/M" },
            { label: "Lock-in", value: 15, suffix: "Y" }
        ],
        gallery: [],
        highlights: ["Heavy Component Storage", "15-Year Lease", "Desert-Grade Build"],
        extraDetails: {
            challenges: ["Extreme desert heat affecting material durability.", "Logistics of moving massive wind turbine blades into the site."],
            solutions: ["Use of high-albedo roofing and specialized thermal expansion joints.", "Customized internal road radii designed for 60m blade transport."],
            technicalSpecs: [
                { label: "Built Area", value: "4.16 Lakh Sq.Ft" },
                { label: "Lease Lock-in", value: "15 Years" },
                { label: "Monthly Revenue", value: "84 Lakhs" }
            ]
        }
    },
    {
        slug: "pondicherry-bts",
        title: "Pondicherry Facility",
        location: "Pondicherry",
        category: "In Progress",
        status: "Construction",
        heroLabel: "FMCG Distribution Excellence",
        subtext: "Precision-engineered facility for Britannia's regional production.",
        scale: "72,000 sq.ft",
        client: "Britannia",
        type: "Built-To-Suit",
        image: pondichery,
        badge: "FMCG Hub",
        accentTag: "Food & Bev",
        partnerLabel: "Client: Britannia",
        metrics: [
            { label: "Built Area", value: "72,000 Sq.Ft" },
            { label: "Connectivity", value: "Last-mile Coastal Hub" },
            { label: "Status", value: "Under Construction" }
        ],
        overview: "A high-spec Pondicherry BTS distribution center designed for Britannia's fast-moving and perishable FMCG supply chain.",
        detailedOverview: "A high-spec BTS distribution center for Britannia, optimized for perishable and high-turnover food products.",
        locationAdvantages: ["Last-mile serving Pondicherry", "Proximity to production clusters"],
        connectivity: [{ label: "ECR Link", detail: "Near the East Coast Road." }],
        developmentDetails: [{ label: "Cold Ready", detail: "Insulated panels for cold-room integration." }],
        businessBenefits: ["Reduced tenant CapEx", "Efficient urban distribution"],
        futureGrowth: "Infrastructure upgrades on ECR making it a secondary logistics hub.",
        story: {
            opportunity: { title: "Opportunity", content: "FMCG supply chain optimization." },
            challenge: { title: "Challenge", content: "Coastal regulation compliance." },
            strategy: { title: "Strategy", content: "Custom design-build." },
            execution: { title: "Execution", content: "Specialized MEP integration." },
            outcome: { title: "Outcome", content: "On track for Q3 2024 handover." }
        },
        workflow: [
            { title: "Needs Audit", description: "Detailed mapping of Britannia's logistics flow.", icon: "Binoculars" },
            { title: "Compliance", description: "Navigating CRZ (Coastal Regulation Zone) norms.", icon: "ScrollText" },
            { title: "Design", description: "Optimized 1.2m plinth height for FMCG docks.", icon: "LayoutGrid" },
            { title: "Civil Works", description: "Anti-corrosive structural deployment.", icon: "HardHat" },
            { title: "MEP Setup", description: "Food-grade HVAC and ventilation integration.", icon: "Zap" },
            { title: "Final Fit-out", description: "Handover for Q3 2024 operations.", icon: "Flag" }
        ],
        outcomes: ["Last-Mile Hub", "Coastal Engineering", "Tenant-Ready Q3"],
        stats: [
            { label: "Area", value: 72, suffix: "K" },
            { label: "Docks", value: 12, suffix: "" },
            { label: "Completion", value: 85, suffix: "%" }
        ],
        gallery: [],
        highlights: ["FM2 Flooring", "Cold-Chain Ready", "Rapid Deployment"],
        extraDetails: {
            challenges: ["High humidity and salinity affecting structural steel life.", "Tight urban plot requiring vertical optimization."],
            solutions: ["Application of marine-grade zinc coatings to all exposed steel.", "Implementation of a multi-level mezzanine for high-density storage."],
            technicalSpecs: [
                { label: "Built Area", value: "72,000 Sq.Ft" },
                { label: "Stage", value: "Under Construction" },
                { label: "Specification", value: "Cold-chain Ready Shell" }
            ]
        }
    },
    {
        slug: "hosur-logistics-hub",
        title: "Hosur Logistics Hub (65 acres)",
        location: "Hosur, Tamil Nadu",
        category: "In Progress",
        status: "Development",
        heroLabel: "Industrial Corridor Landmark",
        subtext: "Large-scale park serving the automotive and electronics manufacturing ecosystem.",
        scale: "65 Acres",
        client: "Multi-Tenant",
        type: "Industrial Park",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200",
        badge: "Auto Hub",
        accentTag: "Auto/Electronics",
        partnerLabel: "Institutional Project",
        metrics: [
            { label: "Land Area", value: "65 Acres" },
            { label: "Connectivity", value: "Bangalore-Hosur NH-44" },
            { label: "Status", value: "In Development" }
        ],
        overview: "A 65-acre Hosur greenfield industrial hub planned for EV, electronics, and multi-tenant manufacturing growth along NH-44.",
        detailedOverview: "Ambitious greenfield project on the strategic NH-44 corridor. Serving the global EV and electronics clusters.",
        locationAdvantages: ["Crossroads of CBIC", "Proximity to EV clusters (Ola, TVS)"],
        connectivity: [{ label: "NH-44", detail: "Direct frontage on the North-South corridor." }],
        developmentDetails: [{ label: "Utilities", detail: "Dedicated industrial water grid." }],
        businessBenefits: ["Massive expansion potential", "Lower op-costs than Bangalore"],
        futureGrowth: "Transformation into a satellite city for Bangalore with Hosur Airport expansion.",
        story: {
            opportunity: { title: "Opportunity", content: "Manufacturing boom in Hosur." },
            challenge: { title: "Challenge", content: "Large scale topography management." },
            strategy: { title: "Strategy", content: "Integrated utility planning." },
            execution: { title: "Execution", content: "Phased development approach." },
            outcome: { title: "Outcome", content: "Set to become a major regional hub." }
        },
        workflow: [
            { title: "Land Sourcing", description: "Off-market aggregation of 65 contiguous acres.", icon: "Search" },
            { title: "Master Plan", description: "Design for 1.6 Mn sq.ft multi-sector park.", icon: "Ruler" },
            { title: "Clearances", description: "Securing environmental and DTCP approvals.", icon: "ShieldCheck" },
            { title: "Infra Build", description: "Construction of 24m wide internal road network.", icon: "HardHat" },
            { title: "Utilities", description: "Installation of dedicated industrial power grid.", icon: "Zap" },
            { title: "Marketing", description: "Pre-leasing to global EV and tech tenants.", icon: "Users" }
        ],
        outcomes: ["1.6 Mn Sq.Ft Potential", "Strategic Corridor Node", "Institutional Investment"],
        stats: [
            { label: "Land Area", value: 65, suffix: " Ac" },
            { label: "Potential", value: 1.6, suffix: "M" },
            { label: "Units", value: 8, suffix: "" }
        ],
        gallery: [],
        highlights: ["NH-44 Proximity", "1.6 Mn Sq.Ft Potential", "Industrial Power Grid"],
        extraDetails: {
            challenges: ["Managing significant topographical levels across 65 acres.", "Aligning with rapid regional EV infrastructure expansion."],
            solutions: ["Terraced industrial design to minimize earth-work while maximizing flat pads.", "Integration of high-voltage charging infrastructure within the park master plan."],
            technicalSpecs: [
                { label: "Land Area", value: "65 Acres" },
                { label: "Potential", value: "1.6 Mn Sq.Ft" },
                { label: "Corridor", value: "NH-44" }
            ]
        }
    },
    {
        slug: "thiruvallur-industrial",
        title: "Thiruvallur Park (21 acres)",
        location: "Thiruvallur, West Chennai",
        category: "In Progress",
        status: "Construction",
        heroLabel: "Precision Logistics Node",
        subtext: "Grade-A facility optimized for electronics and light manufacturing.",
        scale: "21 Acres",
        client: "Institutional JV",
        type: "Logistics Park",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        badge: "Tech Park",
        accentTag: "Electronics",
        partnerLabel: "West Chennai Corridor",
        metrics: [
            { label: "Land Area", value: "21 Acres" },
            { label: "Connectivity", value: "NH-4 Corridor" },
            { label: "Status", value: "In Construction" }
        ],
        overview: "A 21-acre West Chennai grade-A park tailored for electronics and light manufacturing with precision infrastructure.",
        detailedOverview: "Specialized 21-acre development for the West Chennai electronics cluster. Boutique industrial environment for tech firms.",
        locationAdvantages: ["Neighboring global manufacturing giants", "Strategic node on CBIC"],
        connectivity: [{ label: "Industrial Axis", detail: "Near Sriperumbudur hubs." }],
        developmentDetails: [{ label: "Precision", detail: "Vibration-dampened floor pads." }],
        businessBenefits: ["Plug-and-play for tech", "High-security environment"],
        futureGrowth: "Poised as the next preferred destination as Sriperumbudur reaches saturation.",
        story: {
            opportunity: { title: "Opportunity", content: "West Chennai industrial growth." },
            challenge: { title: "Challenge", content: "Complex zoning clearances." },
            strategy: { title: "Strategy", content: "Grade-A standardization." },
            execution: { title: "Execution", content: "Rapid shell construction." },
            outcome: { title: "Outcome", content: "High tenant interest from tech firms." }
        },
        workflow: [
            { title: "Zoning", description: "Reclassification of 21 acres for industrial use.", icon: "Scale" },
            { title: "Planning", description: "Design for electronics-sensitive operations.", icon: "LayoutGrid" },
            { title: "Foundations", description: "Deployment of vibration-dampened floor slabs.", icon: "Ruler" },
            { title: "Structure", description: "Rapid shell construction of 500,000 sq.ft.", icon: "HardHat" },
            { title: "Utilities", description: "Centralized industrial water recycling setup.", icon: "Zap" },
            { title: "Handover", description: "Phase 1 completion targeted for Q1 2025.", icon: "Flag" }
        ],
        outcomes: ["500K Sq.Ft Development", "Electronics Focus", "Premium West Hub"],
        stats: [
            { label: "Land Area", value: 21, suffix: " Ac" },
            { label: "Sq.Ft", value: 500, suffix: "K" },
            { label: "Status", value: 70, suffix: "%" }
        ],
        gallery: [],
        highlights: ["500,000 Sq.Ft Development", "Plug-and-Play ready", "Skilled Labour Proximity"],
        extraDetails: {
            challenges: ["Securing tech-grade power stability in a suburban zone.", "Meeting specialized clean-air exchange requirements for assembly."],
            solutions: ["Redundant feeder lines from the nearest 230KV substation.", "Implementation of automated louver and filtration systems."],
            technicalSpecs: [
                { label: "Land Area", value: "21 Acres" },
                { label: "Planned Built Area", value: "500,000 Sq.Ft" },
                { label: "Target Completion", value: "Q1 2025" }
            ]
        }
    },
    {
        slug: "redhills-phase-2",
        title: "Redhills Phase II (50 acres)",
        location: "Chennai North",
        category: "Pipeline",
        status: "Planning",
        heroLabel: "Future Logistics Expansion",
        subtext: "Strategic expansion of our Redhills footprint for FMCG and E-commerce.",
        scale: "50 Acres",
        client: "Portfolio Expansion",
        type: "Logistics Hub",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200",
        badge: "E-commerce Hub",
        accentTag: "FMCG",
        partnerLabel: "Expansion Phase",
        metrics: [
            { label: "Land Area", value: "50 Acres" },
            { label: "Connectivity", value: "Chennai Outer Ring Road" },
            { label: "Status", value: "Pipeline" }
        ],
        overview: "A strategic 50-acre Redhills expansion built to serve high-throughput e-commerce and FMCG distribution demand.",
        detailedOverview: "Strategic expansion in North Chennai, optimized for high throughput e-commerce distribution.",
        locationAdvantages: ["Adjacent to successful Phase I", "Immediate ORR access"],
        connectivity: [{ label: "ORR Access", detail: "5-minute link to Outer Ring Road." }],
        developmentDetails: [{ label: "Automation", detail: "Ready for ASRS and robotic picking." }],
        businessBenefits: ["Future-proof infrastructure", "Synergy with existing assets"],
        futureGrowth: "Permanent shift toward larger, automated regional distribution centers.",
        story: {
            opportunity: { title: "Opportunity", content: "E-commerce demand surge." },
            challenge: { title: "Challenge", content: "Land aggregation at scale." },
            strategy: { title: "Strategy", content: "Multi-user hub design." },
            execution: { title: "Execution", content: "Next-gen automation ready." },
            outcome: { title: "Outcome", content: "Core portfolio asset." }
        },
        workflow: [
            { title: "Master Plan", description: "Design for 1.2 Mn sq.ft automated hub.", icon: "Ruler" },
            { title: "Liaison", description: "Ongoing statutory and ORR link clearances.", icon: "ScrollText" },
            { title: "Financing", description: "Structuring capital for Phase II deployment.", icon: "Briefcase" }
        ],
        outcomes: ["1.2 Mn Sq.Ft Potential", "E-commerce Optimization", "ORR Strategic Asset"],
        stats: [
            { label: "Land Area", value: 50, suffix: " Ac" },
            { label: "Potential", value: 1.2, suffix: "M" },
            { label: "Stage", value: 0, suffix: " Planning" }
        ],
        gallery: [],
        highlights: ["1.2 Mn Sq.Ft Potential", "ORR Access", "Cross-Dock Facilities"]
    },
    {
        slug: "krishnagiri-integrated",
        title: "Krishnagiri (55 acres)",
        location: "Krishnagiri Corridor",
        category: "Pipeline",
        status: "Acquisition",
        heroLabel: "Next-Gen Integrated Park",
        subtext: "Designed for multi-sector industrial occupancy on the Chennai-Bangalore corridor.",
        scale: "55 Acres",
        client: "Industrial Fund",
        type: "Integrated Park",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
        badge: "Future Park",
        accentTag: "Integrated",
        partnerLabel: "Strategic Pipeline",
        metrics: [
            { label: "Land Area", value: "55 Acres" },
            { label: "Connectivity", value: "Chennai-Bangalore NH-48" },
            { label: "Status", value: "Pipeline" }
        ],
        overview: "A 55-acre integrated Krishnagiri park planned as a multi-sector industrial ecosystem on the Chennai-Bangalore corridor.",
        detailedOverview: "Self-sustaining industrial ecosystem with integrated worker housing and utility infrastructure.",
        locationAdvantages: ["Mid-point between Chennai and Bangalore", "Lower operational costs"],
        connectivity: [{ label: "NH-48", detail: "Direct frontage on the primary tech link." }],
        developmentDetails: [{ label: "Ecosystem", detail: "Master-planned worker hostels." }],
        businessBenefits: ["Holistic industrial environment", "Strategic South India reach"],
        futureGrowth: "Transformation of CBIC into the 'Ruhr of India'.",
        story: {
            opportunity: { title: "Opportunity", content: "Corridor industrialization." },
            challenge: { title: "Challenge", content: "Regulatory landscape navigation." },
            strategy: { title: "Strategy", content: "ESG-centric development." },
            execution: { title: "Execution", content: "Master-planned ecosystem." },
            outcome: { title: "Outcome", content: "Institutional-grade yield asset." }
        },
        workflow: [
            { title: "Vetting", description: "Final title verification of 55 acres.", icon: "FileSearch" },
            { title: "Design", description: "Master planning for integrated worker ecosystem.", icon: "LayoutGrid" },
            { title: "Acquisition", description: "Closing land transfer to SPV.", icon: "Building2" }
        ],
        outcomes: ["Integrated Park Model", "CBIC Strategic Node", "ESG Compliant"],
        stats: [
            { label: "Land Area", value: 55, suffix: " Ac" },
            { label: "Potential", value: 1.4, suffix: "M" },
            { label: "Yield Potential", value: 18, suffix: "%" }
        ],
        gallery: [],
        highlights: ["1.4 Mn Sq.Ft Development", "ESG Compliant", "Strategic Logistics Node"]
    }
];
