"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2, Building2, Shield, TrendingUp } from "lucide-react";

const NAVY = "#0f1f3d";
const GOLD = "#D4AF37";
const GOLD_08 = "rgba(212,175,55,0.08)";
const GOLD_15 = "rgba(212,175,55,0.25)";
const GOLD_25 = "rgba(212,175,55,0.25)";
const GOLD_40 = "rgba(212,175,55,0.40)";
const WHITE_50 = "rgba(255,255,255,0.5)";

const bullets = [
  "Deep market know-how across South India's industrial corridors",
  "Established occupier relationships with DHL, Flipkart, Amazon, and Reliance",
  "Institutional credibility — trusted by Blackstone, ESR, and Indospace",
  "End-to-end transaction management from positioning to occupancy",
  "Data-driven rental benchmarking and market intelligence",
  "Proven phasing strategies for multi-phase developments",
];

const trustedBy = [
  { icon: <Building2 size={13} />, name: "Blackstone" },
  { icon: <Shield size={13} />, name: "ESR" },
  { icon: <Building2 size={13} />, name: "Indospace" },
];

/** Counts from 0 to `end` when it enters the viewport */
function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  if (isInView && !started.current) {
    started.current = true;
    const duration = 1400;
    const fps = 60;
    const step = end / (duration / (1000 / fps));
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / fps);
  }

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function WhyUsSection() {
  const [hoveredBullet, setHoveredBullet] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ══ LEFT ══ */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {/* WHY US label with animated line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-6 mb-10"
            >
              <div className="h-[1px] w-12 bg-accent shadow-[0_0_8px_rgba(212,175,55,0.2)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent/80">
                Strategic Excellence
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-[1.05] uppercase tracking-tighter mb-10">
              Why <br />
              <span className="text-accent underline decoration-accent/10 underline-offset-[12px] decoration-1">
                Warehouster?
              </span>
            </h2>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              viewport={{ once: true }}
              className="text-[11px] leading-[1.7] flex-1 mb-12 uppercase opacity-60 tracking-wide font-sans font-medium max-w-md"
            >
              We bring an unmatched combination of institutional-grade expertise, occupier
              relationships, and execution discipline to every mandate we undertake.
            </motion.p>

            {/* Success case card */}
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
              className="rounded-2xl p-5 border cursor-default relative overflow-hidden"
              style={{ background: GOLD_08, borderColor: GOLD_25 }}
            >
              {/* Shimmer sweep on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ x: "-110%" }}
                whileHover={{ x: "210%" }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                style={{
                  background: `linear-gradient(105deg, transparent 30%, ${GOLD_25} 50%, transparent 70%)`,
                  zIndex: 1,
                }}
              />

              <div className="flex items-start gap-3 relative z-10">
                {/* Icon with spin on hover */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 280, damping: 16 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: GOLD_25 }}
                >
                  <Building2 size={17} style={{ color: GOLD }} />
                </motion.div>

                <div className="flex-1">
                  <p
                    className="text-sm font-black uppercase tracking-[0.18em] mb-2 font-sans"
                    style={{ color: GOLD }}
                  >
                    Redhills Success Case
                  </p>

                  {/* Animated stats row */}
                  <div className="flex items-center gap-4 mb-3">
                    <div>
                      <p
                        className="font-serif font-black"
                        style={{ fontSize: "1.75rem", color: GOLD, lineHeight: 1 }}
                      >
                        <CountUp end={25} suffix="acre" />
                      </p>
                      <p
                        className="text-[9px] uppercase tracking-[0.3em] font-sans mt-0.5"

                      >
                        Greenfield
                      </p>
                    </div>
                    <TrendingUp size={14} style={{ color: GOLD_40, flexShrink: 0 }} />
                    <div>
                      <p
                        className="font-serif font-black"
                        style={{ fontSize: "1.75rem", color: GOLD, lineHeight: 1 }}
                      >
                        <CountUp end={14} suffix="month" />
                      </p>
                      <p
                        className="text-[9px] uppercase tracking-[0.3em] font-sans mt-0.5"

                      >
                        Fully leased
                      </p>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed font-sans" >
                    Fully leased to institutional-grade occupiers. A validated proof-point
                    of our integrated approach.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ══ RIGHT ══ */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Bullet list */}
            <div style={{ borderTop: `0.5px solid ${GOLD_25}` }}>
              {bullets.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredBullet(i)}
                  onHoverEnd={() => setHoveredBullet(null)}
                  className="flex items-start gap-4 py-[14px] cursor-default relative"
                  style={{ borderBottom: `0.5px solid ${GOLD_25}` }}
                >
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    animate={{ opacity: hoveredBullet === i ? 1 : 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ background: GOLD_08 }}
                  />

                  {/* Checkmark */}
                  <motion.div
                    animate={{
                      scale: hoveredBullet === i ? 1.25 : 1,
                      rotate: hoveredBullet === i ? 8 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                    className="flex-shrink-0 mt-0.5 relative z-10"
                  >
                    <CheckCircle2
                      size={15}
                      style={{ color: i % 2 === 0 ? GOLD : `${GOLD}65` }}
                    />
                  </motion.div>

                  {/* Label */}
                  <motion.span

                    transition={{ duration: 0.18 }}
                    className="text-sm leading-snug font-sans relative z-10 flex-1"
                  >
                    {b}
                  </motion.span>

                  {/* Arrow on hover */}
                  <motion.span
                    animate={{
                      opacity: hoveredBullet === i ? 1 : 0,
                      x: hoveredBullet === i ? 0 : -5,
                    }}
                    transition={{ duration: 0.18 }}
                    className="flex-shrink-0 relative z-10 self-center"
                    style={{ color: GOLD, fontSize: "11px" }}
                  >
                    →
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* Expanding divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="h-px mt-6 mb-5 rounded-full"
              style={{ background: `linear-gradient(90deg, ${GOLD_40}, transparent)` }}
            />

            {/* Trusted by */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              viewport={{ once: true }}
            >
              <p
                className="font-sans font-black uppercase mb-3"
                style={{ fontSize: "9px", letterSpacing: "0.5em", color: `${GOLD}50` }}
              >
                Trusted by Industry Leaders
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {trustedBy.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + 0.1 * i }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.25, rotate: -6 }}
                      transition={{ type: "spring", stiffness: 380, damping: 18 }}
                      style={{ color: i % 2 === 0 ? GOLD : `${GOLD}75` }}
                    >
                      {t.icon}
                    </motion.div>
                    <motion.span
                      whileHover={{ color: "#ffffff" }}
                      transition={{ duration: 0.18 }}
                      className="text-sm font-black font-sans uppercase tracking-[0.15em]"

                    >
                      {t.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}