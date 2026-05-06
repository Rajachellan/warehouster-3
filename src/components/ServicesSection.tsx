"use client";

import { motion } from "framer-motion";
import { Building2, Hammer, ShieldCheck, Users, ArrowRight, ChevronRight, Zap, Target, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import land from "../assets/approv-process-img-2.webp";
import development from "../assets/parks-banner.webp";
import industry from "../assets/ourcover-values-1.webp";
import construction from "../assets/adrian-sulyok-sczNLg6rrhQ-unsplash.jpg";

const services = [
  {
    title: "Strategic Land Acquisition",
    description: "Leveraging multi-parameter data intelligence to source high-yield industrial locations across key corridors.",
    features: ["Corridor Mapping", "Title Governance", "Zoning Mastery"],
    icon: Globe,
    href: "/services/land-acquisition",
    image: land,
    color: "from-blue-600/20 to-indigo-600/20"
  },
  {
    title: "Integrated Development",
    description: "End-to-end oversight from greenfield to stabilized asset with institutional-grade master planning.",
    features: ["Project Lifecycle", "Statutory Clarity", "Asset Strategy"],
    icon: Target,
    href: "/services/development-management",
    image: development,
    color: "from-emerald-600/20 to-teal-600/20"
  },
  {
    title: "Institutional Construction",
    description: "Setting the benchmark with Grade-A specifications, ultra-flat floors, and advanced fire safety systems.",
    features: ["Grade-A Shells", "LEED Standards", "High-Load Slab"],
    icon: ShieldCheck,
    href: "/services/warehouse-construction",
    image: construction,
    color: "from-amber-600/20 to-orange-600/20"
  },
  {
    title: "Specialized Consulting",
    description: "Strategic supply chain optimization and data-driven insights into logistics modeling.",
    features: ["Network Design", "Yield Analytics", "SC Strategy"],
    icon: Zap,
    href: "/services/industrial-consulting",
    image: industry,
    color: "from-purple-600/20 to-fuchsia-600/20"
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-100" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-8 bg-accent" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-accent">
                Core Capabilities
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-serif font-black text-primary leading-[0.85] uppercase tracking-tighter">
              Integrated Industrial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/30">Excellence</span>
            </h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-sm pb-2"
          >
            <p className="text-primary/50 text-lg font-medium leading-relaxed italic mb-6">
              &ldquo;Comprehensive industrial solutions engineered for long-term institutional performance.&rdquo;
            </p>
            <div className="h-px w-16 bg-accent/30" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative h-[620px] flex flex-col justify-end p-10 rounded-[3.5rem] overflow-hidden bg-gray-50 transition-all duration-700"
            >
              {/* Background Layers */}
              <div className="absolute inset-0 z-0">
                <Image
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/60 to-transparent group-hover:from-[#0A1428]/95 transition-all duration-700" />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${service.color} transition-opacity duration-700`} />
              </div>

              {/* Icon Overlay */}
              <div className="absolute top-10 left-10 w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center text-primary shadow-2xl group-hover:bg-accent group-hover:scale-110 transition-all duration-500 z-10">
                <service.icon size={24} />
              </div>

              {/* Content */}
              <div className="relative z-10 transform group-hover:translate-y-[-10px] transition-transform duration-700">
                <div className="mb-6">
                    <h3 className="text-3xl font-serif font-black text-white group-hover:text-accent transition-colors leading-[0.9] uppercase tracking-tighter">
                      {service.title}
                    </h3>
                </div>
                
                <p className="text-white/40 text-[14px] leading-relaxed font-medium mb-8 group-hover:text-white/70 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <span key={fIdx} className="text-[9px] font-black uppercase tracking-widest text-white/20 border border-white/10 px-3 py-1.5 rounded-full group-hover:border-accent group-hover:text-accent transition-all duration-500">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link 
                    href={service.href}
                    className="inline-flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-[0.4em] hover:text-accent transition-colors"
                >
                    Learn Strategy <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              
              {/* Corner Reveal */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[4rem] -translate-y-16 translate-x-16 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
