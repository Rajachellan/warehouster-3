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

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface Step {
  icon: React.ReactNode;
  title: string;
  desc: string;
}
interface CaseStudy {
  badge: string;
  title: string;
  location: string;
  image: string;
  land: string;
  built: string;
  status: string;
  partner: string;
  partnerLabel: string;
  page: string;
  steps: Step[];
  outcomes: string[];
  accentTag: string;
}

// ─── DATA ───────────────────────────────────────────────────────────────────
const ICON_CLS = "w-4 h-4 stroke-[#C9A84C] fill-none";

const STUDIES: CaseStudy[] = [
  {
    badge: "Successful Institutional Exit",
    title: "Blackstone | Redhills",
    location: "Redhills, North Chennai",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80",
    land: "25 Acres",
    built: "500,000 Sq.Ft · Grade-A",
    status: "Completed 2023",
    partner: "BLACKSTONE",
    partnerLabel: "Transferred To Institutional Partner",
    page: "/projects/redhills-development",
    accentTag: "Industrial",
    steps: [
      { icon: <Search className={ICON_CLS} />, title: "Land Identification", desc: "Off-market sourcing; yield catchment & utility checks." },
      { icon: <FileText className={ICON_CLS} />, title: "Title Clean-up", desc: "Diligence, clearance & legal structuring." },
      { icon: <Building2 className={ICON_CLS} />, title: "SPV Creation", desc: "Asset structured in SPV & transferred to Blackstone." },
      { icon: <ShieldCheck className={ICON_CLS} />, title: "Approvals", desc: "DTCP layout approval, environmental clearance & NOCs." },
      { icon: <HardHat className={ICON_CLS} />, title: "Dev. Management", desc: "Master planning, vendor strategy & construction." },
      { icon: <Flag className={ICON_CLS} />, title: "Completion", desc: "Delivered 500k sq.ft on time & on budget." },
    ],
    outcomes: ["Seamless Approvals & Compliance", "Successful Partnership Model", "On-Time Grade-A Delivery"],
  },
  {
    badge: "Industrial Logistics Hub",
    title: "Chengalpattu Logistics Park",
    location: "Chengalpattu, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80",
    land: "40 Acres",
    built: "750,000 Sq.Ft · Grade-A",
    status: "Operational 2022",
    partner: "AMAZON INDIA",
    partnerLabel: "Anchor Tenant",
    page: "/projects/chengalpattu-development",
    accentTag: "Logistics",
    steps: [
      { icon: <MapPin className={ICON_CLS} />, title: "Site Selection", desc: "Proximity to NH-45 & Chennai port; logistics yield analysis." },
      { icon: <Layers className={ICON_CLS} />, title: "Land Aggregation", desc: "Multi-parcel acquisition & title consolidation." },
      { icon: <Ruler className={ICON_CLS} />, title: "Infra Design", desc: "Grade-A warehouse design with 12m clear height." },
      { icon: <ShieldCheck className={ICON_CLS} />, title: "Regulatory Clearances", desc: "SIPCOT approvals, fire NOC & environmental clearance." },
      { icon: <Users className={ICON_CLS} />, title: "Pre-Leasing", desc: "Anchor tenant secured before construction completion." },
      { icon: <Flag className={ICON_CLS} />, title: "Handover", desc: "Full fit-out & operational handover to tenant." },
    ],
    outcomes: ["100% Pre-Leased at Completion", "14% IRR Delivered to Investors", "Zero Cost Overrun"],
  },
  {
    badge: "Renewable Energy Logistics",
    title: "Jaisalmer Renewable Hub",
    location: "Jaisalmer, Rajasthan",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80",
    land: "60 Acres",
    built: "300,000 Sq.Ft · Specialised",
    status: "Completed 2024",
    partner: "ADANI GREEN",
    partnerLabel: "Strategic Partner",
    page: "/projects/jaisalmer-bts",
    accentTag: "Renewable",
    steps: [
      { icon: <Sun className={ICON_CLS} />, title: "Feasibility Study", desc: "Solar irradiance mapping & renewable supply chain audit." },
      { icon: <FileSearch className={ICON_CLS} />, title: "Land Due Diligence", desc: "Rajasthan land laws, tribal rights clearance & title." },
      { icon: <Ruler className={ICON_CLS} />, title: "Specialised Design", desc: "Wind load, dust mitigation & solar-ready roof design." },
      { icon: <ShieldCheck className={ICON_CLS} />, title: "Approvals", desc: "State industrial designation & MoEF clearance." },
      { icon: <Zap className={ICON_CLS} />, title: "Green Infra Build", desc: "On-site solar, water recycling & EV charging dock." },
      { icon: <Flag className={ICON_CLS} />, title: "Commissioning", desc: "Net-zero certified facility delivered ahead of schedule." },
    ],
    outcomes: ["Net-Zero Certified Asset", "First-of-Kind Renewable Park", "Delivered Ahead of Schedule"],
  },
  {
    badge: "Coastal Distribution Centre",
    title: "Pondicherry Distribution Hub",
    location: "Pondicherry, Union Territory",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80",
    land: "18 Acres",
    built: "280,000 Sq.Ft · Grade-A",
    status: "Operational 2023",
    partner: "ESR GROUP",
    partnerLabel: "Institutional Investor",
    page: "/projects/pondicherry-bts",
    accentTag: "Coastal",
    steps: [
      { icon: <Anchor className={ICON_CLS} />, title: "Port Proximity Study", desc: "Last-mile mapping to Pondicherry & Karaikal ports." },
      { icon: <ScrollText className={ICON_CLS} />, title: "UT Compliance", desc: "Union Territory land regulations & SIPCOT interface." },
      { icon: <LayoutGrid className={ICON_CLS} />, title: "Multi-Client Design", desc: "Flexible bays for pharma, FMCG & cold-chain tenants." },
      { icon: <ShieldCheck className={ICON_CLS} />, title: "Approvals", desc: "CRZ compliance, fire NOC & pollution control board." },
      { icon: <Users className={ICON_CLS} />, title: "Leasing", desc: "Multi-tenant pre-leased with 3 blue-chip occupiers." },
      { icon: <Flag className={ICON_CLS} />, title: "Asset Handover", desc: "Transferred to ESR Group with full occupancy at exit." },
    ],
    outcomes: ["Full Occupancy at Exit", "CRZ & Multi-Reg Compliance", "₹420 Cr Asset Value Created"],
  },
  {
    badge: "Portfolio Consolidation",
    title: "Pan-India Industrial Portfolio",
    location: "8 States · 12 Cities",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
    land: "220+ Acres",
    built: "2.5 Mn Sq.Ft",
    status: "Ongoing Portfolio",
    partner: "₹2,000 CR+",
    partnerLabel: "Capital Deployed",
    page: "/projects/portfolio",
    accentTag: "Portfolio",
    steps: [
      { icon: <Binoculars className={ICON_CLS} />, title: "Origination", desc: "Off-market deal sourcing across Tier 1 & 2 corridors." },
      { icon: <Briefcase className={ICON_CLS} />, title: "Capital Raise", desc: "HNIs, family offices & institutional co-investment." },
      { icon: <Scale className={ICON_CLS} />, title: "Legal Structuring", desc: "SPV, JV & REIT-compatible structure for each asset." },
      { icon: <HardHat className={ICON_CLS} />, title: "EPC Management", desc: "In-house project management ensuring quality delivery." },
      { icon: <TrendingUp className={ICON_CLS} />, title: "Asset Management", desc: "Active leasing, rent escalation & tenant retention." },
      { icon: <Trophy className={ICON_CLS} />, title: "Institutional Exit", desc: "Structured exits to Blackstone, ESR, GLP & others." },
    ],
    outcomes: ["50+ Yrs Combined Experience", "12 Mn Sq.Ft Delivered", "Multiple Institutional Exits"],
  },
];

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const GOLD = "#C9A84C";
const NAVY = "#0B1828";
const INTERVAL = 6000;

// ─── STEP CARD ───────────────────────────────────────────────────────────────
function StepCard({ step, index, isVisible }: { step: Step; index: number; isVisible: boolean }) {
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
        {step.icon}
      </div>
      <p className="text-[13px] font-bold text-[#0B1828] uppercase tracking-wide mb-1.5">{step.title}</p>
      <p className="text-[14px] text-[#0B1828]/55 ">{step.desc}</p>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function CaseStudySection() {
  const [cur, setCur] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(Date.now());
  const sectionRef = useRef<HTMLDivElement>(null);

  const study = STUDIES[cur];

  const goTo = useCallback((n: number) => {
    const next = ((n % STUDIES.length) + STUDIES.length) % STUDIES.length;
    setCur(next);
    setImgLoaded(false);
    setProgress(0);
    startRef.current = Date.now();
  }, []);

  const next = useCallback(() => goTo(cur + 1), [cur, goTo]);
  const prev = useCallback(() => goTo(cur - 1), [cur, goTo]);

  // Auto-advance
  useEffect(() => {
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
  }, [cur, goTo]);

  // Intersection observer
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

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
              Case study
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(32px,5vw,58px)] font-bold text-[#0B1828] leading-tight tracking-tight"
            >
              Capitalize on{" "}
              <span className="text-[#C9A84C]">Future-Ready</span>
              <br />Assets
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

          {/* Stats row */}
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
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <div className="relative h-[340px] max-w-7xl mx-auto overflow-hidden bg-[#0B1828]/5">
        <AnimatePresence mode="wait">
          <motion.img
            key={cur + "-img"}
            src={study.image}
            alt={study.title}
            onLoad={() => setImgLoaded(true)}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: imgLoaded ? 1 : 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
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
                className="inline-block text-[8px] font-bold tracking-[0.45em] uppercase px-2.5 py-1.5 border"
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
            <span className="font-serif text-[11px] text-white/40 tracking-[0.2em]">
              {String(cur + 1).padStart(2, "0")} / {String(STUDIES.length).padStart(2, "0")}
            </span>
            <span
              className="text-[8px] font-bold tracking-[0.35em] uppercase px-2 py-1"
              style={{ color: GOLD, background: `${GOLD}18` }}
            >
              {study.accentTag}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0B1828]/20">
          <motion.div
            className="h-full"
            style={{ width: `${progress}%`, background: GOLD }}
            transition={{ duration: 0 }}
          />
        </div>
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
            <div className="max-w-7xl mx-auto px-8 py-10 flex gap-0">

              {/* ── LEFT PANEL ── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="w-[220px] flex-shrink-0 pr-8 border-r border-[#0B1828]/8 flex flex-col gap-5"
              >
                {/* Project meta */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C9A84C] mb-3">
                    Project Overview
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      { k: "Location", v: study.location },
                      { k: "Land Area", v: study.land },
                      { k: "Built Area", v: study.built },
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
                  <p className="font-serif text-[13px] font-bold text-[#C9A84C] tracking-wide">{study.partner}</p>
                </div>

                {/* CTA */}
                <motion.a
                  href={study.page}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto flex items-center justify-between gap-2 px-4 py-3 bg-[#0B1828] text-white text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#0B1828]/85 transition-colors duration-200 group"
                >
                  View Project
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </motion.a>
              </motion.div>

              {/* ── RIGHT PANEL ── */}
              <div className="flex-1 pl-8 flex flex-col gap-6">

                {/* Workflow label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Workflow className="w-3.5 h-3.5 stroke-[#C9A84C] fill-none" />
                  <span className="text-[15px] font-bold tracking-[0.15em] uppercase text-[#C9A84C]">
                    End-to-End Execution Workflow
                  </span>
                  <div className="flex-1 h-[px] bg-[#0B1828]/6" />
                </motion.div>

                {/* Step grid */}
                <div className="grid grid-cols-3 gap-3">
                  {study.steps.map((step, i) => (
                    <StepCard key={i} step={step} index={i} isVisible />
                  ))}
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
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── NAV BAR ── */}
      <div className="bg-white border-t border-[#0B1828]/8 px-8 py-4 flex items-center justify-between max-w-7xl mx-auto">
        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {STUDIES.map((_, i) => (
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

    </section>
  );
}