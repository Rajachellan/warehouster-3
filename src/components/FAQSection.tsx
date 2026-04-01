"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Pencil, Search, Home, MapPin, Star,
  Briefcase, Users, ShieldCheck, TrendingUp, Phone,
} from "lucide-react";

// ─── TOKENS ────────────────────────────────────────────────────────────────────
const P   = "#0A1428";
const P2  = "#0f2040";
const G   = "#D4AF37";
const G40 = "rgba(212,175,55,0.40)";
const G20 = "rgba(212,175,55,0.20)";
const G10 = "rgba(212,175,55,0.10)";
const G07 = "rgba(212,175,55,0.07)";
const N08 = "rgba(10,20,40,0.08)";
const N05 = "rgba(10,20,40,0.05)";
const N50 = "rgba(10,20,40,0.50)";
const N25 = "rgba(10,20,40,0.25)";
const N12 = "rgba(10,20,40,0.12)";
const EASE = [0.22, 1, 0.36, 1] as const;

// ─── DATA ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    Icon: Pencil,
    question: "What core services does Warehouster provide?",
    answer: "We offer end-to-end industrial real estate solutions including strategic land acquisition, development management, Grade-A warehouse construction, and industrial consulting.",
  },
  {
    Icon: Search,
    question: "How does the land acquisition process work?",
    answer: "Our team uses multi-parameter data intelligence to source high-yield locations, ensuring regulatory compliance, title clarity, and strategic accessibility for logistics optimization.",
  },
  {
    Icon: Home,
    question: "Do you manage external warehouse projects?",
    answer: "We offer comprehensive Development Management services for external clients, ensuring institutional-grade standards across design, construction, and property management.",
  },
  {
    Icon: MapPin,
    question: "Where are Warehouster logistics parks located?",
    answer: "Warehouster operates across key industrial corridors in South India, including Chennai, Bengaluru, Hosur, and Madurai — ensuring seamless connectivity to ports, highways, and manufacturing hubs.",
  },
  {
    Icon: Star,
    question: "What makes your industrial parks 'Grade A' standard?",
    answer: "Our parks feature clear heights up to 40ft, 150mm floor load capacity, 100% power backup, advanced fire safety systems, 24/7 security, and green building certifications.",
  },
  {
    Icon: Briefcase,
    question: "Do you provide built-to-suit warehouse solutions?",
    answer: "Yes, we offer customized BTS warehouse solutions tailored to your business requirements, designed for maximum efficiency, scalability, and long-term institutional value.",
  },
  {
    Icon: Users,
    question: "Which industries do you serve?",
    answer: "We cater to e-commerce, retail, FMCG, automotive, manufacturing, pharmaceuticals, and 3PL providers. Our warehouses are designed to support diverse industry requirements.",
  },
  {
    Icon: ShieldCheck,
    question: "Are your warehouses compliant with safety standards?",
    answer: "Yes, all facilities are built in compliance with national and international safety standards including fire safety systems, structural integrity, environmental considerations, and regulatory approvals.",
  },
  {
    Icon: TrendingUp,
    question: "Do you offer scalable spaces for growing businesses?",
    answer: "Absolutely. Warehouster provides flexible and scalable warehouse solutions that expand as your business grows, supporting both current and future operational needs.",
  },
  {
    Icon: Phone,
    question: "How can I contact your investment or leasing team?",
    answer: "Reach out via our contact form, email us at hello@warehouster.com, or visit our headquarters in BKC, Mumbai for a strategic consultation with our team.",
  },
];

const STATS = [
  { num: "10",  label: "Frequently asked\nquestions answered" },
  { num: "24h", label: "Average response\ntime for inquiries"  },
  { num: "7+",  label: "Industries\nwe serve"                  },
];

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

// ─── STAT CHIP ─────────────────────────────────────────────────────────────────
function StatChip({ num, label }: { num: string; label: string }) {
  return (
    <div
      className="flex items-center gap-[14px] px-[18px] py-[14px] rounded-2xl border bg-white"
      style={{ border: `1.5px solid ${N08}` }}
    >
      <span
        className="font-serif font-black leading-none flex-shrink-0"
        style={{ fontSize: 24, color: G }}
      >
        {num}
      </span>
      <div className="w-px h-7 flex-shrink-0" style={{ background: N08 }} />
      <span
        className="text-[10px] font-black uppercase tracking-[0.22em] leading-[1.55] whitespace-pre-line"
        style={{ color: N50 }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── FAQ ITEM ──────────────────────────────────────────────────────────────────
function FaqItem({
  item, index, open, onToggle,
}: {
  item: typeof FAQS[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const { Icon } = item;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: EASE }}
      className="relative overflow-hidden rounded-[20px] bg-white"
      style={{
        border: `1.5px solid ${open ? G40 : N08}`,
        boxShadow: open
          ? `0 8px 40px ${G10}, 0 2px 12px rgba(10,20,40,0.04)`
          : "none",
        transition: "border-color .3s, box-shadow .3s",
      }}
    >
      {/* Bottom gold sweep */}
      <div
        className="absolute bottom-0 left-0 h-[2px] rounded-b-[20px]"
        style={{
          width: open ? "100%" : "0%",
          background: `linear-gradient(to right, ${G}, rgba(212,175,55,0.4))`,
          transition: "width .5s cubic-bezier(.22,1,.36,1)",
        }}
      />

      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left"
      >
        {/* Number */}
        <span
          className="font-serif font-black text-[13px] tracking-[0.15em] flex-shrink-0 w-7 transition-colors duration-300"
          style={{ color: open ? G : "rgba(212,175,55,0.30)" }}
        >
          {num}
        </span>

        {/* Unique icon badge */}
        <div
          className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center flex-shrink-0 border transition-all duration-300"
          style={{
            borderColor: open ? G40 : N08,
            background:  open ? G07 : N05,
          }}
        >
          <Icon
            size={15}
            strokeWidth={1.6}
            style={{ color: open ? G : "rgba(10,20,40,0.35)", transition: "color .3s" }}
          />
        </div>

        {/* Question text */}
        <span
          className="flex-1 text-[13px] font-bold leading-[1.4] transition-colors duration-300"
          style={{ color: open ? P : "rgba(10,20,40,0.70)" }}
        >
          {item.question}
        </span>

        {/* Toggle button */}
        <div
          className="w-[30px] h-[30px] rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 ml-auto"
          style={{
            background:  open ? G    : "#fff",
            borderColor: open ? G    : N08,
          }}
        >
          {/* Plus → rotates to X */}
          <svg
            viewBox="0 0 24 24" fill="none" stroke={open ? "#fff" : "rgba(10,20,40,0.3)"}
            strokeWidth="2" className="w-[13px] h-[13px]"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .35s, stroke .3s" }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>

      {/* Answer panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="pb-5 pt-[18px]"
              style={{
                paddingLeft: `calc(24px + 28px + 34px + 32px)`, // align with text
                paddingRight: 24,
                marginTop: -2,
                borderTop: `1px solid rgba(212,175,55,0.12)`,
              }}
            >
              <p className="text-[12px] leading-[1.85] font-sans" style={{ color: N50 }}>
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white overflow-hidden py-24 px-6">

      {/* Hatch texture — top right */}
      <svg
        className="absolute top-0 right-0 w-56 h-56 pointer-events-none select-none"
        style={{ opacity: 0.03 }} viewBox="0 0 224 224"
      >
        <defs>
          <pattern id="hatch-faq" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="#0A1428" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="224" height="224" fill="url(#hatch-faq)" />
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16 xl:gap-20 items-start">

          {/* ── LEFT STICKY COLUMN ── */}
          <div className="lg:sticky lg:top-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <Pill label="Support Center" />

              <h2
                className="font-serif font-black uppercase leading-[0.92] tracking-[-0.022em] mb-5"
                style={{ fontSize: "clamp(40px,5vw,66px)", color: P }}
              >
                Common<br />
                <em className="not-italic" style={{ color: G }}>Inquiries</em>
              </h2>

              {/* Gold gradient rule */}
              <div
                className="h-px w-full mb-6"
                style={{ background: `linear-gradient(to right, ${G}, ${G20}, transparent)` }}
              />

              <p
                className="text-[11px] font-black uppercase tracking-[0.22em] leading-[1.8] mb-8"
                style={{ color: N25 }}
              >
                Deep-dive insights into our<br />
                institutional development &amp;<br />
                transaction protocols.
              </p>

              {/* Stat chips */}
              <div className="flex flex-col gap-3">
                {STATS.map((s) => (
                  <StatChip key={s.num} num={s.num} label={s.label} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT ACCORDION ── */}
          <div className="flex flex-col gap-[10px]">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                item={faq}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}