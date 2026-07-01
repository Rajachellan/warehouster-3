"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="pill-tag mx-auto mb-10"
        >
          Begin Your Evolution
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-serif text-5xl font-black uppercase leading-tight tracking-tighter text-white md:text-6xl"
        >
          Ready to <span className="text-accent">Optimize</span> <br />
          Your Industrial Footprint?
        </motion.h2>

        <p className="mx-auto mb-16 max-w-2xl font-sans text-xl font-medium leading-relaxed text-white/50">
          From Chennai to Bengaluru, Hosur to Madurai, we deliver high-performance industrial spaces tailored for e-commerce, manufacturing, FMCG, and 3PL operations.
        </p>

        <div className="mb-20 flex flex-col items-center justify-center gap-8 sm:flex-row">
          <Link
            href="/contact"
            className="group flex items-center gap-4 rounded-2xl bg-accent px-14 py-6 font-sans text-[11px] font-black uppercase tracking-[0.3em] text-primary transition-all hover:bg-white active:scale-95"
          >
            Schedule Consultation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-3" />
          </Link>
          <Link
            href="mailto:hello@warehouster.com"
            className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/5 px-14 py-6 font-sans text-[11px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            Contact Support <Mail size={16} />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-12 border-t border-white/10 pt-16 opacity-40">
          <div className="flex items-center gap-4 font-sans text-[9px] font-black uppercase tracking-[0.4em] text-white">
            <Phone size={14} /> +91 95600 11696
          </div>
          <div className="flex items-center gap-4 font-sans text-[9px] font-black uppercase tracking-[0.4em] text-white">
            <Mail size={14} /> info@warehouster.com
          </div>
        </div>
      </div>
    </section>
  );
}
