"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center md:pt-20 pt-60">
      {/* Background Video with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-105"
        >
          <source
            src="/videos/Warehouster_Web_Banner_Vid_1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />
      </div>

      {/* Hero Content - Centered */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="pill-tag border-accent/30 text-accent bg-accent/5 mb-10 mx-auto"
        >
          South India’s premier Grade-A logistics park network
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-black text-white leading-[1.1] uppercase tracking-wide mb-10"
        >
          Transforming 19 <br /> Acres into an  <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-gold-light to-white italic"> Institutional Grade-A Asset</span> 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/50 font-sans font-medium mb-16 max-w-3xl mx-auto leading-relaxed"
        >
       A Strategic Development Manageent & Leasing for Tiruvallur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <Link
            href="/projects"
            className="group px-14 py-6 bg-accent text-white rounded-2xl font-sans font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all shadow-3xl shadow-accent/20 flex items-center gap-4 active:scale-95"
          >
            Explore Projects <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group px-14 py-6 bg-white/5 border border-white/20 text-white rounded-2xl font-sans font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-4 backdrop-blur-sm"
          >
            Speak to an Expert <Play size={16} fill="currentColor" />
          </Link>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-30"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Scroll</span>
      </motion.div>
    </section>
  );
}
