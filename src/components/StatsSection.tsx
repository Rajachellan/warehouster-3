"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Developed Space", value: "12M+", sub: "Square Feet" },
  { label: "Strategic Locations", value: "25+", sub: "Pan India" },
  { label: "Happy Clients", value: "150+", sub: "Fortune 500" },
  { label: "Investment Managed", value: "$2B+", sub: "Asset Value" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center lg:text-left group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-accent mb-2 group-hover:scale-110 transition-transform cursor-default">
                {stat.value}
              </div>
              <div className="text-xl font-bold mb-1 tracking-tight">{stat.label}</div>
              <div className="text-white/40 font-semibold uppercase text-xs tracking-[0.2em]">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
