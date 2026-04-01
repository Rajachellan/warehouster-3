"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PRIMARY = "#0A1428";
const ACCENT = "#F59E0B";

const P_90 = "rgba(10,20,40,0.90)";
const P_55 = "rgba(10,20,40,0.55)";
const P_30 = "rgba(10,20,40,0.30)";
const P_08 = "rgba(10,20,40,0.08)";
const P_04 = "rgba(10,20,40,0.04)";

const A_80 = "rgba(245,158,11,0.80)";
const A_30 = "rgba(245,158,11,0.30)";
const A_12 = "rgba(245,158,11,0.12)";
const A_06 = "rgba(245,158,11,0.06)";

const pills = ["Grade-A Warehousing", "Industrial Infrastructure", "Logistics Corridors", "Institutional Assets"];

const stats = [
    { value: "25+", label: "Acres Developed" },
    { value: "14", label: "Months to Full Lease" },
    { value: "3x", label: "Institutional Partners" },
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            ref={sectionRef}
            className="relative bg-white overflow-hidden"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* ── Structural diagonal stripe (pure CSS, no background color) ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 72px,
            ${P_04} 72px,
            ${P_04} 73px
          )`,
                }}
            />

            {/* ── Amber glow accent – top-right corner ── */}
            <div
                className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 100% 0%, ${A_12} 0%, transparent 65%)`,
                }}
            />

            {/* ── Vertical rule – far left ── */}
            <div
                className="absolute top-0 left-[5.5rem] bottom-0 w-px pointer-events-none hidden lg:block"
                style={{ background: `linear-gradient(to bottom, transparent, ${P_08} 20%, ${P_08} 80%, transparent)` }}
            />

            {/* ══════════════════════════════════════════ CONTENT ══ */}
            <div className="max-w-7xl mx-auto px-6 lg:px-20 py-28 relative z-10">

                {/* ── Row 1 — Eyebrow + huge heading side by side ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-0 mb-0">

                    {/* Left: eyebrow + ABOUT stacked display type */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-6">
                            <span
                                className="text-[9px] font-black uppercase tracking-[0.6em]"
                                style={{ color: ACCENT }}
                            >
                                Corporate Profile
                            </span>
                            <div className="flex-1 max-w-[60px] h-px" style={{ background: ACCENT }} />
                        </div>

                        {/* Giant serif heading with amber underline on "Us" */}
                        <h2
                            style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "clamp(80px, 14vw, 148px)",
                                fontWeight: 800,
                                lineHeight: 0.88,
                                letterSpacing: "-0.03em",
                                color: PRIMARY,
                            }}
                        >
                            About
                            <br />
                            <span className="relative inline-block">
                                Us
                                {/* Amber underbar */}
                                <motion.span
                                    className="absolute left-0 -bottom-2 h-[4px] rounded-full"
                                    style={{ background: ACCENT }}
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: "100%" } : {}}
                                    transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                />
                            </span>
                        </h2>
                    </motion.div>

                    {/* Right: vertical stats strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden lg:flex flex-col gap-0 self-end mb-2"
                        style={{
                            borderLeft: `1px solid ${P_08}`,
                            paddingLeft: "2.5rem",
                        }}
                    >
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                className="py-5"
                                style={{ borderBottom: i < stats.length - 1 ? `1px solid ${P_08}` : "none" }}
                            >
                                <p
                                    style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: "2rem",
                                        fontWeight: 800,
                                        color: ACCENT,
                                        lineHeight: 1,
                                    }}
                                >
                                    {s.value}
                                </p>
                                <p
                                    className="text-[9px] uppercase tracking-[0.35em] mt-1 font-semibold"
                                    style={{ color: P_30 }}
                                >
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ── Divider rule ── */}
                <motion.div
                    className="my-12 h-px w-full"
                    style={{ background: `linear-gradient(90deg, ${ACCENT} 0%, ${P_08} 50%, transparent 100%)` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* ── Row 2 — Body copy + blockquote ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Body copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p
                            className="text-[17px] leading-[1.75] mb-6 font-light"
                            style={{ color: P_90 }}
                        >
                            <strong className="font-bold" style={{ color: PRIMARY }}>Warehouster</strong> is a
                            next-generation{" "}
                            <span
                                className="font-semibold underline decoration-1 underline-offset-4"
                                style={{ color: PRIMARY, textDecorationColor: A_80 }}
                            >
                                industrial
                            </span>{" "}
                            and{" "}
                            <span
                                className="font-semibold underline decoration-1 underline-offset-4"
                                style={{ color: PRIMARY, textDecorationColor: A_80 }}
                            >
                                logistics
                            </span>{" "}
                            real estate platform focused on developing Grade-A warehousing and industrial
                            infrastructure.
                        </p>

                        <p
                            className="text-[14px] leading-[1.85] font-light mb-10"
                            style={{ color: P_55 }}
                        >
                            We specialize in{" "}
                            <span className="font-semibold underline decoration-1 underline-offset-3" style={{ textDecorationColor: A_30 }}>
                                identifying
                            </span>{" "}
                            strategic logistics corridors,{" "}
                            <span className="font-semibold underline decoration-1 underline-offset-3" style={{ textDecorationColor: A_30 }}>
                                acquiring
                            </span>{" "}
                            high-potential land parcels, and developing institutional-grade industrial assets
                            designed for long-term performance.
                        </p>

                        {/* Pill tags */}
                        <div className="flex flex-wrap gap-2">
                            {pills.map((p, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                                    className="text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-2"
                                    style={{
                                        color: PRIMARY,
                                        border: `1px solid ${P_30}`,
                                        background: P_04,
                                    }}
                                >
                                    {p}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Blockquote */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        {/* Amber left border */}
                        <div
                            className="absolute top-0 left-0 bottom-0 w-[3px] rounded-full"
                            style={{ background: `linear-gradient(to bottom, ${ACCENT}, ${A_30})` }}
                        />

                        <div
                            className="pl-8 py-8 pr-8"
                            style={{
                                background: `linear-gradient(135deg, ${A_06}, transparent)`,
                                border: `1px solid ${A_12}`,
                                borderLeft: "none",
                            }}
                        >
                            {/* Quote mark */}
                            <div
                                className="mb-5"
                                style={{
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "4rem",
                                    lineHeight: 0.7,
                                    color: ACCENT,
                                    fontWeight: 800,
                                }}
                            >
                                "
                            </div>

                            <p
                                className="text-[15px] leading-[1.8] mb-2 font-light"
                                style={{ color: P_90 }}
                            >
                                We{" "}
                                <strong
                                    className="font-black underline"
                                    style={{ color: PRIMARY, textDecorationColor: A_80 }}
                                >
                                    don't
                                </strong>{" "}
                                build sheds.
                            </p>

                            <p
                                style={{
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "clamp(22px, 3.5vw, 32px)",
                                    fontWeight: 800,
                                    lineHeight: 1.25,
                                    color: ACCENT,
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                We build structured industrial ecosystems.
                            </p>

                            {/* Attribution rule */}
                            <div className="flex items-center gap-3 mt-6">
                                <div className="w-6 h-px" style={{ background: ACCENT }} />
                                <span
                                    className="text-[9px] uppercase tracking-[0.45em] font-bold"
                                    style={{ color: P_30 }}
                                >
                                    Warehouster Philosophy
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Mobile stats row ── */}
                <div
                    className="flex lg:hidden items-center gap-8 mt-12 pt-8 flex-wrap"
                    style={{ borderTop: `1px solid ${P_08}` }}
                >
                    {stats.map((s, i) => (
                        <div key={i}>
                            <p
                                style={{
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "2.2rem",
                                    fontWeight: 800,
                                    color: ACCENT,
                                    lineHeight: 1,
                                }}
                            >
                                {s.value}
                            </p>
                            <p className="text-[9px] uppercase tracking-[0.35em] mt-1 font-semibold" style={{ color: P_30 }}>
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}