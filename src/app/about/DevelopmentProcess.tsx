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
const P2   = "#0f1f3d";
const G    = "#D4AF37";
const G2   = "#C9A84C";
const G35  = "rgba(212,175,55,0.35)";
const G20  = "rgba(212,175,55,0.20)";
const G10  = "rgba(212,175,55,0.10)";
const G07  = "rgba(212,175,55,0.07)";
const N08  = "rgba(10,20,40,0.08)";
const N05  = "rgba(10,20,40,0.05)";
const N50  = "rgba(10,20,40,0.50)";
const N25  = "rgba(10,20,40,0.25)";
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
      className="inline-flex items-center gap-[7px] px-[14px] py-[6px] rounded-full border text-[9px] font-black uppercase tracking-[0.35em] font-sans mb-5"
      style={{ borderColor: G35, background: G07, color: G }}
    >
      <span
        className="w-[5px] h-[5px] rounded-full flex-shrink-0 animate-pulse"
        style={{ background: G }}
      />
      {label}
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="relative flex flex-col p-7 rounded-[24px] overflow-hidden bg-white cursor-default"
      style={{
        border: `1.5px solid ${hov ? G35 : N08}`,
        boxShadow: hov
          ? `0 10px 44px ${G10}, 0 2px 14px rgba(10,20,40,0.05)`
          : `0 2px 10px rgba(10,20,40,0.04)`,
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition: "border-color .35s, box-shadow .35s, transform .35s",
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-5 right-5 h-[2px] rounded-b transition-opacity duration-400"
        style={{
          background: `linear-gradient(to right, ${P2}, rgba(10,31,61,0.15))`,
          opacity: hov ? 1 : 0,
        }}
      />

      {/* Bottom gold sweep */}
      <div
        className="absolute bottom-0 left-0 h-[2px] rounded-b-[24px] transition-all duration-500"
        style={{
          width: hov ? "100%" : "0%",
          background: `linear-gradient(to right, ${G}, ${G2})`,
        }}
      />

      {/* Corner brackets */}
      <div
        className="absolute top-[14px] left-[14px] transition-all duration-300"
        style={{
          width: hov ? 24 : 16,
          height: hov ? 24 : 16,
          borderTop: `1.5px solid ${hov ? G : G20}`,
          borderLeft: `1.5px solid ${hov ? G : G20}`,
        }}
      />
      <div
        className="absolute bottom-[14px] right-[14px] transition-all duration-300"
        style={{
          width: hov ? 24 : 16,
          height: hov ? 24 : 16,
          borderBottom: `1.5px solid ${hov ? G : G20}`,
          borderRight: `1.5px solid ${hov ? G : G20}`,
        }}
      />

      {/* Badge + spacer */}
      <div className="flex items-center justify-between mb-5">
        {/* Number badge */}
        <div
          className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[9px] font-black tracking-[0.15em] text-white transition-all duration-300"
          style={{
            background: hov ? G : P2,
            boxShadow: hov ? `0 4px 14px ${G35}` : `0 2px 8px rgba(10,31,61,0.25)`,
          }}
        >
          {step.num}
        </div>
      </div>

      {/* Icon */}
      <div
        className="w-10 h-10 flex items-center justify-center rounded-xl border mb-[14px] transition-all duration-300"
        style={{
          borderColor: hov ? G35 : N08,
          background: hov ? G07 : N05,
        }}
      >
        <Icon
          size={18}
          strokeWidth={1.6}
          style={{ color: hov ? G : P, transition: "color .3s" }}
        />
      </div>

      {/* Title */}
      <h3
        className="font-serif font-black leading-[1.15] mb-[8px]"
        style={{ fontSize: "clamp(15px,1.5vw,18px)", color: P, letterSpacing: "-0.01em" }}
      >
        {step.title}{" "}
        <em className="not-italic" style={{ color: G }}>
          {step.accent}
        </em>
      </h3>

      {/* Gold rule */}
      <div
        className="h-px mb-[10px] transition-all duration-300"
        style={{ width: hov ? 36 : 20, background: G, opacity: hov ? 0.9 : 0.45 }}
      />

      {/* Desc */}
      <p className="text-[11.5px] leading-[1.8] font-sans" style={{ color: N50 }}>
        {step.desc}
      </p>
    </motion.div>
  );
}

// ─── ARROW CONNECTOR ───────────────────────────────────────────────────────────
function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center self-start mt-[52px] flex-shrink-0 w-5">
      <ChevronRight size={16} strokeWidth={1.5} style={{ color: G35 }} />
    </div>
  );
}

// ─── ROW DIVIDER ───────────────────────────────────────────────────────────────
function RowDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex items-center gap-3 my-5 px-1"
    >
      <div
        className="flex-1 h-px"
        style={{ background: `linear-gradient(to right, ${G20}, transparent)` }}
      />
      <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.35em] font-sans flex-shrink-0" style={{ color: N25 }}>
        <span className="w-[5px] h-[5px] rounded-full" style={{ background: G, opacity: 0.5 }} />
        Continuing Pipeline
        <span className="w-[5px] h-[5px] rounded-full" style={{ background: G, opacity: 0.5 }} />
      </div>
      <div
        className="flex-1 h-px"
        style={{ background: `linear-gradient(to left, ${G20}, transparent)` }}
      />
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════
export default function DevelopmentModelSection() {
  return (
    <section className="relative bg-white overflow-hidden py-20 px-6">

      {/* Hatch SVG top-right */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none select-none"
        style={{ opacity: 0.03 }}
        viewBox="0 0 256 256"
      >
        <defs>
          <pattern id="hatch-dev" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="16" stroke="#0A1428" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="256" height="256" fill="url(#hatch-dev)" />
      </svg>

      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14"
        >
          <Pill label="End-to-End Value Creation" />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-serif font-black uppercase leading-[0.93] tracking-[-0.025em]"
              style={{ fontSize: "clamp(36px,5.5vw,64px)", color: P }}
            >
              Our Development{" "}
              <em className="not-italic" style={{ color: G }}>Model</em>
            </h2>

            <p
              className="text-[13px] leading-[1.7] font-sans max-w-[340px] md:text-right"
              style={{
                color: N50,
                borderRight: `2px solid ${G35}`,
                paddingRight: 16,
              }}
            >
              Seven integrated phases that transform raw land into India's most
              sought-after institutional-grade industrial assets.
            </p>
          </div>

          {/* Gold gradient rule */}
          <div
            className="mt-10 h-px"
            style={{ background: `linear-gradient(to right, ${G}, ${G20}, transparent)` }}
          />
        </motion.div>

        {/* ── ROW 1: Steps 01–04 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_20px_1fr_20px_1fr_20px_1fr] gap-y-4 gap-x-0 items-start">
          {ROW1.map((step, i) => (
            <>
              <StepCard key={step.num} step={step} index={i} delay={i * 0.07} />
              {i < ROW1.length - 1 && <Arrow key={`arrow-${i}`} />}
            </>
          ))}
        </div>

        {/* ── ROW DIVIDER ── */}
        <RowDivider />

        {/* ── ROW 2: Steps 05–07 (left-aligned, 75% width) ── */}
        <div className="lg:max-w-[calc(75%+28px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_20px_1fr_20px_1fr] gap-y-4 gap-x-0 items-start">
            {ROW2.map((step, i) => (
              <>
                <StepCard key={step.num} step={step} index={i + 4} delay={i * 0.07} />
                {i < ROW2.length - 1 && <Arrow key={`arrow2-${i}`} />}
              </>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}