"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import land from "../assets/land-acq-img-4.webp"
import building from "../assets/building-strategic-alliances-in-warehousing-park.webp"
const blogs = [
  {
    title: "The Rise of Grade A Industrial Assets",
    excerpt: "Exploring the shift towards high-performance, sustainable warehousing ecosystems in major logistics hubs.",
    date: "March 24, 2026",
    author: "Sandeep Chadha",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    href: "/blogs/grade-a-assets",
  },
  {
    title: "Optimizing Supply Chains with Smart Warehousing",
    excerpt: "How architectural innovations and digital twins are redefining the efficiency of modern distribution centers.",
    date: "March 18, 2026",
    author: "Admin",
    image: land,
    href: "/blogs/smart-warehousing",
  },
  {
    title: "Sustainable Industrial Ecosystems",
    excerpt: "A deep dive into green building standards and renewable energy integration in the logistics sector.",
    date: "March 10, 2026",
    author: "Team Warehouster",
    image: building,
    href: "/blogs/sustainable-infra",
  },
];

export default function BlogSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pill-tag border-accent/20 text-accent bg-accent/5 mb-8"
            >
              Latest Insights
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-primary uppercase tracking-tighter leading-tight">
              Industrial <br />
              <span className="text-accent">Intelligence</span>
            </h2>
          </div>

          <Link
            href="/blogs"
            className="group flex items-center gap-6 px-12 py-5 bg-primary text-white rounded-2xl font-sans font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl shadow-primary/20 border border-transparent hover:border-primary"
          >
            Read All Study
            <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform text-accent" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 hover:border-accent/30 transition-all duration-700 h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000   group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-8 mb-6 text-primary/30 text-[9px] font-black uppercase tracking-[0.4em] font-sans">
                  <div className="flex items-center gap-3">
                    <Calendar size={14} className="text-accent" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-3">
                    <User size={14} className="text-accent" />
                    {blog.author}
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-black text-primary mb-8 leading-tight group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>

                <p className="text-primary/50 font-medium leading-relaxed mb-10 line-clamp-2 text-sm">
                  {blog.excerpt}
                </p>

                <Link
                  href={blog.href}
                  className="mt-auto inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-primary group-hover:text-accent transition-all transform group-hover:translate-x-4"
                >
                  Study Intelligence <ArrowRight size={16} className="text-accent" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
