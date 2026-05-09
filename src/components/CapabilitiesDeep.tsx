"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, BarChart } from "lucide-react";

const capabilities = [
    {
        title: "Industrial Land Aggregation",
        desc: "Precision identification and acquisition of mission-critical land parcels in prime logistics hubs.",
        points: ["Title Due-Diligence", "Regulatory Structuring", "Strategic Positioning"],
        icon: <Layers size={24} />,
        id: "CP-01"
    },
    {
        title: "Grade-A Warehouse Development",
        desc: "Design and construction of state-of-the-art warehousing facilities following international best practices.",
        points: ["FM2 Superflat Floors", "ESFR Fire Systems", "12m Clear Height"],
        icon: <ShieldCheck size={24} />,
        id: "CP-02"
    },
    {
        title: "Industrial & Logistics Parks",
        desc: "Master-planned industrial ecosystems designed for high-volume operational efficiency and scalability.",
        points: ["Plug-and-Play Infra", "Integrated Utility", "ESG Certified Parks"],
        icon: <Zap size={24} />,
        id: "CP-03"
    },
    {
        title: "Built-to-Suit Solutions",
        desc: "Custom-engineered industrial facilities tailored to specific operational requirements of global leaders.",
        points: ["Operational Customization", "Long-term Lease Structuring", "Efficiency Optimization"],
        icon: <BarChart size={24} />,
        id: "CP-04"
    }
];

export default function CapabilitiesDeep() {
    return (
        <section className="py-24 bg-[#fcfcfc] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-start text-left mb-20 md:mb-32 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-[#D4AF37]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#D4AF37]">
                            Core Capabilities
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif font-black text-primary leading-[1.1] uppercase tracking-tighter"
                    >
                        Engineering <br />
                        <span className="text-white bg-[#D4AF37] px-4 py-1 inline-block mt-3 transform -skew-x-12">
                            Excellence
                        </span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {capabilities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col p-12 bg-white border border-gray-100 hover:border-[#D4AF37]/40 transition-all duration-700 overflow-hidden"
                        >
                            <div className="w-16 h-16 rounded-sm bg-primary text-white flex items-center justify-center mb-10 group-hover:bg-[#D4AF37] transition-colors duration-700">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-black text-primary uppercase tracking-tighter mb-6 group-hover:text-[#D4AF37] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm font-medium text-[rgba(10,20,40,0.4)] leading-relaxed mb-10 group-hover:text-primary transition-colors">
                                {item.desc}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                                {item.points.map((point, pIdx) => (
                                    <div key={pIdx} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[rgba(10,20,40,0.6)]">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute right-0 bottom-0 top-0 w-1 bg-gray-100 group-hover:bg-[#D4AF37] transition-all" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
