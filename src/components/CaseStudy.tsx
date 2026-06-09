"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Settings, CheckCircle2, Navigation } from "lucide-react";
import { projects } from "@/data/projects";

const INTERVAL = 6000;

export default function CaseStudy() {
  const [cur, setCur] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(Date.now());

  const study = projects[cur];

  const goTo = useCallback((n: number) => {
    const next = ((n % projects.length) + projects.length) % projects.length;
    setCur(next);
    setProgress(0);
    startRef.current = Date.now();
  }, []);

  const next = useCallback(() => goTo(cur + 1), [cur, goTo]);
  const prev = useCallback(() => goTo(cur - 1), [cur, goTo]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startRef.current) / INTERVAL;
      if (elapsed >= 1) goTo(cur + 1);
      else setProgress(elapsed * 100);
    }, 60);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [cur, goTo]);

  if (!study) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">
              Execution Excellence
            </span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all bg-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all bg-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Card */}
        <div className="relative w-full rounded-[2rem] overflow-hidden border border-gray-200 bg-white shadow-sm">
          <Link href={`/projects/${study.slug}`} className="block">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="w-full flex flex-col"
              >

                {/* ── HERO IMAGE — must be position:relative with explicit height ── */}
                <div
                  className="w-full overflow-hidden"
                  style={{ position: "relative", height: "380px" }}
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 1280px"
                    className="object-cover"
                    priority
                  />

                  {/* Dark scrim over image */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(10,20,40,0.52)",
                      zIndex: 1,
                    }}
                  />

                  {/* Top-left badge */}
                  <div style={{ position: "absolute", top: 24, left: 24, zIndex: 2 }}>
                    <span
                      style={{
                        color: "#D4AF37",
                        fontSize: 10,
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.35em",
                        border: "1px solid rgba(212,175,55,0.6)",
                        background: "rgba(255,255,255,0.1)",
                        padding: "4px 13px",
                        borderRadius: 4,
                      }}
                    >
                      {study.heroLabel}
                    </span>
                  </div>

                  {/* Top-right client logo */}
                  <div
                    style={{
                      position: "absolute",
                      top: 24,
                      right: 24,
                      zIndex: 2,
                      background: "#fff",
                      padding: "6px 16px",
                      borderRadius: 6,
                    }}
                  >
                    <span
                      style={{
                        color: "#0A1428",
                        fontWeight: 900,
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {study.client}
                    </span>
                  </div>

                  {/* Title block at bottom of image */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 2,
                      padding: "2.5rem 2rem 1.75rem",
                    }}
                  >
                    <p
                      style={{
                        color: "#D4AF37",
                        fontSize: 11,
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.3em",
                        marginBottom: 8,
                      }}
                    >
                      Case Study
                    </p>
                    <h2
                      style={{
                        color: "#ffffff",
                        fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        margin: 0,
                      }}
                    >
                      {study.client} | {study.title}
                    </h2>
                  </div>
                </div>

                {/* ── CONTENT PANEL — white ── */}
                <div className="w-full bg-white grid lg:grid-cols-[240px_1fr] divide-x divide-gray-100">

                <div className="grid grid-cols-2 gap-5">

  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2">
      Location
    </p>
    <p className="text-sm font-bold text-[#0A1428] leading-snug">
      {study.location}
    </p>
  </div>

  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2">
      Total Land Area
    </p>
    <p className="text-sm font-bold text-[#0A1428] leading-snug">
      {study.scale}
    </p>
  </div>

  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2">
      GFA / Built Area
    </p>
    <p className="text-sm font-bold text-[#0A1428] leading-snug">
      {study.metrics[0]?.value}
    </p>
  </div>

  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2">
      Status
    </p>

    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
      <CheckCircle2
        size={12}
        className="text-emerald-600"
      />
      <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
        {study.status}
      </span>
    </div>
  </div>

</div>

                  {/* Right Workflow */}
                  <div className="p-8 space-y-5">
                    <div className="flex items-center gap-2 text-[#D4AF37] text-[11px] font-black uppercase tracking-widest">
                      <Settings size={14} /> End-to-End Execution Workflow
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {study.workflow.slice(0, 6).map((step, idx) => (
                        <div
                          key={idx}
                          className="relative bg-gray-50 border border-gray-100 p-4 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <span className="absolute top-3 right-3 text-[10px] font-black text-gray-200">
                            0{idx + 1}
                          </span>
                          <div className="w-7 h-7 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-3">
                            <Navigation size={13} />
                          </div>
                          <h4 className="text-[11px] font-bold text-[#0A1428] mb-1 leading-tight">
                            {step.title}
                          </h4>
                          <p className="text-[10px] text-gray-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {study.outcomes && study.outcomes.length > 0 && (
                      <div className="border border-gray-200 rounded-full px-5 py-2.5 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">
                          Key Outcomes:
                        </span>
                        {study.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-600">
                            <CheckCircle2 size={11} className="text-[#D4AF37]" /> {outcome}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Link>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-100 z-10">
            <motion.div className="h-full bg-[#D4AF37]" style={{ width: `${progress}%` }} />
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-5 right-7 flex gap-2 z-10">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); goTo(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === cur ? "w-7 bg-[#D4AF37]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}