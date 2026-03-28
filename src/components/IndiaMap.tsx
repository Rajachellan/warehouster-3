"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, ExternalLink, Info, Globe, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import map from "../assets/india_map.jpeg";
import chennai from "../assets/chennai.jpg";
import bengaluru from "../assets/bangalore.jpg";
import hosur from "../assets/houser.jpg";
import madurai from "../assets/madurai.jpg";
// ─── BRAND COLORS ─────────────────────────────────────────────────────────────
const PRIMARY = "#0A1428";
const ACCENT  = "#F59E0B";

// ─── MARKER COORDINATES ───────────────────────────────────────────────────────
//
// Strategy: render the map with a FIXED aspect ratio box (no letterboxing).
// The image is cropped via object-cover on a fixed-ratio container so every
// run produces exactly the same layout. Markers are % of that container.
//
// The india_map.jpeg is 1374 × 780 px.
// We show it in a 4:3 container (width=100%, height=auto via aspect-[4/3]).
// object-cover will crop the image symmetrically left/right since the image
// is wider (16:9-ish) than 4:3 → it clips ~12% from each horizontal side.
//
// Effective visible pixel range in the raw image with object-cover in 4:3:
//   Container aspect: 4/3 = 1.333
//   Image aspect:    1374/780 = 1.762
//   Scale factor = container_h / image_h  (height is the constraint)
//   Horizontal clip: (image_w_scaled - container_w) / 2
//     image_w_scaled = container_w * (1.762/1.333) = container_w * 1.321
//     clip each side = 0.321/2 = 16.1% of container_w
//   So visible x in raw image: 16.1% … 83.9%  (67.8% wide strip centered)
//   Visible y in raw image:     0%   … 100%
//
// Geographic bounding of India in raw image (measured):
//   x: 21.1% (Gujarat west) → 61.1% (Arunachal east, mainland right edge ~55%)
//   y:  4.5% (Kashmir top)  → 89.1% (Kanyakumari bottom)
//
// City geographic coords → raw image %:
//   Raw image x% = 21.1 + (lon - 68.7)/(97.4-68.7) * (61.1-21.1)
//   Raw image y% =  4.5 + (37.1 - lat)/(37.1- 8.0) * (89.1- 4.5)
//
// Then convert raw image % to VISIBLE container %:
//   visible_x% = (raw_x% - 16.1%) / 67.8%   × 100
//   visible_y% = raw_y%                        (no vertical clip)
//
// Chennai   (80.28°E, 13.08°N):
//   raw_x = 21.1 + (80.28-68.7)/28.7 * 40 = 21.1 + 16.1 = 37.2%
//   raw_y =  4.5 + (37.1-13.08)/29.1 * 84.6 = 4.5 + 69.8 = 74.3%
//   vis_x = (37.2-16.1)/67.8 * 100 = 31.1%
//   vis_y = 74.3%
//
// Bengaluru (77.59°E, 12.97°N):
//   raw_x = 21.1 + (77.59-68.7)/28.7 * 40 = 21.1 + 12.4 = 33.5%
//   raw_y =  4.5 + (37.1-12.97)/29.1 * 84.6 = 4.5 + 70.1 = 74.6%
//   vis_x = (33.5-16.1)/67.8 * 100 = 25.7%
//   vis_y = 74.6%
//
// Hosur     (77.82°E, 12.73°N):
//   raw_x = 21.1 + (77.82-68.7)/28.7 * 40 = 21.1 + 12.7 = 33.8%
//   raw_y =  4.5 + (37.1-12.73)/29.1 * 84.6 = 4.5 + 70.8 = 75.3%
//   vis_x = (33.8-16.1)/67.8 * 100 = 26.1%
//   vis_y = 75.3%
//
// Madurai   (78.12°E,  9.92°N):
//   raw_x = 21.1 + (78.12-68.7)/28.7 * 40 = 21.1 + 13.1 = 34.2%
//   raw_y =  4.5 + (37.1- 9.92)/29.1 * 84.6 = 4.5 + 78.8 = 83.3%
//   vis_x = (34.2-16.1)/67.8 * 100 = 26.7%
//   vis_y = 83.3%
//
// ─────────────────────────────────────────────────────────────────────────────

const locations = [
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    x: 46.1,
    y: 80.3,
    description:
      "Key presence in Southern India, supporting the manufacturing and automotive corridors of Tamil Nadu with world-class logistics infrastructure.",
    image:chennai,
    facilities: ["Redhills Logistics Park", "Chengalpet Hub", "Ponneri Operations"],
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    x: 40.7,
    y: 78.6,
    description:
      "The technological and industrial backbone of the South, with high-performance warehousing for electronics and 3PL operations.",
    image:bengaluru,
    facilities: ["Peenya Industrial Area", "Hosur Road Corridor", "Dabaspete Hub"],
  },
  {
    id: "hosur",
    name: "Hosur",
    state: "Tamil Nadu",
    x: 40,
    y: 80,
    description:
      "A rapidly growing industrial town on the Karnataka–Tamil Nadu border, anchoring EV and electronics manufacturing logistics corridors.",
    image:hosur,
    facilities: ["SIPCOT Industrial Complex", "Hosur–Krishnagiri Corridor", "EV Logistics Hub"],
  },
  {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    x: 41.7,
    y: 88.,
    description:
      "A strategic southern hub enabling last-mile connectivity across tier-2 and tier-3 regions of Tamil Nadu and beyond.",
    image:madurai,
    facilities: ["Madurai Logistics Park", "Parandur Corridor", "SIDCO Industrial Estate"],
  },
];

const connections: [string, string][] = [
  ["bengaluru", "hosur"],
  ["hosur", "chennai"],
  ["bengaluru", "madurai"],
  ["hosur", "madurai"],
];

export default function IndiaMap() {
  const [selectedId, setSelectedId] = useState(locations[0].id); // Chennai default
  const [hovered,    setHovered]   = useState<string | null>(null);

  const selected = locations.find((l) => l.id === selectedId) || locations[0];
  const getLoc   = (id: string) => locations.find((l) => l.id === id)!;

  return (
    <section className="py-20 relative overflow-hidden" >
      {/* Dot-grid texture */}
      

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="pill-tag border-accent/20 text-accent bg-accent/5 mb-8">
             Regional Presence
            </div>
            <h2
              className="text-5xl md:text-6xl font-serif font-black leading-[0.93] uppercase tracking-tighter"
              style={{ color: PRIMARY }}
            >
              Strategic{" "}
              <em className="not-italic text-accent"  >Network</em>
              <br />Architecture
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed md:text-right" style={{ color: `${PRIMARY}50` }}>
            Four precision-located hubs powering South India's most connected logistics corridor.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-12 gap-6" style={{ alignItems: "stretch" }}>

          {/* ── LEFT MAP PANEL ── */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              className="relative flex flex-col flex-1 rounded-[2.5rem] overflow-hidden border"
              style={{
                background: "#fff",
                borderColor: `${PRIMARY}0D`,
                boxShadow: "0 20px 60px rgba(10,20,40,0.07)",
              }}
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-7 pt-6 pb-4 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse bg-accent"  />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: `${PRIMARY}40` }}>
                    South India Network
                  </span>
                </div>
                <div className="flex gap-1.5 items-center">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedId(loc.id)}
                      title={loc.name}
                      className="h-1.5 rounded-full transition-all duration-500"
                      style={{
                        width: selectedId === loc.id ? "2rem" : "0.45rem",
                        backgroundColor: selectedId === loc.id ? "#F59E0B" : `${PRIMARY}20`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* ── MAP CONTAINER ── */}
              {/*
                FIXED ASPECT RATIO = 4/3 so object-cover clips predictably.
                overflow:hidden cuts the Andaman island dots on the right.
                The image is clipped ~16% from each horizontal side, which
                removes the blank ocean margins and centres the India landmass.
              */}
              <div
                className="relative mx-6 mb-6 rounded-2xl overflow-hidden flex-1"
                style={{
                  // Let the div grow but cap aspect so map doesn't go too tall
                  minHeight: "420px",
                  background: "#F8F7F4",
                }}
              >
                {/* Fixed-ratio inner to keep marker % math correct */}
                <div className="relative w-full" style={{ paddingTop: "75%" /* 4:3 */ }}>
                  <div className="absolute inset-0">
                    {/* Map image — object-cover + 4:3 = predictable clip */}
                    <Image
                      src={map}
                      alt="India Map"
                      fill
                      className="object-cover object-center"
                      priority
                      unoptimized
                    />

                    {/* South India golden glow */}
                    {/* <div
                      className="absolute pointer-events-none z-10 transition-all duration-700"
                      style={{
                        left: "20%",
                        top: "66%",
                        width: "18%",
                        height: "20%",
                        background: `radial-gradient(ellipse, var(--accent) 40%, transparent 70%)`,
                        filter: "blur(16px)",
                      }}
                    /> */}

                    {/* SVG: connection lines */}
                    <svg
                      className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                          <feGaussianBlur stdDeviation="2.5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      {connections.map(([fromId, toId]) => {
                        const from   = getLoc(fromId);
                        const to     = getLoc(toId);
                        const active = selectedId === fromId || selectedId === toId;
                        return (
                          <line
                            key={`${fromId}-${toId}`}
                            x1={`${from.x}%`} y1={`${from.y}%`}
                            x2={`${to.x}%`}   y2={`${to.y}%`}
                            className={active ? "stroke-accent" : ""}
                            stroke={active ? "currentColor" : `${PRIMARY}18`}
                            strokeWidth={active ? "1.6" : "0.8"}
                            strokeDasharray={active ? "none" : "4 3"}
                            strokeLinecap="round"
                            filter={active ? "url(#glow)" : "none"}
                            style={{ transition: "all 0.5s ease" }}
                          />
                        );
                      })}
                    </svg>

                    {/* Marker buttons */}
                    {locations.map((loc) => {
                      const isSel = selectedId === loc.id;
                      const isHov = hovered  === loc.id;
                      return (
                        <motion.button
                          key={loc.id}
                          onClick={() => setSelectedId(loc.id)}
                          onMouseEnter={() => setHovered(loc.id)}
                          onMouseLeave={() => setHovered(null)}
                          className="absolute z-30"
                          style={{
                            left: `${loc.x}%`,
                            top:  `${loc.y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.85 }}
                        >
                          {/* Pulse rings — selected only */}
                          {isSel && (
                            <>
                              <span
                                className="absolute rounded-full animate-ping bg-accent"
                                style={{ opacity: 0.4, inset: "-7px" }}
                              />
                              <span
                                className="absolute rounded-full animate-ping bg-accent"
                                style={{
                                  opacity: 0.15,
                                  inset: "-14px",
                                  animationDelay: "0.5s",
                                }}
                              />
                            </>
                          )}

                          {/* Dot */}
                          <div
                            className={`relative rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 ${isSel || isHov ? "bg-accent" : ""}`}
                            style={{
                              width:  isSel ? "18px" : "11px",
                              height: isSel ? "18px" : "11px",
                              backgroundColor: isSel || isHov ? undefined : PRIMARY,
                              boxShadow: isSel
                                ? `0 0 0 3px rgba(245, 158, 11, 0.35), 0 4px 14px rgba(245, 158, 11, 0.65)`
                                : `0 2px 6px rgba(0,0,0,0.28)`,
                            }}
                          >
                            <div
                              className="rounded-full bg-white/90"
                              style={{ width: isSel ? "5px" : "3px", height: isSel ? "5px" : "3px" }}
                            />
                          </div>

                          {/* Tooltip */}
                          <AnimatePresence>
                            {(isSel || isHov) && (
                              <motion.div
                                initial={{ opacity: 0, y: 6, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.8 }}
                                transition={{ duration: 0.15 }}
                                className="absolute pointer-events-none flex flex-col items-center"
                                style={{
                                  bottom: "calc(100% + 6px)",
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                }}
                              >
                                <div
                                  className="px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap bg-accent"
                                >
                                  <span className="text-[9px] font-black text-white uppercase tracking-widest">
                                    {loc.name}
                                  </span>
                                </div>
                                <div className="w-px h-2 bg-accent" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Legend strip */}
              <div
                className="flex items-center gap-5 flex-wrap px-7 py-4 flex-shrink-0 border-t"
                style={{ borderColor: `${PRIMARY}08` }}
              >
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedId(loc.id)}
                    className="flex items-center gap-2"
                  >
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${selectedId === loc.id ? "bg-accent scale-[1.5]" : "bg-primary/20 scale-100"}`}
                    />
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-300"
                      style={{ color: selectedId === loc.id ? PRIMARY : `${PRIMARY}40` }}
                    >
                      {loc.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT INFO PANEL ── */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", damping: 22, stiffness: 120 }}
                className="flex flex-col flex-1 overflow-hidden rounded-[2.5rem] border"
                style={{
                  backgroundColor: PRIMARY,
                  borderColor: "rgba(255,255,255,0.05)",
                  boxShadow: `0 20px 60px ${PRIMARY}30`,
                }}
              >
                {/* Hero image */}
                <div className="relative flex-shrink-0 overflow-hidden group" style={{ height: "220px" }}>
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    
                    className=" transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${PRIMARY} 0%, transparent 60%)`,
                    }}
                  />
                  {/* Top accent strip */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent" />
                  {/* State badge */}
                  <div className="absolute top-5 left-5">
                    <div className="px-3 py-1.5 rounded-lg flex items-center gap-2 bg-accent">
                      <Globe size={9} className="text-white" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-white">
                        {selected.state}
                      </span>
                    </div>
                  </div>
                  {/* Index */}
                  <div
                    className="absolute top-5 right-5 w-8 h-8 rounded-full border flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,0,0,0.35)", borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    <span className="text-[10px] font-black text-white">
                      {String(locations.findIndex((l) => l.id === selected.id) + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col flex-1 p-7 gap-5">
                  <div>
                    <h3
                      className="text-4xl font-serif font-black uppercase tracking-tighter leading-none mb-3 text-accent"
                    >
                      {selected.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {selected.description}
                    </p>
                  </div>

                  <div className="h-px bg-accent/20" />

                  {/* Facilities */}
                  <div className="flex-1 flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <Info size={11} className="text-accent" />
                      <span className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Key Facilities
                      </span>
                    </div>
                    {selected.facilities.map((f, i) => (
                      <motion.div
                        key={f}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-center gap-3 p-3.5 rounded-xl transition-all group/row cursor-default"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                          (e.currentTarget as HTMLElement).style.borderColor = `${ACCENT}40`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                        }}
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent/10"
                        >
                          <MapPin size={12} className="text-accent" />
                        </div>
                        <span className="font-semibold text-xs flex-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {f}
                        </span>
                        <ArrowRight
                          size={11}
                          className="opacity-0 group-hover/row:opacity-100 transition-all group-hover/row:translate-x-0.5"
                          style={{ color: ACCENT }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/projects"
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl font-black uppercase tracking-[0.18em] text-[10px] transition-all hover:brightness-110 active:scale-[0.98] bg-accent"
                    style={{
                      
                      color: PRIMARY,
                      boxShadow: `0 8px 28px ${ACCENT}45`,
                    }}
                  >
                    View Assets
                    <ExternalLink size={13} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── BOTTOM CITY SELECTOR ── */}
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          {locations.map((loc, i) => {
            const isSel = selectedId === loc.id;
            return (
              <motion.button
                key={loc.id}
                onClick={() => setSelectedId(loc.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 ${isSel ? "bg-accent" : "bg-white/80"}`}
                style={
                  isSel
                    ? { borderColor: "transparent", boxShadow: `0 8px 24px rgba(245, 158, 11, 0.45)` }
                    : { borderColor: `${PRIMARY}12` }
                }
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: isSel ? "white" : `${PRIMARY}45` }}
                />
                <span
                  className="text-[10px] font-black uppercase tracking-[0.2em]"
                  style={{ color: isSel ? "white" : `${PRIMARY}60` }}
                >
                  {loc.name}
                </span>
                <span
                  className="text-[8px] font-semibold tabular-nums"
                  style={{ color: isSel ? "rgba(255,255,255,0.6)" : `${PRIMARY}28` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}