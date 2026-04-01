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
}

export interface StorySection {
    title: string;
    content: string;
}

export interface ProjectStat {
    label: string;
    value: number;
    suffix: string;
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
    image: string;
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
            { title: "Land Identification", description: "Strategic scouting of high-potential corridors." },
            { title: "Title Clean-up", description: "Rigorous legal due diligence and certification." },
            { title: "SPV Creation", description: "Structuring for institutional capital transparency." },
            { title: "Approvals", description: "Securing CLU, environment, and fire clearances." },
            { title: "Development Management", description: "Grade-A construction and project oversight." },
            { title: "Completion", description: "Handover and operational management." }
        ],
        outcomes: ["Seamless Approvals", "Institutional Exit", "Strong ROI"],
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
        highlights: ["Institutional Grade Asset", "100% Occupancy at Exit", "Strategic North Chennai Location"]
    },
    {
        slug: "chengalpattu-development",
        title: "Chengalpattu Industrial Park",
        location: "Chennai South / GST Road",
        category: "In Progress",
        status: "Under Development",
        heroLabel: "Institutional Partnership",
        subtext: "A 1.4 million sq.ft industrial powerhouse in South Chennai's manufacturing heart.",
        scale: "54 Acres / 1.4 Mn sq.ft",
        client: "Horizon Industrial Parks",
        type: "Institutional JV",
        image:  chengalpattu ,
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
            { title: "Land Identification", description: "Consolidation of 54 acres in GST corridor." },
            { title: "Title Clean-up", description: "Complex legal structuring for JV." },
            { title: "SPV Creation", description: "Institutional capital partnership (Horizon)." },
            { title: "Approvals", description: "Master planning and zoning clearances." },
            { title: "Development Management", description: "Phased infrastructure development." },
            { title: "Construction", description: "Ongoing Grade-A execution." }
        ],
        outcomes: ["Asset De-risking", "Tenant Engagement", "Scalable Growth"],
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
        ]
    },
    {
        slug: "pondicherry-bts",
        title: "BTS Facility (Pondicherry)",
        location: "Pondicherry",
        category: "In Progress",
        status: "Under Construction",
        heroLabel: "Built-To-Suit Excellence",
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
            { title: "Requirement Mapping", description: "Deep dive into client technical specs." },
            { title: "Design Customization", description: "Architectural alignment with flow." },
            { title: "Approvals", description: "Securing industrial specific permits." },
            { title: "Construction", description: "High-precision building execution." },
            { title: "Fit-outs", description: "MEP and specialized docking systems." },
            { title: "Handover", description: "Operational transition and support." }
        ],
        outcomes: ["Client Retention", "Technical Precision", "Timely Handover"],
        stats: [
            { label: "Built Area", value: 72000, suffix: " Sq.Ft" },
            { label: "Docks", value: 12, suffix: "" },
            { label: "Delivery", value: 100, suffix: "%" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
        ]
    },
    {
        slug: "jaisalmer-bts",
        title: "BTS Facility (Jaisalmer)",
        location: "Jaisalmer",
        category: "Pipeline",
        status: "₹84L/month revenue",
        heroLabel: "Renewable Energy Corridor",
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
            { title: "Strategic Location", description: "Positioning in wind energy corridor." },
            { title: "Design for Heavy Load", description: "Custom floor and bay engineering." },
            { title: "long-term Lease", description: "15-year commitment with escalation." },
            { title: "Asset Management", description: "Ongoing operational excellence." }
        ],
        outcomes: ["Stable Cash Flow", "Energy Alignment", "Yield Excellence"],
        stats: [
            { label: "Area", value: 4.16, suffix: "L Sq.Ft" },
            { label: "Revenue", value: 84, suffix: "L / Mo" },
            { label: "Lease", value: 15, suffix: " Years" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
        ]
    }
];
