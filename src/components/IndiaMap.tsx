"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import map from "../assets/elite_map_v6.png";
import chennai from "../assets/chennai.jpg";
import hosurImg from "../assets/houser.jpg";

// ─── BRAND COLORS ─────────────────────────────────────────────────────────────
const PRIMARY = "#0A1428";
const ACCENT  = "#F59E0B";

// ─── DATA ───────────────────────────────────────────────────────────────────
const locations = [
  {
    id: "redhills",
    name: "Redhills (Exp.)",
    corridor: "Chennai North",
    acres: 55,
    sqft: "1.1 Mn",
    status: "Expansion",
    x: 75.5, 
    y: 33.7,
    description: "Primary industrial gateway in Chennai North, currently undergoing strategic expansion to meet rising demand for 1.1 million square feet of premium space.",
    image: chennai,
  },
  {
    id: "mappedu",
    name: "Mappedu",
    corridor: "South Chennai",
    acres: 48,
    sqft: "1.0 Mn",
    status: "Identified",
    x: 71.0,
    y: 41.5,
    description: "A newly identified high-potential node in South Chennai, offering 48 acres for specialized logistics and manufacturing facilities.",
    image: chennai,
  },
  {
    id: "sriperumbudur",
    name: "Sriperumbudur",
    corridor: "South Chennai",
    acres: 58,
    sqft: "1.2 Mn",
    status: "Strategic",
    x: 67.5,
    y: 45.1,
    description: "A flagship strategic location in South Chennai, anchoring the industrial belt with 1.2 million square feet of high-grade infrastructure.",
    image: chennai,
  },
  {
    id: "hosur",
    name: "Hosur / Moodoligi",
    corridor: "Chennai-Hosur BLR",
    acres: 50,
    sqft: "1.1 Mn",
    status: "Identified",
    x: 58.0,
    y: 53.0,
    description: "Expanding the corridor towards Bangalore, this 50-acre identified site provides crucial connectivity for cross-border industrial operations.",
    image: hosurImg,
  },
  {
    id: "krishnagiri",
    name: "Krishnagiri",
    corridor: "Chennai-Hosur BLR",
    acres: 120,
    sqft: "2.7 Mn",
    status: "Identified",
    x: 44.5,
    y: 64.2,
    description: "A massive 120-acre hub in the Chennai-Hosur-Bangalore corridor, designed to support 2.7 million square feet of large-scale logistics and assembly.",
    image: hosurImg,
  },
];

export default function IndiaMap() {
  const [selectedId, setSelectedId] = useState(locations[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeLoc = locations.find((l) => l.id === (hoveredId || selectedId)) || locations[0];
  const selected = locations.find((l) => l.id === selectedId) || locations[0];

  return (
    <section 
      suppressHydrationWarning
      className="py-20 relative overflow-hidden" 
      style={{ backgroundColor: "#F8F7F4" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/20 text-accent bg-accent/5 mb-6 text-xs font-bold uppercase tracking-widest">
              Scalable Pipeline
            </div>
            <h2
              className="text-5xl md:text-6xl font-serif font-black leading-[0.93] uppercase tracking-tighter"
              style={{ color: PRIMARY }}
            >
              Corridor <span className="text-accent">Pipeline</span>
              <br />Architecture
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed md:text-right" style={{ color: `${PRIMARY}50` }}>
            330+ Acres of strategic industrial growth across South India's premium logistics corridors.
          </p>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: THE MAP */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col">
            <div
              className="relative flex flex-col flex-1 rounded-[2.5rem] overflow-hidden border bg-white shadow-2xl"
              style={{ borderColor: "rgba(10,20,40,0.05)" }}
            >
              <div className="flex items-center justify-between px-7 pt-6 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse bg-accent" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/40">
                    Industrial Corridor View
                  </span>
                </div>
              </div>

              <div
                className="relative mx-6 mb-6 rounded-[2.5rem] overflow-hidden flex-1 group ring-1 ring-black/5 shadow-inner"
                style={{ minHeight: "520px", background: "#050B18" }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div 
                    className="relative w-full h-full"
                    animate={{
                      scale: hoveredId ? 1.4 : 1,
                      x: hoveredId ? `${(50 - activeLoc.x) * 0.4}%` : "0%",
                      y: hoveredId ? `${(50 - activeLoc.y) * 0.4}%` : "0%",
                    }}
                    transition={{ type: "spring", damping: 25, stiffness: 100 }}
                  >
                    <Image
                      src={map}
                      alt="Industrial Map"
                      fill
                      sizes="(max-width: 1280px) 100vw, 60vw"
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  </motion.div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="absolute inset-0 z-20">
                  {locations.map((loc) => (
                    <div
                      key={loc.id}
                      className={`absolute cursor-pointer transition-all duration-300 group/marker ${
                        hoveredId && hoveredId !== loc.id ? "opacity-40 scale-90" : "opacity-100 scale-100"
                      }`}
                      style={{
                        left: `${loc.x}%`,
                        top: `${loc.y}%`,
                        width: "48px",
                        height: "48px",
                        transform: "translate(-50%, -50%)",
                        zIndex: hoveredId === loc.id ? 100 : selectedId === loc.id ? 80 : 20 + Math.round(loc.y),
                      }}
                      onMouseEnter={() => setHoveredId(loc.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => setSelectedId(loc.id)}
                    >
                      {/* Pulse Effect - Inside Hitbox */}
                      <div 
                        className={`absolute inset-0 rounded-full animate-ping opacity-40 pointer-events-none ${
                          selectedId === loc.id ? "bg-accent" : "bg-accent/20"
                        }`}
                        style={{ animationDuration: "3s" }}
                      />
                      
                      {/* Core Dot & Label Container */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className={`relative flex flex-col items-center transition-transform duration-500 ${
                          hoveredId === loc.id || selectedId === loc.id ? "scale-125" : "scale-100"
                        }`}>
                          {/* The Visual Circle */}
                          <div
                            className={`w-4 h-4 rounded-full border-2 transition-all duration-500 shadow-[0_0_20px_rgba(245,158,11,0.6)] ${
                              selectedId === loc.id ? "bg-accent border-white" : "bg-[#0A1428] border-accent"
                            }`}
                          />
                          
                          {/* The Label - Shifted down and made non-blocking */}
                          <div className="absolute top-full mt-2 text-center whitespace-nowrap">
                            <span 
                              className={`inline-block text-[9px] font-black tracking-widest px-2 py-0.5 rounded transition-all duration-500 shadow-xl ${
                                selectedId === loc.id ? "bg-accent text-white" : "text-accent/60 bg-black/60 backdrop-blur-md"
                              }`}
                            >
                              {loc.name.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="flex items-center gap-5 flex-wrap px-7 py-4 border-t border-black/5 bg-gray-50/50">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedId(loc.id)}
                    className="flex items-center gap-2 group"
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedId === loc.id ? "bg-accent scale-150" : "bg-primary/20 group-hover:bg-primary/40"}`}
                    />
                    <span
                      className="text-[9px] font-black uppercase tracking-widest transition-colors"
                      style={{ color: selectedId === loc.id ? PRIMARY : "rgba(10,20,40,0.4)" }}
                    >
                      {loc.name}
                    </span>
                  </button>
                ))}
              </div> */}
            </div>
          </div>

          {/* RIGHT COLUMN: INFO PANEL */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col flex-1 overflow-hidden rounded-[2.5rem] shadow-2xl border bg-primary"
                style={{
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                <div className="relative h-56 flex-shrink-0 overflow-hidden group">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    sizes="(max-width: 1280px) 100vw, 40vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
                  <div className="absolute top-5 left-5 px-3 py-1.5 rounded-lg bg-accent text-[9px] font-black uppercase tracking-widest text-white flex items-center gap-2 z-10">
                    <Globe size={10} /> {selected.corridor}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-8 gap-6 text-white justify-between">
                  <div>
                    <h3 className="text-3xl font-serif font-black uppercase text-accent mb-3 tracking-tighter">
                      {selected.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">{selected.description}</p>
                  </div>
                  
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-[10px] uppercase font-bold text-white/40">Total Area</span>
                      <span className="text-sm font-black italic">{selected.acres} Acres</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-[10px] uppercase font-bold text-white/40">Development</span>
                      <span className="text-sm font-black text-accent">{selected.sqft} sq.ft</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-accent text-primary font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-primary transition-all active:scale-[0.98]"
                  >
                    Strategic Inquiry <ExternalLink size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM NAV */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {locations.map((loc, i) => (
            <button
              key={loc.id}
              onClick={() => setSelectedId(loc.id)}
              className={`px-6 py-3 rounded-2xl border transition-all font-black uppercase text-[10px] tracking-widest ${
                selectedId === loc.id ? "bg-accent border-transparent text-white shadow-xl shadow-accent/20" : "bg-white border-black/5 text-primary/40 hover:bg-gray-50"
              }`}
            >
              {loc.name} <span className="opacity-30 ml-2">/ {String(i + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}