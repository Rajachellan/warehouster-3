"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center py-20">
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
        {/* Deep Blue/Black Gradient Overlay */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs uppercase tracking-[0.3em] mb-8 backdrop-blur-md shadow-lg shadow-accent/10"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
              Global Logistic Excellence
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1] mb-8 tracking-tighter">
              Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white underline decoration-accent/50 decoration-4 underline-offset-[12px]">Warehousing</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 font-medium mb-12 max-w-xl leading-relaxed">
              Engineering premium infrastructure and intelligence-driven logistics ecosystems for tomorrow's market leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group px-10 py-6 rounded-2xl bg-accent text-white font-black text-xl shadow-[0_20px_50px_rgba(242,101,34,0.3)] hover:shadow-[0_20px_60px_rgba(242,101,34,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-4 overflow-hidden relative active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              </Link>
              <Link
                href="/services"
                className="px-10 py-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-4 active:scale-95 group shadow-2xl"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                    <Play className="w-5 h-5 fill-current ml-1" />
                </div>
                Explore More
              </Link>
            </div>
          </motion.div>

          {/* Graphical Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="hidden lg:flex justify-end relative"
          >
             <div className="relative w-[450px] h-[450px]">
                {/* Rotating ring */}
                <div className="absolute inset-0 border-[1px] border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-8 border-[1px] border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-16 border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                        <div className="text-white font-display text-8xl font-black mb-2 flex flex-col uppercase leading-none">
                            <span className="text-accent">10M+</span>
                            <span className="text-xl font-sans tracking-[0.6em] text-white/40 mt-4">SQ FT SPACE</span>
                        </div>
                        <div className="h-1 w-20 bg-accent mt-8 mx-auto rounded-full" />
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
