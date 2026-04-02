"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

// ─── TOKENS ────────────────────────────────────────────────────────────────────
const P    = "#0A1428";
const G    = "#D4AF37";
const EASE = [0.22, 1, 0.36, 1] as const;

// ─── DATA ──────────────────────────────────────────────────────────────────────
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

// ─── STEP ITEM ─────────────────────────────────────────────────────────────────
function StepItem({
  step,
  isLast,
}: {
  step: (typeof STEPS)[0];
  isLast: boolean;
}) {
  const [hov, setHov] = useState(false);

  return (
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
              ? "rgba(212,175,55,0.65)"
              : "rgba(212,175,55,0.18)"
              }`,
            background: hov ? "rgba(212,175,55,0.07)" : "transparent",
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

        {/* Step counter */}
        <p className="font-sans font-black text-[9px] uppercase tracking-widest mb-2 transition-colors duration-300"
          style={{ color: hov ? "#C9A84C" : "rgba(201,168,76,0.45)" }}
        >
          {step.num} — {step.phase}
        </p>

        {/* Title row */}
        <div className="flex items-baseline gap-3 flex-wrap mb-3">
          <h3
            className="font-serif font-black uppercase tracking-tighter leading-tight text-primary transition-colors duration-300 text-2xl md:text-3xl lg:text-4xl"
          >
            {step.title}{" "}
            <span className="text-accent">{step.accent}</span>
          </h3>

          {/* Tag pill */}
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

        {/* Description */}
        <p className="font-sans font-medium text-base md:text-lg text-primary/60 leading-relaxed max-w-xl transition-colors duration-300"
          style={{ color: hov ? "var(--color-primary, #0A1428)" : undefined }}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}

function PipelineDivider() {
  return (
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
    </div>
  );
}

export default function DevelopmentModelSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 mb-10">
          <span
            className="w-[5px] h-[5px] rounded-full animate-pulse flex-shrink-0"
            style={{ background: "#C9A84C" }}
          />
          <span className="font-sans font-black text-[9px] uppercase tracking-widest text-accent">
            End-to-End Value Creation
          </span>
        </div>

        {/* Section heading */}
        <div className="mb-4">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight uppercase tracking-tighter mb-6">
            Our Development <span className="text-accent">Model</span>
          </h2>

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
            </div>
          ))}
        </div>

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
        </div>

      </div>
    </section>
  );
}