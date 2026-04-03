"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Clock, DollarSign, ShieldCheck,
  TrendingUp, Layers, FileText,
  Activity, Star, Grid3x3,
  Check, X,
} from "lucide-react";
import Image from "next/image";
import banner from "../assets/industrial-park.jpg"
// ─── TOKENS ────────────────────────────────────────────────────────────────────
const G    = "#D4AF37";
const G40  = "rgba(212,175,55,0.40)";
const G20  = "rgba(212,175,55,0.20)";
const G12  = "rgba(212,175,55,0.12)";
const G08  = "rgba(212,175,55,0.08)";
const G06  = "rgba(212,175,55,0.06)";
const EASE = [0.22, 1, 0.36, 1] as const;

// ─── DATA ──────────────────────────────────────────────────────────────────────
const ROWS = [
  { Icon: Clock,      param: "Speed-to-Market",   us: "18 – 24 Months",       them: "30 – 36+ Months"       },
  { Icon: DollarSign, param: "Capital Efficiency", us: "18 – 22% IRR",         them: "12 – 15% IRR"          },
  { Icon: ShieldCheck,param: "Governance",         us: "Full SPV Governance",  them: "Limited / Mixed"       },
  { Icon: TrendingUp, param: "Exit Track Record",  us: "Proven Tier-1 Exits",  them: "Few Exits / Hold Focus"},
  { Icon: Layers,     param: "Capabilities",       us: "Complete Lifecycle",   them: "Fragmented / Outsourced"},
  { Icon: FileText,   param: "Approvals",          us: "DTCP / Env. Mastery",  them: "Standard / Basic"      },
];

const STATS = [
  { val: "6×",   label: "Faster approvals vs\ntraditional developers"   },
  { val: "+7%",  label: "Higher IRR delivered\nto investors on average"  },
  { val: "100%", label: "SPV-governed projects\nwith full compliance"    },
];

// ─── WIN / LOSE DOT ────────────────────────────────────────────────────────────
function StatusDot({ win }: { win: boolean }) {
  return (
    <div
      className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 border"
      style={
        win
          ? { background: "rgba(34,197,94,0.12)", borderColor: "rgba(34,197,94,0.25)" }
          : { background: "rgba(239,68,68,0.10)", borderColor: "rgba(239,68,68,0.20)" }
      }
    >
      {win
        ? <Check size={11} strokeWidth={2.5} style={{ color: "#4ade80" }} />
        : <X     size={11} strokeWidth={2.5} style={{ color: "#f87171" }} />
      }
    </div>
  );
}

// ─── TABLE ROW ─────────────────────────────────────────────────────────────────
function TableRow({ row, index }: { row: typeof ROWS[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const { Icon } = row;

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="grid"
      style={{
        gridTemplateColumns: "200px 1fr 1fr",
        gap: 1,
        background: hov ? "rgba(212,175,55,0.14)" : "rgba(212,175,55,0.08)",
        transition: "background .25s",
      }}
    >
      {/* Parameter */}
      <div
        className="flex items-center gap-[10px] px-5 py-4"
        style={{ background: "rgba(10,20,40,0.75)" }}
      >
        <div
          className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center flex-shrink-0 border transition-all duration-300"
          style={{
            border: `1px solid ${hov ? "rgba(212,175,55,0.30)" : "rgba(255,255,255,0.08)"}`,
            background: hov ? "rgba(212,175,55,0.08)" : "rgba(255,255,255,0.04)",
          }}
        >
          <Icon
            size={13}
            strokeWidth={1.6}
            style={{ color: hov ? G : "rgba(255,255,255,0.35)", transition: "color .25s" }}
          />
        </div>
        <span
          className="font-serif font-black leading-snug"
          style={{ fontSize: 15, color: "rgba(255,255,255,0.82)", letterSpacing: "-0.01em" }}
        >
          {row.param}
        </span>
      </div>

      {/* Our value */}
      <div
        className="flex items-center gap-[10px] px-5 py-4 transition-all duration-300"
        style={{ background: hov ? "rgba(18,36,72,0.9)" : "rgba(12,24,52,0.82)" }}
      >
        <StatusDot win={true} />
        <span className="text-[13px] font-bold text-white">{row.us}</span>
      </div>

      {/* Their value */}
      <div
        className="flex items-center gap-[10px] px-5 py-4"
        style={{ background: "rgba(10,20,40,0.70)" }}
      >
        <StatusDot win={false} />
        <span className="text-[13px] font-bold" style={{ color: "rgba(255,255,255,0.38)" }}>
          {row.them}
        </span>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function CompetitivePositioning() {
  return (
    <section className="relative overflow-hidden" >

        <div className="absolute inset-0 z-0 scale-[1.02]">
                 <Image 
                   src={banner}
                   alt="Competitive Background"
                   fill
                   priority
                   sizes="100vw"
                   className="object-cover object-center opacity-40"
                 />
                 <div className="absolute inset-0 bg-[#0A1428]/90 mix-blend-multiply" />
                 <div className="absolute inset-0 bg-gradient-to-b from-[#0A1428]/80 via-transparent to-[#0A1428]/95" />
               </div>

      
    
     

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-9"
        >
          {/* Pill */}
          <div
            className="inline-flex items-center gap-[7px] px-[14px] py-[5px] rounded-full border text-[9px] font-black uppercase tracking-[0.32em] font-sans mb-5"
            style={{ borderColor: G40, background: G08, color: G }}
          >
            <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 animate-pulse" style={{ background: G }} />
            Market Leadership
          </div>

          <h2
            className="font-serif font-black uppercase leading-[0.92] tracking-[-0.022em] mb-3"
            style={{ fontSize: "clamp(32px,5vw,54px)", color: "#fff" }}
          >
            Competitive{" "}
            <em className="not-italic" style={{ color: G }}>Positioning</em>
          </h2>
          <p className="text-[12px] leading-[1.7] mb-7" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 440 }}>
            How Warehouster outperforms traditional industrial developers across every key metric that matters to institutional investors.
          </p>

          {/* Animated gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            style={{ originX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
            className="h-px"
            
          />
        </motion.div>

        {/* ── GLASSMORPHISM TABLE CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="overflow-hidden mb-5"
          style={{
            borderRadius: 24,
            border: `1px solid rgba(212,175,55,0.30)`,
            background: "rgba(10,24,48,0.85)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.12)",
          }}
        >
          {/* Column headers */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: "200px 1fr 1fr",
              gap: 1,
              background: G12,
              borderBottom: `1px solid rgba(212,175,55,0.15)`,
            }}
          >
            {/* Param header */}
            <div className="flex items-center gap-[10px] px-5 py-[18px]" style={{ background: "rgba(10,20,40,0.80)" }}>
              <div className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center flex-shrink-0 border" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}>
                <Activity size={14} strokeWidth={1.6} style={{ color: "rgba(255,255,255,0.40)" }} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.20em] font-sans" style={{ color: "rgba(255,255,255,0.45)" }}>Key Parameter</span>
            </div>

            {/* Warehouster header — navy with hatch */}
            <div className="relative flex items-center gap-[10px] px-5 py-[18px] overflow-hidden" style={{ background: "rgba(15,32,64,0.90)" }}>
              <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 8px,rgba(212,175,55,0.04) 8px,rgba(212,175,55,0.04) 9px)" }} />
              <div className="relative z-10 w-[30px] h-[30px] rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,175,55,0.15)", border: `1px solid ${G40}` }}>
                <Star size={14} strokeWidth={1.6} style={{ color: G }} />
              </div>
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.20em] font-sans" style={{ color: G }}>Warehouster</span>
            </div>

            {/* Traditional developers header */}
            <div className="flex items-center gap-[10px] px-5 py-[18px]" style={{ background: "rgba(10,20,40,0.85)" }}>
              <div className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center flex-shrink-0 border" style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}>
                <Grid3x3 size={14} strokeWidth={1.6} style={{ color: "rgba(255,255,255,0.60)" }} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.20em] font-sans" style={{ color: "rgba(255,255,255,0.65)" }}>Traditional Developers</span>
            </div>
          </div>

          {/* Rows — gap of 1px = gold separator lines */}
          <div className="flex flex-col" style={{ gap: 1, background: G08 }}>
            {ROWS.map((row, i) => (
              <TableRow key={i} row={row} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-3">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: EASE }}
              className="flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 hover:border-[rgba(212,175,55,0.40)]"
              style={{
                border: `1px solid rgba(212,175,55,0.20)`,
                background: "rgba(10,20,40,0.50)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <span className="font-serif font-black leading-none flex-shrink-0" style={{ fontSize: 24, color: G, minWidth: 44 }}>
                {s.val}
              </span>
              <div className="w-px h-7 flex-shrink-0" style={{ background: "rgba(212,175,55,0.20)" }} />
              <span
                className="text-[10px] font-black uppercase tracking-[0.18em] leading-[1.55] font-sans whitespace-pre-line"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}