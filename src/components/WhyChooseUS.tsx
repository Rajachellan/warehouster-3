"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Clock, Users, Star, TrendingUp,
  Monitor, Building2,
} from "lucide-react";

// ─── TOKENS ────────────────────────────────────────────────────────────────────
const P    = "#0A1428";
const P2   = "#0f2040";
const G    = "#D4AF37";
const G2   = "#C9A84C";
const G40  = "rgba(212,175,55,0.40)";
const G20  = "rgba(212,175,55,0.20)";
const G12  = "rgba(212,175,55,0.12)";
const G07  = "rgba(212,175,55,0.07)";
const N08  = "rgba(10,20,40,0.08)";
const N05  = "rgba(10,20,40,0.05)";
const N55  = "rgba(10,20,40,0.55)";
const N40  = "rgba(10,20,40,0.40)";
const N25  = "rgba(10,20,40,0.25)";
const EASE = [0.22, 1, 0.36, 1] as const;

// ─── DATA ──────────────────────────────────────────────────────────────────────
const REASONS = [
  {
    num: "01", phase: "Decade of Experience", label: "Market Expertise",
    BannerIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" className="w-[18px] h-[18px]">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
        <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
      </svg>
    ),
    title: "Deep Corridor", accent: "Intelligence",
    desc: "Over a decade of boots-on-ground insight across South India's fastest-growing industrial and logistics corridors — giving us an irreplaceable first-mover advantage in land sourcing and positioning.",
  },
  {
    num: "02", phase: "Institutional Network", label: "Occupier Network",
    BannerIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" className="w-[18px] h-[18px]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Marquee", accent: "Relationships",
    desc: "Pre-qualified, long-standing relationships with India's most sought-after institutional occupiers — including DHL, Flipkart, Amazon, and Reliance — ensuring faster lease-up and predictable revenue from day one.",
  },
  {
    num: "03", phase: "Grade-A Standard", label: "Quality Assurance",
    BannerIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" className="w-[18px] h-[18px]">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Institutional", accent: "Grade-A Quality",
    desc: "Every project is held to the highest global benchmarks — clear heights up to 40ft, 150mm floor load, 100% power backup, advanced fire systems, and sustainability certifications that satisfy the strictest investor mandates.",
  },
  {
    num: "04", phase: "End-to-End Execution", label: "Full Lifecycle",
    BannerIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" className="w-[18px] h-[18px]">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: "Proven", accent: "Execution Model",
    desc: "From land sourcing and statutory compliance through master planning, construction, lease stabilization, and eventual REIT-ready exit — our seven-phase model delivers measurable outcomes at every milestone.",
  },
];

const MINI_STATS = [
  { val: "330+", label: "Acres of strategic\nland in pipeline"         },
  { val: "5 Mn", label: "Square feet of\nleasable space"               },
  { val: "10+",  label: "Marquee institutional\nclient relationships"   },
  { val: "₹2B+", label: "Asset value\nunder management"                },
];

const TRUSTED = ["Blackstone", "ESR", "Indospace"];

// ─── COUNT UP ──────────────────────────────────────────────────────────────────
function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  if (isInView && !started.current) {
    started.current = true;
    const step = end / (1400 / (1000 / 60));
    let current = 0;
    const t = setInterval(() => {
      current += step;
      if (current >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(current));
    }, 1000 / 60);
  }
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── PILL ───────────────────────────────────────────────────────────────────────
function Pill({ label }: { label: string }) {
  return (
    <div
      className="inline-flex items-center gap-[7px] px-[14px] py-[5px] rounded-full border text-[9px] font-black uppercase tracking-[0.32em] font-sans mb-5"
      style={{ borderColor: G40, background: G07, color: G }}
    >
      <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 animate-pulse" style={{ background: G }} />
      {label}
    </div>
  );
}

// ─── REASON CARD ───────────────────────────────────────────────────────────────
function ReasonCard({ r, index }: { r: typeof REASONS[0]; index: number }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="relative flex flex-col overflow-hidden rounded-[24px] bg-white cursor-default"
      style={{
        border: `1.5px solid ${hov ? G40 : N08}`,
        boxShadow: hov
          ? `0 12px 48px rgba(212,175,55,0.09), 0 2px 14px rgba(10,20,40,0.05)`
          : `0 2px 10px rgba(10,20,40,0.04)`,
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition: "border-color .35s, box-shadow .35s, transform .35s",
      }}
    >
      {/* Top navy bar */}
      <div
        className="absolute top-0 left-5 right-5 h-[2px] rounded-b"
        style={{
          background: `linear-gradient(to right, ${P2}, rgba(15,32,64,0.12))`,
          opacity: hov ? 1 : 0, transition: "opacity .35s",
        }}
      />
      {/* Bottom gold sweep */}
      <div
        className="absolute bottom-0 left-0 h-[2.5px] rounded-b-[24px]"
        style={{
          width: hov ? "100%" : "0%",
          background: `linear-gradient(to right, ${G}, ${G2})`,
          transition: "width .5s cubic-bezier(.22,1,.36,1)",
        }}
      />
      {/* Corner bracket TL */}
      <div className="absolute top-[16px] left-[16px]" style={{ width: hov ? 26 : 18, height: hov ? 26 : 18, borderTop: `1.5px solid ${hov ? G : G20}`, borderLeft: `1.5px solid ${hov ? G : G20}`, transition: "all .3s" }} />
      {/* Corner bracket BR */}
      <div className="absolute bottom-[16px] right-[16px]" style={{ width: hov ? 26 : 18, height: hov ? 26 : 18, borderBottom: `1.5px solid ${hov ? G : G20}`, borderRight: `1.5px solid ${hov ? G : G20}`, transition: "all .3s" }} />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-7">

        {/* Navy icon banner */}
        <div
          className="relative w-full h-[72px] rounded-2xl mb-5 flex items-center gap-[14px] px-[18px] overflow-hidden flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${P2} 0%, #1a3060 100%)` }}
        >
         
          <span className="font-serif font-black leading-none select-none flex-shrink-0 relative z-10" style={{ fontSize: 32, color: "rgba(212,175,55,0.22)", letterSpacing: "-0.03em" }}>{r.num}</span>
          <div className="w-px h-9 flex-shrink-0 relative z-10" style={{ background: "rgba(212,175,55,0.15)" }} />
          <div className="w-[38px] h-[38px] flex items-center justify-center rounded-[10px] flex-shrink-0 relative z-10" style={{ background: hov ? "rgba(212,175,55,0.22)" : "rgba(212,175,55,0.12)", border: `1px solid ${hov ? "rgba(212,175,55,0.5)" : "rgba(212,175,55,0.25)"}`, transition: "all .3s" }}>
            {r.BannerIcon}
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.28em] leading-[1.5] relative z-10" style={{ color: "rgba(212,175,55,0.55)" }}>{r.phase}</span>
        </div>

        {/* Category pill */}
        <div
          className="inline-flex items-center self-start px-[10px] py-[4px] rounded-full border text-[8px] font-black uppercase tracking-[0.28em] font-sans mb-[14px]"
          style={{ borderColor: hov ? G40 : N08, background: hov ? G07 : N05, color: hov ? G : N40, transition: "all .3s" }}
        >
          {r.label}
        </div>

        {/* Title */}
        <h3 className="font-serif font-black leading-[1.1] mb-2" style={{ fontSize: "clamp(18px,2.2vw,23px)", color: P, letterSpacing: "-0.015em" }}>
          {r.title} <em className="not-italic" style={{ color: G }}>{r.accent}</em>
        </h3>

        {/* Gold rule */}
        <div className="h-px mb-3" style={{ width: hov ? 40 : 22, background: G, opacity: hov ? 0.9 : 0.45, transition: "width .35s, opacity .35s" }} />

        {/* Description */}
        <p className="text-[12px] leading-[1.85] font-sans flex-1" style={{ color: N55 }}>
          {r.desc}
        </p>
      </div>
    </motion.div>
  );
}

// ─── MINI STAT ─────────────────────────────────────────────────────────────────
function MiniStat({ val, label, index }: { val: string; label: string; index: number }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="flex items-center gap-4 px-5 py-[18px] rounded-[18px] border bg-white"
      style={{
        border: `1.5px solid ${hov ? G40 : N08}`,
        boxShadow: hov ? `0 4px 20px rgba(212,175,55,0.08)` : "none",
        transition: "border-color .3s, box-shadow .3s",
      }}
    >
      <span className="font-serif font-black leading-none flex-shrink-0" style={{ fontSize: 26, color: G, minWidth: 56 }}>
        {val}
      </span>
      <div className="w-px h-8 flex-shrink-0" style={{ background: N08 }} />
      <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-[1.55] whitespace-pre-line" style={{ color: N55 }}>
        {label}
      </span>
    </motion.div>
  );
}

// ─── SUCCESS CARD ──────────────────────────────────────────────────────────────
function SuccessCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
      className="relative overflow-hidden rounded-[22px] p-7"
      style={{ border: `1px solid rgba(212,175,55,0.28)`, background: "#FDFBF4" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-[10px] flex-shrink-0" style={{ background: G12, border: `1px solid rgba(212,175,55,0.28)` }}>
          <Monitor size={16} style={{ color: G }} strokeWidth={1.6} />
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.32em] font-sans" style={{ color: G }}>Proof of Execution</p>
          <p className="font-serif font-black text-[14px] uppercase tracking-tight" style={{ color: P }}>Redhills, Chennai</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {[{ end: 25, suffix: " ac", label: "Greenfield Park" }, { end: 14, suffix: " mo", label: "Fully Leased" }].map((s, i) => (
          <div key={i} className="px-4 py-4 rounded-xl" style={{ background: N05, border: `1px solid ${N08}` }}>
            <p className="font-serif font-black leading-none mb-1" style={{ fontSize: 28, color: G }}>
              <CountUp end={s.end} suffix={s.suffix} />
            </p>
            <p className="text-[8.5px] font-black uppercase tracking-[0.22em] font-sans" style={{ color: N40 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="flex items-start gap-3">
        <TrendingUp size={13} strokeWidth={1.6} style={{ color: "rgba(212,175,55,0.5)", flexShrink: 0, marginTop: 2 }} />
        <p className="text-[11.5px] font-sans leading-[1.75]" style={{ color: N55 }}>
          Fully leased to institutional-grade occupiers — a validated proof-point of our integrated development approach.
        </p>
      </div>

      {/* Bottom rule */}
      <div className="mt-5 h-px" style={{ background: `linear-gradient(to right, rgba(212,175,55,0.3), transparent)` }} />

      {/* Trusted by */}
      <div className="flex items-center gap-3 flex-wrap mt-4">
        <span className="text-[9px] font-black uppercase tracking-[0.35em] font-sans" style={{ color: "rgba(212,175,55,0.5)" }}>Trusted by</span>
        {TRUSTED.map((name) => (
          <div
            key={name}
            className="inline-flex items-center gap-2 px-[14px] py-[5px] rounded-full border text-[9px] font-black uppercase tracking-[0.18em] font-sans cursor-default transition-all duration-250 hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(212,175,55,0.07)]"
            style={{ border: `1px solid ${N08}`, background: N05, color: N40 }}
          >
            <span className="w-[4px] h-[4px] rounded-full flex-shrink-0" style={{ background: G, opacity: 0.6 }} />
            {name}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function WhyUsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden px-6">

      {/* Ghost watermark */}
      <div
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 font-serif font-black select-none pointer-events-none uppercase"
        style={{ fontSize: "clamp(140px,18vw,220px)", color: "rgba(10,20,40,0.025)", lineHeight: 1, letterSpacing: "-0.04em" }}
      >
        WHY
      </div>

      {/* Hatch texture top-right */}
      <svg className="absolute top-0 right-0 w-56 h-56 pointer-events-none select-none" style={{ opacity: 0.03 }} viewBox="0 0 224 224">
        <defs><pattern id="hatch-why" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="14" stroke="#0A1428" strokeWidth="0.7" /></pattern></defs>
        <rect width="224" height="224" fill="url(#hatch-why)" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14"
        >
          <Pill label="Strategic Excellence" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-serif font-black uppercase leading-[0.93] tracking-[-0.022em]"
              style={{ fontSize: "clamp(38px,5.5vw,64px)", color: P }}
            >
              Why <em className="not-italic" style={{ color: G }}>Warehouster?</em>
            </h2>
            <p
              className="text-sm leading-relaxed max-w-[260px] md:text-right font-sans"
              style={{ color: N55, borderRight: `2px solid ${G40}`, paddingRight: 16 }}
            >
              Unmatched combination of institutional expertise, occupier relationships, and execution discipline.
            </p>
          </div>
          {/* Gold gradient rule */}
          <div className="mt-10 h-px" style={{ background: `linear-gradient(to right, ${G}, rgba(212,175,55,0.15), transparent)` }} />
        </motion.div>

        {/* ── 4 REASON CARDS — equal height via items-stretch ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch mb-5">
          {REASONS.map((r, i) => <ReasonCard key={r.num} r={r} index={i} />)}
        </div>

        {/* ── BOTTOM ROW: Success card + Mini stats ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          <SuccessCard />
          <div className="flex flex-col gap-[14px]">
            {MINI_STATS.map((s, i) => (
              <MiniStat key={s.val} val={s.val} label={s.label} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}