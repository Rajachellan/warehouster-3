"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import blog3 from "../../assets/building-strategic-alliances-in-warehousing-park.webp"

const news = [
  {
    title: "Warehouster Surpasses 20 Million Sq Ft Managed Assets",
    excerpt: "A major milestone for India's leading industrial real estate platform as demand for Grade-A space hits record highs.",
    date: "March 25, 2026",
    category: "Company Update",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Impact of New GST Regulations on Logistics",
    excerpt: "How the latest government policies are reshaping the cost structure of warehousing and distribution across states.",
    date: "March 20, 2026",
    category: "Market Policy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "New Strategic Alliance with Global Investment Fund",
    excerpt: "Warehouster gears up for the next phase of expansion with a massive capital infusion focused on Tier-2 cities.",
    date: "March 15, 2026",
    category: "Investment",
    image:blog3,
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
     
      
      <section className="relative pt-60 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="pill-tag border-accent/30 text-accent bg-accent/5 mb-8"
          >
            Industrial News
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-serif font-black text-white leading-none uppercase tracking-tighter">
            Corporate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white italics italic">Updates</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {news.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover  group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-accent/90 text-primary text-[8px] font-black uppercase tracking-widest rounded">
                    {item.category}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-primary/30 mb-6">
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-accent" /> {item.date}</span>
                    <span className="flex items-center gap-2"><User size={12} className="text-accent" /> Admin</span>
                  </div>
                  <h2 className="text-2xl font-serif font-black text-primary mb-6 group-hover:text-accent transition-colors leading-tight">{item.title}</h2>
                  <p className="text-sm font-medium text-primary/60 leading-relaxed mb-8">{item.excerpt}</p>
                  <Link href="#" className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-accent group-hover:translate-x-2 transition-all">
                    Full Report <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
