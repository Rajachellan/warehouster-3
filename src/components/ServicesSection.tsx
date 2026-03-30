"use client";

import { motion } from "framer-motion";
import { Building2, Hammer, ShieldCheck, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import land from "../assets/approv-process-img-2.webp"
import development from "../assets/parks-banner.webp";
import industry from "../assets/ourcover-values-1.webp";
import construction from "../assets/adrian-sulyok-sczNLg6rrhQ-unsplash.jpg"
const services = [
  {
    title: "Land Acquisition",
    description: "Multi-parameter strategic sourcing of high-yield industrial locations across India's leading logistics corridors.",
    icon: Building2,
    href: "/services/land-acquisition",
    image: land,
  },
  {
    title: "Development Management",
    description: "End-to-end management of industrial projects from feasibility studies and master planning to construction and delivery.",
    icon: Hammer,
    href: "/services/development-management",
    image: development,
  },
  {
    title: "Warehouse Construction",
    description: "Setting the Gold Standard with Grade-A shell construction and energy-efficient warehouse infrastructures.",
    icon: ShieldCheck,
    href: "/services/warehouse-construction",
    image: construction,
  },
  {
    title: "Industrial Consulting",
    description: "Expert advice on supply chain optimization, network design, and high-performance industrial asset management.",
    icon: Users,
    href: "/services/industrial-consulting",
    image: industry,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="pill-tag mb-6"
            >
              Our Core Expertise
            </motion.p>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight uppercase tracking-tighter">
              Integrated industrial <br />
              <span className="text-accent">Capabilities</span>
            </h2>
          </div>
          <Link 
            href="/services" 
            className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-primary hover:text-accent transition-all pb-2 border-b-2 border-primary hover:border-accent"
          >
            Explore All Services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] flex flex-col justify-end p-8 rounded-[2.5rem] overflow-hidden hover-lift border border-gray-100 bg-white"
            >
              {/* Image Background (Animated on Hover) */}
              <div className="absolute inset-0 z-0">
                <Image
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent group-hover:from-primary transition-all duration-500" />
              </div>

              {/* Icon Overlay */}
              <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-xl group-hover:bg-accent group-hover:text-primary transition-all duration-500 z-10">
                <service.icon size={26} />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-serif font-black text-white group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-medium group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
                <Link 
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-accent text-white hover:text-primary rounded-full text-[9px] font-black uppercase tracking-widest transition-all backdrop-blur-md"
                >
                    Learn More <ArrowRight size={12} />
                </Link>
              </div>
              
              {/* Bottom Glow Effect */}
              <div className="absolute -bottom-10 left-0 right-0 h-20 bg-accent/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
