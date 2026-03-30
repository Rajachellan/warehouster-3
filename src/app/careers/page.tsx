"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Briefcase, MapPin, Clock, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    title: "Director - Infrastructure",
    location: "Mumbai HQ",
    type: "Leadership",
    category: "Operations",
  },
  {
    title: "Regional Leasing Lead",
    location: "Bengaluru Road",
    type: "Strategic",
    category: "Commercial",
  },
  {
    title: "Industrial Architect",
    location: "Chennai Hub",
    type: "Consulting",
    category: "Design",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
    
      
      {/* 1. Page Header */}
      <section className="relative pt-60 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="pill-tag border-accent/30 text-accent bg-accent/5 mb-8"
          >
            Human Capital
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif font-black text-white leading-none uppercase tracking-tighter"
          >
            Join the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">Elite</span> Force
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 font-sans font-medium max-w-2xl mt-12 leading-relaxed"
          >
            Architect your career with a team defining the structural integrity of India&apos;s future.
          </motion.p>
        </div>
      </section>

      {/* 2. Open Positions */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-12 mb-32">
                {[
                    { label: "High Yield", desc: "Accelerate your professional growth in a high-stakes industrial environment across India&apos;s key regions." },
                    { label: "Meritocratic", desc: "Recognition based on structural delivery and strategic intelligence." },
                    { label: "Visionary", desc: "Work on projects that define cities and economic corridors." },
                    { label: "Global", desc: "Collaborate with international partners and Grade-A standards." },
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-accent/5 hover:border-accent/20 transition-all duration-500"
                    >
                        <h4 className="text-2xl font-serif font-bold text-primary mb-6">{item.label}</h4>
                        <p className="text-primary/40 font-bold uppercase text-[9px] tracking-[0.3em] leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className="space-y-12">
                <h2 className="text-5xl md:text-7xl font-serif font-black text-primary mb-16 uppercase tracking-tighter">Strategic <span className="text-accent">Opportunities</span></h2>
                <div className="grid gap-8">
                    {jobs.map((job, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-12 rounded-[3.5rem] bg-gray-50 border border-gray-100 hover:bg-primary hover:border-primary transition-all duration-700 flex flex-col md:flex-row md:items-center justify-between gap-12"
                        >
                            <div className="flex gap-10 items-center">
                                <div className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-xl shadow-gray-200/50">
                                    <Briefcase size={32} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-serif font-bold text-primary group-hover:text-white transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap gap-8 items-center text-primary/30 group-hover:text-white/40 text-[10px] font-black uppercase tracking-[0.3em] transition-colors">
                                        <div className="flex items-center gap-3"><MapPin size={14} className="text-accent" /> {job.location}</div>
                                        <div className="flex items-center gap-3"><Clock size={14} className="text-accent" /> {job.type}</div>
                                        <div className="px-5 py-2 rounded-full border border-primary/10 group-hover:border-white/10">{job.category}</div>
                                    </div>
                                </div>
                            </div>
                            <Link 
                                href="/contact"
                                className="px-12 py-5 bg-white text-primary rounded-2xl font-sans font-black text-[10px] uppercase tracking-widest hover:bg-accent hover:text-white transition-all transform group-hover:translate-x-4 shadow-lg"
                            >
                                Submit Brief
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
