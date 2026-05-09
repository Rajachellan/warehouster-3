"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { CheckCircle2, Zap } from "lucide-react";
import banner from "../../../assets/aerial-view-factory-trucks-parked-near-warehouse-daytime.jpg"
const sections = [
  {
    title: "What we do",
    content: "We provide high-level strategic consulting for industrial real estate. Our experts offer insights on site selection, architectural optimization, and logistics network design.",
    image: "https://images.unsplash.com/photo-1454165833767-027ff33027b6?auto=format&fit=crop&q=80&w=1200",
    points: ["Portfolio Strategy", "Asset Optimization", "Market Analysis", "Risk Assessment"]
  },
  {
    title: "Our Process",
    content: "Utilizing deep data analytics and industrial intelligence, we work with clients to define a roadmap for growth and operational excellence in the warehousing sector.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    points: ["Data Analysis", "Strategic Roadmap", "Site Audits", "Investment Vetting"]
  },
  {
    title: "Strategic Benefits",
    content: "Consulting with Warehouster ensures your industrial footprint is lean, agile, and positioned for maximum profitability and future scaling.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    points: ["Profitability Boost", "Agility Focus", "Scalable Network", "Market Insight"]
  },
  {
    title: "Case Highlights",
    content: "Advised an e-commerce giant on a nation-wide logistics network overhaul, optimizing 15 distribution centers and reducing last-mile costs by 18%.",
    image: "https://images.unsplash.com/photo-1582213706001-c918c0e29202?auto=format&fit=crop&q=80&w=1200",
    points: ["Network Overhaul", "15 Hubs Optimized", "18% Cost Save", "National Strategy"]
  }
];

export default function IndustrialConsultingPage() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1507537243555-d41982b6c694?auto=format&fit=crop&q=80&w=1920" 
            alt="Industrial Consulting" 
            fill 
            sizes="100vw"
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-[rgba(10,20,40,0.8)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-[rgba(10,20,40,0.4)] to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="pill-tag border-[rgba(212,175,55,0.3)] text-accent bg-[rgba(212,175,55,0.05)] mb-8">Strategic Intelligence</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-serif font-black text-white leading-none uppercase tracking-tighter">Industrial <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">Consulting</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-white/50 font-sans font-medium max-w-2xl mt-8 leading-relaxed">Expert advisory services for optimized industrial footprints and high-yield real estate investments.</motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {sections.map((section, i) => (
            <div key={section.title} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 py-24 border-b border-gray-100 last:border-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 space-y-8">
                    <div className="flex items-center gap-4 text-accent"><Zap size={20} /><span className="text-[10px] font-black uppercase tracking-[0.4em] font-sans">Section {i + 1}</span></div>
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight uppercase tracking-tighter">{section.title}</h2>
                    <p className="text-lg text-[rgba(10,20,40,0.6)] font-medium leading-relaxed">{section.content}</p>
                    <div className="grid grid-cols-2 gap-6">
                        {section.points.map((point) => (
                            <div key={point} className="flex items-center gap-3"><CheckCircle2 size={16} className="text-accent" /><span className="text-xs font-bold text-[rgba(10,20,40,0.8)] uppercase tracking-widest">{point}</span></div>
                        ))}
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image 
                      src={section.image} 
                      alt={section.title} 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover" 
                    />
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
