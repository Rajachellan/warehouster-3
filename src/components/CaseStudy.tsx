"use client";
 
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, FileText, Building2, ShieldCheck, HardHat, Flag,
  MapPin, Layers, Ruler, Users, Anchor, ScrollText, LayoutGrid,
  Sun, FileSearch, Zap, Binoculars, Briefcase, Scale,
  TrendingUp, Trophy, ArrowUpRight, ChevronLeft, ChevronRight,
  CheckCircle2, Workflow, Target, AlertCircle, Lightbulb, BarChart4, Truck, Activity
} from "lucide-react";
 
import Image from "next/image";
import Link from "next/link";
import { projects, ProjectContent } from "@/data/projects";
 
// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const ICON_CLS = "w-4 h-4 stroke-[#C9A84C] fill-none";
const GOLD = "#C9A84C";
const NAVY = "#0B1828";
const INTERVAL = 6000;
 
// ─── ICON MAPPING ───────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search className={ICON_CLS} />,
  FileText: <FileText className={ICON_CLS} />,
  Building2: <Building2 className={ICON_CLS} />,
  ShieldCheck: <ShieldCheck className={ICON_CLS} />,
  HardHat: <HardHat className={ICON_CLS} />,
  Flag: <Flag className={ICON_CLS} />,
  MapPin: <MapPin className={ICON_CLS} />,
  Layers: <Layers className={ICON_CLS} />,
  Ruler: <Ruler className={ICON_CLS} />,
  Users: <Users className={ICON_CLS} />,
  Anchor: <Anchor className={ICON_CLS} />,
  ScrollText: <ScrollText className={ICON_CLS} />,
  LayoutGrid: <LayoutGrid className={ICON_CLS} />,
  Sun: <Sun className={ICON_CLS} />,
  FileSearch: <FileSearch className={ICON_CLS} />,
  Zap: <Zap className={ICON_CLS} />,
  Binoculars: <Binoculars className={ICON_CLS} />,
  Briefcase: <Briefcase className={ICON_CLS} />,
  Scale: <Scale className={ICON_CLS} />,
  TrendingUp: <TrendingUp className={ICON_CLS} />,
  Trophy: <Trophy className={ICON_CLS} />,
  Truck: <Truck className={ICON_CLS} />,
};
 
// ─── STEP CARD ───────────────────────────────────────────────────────────────
function StepCard({ step, index, isVisible }: { step: any; index: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.15 + index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white border border-[#0B1828]/10 p-6 rounded-2xl hover:border-[#C9A84C]/60 hover:shadow-xl transition-all duration-300"
    >
      <span className="absolute top-4 right-6 font-serif text-[11px] font-black text-[#C9A84C]/20 tracking-widest">
        0{index + 1}
      </span>
      <div className="mb-4 w-10 h-10 flex items-center justify-center bg-[#0B1828]/5 group-hover:bg-[#C9A84C]/10 transition-colors duration-300 rounded-xl">
        {step.icon && ICON_MAP[step.icon] ? ICON_MAP[step.icon] : <Zap className={ICON_CLS} />}
      </div>
      <h4 className="text-[12px] font-black text-[#0B1828] uppercase tracking-widest mb-2">{step.title}</h4>
      <p className="text-[13px] text-[#0B1828]/50 leading-relaxed font-medium">{step.description}</p>
    </motion.div>
  );
}
 
// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function CaseStudySection({ slug }: { slug?: string | string[] }) {
  const [cur, setCur] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(Date.now());
  const sectionRef = useRef<HTMLDivElement>(null);
 
  // Filter projects if slug is provided
  const targetSlug = Array.isArray(slug) ? slug[0] : slug;
  const filteredProjects = targetSlug
    ? projects.filter(p => p.slug === targetSlug)
    : projects;
 
  const isSingle = !!targetSlug;
  const study = filteredProjects[cur] || projects[0];
 
  const goTo = useCallback((n: number) => {
    if (isSingle) return;
    const next = ((n % filteredProjects.length) + filteredProjects.length) % filteredProjects.length;
    setCur(next);
    setProgress(0);
    startRef.current = Date.now();
  }, [isSingle, filteredProjects.length]);
 
  const next = useCallback(() => goTo(cur + 1), [cur, goTo]);
  const prev = useCallback(() => goTo(cur - 1), [cur, goTo]);
 
  useEffect(() => {
    if (isSingle) return;
    if (timerRef.current) clearInterval(timerRef.current);
    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startRef.current) / INTERVAL;
      if (elapsed >= 1) {
        goTo(cur + 1);
      } else {
        setProgress(elapsed * 100);
      }
    }, 60);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [cur, goTo, isSingle]);
 
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);
 
  if (!study) return null;
 
  return (
    <section ref={sectionRef} className={`bg-white relative overflow-hidden ${isSingle ? 'py-0' : 'py-24'}`}>
     
      {/* ── SECTION HEADER ── */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] font-black uppercase tracking-[0.5em] text-accent">
            {isSingle ? "Project Case Study" : "Execution Excellence"}
          </span>
        </motion.div>
 
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="font-serif text-4xl md:text-7xl font-black text-[#0B1828] uppercase tracking-tighter leading-[0.85] max-w-3xl"
          >
            {isSingle ? (
               <>Case Study: <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/40">{study.title}</span></>
            ) : (
               <>Real-World <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/40">Execution Impact</span></>
            )}
          </motion.h2>
 
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            className="text-lg text-[#0B1828]/50 font-medium lg:max-w-[280px] lg:text-right italic border-r-2 border-accent/30 pr-6"
          >
            &ldquo;Strategically developed Grade-A assets across India&apos;s critical economic corridors.&rdquo;
          </motion.p>
        </div>
      </div>
 
      {/* ── MAIN CONTENT GRID ── */}
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12">
       
        {/* LEFT PANEL: CONTEXT & OVERVIEW */}
        <div className="lg:col-span-4 space-y-12">
          <div className="relative h-[450px] rounded-[3rem] overflow-hidden group shadow-2xl">
            <Image src={study.image} alt={study.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1828] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 right-10">
              <span className="inline-block px-3 py-1 bg-accent/90 text-[#0B1828] text-[9px] font-black uppercase tracking-widest rounded mb-3">
                {study.badge}
              </span>
              <h3 className="text-2xl font-serif font-black text-white uppercase tracking-tight">{study.title}</h3>
            </div>
          </div>
 
          <div className="space-y-8 bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
            <div className="flex items-center gap-3 text-accent text-[10px] font-black uppercase tracking-widest">
               <Activity className="w-4 h-4" /> Asset Specs
            </div>
            <div className="grid gap-6">
               {[
                 { label: "Location", value: study.location },
                 { label: "Scale", value: study.scale },
                 { label: "Category", value: study.category },
                 { label: "Status", value: study.status }
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-end border-b border-gray-200 pb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">{item.label}</span>
                    <span className="text-sm font-bold text-primary/80">{item.value}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
 
        {/* RIGHT PANEL: THE STORY */}
        <div className="lg:col-span-8 space-y-16">
         
          {/* 1. CHALLENGE & SOLUTION HIGHLIGHT BOXES */}
          {study.extraDetails && (
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-10 rounded-[2.5rem] bg-[#0B1828] text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <AlertCircle size={100} />
                </div>
                <div className="flex items-center gap-3 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                  <Target size={14} /> The Challenge
                </div>
                <ul className="space-y-4">
                  {study.extraDetails.challenges.map((c, i) => (
                    <li key={i} className="text-sm text-white/60 leading-relaxed font-medium pl-4 border-l border-accent/30 italic">
                      &ldquo;{c}&rdquo;
                    </li>
                  ))}
                </ul>
              </motion.div>
 
              <motion.div
                whileHover={{ y: -5 }}
                className="p-10 rounded-[2.5rem] bg-accent text-[#0B1828] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Lightbulb size={100} />
                </div>
                <div className="flex items-center gap-3 text-[#0B1828]/60 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                  <Zap size={14} /> Strategic Solution
                </div>
                <ul className="space-y-4">
                  {study.extraDetails.solutions.map((s, i) => (
                    <li key={i} className="text-sm font-bold leading-relaxed flex gap-3">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}
 
          {/* 2. EXECUTION WORKFLOW */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <Workflow className="text-accent" size={20} />
               <span className="text-[12px] font-black uppercase tracking-[0.4em] text-primary/40">Execution Approach</span>
               <div className="flex-1 h-px bg-gray-100" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {study.workflow.map((step, i) => (
                <StepCard key={i} step={step} index={i} isVisible />
              ))}
            </div>
          </div>
 
          {/* 3. OUTCOMES & IMPACT */}
          <div className="p-12 rounded-[3.5rem] border border-gray-100 bg-gray-50/50">
             <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                   <BarChart4 className="text-accent" size={20} />
                   <span className="text-[12px] font-black uppercase tracking-[0.4em] text-primary/40">Measured Impact</span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-accent px-4 py-1 bg-accent/10 rounded-full">Results Driven</div>
             </div>
             
             <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  {study.outcomes.map((o, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 group hover:border-accent/40 transition-all">
                       <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                          <Trophy size={14} />
                       </div>
                       <span className="text-sm font-bold text-primary/70">{o}</span>
                    </div>
                  ))}
                </div>
 
                <div className="bg-[#0B1828] rounded-[2.5rem] p-10 flex flex-col justify-center gap-8">
                   {study.stats.slice(0, 2).map((s, i) => (
                     <div key={i}>
                        <div className="text-4xl md:text-5xl font-serif font-black text-accent mb-2 tracking-tighter">
                          {s.value}{s.suffix}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/30">{s.label}</div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
 
      {/* ── NAVIGATION (ONLY FOR SLIDER MODE) ── */}
      {!isSingle && (
        <div className="max-w-7xl mx-auto px-8 mt-16 flex items-center justify-between py-8 border-t border-gray-100">
           <div className="flex gap-2">
              {filteredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 transition-all duration-500 ${i === cur ? 'w-12 bg-accent' : 'w-6 bg-gray-200'}`}
                />
              ))}
           </div>
           <div className="flex gap-4">
              <button onClick={prev} className="p-4 rounded-full border border-gray-200 hover:border-accent hover:text-accent transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="p-4 rounded-full border border-gray-200 hover:border-accent hover:text-accent transition-all">
                <ChevronRight size={20} />
              </button>
           </div>
        </div>
      )}
 
    </section>
  );
}
 
 