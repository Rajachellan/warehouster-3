"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, Briefcase, DollarSign,
  Home, Users, CheckCircle, Clock, Star,
} from "lucide-react";

// ─── TOKENS ────────────────────────────────────────────────────────────────────
const P    = "#0A1428";
const P2   = "#0f2040";
const G    = "#D4AF37";
const G2   = "#C9A84C";
const G40  = "rgba(212,175,55,0.40)";
const G20  = "rgba(212,175,55,0.20)";
const G12  = "rgba(212,175,55,0.12)";
const G10  = "rgba(212,175,55,0.10)";
const G07  = "rgba(212,175,55,0.07)";
const N08  = "rgba(10,20,40,0.08)";
const N05  = "rgba(10,20,40,0.05)";
const N55  = "rgba(10,20,40,0.55)";
const EASE = [0.22, 1, 0.36, 1] as const;

// ─── DATA ──────────────────────────────────────────────────────────────────────
const PHASES = [
  {
    quarter: "Q1-2 · Mo. 1-3",
    highlight: false,
    highlightLabel: "",
    Icon: Search,
    title: "Land Sourcing & Due Diligence",
    bullets: ["Off-market identification", "Site selection & feasibility", "Title verification", "Soil testing & diligence"],
  },
  {
    quarter: "Q2-3 · Mo. 4-6",
    highlight: false,
    highlightLabel: "",
    Icon: Briefcase,
    title: "SPV Structuring & Approvals",
    bullets: ["SPV creation", "DTCP layout approval", "Environmental clearance", "Utility planning"],
  },
  {
    quarter: "Q3-4 · Mo. 7-9",
    highlight: false,
    highlightLabel: "Capital Phase",
    Icon: DollarSign,
    title: "Capital Deployment",
    bullets: ["Equity syndication", "Construction finance", "LRD structuring", "Budget finalization"],
  },
  {
    quarter: "Q4-6 · Mo. 10-15",
    highlight: false,
    highlightLabel: "",
    Icon: Home,
    title: "Development & Construction",
    bullets: ["Site prep & earthwork", "Foundation & structure", "PEB erection", "MEP & fire safety"],
  },
  {
    quarter: "Q6-7 · Mo. 13-18",
    highlight: false,
    highlightLabel: "Revenue Phase",
    Icon: Users,
    title: "Leasing & Stabilization",
    bullets: ["Pre-leasing marketing", "Tenant negotiations", "Lease documentation", "Fit-out coordination"],
  },
  {
    quarter: "Q7-8 · Mo. 16-21",
    highlight: false,
    highlightLabel: "",
    Icon: CheckCircle,
    title: "Completion & Handover",
    bullets: ["NOI optimization", "Final documentation", "Tenant handover", "Exit / Refinancing"],
  },
];

// ─── PILL ───────────────────────────────────────────────────────────────────────
function Pill({ label }: { label: string }) {
  return (
    <div
      className="inline-flex items-center gap-[7px] px-[14px] py-[5px] rounded-full border text-[9px] font-black uppercase tracking-[0.32em] font-sans mb-4"
      style={{ borderColor: G40, background: G07, color: G }}
    >
      <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 animate-pulse" style={{ background: G }} />
      {label}
    </div>
  );
}

// ─── PHASE COLUMN ──────────────────────────────────────────────────────────────
function PhaseColumn({ phase, index }: { phase: typeof PHASES[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const { Icon, highlight } = phase;
  const lit = hov || highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: EASE }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      /* flex-col + flex-1 on card = equal height within CSS grid row */
      className="flex flex-col"
    >
      {/* Quarter pill */}
      <div
        className="self-center px-[10px] py-[5px] rounded-full border text-[12px] font-black uppercase tracking-[0.18em] whitespace-nowrap mb-[18px] transition-all duration-300"
        style={
          highlight
            ? { borderColor: G, background: G07, color: G }
            : {
                borderColor: hov ? G40 : P2,
                background: hov ? G07 : P2,
                color: hov ? G : "#fff",
                boxShadow: "0 2px 8px rgba(10,20,40,0.18)",
              }
        }
      >
        {phase.quarter}
      </div>

      {/* Node on the connector line */}
      <div className="flex justify-center mb-[18px]">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 + index * 0.1, type: "spring", stiffness: 260, damping: 16 }}
          className="relative flex-shrink-0"
          style={{
            width: 20, height: 20, borderRadius: "50%",
            border: `2px solid ${lit ? G : P2}`,
            background: "#fff",
            boxShadow: lit ? `0 0 0 5px ${G10}` : "none",
            transition: "border-color .35s, box-shadow .35s",
          }}
        >
          <div
            className="absolute inset-1 rounded-full transition-all duration-300"
            style={{ background: lit ? G : P2 }}
          />
        </motion.div>
      </div>

      {/* ── CARD ── flex:1 ensures equal height across all columns */}
      <div
        className="relative flex flex-col flex-1 overflow-hidden rounded-[20px]"
        style={{
          border: `1.5px solid ${lit ? G40 : N08}`,
          background: highlight ? "linear-gradient(160deg,#fffef7 0%,#fff 100%)" : "#fff",
          boxShadow: highlight
            ? hov
              ? `0 16px 56px rgba(212,175,55,0.15), 0 2px 14px rgba(10,20,40,0.05)`
              : `0 4px 24px ${G12}, 0 1px 8px rgba(10,20,40,0.04)`
            : hov
            ? `0 14px 48px ${G10}, 0 2px 14px rgba(10,20,40,0.05)`
            : `0 2px 8px rgba(10,20,40,0.04)`,
          transform: hov ? "translateY(-4px)" : "translateY(0)",
          transition: "border-color .35s, box-shadow .35s, transform .35s",
          padding: "20px 16px 18px",
        }}
      >
        {/* Top bar — gold always-on for highlighted, fade-in on hover for normal */}
        <div
          className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-[20px]"
          style={{
            background: `linear-gradient(to right, ${G}, ${G2})`,
            opacity: highlight ? 1 : hov ? 1 : 0,
            transition: "opacity .35s",
          }}
        />

        {/* Bottom gold sweep */}
        <div
          className="absolute bottom-0 left-0 h-[2px] rounded-b-[20px]"
          style={{
            width: lit ? "100%" : "0%",
            background: `linear-gradient(to right, ${G}, rgba(212,175,55,0.4))`,
            transition: "width .5s cubic-bezier(.22,1,.36,1)",
          }}
        />

        {/* Highlight radial glow */}
        {highlight && (
          <div
            className="absolute inset-0 rounded-[20px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 65%)" }}
          />
        )}

        {/* ── Gold star badge for highlighted phases ── */}
        {highlight && (
          <div
            className="inline-flex items-center gap-[4px] self-start px-[8px] py-[2px] rounded-full border mb-[8px] relative z-10 text-[7.5px] font-black uppercase tracking-[0.2em]"
            style={{ borderColor: G40, background: G07, color: G }}
          >
            <Star size={8} strokeWidth={2} style={{ color: G }} />
            {phase.highlightLabel}
          </div>
        )}

        {/* Icon + title */}
        <div className="flex items-start gap-[9px] mb-3 relative z-10">
          <div
            className="w-[30px] h-[30px] flex items-center justify-center rounded-[9px] flex-shrink-0 border transition-all duration-300"
            style={{
              borderColor: lit ? G40 : N08,
              background:  lit ? G07  : N05,
            }}
          >
            <Icon
              size={14}
              strokeWidth={1.6}
              style={{ color: lit ? G : "rgba(10,20,40,0.35)", transition: "color .3s" }}
            />
          </div>
          <h3
            className="font-serif font-black leading-[1.2]"
            style={{ fontSize: 14, color: P, letterSpacing: "-0.01em", marginTop: 2 }}
          >
            {phase.title}
          </h3>
        </div>

        {/* Gold divider */}
        <div
          className="h-px mb-[10px] relative z-10"
          style={{
            background: lit
              ? `linear-gradient(to right, ${G40}, transparent)`
              : `linear-gradient(to right, ${G20}, transparent)`,
            transition: "background .3s",
          }}
        />

        {/* Bullets — flex-1 fills remaining space so cards align bottom */}
        <div className="flex flex-col gap-[5px]  flex-1 relative z-10">
          {phase.bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-[7px]">
              <div
                className="w-[4px] h-[4px] rounded-full flex-shrink-0 mt-[5px] transition-all duration-300"
                style={{ background: lit ? G : G40 }}
              />
              <span
                className="text-[13px] leading-[1.5] font-sans transition-colors duration-300"
                style={{ color: lit ? "rgba(10,20,40,0.72)" : N55 }}
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function DevelopmentTimeline() {
  return (
    <section className="relative bg-white overflow-hidden py-20 px-6">

      {/* Hatch texture */}
      <svg
        className="absolute top-0 right-0 w-48 h-48 pointer-events-none select-none"
        style={{ opacity: 0.03 }} viewBox="0 0 192 192"
      >
        <defs>
          <pattern id="hatch-timeline" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="#0A1428" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="192" height="192" fill="url(#hatch-timeline)" />
      </svg>

      <div className="max-w-[1200px] mx-auto">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10"
        >
          <Pill label="Execution Lifecycle" />

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2
              className="font-serif font-black uppercase leading-[0.93] tracking-[-0.022em]"
              style={{ fontSize: "clamp(34px,5vw,56px)", color: P }}
            >
              Development{" "}
              <em className="not-italic" style={{ color: G }}>Timeline</em>
            </h2>

            {/* Duration badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-[10px] rounded-full border flex-shrink-0"
              style={{ borderColor: G40, background: G07 }}
            >
              <Clock size={16} strokeWidth={1.6} style={{ color: G }} />
              <span
                className="font-serif font-black leading-none"
                style={{ fontSize: 20, color: P, letterSpacing: "-0.01em" }}
              >
                18 – 24 Months
              </span>
            </div>
          </div>

          {/* Animated gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            style={{ originX: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            viewport={{ once: true }}
            className="mt-6 h-px"
     
          />
        </motion.div>

        {/* ── TIMELINE ── */}
        <div className="relative">

          {/* Connector line — animated draw */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            style={{ originX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
            className="absolute left-0 right-0 h-px z-0 hidden lg:block"
           
          />

          {/*
            KEY — equal card heights:
            grid with `items-stretch` + each column is `flex flex-col`
            + card has `flex-1` → all cards in a row stretch to the tallest
          */}
          <div
            className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-stretch"
          >
            {PHASES.map((phase, i) => (
              <PhaseColumn key={i} phase={phase} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}