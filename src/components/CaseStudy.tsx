"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, FileText, Building2, ShieldCheck, HardHat, Flag,
  MapPin, Layers, Ruler, Users, Anchor, ScrollText, LayoutGrid,
  Sun, FileSearch, Zap, Binoculars, Briefcase, Scale,
  TrendingUp, Trophy, ArrowUpRight, ChevronLeft, ChevronRight,
  CheckCircle2, Workflow, Target,
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
};



// ─── STEP CARD ───────────────────────────────────────────────────────────────
function StepCard({ step, index, isVisible }: { step: any; index: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.15 + index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white border border-[#0B1828]/10 p-4 hover:border-[#C9A84C]/60 hover:shadow-[0_4px_24px_rgba(201,168,76,0.12)] transition-all duration-300 cursor-default"
    >
      {/* Top-right step number */}
      <span className="absolute top-3 right-3 font-serif text-[10px] font-bold text-[#C9A84C]/30 tracking-wider">
        0{index + 1}
      </span>
      {/* Gold left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C9A84C]/0 group-hover:bg-[#C9A84C] transition-all duration-300" />
      {/* Icon */}
      <div className="mb-3 w-8 h-8 flex items-center justify-center bg-[#0B1828]/5 group-hover:bg-[#C9A84C]/10 transition-colors duration-300">
        {step.icon && ICON_MAP[step.icon] ? ICON_MAP[step.icon] : <Zap className={ICON_CLS} />}
      </div>
      <p className="text-[13px] font-bold text-[#0B1828] uppercase tracking-wide mb-1.5">{step.title}</p>
      <p className="text-[14px] text-[#0B1828]/55 ">{step.description}</p>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function CaseStudySection({ slug }: { slug?: string | string[] }) {
  const [cur, setCur] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
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
    setImgLoaded(false);
    setProgress(0);
    startRef.current = Date.now();
  }, [isSingle, filteredProjects.length]);

  const next = useCallback(() => goTo(cur + 1), [cur, goTo]);
  const prev = useCallback(() => goTo(cur - 1), [cur, goTo]);

  // Auto-advance
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

  // Intersection observer
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  if (!study) return null;

  return (
    <section ref={sectionRef} className="bg-white relative overflow-hidden">

      {/* ── SECTION HEADER ── */}
      <div className="relative bg-white border-b border-[#0B1828]/8 overflow-hidden">

        {/* Gold corner accent top-right */}
        <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-[#C9A84C] to-transparent" />
          <div className="absolute top-0 right-0 h-full w-[1.5px] bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 py-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-7 h-[1.5px] bg-[#C9A84C]" />
            <span className="text-[9px] font-bold tracking-[0.55em] text-[#C9A84C] uppercase">
              {isSingle ? "Project Case Study" : "Case study"}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(32px,5vw,58px)] font-bold text-[#0B1828] leading-tight tracking-tight"
            >
              {isSingle ? (
                <>Deep Dive: <span className="text-[#C9A84C]">{study.title}</span></>
              ) : (
                <>Capitalize on <span className="text-[#C9A84C]">Future-Ready</span><br />Assets</>
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-sans text-sm text-[#0B1828]/50 leading-relaxed lg:max-w-[300px] lg:text-right border-r-[1.5px] border-[#C9A84C]/40 pr-4"
            >
              Strategically located assets delivering institutional-grade execution
              across industrial real estate in India.
            </motion.p>
          </div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 h-[1.5px] bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/40 to-transparent"
          />

          {!isSingle && (
            /* Stats row - Only show on Home page */
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 grid grid-cols-3 divide-x divide-[#0B1828]/8"
            >
              {[
                { val: "50+", unit: "Years", label: "Combined Experience" },
                { val: "12 Mn", unit: "Sq Ft", label: "Delivered" },
                { val: "₹2,000", unit: "Cr", label: "Capital Deployed" },
              ].map((s, i) => (
                <div key={i} className="group px-8 py-5 relative overflow-hidden cursor-default">
                  <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/5 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-8 h-[2px] w-0 group-hover:w-10 bg-[#C9A84C] transition-all duration-500" />
                  <div className="relative flex items-baseline gap-1.5 mb-0.5">
                    <span className="font-serif text-[clamp(24px,3vw,38px)] font-bold text-[#0B1828] leading-none tracking-tight">
                      {s.val}
                    </span>
                    <span className="font-serif text-base font-bold text-[#C9A84C]">{s.unit}</span>
                  </div>
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.28em] text-[#0B1828]/35">{s.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <div className={`relative ${isSingle ? 'h-[500px]' : 'h-[340px]'} max-w-7xl mx-auto overflow-hidden bg-[#0B1828]/5`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={cur + "-img-container"}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={study.image}
              alt={study.title}
              fill
              onLoad={() => setImgLoaded(true)}
              // initial={{ opacity: 0, scale: 1.04 }}
              // animate={{ opacity: imgLoaded ? 1 : 0, scale: 1 }}
              // exit={{ opacity: 0, scale: 0.98 }}
              // transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Bottom-to-top scrim only */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1828]/80 via-[#0B1828]/20 to-transparent" />
        {/* Left scrim for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1828]/60 via-transparent to-transparent" />

        {/* Image caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-6 flex items-end justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={cur + "-caption"}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-2"
            >
              <span
                className="inline-block text-[8px] font-bold tracking-[0.45em] uppercase px-2.5 py-1.5 border w-fit"
                style={{ color: GOLD, borderColor: `${GOLD}55`, background: "rgba(11,24,40,0.55)" }}
              >
                {study.badge}
              </span>
              <h3 className="font-serif text-3xl font-bold text-white leading-tight">{study.title}</h3>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 stroke-[#C9A84C] fill-none" />
                <span className="text-[11px] text-white/60">{study.location}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col items-end gap-2">
            {!isSingle && (
              <span className="font-serif text-[11px] text-white/40 tracking-[0.2em]">
                {String(cur + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
              </span>
            )}
            <span
              className="text-[8px] font-bold tracking-[0.35em] uppercase px-2 py-1"
              style={{ color: GOLD, background: `${GOLD}18` }}
            >
              {study.accentTag}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        {!isSingle && (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0B1828]/20">
            <motion.div
              className="h-full"
              style={{ width: `${progress}%`, background: GOLD }}
              transition={{ duration: 0 }}
            />
          </div>
        )}
      </div>

      {/* ── SLIDE CONTENT ── */}
      <div className="bg-white border-t border-[#0B1828]/8">
        <AnimatePresence mode="wait">
          <motion.div
            key={cur + "-body"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col lg:flex-row gap-0">

              {/* ── LEFT PANEL ── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="lg:w-[220px] flex-shrink-0 pr-8 lg:border-r border-[#0B1828]/8 flex flex-col gap-5"
              >
                {/* Project meta */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C9A84C] mb-3">
                    Project Overview
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      { k: "Location", v: study.location },
                      { k: "Scale", v: study.scale },
                    ].map((r) => (
                      <div key={r.k}>
                        <p className="text-[10px] font-semibold text-[#0B1828]/40 uppercase tracking-[0.1rem] mb-0.5">{r.k}</p>
                        <p className="text-[12px] font-bold text-[#0B1828] leading-snug">{r.v}</p>
                      </div>
                    ))}
                    <div>
                      <p className="text-[8.5px] font-semibold text-[#0B1828]/40 uppercase tracking-[0.2em] mb-1">Status</p>
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-50 border border-emerald-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-[0.2em]">{study.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gold rule */}
                <div className="h-[1px] bg-gradient-to-r from-[#C9A84C]/40 to-transparent" />

                {/* Partner block */}
                <div className="border border-[#C9A84C]/25 bg-[#C9A84C]/4 p-3">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#0B1828]/40 mb-1.5">{study.partnerLabel}</p>
                  <p className="font-serif text-[13px] font-bold text-[#C9A84C] tracking-wide">{study.client}</p>
                </div>

                {/* CTA - Only show on home page */}
                {!isSingle && (
                  <motion.div className="mt-auto">
                    <Link
                      href={`/projects/${study.slug}`}
                      className="flex items-center justify-between gap-2 px-4 py-3 bg-[#0B1828] text-white text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#0B1828]/85 transition-colors duration-200 group"
                    >
                      View Project
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>

              {/* ── RIGHT PANEL ── */}
              <div className="flex-1 pl-0 lg:pl-8 flex flex-col gap-8 mt-10 lg:mt-0">

                {/* Workflow section */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <Workflow className="w-3.5 h-3.5 stroke-[#C9A84C] fill-none" />
                    <span className="text-[15px] font-bold tracking-[0.15em] uppercase text-[#C9A84C]">
                      Execution Workflow
                    </span>
                    <div className="flex-1 h-[1px] bg-[#0B1828]/6" />
                  </motion.div>

                  {/* Step grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {study.workflow.map((step, i) => (
                      <StepCard key={i} step={step} index={i} isVisible />
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                  className="flex items-center flex-wrap gap-x-4 gap-y-2 border border-[#C9A84C]/30 bg-[#C9A84C]/4 px-4 py-3"
                >
                  <div className="flex items-center gap-2 mr-2">
                    <Target className="w-3 h-3 stroke-[#C9A84C] fill-none flex-shrink-0" />
                    <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#C9A84C] whitespace-nowrap">
                      Key Outcomes
                    </span>
                  </div>
                  <div className="w-[1px] h-4 bg-[#C9A84C]/25 hidden sm:block" />
                  {study.outcomes.map((o, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 stroke-[#C9A84C] fill-none flex-shrink-0" />
                      <span className="text-[10px] text-[#0B1828]/60 font-medium">{o}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Extra Details (Challenges & Solutions) - Only for single project view */}
                {isSingle && study.extraDetails && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#0B1828]/8"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-[#C9A84C]" />
                        <h4 className="text-[12px] font-bold text-[#0B1828] uppercase tracking-widest">Core Challenges</h4>
                      </div>
                      <ul className="space-y-3">
                        {study.extraDetails.challenges.map((c, i) => (
                          <li key={i} className="text-[13px] text-[#0B1828]/50 border-l-2 border-[#C9A84C]/20 pl-4 leading-relaxed italic">
                            "{c}"
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
                        <h4 className="text-[12px] font-bold text-[#0B1828] uppercase tracking-widest">Strategic Solutions</h4>
                      </div>
                      <ul className="space-y-3">
                        {study.extraDetails.solutions.map((s, i) => (
                          <li key={i} className="text-[13px] text-[#0B1828]/70 flex gap-2">
                            <span className="text-[#C9A84C] font-bold">✓</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specs */}
                    <div className="md:col-span-2 bg-[#0B1828] p-8 rounded-[1rem] relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Layers size={120} className="text-white" />
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-[10px] font-bold text-[#C9A84C] tracking-[0.3em] uppercase mb-6">Technical Specifications</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                          {study.extraDetails.technicalSpecs.map((spec, i) => (
                            <div key={i}>
                              <p className="text-[9px] font-bold text-white/40 uppercase mb-1">{spec.label}</p>
                              <p className="text-sm font-serif font-bold text-white uppercase tracking-tight">{spec.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── NAV BAR ── */}
      {!isSingle && (
        <div className="bg-white border-t border-[#0B1828]/8 px-8 py-4 flex items-center justify-between max-w-7xl mx-auto">
          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {filteredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-[3px] transition-all duration-350 focus:outline-none"
                style={{
                  width: i === cur ? "36px" : "18px",
                  background: i === cur ? GOLD : "rgba(11,24,40,0.15)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Slide label */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="h-[1px] w-6 bg-[#C9A84C]/40" />
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#0B1828]/30">
              {study.accentTag}
            </span>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-9 h-9 border border-[#0B1828]/12 flex items-center justify-center text-[#0B1828]/50 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-9 h-9 border border-[#0B1828]/12 flex items-center justify-center text-[#0B1828]/50 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      )}

    </section>
  );
}