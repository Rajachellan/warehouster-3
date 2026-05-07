"use client";
 
import { motion } from "framer-motion";
import { projects, ProjectContent } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, ChevronRight, Activity } from "lucide-react";
import { useState } from "react";
 
const CategoryTab = ({
  label,
  count,
  isActive,
  onClick
}: {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`group relative px-8 py-6 transition-all duration-500 ${
      isActive ? "text-primary" : "text-primary/40 hover:text-primary/60"
    }`}
  >
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-black uppercase tracking-[0.3em]">{label}</span>
      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border transition-colors ${
        isActive ? "bg-accent/10 border-accent/20 text-accent" : "bg-gray-50 border-gray-100 text-primary/30"
      }`}>
        {count}
      </span>
    </div>
    {isActive && (
      <motion.div
        layoutId="activeTabHome"
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
  </button>
);
 
const ProjectCard = ({ project, index }: { project: ProjectContent; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group relative h-[550px] rounded-[3rem] overflow-hidden bg-gray-50 shadow-2xl shadow-gray-200/50"
  >
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover  transition-all duration-1000"
    />
   
    {/* Status Badge */}
    <div className="absolute top-8 left-8 z-10">
      <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black uppercase tracking-widest">
        {project.accentTag}
      </div>
    </div>
 
    <div className="absolute top-8 right-8 z-10">
      <div className="px-4 py-1.5 rounded-full bg-primary/80 backdrop-blur-md border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest">
        {project.status}
      </div>
    </div>
 
    {/* Content Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
   
    <div className="absolute inset-0 p-12 flex flex-col justify-end transform group-hover:translate-y-[-10px] transition-transform duration-700">
      <div className="flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4">
        <MapPin size={12} />
        {project.location}
      </div>
     
      <h3 className="text-3xl font-serif font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
        {project.title}
      </h3>
     
      <p className="text-white/60 text-[13px] leading-relaxed mb-8 line-clamp-2 font-medium">
        {project.subtext}
      </p>
 
      {/* Highlights Grid */}
      <div className="grid grid-cols-2 gap-3 mb-10">
        {project.metrics.slice(0, 2).map((metric, i) => (
          <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[8px] font-black text-accent/50 uppercase tracking-widest mb-1">{metric.label}</div>
            <div className="text-[11px] font-bold text-white tracking-wide">{metric.value}</div>
          </div>
        ))}
      </div>
 
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-[0.4em] hover:text-accent transition-colors"
      >
        View Case Study <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
      </Link>
    </div>
  </motion.div>
);
 
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectContent["category"]>("Completed");
 
  const categories: ProjectContent["category"][] = ["Completed", "In Progress", "Pipeline"];
  const filteredProjects = projects.filter(p => p.category === activeCategory);
 
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
       
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-8 bg-accent" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-accent">
                Asset Portfolio
              </span>
            </motion.div>
           
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl  font-serif font-black text-primary uppercase "
            >
              Industrial 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent/60">  Landmarks</span>
            </motion.h2>
          </div>
 
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-sm pb-2"
          >
            <p className="text-primary/50 text-lg font-medium leading-relaxed italic mb-6">
              &ldquo;Strategically developed Grade-A assets across India&apos;s critical economic corridors.&rdquo;
            </p>
            <div className="h-px w-16 bg-accent/30" />
          </motion.div>
        </div>
 
        {/* Tabs */}
        <div className="flex border-b border-gray-100 mb-16 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <CategoryTab
              key={cat}
              label={cat}
              count={projects.filter(p => p.category === cat).length}
              isActive={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
 
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
 
        {/* View All CTA */}
        <div className="mt-24 flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
             <div className="w-12 h-px bg-gray-100" />
             <Activity className="text-accent/20" size={24} />
             <div className="w-12 h-px bg-gray-100" />
          </div>
          <Link
            href="/projects"
            className="group px-16 py-6 bg-primary text-white rounded-2xl font-sans font-black text-[11px] uppercase tracking-[0.5em] hover:bg-accent transition-all shadow-2xl shadow-primary/20 flex items-center gap-6"
          >
            Explore Full Portfolio <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
 
      </div>
    </section>
  );
}