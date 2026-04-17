"use client";

<<<<<<< Updated upstream
import { useState, useEffect, useRef } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────────
=======
import { useState } from "react";

>>>>>>> Stashed changes
const STEPS = [
  {
    num: "01",
    phase: "Acquisition",
    tag: "Discovery",
    title: "Identify Logistics",
    accent: "Corridor",
    desc: "Analyze high-growth zones and strategic connectivity for maximum logistics potential.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="17" cy="17" r="9" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M23.5 23.5L32 32" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="17" r="4" fill="rgba(212,175,55,0.2)" />
      </svg>
    ),
  },
  {
    num: "02",
    phase: "Consolidation",
    tag: "Legal",
    title: "Aggregate & Structure",
    accent: "Land",
    desc: "Secure parcels and clean title documentation for institutional compliance.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="7" y="13" width="26" height="5" rx="1" stroke="#D4AF37" strokeWidth="1.5" />
        <rect x="11" y="20" width="18" height="4" rx="1" stroke="#D4AF37" strokeWidth="1.5" opacity="0.7" />
        <rect x="15" y="26" width="10" height="3" rx="1" stroke="#D4AF37" strokeWidth="1.5" opacity="0.4" />
        <rect x="14" y="7" width="12" height="4" rx="1" fill="rgba(212,175,55,0.2)" />
      </svg>
    ),
  },
  {
    num: "03",
    phase: "Design",
    tag: "Statutory",
    title: "Master Planning",
    accent: "& Zoning",
    desc: "Institutional-grade layout and statutory compliance across all parcels.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="6" width="28" height="28" rx="1" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M6 14H34M14 6V34" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
        <rect x="16" y="16" width="12" height="12" fill="rgba(212,175,55,0.18)" />
      </svg>
    ),
  },
  {
    num: "04",
    phase: "Build",
    tag: "Construction",
    title: "Infrastructure",
    accent: "Development",
    desc: "Roads, utilities, and Grade-A facility construction at scale.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M5 30H35" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="10" y="18" width="20" height="12" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M10 18L20 10L30 18" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="22" width="8" height="8" fill="rgba(212,175,55,0.18)" />
      </svg>
    ),
  },
  {
    num: "05",
    phase: "Occupancy",
    tag: "Tenancy",
    title: "Lease",
    accent: "Stabilization",
    desc: "Securing long-term institutional tenants and operational stability across all assets.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 32V16L20 8L32 16V32" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 32V24H25V32" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="20" cy="19" r="3" fill="rgba(212,175,55,0.25)" stroke="#D4AF37" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: "06",
    phase: "Performance",
    tag: "Yield",
    title: "Long-term Asset",
    accent: "Holding",
    desc: "Managing asset performance and yield for sustained institutional-grade returns.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <polyline points="6,30 14,20 20,24 28,12 34,16" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="16" r="3" fill="rgba(212,175,55,0.25)" stroke="#D4AF37" strokeWidth="1" />
        <path d="M6 32H34" stroke="rgba(212,175,55,0.3)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: "07",
    phase: "Realisation",
    tag: "Divestment",
    title: "Exit",
    accent: "Strategy",
    desc: "Strategic divestment or REIT formation at peak institutional value.",
    isFinal: true,
<<<<<<< Updated upstream
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path
          d="M20 6L26 14H34L28 20L30 30L20 24L10 30L12 20L6 14H14L20 6Z"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 6L26 14H34L28 20L30 30L20 24L10 30L12 20L6 14H14L20 6Z"
          fill="rgba(212,175,55,0.1)"
        />
      </svg>
    ),
  },
];

const ROW1 = STEPS.slice(0, 4);
const ROW2 = STEPS.slice(4, 7);

// ─── ARROW ICON ────────────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M2 8L8 2M8 2H3M8 2V7"
        stroke="#D4AF37"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── STEP CARD ─────────────────────────────────────────────────────────────────
function StepCard({
  step,
  delay,
}: {
  step: (typeof STEPS)[0];
  delay: number;
}) {
  const [hov, setHov] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const isFinal = !!step.isFinal;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative overflow-hidden cursor-default flex flex-col p-7 transition-all duration-500"
      style={{
        border: "1px solid rgba(212,175,55,0.12)",
        marginLeft: "-1px",
        marginTop: "-1px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)`,
        background: isFinal
          ? "linear-gradient(135deg, rgba(212,175,55,0.06), rgba(212,175,55,0.02))"
          : hov
          ? "rgba(212,175,55,0.03)"
          : "#ffffff",
      }}
    >
      {/* Top gold sweep bar */}
      <div
        className="absolute top-0 left-0 h-[2px] transition-all duration-500"
        style={{
          width: hov || isFinal ? "100%" : "0%",
          background: "linear-gradient(to right, #D4AF37, transparent)",
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Ghost number */}
      <span
        className="absolute bottom-[-10px] right-2 font-serif font-black text-[96px] leading-none select-none pointer-events-none transition-colors duration-500"
        style={{ color: hov ? "rgba(212,175,55,0.07)" : "rgba(212,175,55,0.04)" }}
      >
        {step.num}
      </span>

      {/* Phase counter */}
      <p
        className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.25em] mb-5 transition-colors duration-300"
        style={{ color: hov || isFinal ? "#D4AF37" : "rgba(212,175,55,0.45)" }}
      >
        <span
          className="w-[5px] h-[5px] rounded-full inline-block flex-shrink-0 transition-all duration-300"
          style={{
            background: hov || isFinal ? "#D4AF37" : "rgba(212,175,55,0.35)",
            transform: hov || isFinal ? "scale(1.4)" : "scale(1)",
          }}
        />
        {step.num} — {step.phase}
      </p>

      {/* Icon */}
      <div
        className="mb-5 transition-all duration-500"
        style={{
          opacity: hov || isFinal ? 1 : 0.5,
          transform: hov ? "translateY(-3px)" : "translateY(0)",
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {step.icon}
      </div>

      {/* Tag */}
      <span
        className="inline-flex items-center self-start text-[9px] font-black uppercase tracking-[0.3em] px-2 py-1 mb-4 transition-all duration-300"
        style={{
          color: hov || isFinal ? "#D4AF37" : "rgba(212,175,55,0.5)",
          border: `1px solid ${hov || isFinal ? "rgba(212,175,55,0.45)" : "rgba(212,175,55,0.15)"}`,
        }}
      >
        {step.tag}
      </span>

      {/* Title */}
      <h3 className="font-serif font-black text-[20px] leading-tight tracking-tight text-[#0A1428] mb-3">
        {step.title}{" "}
        <span className="text-[#D4AF37] italic">{step.accent}</span>
      </h3>

      {/* Gold bar */}
      <div
        className="h-px mb-4 transition-all duration-500"
        style={{
          width: hov || isFinal ? 48 : 24,
          background: "#D4AF37",
          opacity: hov || isFinal ? 0.8 : 0.3,
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Description */}
      <p
        className="text-sm font-medium leading-relaxed transition-colors duration-300"
        style={{ color: hov ? "rgba(10,20,40,0.65)" : "rgba(10,20,40,0.45)" }}
      >
        {step.desc}
      </p>

      {/* Corner arrow */}
      <div
        className="absolute right-4 bottom-4 w-7 h-7 flex items-center justify-center transition-all duration-400"
        style={{
          border: `1px solid ${hov || isFinal ? "rgba(212,175,55,0.5)" : "rgba(212,175,55,0.2)"}`,
          opacity: hov || isFinal ? 1 : 0,
          transform: hov || isFinal ? "translate(0,0)" : "translate(4px,4px)",
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <ArrowIcon />
      </div>
=======
  },
];

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

<<<<<<< Updated upstream
// ─── ROW LABEL ─────────────────────────────────────────────────────────────────
function RowLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[rgba(212,175,55,0.4)]">
        {label}
      </span>
      <div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to right, rgba(212,175,55,0.2), transparent)",
        }}
      />
=======
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

<<<<<<< Updated upstream
// ─── MAIN SECTION ──────────────────────────────────────────────────────────────
export default function DevelopmentModelSection() {
  return (
    <section
      className="py-24 bg-white overflow-hidden relative"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 60% 40% at 80% 10%, rgba(212,175,55,0.06) 0%, transparent 70%),
          radial-gradient(ellipse 40% 30% at 10% 80%, rgba(10,20,40,0.03) 0%, transparent 70%)
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-12">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 animate-[fadeUp_0.6s_ease_0.1s_both]">
          <div
            className="w-10 h-px"
            style={{ background: "linear-gradient(to right, #D4AF37, transparent)" }}
          />
          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#D4AF37]">
=======
export default function DevelopmentModelSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow — font-sans font-black uppercase tracking-widest (matches button text style) */}
        <div className="inline-flex items-center gap-2.5 mb-10">
          <span
            className="w-[5px] h-[5px] rounded-full animate-pulse flex-shrink-0"
            style={{ background: "#C9A84C" }}
          />
          <span className="font-sans font-black text-[9px] uppercase tracking-widest text-accent">
>>>>>>> Stashed changes
            End-to-End Value Creation
          </span>
        </div>

<<<<<<< Updated upstream
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-16 animate-[fadeUp_0.7s_ease_0.2s_both]">
          <h2 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-[#0A1428]">
            Our<br />Development<br />
            <em className="not-italic text-[#D4AF37] italic">Model</em>
          </h2>
          <p className="text-lg font-medium leading-relaxed text-[rgba(10,20,40,0.5)] max-w-sm self-end pb-1">
=======
        {/* Section heading — exact match: font-serif font-black uppercase tracking-tighter */}
        <div className="mb-4">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight uppercase tracking-tighter mb-6">
            Our Development{" "}
            <span className="text-accent">Model</span>
          </h2>

          {/* Body copy — exact match: text-lg md:text-xl font-medium text-primary/60 leading-relaxed */}
          <p className="text-lg md:text-xl text-primary/60 font-medium leading-relaxed max-w-2xl mb-10">
>>>>>>> Stashed changes
            Seven integrated phases that transform raw land into India&apos;s most
            sought-after institutional-grade industrial assets.
          </p>
        </div>

<<<<<<< Updated upstream
        {/* Divider */}
=======
        {/* Gold rule */}
>>>>>>> Stashed changes
        <div
          className="h-px mb-14"
          style={{
            background:
<<<<<<< Updated upstream
              "linear-gradient(to right, rgba(212,175,55,0.5), rgba(212,175,55,0.15), transparent)",
          }}
        />

        {/* Row 1 — 4 cards */}
        <RowLabel label="Phase I — IV" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {ROW1.map((step, i) => (
            <StepCard key={step.num} step={step} delay={i * 100} />
          ))}
        </div>

        {/* Mid divider */}
        <div
          className="h-px my-0"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)",
          }}
        />

        {/* Row 2 — 3 cards */}
        <div className="mt-5">
          <RowLabel label="Phase V — VII" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ROW2.map((step, i) => (
              <StepCard key={step.num} step={step} delay={i * 100 + 200} />
            ))}
=======
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
>>>>>>> Stashed changes
          </div>
        </div>

        {/* Footer strip */}
        <div
          className="flex items-center justify-between mt-12 pt-5"
          style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}
        >
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[rgba(10,20,40,0.25)]">
            Integrated Development Pipeline — India
          </span>
          <div className="flex items-center gap-2">
            <span
              className="w-1 h-1 rounded-full inline-block animate-pulse"
              style={{ background: "rgba(212,175,55,0.5)" }}
            />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[rgba(212,175,55,0.5)]">
              Industrial Real Estate
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}