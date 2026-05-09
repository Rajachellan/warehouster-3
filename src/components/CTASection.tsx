"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[rgba(212,175,55,0.1)] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-royal/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="pill-tag border-[rgba(212,175,55,0.3)] text-accent bg-[rgba(212,175,55,0.05)] mb-10 mx-auto"
        >
          Begin Your Evolution
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-serif font-black text-white leading-tight uppercase tracking-tighter mb-12"
        >
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">Optimize</span> <br />
          Your Industrial Footprint?
        </motion.h2>

        <p className="text-xl text-white/50 font-sans font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
          From Chennai to Bengaluru, Hosur to Madurai, we deliver high-performance industrial spaces tailored for e-commerce, manufacturing, FMCG, and 3PL operations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
          <Link
            href="/contact"
            className="group px-14 py-6 bg-accent text-white rounded-2xl font-sans font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all shadow-3xl shadow-[rgba(212,175,55,0.2)] flex items-center gap-4 active:scale-95 border border-[rgba(212,175,55,0.3)]"
          >
            Schedule Consultation <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
          </Link>
          <Link
            href="mailto:hello@warehouster.com"
            className="group px-14 py-6 bg-white/5 border border-white/20 text-white rounded-2xl font-sans font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-4 backdrop-blur-sm"
          >
            Contact Support <Mail size={16} className="text-accent" />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-12 pt-16 border-t border-white/10 opacity-30">
          <div className="flex items-center gap-4 text-white font-sans font-black text-[9px] uppercase tracking-[0.4em]">
            <Phone size={14} className="text-accent" /> +91 95600 11696
          </div>
          <div className="flex items-center gap-4 text-white font-sans font-black text-[9px] uppercase tracking-[0.4em]">
            <Mail size={14} className="text-accent" /> info@warehouster.com
          </div>
        </div>
      </div>
    </section>
  );
}
