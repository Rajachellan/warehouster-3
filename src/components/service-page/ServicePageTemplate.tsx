"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import CaseStudySection, { CaseStudyProps } from "@/components/CaseStudySection";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface ServiceStat {
  n: number;
  suffix: string;
  label: string;
}

export interface ServiceCard {
  tag: string;
  title: string;
  body: string;
  img: any;
}

export interface ServiceArchetype {
  type: string;
  tag: string;
  desc: string;
  img: any;
}

export interface ServiceStep {
  n: string;
  title: string;
  body: string;
  img: any;
}

export interface ServiceCorridor {
  city: string;
  role: string;
  nodes: string[];
  sector: string;
  img: any;
}

export interface ServiceInsight {
  tag: string;
  title: string;
  date: string;
  img: any;
}

export interface ServicePageContent {
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    mainImage: any;
    accentImage1: any;
    accentImage2: any;
    mainImageAlt: string;
  };
  stats: ServiceStat[];
  trustItems: string[];
  galleryImages: any[];
  pillarsSection: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
  };
  pillars: ServiceCard[];
  archetypesSection: {
    eyebrow: string;
    title: string;
    highlight: string;
  };
  archetypes: ServiceArchetype[];
  processSection: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
  };
  steps: ServiceStep[];
  corridorsSection: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
  };
  corridors: ServiceCorridor[];
  quote: { text: string; author: string };
  insightsSection: {
    eyebrow: string;
    title: string;
    highlight: string;
  };
  insights: ServiceInsight[];
  valueProp: {
    eyebrow: string;
    title: string;
    mainImage: any;
    accentImage: any;
    mainImageAlt: string;
    offers: string[];
    cta: {
      eyebrow: string;
      title: string;
      description: string;
      buttonLabel: string;
      href: string;
    };
  };
  caseStudy: CaseStudyProps;
}

// ── Primitives ──────────────────────────────────────────────────────────────

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let n = 0;
    const step = Math.ceil(to / 60);
    const id = setInterval(() => {
      n += step;
      if (n >= to) {
        setVal(to);
        clearInterval(id);
      } else {
        setVal(n);
      }
    }, 18);
    return () => clearInterval(id);
  }, [started, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div className="h-px w-8 bg-primary/20" />
      <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/40">
        {children}
      </span>
    </div>
  );
}

function GoldRule() {
  return <div className="mb-6 h-px w-10 bg-primary/15" />;
}

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  className = "",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-primary/40">
        {eyebrow}
      </p>
      <GoldRule />
      <h2 className="font-serif text-2xl font-black uppercase text-primary md:text-3xl lg:text-4xl">
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-accent">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-6 max-w-5xl font-sans text-base font-medium leading-relaxed text-primary/60">
          {description}
        </p>
      )}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

// ── Template ─────────────────────────────────────────────────────────────────

export default function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  const [pillarHover, setPillarHover] = useState(-1);
  const [archetypeActive, setArchetypeActive] = useState(0);
  const [processActive, setProcessActive] = useState(0);
  const [corridorHover, setCorridorHover] = useState(-1);
  const [insightHover, setInsightHover] = useState(-1);

  const { hero, valueProp } = content;

  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen bg-[#FAFAFA] relative" data-nav-theme="light">
      {/* Global Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FAFAFA] pb-12 pt-20 md:pb-16 md:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#0A1428 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Badge>{hero.badge}</Badge>
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="font-serif text-3xl font-black uppercase text-[#0A1428] md:text-4xl lg:text-5xl leading-[1.1]"
                >
                  {hero.title}{" "}
                  <span className="text-accent relative inline-block">
                    {hero.titleAccent}
                  </span>
                </motion.h1>
              </div>
              <p className="mt-8 max-w-4xl font-sans text-base font-medium leading-relaxed text-[#0A1428]/60 md:text-lg">
                {hero.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-[0_8px_30px_rgba(212,175,55,0.25)] transition-all hover:bg-accent/90 hover:shadow-[0_12px_40px_rgba(212,175,55,0.35)] active:scale-[0.98]"
                >
                  {hero.primaryCta.label}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="group inline-flex items-center gap-3 rounded-xl border border-primary/15 bg-white px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-primary transition-all hover:border-primary hover:bg-primary hover:text-white shadow-sm"
                >
                  {hero.secondaryCta.label}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(10,20,40,0.14)]">
                <motion.div style={{ y: heroImageY, height: "120%", top: "-10%", position: "absolute", width: "100%" }}>
                  <Image
                    src={hero.mainImage}
                    alt={hero.mainImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 hidden h-44 w-44 overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:block"
              >
                <Image
                  src={hero.accentImage1}
                  alt=""
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-4 -top-4 hidden h-32 w-32 overflow-hidden rounded-2xl border-4 border-white shadow-2xl lg:block"
              >
                <Image
                  src={hero.accentImage2}
                  alt=""
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            className="mt-20 grid gap-10 border-t border-stone-200 pt-12 sm:grid-cols-3"
          >
            {content.stats.map(({ n, suffix, label }) => (
              <div key={label}>
                <p className="font-serif text-4xl font-black text-primary md:text-5xl">
                  <Counter to={n} suffix={suffix} />
                </p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-primary/40">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-1 gap-y-3 px-6 py-5">
          {content.trustItems.map((item, i) => (
            <div key={item} className="flex items-center">
              <span className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary/45 sm:px-6">
                {item}
              </span>
              {i < content.trustItems.length - 1 && (
                <div className="hidden h-3 w-px bg-stone-200 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 h-[500px]">
            {content.galleryImages.map((src, i) => {
              // Create an asymmetrical layout for 4 images
              let gridClass = "col-span-1 row-span-1";
              if (i === 0) gridClass = "col-span-2 row-span-2"; // Large main image
              else if (i === 1) gridClass = "col-span-1 row-span-1 hidden md:block"; // Top right
              else if (i === 2) gridClass = "col-span-1 row-span-1 hidden md:block"; // Bottom right
              else if (i === 3) gridClass = "col-span-2 md:col-span-1 row-span-1 hidden"; // fallback

              return (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 ${gridClass}`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Decorative corner accents on hover */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-16 md:py-20 relative">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="mb-12 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end lg:gap-20">
            <motion.div {...fadeUp}>
              <SectionHeading {...content.pillarsSection} />
            </motion.div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.pillars.map(({ tag, title, body, img }, i) => (
              <motion.article
                key={tag}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                onMouseEnter={() => setPillarHover(i)}
                onMouseLeave={() => setPillarHover(-1)}
                className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 relative ${
                  pillarHover === i
                    ? "border-primary/20 bg-white shadow-[0_16px_48px_rgba(10,20,40,0.08)]"
                    : "border-stone-200 bg-white hover:shadow-lg"
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className={`object-cover transition-transform duration-700 ${
                      pillarHover === i ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-[9px] font-black tracking-[0.25em] text-primary/35">
                      {tag}
                    </span>
                    <div
                      className={`h-px flex-1 transition-colors duration-300 ${
                        pillarHover === i ? "bg-primary/25" : "bg-stone-200"
                      }`}
                    />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-black uppercase tracking-tight text-primary">
                    {title}
                  </h3>
                  <p className="flex-1 text-sm font-medium leading-relaxed text-primary/60">
                    {body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Archetypes */}
      <section className="bg-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mb-12 max-w-5xl">
            <SectionHeading {...content.archetypesSection} />
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2">
            {content.archetypes.map(({ type, tag, desc, img }, i) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                onMouseEnter={() => setArchetypeActive(i)}
                className={`grid overflow-hidden rounded-2xl border transition-all duration-500 sm:grid-cols-[150px_1fr] ${
                  archetypeActive === i
                    ? "border-primary/20 bg-white shadow-[0_12px_48px_rgba(10,20,40,0.08)]"
                    : "border-stone-200 bg-white/70"
                }`}
              >
                <div className="relative min-h-[150px] overflow-hidden sm:min-h-0">
                  <Image
                    src={img}
                    alt={type}
                    fill
                    sizes="150px"
                    className={`object-cover transition-all duration-600 ${
                      archetypeActive === i
                        ? "scale-110 grayscale-0"
                        : "scale-100 grayscale brightness-90"
                    }`}
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="mb-2 text-[9px] font-black uppercase tracking-[0.22em] text-primary/35">
                    {tag}
                  </p>
                  <h3 className="mb-3 font-serif text-2xl font-black uppercase tracking-tight text-primary">
                    {type}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-primary/60">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <motion.div {...fadeUp} className="mb-12">
                <SectionHeading {...content.processSection} />
              </motion.div>
              <div className="flex flex-col gap-2 relative">
                {/* Vertical timeline line */}
                <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-stone-100 hidden sm:block z-0" />
                <motion.div 
                  className="absolute left-6 top-10 w-[2px] bg-primary hidden sm:block z-10 transition-all duration-500 origin-top"
                  style={{ height: `${(processActive / (content.steps.length - 1)) * 100}%` }}
                />

                {content.steps.map(({ n, title, body }, i) => (
                  <motion.button
                    key={n}
                    type="button"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    onMouseEnter={() => setProcessActive(i)}
                    onClick={() => setProcessActive(i)}
                    className={`w-full rounded-2xl p-6 text-left transition-all duration-400 relative z-20 ${
                      processActive === i
                        ? "bg-primary/5 shadow-sm border border-primary/15 translate-x-2"
                        : "bg-transparent hover:bg-stone-50 border border-transparent"
                    }`}
                  >
                    <div className="flex gap-5">
                      <div className="mt-0.5 shrink-0 flex flex-col items-center gap-2">
                        <span className={`text-[10px] font-black tracking-[0.2em] transition-colors duration-300 ${processActive === i ? "text-accent" : "text-stone-400"}`}>
                          {n}
                        </span>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 hidden sm:block ${processActive === i ? "bg-primary scale-150" : "bg-stone-300"}`} />
                      </div>
                      <div>
                        <p className={`mb-1.5 font-serif text-lg font-black uppercase tracking-tight transition-colors duration-300 ${processActive === i ? "text-primary" : "text-primary/60"}`}>
                          {title}
                        </p>
                        <p className={`text-sm font-medium leading-relaxed transition-all duration-300 overflow-hidden ${processActive === i ? "text-primary/70 max-h-40 opacity-100" : "text-primary/40 max-h-0 opacity-0 sm:max-h-40 sm:opacity-100"}`}>
                          {body}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-[0_24px_64px_rgba(0,0,0,0.1)]">
                {content.steps.map(({ img, title }, i) => (
                  <Image
                    key={title}
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover transition-all duration-600 ${
                      processActive === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div className="pointer-events-none absolute inset-0 border border-primary/10" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-gradient-to-t from-white via-white/80 to-transparent px-6 py-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary/45">
                    Step {String(processActive + 1).padStart(2, "0")} /{" "}
                    {String(content.steps.length).padStart(2, "0")}
                  </p>
                  <p className="font-serif text-sm font-medium italic text-primary/70">
                    {content.steps[processActive].title}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corridors */}
      <section className="bg-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end lg:gap-20">
            <motion.div {...fadeUp}>
              <SectionHeading {...content.corridorsSection} />
            </motion.div>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-sans text-base font-medium leading-relaxed text-primary/60 lg:pb-2"
            >
              {content.corridorsSection.description}
            </motion.p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {content.corridors.map(({ city, role, nodes, sector, img }, i) => (
              <motion.article
                key={city}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                onMouseEnter={() => setCorridorHover(i)}
                onMouseLeave={() => setCorridorHover(-1)}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(0,0,0,0.1)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={img}
                    alt={city}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover transition-transform duration-700 ${
                      corridorHover === i ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>
                <div className="p-7">
                  <p className="mb-2 text-[9px] font-black uppercase tracking-[0.28em] text-primary/35">
                    {role}
                  </p>
                  <h3 className="mb-4 font-serif text-3xl font-black uppercase tracking-tight text-primary">
                    {city}
                  </h3>
                  <ul className="mb-4 space-y-1">
                    {nodes.map((node) => (
                      <li key={node} className="text-sm font-medium text-primary/60">
                        · {node}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/45">
                    {sector}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-y border-stone-200 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="mb-6 font-serif text-4xl font-black leading-none text-primary/15 md:text-5xl">
              &ldquo;
            </div>
            <p className="mb-8 font-serif text-xl font-medium italic leading-relaxed text-primary md:text-2xl">
              {content.quote.text}
            </p>
            <div className="mx-auto mb-5 h-px w-10 bg-primary/15" />
            <p className="text-xs font-black uppercase tracking-[0.18em] text-primary/40">
              {content.quote.author}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-stone-200 pb-8 sm:flex-row sm:items-end">
            <motion.div {...fadeUp}>
              <SectionHeading {...content.insightsSection} />
            </motion.div>
            <motion.a
              {...fadeUp}
              href="/blogs"
              className="shrink-0 border-b border-primary/20 pb-1 text-[11px] font-black uppercase tracking-[0.18em] text-primary/50 transition-colors hover:border-primary hover:text-primary"
            >
              View all →
            </motion.a>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {content.insights.map(({ tag, title, date, img }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                onMouseEnter={() => setInsightHover(i)}
                onMouseLeave={() => setInsightHover(-1)}
                className="group cursor-pointer"
              >
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover transition-transform duration-700 ${
                      insightHover === i ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>
                <p className="mb-2 text-[9px] font-black uppercase tracking-[0.22em] text-primary/35">
                  {tag}
                </p>
                <h3 className="mb-4 font-serif text-lg font-black uppercase leading-snug tracking-tight text-primary transition-colors group-hover:text-primary/80">
                  {title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary/40">{date}</span>
                  <ArrowRight
                    size={14}
                    className={`text-primary/30 transition-transform duration-300 group-hover:text-accent ${
                      insightHover === i ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Value prop */}
      <section className="bg-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-[0_24px_64px_rgba(0,0,0,0.1)]">
                <Image
                  src={valueProp.mainImage}
                  alt={valueProp.mainImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden h-52 w-40 overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:block lg:-right-8">
                <Image
                  src={valueProp.accentImage}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading eyebrow={valueProp.eyebrow} title={valueProp.title} />
              <ul className="mt-10 space-y-5">
                {valueProp.offers.map((offer) => (
                  <li key={offer} className="flex items-start gap-4">
                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary/50" />
                    <span className="text-sm font-medium leading-relaxed text-primary/70">
                      {offer}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.08)]"
          >
            <div className="h-1 bg-primary" />
            <div className="p-8 md:p-10">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-primary/40">
                {valueProp.cta.eyebrow}
              </p>
              <h3 className="mb-4 font-serif text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">
                {valueProp.cta.title}
              </h3>
              <p className="mb-8 text-sm font-medium leading-relaxed text-primary/60">
                {valueProp.cta.description}
              </p>
              <Link
                href={valueProp.cta.href}
                className="group mb-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-accent/90 hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]"
              >
                {valueProp.cta.buttonLabel}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-stone-200" />
                <p className="shrink-0 text-[11px] font-medium tracking-[0.15em] text-primary/40">
                  Confidential · By appointment only
                </p>
                <div className="h-px flex-1 bg-stone-200" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CaseStudySection data={content.caseStudy} />
      <CTASection />
      <Footer />
    </main>
  );
}
