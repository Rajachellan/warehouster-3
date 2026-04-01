"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowUpRight, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

// Assets
import chennai from "../assets/chennai.jpg";
import madurai from "../assets/madurai.jpg";
import land from "../assets/land.jpg";

import { projects as allProjects } from "@/data/projects";

const projectCategories = [
  {
    status: "Completed",
    projects: allProjects.filter(p => p.category === "Completed").slice(0, 3)
  },
  {
    status: "In Progress",
    projects: allProjects.filter(p => p.category === "In Progress").slice(0, 3)
  },
  {
    status: "Pipeline",
    projects: allProjects.filter(p => p.category === "Pipeline").slice(0, 3)
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pill-tag border-accent/20 text-accent bg-accent/5 mb-8"
            >
              Strategic Scale
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-primary leading-tight uppercase tracking-tighter">
              Industrial <span className="text-accent">Landmarks</span> <br />
              Portfolio
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4 max-w-xs text-left lg:text-right">
            <div className="w-12 h-1 bg-accent mb-4" />
            <p className="text-primary/50 font-medium text-sm leading-relaxed">
              Delivering institutional-grade infrastructure across India&apos;s most critical economic corridors.
            </p>
          </div>
        </div>

        <div className="space-y-40">
          {projectCategories.map((group, groupIdx) => (
            <div key={group.status} className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-6 mb-16 group">
                <div className="relative">
                  <h3 className="text-2xl md:text-4xl font-serif font-black text-primary uppercase tracking-tight">
                    {group.status} <br />
                    <span className="text-accent">Projects</span>
                  </h3>
                </div>
                <div className="h-px flex-1 bg-gray-100" />
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30">Sub-Sector</span>
                  <span className="text-sm font-bold text-primary">Distribution & Parks</span>
                </div>
              </div>

              {/* Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {group.projects.map((project, i) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group relative block h-[550px] rounded-[3.5rem] overflow-hidden bg-primary shadow-3xl transition-all duration-700 hover:-translate-y-4 hover:shadow-accent/10"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-50 group-hover:opacity-100"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent group-hover:from-primary/90 transition-all duration-500" />

                      {/* Top Action */}
                      <div className="absolute top-10 left-10 z-20">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-all duration-500">
                          <Zap size={20} className="text-accent" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end">
                        <div className="flex items-center gap-4 text-accent mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <MapPin size={16} />
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] font-sans">
                            {project.location}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif font-black text-white mb-8 uppercase tracking-tight leading-none group-hover:text-accent transition-all duration-500">
                          {project.title}
                        </h3>

                        <div className="flex items-center justify-between pt-10 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0">
                          <div className="text-white/40 font-bold uppercase text-[9px] tracking-[0.4em]">
                            {project.scale}
                          </div>
                          <div className="flex items-center gap-3 text-accent font-black text-[10px] uppercase tracking-widest">
                            Architecture Details <ArrowUpRight size={16} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 pt-24 border-t border-gray-100 flex flex-col items-center text-center"
        >
          <h4 className="text-2xl font-serif font-black text-primary mb-12 uppercase tracking-wide">
            Experience the Full <span className="text-accent">Ecosystem</span>
          </h4>
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-8 px-16 py-8 bg-primary text-white rounded-[2.5rem] overflow-hidden hover:bg-accent transition-all duration-500 shadow-3xl shadow-primary/20"
          >
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.4em] group-hover:text-primary transition-colors">
              Explore Full Portfolio
            </span>
            <ArrowRight size={22} className="relative z-10 group-hover:translate-x-3 transition-transform group-hover:text-primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
