"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { MapPin, ArrowUpRight, Maximize2, Layers } from "lucide-react";
import Link from "next/link";

const categories = ["All Projects", "Completed", "In Progress", "Pipeline"];

const projects = [
  // ... existing project data ...
  {
    title: "Redhills Logistics Hub",
    location: "Redhills, Chennai",
    status: "Completed",
    category: "Completed",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    size: "500,000 Sq Ft",
    specs: ["Grade-A", "FM2 Flooring", "12m Height"]
  },
  {
    title: "Chengalpattu Industrial Park",
    location: "Chengalpattu, TN",
    status: "In Progress",
    category: "In Progress",
    image: "https://images.unsplash.com/photo-1590684153400-e3e7a935b0e1?auto=format&fit=crop&q=80&w=800",
    size: "1.2M Sq Ft",
    specs: ["Strategic Hub", "Green Building", "Multi-modal"]
  },
  {
    title: "Sriperumbudur Smart Warehouse",
    location: "Sriperumbudur, TN",
    status: "Pipeline",
    category: "Pipeline",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    size: "750,000 Sq Ft",
    specs: ["Fully Automated", "Solar Powered", "Prime Location"]
  },
  {
    title: "Oragadam Distribution Center",
    location: "Oragadam, Chennai",
    status: "Completed",
    category: "Completed",
    image: "https://images.unsplash.com/photo-1454165833767-027ff33027b6?auto=format&fit=crop&q=80&w=800",
    size: "300,000 Sq Ft",
    specs: ["Last Mile", "E-com Optimized", "24/7 Access"]
  },
  {
      title: "Bengaluru Logistics Terminal",
      location: "Hosur Road, Bengaluru",
      status: "Pipeline",
      category: "Pipeline",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800",
      size: "2M Sq Ft",
      specs: ["Mega Hub", "Cross-Docking", "Premium Design"]
  },
  {
      title: "Pune Industrial Ecosystem",
      location: "Chakan, Maharashtra",
      status: "In Progress",
      category: "In Progress",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
      size: "850,000 Sq Ft",
      specs: ["Auto Cluster", "Smart Security", "HVLS Fans"]
  }
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All Projects");

  const filteredProjects = activeTab === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen bg-white">
 
      
      {/* 1. Page Header */}
      <section className="relative pt-60 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pill-tag text-white border-white/10 bg-white/5 mb-8"
          >
            Asset Portfolio
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-black text-white leading-none uppercase tracking-tighter"
          >
            Industrial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">Landmarks</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 font-sans font-medium max-w-2xl mt-8 leading-relaxed"
          >
            A diverse range of strategic assets that define the standard of institutional-grade infrastructure across India.
          </motion.p>
        </div>
      </section>

      {/* 2. Project List Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
            <div className="flex flex-wrap justify-center gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-8 py-3 rounded-xl font-sans font-black text-[10px] uppercase tracking-widest transition-all ${
                        activeTab === cat 
                        ? "bg-primary text-white shadow-xl" 
                        : "text-primary/40 hover:text-primary hover:bg-white"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            <div className="text-[10px] font-black uppercase tracking-widest text-primary/40">
                Found {filteredProjects.length} Strategic Assets
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="wait">
                {filteredProjects.map((project, i) => (
                <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                >
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl border border-gray-100 transition-all duration-700">
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute top-8 right-8 z-10">
                            <div className="px-6 py-2 rounded-full glass-dark text-white font-sans font-black text-[9px] uppercase tracking-widest border border-white/5 shadow-2xl">
                            {project.status}
                            </div>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-12 flex flex-col justify-end">
                            <h4 className="text-3xl font-serif font-black text-white uppercase tracking-tighter mb-6 leading-tight">{project.title}</h4>
                            <div className="space-y-4 mb-8">
                                {project.specs.map(spec => (
                                    <div key={spec} className="flex items-center gap-3 text-white/60 text-[9px] font-black uppercase tracking-widest">
                                        <Layers size={12} className="text-accent" />
                                        {spec}
                                    </div>
                                ))}
                            </div>
                            <Link 
                                href="/contact"
                                className="w-full py-4 bg-accent text-white rounded-xl text-center font-sans font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-4"
                            >
                                Inquire Space <Maximize2 size={14} />
                            </Link>
                        </div>
                    </div>

                    <div className="px-4">
                        <div className="flex items-center gap-2 text-accent text-[9px] font-black uppercase tracking-[0.2em] mb-3">
                            <MapPin size={12} />
                            {project.location}
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors truncate">{project.title}</h3>
                        <div className="text-xl font-serif font-black text-primary/40">{project.size}</div>
                    </div>
                </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
