"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const milestones = [
  {
    year: "2020",
    title: "Company Inception",
    desc: "Founded with a vision for institutional-grade industrial scale and corporate excellence. Established core leadership with 50+ years of collective experience.",
    id: "WP-ARCH-2020",
    status: "COMPLETE",
    coords: "12.9716° N, 77.5946° E",
    image: "/images/journey/2020_inception.png",
  },
  {
    year: "2021",
    title: "Strategic Aggregation",
    desc: "Successfully executed first major land acquisition in Bangalore. Secured 25+ acres for Grade-A logistics development.",
    id: "WP-ARCH-2021",
    status: "COMPLETE",
    coords: "13.1989° N, 77.7068° E",
    image: "/images/journey/2021_bangalore.png",
  },
  {
    year: "2022",
    title: "Execution Phase",
    desc: "Initiated phase 1 site development. Completed massive earthworks and foundational grading for prime warehouse assets.",
    id: "WP-ARCH-2022",
    status: "COMPLETE",
    coords: "13.2541° N, 77.6231° E",
    image: "/images/journey/2022_execution.png",
  },
  {
    year: "2023",
    title: "Institutional Build",
    desc: "Structural expansion of institutional assets. Erected 500k+ sqft of grade-A steel frameworks for global logistics giants.",
    id: "WP-ARCH-2023",
    status: "COMPLETE",
    coords: "12.8521° N, 77.6654° E",
    image: "/images/journey/2023_build.png",
  },
  {
    year: "2024",
    title: "Warehouse Phase 2",
    desc: "25+ Acre Chennai site shell construction initiated. Implementing state-of-the-art climate control and multi-tenant facilities.",
    bullets: ["Ph 2 Development", "Industrial Logistics Park"],
    id: "WP-ARCH-2024",
    status: "IN-PROGRESS",
    coords: "13.0827° N, 80.2707° E",
    image: "/images/journey/2024_chennai.png",
  },
  {
    year: "2025",
    title: "Project Expansion",
    desc: "Expanding footprint to 40+ acres with tech-enabled smart infrastructure. Targeting 15% increase in operational efficiency.",
    bullets: ["Institutional Build", "Logistics Hub"],
    id: "WP-ARCH-2025",
    status: "TARGET",
    coords: "GLOBAL-HUB-SPEC",
    image: "/images/journey/2025_expansion.png",
  },
  {
    year: "2026",
    title: "Scaled Platform",
    desc: "Targeting 5M+ sqft with 10G+ AUM. Solidifying position as India's lead institutional industrial partner.",
    id: "WP-ARCH-2026",
    status: "VISION",
    coords: "ELITE-PAN-INDIA",
    image: "/images/journey/2026_vision.png",
  },
];

export default function JourneySection() {
  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden border-t border-b border-gray-100">
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 0.5px, transparent 0.5px), linear-gradient(90deg, #D4AF37 0.5px, transparent 0.5px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-start mb-20 md:mb-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 mb-6"
          >
            <div className="h-[2px] w-12 bg-[#D4AF37]" />
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">
              Historic Evolution
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black text-primary  uppercase "
          >
            Our Strategic 
            <span className="text-[#D4AF37]">Roadmap</span>
          </motion.h2>
        </div>

        {/* ── MOBILE: vertical timeline ── */}
        <div className="flex flex-col md:hidden relative pl-10">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#D4AF37]/30" />
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.7 }}
              className="relative mb-10 group"
            >
              {/* node dot */}
              <div className="absolute -left-[26px] top-5 w-4 h-4 rounded-full bg-white border-2 border-[#D4AF37] z-10" />
              <MilestoneCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* ── DESKTOP: zig-zag ── */}
        <div className="hidden md:block">
          {/*
            Layout structure per column:
              TOP item  → [card] [stem] [year-circle(on spine)] [gap-equal-to-bottom-stem+bottom-card]
              BOTTOM item → [gap-equal-to-top-card+top-stem] [year-circle(on spine)] [stem] [card]

            We use a fixed card height and fixed stem height so the year circles
            all align perfectly on the same horizontal centre line (the spine).
          */}

          {/* Wrapper that positions the spine exactly in the middle */}
          <div className="relative" style={{ "--card-h": "340px", "--stem-h": "40px" } as React.CSSProperties}>

            {/* Horizontal spine — positioned at: card-h + stem-h from top */}
            <div
              className="absolute left-0 right-0 z-0 h-[2px] bg-gray-100"
              style={{ top: "calc(var(--card-h) + var(--stem-h))" }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 2.8, ease: "easeInOut" }}
                style={{ transformOrigin: "left center" }}
                className="absolute inset-0 bg-[#D4AF37]"
              />
            </div>

            {/* Grid */}
            <div className="grid gap-x-3" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
              {milestones.map((item, idx) => {
                const isTop = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: isTop ? -28 : 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.09, duration: 0.75, ease: "easeOut" }}
                    className="flex flex-col group"
                    /* 
                      Top item: card → stem → circle → spacer(stem+card)
                      Bottom item: spacer(card+stem) → circle → stem → card
                    */
                    style={
                      isTop
                        ? {}
                        : { paddingTop: "calc(var(--card-h) + var(--stem-h) + var(--stem-h))" }
                    }
                  >
                    {isTop ? (
                      <>
                        {/* card */}
                        <DesktopCard item={item} />

                        {/* stem down to spine */}
                        <div className="mx-auto w-[1px] bg-[#D4AF37]/50" style={{ height: "var(--stem-h)" }} />

                        {/* year circle ON the spine */}
                        <YearCircle year={item.year} />
                      </>
                    ) : (
                      <>
                        {/* year circle ON the spine */}
                        <YearCircle year={item.year} />

                        {/* stem down from spine */}
                        <div className="mx-auto w-[1px] bg-[#D4AF37]/50" style={{ height: "var(--stem-h)" }} />

                        {/* card */}
                        <DesktopCard item={item} />
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/** Year circle that sits directly on the horizontal spine */
function YearCircle({ year }: { year: string }) {
  return (
    <div
      className="mx-auto flex items-center justify-center rounded-full bg-white border-2 border-[#D4AF37] z-20 relative"
      style={{
        width: "52px",
        height: "52px",
        /* Offset by half its own height so it straddles the spine */
        marginTop: "-26px",
        marginBottom: "-26px",
        boxShadow: "0 0 0 5px white",
      }}
    >
      <span className="text-[11px] font-black text-[#D4AF37] tracking-tight select-none">
        {year}
      </span>
    </div>
  );
}

/** Card used in the desktop zig-zag */
function DesktopCard({ item }: { item: (typeof milestones)[0] }) {
  return (
    <div
      className="w-full bg-white border border-gray-100 flex flex-col group-hover:border-[#D4AF37]/20 transition-all duration-700 group-hover:bg-gray-50/50"
      style={{ height: "var(--card-h)", overflow: "hidden" }}
    >
      {/* meta row */}
      <div className="flex items-start justify-between px-4 pt-4 pb-3 border-b border-gray-50 shrink-0">
        <div className="flex flex-col gap-0.5 min-w-0 mr-1">
          <span className="text-[13px] font-bold text-[rgba(10,20,40,0.3)] tracking-widest truncate">{item.id}</span>
          <span className="text-[11px] font-medium text-[#D4AF37] tracking-tighter uppercase truncate">{item.coords}</span>
        </div>
        <span className="shrink-0 text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 bg-[#D4AF37]/5 text-[#D4AF37] border border-[#D4AF37]/10">
          {item.status}
        </span>
      </div>

      {/* image */}
      <div className="relative w-full shrink-0 overflow-hidden bg-gray-50 grayscale group-hover:grayscale-0 transition-all duration-1000" style={{ height: "110px" }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="14vw"
          className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
        />
      </div>

      {/* body */}
      <div className="p-4 flex flex-col flex-1 overflow-hidden">
        <div className="text-3xl font-serif font-black text-[rgba(10,20,40,0.05)] group-hover:text-[#D4AF37]/80 select-none leading-none transition-all duration-700 mb-1">
          {item.year.slice(2)}
        </div>

        <h4 className="text-xs xl:text-[13px] font-serif font-black text-primary uppercase tracking-tight leading-tight mb-2 group-hover:text-[#D4AF37] transition-colors duration-500">
          {item.title}
        </h4>

        <p className="text-[11px]  font-medium leading-relaxed text-[rgba(10,20,40,0.4)] tracking-tight line-clamp-4">
          {item.desc}
        </p>

        {item.bullets && (
          <div className="mt-auto pt-2 space-y-1">
            {item.bullets.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-[1px] bg-[#D4AF37]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-[rgba(10,20,40,0.2)]">{b}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Card used in the mobile stacked layout */
function MilestoneCard({ item }: { item: (typeof milestones)[0] }) {
  return (
    <div className="group bg-white border border-gray-100 p-6 flex flex-col hover:bg-gray-50/50 transition-all duration-500">
      <div className="flex items-start justify-between mb-5 pb-4 border-b border-gray-50">
        <div className="flex flex-col gap-1 min-w-0 mr-2">
          <span className="text-[11px] font-bold text-[rgba(10,20,40,0.3)] tracking-widest">{item.id}</span>
          <span className="text-[10px] font-medium text-[#D4AF37] tracking-tighter uppercase">{item.coords}</span>
        </div>
        <span className="shrink-0 text-[11px] font-black uppercase tracking-widest px-2 py-1 bg-[#D4AF37]/5 text-[#D4AF37] border border-[#D4AF37]/10">
          {item.status}
        </span>
      </div>

      <div className="relative aspect-video mb-5 overflow-hidden bg-gray-50 grayscale group-hover:grayscale-0 transition-all duration-700">
        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
      </div>

      <div className="text-5xl font-serif font-black text-[rgba(10,20,40,0.05)] select-none leading-none mb-1">{item.year.slice(2)}</div>
      <h4 className="text-base font-serif font-black text-primary uppercase tracking-tighter leading-tight mb-2 group-hover:text-[#D4AF37] transition-colors">
        {item.title}
      </h4>
      <p className="text-[13px] font-medium leading-relaxed text-[rgba(10,20,40,0.4)] tracking-tight">{item.desc}</p>

      {item.bullets && (
        <div className="mt-4 pt-4 border-t border-gray-50 space-y-1.5">
          {item.bullets.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-[1px] bg-[#D4AF37]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-[rgba(10,20,40,0.2)]">{b}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}