"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ArrowRight, Lock, Shield, TrendingUp, MapPin } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

import heroBg from "@/assets/warehouse-about.jpg";

/* ─────────────── DATA ─────────────── */

const MANDATES = [
  {
    client: "Blackstone",
    year: "2023 - 2024",
    corridor: "North Chennai (Redhills)",
    corridorRegion: "Chennai Region",
    mandate: "Land aggregation + Development management",
    mandateType: "Land Aggregation",
    land: "25+ acres",
    bts: "~500,000 sq ft",
    status: "Under delivery",
    occupierType: "Global PE",
    caseStudy: "CASE 01 →",
    caseLink: "/projects/redhills-development"
  },
  {
    client: "Horizon Industrial Parks",
    year: "2024",
    corridor: "Chengalpattu · South Chennai",
    corridorRegion: "Chennai Region",
    mandate: "Off-market institutionalisation + Dev mgmt",
    mandateType: "Off-Market Institutional",
    land: "52 acres",
    bts: "1.3M sq ft potential",
    status: "Closed",
    occupierType: "REIT / Platform",
    caseStudy: "CASE 03 →",
    caseLink: "/projects/chengalpattu-industrial"
  },
  {
    client: "Britannia Industries",
    year: "2023 - 2024",
    corridor: "Puducherry corridor",
    corridorRegion: "Pondicherry",
    mandate: "Built-to-suit delivery",
    mandateType: "BTS Delivery",
    land: "NDA",
    bts: "72,000 sq ft",
    status: "Under delivery",
    occupierType: "Fortune 500",
    caseStudy: "CASE 02 →",
    caseLink: "/projects/pondicherry-bts"
  },
  {
    client: "HNI Client",
    year: "2021",
    corridor: "Ludhiana · North India",
    corridorRegion: "North India",
    mandate: "BTS — Flipkart Ecom Park",
    mandateType: "BTS Delivery",
    land: "NDA",
    bts: "Confidential",
    status: "Closed",
    occupierType: "Domestic PE",
    caseStudy: "NDA"
  },
  {
    client: "Institutional PE Fund",
    year: "2023 - 2024",
    corridor: "Jaisalmer · North-West India",
    corridorRegion: "North West India",
    mandate: "Transaction advisory",
    mandateType: "Transaction Advisory",
    land: "NDA",
    bts: "—",
    status: "Under execution",
    occupierType: "Global PE",
    caseStudy: "NDA"
  },
  {
    client: "Confidential occupier",
    year: "2024 - 2025",
    corridor: "Oragadam · SW Chennai",
    corridorRegion: "Chennai Region",
    mandate: "Off-market land advisory",
    mandateType: "Off-Market Institutional",
    land: "10-15 acres",
    bts: "—",
    status: "Under execution",
    occupierType: "Fortune 500",
    caseStudy: "NDA"
  },
  {
    client: "Confidential EMS",
    year: "2024 - 2025",
    corridor: "Sriperumbudur",
    corridorRegion: "Chennai Region",
    mandate: "BTS feasibility + Land",
    mandateType: "BTS Delivery",
    land: "12-20 acres",
    bts: "200k-350k sq",
    status: "Under execution",
    occupierType: "Global PE",
    caseStudy: "NDA"
  },
  {
    client: "EV / ancillary occupier",
    year: "2024",
    corridor: "Hosur · Bengaluru-Chennai",
    corridorRegion: "Hosur",
    mandate: "Land acquisition advisory",
    mandateType: "Land Aggregation",
    land: "55 acres",
    bts: "—",
    status: "Under execution",
    occupierType: "Domestic PE",
    caseStudy: "NDA"
  },
  {
    client: "Logistics platform",
    year: "2024 - 2025",
    corridor: "Nelamangala · Hoskote · Dobbaspet",
    corridorRegion: "Bangalore",
    mandate: "Off-market industrial land",
    mandateType: "Off-Market Institutional",
    land: "20-30 acres",
    bts: "500k-800k sq ft",
    status: "Under execution",
    occupierType: "REIT / Platform",
    caseStudy: "NDA"
  },
  {
    client: "Occupier mandate",
    year: "2024",
    corridor: "Coimbatore · W. Tamil Nadu",
    corridorRegion: "Coimbatore",
    mandate: "Development Management",
    mandateType: "Development Management",
    land: "Active mandate",
    bts: "Active mandate",
    status: "Under execution",
    occupierType: "HNI",
    caseStudy: "NDA"
  },
  {
    client: "Distribution occupier",
    year: "2024",
    corridor: "Madurai · South Tamil Nadu",
    corridorRegion: "Madurai",
    mandate: "BTS origination",
    mandateType: "BTS Delivery",
    land: "Active mandate",
    bts: "Active mandate",
    status: "Under execution",
    occupierType: "Fortune 500",
    caseStudy: "NDA"
  }
];

const STATS = [
  { value: "₹300 Cr+", label: "Total Transaction Value" },
  { value: "42+", label: "Active Mandates" },
  { value: "11", label: "Corridors Covered" },
  { value: "100%", label: "Founder-Underwritten" },
];

/* ─────────────── ANIMATIONS ─────────────── */

const easeOut = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/* ─────────────── HELPERS ─────────────── */

function getStatusTextStyle(status: string) {
  switch (status.toLowerCase()) {
    case "closed":
      return "text-amber-600 font-semibold";
    case "under delivery":
    case "under execution":
      return "text-amber-600 font-semibold";
    case "origination active":
    default:
      return "text-stone-500 font-semibold";
  }
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */

export default function TrackRecordContent() {
  const [corridorFilter, setCorridorFilter] = useState("All");
  const [mandateFilter, setMandateFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [occupierFilter, setOccupierFilter] = useState("All");

  const filteredMandates = MANDATES.filter((m) => {
    const matchCorridor = corridorFilter === "All" || m.corridorRegion === corridorFilter;
    const matchMandate = mandateFilter === "All" || m.mandateType === mandateFilter;
    const matchStatus = statusFilter === "All" || m.status.toLowerCase() === statusFilter.toLowerCase();
    const matchOccupier = occupierFilter === "All" || m.occupierType === occupierFilter;
    return matchCorridor && matchMandate && matchStatus && matchOccupier;
  });

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* ════════════════════════════════════════════════════
          HERO — Background image with dark overlay
          ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-end overflow-hidden">
        {/* Background Image */}
        <Image
          src={heroBg}
          alt="Industrial warehouse aerial"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#0A1428]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428]/90 via-[#0A1428]/60 to-[#0A1428]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-transparent to-[#0A1428]/30" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20 md:pt-48 md:pb-28 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/8 backdrop-blur-sm">
                <Shield size={13} className="text-[#D4AF37]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Track Record
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-[1.08] mb-8 max-w-4xl"
            >
              <span className="text-[#D4AF37]">₹300 Cr+</span> in closed
              industrial transactions across South India.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/55 max-w-2xl font-medium leading-relaxed"
            >
              Land aggregation, BTS execution and development management
              mandates closed for global PE platforms, REITs and Fortune 500
              occupiers — every engagement underwritten by the founder
              personally.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          STATS BAR — Floating over hero bottom
          ════════════════════════════════════════════════════ */}
      <section className="relative z-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 -mt-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl shadow-[0_16px_64px_rgba(10,20,40,0.1)] border border-stone-100 overflow-hidden">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 md:p-8 text-center ${
                    i < STATS.length - 1
                      ? "border-r border-stone-100"
                      : ""
                  } ${i < 2 ? "border-b md:border-b-0 border-stone-100" : ""}`}
                >
                  <p className="text-2xl md:text-3xl font-black text-[#0A1428] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A1428]/35">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          LEDGER SECTION — Filters + Table
          ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {/* Section header */}
            <motion.div variants={fadeUp} className="mb-14">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-[2px] w-10 bg-[#D4AF37]" />
                    <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#D4AF37]">
                      Transaction Database
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-[#0A1428] leading-[1.08]">
                    Filter the mandate ledger.
                  </h2>
                </div>
                <p className="text-sm text-[#0A1428]/40 max-w-md font-medium leading-relaxed lg:pb-1">
                  Counterparty names, transaction values, and locations
                  available under NDA to active institutional engagements.
                </p>
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div
              variants={fadeUp}
              className="bg-white p-5 md:p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-wrap gap-4 mb-6"
            >
              {[
                {
                  label: "Corridor",
                  value: corridorFilter,
                  onChange: setCorridorFilter,
                  options: ["All", "Chennai Region", "Hosur", "Bangalore", "Coimbatore", "Madurai", "Pondicherry", "North India", "North West India"],
                },
                {
                  label: "Mandate",
                  value: mandateFilter,
                  onChange: setMandateFilter,
                  options: ["All", "Land Aggregation", "BTS Delivery", "Development Management", "Transaction Advisory", "Off-Market Institutional"],
                },
                {
                  label: "Status",
                  value: statusFilter,
                  onChange: setStatusFilter,
                  options: ["All", "Closed", "Under Delivery", "Under Execution", "Origination Active"],
                },
                {
                  label: "Occupier",
                  value: occupierFilter,
                  onChange: setOccupierFilter,
                  options: ["All", "Global PE", "Domestic PE", "Fortune 500", "REIT / Platform", "HNI"],
                },
              ].map((filter) => (
                <div key={filter.label} className="flex-1 min-w-[180px]">
                  <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#0A1428]/30 mb-2">
                    {filter.label}
                  </label>
                  <div className="relative">
                    <select
                      value={filter.value}
                      onChange={(e) => filter.onChange(e.target.value)}
                      className="w-full appearance-none bg-[#F9FAFB] border border-stone-200 rounded-xl px-4 py-3 text-sm font-bold text-[#0A1428] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/50 transition-all cursor-pointer hover:border-stone-300"
                    >
                      {filter.options.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Results count */}
            <motion.div variants={fadeUp} className="mb-6">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0A1428]/40">
                SHOWING {filteredMandates.length} OF {MANDATES.length} MANDATES
              </p>
            </motion.div>

            {/* Flat Minimal Table (Responsive, fits page width, no horizontal scrollbar) */}
            <motion.div variants={scaleIn}>
              <div className="w-full overflow-x-auto scrollbar-hide">
                <table className="w-full text-left border-collapse table-auto md:table-fixed min-w-[700px] lg:min-w-0">
                  <thead>
                    <tr className="border-t border-b border-stone-200">
                      {[
                        { name: "CLIENT", className: "w-[16%] pl-1" },
                        { name: "YEAR", className: "w-[9%]" },
                        { name: "CORRIDOR", className: "w-[21%]" },
                        { name: "MANDATE", className: "w-[25%]" },
                        { name: "LAND", className: "w-[8%]" },
                        { name: "BTS", className: "w-[9%]" },
                        { name: "STATUS", className: "w-[8%]" },
                        { name: "CASE", className: "w-[4%] text-right pr-2" },
                      ].map((col) => (
                        <th
                          key={col.name}
                          className={`py-4 px-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0A1428]/40 ${col.className}`}
                        >
                          {col.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMandates.map((m, i) => (
                      <motion.tr
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.04,
                          duration: 0.4,
                        }}
                        key={`${m.client}-${i}`}
                        className="border-b border-stone-200/60 last:border-b-0 hover:bg-[#D4AF37]/[0.01] transition-colors"
                      >
                        <td className="py-6 px-3 pl-1 text-sm text-[#0A1428]">
                          <span className="font-serif font-black text-[15px] block leading-tight">{m.client}</span>
                        </td>
                        <td className="py-6 px-3 text-xs md:text-sm text-[#0A1428]/70 font-medium">
                          {m.year}
                        </td>
                        <td className="py-6 px-3 text-xs md:text-sm text-[#0A1428]/70 font-medium leading-relaxed">
                          {m.corridor}
                        </td>
                        <td className="py-6 px-3 text-xs md:text-sm text-[#0A1428]/70 font-medium leading-relaxed">
                          {m.mandate}
                        </td>
                        <td className="py-6 px-3 text-xs md:text-sm text-[#0A1428]/70 font-medium">
                          {m.land}
                        </td>
                        <td className="py-6 px-3 text-xs md:text-sm text-[#0A1428]/70 font-medium">
                          {m.bts}
                        </td>
                        <td className="py-6 px-3 text-xs md:text-sm">
                          <span className={getStatusTextStyle(m.status)}>
                            {m.status}
                          </span>
                        </td>
                        <td className="py-6 px-3 text-right pr-2 text-xs md:text-sm font-bold">
                          {m.caseStudy !== "NDA" && m.caseLink ? (
                            <Link
                              href={m.caseLink}
                              className="text-[#D4AF37] hover:text-[#0A1428] transition-colors inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider whitespace-nowrap"
                            >
                              {m.caseStudy}
                            </Link>
                          ) : (
                            <span className="text-[#0A1428]/25 text-[11px] font-bold uppercase tracking-wider">
                              {m.caseStudy}
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredMandates.length === 0 && (
                <div className="p-8 text-center text-stone-400 text-xs font-medium bg-white rounded-2xl border border-stone-100 shadow-sm mt-4">
                  No mandates match the selected filters.
                </div>
              )}

              {/* Footer disclaimer */}
              <div className="mt-8 pt-5 border-t border-stone-200/40">
                <p className="text-[11px] text-[#0A1428]/30 font-medium leading-relaxed">
                  Transaction values, exact locations, and counterparty
                  details available under NDA to active institutional
                  engagements only.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA — Dark navy accent
          ════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-32 bg-[#0A1428] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_70%_40%,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <motion.div variants={fadeUp} className="md:col-span-7">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-[2px] w-10 bg-[#D4AF37]/40" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#D4AF37]/70">
                  Only the track record matters
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white leading-[1.12]">
                Repeat institutional mandates are the hardest credential to{" "}
                <span className="text-[#D4AF37]">fake.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="md:col-span-5 flex md:justify-end"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#c9a632] text-[#0A1428] text-[12px] font-black uppercase tracking-[0.2em] shadow-[0_8px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_16px_48px_rgba(212,175,55,0.5)] transition-all duration-500 hover:-translate-y-0.5 active:scale-[0.98] whitespace-nowrap"
              >
                Discuss your mandate
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
