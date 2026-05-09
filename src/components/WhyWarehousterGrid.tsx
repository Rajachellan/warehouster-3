"use client";

import { motion } from "framer-motion";
import { Shield, Target, Rocket, Heart, Zap, Globe } from "lucide-react";

interface Item {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

const items: Item[] = [
    { title: "Institutional Grade", desc: "Grade-A specifications meeting international FM2 and ESFR standards.", icon: <Shield className="text-[#D4AF37]" /> },
    { title: "Strategic Precision", desc: "Identifying high-growth corridors with proximity to consumption hubs.", icon: <Target className="text-[#D4AF37]" /> },
    { title: "Governance", desc: "100% compliance and transparent documentation for global investors.", icon: <Globe className="text-[#D4AF37]" /> },
    { title: "Sustainability", desc: "Eco-efficient designs and green energy integration in every park.", icon: <Heart className="text-[#D4AF37]" /> },
    { title: "Speed-to-Market", desc: "Adherence to a strict 24-month structured development lifecycle.", icon: <Zap className="text-[#D4AF37]" /> },
    { title: "Future-Ready", desc: "Scalable infrastructure designed for the next generation of logistics.", icon: <Rocket className="text-[#D4AF37]" /> },
];

export default function WhyWarehousterGrid() {
    return (
        <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-start text-left mb-20 md:mb-32 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-[#D4AF37]" />
                        <span className="text-[12px] font-black uppercase tracking-[0.8em] text-[#D4AF37]">
                            Advanced UI
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif font-black text-primary leading-[1.1] uppercase tracking-tighter"
                    >
                        Why <br />
                        <span className="text-white bg-[#D4AF37] px-4 py-1 inline-block mt-3 transform -skew-x-12">
                            Warehouster
                        </span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-10 bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 hover:border-[#D4AF37]/30 transition-all duration-700"
                        >
                            <div className="w-14 h-14 rounded-sm bg-[rgba(10,20,40,0.05)] flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif font-black text-primary uppercase tracking-tighter leading-tight mb-6 group-hover:text-[#D4AF37] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-[14px] font-bold uppercase tracking-widest text-[rgba(10,20,40,0.4)] leading-relaxed group-hover:text-primary transition-colors">
                                {item.desc}
                            </p>
                            <div className="mt-10 h-[1px] w-8 bg-gray-100 group-hover:w-full group-hover:bg-[#D4AF37] transition-all duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
