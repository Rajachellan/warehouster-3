"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-accent relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight"
        >
            Ready to <span className="underline decoration-white/40 decoration-8 underline-offset-8">Scale</span> Your Business Infrastructure?
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 font-medium mb-12 max-w-3xl mx-auto"
        >
            Partner with Warehouster for industry-leading, tech-enabled warehousing solutions tailored to your unique logistics requirements.
        </motion.p>
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
        >
            <Link 
                href="/contact" 
                className="px-12 py-6 rounded-full bg-white text-primary font-black text-xl shadow-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3 transform hover:-translate-y-2 select-none"
            >
                Get a Quote Now
                <ArrowRight className="w-6 h-6" />
            </Link>
            <Link 
                href="/services" 
                className="px-12 py-6 rounded-full bg-primary text-white font-black text-xl shadow-2xl hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-3 border-2 border-primary/20 transform hover:-translate-y-2"
            >
                View Services
            </Link>
        </motion.div>
      </div>
    </section>
  );
}
