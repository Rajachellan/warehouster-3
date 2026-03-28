"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ── Data ─────────────────────────────────────────────── */
const services = [
  {
    title: "Project Positioning",
    desc: "Strategic market positioning for maximum occupier appeal and rental yield.",
  },
  {
    title: "Master-planning Guidance",
    desc: "Optimal layout, zoning, and infrastructure planning for institutional standards.",
  },
  {
    title: "Tenant Mapping",
    desc: "Identifying and pre-qualifying institutional-grade occupiers across sectors.",
  },
  {
    title: "Rental Benchmarking",
    desc: "Data-driven rental analysis and competitive pricing strategy.",
    // featured: true,
  },
  {
    title: "Vendor Coordination",
    desc: "End-to-end coordination with contractors, architects, and consultants.",
  },
  {
    title: "Phasing Strategy",
    desc: "Milestone-linked development phasing for optimized capital deployment.",
  },
  {
    title: "Stakeholder Advisory",
    desc: "Regular reporting and strategic advisory for all stakeholders.",
  },
  {
    title: "Financing Support",
    desc: "Structuring support and investor connect for project financing.",
  },
];

/* ── Icons ────────────────────────────────────────────── */
const icons = [
  /* Project Positioning */
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px] transition-transform duration-300 group-hover/card:scale-110">
    <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>,
  /* Master-planning */
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px] transition-transform duration-300 group-hover/card:scale-110">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>,
  /* Tenant Mapping */
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px] transition-transform duration-300 group-hover/card:scale-110">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  /* Rental Benchmarking */
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px] transition-transform duration-300 group-hover/card:scale-110">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>,
  /* Vendor Coordination */
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px] transition-transform duration-300 group-hover/card:scale-110">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  /* Phasing Strategy */
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px] transition-transform duration-300 group-hover/card:scale-110">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
  /* Stakeholder Advisory */
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px] transition-transform duration-300 group-hover/card:scale-110">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  /* Financing Support */
  <svg key="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[18px] h-[18px] transition-transform duration-300 group-hover/card:scale-110">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>,
];

/* ── Card ─────────────────────────────────────────────── */
function ServiceCard({
  title,
  desc,
  featured = false,
  icon,
  index,
}: {
  title: string;
  desc: string;
  featured?: boolean;
  icon: React.ReactNode;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "group/card relative flex flex-col rounded-[20px] p-[22px] cursor-pointer overflow-hidden",
        "transition-all duration-350 border-[1.5px]",
        featured
          ? "bg-primary border-primary shadow-lg"
          : hovered
          ? "bg-white border-accent shadow-[0_8px_32px_rgba(212,175,55,0.12)] -translate-y-1"
          : "bg-white border-primary/20",
      ].join(" ")}
    >
      {/* Radial glow on hover */}
      <div
        className={[
          "absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-400",
          "bg-[radial-gradient(ellipse_at_110%_110%,rgba(212,175,55,0.1),transparent_65%)]",
          hovered && !featured ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      {/* Featured bottom bar */}
      {featured && (
        <span className="absolute bottom-0 left-6 right-6 h-px bg-accent/25 rounded-full" />
      )}

      {/* Top row: icon + index */}
      <div className="relative z-10 flex items-start justify-between mb-[18px]">
        {/* Icon */}
        <div
          className={[
            "w-[42px] h-[42px] rounded-[12px] flex items-center justify-center border-[1.5px]",
            "transition-all duration-350",
            featured
              ? "bg-accent border-accent text-primary"
              : hovered
              ? "bg-accent border-accent text-primary"
              : "bg-primary/5 border-primary/18 text-primary",
          ].join(" ")}
        >
          {icon}
        </div>

        {/* Index number */}
        <span
          className={[
            "text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300",
            featured ? "text-accent/30" : hovered ? "text-accent/40" : "text-primary/18",
          ].join(" ")}
        >
          0{index + 1}
        </span>
      </div>

      {/* Title */}
      <h3
        className={[
          "font-serif font-black text-[1.05rem] leading-snug mb-[10px] transition-colors duration-300",
          featured
            ? "text-accent italic"
            : hovered
            ? "text-accent"
            : "text-primary",
        ].join(" ")}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={[
          "text-[11.5px] leading-[1.65] flex-1 mb-[14px] transition-colors duration-300",
          featured ? "text-white/45" : "text-primary/50",
        ].join(" ")}
      >
        {desc}
      </p>

      {/* CTA */}
      <div
        className={[
          "inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.2em]",
          "transition-all duration-300",
          featured ? "text-accent" : hovered ? "text-accent gap-[6px]" : "text-primary/20",
        ].join(" ")}
      >
        Learn More
        <svg
          className={[
            "w-3 h-3 transition-transform duration-300",
            hovered ? "translate-x-1" : "",
          ].join(" ")}
          fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="h-px w-6 bg-accent opacity-60" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-accent">
                Services
              </span>
              <span className="h-px w-6 bg-accent opacity-60" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight uppercase tracking-tighter"
            >
              Integrated Scope <br />
              <span className="text-accent italic uppercase normal-case">of Services</span>
            </motion.h2>
          </div>

          <motion.a
            href="/services"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-primary hover:text-accent transition-all pb-2 border-b-2 border-primary hover:border-accent self-start md:self-end"
          >
            Explore All Services
            <svg
              className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              desc={s.desc}
              featured={s.featured}
              icon={icons[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}