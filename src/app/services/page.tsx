"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { Building2, Hammer, ShieldCheck, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import development from "../../assets/land-acq-img-2.webp"
import banner from "../../assets/logistics_connectivi_3093625c.jpg"
import assets from "../../assets/assetmanagement.webp"
const detailedServices = [
  {
    id: "land",
    title: "Land Owners",
    icon: Building2,
    description: "Intelligence-led sourcing of high-yield industrial locations. We secure the foundation for institutional assets through proprietary data models and rigorous governance protocols.",
    details: [
      "Multi-parameter Site Intelligence",
      "Institutional Due Diligence",
      "Title Absolute Governance",
      "Strategic Corridor Valuation"
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "dev",
    title: "Integrated Development Management",
    icon: Hammer,
    description: "Comprehensive lifecycle governance from greenfield to stabilized yield. We deliver precision engineering and statutory mastery to ensure Grade-A institutional compliance.",
    details: [
      "Institutional Master Planning",
      "Statutory Mastery & Compliance",
      "Precision Quality Assurance",
      "Lifecycle Risk Mitigation"
    ],
    image: development,
  },
  {
    id: "alliance",
    title: "Institutional Strategic Alliance",
    description: "Building high-performance ecosystems through global partnerships. We align with institutional investors and logistics leaders to deliver scalable industrial platforms.",
    icon: ShieldCheck,
    details: [
      "Global Investor Alignment",
      "Logistics Network Synergy",
      "Scalable Platform Engineering",
      "Ecosystem Value Creation"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "asset",
    title: "High-Performance Asset Management",
    description: "Maximizing capital performance through proactive asset governance. We ensure long-term value preservation and operational throughput for Grade-A industrial portfolios.",
    icon: Users,
    details: [
      "Yield Performance Monitoring",
      "Operational Throughput Audit",
      "Value-Add CapEx Strategy",
      "Institutional Compliance Reporting"
    ],
    image: assets,
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      
      
      {/* 1. Page Header */}
      <section className="relative pt-60 pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 z-0">
    <Image 
      src={banner}
      alt="service Background"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-primary via-[rgba(10,20,40,0.8)] to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,40,0.6)] via-transparent to-transparent" />
  </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgba(212,175,55,0.1)] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pill-tag text-white border-white/10 bg-white/5 mb-8"
          >
            Our Expertise
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-none uppercase tracking-tighter"
          >
            Industrial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">Capabilities</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 font-sans font-medium max-w-2xl mt-8 leading-relaxed"
          >
            Engineering excellence and strategic intelligence across the entire industrial real estate lifecycle.
          </motion.p>
        </div>
      </section>

      {/* 2. Services List */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-40">
            {detailedServices.map((service, index) => (
                <div 
                    key={service.title} 
                    id={service.id}
                    className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-24 items-center`}
                >
                    <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 relative rounded-[3rem] overflow-hidden aspect-[16/10] shadow-2xl group border border-gray-100"
                    >
                        <Image 
                            src={service.image} 
                            alt={service.title} 
                            fill 
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="group-hover:scale-105 transition-transform duration-1000 " 
                        />
                        <div className="absolute inset-0 bg-[rgba(10,20,40,0.2)] transition-colors group-hover:bg-[rgba(10,20,40,0.05)]" />
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-10"
                    >
                        <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center text-primary group hover:bg-primary hover:text-white transition-all shadow-sm">
                            <service.icon size={28} />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary uppercase tracking-tighter leading-tight">
                            {service.title}
                        </h2>
                        <p className="text-lg md:text-xl text-[rgba(10,20,40,0.6)] font-medium leading-relaxed">
                            {service.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 pt-4">
                            {service.details.map((detail, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                                    <span className="text-[rgba(10,20,40,0.7)] font-bold text-sm leading-tight">{detail}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="pt-10">
                            <Link 
                                href="/contact"
                                className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-white rounded-xl font-sans font-black text-[10px] uppercase tracking-widest hover:bg-accent transition-all shadow-xl shadow-[rgba(10,20,40,0.2)]"
                            >
                                Start Your Project <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                            </Link>
                        </div>
                        
                    </motion.div>
                </div>
            ))}
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
