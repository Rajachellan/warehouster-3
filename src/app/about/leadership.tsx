"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import sandeep from "../../assets/Sandeep.webp";
import kanadhasan from "../../assets/kannadhassun.webp";
import kaushik from "../../assets/kaushik-vora-removebg-preview.webp";
import debi from "../../assets/debisarangi1removebgpreview.webp";
import divyash from "../../assets/divyansh.webp";
import type { StaticImageData } from "next/image";

// ─── TYPES ─────────────────────────────────────────────────────────────────────
interface TeamMember {
  name: string;
  role: string; 
  department: string;
  tags: string[];
  bio: string;
  image: string | StaticImageData;
  index: number;
}

// ─── TOKENS ────────────────────────────────────────────────────────────────────
const GOLD = "#D4AF37";
const GOLD2 = "#C9A84C";
const GOLD_FAINT = "rgba(212,175,55,0.12)";
const GOLD_LINE = "rgba(212,175,55,0.3)";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "50+", unit: "Years", label: "Combined Experience" },
  { value: "12 Mn", unit: "Sq Ft", label: "Delivered" },
  { value: "₹2,000", unit: "Cr", label: "Capital Deployed" },
];

const team: TeamMember[] = [
  {
    name: "Kannadhassun",
    role: "Head Construction & Projects",
    department: "Projects",
    tags: ["Park Infra", "EPC Mgmt", "Approvals"],
    bio: "25+ years in Industrial, Commercial and Residential development. Led Logistics Park development for Ascendas (Capitaland) as Regional Head South India.",
    image: kanadhasan,
    index: 0,
  },
  {
    name: "Kaushik Vora",
    role: "Investments",
    department: "Investments",
    tags: ["Underwriting", "JV Structuring", "Fundraising"],
    bio: "20+ years in investment management, real estate and private equity. Scaled AUM from hundreds to thousands of crores for HNIs, family offices, and institutions. MBA Finance & Executive Program in Fintech, IIM Kozhikode.",
    image: kaushik,
    index: 1,
  },
  {
    name: "Divyansh Jain",
    role: "Leasing & Asset Management",
    department: "Leasing",
    tags: ["Pre-Leasing", "RICS Member", "Advisory"],
    bio: "8+ years in Leasing & Asset Management with leading developers. Registered RICS member actively involved in advisory for real estate assets.",
    image: divyash,
    index: 2,
  },
  {
    name: "Debi Sarangi",
    role: "Head Legal",
    department: "Legal",
    tags: ["Land Acquisition", "Corporate Litigation", "Structuring"],
    bio: "21 years spanning Investment, Land Acquisition, Real Estate and Corporate Litigation. Previously Head Legal at Indospace, All Cargo, Redwood Capital, Lafarge India, Milestone Capital & Peninsula Land.",
    image: debi,
    index: 3,
  },
];

// ─── STAT STRIP ────────────────────────────────────────────────────────────────
function StatStrip() {
  return (
    <div className="grid grid-cols-3 divide-x divide-white/10 border border-white/10">
      {STATS.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.7 }}
          className="flex flex-col justify-center px-8 py-8 relative overflow-hidden group"
        >
          {/* Hover fill */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: GOLD_FAINT }}
          />
          {/* Number */}
          <div className="relative flex items-baseline gap-2 mb-1">
            <span
              className="font-serif font-black leading-none tracking-tight"
              style={{ fontSize: "clamp(28px,3.5vw,44px)", color: GOLD }}
            >
              {s.value}
            </span>
            <span
              className="font-serif font-black text-lg leading-none"
              style={{ color: GOLD2 }}
            >
              {s.unit}
            </span>
          </div>
          {/* Label */}
          <p className="relative font-sans font-black text-[10px] uppercase tracking-[0.25em] text-white/40">
            {s.label}
          </p>
          {/* Bottom gold tick */}
          <div
            className="absolute bottom-0 left-8 h-[2px] w-0 group-hover:w-12 transition-all duration-500"
            style={{ background: GOLD }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ─── MEMBER CARD ───────────────────────────────────────────────────────────────
function MemberCard({ member }: { member: TeamMember }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: member.index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col relative bg-white"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        boxShadow: hov
          ? `0 20px 60px rgba(10,20,40,0.12), 0 0 0 1px ${GOLD_LINE}`
          : "0 2px 16px rgba(10,20,40,0.06), 0 0 0 1px rgba(10,20,40,0.06)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* ── PHOTO ── */}
      <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: "3/4" }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700"
          style={{ transform: hov ? "scale(1.07)" : "scale(1)" }}
        />

        {/* Gradient overlay always present, deepens on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, rgba(10,20,40,0.75) 0%, rgba(10,20,40,0.1) 50%, transparent 100%)",
            opacity: hov ? 1 : 0.6,
          }}
        />

        {/* Department pill — top left */}
        <div className="absolute top-4 left-4">
          <span
            className="font-sans font-black text-[8px] uppercase tracking-[0.28em] px-2.5 py-1.5"
            style={{
              background: "rgba(10,20,40,0.75)",
              color: GOLD,
              backdropFilter: "blur(4px)",
              border: `1px solid ${GOLD_LINE}`,
            }}
          >
            {member.department}
          </span>
        </div>

        {/* Index number — top right */}
        <div className="absolute top-4 right-4">
          <span
            className="font-serif font-black text-xs"
            style={{ color: "rgba(212,175,55,0.5)" }}
          >
            0{member.index + 1}
          </span>
        </div>

        {/* Name over photo bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
          <div
            className="h-px mb-3 transition-all duration-500"
            style={{
              background: `linear-gradient(to right, ${GOLD}, transparent)`,
              width: hov ? "100%" : "40px",
            }}
          />
          <h3
            className="font-serif font-black uppercase tracking-tighter leading-tight text-white"
            style={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
          >
            {member.name}
          </h3>
          <p
            className="font-sans font-black text-[9px] uppercase tracking-[0.3em] mt-1"
            style={{ color: GOLD }}
          >
            {member.role}
          </p>
        </div>
      </div>

      {/* ── GOLD BORDER ── */}
      <div
        className="h-[2px] w-full transition-all duration-500"
        style={{
          background: hov
            ? `linear-gradient(to right, ${GOLD}, ${GOLD2}, rgba(212,175,55,0.2))`
            : `linear-gradient(to right, ${GOLD2}, rgba(212,175,55,0.15))`,
        }}
      />

      {/* ── CARD BODY ── */}
      <div className="flex flex-col flex-1 px-5 pt-5 pb-6 gap-4">

        {/* Tags */}
        <div className="flex flex-wrap  gap-1.5">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans font-black text-[8px] uppercase tracking-wide  px-2 py-1  transition-all duration-300 rounded-2xl"
              style={{
                color: hov ? GOLD2 : "rgba(10,20,40,0.35)",
                border: `1px solid ${hov ? GOLD_LINE : "rgba(10,20,40,0.1)"}`,
                background: hov ? GOLD_FAINT : "transparent",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px transition-all duration-500"
          style={{
            background: hov
              ? `linear-gradient(to right, ${GOLD_LINE}, transparent)`
              : "rgba(10,20,40,0.06)",
          }}
        />

        {/* Bio */}
        <p
          className="font-sans font-medium text-[12.5px] leading-[1.75] transition-colors duration-300"
          style={{ color: hov ? "rgba(10,20,40,0.65)" : "rgba(10,20,40,0.45)" }}
        >
          {member.bio}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="h-px transition-all duration-500"
              style={{
                width: hov ? 28 : 16,
                background: GOLD,
                opacity: hov ? 0.7 : 0.3,
              }}
            />
            <span
              className="font-sans font-black text-[7.5px] uppercase tracking-[0.28em]"
              style={{ color: "rgba(10,20,40,0.22)" }}
            >
              Team Member
            </span>
          </div>
          <span
            className="font-serif font-black text-2xl leading-none transition-colors duration-300"
            style={{ color: hov ? GOLD_LINE : "rgba(10,20,40,0.06)" }}
          >
            &rarr;
          </span>
        </div>

      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════
export default function LeadershipSection() {
  return (
    <section id="leadership" className="relative overflow-hidden">

      {/* ══ HEADER BAND ══ */}
      <div className="bg-primary relative overflow-hidden">

        {/* Subtle hatch texture */}


        {/* Large ghost numeral */}
        {/* <div
          className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-black select-none pointer-events-none"
          style={{ fontSize: "clamp(120px,18vw,200px)", color: "rgba(255,255,255,0.025)", lineHeight: 1 }}
        >
          04
        </div> */}

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10" style={{ background: GOLD }} />
            <span
              className="font-sans font-black text-[9px] uppercase tracking-[0.6em]"
              style={{ color: GOLD }}
            >
              Management Board
            </span>
          </motion.div>

          {/* Heading row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-black text-white uppercase  leading-tight"
              style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
            >
              Institutional Sponsorship
              <br />
              <span style={{ color: GOLD }}>&amp; Execution Team</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-sans font-medium text-md leading-relaxed lg:text-right lg:max-w-xs"
              style={{
                color: "rgba(243, 234, 234, 0.86)",
                borderRight: `1.5px solid ${GOLD_LINE}`,
                paddingRight: 16,
              }}
            >
              A team built on decades of institutional real estate experience across investment, execution, and leasing.
            </motion.p>
          </div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 h-[2px]"
            style={{
              background: `linear-gradient(to right, ${GOLD}, rgba(212,175,55,0.3), transparent)`,
            }}
          />

          {/* Stat strip */}
          <div className="mt-8">
            <StatStrip />
          </div>
        </div>
      </div>

      {/* ══ BODY ══ */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Section label row */}
          <div className="flex items-center gap-4 mb-12">
            <span
              className=" font-black text-[13px] uppercase tracking-[0.5em]"
              style={{ color: GOLD }}
            >
              Core Team
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(10,20,40,0.07)" }} />
            <span
              className="font-sans font-black text-[13px] uppercase tracking-[0.3em] text-primary/60"
            >
              {team.length} Members
            </span>
          </div>

          {/* Team grid — 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>

          {/* Footer strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-14 pt-6 flex items-center justify-between"
            style={{ borderTop: `1px solid rgba(177, 137, 8, 0.71)` }}
          >
            <span className="font-sans font-black text-[9px] uppercase tracking-[0.3em] text-primary/60">
              Integrated Leadership — India
            </span>
            <div className="flex items-center gap-2.5">
              <div className="h-px w-8" style={{ background: GOLD_LINE }} />
              <span
                className="font-sans font-black text-[10px] uppercase tracking-[0.3em]"
                style={{ color: "rgba(219, 171, 10, 0.59)" }}
              >
                Industrial Real Estate
              </span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}