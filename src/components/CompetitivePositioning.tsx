"use client";

import { motion } from "framer-motion";
import { Check, X, Shield, Zap, TrendingUp, BarChart3, Users, ClipboardCheck } from "lucide-react";

const comparisonData = [
  {
    parameter: "Speed-to-Market",
    icon: Zap,
    warehouster: "18 - 24 Months",
    traditional: "30 - 36+ Months",
  },
  {
    parameter: "Capital Efficiency",
    icon: TrendingUp,
    warehouster: "18 - 22% IRR",
    traditional: "12 - 15% IRR",
  },
  {
    parameter: "Governance",
    icon: Shield,
    warehouster: "Full SPV Governance",
    traditional: "Limited / Mixed",
  },
  {
    parameter: "Exit Track Record",
    icon: BarChart3,
    warehouster: "Proven Tier-1 Exits",
    traditional: "Few Exits / Hold Focus",
  },
  {
    parameter: "Capabilities",
    icon: Users,
    warehouster: "Complete Lifecycle",
    traditional: "Fragmented / Outsourced",
  },
  {
    parameter: "Approvals",
    icon: ClipboardCheck,
    warehouster: "DTCP / Env. Mastery",
    traditional: "Standard / Basic",
  },
];

const highlightStats = [
  {
    value: "6x",
    label: "Faster Approvals vs\nTraditional Developers",
  },
  {
    value: "+7%",
    label: "Higher IRR Delivered\nto Investors on Average",
  },
  {
    value: "100%",
    label: "SPV-Governed\nProjects with Full Compliance",
  },
];

export default function CompetitivePositioning() {
  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-black text-[#0A1428] uppercase tracking-tighter mb-6"
          >
            Competitive <span className="text-[#D4AF37]">Positioning</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#0A1428]/60 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            How Warehouster outperforms traditional industrial developers across every key metric that matters to institutional investors.
          </motion.p>
        </div>

        {/* Comparison Table Container */}
        <div className="relative mb-16">
          {/* Main Comparison Table */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1428] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-white/10">
              <div className="p-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 flex items-center">
                Key Parameter
              </div>
              <div className="p-8 bg-white/5 text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37] text-center border-x border-white/10">
                Warehouster
              </div>
              <div className="p-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 text-center">
                Traditional Developers
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={row.parameter}
                className="grid grid-cols-3 group hover:bg-white/[0.02] transition-colors duration-500 border-b border-white/5 last:border-0"
              >
                {/* Parameter Column */}
                <div className="p-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-[#D4AF37] transition-all duration-500 group-hover:scale-110">
                    <row.icon size={20} />
                  </div>
                  <span className="text-sm font-sans font-black uppercase tracking-wider text-white/80">
                    {row.parameter}
                  </span>
                </div>

                {/* Warehouster Column */}
                <div className="p-8 bg-[#D4AF37]/5 border-x border-white/5 flex items-center justify-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base font-serif font-black text-white">
                    {row.warehouster}
                  </span>
                </div>

                {/* Traditional Column */}
                <div className="p-8 flex items-center justify-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500/40 group-hover:text-red-500/60 transition-colors duration-500">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base font-serif font-black text-white/40 group-hover:text-white/60 transition-colors duration-500">
                    {row.traditional}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Background Highlight Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </div>

        {/* Bottom Highlight Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white p-10 rounded-[1.5rem] border border-gray-100 shadow-xl shadow-black/5 hover:border-[#D4AF37]/30 transition-all duration-500 group"
            >
              <div className="text-5xl lg:text-6xl font-serif font-black text-[#0A1428] mb-4 group-hover:text-[#D4AF37] transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A1428]/40 leading-relaxed whitespace-pre-line group-hover:text-[#0A1428]/60 transition-colors duration-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
