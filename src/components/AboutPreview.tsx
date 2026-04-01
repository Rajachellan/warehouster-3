"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Industrial Imagery with Depth */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                            <Image
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                                alt="Institutional Infrastructure"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                        </div>
                        {/* Architectural Accent */}
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 border-b-2 border-r-2 border-[#D4AF37]/50 pointer-events-none" />
                    </motion.div>

                    {/* Right: Institutional Content */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[1px] w-10 bg-[#D4AF37]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#D4AF37]">Corporate Profile</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif font-black text-primary uppercase tracking-tighter leading-[1.1]">
                                Institutional <br />
                                <span className="text-[#D4AF37]">Infrastructure</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-primary/60 font-medium leading-relaxed max-w-xl"
                        >
                            Warehouster is a next-generation industrial and logistics real estate platform focused on developing Grade-A warehousing and industrial infrastructure across India&apos;s high-growth corridors.
                        </motion.p>

                        {/* Pill Tags */}
                        <div className="flex flex-wrap gap-3">
                            {["Grade-A Assets", "Logistics Corridors", "Industrial Parks"].map((tag) => (
                                <div key={tag} className="px-5 py-2 border border-primary/10 bg-gray-50 text-[10px] font-black uppercase tracking-widest text-primary transform -skew-x-12">
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="pt-6"
                        >
                            <Link href="/about" className="group flex items-center gap-6">
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Explore Platform</span>
                                <div className="w-16 h-[1px] bg-primary group-hover:w-24 transition-all duration-700" />
                                <MoveRight size={18} className="text-primary group-hover:translate-x-3 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
