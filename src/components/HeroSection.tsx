"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-sm mb-6 uppercase tracking-wider backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Empowering Modern Logistics
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.1] mb-6 tracking-tight">
              Smart <span className="text-accent underline decoration-4 underline-offset-8">Warehousing</span> Solutions
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 max-w-2xl leading-relaxed">
              Premium infrastructure and tech-driven logistics management for the next generation of global businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group px-8 py-5 rounded-full bg-accent text-white font-black text-lg shadow-2xl hover:bg-accent/90 transition-all flex items-center justify-center gap-3 overflow-hidden relative"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 fill-current" />
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Optional Right Side Graphical Element or just empty for balance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden lg:flex justify-end"
          >
             <div className="relative w-96 h-96 rounded-3xl border-2 border-white/10 bg-white/5 backdrop-blur-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <div className="text-white font-display text-8xl font-black mb-2 flex flex-col uppercase">
                        <span>10M+</span>
                        <span className="text-2xl font-sans tracking-[0.4em] text-accent">SQ FT</span>
                    </div>
                    <p className="text-white/60 font-semibold uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform">Industrial Space Developed</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 font-bold text-xs uppercase tracking-widest"
      >
        <span>Scroll</span>
        <div className="w-1 h-12 rounded-full bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
