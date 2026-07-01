"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, PhoneCall, BookOpen, Newspaper, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navBoxes = [
  { title: "Services", icon: Building2, href: "/services", color: "bg-blue-500/10" },
  { title: "Projects", icon: Landmark, href: "/projects", color: "bg-blue-500/10" },
  { title: "Contact", icon: PhoneCall, href: "/contact", color: "bg-blue-500/10" },
  { title: "Blogs", icon: BookOpen, href: "/blogs", color: "bg-blue-500/10" },
  { title: "News", icon: Newspaper, href: "/news", color: "bg-blue-500/10" },
  { title: "Events", icon: Calendar, href: "/events", color: "bg-blue-500/10" },
];

export default function QuickNavSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pill-tag mb-6"
            >
                Quick Navigation
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight uppercase tracking-tighter">
               Explore Our  <span className="text-accent">Connections</span>
            </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {navBoxes.map((box, i) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link 
                href={box.href}
                className="group relative block p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-accent hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-2xl ${box.color} flex items-center justify-center text-primary group-hover:bg-accent group-hover:scale-110 transition-all duration-500 mb-6`}>
                  <box.icon size={24} />
                </div>
                
                <h3 className="text-sm font-black uppercase tracking-widest text-primary group-hover:text-primary transition-colors">
                  {box.title}
                </h3>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={18} className="text-primary" />
                </div>

                {/* Background Shadow Text */}
                <span className="absolute -bottom-4 -right-2 text-6xl font-serif font-black text-black/[0.02] pointer-events-none group-hover:text-accent/[0.05] transition-colors">
                    {box.title[0]}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
