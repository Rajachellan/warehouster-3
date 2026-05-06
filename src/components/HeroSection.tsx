"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Video with Professional Depth Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="/videos/Warehouster_Web_Banner_Vid_1.mp4"
            type="video/mp4"
          />
        </video>
        {/* Architectural Depth Layers */}
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

        {/* Sophisticated Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      </div>

      {/* Grid-Based Hero Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Main Content Column */}
        <div className="md:col-span-12 lg:col-span-10 xl:col-span-9 flex flex-col items-start text-left">
          {/* Minimalist Top Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-8 bg-accent/60 shadow-[0_0_8px_rgba(212,175,55,0.2)]" />
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-accent/80">
              Institutional Logistics Platform
            </span>
          </motion.div>

          {/* Architectural Heading - Compact & Refined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 max-w-4xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white leading-[1.1] uppercase tracking-light">
              Building <span className="text-white/40 font-light">South India&apos;s</span> Next <br />
              <span className="text-white">Institutional-Grade</span> <br />
              <span className="text-accent">Logistics Platform</span>
            </h1>
          </motion.div>

          {/* Description Text - Structured for Professional Clarity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-2xl pl-0 md:pl-1 mb-16 relative"
          >
            <div className="absolute left-[-24px] top-0 bottom-0 w-[1px] bg-accent/20 hidden md:block" />
            <p className="text-base md:text-lg text-white/70 font-sans font-medium leading-relaxed tracking-wide ">
              Warehouster is a next-generation industrial and logistics real estate platform
              focused on developing <span className="text-white font-bold">Grade-A warehousing</span> and industrial infrastructure.
            </p>
          </motion.div>

          {/* Professional CTA Buttons - Refined & Precise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <Link
              href="/projects"
              className="group relative px-12 py-5 bg-accent text-primary font-sans font-black text-[13px] uppercase tracking-[0.4em] overflow-hidden rounded-lg shadow-xl shadow-accent/10 transition-transform active:scale-95"
            >
              <span className="relative z-10">Explore Projects</span>
              <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>

            <Link
              href="/contact"
              className="group px-12 py-5 bg-white/5 border border-white/20 text-white font-sans font-black text-[13px] uppercase tracking-[0.4em] rounded-lg backdrop-blur-md hover:bg-white hover:text-primary transition-all flex items-center gap-4 active:scale-95"
            >
              Speak to an Expert <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Architectural Data Points - Right Side Support */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden xl:flex col-span-3 flex-col justify-end gap-16 pb-20 items-end"
        >
          <div className="text-right border-r border-accent/30 pr-6">
            <div className="text-accent text-2xl font-serif font-black mb-1">19+</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-white/40">Acres Developed</div>
          </div>
          <div className="text-right border-r border-accent/30 pr-6">
            <div className="text-accent text-2xl font-serif font-black mb-1">Grade-A</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-white/40">Asset Quality</div>
          </div>
          <div className="text-right border-r border-accent/30 pr-6">
            <div className="text-accent text-2xl font-serif font-black mb-1">Institutional</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-white/40">Standard Platform</div>
          </div>
        </motion.div>
      </div>

      {/* Global Stat / Context Bar - Sophisticated minimalist footer */}
      {/* <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-12 left-0 w-full px-12 hidden md:flex items-center justify-between"
      >
        <div className="text-[8px] font-black uppercase tracking-[0.5em] text-white/20 flex items-center gap-12">
            <span>Chennai / South India</span>
            <div className="h-[4px] w-[4px] bg-accent/40 rounded-full" />
            <span>Industrial Development</span>
            <div className="h-[4px] w-[4px] bg-accent/40 rounded-full" />
            <span>WRE Portfolio</span>
        </div>
        <div className="text-[8px] font-black uppercase tracking-[0.5em] text-accent/40">
            Designing Future Logistics
        </div>
      </motion.div> */}

      {/* Refined Geometric Scroll Tab */}
      {/* <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-0 right-12 flex flex-col items-center gap-10"
      >
        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 vertical-text origin-right rotate-90 translate-y-12 mb-16">
            Scroll to Navigate
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-b from-accent via-accent/5 to-transparent" />
      </motion.div> */}
    </section>
  );
}
