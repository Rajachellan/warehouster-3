"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import {
  Calculator,
  ArrowRight,
  Sparkles,
  Brain,
  Layers,
  Target,
  BarChart3,
  Search,
  Shield,
  Database,
  TrendingUp,
  Map,
  FileSearch,
  Settings,
  Cpu,
  Network,
  GitBranch,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Download,
} from "lucide-react";
import Link from "next/link";
import { jsPDF } from "jspdf";
import Footer from "@/components/Footer";

import heroImg1 from "@/assets/industrial-park.jpg";
import heroImg2 from "@/assets/warehouse-about.jpg";
import heroImg3 from "@/assets/aerial-view-factory-trucks-parked-near-warehouse-daytime.jpg";
import logoWt from "@/assets/logo-wt.png";

/* ─────────────────────── DATA ─────────────────────── */

const HERO_SLIDES = [
  { image: heroImg1, alt: "Industrial park aerial view" },
  { image: heroImg2, alt: "Modern warehouse facility" },
  { image: heroImg3, alt: "Logistics hub and warehouse" },
];

/* ── BTS Calculator helper ── */

function formatIndianNumber(num: number): string {
  if (!isFinite(num) || isNaN(num)) return "—";
  const rounded = Math.round(num * 100) / 100;
  const [intPart, decPart] = rounded.toString().split(".");
  // Indian grouping: last 3, then every 2
  const lastThree = intPart.slice(-3);
  const remaining = intPart.slice(0, -3);
  const formatted =
    remaining.length > 0
      ? remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree
      : lastThree;
  return decPart ? `${formatted}.${decPart}` : formatted;
}

function formatCr(value: number): string {
  if (!isFinite(value) || isNaN(value)) return "—";
  const cr = value / 10000000;
  return `₹${formatIndianNumber(Math.round(cr * 100) / 100)} Cr`;
}

const CAPABILITIES = [
  {
    title: "Real-time Industrial Index",
    description:
      "Proprietary corridor-level pricing data updated weekly, benchmarking every micro-market across South India.",
    icon: BarChart3,
  },
  {
    title: "Combo and Optics",
    description:
      "Layered zoning, FSI, and environmental data overlays to identify optimal plots before they hit the market.",
    icon: Layers,
  },
  {
    title: "Prospect Intelligence",
    description:
      "Machine-parsed occupier signals from filings, expansion plans, and supply-chain announcements.",
    icon: Search,
  },
  {
    title: "Lattice > Than Data",
    description:
      "Structured relationship graphs connecting landholders, developers, occupiers, and capital in a single view.",
    icon: Network,
  },
  {
    title: "Land Velocity Index",
    description:
      "Transaction-speed analytics per corridor — showing how fast parcels convert from listing to closure.",
    icon: TrendingUp,
  },
  {
    title: "AI Validation",
    description:
      "Automated title, encumbrance, and conversion checks powered by LLM-parsed government records.",
    icon: Shield,
  },
  {
    title: "Transactional Genetics",
    description:
      "Pattern-matched deal archetypes from our proprietary database of 200+ closed mandates.",
    icon: GitBranch,
  },
  {
    title: "Salting > Smart History",
    description:
      "Every historical data point is contextually enriched for predictive corridor modelling.",
    icon: Database,
  },
];

const AI_AGENTS = [
  {
    title: "AI Research Analyst",
    description:
      "Autonomously scans regulatory filings, land records, and industry data to surface actionable intelligence on emerging corridors.",
    icon: FileSearch,
  },
  {
    title: "AI Land Optimizer",
    description:
      "Runs multi-variable simulations on land parcels to optimize plot configuration, FSI utilization, and ground coverage ratios.",
    icon: Settings,
  },
  {
    title: "AI Deal Examiner",
    description:
      "Validates deal economics against comparable transactions, flagging yield discrepancies and structural risks in real time.",
    icon: Target,
  },
  {
    title: "AI Portfolio Oversight",
    description:
      "Monitors portfolio-level exposure, tenant concentration, and renewal risk across every active asset simultaneously.",
    icon: Cpu,
  },
  {
    title: "ARTA Advisor",
    description:
      "Automated Real-Time Advisory engine delivering corridor-specific strategic recommendations to institutional capital desks.",
    icon: Brain,
  },
  {
    title: "AI Land Optimizations",
    description:
      "Continuous optimization loops for land bank strategy, adjusting acquisition targets based on real-time market shifts.",
    icon: Map,
  },
];

/* ─────────────── ANIMATION VARIANTS ─────────────── */

const easeOut = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/* ─────────────── ANIMATED COUNTER ─────────────── */

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: string;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10) || 0;

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = numericTarget;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = end / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */

export default function PlatformContent() {
  /* BTS Calculator state */
  const [landArea, setLandArea] = useState(15);
  const [farRatio, setFarRatio] = useState(0.6);
  const [buildCost, setBuildCost] = useState(2200);
  const [rent, setRent] = useState(22);
  const [occupancy, setOccupancy] = useState(95);
  const [exitCapRate, setExitCapRate] = useState(8);

  /* Computed outputs */
  const builtUpArea = landArea * 43560 * farRatio;
  const projectCost = builtUpArea * buildCost;
  const stabilisedNOI = builtUpArea * rent * 12 * (occupancy / 100);
  const yieldOnCost = projectCost > 0 ? (stabilisedNOI / projectCost) * 100 : 0;
  const exitValue = exitCapRate > 0 ? stabilisedNOI / (exitCapRate / 100) : 0;

  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExporting, setIsExporting] = useState(false);

  const exportPDF = async () => {
    setIsExporting(true);
    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "pt",
        format: "a4", // 842 x 595 pt
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      
      // Header area (Dark Blue)
      pdf.setFillColor("#0A1428");
      pdf.rect(0, 0, pdfWidth, 80, "F");

      // Load logo
      const img = new window.Image();
      img.src = logoWt.src;
      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => {
          console.warn("Logo failed to load, generating PDF without logo");
          resolve();
        };
      });

      if (img.width > 0) {
        const logoHeight = 24;
        const logoWidth = logoHeight * (img.width / img.height);
        pdf.addImage(img, "PNG", 40, 28, logoWidth, logoHeight);
      } else {
        pdf.setTextColor("#FFFFFF");
        pdf.setFontSize(24);
        pdf.setFont("helvetica", "bold");
        pdf.text("WAREHOUSTER", 40, 50);
      }

      pdf.setTextColor("#D4AF37");
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.text("FEASIBILITY MODEL EXPORT", pdfWidth - 40, 45, { align: "right" });

      // Title
      pdf.setTextColor("#0A1428");
      pdf.setFontSize(24);
      pdf.setFont("helvetica", "bold");
      pdf.text("Project Economics & Feasibility", 40, 140);
      
      pdf.setFontSize(10);
      pdf.setTextColor("#6B7280");
      pdf.setFont("helvetica", "normal");
      pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 40, 160);

      // Reusable table builder
      const drawSection = (title: string, items: any[], startX: number, startY: number, width: number) => {
        // Section Header
        pdf.setFillColor("#0A1428");
        pdf.rect(startX, startY, width, 36, "F");
        
        pdf.setTextColor("#D4AF37");
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "bold");
        pdf.text(title.toUpperCase(), startX + 20, startY + 22);

        let currentY = startY + 36;
        
        items.forEach((item, index) => {
            const isAlternate = index % 2 === 0;
            if (isAlternate) {
                pdf.setFillColor("#F9FAFB");
                pdf.rect(startX, currentY, width, 45, "F");
            }
            
            // Label
            pdf.setTextColor("#6B7280");
            pdf.setFontSize(10);
            pdf.setFont("helvetica", "bold");
            pdf.text(item.label.toUpperCase(), startX + 20, currentY + 27);

            // Value
            pdf.setTextColor(item.highlight ? "#D4AF37" : "#0A1428");
            pdf.setFontSize(14);
            pdf.setFont("helvetica", "bold");
            pdf.text(item.value, startX + width - 20, currentY + 28, { align: "right" });
            
            // Bottom Border (except last item)
            if (index < items.length - 1) {
              pdf.setDrawColor("#E5E7EB");
              pdf.setLineWidth(0.5);
              pdf.line(startX, currentY + 45, startX + width, currentY + 45);
            }

            currentY += 45;
        });
        
        // Outer Border
        pdf.setDrawColor("#E5E7EB");
        pdf.setLineWidth(1);
        pdf.rect(startX, startY, width, currentY - startY, "S");
        
        return currentY;
      };

      // Split into two columns
      const col1X = 40;
      const colWidth = 360;
      const col2X = pdfWidth - 40 - colWidth; // 442
      const startY = 195;

      const inputs = [
        { label: "Land Area (Acres)", value: landArea.toString() },
        { label: "FAR / Coverage Ratio", value: farRatio.toString() },
        { label: "Build Cost (INR / Sq Ft)", value: buildCost.toString() },
        { label: "Rent (INR / Sq Ft / Month)", value: rent.toString() },
        { label: "Stabilised Occupancy (%)", value: occupancy.toString() },
        { label: "Exit Cap Rate (%)", value: exitCapRate.toString() }
      ];

      const outputs = [
        { label: "Built-Up Area", value: `${formatIndianNumber(Math.round(builtUpArea))} sq ft` },
        { label: "Project Cost", value: formatCr(projectCost).replace("₹", "INR ") },
        { label: "Stabilised NOI (Annual)", value: formatCr(stabilisedNOI).replace("₹", "INR "), highlight: true },
        { label: "Yield on Cost", value: isFinite(yieldOnCost) ? `${(Math.round(yieldOnCost * 100) / 100).toFixed(2)}%` : "—", highlight: true },
        { label: "Indicative Exit Value", value: formatCr(exitValue).replace("₹", "INR "), highlight: true }
      ];

      const endY1 = drawSection("INPUT ASSUMPTIONS", inputs, col1X, startY, colWidth);
      const endY2 = drawSection("INDICATIVE OUTPUT", outputs, col2X, startY, colWidth);

      // Disclaimer
      let finalY = Math.max(endY1, endY2) + 30;
      pdf.setFontSize(9);
      pdf.setTextColor("#9CA3AF");
      pdf.setFont("helvetica", "italic");
      const disclaimer = "Indicative only. Excludes land cost, statutory charges, financing, leasing incentives and corridor-specific adjustments. Warehouster issues full underwriting models under NDA.";
      const splitDisclaimer = pdf.splitTextToSize(disclaimer, pdfWidth - 80);
      pdf.text(splitDisclaimer, 40, finalY);

      // Save PDF
      pdf.save("Warehouster-Feasibility.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <main className="min-h-screen bg-white">
      {/* ════════════════════════════════════════════════════
          HERO — Cinematic full-screen carousel
          ════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[500px] flex items-center overflow-hidden">
        {/* Background Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].alt}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Deep dark-blue overlay for readability */}
        <div className="absolute inset-0 bg-[#0A1428]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428]/25 via-[#0A1428]/35 to-[#0A1428]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-transparent to-[#0A1428]/40" />

        {/* Subtle golden light leak */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_75%_40%,rgba(212,175,55,0.05),transparent)] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-6">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/8 backdrop-blur-md">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles size={14} className="text-[#D4AF37]" />
                  </motion.div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                    Platform Intelligence
                  </span>
                </div>
              </motion.div>

             <motion.h1
  variants={fadeUp}
  className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-black leading-[1.08] mb-8 bg-gradient-to-r from-white via-slate-200 to-[#D4AF37] bg-clip-text text-transparent"
>
  The data and AI layer making South India industrial real estate{" "}
  <span className="relative inline-block">
    <span className="relative z-10 italic bg-gradient-to-r from-[#D4AF37] via-[#F0E2A1] to-[#D4AF37] bg-clip-text text-transparent">
      finally legible.
    </span>

    <motion.span
      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        delay: 1,
        duration: 1.2,
        ease: easeOut,
      }}
    />
  </span>
</motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg text-white/55 max-w-xl font-medium leading-relaxed mb-10"
              >
                Our proprietary data engine synthesizes land records, zoning
                layers, occupier signals and pricing benchmarks into a single
                coherent operating system — purpose-built for
                institutional-grade decisions in India&apos;s most complex
                industrial corridors.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#c9a632] text-[#0A1428] text-[12px] font-black uppercase tracking-[0.2em] shadow-[0_8px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_44px_rgba(212,175,55,0.55)] transition-all duration-500 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Request platform access
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="#calculator"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md text-white text-[12px] font-black uppercase tracking-[0.2em] hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/8 transition-all duration-500"
                >
                  <Calculator size={16} className="text-[#D4AF37]" />
                  Try BTS Calculator
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom carousel controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:bg-white/15 hover:text-white transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-500"
                style={{ width: currentSlide === idx ? 40 : 12 }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div className="absolute inset-0 bg-white/15 rounded-full" />
                {currentSlide === idx && (
                  <motion.div
                    className="absolute inset-0 bg-[#D4AF37] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:bg-white/15 hover:text-white transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Side counter */}
        <div className="absolute top-1/2 -translate-y-1/2 right-8 z-20 hidden lg:flex flex-col items-center gap-2">
          <span className="text-xs font-black text-white tracking-widest">
            0{currentSlide + 1}
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37]/40 to-white/10" />
          <span className="text-xs font-black text-white/25 tracking-widest">
            0{HERO_SLIDES.length}
          </span>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          BTS CALCULATOR — Fully dynamic interactive
          ════════════════════════════════════════════════════ */}
      <section
        id="calculator"
        className="relative py-28 md:py-36 bg-white overflow-hidden"
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0A1428 0.5px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {/* Section header */}
            <motion.div variants={fadeUp} className="mb-16">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-[2px] w-10 bg-[#D4AF37]" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#D4AF37]">
                  Feasibility Engine
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#0A1428] leading-[1.05]">
                  BTS Calculator.{" "}
                  <span className="italic text-[#D4AF37]">
                    Run feasibility
                    <br className="hidden md:block" /> in seconds.
                  </span>
                </h2>
                <p className="text-base text-[#0A1428]/45 max-w-md font-medium leading-relaxed lg:pb-1">
                  Input your scenario to model your economics. All outputs
                  update live — no spreadsheet needed.
                </p>
              </div>
            </motion.div>

            {/* Calculator Card */}
            <motion.div variants={scaleIn}>
              <div id="full-calculator-card" className="rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(10,20,40,0.1)] border border-stone-200/80">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* ─── LEFT: Inputs ─── */}
                  <div className="bg-white p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D4AF37]">
                        Inputs
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-black text-[#0A1428] mb-8">
                      BTS feasibility
                    </h3>

                    <div className="space-y-6">
                      {[
                        {
                          label: "Land Area (Acres)",
                          value: landArea,
                          onChange: setLandArea,
                          step: 1,
                          min: 0,
                        },
                        {
                          label: "FAR / Coverage Ratio",
                          value: farRatio,
                          onChange: setFarRatio,
                          step: 0.05,
                          min: 0,
                        },
                        {
                          label: "Build Cost (₹ / Sq Ft)",
                          value: buildCost,
                          onChange: setBuildCost,
                          step: 100,
                          min: 0,
                        },
                        {
                          label: "Rent (₹ / Sq Ft / Month)",
                          value: rent,
                          onChange: setRent,
                          step: 1,
                          min: 0,
                        },
                        {
                          label: "Stabilised Occupancy (%)",
                          value: occupancy,
                          onChange: setOccupancy,
                          step: 1,
                          min: 0,
                        },
                        {
                          label: "Exit Cap Rate (%)",
                          value: exitCapRate,
                          onChange: setExitCapRate,
                          step: 0.25,
                          min: 0,
                        },
                      ].map((field) => (
                        <div key={field.label}>
                          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#0A1428]/30 mb-2">
                            {field.label}
                          </label>
                          <input
                            type="number"
                            value={field.value}
                            onChange={(e) => {
                              const val = parseFloat(e.target.value);
                              field.onChange(isNaN(val) ? 0 : val);
                            }}
                            step={field.step}
                            min={field.min}
                            className="w-full bg-[#F8F9FA] border border-stone-200 rounded-xl px-5 py-3.5 text-[#0A1428] font-bold text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/50 transition-all hover:border-stone-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ─── RIGHT: Live Outputs ─── */}
                  <div className="bg-[#0A1428] p-8 md:p-10 relative flex flex-col justify-between">
                    <div className="bg-[#0A1428] pb-6 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D4AF37]">
                          Indicative Output
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-black text-white mb-10">
                        Project economics
                      </h3>

                      {/* Output grid */}
                      <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                        {/* Built-Up Area */}
                        <div className="flex flex-col gap-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                            Built-Up Area
                          </p>
                          <p className="text-2xl md:text-3xl font-serif font-black text-white leading-none">
                            {formatIndianNumber(Math.round(builtUpArea))}{" "}
                            <span className="text-lg text-white/40">sq ft</span>
                          </p>
                        </div>

                        {/* Project Cost */}
                        <div className="flex flex-col gap-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                            Project Cost
                          </p>
                          <p className="text-2xl md:text-3xl font-serif font-black text-white leading-none">
                            {formatCr(projectCost)}
                          </p>
                        </div>

                        {/* Stabilised NOI */}
                        <div className="flex flex-col gap-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                            Stabilised NOI (Annual)
                          </p>
                          <p className="text-2xl md:text-3xl font-serif font-black text-[#D4AF37] leading-none">
                            {formatCr(stabilisedNOI)}
                          </p>
                        </div>

                        {/* Yield on Cost */}
                        <div className="flex flex-col gap-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                            Yield on Cost
                          </p>
                          <p className="text-2xl md:text-3xl font-serif font-black text-[#D4AF37] leading-none">
                            {isFinite(yieldOnCost)
                              ? `${(Math.round(yieldOnCost * 100) / 100).toFixed(2)}%`
                              : "—"}
                          </p>
                        </div>
                      </div>

                      {/* Exit Value — full width highlight */}
                      <div className="mt-12 pt-8 border-t border-white/[0.08]">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">
                          Indicative Exit Value
                        </p>
                        <p className="text-3xl md:text-5xl font-serif font-black text-[#D4AF37] leading-none">
                          {formatCr(exitValue)}
                        </p>
                      </div>

                      {/* Disclaimer */}
                      <div className="mt-12 pt-5 border-t border-white/[0.05]">
                        <p className="text-[10px] text-white/20 font-medium leading-relaxed italic">
                          Indicative only. Excludes land cost, statutory charges,
                          financing, leasing incentives and corridor-specific
                          adjustments. Warehouster issues full underwriting
                          models under NDA.
                        </p>
                      </div>
                    </div>
                    
                    {/* Export Button */}
                    <div className="mt-8">
                      <button
                        onClick={exportPDF}
                        disabled={isExporting}
                        className="w-full group flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Download size={16} className="text-[#D4AF37] group-hover:text-[#0A1428] transition-colors" />
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white group-hover:text-[#0A1428] transition-colors">
                          {isExporting ? "Generating PDF..." : "Export as PDF"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CAPABILITIES — Elegant 2-column staggered layout
          ════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-[#F9FAFB] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {/* Header */}
            <motion.div
              variants={fadeUp}
              className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-[2px] w-10 bg-[#D4AF37]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#D4AF37]">
                    Core Intelligence
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#0A1428] leading-[1.05]">
                  Built from first-principles.{" "}
                  <span className="text-[#D4AF37]">
                    By practitioners.
                  </span>
                </h2>
              </div>
              <p className="text-base text-[#0A1428]/40 max-w-sm font-medium leading-relaxed lg:pb-2">
                Eight proprietary intelligence modules that form the backbone
                of every institutional decision we power.
              </p>
            </motion.div>

            {/* 4×2 Grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="group"
                >
                  <div className="relative h-full p-7 rounded-2xl bg-white border border-stone-200/80 hover:border-[#D4AF37]/30 transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(10,20,40,0.08)] overflow-hidden">
                    {/* Top gold line on hover */}
                    <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Number */}
                    <span className="absolute top-5 right-6 text-[11px] font-black text-[#0A1428]/[0.06] tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-[#0A1428]/[0.03] group-hover:bg-[#D4AF37]/10 flex items-center justify-center mb-5 transition-all duration-500">
                      <cap.icon
                        size={18}
                        className="text-[#D4AF37] group-hover:text-[#D4AF37] transition-colors duration-500"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-[15px] font-black text-[#0A1428] mb-2.5 group-hover:text-[#0A1428] transition-colors duration-300 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-[13px] text-[#0A1428]/35 font-medium leading-relaxed group-hover:text-[#0A1428]/55 transition-colors duration-300">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SIX AGENTS — Premium cards with dark-blue accent bg
          ════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {/* Header */}
            <motion.div
              variants={fadeUp}
              className="mb-16 text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 mb-6">
                <Cpu size={14} className="text-[#D4AF37]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Autonomous Agents
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#0A1428] leading-[1.05] mb-4">
                Six agents.{" "}
                <span className="italic text-[#D4AF37]">
                  One operating system.
                </span>
              </h2>
              <p className="text-base text-[#0A1428]/40 max-w-lg mx-auto font-medium leading-relaxed mt-4">
                Purpose-built AI agents that work in concert to surface,
                validate, and optimize every industrial real estate decision.
              </p>
            </motion.div>

            {/* Agent cards */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {AI_AGENTS.map((agent, i) => (
                <motion.div
                  key={agent.title}
                  variants={fadeUp}
                  onMouseEnter={() => setHoveredAgent(i)}
                  onMouseLeave={() => setHoveredAgent(null)}
                  className="group"
                >
                  <div
                    className={`relative p-8 rounded-2xl transition-all duration-500 overflow-hidden h-full cursor-default ${
                      hoveredAgent === i
                        ? "bg-[#0A1428] border border-[#D4AF37]/25 shadow-[0_25px_60px_rgba(10,20,40,0.25)] scale-[1.02]"
                        : "bg-white border border-stone-200 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    {/* Agent number */}
                    <div
                      className={`absolute top-7 right-7 text-[40px] font-black leading-none transition-colors duration-500 ${
                        hoveredAgent === i
                          ? "text-white/[0.04]"
                          : "text-[#0A1428]/[0.03]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                        hoveredAgent === i
                          ? "bg-[#D4AF37]/12"
                          : "bg-[#0A1428]/[0.04]"
                      }`}
                    >
                      <agent.icon
                        size={20}
                        className={`transition-colors duration-500 ${
                          hoveredAgent === i
                            ? "text-[#D4AF37]"
                            : "text-[#D4AF37]"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <h3
                      className={`text-lg font-black mb-3 transition-colors duration-400 leading-snug ${
                        hoveredAgent === i
                          ? "text-white"
                          : "text-[#0A1428]"
                      }`}
                    >
                      {agent.title}
                    </h3>
                    <p
                      className={`text-[13px] font-medium leading-relaxed transition-colors duration-400 ${
                        hoveredAgent === i
                          ? "text-white/45"
                          : "text-[#0A1428]/40"
                      }`}
                    >
                      {agent.description}
                    </p>

                    {/* Status */}
                    <div className="mt-6 flex items-center gap-2">
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full ${
                          hoveredAgent === i
                            ? "bg-emerald-400"
                            : "bg-emerald-500"
                        }`}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                          hoveredAgent === i
                            ? "text-emerald-400/50"
                            : "text-emerald-600/40"
                        }`}
                      >
                        Active
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-16 text-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#0A1428] text-white text-[12px] font-black uppercase tracking-[0.2em] shadow-[0_8px_32px_rgba(10,20,40,0.18)] hover:shadow-[0_16px_48px_rgba(10,20,40,0.28)] transition-all duration-500 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Explore all platform modules
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          COMPOUNDING CTA — Dark navy accent section
          ════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-[#0A1428] overflow-hidden">
        {/* Decorative light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_70%_40%,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <motion.div variants={slideLeft} className="md:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-10 bg-[#D4AF37]/40" />
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#D4AF37]/70">
                  Compounding Advantage
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white leading-[1.15] mb-6">
                Every deal we touch compounds the dataset. Every dataset
                improvement sharpens the next{" "}
                <span className="text-[#D4AF37]">deal.</span>
              </h2>
              <p className="text-base text-white/35 max-w-lg font-medium leading-relaxed">
                Our closed-loop intelligence engine transforms every
                transaction into institutional-grade data — creating a
                compounding advantage no competitor can replicate.
              </p>
            </motion.div>

            <motion.div
              variants={slideRight}
              className="md:col-span-5 flex md:justify-end"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 px-10 py-5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#c9a632] text-[#0A1428] text-[12px] font-black uppercase tracking-[0.2em] shadow-[0_8px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_16px_48px_rgba(212,175,55,0.5)] transition-all duration-500 hover:-translate-y-0.5 active:scale-[0.98] whitespace-nowrap"
              >
                Join the platform
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
