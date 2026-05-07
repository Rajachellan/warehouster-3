"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { MapPin, ArrowUpRight, Maximize2, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { projects, ProjectContent } from "@/data/projects";
import herobanner from "../../assets/about-banner.webp"
import AboutPage from "../../assets/about-banner.webp";
const ProjectCard = ({ project, index }: { project: ProjectContent; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="group relative"
  >
    <Link href={`/projects/${project.slug}`} className="block">
      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl border border-gray-100 transition-all duration-700 hover:shadow-accent/20 bg-gray-50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
        
        {/* Top Badge */}
        <div className="absolute top-8 left-8 z-10">
          <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white font-sans font-black text-[10px] uppercase tracking-widest border border-white/20">
            {project.accentTag}
          </div>
        </div>

        <div className="absolute top-8 right-8 z-10">
          <div className="px-6 py-2 rounded-full bg-primary/80 backdrop-blur-md text-accent font-sans font-black text-[12px] uppercase tracking-widest border border-accent/20 shadow-2xl">
            {project.status}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-12 flex flex-col justify-end">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-[10px] font-black uppercase tracking-widest">Institutional Asset</span>
          </div>
          <h4 className="text-3xl font-serif font-black text-white uppercase tracking-tighter mb-6 leading-tight">{project.title}</h4>
          <p className="text-white/60 text-sm mb-8 line-clamp-3 font-medium">{project.subtext}</p>
          
          <div
            className="w-full py-5 bg-accent text-primary rounded-2xl text-center font-sans font-black text-[12px] uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-4 shadow-xl"
          >
            View Full Case Study <ArrowRight size={16} />
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center gap-2 text-accent text-[11px] font-black uppercase tracking-[0.2em] mb-4">
          <MapPin size={12} />
          {project.location}
        </div>
        <h3 className="text-2xl font-serif font-black text-primary uppercase tracking-tighter mb-4 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        {/* Quick Highlights Row */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          {project.metrics.slice(0, 2).map((m, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-widest text-primary/30 mb-1">{m.label}</span>
              <span className="text-sm font-bold text-primary/70">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  </motion.div>
);

const SectionHeader = ({ id, tag, title, subtitle }: { id: string; tag: string; title: string; subtitle: string }) => (
  <div id={id} className="mb-24 relative">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-100 -mt-12" />
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-10"
    >
      <div className="h-[2px] w-8 bg-accent" />
      <span className="text-accent text-[12px] font-black uppercase tracking-[0.4em]">{tag}</span>
    </motion.div>
    
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-primary uppercase tracking-tighter leading-[0.85] max-w-2xl"
      >
        {title.split(' ')[0]} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/30">{title.split(' ').slice(1).join(' ')}</span>
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-md"
      >
        <p className="text-primary/50 font-medium text-base md:text-lg leading-relaxed mb-6 italic">
          &ldquo;{subtitle}&rdquo;
        </p>
        <div className="h-px w-16 bg-accent/30" />
      </motion.div>
    </div>
  </div>
);

export default function ProjectsPage() {
  const completedProjects = projects.filter(p => p.category === "Completed");
  const inProgressProjects = projects.filter(p => p.category === "In Progress");
  const pipelineProjects = projects.filter(p => p.category === "Pipeline");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-60 pb-40 bg-primary overflow-hidden">
        {/* Animated Background Image */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 opacity-60 "
        >
          <Image
            src={AboutPage}
            alt="Industrial Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
       <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pill-tag text-white border-white/20 bg-white/5 mb-10"
          >
            Asset Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-[0.9] uppercase tracking-tighter"
          >
            Industrial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-gold-light to-white">Landmarks</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/50 font-sans font-medium max-w-2xl mt-12 leading-relaxed"
          >
            A diverse range of strategic assets that define the standard of institutional-grade infrastructure across India&apos;s critical economic corridors.
          </motion.p>
        </div>
      </section>

      {/* 2. Projects Sections */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Completed Projects */}
          <section className="mb-40">
            <SectionHeader
              id="completed"
              tag="/01 Completed"
              title="Executed Landmarks"
              subtitle="Fully executed and institutional-scale assets that have successfully completed their development cycles."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {completedProjects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </section>

          {/* In Progress Projects */}
          <section className="mb-40">
            <SectionHeader
              id="in-progress"
              tag="/02 In Progress"
              title="Active Developments"
              subtitle="Currently under construction or specialized development, anchored by institutional partnerships and global clients."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {inProgressProjects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </section>

          {/* Pipeline Projects */}
          <section className="mb-40">
            <SectionHeader
              id="pipeline"
              tag="/03 Pipeline"
              title="Revenue Assets"
              subtitle="Operational revenue-generating assets and upcoming strategic acquisitions in key industrial nodes."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {pipelineProjects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </section>

        </div>
      </div>

      <ContactSection />
      <Footer />
    </main>
  );
}
