"use client";

import { motion } from "framer-motion";
import { Target, Rocket, ShieldCheck } from "lucide-react";

export default function VisionMission() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group p-12 bg-white border border-gray-100 hover:border-[#D4AF37]/50 transition-all duration-700 shadow-xl"
                    >
                        <div className="w-16 h-16 rounded-sm bg-primary text-white flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-colors">
                            <Target size={28} />
                        </div>
                        <h3 className="text-3xl font-serif font-black text-primary uppercase tracking-tighter mb-6 group-hover:text-[#D4AF37] transition-colors">
                            Our Mission
                        </h3>
                        <p className="text-sm font-medium text-primary/50 leading-relaxed max-w-sm">
                            To deliver smart, scalable, and reliable warehouse solutions through innovation and expertise, empowering businesses to grow with confidence.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="group p-12 bg-primary border border-primary hover:border-[#D4AF37]/50 transition-all duration-700 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 transform rotate-45 translate-x-16 -translate-y-16" />

                        <div className="w-16 h-16 rounded-sm bg-[#D4AF37] text-primary flex items-center justify-center mb-8 group-hover:bg-white transition-colors">
                            <Rocket size={28} />
                        </div>
                        <h3 className="text-3xl font-serif font-black text-white uppercase tracking-tighter mb-6 group-hover:text-[#D4AF37] transition-colors">
                            Our Vision
                        </h3>
                        <p className="text-sm font-medium text-white/50 leading-relaxed max-w-sm group-hover:text-white transition-colors">
                            To redefine warehouse and industrial space access through a seamless, technology-driven ecosystem that enhances efficiency and transparency.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
