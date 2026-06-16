"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const MANDATES = [
  {
    client: "Blackstone",
    year: "2023 - 2024",
    corridor: "North Chennai (Redhills)",
    mandate: "Land aggregation + Development management",
    size: "25+ acres",
    sqFt: "~500,000 sq ft",
    status: "Under delivery",
    nda: "Active",
  },
  {
    client: "Horizon Industrial Parks",
    year: "2024",
    corridor: "Chengalpattu - South Chennai",
    mandate: "Off-market institutional closure + Gov mgmt",
    size: "32 acres",
    sqFt: "1.1M sq ft potential",
    status: "Closed",
    nda: "Active",
  },
  {
    client: "Britannia Industries",
    year: "2023 - 2024",
    corridor: "Puducherry corridor",
    mandate: "Built-to-suit delivery",
    size: "N/A",
    sqFt: "75,000 sq ft",
    status: "Under delivery",
    nda: "Active",
  },
  {
    client: "ENE Client",
    year: "2023",
    corridor: "Ludhiana - North India",
    mandate: "BTS Feasibility",
    size: "N/A",
    sqFt: "Confidential",
    status: "Closed",
    nda: "Active",
  },
  {
    client: "Institutional PE Fund",
    year: "2023 - 2024",
    corridor: "Hoskote - North West India",
    mandate: "Transaction advisory",
    size: "N/A",
    sqFt: "Confidential",
    status: "Under discussion",
    nda: "Active",
  },
  {
    client: "Confidential occupier",
    year: "2024 - 2025",
    corridor: "Oragadam - SW Chennai",
    mandate: "Off-market land advisory",
    size: "10-15 acres",
    sqFt: "—",
    status: "Under discussion",
    nda: "Active",
  },
  {
    client: "Confidential EMS occupier",
    year: "2024 - 2025",
    corridor: "Sriperumbudur",
    mandate: "BTS feasibility + Land structuring",
    size: "12-20 acres",
    sqFt: "200k-300k sq ft",
    status: "Under discussion",
    nda: "Active",
  },
  {
    client: "EV / ancillary occupier",
    year: "2024",
    corridor: "Hosur - Bengaluru-Chennai corridor",
    mandate: "Land acquisition advisory",
    size: "55 acres",
    sqFt: "—",
    status: "Under execution",
    nda: "Active",
  },
  {
    client: "Logistics platform",
    year: "2024 - 2025",
    corridor: "Nelamangala - Hoskote - Dobbaspet",
    mandate: "Off-market industrial land + BTS",
    size: "20-30 acres",
    sqFt: "500k-800k sq ft",
    status: "Under discussion",
    nda: "Active",
  },
  {
    client: "Occupier mandate",
    year: "2024",
    corridor: "Coimbatore - W. Tamil Nadu",
    mandate: "BTS origination",
    size: "Active mandate",
    sqFt: "Active mandate",
    status: "Origination active",
    nda: "Active",
  },
  {
    client: "Distribution occupier",
    year: "2024",
    corridor: "Madurai - South Tamil Nadu",
    mandate: "BTS origination",
    size: "Active mandate",
    sqFt: "Active mandate",
    status: "Origination active",
    nda: "Active",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export default function TrackRecordContent() {
  const [corridorFilter, setCorridorFilter] = useState("ALL CORRIDORS");
  const [mandateFilter, setMandateFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [sectorFilter, setSectorFilter] = useState("ALL");

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0A1428] pt-40 pb-24 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-yellow-500/20 to-transparent blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div {...fadeUp}>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-8 bg-yellow-500/60 shadow-[0_0_8px_rgba(234,179,8,0.2)]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-yellow-500">
                Track Record
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-[1.1] mb-8">
              <span className="text-yellow-500">₹300 Cr+</span> in closed industrial transactions across South India.
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl font-medium leading-relaxed">
              Land aggregation, BTS execution and development management mandates closed for global PE platforms, REITs and Fortune 500 occupiers — every engagement underwritten by the founder personally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ledger Section */}
      <section className="py-24 md:py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-stone-400">
              TRANSACTION DATABASE
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-[#0A1428] mb-6">
              Filter the mandate ledger.
            </h2>
            <p className="text-stone-500 max-w-2xl">
              Filter by corridor, mandate type, status or occupier type. Counterparty names, transaction values, and locations available under NDA to active institutional engagements.
            </p>
          </motion.div>

          {/* Filters Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-stone-100 p-6 rounded-2xl flex flex-wrap gap-4 mb-8"
          >
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 mb-2">Corridor</label>
              <div className="relative">
                <select
                  value={corridorFilter}
                  onChange={(e) => setCorridorFilter(e.target.value)}
                  className="w-full appearance-none bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm font-bold text-[#0A1428] focus:outline-none focus:border-yellow-500 transition-colors cursor-pointer"
                >
                  <option>ALL CORRIDORS</option>
                  <option>Chennai</option>
                  <option>Bengaluru</option>
                  <option>Hyderabad</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 mb-2">Mandate</label>
              <div className="relative">
                <select
                  value={mandateFilter}
                  onChange={(e) => setMandateFilter(e.target.value)}
                  className="w-full appearance-none bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm font-bold text-[#0A1428] focus:outline-none focus:border-yellow-500 transition-colors cursor-pointer"
                >
                  <option>ALL</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 mb-2">Status</label>
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full appearance-none bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm font-bold text-[#0A1428] focus:outline-none focus:border-yellow-500 transition-colors cursor-pointer"
                >
                  <option>ALL</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 mb-2">Sector</label>
              <div className="relative">
                <select
                  value={sectorFilter}
                  onChange={(e) => setSectorFilter(e.target.value)}
                  className="w-full appearance-none bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm font-bold text-[#0A1428] focus:outline-none focus:border-yellow-500 transition-colors cursor-pointer"
                >
                  <option>ALL</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0A1428] mb-6">SHOWING 11 OF 42 MANDATES</p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-4 text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap pr-6">Client</th>
                  <th className="py-4 text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap pr-6">Year</th>
                  <th className="py-4 text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap pr-6">Corridor</th>
                  <th className="py-4 text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap pr-6">Mandate</th>
                  <th className="py-4 text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap pr-6">Size</th>
                  <th className="py-4 text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap pr-6">Sq Ft</th>
                  <th className="py-4 text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap pr-6">Status</th>
                  <th className="py-4 text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap">NDA</th>
                </tr>
              </thead>
              <tbody>
                {MANDATES.map((m, i) => (
                  <motion.tr
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    key={i}
                    className="border-b border-stone-100 hover:bg-white transition-colors group"
                  >
                    <td className="py-5 pr-6 text-sm font-bold text-[#0A1428] whitespace-nowrap">{m.client}</td>
                    <td className="py-5 pr-6 text-sm text-stone-500 whitespace-nowrap">{m.year}</td>
                    <td className="py-5 pr-6 text-sm text-stone-500 min-w-[200px]">{m.corridor}</td>
                    <td className="py-5 pr-6 text-sm text-stone-500 min-w-[250px]">{m.mandate}</td>
                    <td className="py-5 pr-6 text-sm text-stone-500 whitespace-nowrap">{m.size}</td>
                    <td className="py-5 pr-6 text-sm text-stone-500 whitespace-nowrap">{m.sqFt}</td>
                    <td className="py-5 pr-6 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.1em] ${
                        m.status === 'Closed' ? 'bg-green-100 text-green-700' :
                        m.status === 'Under delivery' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-stone-100 text-stone-600'
                      }`}>
                        {m.status}
                      </span>
                    </td>
                    <td className="py-5 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-stone-400 group-hover:text-yellow-500 transition-colors">
                        <Lock size={12} />
                        <span className="text-[10px] font-black uppercase tracking-[0.1em]">{m.nda}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-8 border-t border-stone-200">
            <p className="text-xs text-stone-400 font-medium">
              Transaction values, exact locations, and counterparty details available under NDA to active institutional engagements only.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.28em] text-stone-400">
              ONLY THE TRACK RECORD MATTERS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#0A1428] leading-[1.1]">
              Repeat institutional mandates are the hardest credential to fake.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#0A1428] px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-[#112240] hover:shadow-2xl active:scale-[0.98]"
            >
              Discuss your mandate
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
