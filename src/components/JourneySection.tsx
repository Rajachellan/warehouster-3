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
    image: "/images/journey/2020_inception.png"
  },
  {
    year: "2021",
    title: "Strategic Aggregation",
    desc: "Successfully executed first major land acquisition in Bangalore. Secured 25+ acres for Grade-A logistics development.",
    id: "WP-ARCH-2021",
    status: "COMPLETE",
    coords: "13.1989° N, 77.7068° E",
    image: "/images/journey/2021_bangalore.png"
  },
  {
    year: "2022",
    title: "Execution Phase",
    desc: "Initiated phase 1 site development. Completed massive earthworks and foundational grading for prime warehouse assets.",
    id: "WP-ARCH-2022",
    status: "COMPLETE",
    coords: "13.2541° N, 77.6231° E",
    image: "/images/journey/2022_execution.png"
  },
  {
    year: "2023",
    title: "Institutional Build",
    desc: "Structural expansion of institutional assets. Erected 500k+ sqft of grade-A steel frameworks for global logistics giants.",
    id: "WP-ARCH-2023",
    status: "COMPLETE",
    coords: "12.8521° N, 77.6654° E",
    image: "/images/journey/2023_build.png"
  },
  {
    year: "2024",
    title: "Warehouse Phase 2",
    desc: "25+ Acre Chennai site shell construction initiated. Implementing state-of-the-art climate control and multi-tenant facilities.",
    bullets: ["Ph 2 Development", "Industrial Logistics Park"],
    id: "WP-ARCH-2024",
    status: "IN-PROGRESS",
    coords: "13.0827° N, 80.2707° E",
    image: "/images/journey/2024_chennai.png"
  },
  {
    year: "2025",
    title: "Project Expansion",
    desc: "Expanding footprint to 40+ acres with tech-enabled smart infrastructure. Targeting 15% increase in operational efficiency.",
    bullets: ["Institutional Build", "Logistics Hub"],
    id: "WP-ARCH-2025",
    status: "TARGET",
    coords: "GLOBAL-HUB-SPEC",
    image: "/images/journey/2025_expansion.png"
  },
  {
    year: "2026",
    title: "Scaled Platform",
    desc: "Targeting 5M+ sqft with 10G+ AUM. Solidifying position as India's lead institutional industrial partner.",
    id: "WP-ARCH-2026",
    status: "VISION",
    coords: "ELITE-PAN-INDIA",
    image: "/images/journey/2026_vision.png"
  }
];

export default function JourneySection() {
  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden border-t border-b border-gray-100">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#D4AF37 0.5px, transparent 0.5px), linear-gradient(90deg, #D4AF37 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">

        {/* Elite Header */}
        <div className="flex flex-col items-start mb-20 md:mb-32 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 mb-6"
          >
            <div className="h-[2px] w-12 bg-[#D4AF37]" />
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#D4AF37]">
              Historic Evolution
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black text-primary leading-[0.9] uppercase tracking-tighter"
          >
            Our Strategic <br />
            <span className="text-[#D4AF37]">Roadmap</span>
          </motion.h2>
        </div>

        {/* Roadmap Display */}
        <div className="relative mt-12 md:mt-20">

          {/* Closed Architectural Box System */}
          <div className="absolute top-[180px] left-0 w-full h-[1px] bg-gray-200 hidden md:block" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 hidden md:block" />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute top-[180px] left-0 h-[3px] bg-[#D4AF37] hidden md:block z-30"
          />

          <div className="grid grid-cols-1 md:grid-cols-7 gap-0 relative border-l border-r border-gray-100 md:border-none">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.8 }}
                className="group relative border-b border-gray-100 md:border-none"
              >
                {/* Year Marker Pillar */}
                <div className="md:h-[180px] flex flex-row md:flex-col items-center md:justify-start relative p-6 md:p-0">
                  <div className="text-3xl md:text-5xl lg:text-7xl font-serif font-black text-primary/5 group-hover:text-[#D4AF37]/10 transition-all duration-1000 select-none">
                    {item.year.slice(2)}
                  </div>
                  <div className="text-[10px] md:text-[11px] font-black text-[#D4AF37] tracking-[0.4em] ml-4 md:ml-0 md:mt-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.year}
                  </div>

                  {/* Node Circle */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#D4AF37] z-40 hidden md:block" />
                </div>

                {/* Closed Card Container */}
                <div className="bg-white md:border-l border-gray-100 p-6 md:p-10 transition-all duration-700 min-h-[400px] md:min-h-[550px] flex flex-col group hover:bg-gray-50/50">

                  {/* Header Detail */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-bold text-primary/30 tracking-widest">{item.id}</span>
                      <span className="text-[8px] font-medium text-[#D4AF37] tracking-tighter uppercase">{item.coords}</span>
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-[#D4AF37]/5 text-[#D4AF37] border border-[#D4AF37]/10">
                      {item.status}
                    </span>
                  </div>

                  {/* Milestone Image */}
                  <div className="relative aspect-video mb-8 overflow-hidden rounded-sm bg-gray-50 grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 15vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    />
                  </div>

                  <h4 className="text-lg md:text-xl font-serif font-black text-primary uppercase tracking-tighter leading-tight mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-[12px] font-medium leading-relaxed text-primary/40 tracking-tight mb-8">
                    {item.desc}
                  </p>

                  {/* Technical Spec */}
                  {item.bullets && (
                    <div className="mt-auto pt-6 border-t border-gray-50 space-y-2">
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-3">
                          <div className="w-1.5 h-[1px] bg-[#D4AF37]" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-primary/20">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

