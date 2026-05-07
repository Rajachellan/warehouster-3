"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { Calendar, User, ArrowRight, Search, Zap } from "lucide-react";
import Link from "next/link";
import banner from "../../assets/building-strategic-alliances-in-warehousing-park.webp"
const blogs = [
  {
    title: "The Rise of Grade A Industrial Assets",
    category: "Market Trends",
    date: "March 24, 2026",
    author: "Sandeep Chadha",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    href: "/blogs/grade-a-assets",
  },
  {
    title: "Optimizing Supply Chains with AI",
    category: "Technology",
    date: "March 18, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1590684153400-e3e7a935b0e1?auto=format&fit=crop&q=80&w=800",
    href: "/blogs/smart-warehousing",
  },
  {
    title: "Sustainable Industrial Ecosystems",
    category: "Architecture",
    date: "March 10, 2026",
    author: "Team Warehouster",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    href: "/blogs/sustainable-infra",
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      
      {/* 1. Page Header */}
      <section className="relative pt-60 pb-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
                   <Image 
                     src={banner}
                     alt="Land Acquisition Background"
                     fill
                     priority
                     sizes="100vw"
                     className="object-cover object-center"
                   />
                   <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
                   <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
                 </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="pill-tag border-accent/30 text-accent bg-accent/5 mb-8"
          >
            Industrial Pulse
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif font-black text-white leading-none uppercase tracking-tighter"
          >
            Strategic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">Intelligence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 font-sans font-medium max-w-2xl mt-12 leading-relaxed"
          >
            Insights into the high-performance industrial corridors and the future of Grade-A logistics.
          </motion.p>
        </div>
      </section>

      {/* 2. Blog Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
                <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                    {["All", "Technology", "Market Trends", "Architecture"].map((cat) => (
                        <button key={cat} className="px-10 py-4 rounded-xl bg-gray-50 text-[10px] font-black uppercase tracking-widest text-primary/40 hover:bg-primary hover:text-white transition-all whitespace-nowrap">
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="relative group w-full md:w-96">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20 group-hover:text-accent transition-colors" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search Intelligence..." 
                        className="w-full pl-16 pr-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-accent font-bold text-sm transition-all shadow-sm"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {blogs.map((blog, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex flex-col h-full"
                    >
                        <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 shadow-3xl transition-all duration-700">
                             <Image 
                                src={blog.image} 
                                alt={blog.title} 
                                fill 
                                className="object-cover duration-1000  group-hover:opacity-100"
                             />
                             <div className="absolute top-10 left-10 z-10">
                                <div className="px-6 py-2 rounded-full glass-gold text-white font-black uppercase text-[8px] tracking-[0.2em] border border-white/20">
                                    {blog.category}
                                </div>
                             </div>
                        </div>
                        <div className="px-4 flex flex-col flex-grow">
                             <div className="flex items-center gap-8 mb-6 text-[10px] font-black uppercase tracking-widest text-primary/30 font-sans">
                                <div className="flex items-center gap-3"><Calendar size={14} className="text-accent" /> {blog.date}</div>
                                <div className="flex items-center gap-3"><User size={14} className="text-accent" /> {blog.author}</div>
                             </div>
                             <h3 className="text-3xl font-serif font-black text-primary mb-8 leading-tight group-hover:text-accent transition-all duration-500">
                                {blog.title}
                             </h3>
                             <Link 
                                href={blog.href}
                                className="mt-auto inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-primary group-hover:text-accent transition-all group-hover:translate-x-4"
                             >
                                Study Intelligence <ArrowRight size={16} className="text-accent" />
                             </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
