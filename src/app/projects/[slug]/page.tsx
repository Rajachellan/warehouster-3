"use client";

import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { MapPin, ShieldCheck, Zap, Award, BarChart3, Clock, ArrowRight, UserCheck, Briefcase, ChevronRight, Activity, TrendingUp } from "lucide-react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { projects, ProjectContent } from "@/data/projects";
import CaseStudySection from "@/components/CaseStudy";

// --- Components ---

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const animation = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest))
    });
    return () => animation.stop();
  }, [value]);

  return <>{displayValue}{suffix}</>;
};

const MetricCard = ({ label, value, icon: Icon }: { label: string; value: string; icon: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 rounded-[2.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center group hover:border-accent/40 transition-all duration-500"
  >
    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-accent mb-5 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500">
      <Icon size={28} />
    </div>
    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/30 mb-2">{label}</div>
    <div className="text-xl font-serif font-black text-primary uppercase tracking-tight">{value}</div>
  </motion.div>
);

const SectionHeading = ({ label, title, light = false }: { label: string, title: string, light?: boolean }) => (
  <div className="mb-16">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`pill-tag mb-6 ${light ? 'border-white/20 bg-white/5 text-white' : ''}`}
    >
      / {label}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-serif font-black uppercase tracking-tighter leading-[0.9] ${light ? 'text-white' : 'text-primary'}`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  </div>
);

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const data = projects.find(p => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  if (!data) {
    return notFound();
  }

  const relatedProjects = projects.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />


      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="pill-tag border-accent/40 bg-accent/20 text-accent mb-8 backdrop-blur-md"
            >
              {data.heroLabel}
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-5xl md:text-[8rem] font-serif font-black text-white uppercase tracking-tighter leading-[0.85] mb-12"
            >
              {data.title.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-gold-light to-white">
                {data.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-white/60 text-base md:text-xl font-serif max-w-2xl mx-auto mb-16 leading-relaxed"
            >
              {data.subtext}
            </motion.p>
          </motion.div>
        </div>

        {/* 2. PROJECT OVERVIEW CARD (Floating) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden lg:block absolute bottom-20 right-20 z-20"
        >
          <div className="glass-card p-10 rounded-[3rem] w-96 backdrop-blur-2xl border-white/20 shadow-2xl relative group overflow-hidden animate-float">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity size={100} className="text-accent" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-black uppercase text-white/40 tracking-[0.2em]">Location</span>
                  <span className="text-sm font-bold text-white">{data.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <span className="text-[8px] font-black uppercase text-white/40 tracking-[0.2em] block mb-1">Land Area</span>
                  <span className="text-base font-black text-accent">{data.scale.split('/')[0]}</span>
                </div>
                <div>
                  <span className="text-[8px] font-black uppercase text-white/40 tracking-[0.2em] block mb-1">Built Area</span>
                  <span className="text-base font-black text-accent">{data.scale.split('/')[1] || 'N/A'}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black uppercase text-white/40 tracking-[0.2em]">Partner</span>
                  <span className="text-sm font-bold text-white">{data.client}</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-accent text-primary text-[9px] font-black uppercase tracking-wider">
                  {data.status}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-12 hidden md:flex flex-col items-center gap-6">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-accent/50 to-accent" />
          <span className="text-[9px] font-black text-accent uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Discover Case Study</span>
        </div>
      </section>

      {/* 4. KEY OUTCOMES SECTION (Horizontal Bar) */}
      <section className="relative z-30 -mt-16 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-1 px-1 rounded-[2.5rem] overflow-hidden"
          >
            {/* Animated Gold Border */}
            <div className="absolute inset-0 bg-accent/20" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[500%] bg-[conic-gradient(from_0deg,transparent,transparent,rgba(212,175,55,1),transparent,transparent)]"
            />

            <div className="relative bg-[#0A1428] rounded-[2.4rem] p-8 md:p-12 flex flex-wrap items-center justify-around gap-12">
              {data.outcomes.map((outcome, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-lg md:text-xl font-serif font-black text-white uppercase tracking-tight">{outcome}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. METRICS / STATS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {data.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-7xl font-serif font-black text-primary mb-4 tracking-tighter">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASE STUDY STORY */}
      <section className="py-40 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="The Narrative" title="Institutional <span className='text-accent'>Storytelling</span>" />

          <div className="space-y-40">
            {Object.entries(data.story).map(([key, section], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] rounded-[3.5rem] overflow-hidden group">
                  <Image
                    src={data.gallery[i % data.gallery.length]}
                    alt={section.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                  <div className="text-accent font-black text-[10px] uppercase tracking-[0.5em] mb-6">/ Section 0{i + 1}</div>
                  <h3 className="text-3xl md:text-5xl font-serif font-black text-primary uppercase tracking-tighter mb-10 leading-none">
                    {section.title}
                  </h3>
                  <p className="text-lg md:text-xl text-primary/60 font-medium leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXECUTION WORKFLOW GRID */}
      <section className="py-40 bg-primary overflow-hidden relative">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 z-0 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pill-tag border-accent/20 bg-accent/5 text-accent mb-8"
            >
              / Execution Excellence
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white uppercase tracking-tighter">
              Strategic <span className="text-accent">Workflow</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-12 rounded-[3.5rem] glass-dark group transition-all duration-500 hover:border-accent/40"
              >
                <div className="relative mb-10">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                    <Zap size={32} />
                  </div>
                  <div className="absolute -top-4 -right-4 text-7xl font-serif font-black text-white/5">
                    0{i + 1}
                  </div>
                </div>
                <h4 className="text-xl font-serif font-black text-white uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {step.title}
                </h4>
                <p className="text-white/40 font-medium leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMAGE GALLERY SECTION */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Visual Evidence" title="Site <span className='text-accent'>Progress</span> Gallery" />

          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {data.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[3rem] overflow-hidden group"
              >
                <Image
                  src={img}
                  alt={`Gallery ${i}`}
                  width={800}
                  height={i % 2 === 0 ? 600 : 800}
                  className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Zap size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.5 CASE STUDY SECTION */}
      <CaseStudySection slug={slug} />

      {/* 8. RELATED PROJECTS (Bottom Section) */}
      <section className="py-40 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <div className="pill-tag mb-6">/ Ecosystem</div>
              <h2 className="text-5xl font-serif font-black text-primary uppercase tracking-tighter">
                More <span className="text-accent">Assets</span>
              </h2>
            </div>
            <Link href="/projects" className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-primary/40 hover:text-accent transition-colors">
              View Full Portfolio <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {relatedProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${project.slug}`} className="group relative block h-[600px] rounded-[4rem] overflow-hidden shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent group-hover:from-primary/90 transition-all duration-700" />

                  <div className="absolute inset-0 p-16 flex flex-col justify-end">
                    <div className="text-accent font-black text-[10px] uppercase tracking-[0.5em] mb-6 transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {project.category}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-black text-white uppercase tracking-tighter mb-8 transform translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      View Case Study <ArrowRight size={16} className="text-accent group-hover:translate-x-3 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
