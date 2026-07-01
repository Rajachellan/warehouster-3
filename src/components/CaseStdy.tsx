"use client";

import { useEffect } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   DESIGN TOKENS
──────────────────────────────────────────────────────────────── */
const GOLD = "#D4AF37";
const DARK = "#0A1428";
const SURFACE = "#F9FAFB";
const SURFACE_WARM = "#FFFBF0";
const BORDER = "#E5E7EB";
const MUTED = "#9CA3AF";

// ─── TOKENS ────────────────────────────────────────────────────────────────────
const P = "#0A1428";
const P2 = "#0f2040";
const G = "#D4AF37";
const G2 = "#C9A84C";
const G40 = "rgba(212,175,55,0.40)";
const G20 = "rgba(212,175,55,0.20)";
const G12 = "rgba(212,175,55,0.12)";
const G07 = "rgba(212,175,55,0.07)";
const N08 = "rgba(10,20,40,0.08)";
const N05 = "rgba(10,20,40,0.05)";
const N55 = "rgba(10,20,40,0.55)";
const N40 = "rgba(10,20,40,0.40)";
const N25 = "rgba(10,20,40,0.25)";
const EASE = [0.22, 1, 0.36, 1] as const;
/* ────────────────────────────────────────────────────────────────
   GLOBAL CSS  (all classes prefixed wh- to avoid collisions)
──────────────────────────────────────────────────────────────── */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

/* reset scoped to our root */
.wh-root, .wh-root *, .wh-root *::before, .wh-root *::after {
  box-sizing: border-box;
}
.wh-root {
  font-family: 'Inter', sans-serif;
  color: ${DARK};
  background: #fff;
  overflow-x: clip;
}

/* ── animations ── */
@keyframes wh-fadeUp {
  from { opacity:0; transform:translateY(36px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes wh-float1 {
  0%,100% { transform:translate(0,0) rotate(0deg); }
  33%     { transform:translate(16px,-20px) rotate(7deg); }
  66%     { transform:translate(-10px,12px) rotate(-4deg); }
}
@keyframes wh-float2 {
  0%,100% { transform:translate(0,0); }
  50%     { transform:translate(-18px,16px); }
}
@keyframes wh-float3 {
  0%,100% { transform:translate(0,0) rotate(0deg); }
  40%     { transform:translate(12px,18px) rotate(5deg); }
  80%     { transform:translate(-6px,-12px) rotate(-3deg); }
}
@keyframes wh-bounce {
  0%,100% { transform:translateY(0); opacity:1; }
  50%     { transform:translateY(7px); opacity:.4; }
}
@keyframes wh-reveal {
  from { opacity:0; transform:translateY(28px); }
  to   { opacity:1; transform:translateY(0); }
}

.wh-fu1 { animation: wh-fadeUp .8s cubic-bezier(.22,.68,0,1.2) .10s both; }
.wh-fu2 { animation: wh-fadeUp .8s cubic-bezier(.22,.68,0,1.2) .25s both; }
.wh-fu3 { animation: wh-fadeUp .8s cubic-bezier(.22,.68,0,1.2) .40s both; }
.wh-fu4 { animation: wh-fadeUp .8s cubic-bezier(.22,.68,0,1.2) .55s both; }
.wh-fu5 { animation: wh-fadeUp .8s cubic-bezier(.22,.68,0,1.2) .70s both; }

.wh-f1 { animation: wh-float1 7s ease-in-out 0s infinite; }
.wh-f2 { animation: wh-float2 9s ease-in-out 1.2s infinite; }
.wh-f3 { animation: wh-float3 8s ease-in-out 0.7s infinite; }
.wh-f4 { animation: wh-float1 6s ease-in-out 2s infinite; }
.wh-f5 { animation: wh-float2 10s ease-in-out 0.4s infinite; }
.wh-bounce { animation: wh-bounce 1.6s ease-in-out infinite; }

/* scroll-reveal */
.wh-r {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .65s ease, transform .65s cubic-bezier(.22,.68,0,1.2);
}
.wh-r.wh-visible {
  opacity: 1;
  transform: none;
}

/* ── buttons ── */
.wh-btn-gold {
  background: ${GOLD};
  color: ${DARK};
  border: none;
  padding: 14px 32px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background .2s, transform .15s, box-shadow .2s;
  line-height: 1;
}
.wh-btn-gold:hover {
  background: #D97706;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(245,158,11,.35);
}
.wh-btn-outline {
  background: transparent;
  color: ${GOLD};
  border: 1px solid rgba(245,158,11,.5);
  padding: 14px 32px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .05em;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background .2s, border-color .2s, transform .15s;
  line-height: 1;
}
.wh-btn-outline:hover {
  background: rgba(245,158,11,.08);
  border-color: ${GOLD};
  transform: translateY(-1px);
}

/* ── tag pill ── */
.wh-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: #92400E;
  background: #FEF3C7;
  padding: 5px 12px;
  display: inline-block;
}

/* ── hero grid overlay ── */
.wh-hero-grid {
  position: absolute;
  inset: 0;
  opacity: .04;
  background-image:
    linear-gradient(rgba(245,158,11,1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
}

/* ── image zoom ── */
.wh-img-wrap { overflow: hidden; }
.wh-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .7s cubic-bezier(.22,.68,0,1.1);
}
.wh-img-wrap:hover img { transform: scale(1.04); }

/* ── image overlay ── */
.wh-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(10,20,40,.05) 0%, rgba(10,20,40,.55) 100%);
  pointer-events: none;
}

/* ── metrics strip ── */
.wh-metrics {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1px;
  background: ${BORDER};
  border: 1px solid ${BORDER};
  margin: 32px 0;
}
.wh-metric {
  background: #fff;
  padding: 28px 16px;
  text-align: center;
}
.wh-metric-val {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  font-weight: 800;
  color: ${DARK};
  display: block;
  line-height: 1;
}
.wh-metric-lbl {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: ${MUTED};
  margin-top: 8px;
  display: block;
}

/* ── approach rows ── */
.wh-step {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 0 16px;
  padding: 18px 0;
  border-bottom: 1px solid ${BORDER};
  align-items: start;
}
.wh-step:first-child { border-top: 1px solid ${BORDER}; }
.wh-step-num {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${GOLD};
  padding-top: 2px;
}
.wh-step-text {
  font-size: 16px;
  line-height: 1.72;
  color: #374151;
  margin: 0;
}

/* ── right-side prose blocks ── */
.wh-block {
  padding: 44px 0;
  border-bottom: 1px solid ${BORDER};
}
.wh-block:last-child { border-bottom: none; }
.wh-block-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: ${MUTED};
  margin: 0 0 18px;
}
.wh-block-body {
  font-size: 17px;
  line-height: 1.76;
  color: #374151;
  margin: 0;
}

/* ── quote block ── */
.wh-quote {
  border-left: 3px solid ${GOLD};
  padding: 22px 28px;
  margin: 8px 0 0;
  background: ${SURFACE_WARM};
}
.wh-quote p {
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  font-style: italic;
  line-height: 1.6;
  color: ${DARK};
  margin: 0;
}

/* ── stat number in left panel ── */
.wh-stat-val {
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: ${GOLD};
  line-height: 1;
  letter-spacing: -.01em;
}

/* ── divider ── */
.wh-divider {
  width: 56px; height: 2px;
  background: ${GOLD};
  margin: 20px 0 28px;
}

/* ── big case number decoration ── */
.wh-case-num-deco {
  font-family: 'Playfair Display', serif;
  font-size: clamp(80px, 10vw, 120px);
  font-weight: 800;
  color: #F3F4F6;
  line-height: 1;
  user-select: none;
  margin-bottom: -16px;
  display: block;
}

/* ─────────────────────────────────────────────────────────────
   STICKY LAYOUT
   Key rules:
   1. The outer flex row must NOT have overflow:hidden/auto.
   2. The sticky column parent must have a defined height so the
      sticky element has a scrolling container to stick inside.
   3. We use align-items:flex-start so the row height is driven
      by the taller (right) column, giving the sticky column
      room to remain pinned while the right column scrolls past.
───────────────────────────────────────────────────────────── */
.wh-case-outer {
  padding: 96px 48px;
  border-bottom: 1px solid ${BORDER};
}
/* The two-column layout row */
.wh-cols {
  display: flex;
  align-items: flex-start;   /* CRITICAL: NOT stretch */
  gap: 72px;
  max-width: 1200px;
  margin: 0 auto;
  /* NO overflow property here */
}
/* Left sticky column */
.wh-col-left {
  width: 340px;
  min-width: 300px;
  flex-shrink: 0;
  position: sticky;
  top: 148px;                 /* clears your existing navbar */
  /* align-self:flex-start is set inline per instance */
}
/* Right scrolling column */
.wh-col-right {
  flex: 1;
  min-width: 0;
}

/* responsive */
@media (max-width: 1024px) {
  .wh-cols { flex-direction: column !important; gap: 40px; }
  .wh-col-left {
    position: static !important;
    width: 100% !important;
    min-width: unset !important;
  }
  .wh-case-outer { padding: 64px 24px; }
}
@media (max-width: 640px) {
  .wh-metrics { grid-template-columns: 1fr; }
  .wh-btn-gold, .wh-btn-outline { width:100%; justify-content:center; }
  .wh-cols { gap: 28px; }
}
`;

/* ────────────────────────────────────────────────────────────────
   INTERSECTION OBSERVER — scroll-reveal
──────────────────────────────────────────────────────────────── */

// ─── PILL ───────────────────────────────────────────────────────────────────────
function Pill({ label }: { label: string }) {
  return (
    <div
      className="inline-flex items-center gap-[7px] px-[14px] py-[5px] rounded-full border text-[12px] font-black uppercase tracking-[0.32em] font-sans mb-5"
      style={{ borderColor: G40, background: G07, color: G }}
    >
      <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 animate-pulse" style={{ background: G }} />
      {label}
    </div>
  );
}
function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(".wh-r");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("wh-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ────────────────────────────────────────────────────────────────
   FLOATING SHAPE
──────────────────────────────────────────────────────────────── */
type FloatShapeProps = {
  cls: string;
  size: number;
  opacity: number;
  shape: "square" | "circle" | "ring";
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

function FloatShape({ cls, size, opacity, shape, top, bottom, left, right }: FloatShapeProps) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    opacity,
    ...(top    !== undefined && { top }),
    ...(bottom !== undefined && { bottom }),
    ...(left   !== undefined && { left }),
    ...(right  !== undefined && { right }),
  };
  if (shape === "circle")
    return <div className={cls} style={{ ...base, borderRadius: "50%", background: GOLD }} />;
  if (shape === "ring")
    return <div className={cls} style={{ ...base, borderRadius: "50%", border: `2px solid ${GOLD}`, background: "transparent" }} />;
  return <div className={cls} style={{ ...base, background: GOLD, transform: "rotate(45deg)" }} />;
}

/* ────────────────────────────────────────────────────────────────
   CASE DATA
──────────────────────────────────────────────────────────────── */
type Stat       = { val: string; lbl: string };
type CaseData   = {
  num: string;
  title: string;
  tag: string;
  corridor: string;
  client: string;
  period: string;
  img: string;
  imgCaption: string;
  stats: Stat[];
  badge: string;
  situation: string;
  mandate: string;
  approach: string[];
  outcome: string;
  resultMetrics: Stat[];
  altLayout: boolean;
};

const CASES: CaseData[] = [
  {
    num: "01",
    title: "From 25+ acres of fragmented title to a fully operational ~500,000 sq ft Grade A facility.",
    tag: "Institutional Land Aggregation · Development Management",
    corridor: "North Chennai (Redhills) logistics corridor",
    client: "Blackstone",
    period: "2023–2025",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=85&auto=format&fit=crop",
    imgCaption: "From 25+ acres of fragmented title to a fully operational ~500,000 sq ft Grade A facility.",
    stats: [
      { val: "25+",  lbl: "Acres" },
      { val: "~500K", lbl: "sq ft built" },
      { val: "End-to-end", lbl: "Delivery" },
    ],
    badge: "Fully operational",
    situation:
      "Blackstone required a contiguous parcel of institutional-grade industrial land along a North Chennai logistics corridor. Local supply was fragmented across 40+ private holders, with overlapping pattadar claims and a six-month informal pricing inflation cycle already underway. Blackstone also required a partner capable of carrying the asset from origination through construction supervision and handover — not a brokerage hand-off.",
    mandate:
      "Originate, validate and aggregate a single deployable parcel of more than 25 acres within an agreed land budget — fully title-clear, ready for institutional underwriting — and then deliver the development end-to-end through approvals, construction supervision and handover to an operating asset.",
    approach: [
    "Mapped 20+ parcels against revenue, zoning and corridor master plans before approaching the aggregators.",
    "Brought in an interim investor to aggregate the land and ring-fence intermediaries to suppress price discovery leakage.",
    "Title diligence sequenced ahead of price commitment — eliminated 40% of parcels before any LOI.",
    "Held the land in an SPV to ease eventual acquisition by Blackstone.",
    "Initiated warehouse development approvals well before the actual acquisition by Blackstone.",
    "Supported Blackstone on clearances, project estimation, micro-market mapping to tenants and the full monetisation strategy.",
    "Carried the project into execution as development manager — design coordination, contractor tendering, construction supervision, cost and schedule control.",
    "Drove the project to full handover and operating readiness — ~500,000 sq ft of Grade A warehousing now fully operational."
    ],
    outcome:
      '"Origination is not brokerage, and development management is not construction. The outcome here was decided in the first three months of land work, and again in the early days of execution — long before the first panel was cast."',
    resultMetrics: [
      { val: "25+",   lbl: "Acres aggregated" },
      { val: "~500K", lbl: "Built sq ft" },
      { val: "40%",   lbl: "Parcels cut pre-LOI" },
    ],
    altLayout: false,
  },
  {
    num: "02",
    title: "Delivering a 72,000 sq. ft. built-to-suit facility under an aggressive 10-month timeline.",
    tag: "Built-to-Suit Development · Aggressive Timeline",
    corridor: "Puducherry corridor, South India",
    client: "Britannia Industries",
    period: "2025-2026",
    img: "/images/warehouse/britania-ase-study.jpg",
    imgCaption: "Delivering a 72,000 sq ft built-to-suit facility under an aggressive 10-month timeline.",
    stats: [
      { val: "72K",  lbl: "sq ft" },
      { val: "Nov 2025-26", lbl: "Timeline" },
      { val: "On schedule", lbl: "Status" },
    ],
    badge: "In development",
    situation:
      "Britannia Industries required a dedicated 72,000 sq. ft. built-to-suit warehouse and distribution facility in a Tier-2/Tier-3 market along the Southern India logistics corridor near Puducherry. Despite evaluating multiple sites, the client had been unable to identify a parcel that satisfied location, approval, development and delivery requirements. Site identification commenced in November 2025 with operations required by August 2026.",
    mandate:
      "Identify, acquire and institutionalise a suitable industrial land parcel, secure all development approvals, commence construction immediately and deliver a fully operational 72,000 sq. ft. built-to-suit facility within the client's required timeline.",
    approach: [
      "Ran rapid micro-market analysis across industrial clusters surrounding the Puducherry corridor to identify viable development locations.",
      "Shortlisted and secured the most suitable parcel based on logistics access, workforce availability and future expansion potential.",
      "Fast-tracked land acquisition, title validation and land conversion to eliminate delays in project commencement.",
      "Initiated building plan approvals immediately on land finalisation, rather than waiting for conventional transaction milestones.",
      "Coordinated consultants, statutory authorities and stakeholders under a single execution framework.",
      "Commenced construction at the earliest possible stage to compress the overall delivery schedule.",
      "Managed development execution, stakeholder coordination and timeline monitoring against operational requirements."
    ],
    outcome:
      '"Execution speed is rarely created during construction. It is created in the first 60 days — through decisive land selection, parallel approval management, and eliminating hand-off delays between acquisition and development."',
    resultMetrics: [
      { val: "72K",  lbl: "sq ft BTS" },
      { val: "10mo", lbl: "Delivery target" },
      { val: "3wk",  lbl: "Site to close" },
    ],
    altLayout: true,
  },
  {
    num: "03",
    title: "Creating an institution-ready 52-acre industrial park through structured acquisition and pre-leasing.",
    tag: "Off-Market Institutionalisation",
    corridor: "Chengalpattu corridor, South Chennai",
    client: "Horizon Industrial Parks",
    period: "Jan – Oct 2024",
    img: "/images/warehouse/industrial-park.jpg",
    imgCaption: "Creating an institution-ready 52-acre industrial park through structured acquisition and pre-leasing.",
    stats: [
      { val: "52",    lbl: "Acres" },
      { val: "1.3M",  lbl: "sq ft planned" },
      { val: "Rs 400M+", lbl: "Value created" },
    ],
    badge: "Off-market · SPV transfer",
    situation:
      "Horizon Industrial Parks sought to establish a large-scale industrial and warehousing park in the high-growth Chengalpattu corridor of South Chennai. The opportunity was an off-market 52-acre parcel with potential for 1.3 million sq. ft. of Grade A development — but it was not institution-ready. Ownership structuring, acquisition, approvals, conversion, investor alignment and tenant validation all had to be resolved before an institutional investor could underwrite it.",
    mandate:
      "Originate, structure and institutionalise a 52-acre off-market industrial land opportunity and create a de-risked acquisition platform — covering interim capital, aggregation, approvals, SPV creation, early tenant engagement and development management.",
    approach: [
    "Originated the off-market opportunity within the Chengalpattu corridor before the asset was broadly marketed, retaining control over pricing and structure.",
    "Introduced an interim investor to acquire and hold the land through the value-creation phase, isolating institutional capital from entitlement and execution risk.",
    "Institutionalised the land — acquisition, consolidation, title verification, documentation standardisation and removal of underwriting bottlenecks.",
    "Coordinated the full regulatory pathway: conversion, development approvals, infrastructure planning and compliance readiness.",
    "Created and maintained a dedicated SPV so the institutional investor could acquire control through an SPV transfer rather than an underlying land transaction.",
    "Ran parallel tenant origination — secured a soft commitment of ~400,000 sq. ft. (nearly one-third of the park) while acquisition was still in motion.",
    "Transitioned the institutionalised platform to the institutional investor via SPV transfer once approvals and readiness milestones were achieved.",
    "Continued post-acquisition development management — consultants, planning, execution support and investor reporting."
    ],
    outcome:
      '"Institutional investors prefer acquiring certainty, not complexity. The value creation here did not occur at acquisition — it occurred in the months spent converting raw land into an institution-ready platform with approvals, tenant demand, and a clean acquisition structure already in place."',
    resultMetrics: [
      { val: "52",   lbl: "Acres converted" },
      { val: "40%",  lbl: "Pre-committed" },
      { val: "Rs 400M+", lbl: "Value created" },
    ],
    altLayout: false,
  },
  // {
  //   num: "04",
  //   title: "Learnfella EdTech Platform Scale-Up",
  //   tag: "Digital Growth · Lead Generation",
  //   corridor: "Pan-India · Online",
  //   client: "Learnfella",
  //   period: "2024–2025",
  //   img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=85&auto=format&fit=crop",
  //   imgCaption: "+280% qualified leads in 8 months through full-funnel performance and SEO strategy.",
  //   stats: [
  //     { val: "+280%", lbl: "Qualified Leads" },
  //     { val: "+190%", lbl: "Organic Traffic" },
  //     { val: "+140%", lbl: "Conversion rate" },
  //   ],
  //   badge: "Growth · Completed",
  //   situation:
  //     "Learnfella had strong course content but a fragmented digital presence — multiple undifferentiated landing pages, near-zero organic authority, and reliance on expensive paid acquisition with deteriorating CAC. The team needed a partner who could rebuild the growth architecture from first principles.",
  //   mandate:
  //     "Rebuild organic search presence, reduce CAC through full-funnel optimisation, and install a lead-generation engine capable of running at scale without proportional ad spend increases.",
  //   approach: [
  //     "Full audit of keyword gap, competitor SERP share, and on-page technical deficiencies.",
  //     "Consolidated 40+ thin landing pages into 12 authoritative pillar hubs — each mapped to a distinct search intent cluster.",
  //     "Deployed programmatic SEO for long-tail course variants — 1,200 pages published in 6 weeks.",
  //     "Rebuilt paid acquisition funnels around BOFU intent with micro-commitment landing pages.",
  //     "A/B tested 18 CTA variants across lead forms — 140% conversion lift on the primary enrollment page.",
  //   ],
  //   outcome:
  //     '"The most expensive growth mistake is treating SEO and paid as separate workstreams. When you align keyword strategy to paid targeting, organic traffic starts subsidising your CAC — and the compounding begins."',
  //   resultMetrics: [
  //     { val: "+280%", lbl: "Qualified leads" },
  //     { val: "+190%", lbl: "Organic traffic" },
  //     { val: "-42%",  lbl: "CAC reduction" },
  //   ],
  //   altLayout: true,
  // },
  // {
  //   num: "05",
  //   title: "RankRaze SaaS Authority Build",
  //   tag: "SaaS SEO · Content Authority",
  //   corridor: "B2B SaaS · Global",
  //   client: "RankRaze",
  //   period: "2024",
  //   img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&auto=format&fit=crop",
  //   imgCaption: "Zero to #1 SERP for 48 competitive SaaS keywords in under 6 months.",
  //   stats: [
  //     { val: "48",    lbl: "Top-3 rankings" },
  //     { val: "+340%", lbl: "Demo requests" },
  //     { val: "6mo",   lbl: "Time to results" },
  //   ],
  //   badge: "SEO · Completed",
  //   situation:
  //     "RankRaze launched into a saturated SEO tools market with strong product differentiation but no organic presence, no backlink profile, and no content engine. Every competitor had 3 to 8 years of domain authority. Paid search CPCs in the category exceeded Rs 900 per click.",
  //   mandate:
  //     "Build organic authority from zero, rank for high-intent commercial keywords ahead of the next funding cycle, and generate a self-sustaining pipeline of qualified demo requests.",
  //   approach: [
  //     "Mapped the full competitive SERP landscape — identified 12 underserved keyword clusters with high intent and low difficulty.",
  //     "Designed a hub-and-spoke content architecture — 6 pillar pages and 144 supporting articles, fully interlinked.",
  //     "Digital PR sprint: 34 placements in 90 days, building foundational backlink authority without PBNs.",
  //     "Technical SEO foundation: Core Web Vitals remediation, crawl budget optimisation, schema markup at scale.",
  //     "Installed a continuous publishing cadence — 3 long-form pieces per week maintained by trained in-house writers.",
  //   ],
  //   outcome:
  //     '"Zero to #1 is not a content volume game. It is a precision architecture game — understanding exactly which gaps the market leaders have left, and filling them with content that serves the reader better than anything currently ranking."',
  //   resultMetrics: [
  //     { val: "48",    lbl: "Top-3 keywords" },
  //     { val: "+340%", lbl: "Demo requests" },
  //     { val: "34",    lbl: "PR placements" },
  //   ],
  //   altLayout: false,
  // },
  // {
  //   num: "06",
  //   title: "Chennai Shared Office Rollout",
  //   tag: "Commercial Real Estate · Workspace Strategy",
  //   corridor: "Chennai CBD · Nungambakkam · OMR",
  //   client: "Co-working Operator",
  //   period: "2023–2024",
  //   img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop",
  //   imgCaption: "3 new locations, 1,200 seats pre-sold, zero capex overrun.",
  //   stats: [
  //     { val: "3",     lbl: "Locations" },
  //     { val: "1,200", lbl: "Seats" },
  //     { val: "Zero",  lbl: "Capex overrun" },
  //   ],
  //   badge: "Completed · Operational",
  //   situation:
  //     "A fast-growing co-working operator needed to expand from 1 to 4 locations in Chennai within 14 months to meet enterprise client demand and defend against a well-funded competitor entering the market. Each location required negotiation, fitout, and pre-sale before opening.",
  //   mandate:
  //     "Identify, negotiate, and fitout three new Chennai co-working locations — each pre-sold to a minimum 60% occupancy before opening — within budget and on a 14-month aggregate timeline.",
  //   approach: [
  //     "Site selection using a proprietary micro-location scoring model: transit proximity, enterprise density, competing supply.",
  //     "Structured each lease with fitout contribution clauses and rent-free periods — reduced effective capex per seat by 28%.",
  //     "Engaged anchor enterprise clients during the design phase — locked pre-commitments before fitout completion.",
  //     "Appointed a single fitout contractor across all three sites for programme continuity and bulk material procurement.",
  //     "Opened all three locations within 12 days of each other — operational critical mass from week one.",
  //   ],
  //   outcome:
  //     '"The biggest risk in co-working expansion is opening a beautiful space to an empty calendar. Pre-selling before you open is not a marketing problem — it is a product design problem. We built the sales pipeline into the site selection and design process from day one."',
  //   resultMetrics: [
  //     { val: "3",    lbl: "Locations opened" },
  //     { val: "82%",  lbl: "Day-1 occupancy" },
  //     { val: "-28%", lbl: "Effective capex/seat" },
  //   ],
  //   altLayout: true,
  // },
];

/* ────────────────────────────────────────────────────────────────
   HERO
──────────────────────────────────────────────────────────────── */
function Hero() {
  return (
   <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 48px 80px",
        backgroundImage: `
          linear-gradient(
            rgba(8,12,20,0.65),
            rgba(8,12,20,0.75)
          ),
          url("/images/warehouse/warehouster-land (1).jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="wh-hero-grid" /> */}

      {/* ambient glows */}
      <div style={{ position:"absolute", top:"20%", right:"15%", width:400, height:400, borderRadius:"50%", background:"rgba(245,158,11,.06)", filter:"blur(80px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"15%", left:"10%", width:300, height:300, borderRadius:"50%", background:"rgba(245,158,11,.04)", filter:"blur(60px)", pointerEvents:"none" }} />

      {/* floating shapes */}
      <FloatShape cls="wh-f1" top="18%"  right="22%"  size={32} opacity={0.18} shape="square" />
      <FloatShape cls="wh-f2" top="60%"  right="8%"   size={20} opacity={0.12} shape="circle" />
      <FloatShape cls="wh-f3" top="35%"  left="6%"    size={48} opacity={0.08} shape="ring"   />
      <FloatShape cls="wh-f4" bottom="25%" right="35%" size={16} opacity={0.20} shape="square" />
      <FloatShape cls="wh-f5" top="75%"  left="25%"   size={24} opacity={0.10} shape="circle" />

      <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", position:"relative", zIndex:2 }}>

        
           <Pill label=" Case Studies · Real Transactions" />

        <h1
          className="wh-fu2 text-6xl text-white"
          style={{
            fontFamily:"'Playfair Display',serif",
            fontWeight:800,
            color:"accent",
            lineHeight:1.05,
            letterSpacing:"-.02em",
            marginBottom:32,
            maxWidth:900,
          }}
        >
          How institutional<br />
          mandates actually{" "}
          <span style={{ color:G, fontStyle:"italic" }}>get closed</span>{" "}
          in South India.
        </h1>

        <p
          className=" text-gray-300 "
          style={{ fontSize:18, lineHeight:1.7, maxWidth:560, marginBottom:48, color:"white"}}
        >
          Three anonymous mandates. The same purpose that closed Rs&nbsp;700Cr+ in South
          India&apos;s most demanding capital-allocating environments.
        </p>

        <div className="wh-fu4" style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
          <button className="wh-btn-gold" style={{ display:"flex", gap:16, flexWrap:"wrap" }}>View Case Studies <ArrowRight size={15} /></button>
          <button className="wh-btn-outline">Request NDA Package <ArrowUpRight size={15} /></button>
        </div>

        <div className="wh-fu5 text-gray-200" style={{ marginTop:80, display:"flex", gap:56, flexWrap:"wrap" }}>
          {[
            { val:"Rs 700Cr+", lbl:"Transactions closed" },
            { val:"25+",       lbl:"Acres originated" },
            { val:"6",         lbl:"Mandates profiled" },
          ].map((s) => (
            <div key={s.lbl}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"2.8rem", fontWeight:800, color:GOLD, lineHeight:1 }}>{s.val}</div>
              <div style={{ fontSize:11, fontWeight:600, letterSpacing:".14em", textTransform:"uppercase", color:"white", marginTop:8 }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div style={{ position:"absolute", bottom:40, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
        <span style={{ fontSize:10, fontWeight:600, letterSpacing:".16em", textTransform:"uppercase", color:"rgba(255,255,255,.25)" }}>Scroll</span>
        <div className="wh-bounce"><ChevronDown size={18} color="rgba(245,158,11,.6)" /></div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   CASE STUDY — sticky left + scrolling right
   
   HOW STICKY WORKS HERE:
   • .wh-cols is display:flex; align-items:flex-start  ← essential
   • .wh-col-left has position:sticky; top:88px; align-self:flex-start
   • .wh-col-right is a normal block — its natural height is much
     taller than the left col, so the sticky element has plenty of
     scroll range to stick inside.
   • NO overflow:hidden/auto/scroll anywhere in the chain.
──────────────────────────────────────────────────────────────── */
function CaseStudy({ data }: { data: CaseData }) {
  const {
    num, title, tag, corridor, client, period,
    img, imgCaption, stats, badge,
    situation, mandate, approach, outcome,
    resultMetrics, altLayout,
  } = data;

  const isEven = parseInt(num, 10) % 2 === 0;

  /* ── LEFT PANEL (sticky) ── */
  const leftPanel = (
    <div
      className="wh-col-left "
      style={{ alignSelf: "flex-start" }}   id={`case-${num}`} /* belt-and-suspenders */
    >
      <span className="wh-case-num-deco">{num}</span>

      <div style={{ background: SURFACE_WARM, border:"1px solid rgba(245,158,11,.15)", padding:"32px 28px" }}>

        {/* meta */}
        {([
          { label:"CORRIDOR", val: corridor },
          { label:"CLIENT",   val: client   },
          { label:"PERIOD",   val: period   },
        ] as { label: string; val: string }[]).map((r) => (
          <div key={r.label} style={{ paddingBottom:18, marginBottom:18, borderBottom:`1px solid ${BORDER}` }}>
            <div style={{ fontSize:9, fontWeight:700, letterSpacing:".18em", textTransform:"uppercase", color:MUTED, marginBottom:5 }}>{r.label}</div>
            <div style={{ fontSize:14, fontWeight:500, color:DARK }}>{r.val}</div>
          </div>
        ))}

        {/* stats */}
        <div style={{ marginBottom:24 }}>
          {stats.map((s) => (
            <div key={s.lbl} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:`1px solid ${BORDER}` }}>
              <span style={{ fontSize:10, fontWeight:600, letterSpacing:".1em", textTransform:"uppercase", color:MUTED }}>{s.lbl}</span>
              <span className="wh-stat-val">{s.val}</span>
            </div>
          ))}
        </div>

        {/* badge */}
        <div style={{ marginBottom:24 }}>
          <span className="wh-tag">{badge}</span>
        </div>

        {/* CTA */}
        <button className="wh-btn-gold" style={{ width:"100%", justifyContent:"center", fontSize:12 }}>
          Full Memorandum <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );

  /* ── RIGHT PANEL (scrolls) ── */
  const rightPanel = (
    <div className="wh-col-right">

      {/* title area */}
      <div className="wh-r" style={{ marginBottom:14 }}>
        <span className="wh-tag">{tag}</span>
      </div>

      <h2
        className="wh-r"
        style={{
          fontFamily:"'Playfair Display',serif",
          fontSize:"clamp(1.9rem,3.2vw,2.9rem)",
          fontWeight:800,
          color:DARK,
          lineHeight:1.1,
          letterSpacing:"-.02em",
          marginBottom:0,
        }}
      >
        {title}
      </h2>
      <div className="wh-divider wh-r" />

      {/* banner image */}
      <div
        className="wh-r wh-img-wrap"
        style={{
          position:"relative",
          height:"clamp(280px,40vw,500px)",
          border:"1px solid rgba(245,158,11,.2)",
          boxShadow:"0 2px 40px rgba(245,158,11,.07)",
        }}
      >
        <img src={img} alt={title} />
        <div className="wh-img-overlay" />
        {/* gold corner */}
        <div style={{ position:"absolute", top:0, left:0, width:56, height:3,  background:GOLD }} />
        <div style={{ position:"absolute", top:0, left:0, width:3,  height:56, background:GOLD }} />
        {/* caption */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"28px 32px" }}>
          <p style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontStyle:"italic", color:"rgba(255,255,255,.92)", lineHeight:1.4, margin:0 }}>
            {imgCaption}
          </p>
        </div>
      </div>

      {/* metrics strip */}
      <div className="wh-metrics wh-r">
        {resultMetrics.map((m) => (
          <div key={m.lbl} className="wh-metric">
            <span className="wh-metric-val">{m.val}</span>
            <span className="wh-metric-lbl">{m.lbl}</span>
          </div>
        ))}
      </div>

      {/* situation */}
      <div className="wh-block wh-r">
        <p className="wh-block-label">Situation</p>
        <p className="wh-block-body">{situation}</p>
      </div>

      {/* mandate */}
      <div className="wh-block wh-r">
        <p className="wh-block-label">Mandate</p>
        <p className="wh-block-body">{mandate}</p>
      </div>

      {/* approach */}
      <div className="wh-block wh-r">
        <p className="wh-block-label">Approach</p>
        <div>
          {approach.map((step, i) => (
            <div key={i} className="wh-step">
              <span className="wh-step-num">0{i + 1}</span>
              <p className="wh-step-text">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* outcome quote */}
      <div className="wh-block wh-r">
        <p className="wh-block-label">Outcome</p>
        <div className="wh-quote"><p>{outcome}</p></div>
      </div>

    </div>
  );

  return (
    <section
      className="wh-case-outer"
      style={{ background: isEven ? SURFACE : "#fff" }}
    >
      {/*
        STICKY LAYOUT CONTRACT:
        - display:flex + align-items:flex-start  → row height = right col height
        - left col: position:sticky + top:88px + align-self:flex-start
        - right col: normal flow, no overflow constraint
        - altLayout flips order via flex-direction
      */}
      <div
        className="wh-cols"
        style={{ flexDirection: altLayout ? "row-reverse" : "row" }}
      >
        {leftPanel}
        {rightPanel}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   FOOTER CTA
──────────────────────────────────────────────────────────────── */
function FooterCTA() {
  return (
    <section style={{ background:DARK, padding:"120px 48px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"30%", left:"50%", transform:"translateX(-50%)", width:600, height:300, borderRadius:"50%", background:"rgba(245,158,11,.05)", filter:"blur(80px)", pointerEvents:"none" }} />
      <FloatShape cls="wh-f1" top="20%"    right="10%" size={28} opacity={0.15} shape="square" />
      <FloatShape cls="wh-f2" bottom="20%" left="8%"   size={20} opacity={0.10} shape="ring"   />

      <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center", position:"relative", zIndex:2 }}>
        <div className="wh-r" style={{ marginBottom:24 }}>
          <span className="wh-tag" style={{ background:"rgba(245,158,11,.1)", color:GOLD }}>Active Institutional Engagements</span>
        </div>
        <h2
          className="wh-r"
          style={{
            fontFamily:"'Playfair Display',serif",
            fontSize:"clamp(2.2rem,5vw,4rem)",
            fontWeight:800,
            color:"#fff",
            lineHeight:1.12,
            letterSpacing:"-.02em",
            marginBottom:24,
          }}
        >
          Full transaction memoranda available under NDA to active institutional engagements.
        </h2>
        <p className="wh-r" style={{ fontSize:17, lineHeight:1.7, color:"rgba(255,255,255,.45)", marginBottom:48 }}>
          South India&apos;s industrial land, BTS and development management portfolio.
        </p>
        <div className="wh-r" style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
          <button className="wh-btn-gold"    style={{ padding:"16px 40px" }}>Request Full Package <ArrowRight   size={15} /></button>
          <button className="wh-btn-outline" style={{ padding:"16px 40px" }}>Schedule a Call      <ArrowUpRight size={15} /></button>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   PAGE ROOT
──────────────────────────────────────────────────────────────── */
export default function CaseStudiesPage() {
  useReveal();

  return (
    <div className="wh-root">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <Hero />
      {CASES.map((c) => (
        <CaseStudy key={c.num} data={c} />
      ))}
      <FooterCTA />
    </div>
  );
}