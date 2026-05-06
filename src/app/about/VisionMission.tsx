"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye, Target, ShieldCheck, Star,
  Users, TrendingUp, Globe, MapPin,
} from "lucide-react";

// ─── BRAND TOKENS ──────────────────────────────────────────────────────────────
const P = "#0A1428";          // primary navy
const G = "#D4AF37";          // gold
const G60 = "rgba(212,175,55,0.60)";
const G35 = "rgba(212,175,55,0.35)";
const G20 = "rgba(212,175,55,0.20)";
const G10 = "rgba(212,175,55,0.10)";
const G07 = "rgba(212,175,55,0.07)";
const N08 = "rgba(10,20,40,0.08)";
const N06 = "rgba(10,20,40,0.06)";
const N04 = "rgba(10,20,40,0.04)";
const N50 = "rgba(10,20,40,0.50)";
const N48 = "rgba(10,20,40,0.48)";
const N25 = "rgba(10,20,40,0.25)";
const N12 = "rgba(10,20,40,0.12)";
const EASE = [0.22, 1, 0.36, 1] as const;

// ─── DATA ──────────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: "vision",
    tag: "Vision",
    ghost: "V",
    Icon: Eye,
    num: "01",
    heading: "Define The",
    accent: "Future",
    body: "To institutionalize industrial real estate in India by delivering structured, compliant, and investment-grade warehousing assets.",
    bullets: [
      "Lead India's transition to world-class logistics infrastructure",
      "Set the gold standard in institutional-grade industrial development",
      "Build ecosystems that power India's next decade of commerce",
    ],
  },
  {
    id: "mission",
    tag: "Mission",
    ghost: "M",
    Icon: Target,
    num: "02",
    heading: "Deliver",
    accent: "Excellence",
    // body: "To identify, acquire, and develop strategic industrial land parcels into institutional-grade assets — executing with precision, compliance, and long-term performance in mind for every occupier, investor, and community we serve.",
    bullets: [
      "Develop scalable logistics infrastructure​",
      "Create structured industrial parks",
      "Deliver long-term asset value",
      "Enable supply chain efficiency",
    ],
  },
];

const VALUES = [
  { num: "01", Icon: ShieldCheck, title: "Integrity First", desc: "Every transaction and relationship built on transparency, trust, and uncompromising ethical standards." },
  { num: "02", Icon: Star, title: "Excellence", desc: "Grade-A quality is not a target — it's the minimum standard we hold on every single project." },
  { num: "03", Icon: Users, title: "Partnership", desc: "Deep, long-term relationships with occupiers, investors, and communities at the heart of all we build." },
  { num: "04", Icon: TrendingUp, title: "Innovation", desc: "Applying data intelligence and forward-thinking design to create infrastructure ahead of market demand." },
  { num: "05", Icon: Globe, title: "Scale", desc: "Building platforms with the capacity and architecture to grow with India's expanding industrial economy." },
  { num: "06", Icon: MapPin, title: "Community", desc: "Developing infrastructure that drives local employment, regional growth, and lasting economic impact." },
];

// ─── PILL COMPONENT ────────────────────────────────────────────────────────────
function Pill({
  label,
  gold = false,
  className = "",
}: {
  label: string;
  gold?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-[7px] px-[14px] py-[6px] rounded-full border text-[9px] font-black uppercase tracking-[0.35em] font-sans ${className}`}
      style={{
        borderColor: gold ? G35 : N12,
        background: gold ? G07 : N04,
        color: gold ? G : N50,
      }}
    >
      {/* Animated dot */}
      <span
        className="w-[5px] h-[5px] rounded-full flex-shrink-0 animate-pulse"
        style={{ background: gold ? G : P, opacity: gold ? 1 : 0.4 }}
      />
      {label}
    </div>
  );
}

// ─── VM CARD ───────────────────────────────────────────────────────────────────
function VMCard({
  card,
  active,
  onClick,
}: {
  card: typeof CARDS[0];
  active: boolean;
  onClick: () => void;
}) {
  const [hov, setHov] = useState(false);
  const lit = active || hov;
  const { Icon } = card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
      onClick={onClick}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="relative flex flex-col p-10 rounded-[28px] overflow-hidden cursor-pointer bg-white"
      style={{
        border: `1.5px solid ${lit ? G35 : N08}`,
        boxShadow: lit
          ? `0 12px 56px ${G10}, 0 2px 16px ${N06}`
          : `0 2px 10px ${N04}`,
        transform: lit ? "translateY(-3px)" : "translateY(0)",
        transition: "border-color .35s, box-shadow .35s, transform .35s",
      }}
    >
      {/* Ghost letter */}
      <span
        className="absolute -top-5 -right-2 font-serif font-black select-none pointer-events-none leading-none"
        style={{
          fontSize: 160,
          letterSpacing: "-0.05em",
          color: lit ? G07 : "rgba(10,20,40,0.03)",
          transition: "color 0.4s",
        }}
      >
        {card.ghost}
      </span>

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full transition-all duration-400"
        style={{
          background: `linear-gradient(to bottom, ${P}, rgba(10,20,40,0.1))`,
          opacity: lit ? 1 : 0,
        }}
      />

      {/* Corner bracket TL */}
      <div
        className="absolute top-5 left-5 transition-all duration-300"
        style={{
          width: lit ? 30 : 22,
          height: lit ? 30 : 22,
          borderTop: `1.5px solid ${lit ? G : G20}`,
          borderLeft: `1.5px solid ${lit ? G : G20}`,
        }}
      />
      {/* Corner bracket BR */}
      <div
        className="absolute bottom-5 right-5 transition-all duration-300"
        style={{
          width: lit ? 30 : 22,
          height: lit ? 30 : 22,
          borderBottom: `1.5px solid ${lit ? G : G20}`,
          borderRight: `1.5px solid ${lit ? G : G20}`,
        }}
      />

      {/* Pill row */}
      <div className="flex items-center justify-between mb-7">
        {/* Card pill */}
        <div
          className="inline-flex items-center gap-[7px] px-[12px] py-[5px] rounded-full border text-[9px] font-black uppercase tracking-[0.35em] font-sans transition-all duration-300"
          style={{
            borderColor: lit ? G35 : N12,
            background: lit ? G07 : N04,
            color: lit ? G : N50,
          }}
        >
          <Icon size={11} strokeWidth={2} />
          {card.tag}
        </div>
        {/* Number */}
        <span
          className="font-serif font-black text-[13px] tracking-[0.2em] transition-colors duration-300"
          style={{ color: lit ? G60 : "rgba(212,175,55,0.25)" }}
        >
          {card.num}
        </span>
      </div>

      {/* Heading */}
      <h3
        className="font-serif font-black uppercase leading-[0.95] tracking-[-0.02em] mb-4"
        style={{ fontSize: "clamp(28px,3.5vw,44px)", color: P }}
      >
        {card.heading}{" "}
        <em className="not-italic" style={{ color: G }}>
          {card.accent}
        </em>
      </h3>

      {/* Gold rule */}
      <div
        className="mb-5 h-px transition-all duration-400"
        style={{
          width: lit ? 52 : 28,
          background: G,
          opacity: lit ? 0.8 : 0.35,
        }}
      />

      {/* Body */}
      <p
        className="text-[13px] leading-[1.9] font-sans mb-7"
        style={{ color: N50 }}
      >
        {card.body}
      </p>

      {/* Bullets */}
      <div className="flex flex-col gap-[10px]">
        {card.bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[7px] transition-all duration-300"
              style={{
                background: lit ? G : N25,
                transform: lit ? "scale(1.4)" : "scale(1)",
              }}
            />
            <span
              className="text-[13px] leading-[1.7] font-sans"
              style={{ color: N48 }}
            >
              {b}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom sweep */}
      <div
        className="absolute bottom-0 left-0 h-[2.5px] rounded-b-[28px] transition-all duration-500"
        style={{ width: lit ? "100%" : "0%", background: `linear-gradient(to right, ${G}, ${G60})` }}
      />
    </motion.div>
  );
}

// ─── VALUE CELL ────────────────────────────────────────────────────────────────
function ValueCell({ item, index }: { item: typeof VALUES[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const { Icon } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: EASE }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="relative flex flex-col p-7 rounded-[22px] overflow-hidden bg-white cursor-default"
      style={{
        border: `1.5px solid ${hov ? G35 : N08}`,
        boxShadow: hov
          ? `0 8px 32px ${G10}, 0 2px 10px ${N06}`
          : `0 2px 10px ${N04}`,
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: "border-color .35s, box-shadow .35s, transform .35s",
      }}
    >
      {/* Number */}
      <span
        className="text-[12px] font-black uppercase tracking-[0.5em] font-sans mb-4 transition-colors duration-300"
        style={{ color: hov ? G : "rgba(212,175,55,0.4)" }}
      >
        {item.num}
      </span>

      {/* Icon badge */}
      <div
        className="w-10 h-10 flex items-center justify-center rounded-xl mb-4 border transition-all duration-300"
        style={{
          borderColor: hov ? G35 : N08,
          background: hov ? G07 : N04,
        }}
      >
        <Icon
          size={16}
          strokeWidth={1.5}
          style={{ color: hov ? G : P }}
        />
      </div>

      {/* Title */}
      <p
        className="text-[12px] font-black uppercase tracking-[0.22em] font-sans mb-2"
        style={{ color: P }}
      >
        {item.title}
      </p>

      {/* Gold rule */}
      <div
        className="h-px mb-3 transition-all duration-300"
        style={{
          width: hov ? 36 : 20,
          background: G,
          opacity: hov ? 0.8 : 0.4,
        }}
      />

      {/* Desc */}
      <p
        className="text-[13px] leading-[1.8] font-sans"
        style={{ color: N48 }}
      >
        {item.desc}
      </p>

      {/* Bottom sweep */}
      <div
        className="absolute bottom-0 left-0 h-[2px] rounded-b-[22px] transition-all duration-400"
        style={{ width: hov ? "100%" : "0%", background: G }}
      />
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════
export default function VisionMissionSection() {
  const [activeId, setActiveId] = useState("vision");

  return (
    <section className="bg-white overflow-hidden">

      {/* ═══ 1. VISION & MISSION ═════════════════════════════════════════════ */}
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">

        {/* Hatch SVG — top right */}
        <svg
          className="absolute top-0 right-6 w-64 h-64 pointer-events-none select-none"
          style={{ opacity: 0.035 }}
          viewBox="0 0 256 256"
        >
          <defs>
            <pattern id="hatch-navy" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="16" stroke="#0A1428" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="256" height="256" fill="url(#hatch-navy)" />
        </svg>

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <Pill label="Strategic Foundation" gold className="mb-5" />
            <h2
              className="font-serif font-black uppercase leading-[0.93] tracking-[-0.025em]"
              style={{ fontSize: "clamp(44px,6.5vw,80px)", color: P }}
            >
              Our{" "}
              <em className="not-italic" style={{ color: G }}>Vision</em>
              <br />&amp; Mission
            </h2>
          </div>
          <p
            className="text-md leading-relaxed md:text-right max-w-[280px] font-sans "
            style={{
              color: N50,
              borderRight: `2px solid ${G35}`,
              paddingRight: 20,
            }}
          >
            The guiding principles driving every decision, development, and partnership across South India's industrial landscape.
          </p>
        </div>

        {/* Gold gradient divider */}
        <div
          className="h-px w-full mb-10"
          style={{ background: `linear-gradient(to right, ${G}, ${G20}, transparent)` }}
        />

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-3 mb-8">
          {CARDS.map((c) => {
            const active = activeId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border font-black uppercase text-[10px] tracking-[0.3em] transition-all duration-300"
                style={{
                  background: active ? G : "white",
                  borderColor: active ? "transparent" : N08,
                  color: active ? "white" : N50,
                  boxShadow: active ? `0 8px 24px ${G35}` : "none",
                }}
              >
                <c.Icon size={12} strokeWidth={2} />
                {c.tag}
              </button>
            );
          })}
        </div>

        {/* VM Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {CARDS.map((c) => (
            <VMCard
              key={c.id}
              card={c}
              active={activeId === c.id}
              onClick={() => setActiveId(c.id)}
            />
          ))}
        </div>
      </div>

      {/* ═══ 2. CORE VALUES ══════════════════════════════════════════════════ */}
      <div
        className="py-24 px-6"
        style={{
          background: "#fafaf8",
          borderTop: `1px solid ${G20}`,
          borderBottom: `1px solid ${G20}`,
        }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Values header */}
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <Pill label="Core Values" gold className="mb-5" />
              <h3
                className="font-serif font-black uppercase tracking-[-0.02em] leading-tight"
                style={{ fontSize: "clamp(26px,3.5vw,44px)", color: P }}
              >
                What We{" "}
                <em className="not-italic" style={{ color: G }}>Stand For</em>
              </h3>
            </div>
            <span
              className="text-[9px] font-black uppercase tracking-[0.45em] font-sans pb-1"
              style={{ color: N25 }}
            >
              06 Principles
            </span>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v, i) => (
              <ValueCell key={i} item={v} index={i} />
            ))}
          </div>
        </div>
      </div>



    </section>
  );
}