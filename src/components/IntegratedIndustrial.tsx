"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ── Data ─────────────────────────────────────────────── */
const services = [
  {
    title: "Industrial Land Aggregation",
    desc: "Strategic acquisition and consolidation of high-potential land parcels within critical logistics corridors. We ensure title absolute and multi-parameter clearance for rapid institutional development.",
    bullets: ["Title Governance", "Corridor Analysis", "Zoning Compliance"],
    image: "/images/services/land_aggregation.png",
    id: "01",
    slug: "/land-acquisition"
  },
  {
    title: "Grade-A Warehouse Development",
    desc: "Developing institutional-grade assets with global specifications. Our facilities are engineered for maximum operational efficiency, safety, and long-term capital appreciation.",
    bullets: ["40ft Clear Heights", "FM2 Flooring", "Dock Levelers"],
    image: "/images/services/warehouse_interior.png",
    id: "02",
    slug: "/development-management"
  },
  {
    title: "Industrial & Logistics Parks",
    desc: "Master-planned industrial clusters featuring comprehensive internal infrastructure. We provide 24/7 security, advanced utility grids, and professional management services.",
    bullets: ["Internal Utilities", "Security Protocols", "Common Area Mgmt"],
    image: "/images/services/logistics_park.png",
    id: "03",
    slug: "/warehouse-construction"
  },
  {
    title: "Built-to-Suit Solutions",
    desc: "Custom infrastructure designed specifically to meet complex tenant requirements. From design to deployment, we deliver rapid-execution facilities tailored to your business goals.",
    bullets: ["Custom Engineering", "Statutory Mastery", "Rapid Deployment"],
    image: "/images/services/bts_facility.png",
    id: "04",
    slug:"/industrial-consulting"
  }
];

function PortfolioCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="h-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex flex-col h-full bg-white overflow-hidden shadow-2xl shadow-gray-200/50 hover:shadow-gold/10 transition-all duration-700 cursor-pointer"
      >
        {/* Premium Image Header */}
        <div className="relative h-64 lg:h-72 w-full shrink-0 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {/* Architectural Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

          {/* ID Badge */}
          <div className="absolute top-6 left-6 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[12px] font-black text-white tracking-widest">
            {service.id}
          </div>

          {/* Hover Action Button */}
          <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl shadow-[#D4AF37]/40">
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Body — flex-grow fills remaining height so all cards match */}
        <div className="p-8 lg:p-10 flex flex-col flex-grow relative bg-white group-hover:bg-gray-50 transition-colors duration-500">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 w-12 h-[3px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          {/* ID + Tag row */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37]">Phase {service.id}</span>
            <div className="h-px w-6 bg-[#D4AF37]/20" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-serif font-black text-primary uppercase tracking-tighter leading-[1.1] mb-6 group-hover:text-[#D4AF37] transition-colors duration-500">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-[15px] font-medium leading-[1.6] text-[rgba(10,20,40,0.5)] tracking-tight mb-8 group-hover:text-[rgba(10,20,40,0.7)] transition-colors duration-500">
            {service.desc}
          </p>

          {/* Capability Specs — mt-auto pins this to the bottom of the body */}
          <div className="mt-auto pt-8 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {service.bullets.map((bullet, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/5 px-3 py-1.5 rounded-md border border-[#D4AF37]/10 group-hover:bg-[#D4AF37] group-hover:text-white group-hover:border-transparent transition-all duration-300"
                >
                  {bullet}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Finishing Architectural Bar — always flush to bottom */}
        <div className="h-2 w-full shrink-0 bg-gray-100 group-hover:bg-[#D4AF37] transition-colors duration-700" />
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#D4AF37 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }}
      />

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* Institutional Display Header */}
        <div className="flex flex-col items-center text-center mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-6 bg-[#D4AF37]" />
            <span className="text-[12px] font-black uppercase tracking-[0.8em] text-[#D4AF37]">
              Industrial Scale
            </span>
            <div className="h-[1px] w-6 bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-serif font-black text-primary leading-[1.1] uppercase tracking-tighter"
          >
            Core Institutional <br />
            <span className="text-white bg-[#D4AF37] px-4 py-1 inline-block mt-3 transform -skew-x-12">
              Capabilities
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl text-[rgba(10,20,40,0.4)] mt-10 text-[13px] uppercase font-black tracking-[0.25em] leading-relaxed"
          >
            Pioneering Grade-A Logistics Infrastructure <br /> with Global Performance Standards.
          </motion.p>
        </div>

        {/* items-stretch (Tailwind default for grid) makes every cell the same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {services.map((service, i) => (
            <PortfolioCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}