"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { CheckCircle2, Zap } from "lucide-react";

const sections = [
  {
    title: "What we do",
    content: "We build Grade-A industrial assets using next-generation construction techniques. Our focus is on structural integrity, operational efficiency, and long-term sustainability.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200",
    points: ["Pre-engineered Buildings", "Heavy-duty Flooring", "Sustainable Infrastructure", "Smart Safety Systems"]
  },
  {
    title: "Our Process",
    content: "Combining advanced robotics and modular construction, we deliver industrial ecosystems that are optimized for throughput and resilient to future operational shifts.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    points: ["Modular Design", "Structural Fabricaton", "Site Assembly", "Final Commissioning"]
  },
  {
    title: "Strategic Benefits",
    content: "Choosing Warehouster for construction ensures faster time-to-market, superior durability, and significant reductions in maintenance costs through high-grade material sourcing.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200",
    points: ["Zero Lead-time", "Quality Durability", "Cost Certainty", "Scale Ready"]
  },
  {
    title: "Case Highlights",
    content: "Designed and built a 1.2M sq. ft. multi-specialty warehouse in Bengaluru in record 11 months, setting a new benchmark for speed and quality in the region.",
    image: "https://images.unsplash.com/photo-1590684153400-e3e7a935b0e1?auto=format&fit=crop&q=80&w=1200",
    points: ["1.2M Sq. Ft.", "Bengaluru City", "11 Months Delivery", "Grade-A Hub"]
  }
];

export default function WarehouseConstructionPage() {
  return (
    <main className="min-h-screen bg-white">
     
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" alt="Warehouse Construction" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="pill-tag border-accent/30 text-accent bg-accent/5 mb-8">Engineering Power</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-serif font-black text-white leading-none uppercase tracking-tighter">Warehouse <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">Construction</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-white/50 font-sans font-medium max-w-2xl mt-8 leading-relaxed">            Grade-A construction standards and India&apos;s high-performance industrial ecosystems built for the future of global commerce.
</motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {sections.map((section, i) => (
            <div key={section.title} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 py-24 border-b border-gray-100 last:border-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 space-y-8">
                    <div className="flex items-center gap-4 text-accent"><Zap size={20} /><span className="text-[10px] font-black uppercase tracking-[0.4em] font-sans">Section {i + 1}</span></div>
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight uppercase tracking-tighter">{section.title}</h2>
                    <p className="text-lg text-primary/60 font-medium leading-relaxed">{section.content}</p>
                    <div className="grid grid-cols-2 gap-6">
                        {section.points.map((point) => (
                            <div key={point} className="flex items-center gap-3"><CheckCircle2 size={16} className="text-accent" /><span className="text-xs font-bold text-primary/80 uppercase tracking-widest">{point}</span></div>
                        ))}
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image src={section.image} alt={section.title} fill className="object-cover" />
                </motion.div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
