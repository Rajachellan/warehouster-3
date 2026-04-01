"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Blackstone, Horizon,Britannia", value: "3 Projects", sub: "Track Record" },
  { label: "Across TN & Hosur Belt", value: "330+ Acres", sub: "Pipeline" },
  { label: "12 Mn sq.ft delivered", value: "150+ yrs", sub: "Team" },
  { label: "Seed to Scale 7.7Mn sq.ft", value: "₹200 - 300 Cr", sub: "Capital Ask" },
];

export default function SummarySection() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-4xl font-serif font-black text-accent mb-6 group-hover:scale-110 transition-transform duration-700">
                {stat.value}
              </div>
              <div className="text-sm font-sans font-black uppercase tracking-[0.4em] mb-3 text-white/70 group-hover:text-white transition-colors">
                {stat.label}
              </div>
              <div className="text-accent/20 font-sans font-black uppercase text-[9px] tracking-[0.6em] group-hover:text-accent/40 transition-colors">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
