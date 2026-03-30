"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Hammer, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    title: "Institutional Heritage",
    desc: "A proven legacy of delivering large-scale industrial and warehouse infrastructure across India’s primary logistics and economic hubs.",
    icon: Building2,
  },
  {
    title: "Intelligence Driven",
    desc: "Data-backed site selection and logistics network optimization tailored for high-growth enterprises and 3PL operations.",
    icon: Users,
  },
  {
    title: "Execution Agility",
    desc: "Fast-track project delivery with precision engineering, ensuring Grade-A standards and operational readiness.",
    icon: Hammer,
  },
  {
    title: "Global Compliance",
    desc: "100% regulatory compliance with international-quality construction, safety standards, and risk-controlled environments.",
    icon: ShieldCheck,
  },
];

export default function OverviewSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="pill-tag border-accent/20 text-accent bg-accent/5 mb-8">
             Strategic Industrial Excellence
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-primary leading-tight uppercase tracking-tighter mb-12">
            Defining the Future of  
              <span className="text-accent"> Industrial Warehousing</span> 
            </h2>
            <p className="text-xl text-primary/50 font-medium leading-relaxed mb-12 max-w-xl text-justify ">
              Warehouster is a leading provider of Grade-A industrial warehousing and logistics infrastructure in India, delivering strategically located, high-performance spaces designed for modern supply chain operations. With a strong presence across key economic corridors in South India, we enable scalable growth, operational efficiency, and seamless distribution for enterprises and 3PL leaders.
            </p>
            <Link
              href="/about"
              className="group flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-primary hover:text-accent transition-all"
            >
              Explore Our Approach<ArrowRight size={18} className="translate-x-[-10px] group-hover:translate-x-0 transition-all text-accent" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-primary hover:border-primary transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-accent group-hover:text-white transition-all">
                  <pillar.icon size={28} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-white transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-primary/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed group-hover:text-white/40 transition-colors">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
