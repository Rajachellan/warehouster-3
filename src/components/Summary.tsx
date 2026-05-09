"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Blackstone, Horizon, Britannia", value: "Strategic Exits", sub: "Institutional Track Record" },
  { label: "Across TN & Hosur Belt", value: "330+ Acres", sub: "Regional Pipeline" },
  { label: "12 Mn sq.ft delivered", value: "150+ Yrs", sub: "Combined Expertise" },
  { label: "Seed to Scale 7.7Mn sq.ft", value: "₹300 Cr+", sub: "Projected Capitalization" },
];

export default function SummarySection() {
  return (
    <section className="py-32 bg-[#0A1428] text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="px-8 text-center sm:text-left group"
            >
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[rgba(212,175,55,0.4)] mb-4 group-hover:text-accent transition-colors">
                {stat.sub}
              </div>
              
              <div className="text-3xl lg:text-5xl font-serif font-black text-white mb-6 group-hover:text-accent transition-all duration-500 tracking-tighter">
                {stat.value}
              </div>
              
              <div className="h-px w-8 bg-white/10 mb-6 group-hover:w-16 transition-all duration-500" />
              
              <div className="text-sm font-sans font-medium text-white/50 leading-relaxed max-w-[200px] mx-auto sm:mx-0">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
