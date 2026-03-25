"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Metro Industrial Hub",
    location: "Chakan, Pune",
    size: "500,000 Sq Ft",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    category: "Strategic Hub"
  },
  {
    title: "Global Logistics Park",
    location: "Bhiwandi, Mumbai",
    size: "1,200,000 Sq Ft",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
    category: "Mega Project"
  },
  {
    title: "Tech-Savy Distribution Center",
    location: "Gurugram, NCR",
    size: "300,000 Sq Ft",
    image: "https://images.unsplash.com/photo-1590684153482-d273767e7819?q=80&w=2070&auto=format&fit=crop",
    category: "Smart Center"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-black uppercase text-sm tracking-widest block mb-4"
            >
              Featured Infrastructure
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary leading-tight"
            >
              Building the Future of <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Indian</span> Logistics
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/services" className="px-8 py-4 rounded-full border-2 border-primary text-primary font-black hover:bg-primary hover:text-white transition-all inline-flex items-center gap-2 group">
              View All Projects
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent group-hover:from-accent/90 transition-colors duration-500" />
              
              <div className="absolute top-6 right-6">
                 <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-widest">
                    {project.category}
                 </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-accent/80 font-black text-sm uppercase tracking-widest mb-2">{project.location}</div>
                <h3 className="text-3xl font-display font-black text-white mb-2 leading-tight">{project.title}</h3>
                <p className="text-white/60 font-bold mb-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-700">{project.size} of Grade A Infrastructure</p>
                
                <Link href="/services" className="inline-flex items-center gap-3 text-white font-black group-hover:text-primary transition-colors">
                  <span className="h-0.5 w-12 bg-accent group-hover:bg-primary transition-colors" />
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
