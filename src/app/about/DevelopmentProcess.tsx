"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Search, Layers, Home, Monitor,
  Briefcase, DollarSign, TrendingUp,
  ChevronRight,
} from "lucide-react";

// ─── TOKENS ────────────────────────────────────────────────────────────────────
const P    = "#0A1428";
const G    = "#D4AF37";
const G_LIGHT = "rgba(212,175,55,0.08)";
const G_BORDER = "rgba(212,175,55,0.3)";
const LINE = "rgba(10,20,40,0.06)";
const TEXT_MUTED = "rgba(10,20,40,0.5)";
const EASE = [0.22, 1, 0.36, 1] as const;

// ─── DATA ──────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    Icon: Search,
    title: "Identify Logistics",
    accent: "Corridor",
    desc: "Analyze high-growth zones and strategic connectivity for maximum logistics potential.",
  },
  {
    num: "02",
    Icon: Layers,
    title: "Aggregate & Structure",
    accent: "Land",
    desc: "Secure parcels and clean title documentation for institutional compliance.",
  },
  {
    num: "03",
    Icon: Home,
    title: "Master Planning",
    accent: "& Zoning",
    desc: "Institutional-grade layout and statutory compliance across all parcels.",
  },
  {
    num: "04",
    Icon: Monitor,
    title: "Infrastructure",
    accent: "Development",
    desc: "Roads, utilities, and Grade-A facility construction at scale.",
  },
  {
    num: "05",
    Icon: Briefcase,
    title: "Lease",
    accent: "Stabilization",
    desc: "Securing long-term institutional tenants and operational stability across all assets.",
  },
  {
    num: "06",
    Icon: DollarSign,
    title: "Long-term Asset",
    accent: "Holding",
    desc: "Managing asset performance and yield for sustained institutional-grade returns.",
  },
  {
    num: "07",
    Icon: TrendingUp,
    title: "Exit",
    accent: "Strategy",
    desc: "Strategic divestment or REIT formation at peak institutional value.",
  },
];

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
  step,
  index,
  delay = 0,
}: {
  step: typeof STEPS[0];
  index: number;
  delay?: number;
}) {
  const [hov, setHov] = useState(false);
  const { Icon } = step;

  return (
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
    </div>
  );
}

// ─── ROW DIVIDER ───────────────────────────────────────────────────────────────
function RowDivider() {
  return (
    <div className="flex items-center gap-4 my-10 px-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-black/25">
        <span className="w-1 h-1 rounded-full bg-accent" />
        Continuing Pipeline
        <span className="w-1 h-1 rounded-full bg-accent" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════
export default function DevelopmentModelSection() {
  return (
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
            </div>
          ))}
        </div>

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
        </div>

      </div>
    </section>
  );
}