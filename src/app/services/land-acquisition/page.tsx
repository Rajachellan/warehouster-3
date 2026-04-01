"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

const sections = [
  {
    title: "What we do",
    content: "We specialize in identifying and acquiring high-potential industrial land parcels. Our strategic approach involves deep market analysis, regulatory due diligence, and site vetting to ensure optimal yields for our partners.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
    points: ["Site Identification", "Due Diligence", "Regulatory Compliance", "Title Verification"]
  },
  {
    title: "Our Process",
    content: "From initial sourcing to final registration, our process is streamlined and transparent. We handle all legal complexities and local liaisoning to provide a hassle-free acquisition experience.",
    image: "https://images.unsplash.com/photo-1454165833767-027ff33027b6?auto=format&fit=crop&q=80&w=1200",
    points: ["Site Sourcing", "Feasibility Study", "Liaisoning", "Registration"]
  },
  {
    title: "Strategic Benefits",
    content: "Partnering with Warehouster for land acquisition provides access to exclusive off-market deals and a network of trusted local land owners, ensuring competitive pricing and strategic advantages.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    points: ["Cost Optimization", "Risk Mitigation", "Strategic Locations", "Long-term Value"]
  },
  {
    title: "Case Highlights",
    content: "Successfully acquired a 50-acre land parcel in the Chennai Industrial Corridor for a global 3PL provider, delivering the project 2 months ahead of schedule with 100% compliance.",
    image: "https://images.unsplash.com/photo-1582213706001-c918c0e29202?auto=format&fit=crop&q=80&w=1200",
    points: ["50 Acres", "Chennai Corridor", "Early Delivery", "Global Client"]
  }
];

export default function LandAcquisitionPage() {
  return (
    <main className="min-h-screen bg-white">
  
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1920" 
            alt="Land Acquisition" 
            fill 
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="pill-tag border-accent/30 text-accent bg-accent/5 mb-8"
            >
                Core Service
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-serif font-black text-white leading-none uppercase tracking-tighter"
            >
                Land <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">Acquisition</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/50 font-sans font-medium max-w-2xl mt-8 leading-relaxed"
            >
                Strategic sourcing and end-to-end vetting of prime industrial land parcels for India&apos;s high-performance logistics ecosystems.
            </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {sections.map((section, i) => (
            <div 
              key={section.title} 
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 py-24 border-b border-gray-100 last:border-0 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
                <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-8"
                >
                    <div className="flex items-center gap-4 text-accent">
                        <Zap size={20} />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] font-sans">Section {i + 1}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight uppercase tracking-tighter">
                        {section.title}
                    </h2>
                    <p className="text-lg text-primary/60 font-medium leading-relaxed">
                        {section.content}
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        {section.points.map((point) => (
                            <div key={point} className="flex items-center gap-3">
                                <CheckCircle2 size={16} className="text-accent" />
                                <span className="text-xs font-bold text-primary/80 uppercase tracking-widest">{point}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
                
                <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="flex-1 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
                >
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
