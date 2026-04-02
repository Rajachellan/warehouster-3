"use client";

import { useState } from "react";

<<<<<<< Updated upstream
// ─── TOKENS ────────────────────────────────────────────────────────────────────
const P    = "#0A1428";
const G    = "#D4AF37";
const G_LIGHT = "rgba(212,175,55,0.08)";
const G_BORDER = "rgba(212,175,55,0.3)";
const LINE = "rgba(10,20,40,0.06)";
const TEXT_MUTED = "rgba(10,20,40,0.5)";
const EASE = [0.22, 1, 0.36, 1] as const;

// ─── DATA ──────────────────────────────────────────────────────────────────────
=======
>>>>>>> Stashed changes
const STEPS = [
  {
    num: "01",
    phase: "Acquisition",
    tag: "Discovery",
    title: "Identify Logistics",
    accent: "Corridor",
    desc: "Analyze high-growth zones and strategic connectivity for maximum logistics potential.",
  },
  {
    num: "02",
    phase: "Consolidation",
    tag: "Legal",
    title: "Aggregate & Structure",
    accent: "Land",
    desc: "Secure parcels and clean title documentation for institutional compliance.",
  },
  {
    num: "03",
    phase: "Design",
    tag: "Statutory",
    title: "Master Planning",
    accent: "& Zoning",
    desc: "Institutional-grade layout and statutory compliance across all parcels.",
  },
  {
    num: "04",
    phase: "Build",
    tag: "Construction",
    title: "Infrastructure",
    accent: "Development",
    desc: "Roads, utilities, and Grade-A facility construction at scale.",
  },
  {
    num: "05",
    phase: "Occupancy",
    tag: "Tenancy",
    title: "Lease",
    accent: "Stabilization",
    desc: "Securing long-term institutional tenants and operational stability across all assets.",
  },
  {
    num: "06",
    phase: "Performance",
    tag: "Yield",
    title: "Long-term Asset",
    accent: "Holding",
    desc: "Managing asset performance and yield for sustained institutional-grade returns.",
  },
  {
    num: "07",
    phase: "Realisation",
    tag: "Divestment",
    title: "Exit",
    accent: "Strategy",
    desc: "Strategic divestment or REIT formation at peak institutional value.",
    isFinal: true,
  },
];

<<<<<<< Updated upstream
const ROW1 = STEPS.slice(0, 4);
const ROW2 = STEPS.slice(4, 7);

// ─── PILL ──────────────────────────────────────────────────────────────────────
function Pill({ label }: { label: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
      style={{ borderColor: G_BORDER, background: G_LIGHT }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ background: G }}
      />
      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accent" style={{ color: G }}>
        {label}
      </span>
    </div>
  );
}

// ─── STEP CARD ─────────────────────────────────────────────────────────────────
function StepCard({
=======
function StepItem({
>>>>>>> Stashed changes
  step,
  isLast,
}: {
  step: (typeof STEPS)[0];
  isLast: boolean;
}) {
  const [hov, setHov] = useState(false);

  return (
<<<<<<< Updated upstream
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="relative p-8 rounded-[32px] bg-white border h-full flex flex-col transition-all duration-500"
      style={{
        borderColor: hov ? G : LINE,
        boxShadow: hov ? `0 20px 40px rgba(212,175,55,0.1)` : "none",
        transform: hov ? "translateY(-5px)" : "none",
      }}
    >
      {/* Number Badge - Fixed Top Left Style */}
      <div 
        className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white mb-6"
        style={{ background: P }}
      >
        {step.num}
      </div>

      {/* Decorative Corner Brackets */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l opacity-20" style={{ borderColor: hov ? G : P }} />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r opacity-20" style={{ borderColor: hov ? G : P }} />

      {/* Icon in Light Container */}
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-colors duration-300"
        style={{ 
          background: hov ? G_LIGHT : "rgba(10,20,40,0.02)", 
          borderColor: hov ? G_BORDER : LINE 
        }}
      >
        <Icon size={20} style={{ color: hov ? G : P }} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-serif font-black leading-tight uppercase tracking-tighter mb-3" style={{ color: P }}>
        {step.title} <span style={{ color: G }}>{step.accent}</span>
      </h3>
      
      <p className="text-[11px] leading-relaxed font-sans font-medium" style={{ color: TEXT_MUTED }}>
        {step.desc}
      </p>

      {/* Hover Status Bar */}
      <div 
        className="absolute bottom-0 left-8 right-8 h-[2px] transition-all duration-500 rounded-full"
        style={{ 
            background: G,
            opacity: hov ? 1 : 0,
            transform: hov ? "scaleX(1)" : "scaleX(0)" 
        }} 
      />
    </motion.div>
  );
}

// ─── ARROW CONNECTOR ───────────────────────────────────────────────────────────
function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center self-start mt-12 flex-shrink-0 w-7 text-black/10">
      <ChevronRight size={18} strokeWidth={1} />
=======
    <div
      className="flex items-start"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Node column */}
      <div className="flex flex-col items-center flex-shrink-0 w-11">
        {/* Dot ring */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            border: `1px solid ${hov || step.isFinal
              ? "rgba(201,168,76,0.65)"
              : "rgba(201,168,76,0.18)"
              }`,
            background: hov ? "rgba(201,168,76,0.07)" : "transparent",
          }}
        >
          <div
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background:
                hov || step.isFinal ? "#C9A84C" : "rgba(201,168,76,0.4)",
              transform:
                hov || step.isFinal ? "scale(1.4)" : "scale(1)",
            }}
          />
        </div>

        {/* Connector */}
        {!isLast && (
          <div
            className="w-px flex-1 min-h-6"
            style={{
              background:
                "linear-gradient(to bottom, rgba(201,168,76,0.25), rgba(201,168,76,0.05))",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pl-7 relative ${isLast ? "" : "pb-10"}`}>
        {/* Left accent on hover */}
        <div
          className="absolute left-0 top-0 w-px transition-all duration-500"
          style={{
            bottom: isLast ? 0 : "40px",
            background: hov
              ? "linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0))"
              : "transparent",
          }}
        />

        {/* Step counter — font-sans font-black uppercase tracking-widest (matches reference) */}
        <p className="font-sans font-black text-[9px] uppercase tracking-widest mb-2 transition-colors duration-300"
          style={{ color: hov ? "#C9A84C" : "rgba(201,168,76,0.45)" }}
        >
          {step.num} — {step.phase}
        </p>

        {/* Title row */}
        <div className="flex items-baseline gap-3 flex-wrap mb-3">
          {/* font-serif font-black uppercase tracking-tighter — exact match to h2 in reference */}
          <h3
            className="font-serif font-black uppercase tracking-tighter leading-tight text-primary transition-colors duration-300 text-2xl md:text-3xl lg:text-4xl"
          >
            {step.title}{" "}
            <span className="text-accent">{step.accent}</span>
          </h3>

          {/* Tag pill — font-sans font-black uppercase tracking-widest (matches button style) */}
          <span
            className="font-sans font-black text-[9px] uppercase tracking-widest px-3 py-1 leading-none transition-all duration-300"
            style={{
              color: hov ? "#C9A84C" : "rgba(201,168,76,0.45)",
              border: `1px solid ${hov ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.15)"
                }`,
            }}
          >
            {step.tag}
          </span>
        </div>

        {/* Gold bar */}
        <div
          className="h-px mb-3 transition-all duration-300"
          style={{
            width: hov || step.isFinal ? 56 : 28,
            background: "#C9A84C",
            opacity: hov || step.isFinal ? 0.8 : 0.3,
          }}
        />

        {/* Description — text-lg font-medium text-primary/60 (matches reference body copy) */}
        <p className="font-sans font-medium text-base md:text-lg text-primary/60 leading-relaxed max-w-xl transition-colors duration-300"
          style={{ color: hov ? "var(--color-primary, #0A1428)" : undefined }}
        >
          {step.desc}
        </p>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

function PipelineDivider() {
  return (
<<<<<<< Updated upstream
    <div className="flex items-center gap-4 my-10 px-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-black/25">
        <span className="w-1 h-1 rounded-full bg-accent" />
        Continuing Pipeline
        <span className="w-1 h-1 rounded-full bg-accent" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
=======
    <div className="flex items-center gap-3 ml-11 pl-7 pt-2 pb-6">
      <div
        className="h-px w-10 flex-shrink-0"
        style={{
          background:
            "linear-gradient(to right, rgba(201,168,76,0.28), transparent)",
        }}
      />
      <div
        className="w-[5px] h-[5px] flex-shrink-0 rotate-45"
        style={{ background: "rgba(201,168,76,0.4)" }}
      />
      {/* font-sans font-black uppercase tracking-widest — consistent with section style */}
      <span className="font-sans font-black text-[9px] uppercase tracking-widest whitespace-nowrap text-primary/30">
        Continuing Pipeline
      </span>
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(201,168,76,0.1))",
        }}
      />
>>>>>>> Stashed changes
    </div>
  );
}

export default function DevelopmentModelSection() {
  return (
<<<<<<< Updated upstream
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Pill label="End-to-End Value Creation" />
            <h2 className="text-4xl md:text-6xl font-serif font-black uppercase leading-[0.95] tracking-tighter" style={{ color: P }}>
              Our Development <br />
              <span style={{ color: G }}>Model</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 pl-6 md:pl-0 md:pr-6"
            style={{ borderColor: G_BORDER }}
          >
            <p className="text-[13px] leading-relaxed font-sans font-medium" style={{ color: TEXT_MUTED }}>
              Seven integrated phases that transform raw land into India's most sought-after institutional-grade industrial assets.
            </p>
          </motion.div>
        </div>

        {/* ── GRID: ROW 1 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_28px_1fr_28px_1fr_28px_1fr] gap-4 items-stretch mb-6">
          {ROW1.map((step, i) => (
            <div key={step.num} className="contents">
              <StepCard step={step} index={i} delay={i * 0.07} />
              {i < ROW1.length - 1 && <Arrow />}
=======
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow — font-sans font-black uppercase tracking-widest (matches button text style) */}
        <div className="inline-flex items-center gap-2.5 mb-10">
          <span
            className="w-[5px] h-[5px] rounded-full animate-pulse flex-shrink-0"
            style={{ background: "#C9A84C" }}
          />
          <span className="font-sans font-black text-[9px] uppercase tracking-widest text-accent">
            End-to-End Value Creation
          </span>
        </div>

        {/* Section heading — exact match: font-serif font-black uppercase tracking-tighter */}
        <div className="mb-4">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight uppercase tracking-tighter mb-6">
            Our Development{" "}
            <span className="text-accent">Model</span>
          </h2>

          {/* Body copy — exact match: text-lg md:text-xl font-medium text-primary/60 leading-relaxed */}
          <p className="text-lg md:text-xl text-primary/60 font-medium leading-relaxed max-w-2xl mb-10">
            Seven integrated phases that transform raw land into India&apos;s most
            sought-after institutional-grade industrial assets.
          </p>
        </div>

        {/* Gold rule */}
        <div
          className="h-px mb-14"
          style={{
            background:
              "linear-gradient(to right, rgba(201,168,76,0.4), rgba(201,168,76,0.08), transparent)",
          }}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Spine */}
          <div
            className="absolute left-[22px] top-0 bottom-0 w-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(201,168,76,0.4), rgba(201,168,76,0.08), transparent)",
            }}
          />

          {STEPS.map((step, i) => (
            <div key={step.num}>
              <StepItem step={step} isLast={i === STEPS.length - 1} />
              {i === 3 && <PipelineDivider />}
>>>>>>> Stashed changes
            </div>
          ))}
        </div>

<<<<<<< Updated upstream
        {/* ── ROW DIVIDER ── */}
        <RowDivider />

        {/* ── ROW 2: Steps 05–07 (3 columns centered width) ── */}
        <div className="lg:max-w-[75%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_28px_1fr_28px_1fr] gap-4 items-stretch">
            {ROW2.map((step, i) => (
                <div key={step.num} className="contents">
                <StepCard step={step} index={i + 4} delay={i * 0.07} />
                {i < ROW2.length - 1 && <Arrow />}
                </div>
            ))}
            </div>
=======
        {/* Footer strip */}
        <div
          className="flex items-center justify-between mt-12 pt-5"
          style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
        >
          <span className="font-sans font-black text-[9px] uppercase tracking-widest text-primary/30">
            Integrated Development Pipeline — India
          </span>
          <div className="flex items-center gap-2">
            <span
              className="w-[3px] h-[3px] rounded-full inline-block flex-shrink-0"
              style={{ background: "rgba(201,168,76,0.5)" }}
            />
            <span className="font-sans font-black text-[9px] uppercase tracking-widest text-accent/50">
              Industrial Real Estate
            </span>
          </div>
>>>>>>> Stashed changes
        </div>

      </div>
    </section>
  );
}