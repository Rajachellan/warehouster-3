"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import blog3 from "../../assets/building-strategic-alliances-in-warehousing-park.webp"
import banner from "../../assets/building-strategic-alliances-in-warehousing-park.webp"
import news1 from "../../assets/news/manufacturing-today.jpg"
const news = [
  {
    title: "The rapid rise of sustainable warehousing",
    excerpt: "We thank Manufacturing Today India for featuring our MD, Sandeep Chadha, in their latest article on sustainable warehousing",
    date: "November 27, 2024",
    category: "Company Update",
    image: news1,
     pdf: "/news/rapid-rise-of-sustainable-warehousing.pdf",
  },
  {
    title: "Strict security protocols, real-time tracking systems must in warehouses",
    excerpt: "We're thrilled to thank CargoBreakingNews for featuring our MD, Mr. Sandeep Chadha, and his insights on security in warehouse management",
    date: "October 25,2024",
    category: "Market Policy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
     pdf: "/reports/report2.pdf",
  },
  {
    title: "New Strategic Alliance with Global Investment Fund",
    excerpt: "Warehouster gears up for the next phase of expansion with a massive capital infusion focused on Tier-2 cities.",
    date: "March 15, 2026",
    category: "Investment",
    image:blog3,
     pdf: "/reports/report2.pdf",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
     
      
      <section className="relative pt-60 pb-32 bg-primary overflow-hidden">
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
            Industrial News
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-serif font-black text-white leading-none uppercase tracking-tighter">
            Corporate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">Updates</span>
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
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-accent/90 text-primary text-[8px] font-black uppercase tracking-widest rounded">
                    {item.category}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-primary/30 mb-6">
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-accent" /> {item.date}</span>
                    {/* <span className="flex items-center gap-2"><User size={12} className="text-accent" /> Admin</span> */}
                  </div>
                  <h2 className="text-2xl font-serif font-black text-primary mb-6 group-hover:text-accent transition-colors ">{item.title}</h2>
                  <p className="text-sm font-medium text-primary/60 leading-relaxed mb-8">{item.excerpt}</p>
                 <Link
  href={item.pdf}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-accent group-hover:translate-x-2 transition-all"
>
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
