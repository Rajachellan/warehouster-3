"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { Building2, ShieldCheck, Settings, Warehouse, BarChart3, Truck, Ship, Plane } from "lucide-react";

const detailedServices = [
  {
    title: "Land Acquisition",
    icon: Building2,
    details: [
      "Strategic Site Identification",
      "Legal & Technical Due Diligence",
      "Title Search & Valuation",
      "Procurement Strategy"
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Approvals & Compliance",
    icon: ShieldCheck,
    details: [
      "Environmental Clearances",
      "Building Plan Sanctions",
      "Fire & Safety Compliances",
      "Operational Licenses"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Development Management",
    icon: Settings,
    details: [
      "Project Design & Engineering",
      "Vendor Management",
      "Quality Assurance",
      "Timely Project Delivery"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Strategic Warehousing",
    icon: Warehouse,
    details: [
      "Inventory Management",
      "Order Fulfillment",
      "Cross-Docking",
      "Cold Chain Solutions"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Asset Management",
    icon: BarChart3,
    details: [
      "Facility Maintenance",
      "Leasing Management",
      "Risk Mitigation",
      "Investment Analysis"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-48 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-accent font-black uppercase text-sm tracking-widest block mb-4"
            >
                Expertise in Action
            </motion.span>
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-display font-black text-white leading-tight uppercase tracking-tighter"
            >
                Our <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/50 font-medium max-w-3xl mt-6 leading-relaxed"
            >
                From groundbreaking site selection to high-precision asset management, we deliver end-to-end infrastructure solutions that power your commercial growth.
            </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
            {detailedServices.map((service, index) => (
                <div key={service.title} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                    <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl group"
                    >
                        <Image 
                            src={service.image} 
                            alt={service.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-primary/20 transition-colors group-hover:bg-primary/5" />
                        <div className="absolute bottom-8 left-8 flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shadow-xl">
                                <service.icon size={24} />
                            </div>
                            <span className="text-white font-display font-black text-2xl uppercase tracking-tighter backdrop-blur-sm px-4 py-1 rounded-lg">Sector {index + 1}</span>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-8 uppercase tracking-tighter leading-tight">
                            {service.title}
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {service.details.map((detail, i) => (
                                <li key={i} className="flex items-center gap-4 group">
                                    <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                                    <span className="text-primary font-bold text-lg">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            ))}
        </div>
      </section>

      {/* Additional Modes of Logistics */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
             <h3 className="text-3xl font-display font-black mb-16 uppercase tracking-[0.2em] text-white/50">Multi-Modal Logistics Integration</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                    { title: "Road Logistics", icon: Truck, count: "5000+ Vehicles" },
                    { title: "Sea Freight", icon: Ship, count: "12 Global Ports" },
                    { title: "Air Cargo", icon: Plane, count: "Fast Delivery" }
                 ].map((mode, i) => (
                    <motion.div 
                        key={mode.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col items-center group cursor-default"
                    >
                        <mode.icon size={64} className="text-accent mb-8 group-hover:-translate-y-2 transition-transform" />
                        <h4 className="text-2xl font-display font-black mb-2">{mode.title}</h4>
                        <p className="font-bold text-accent">{mode.count}</p>
                    </motion.div>
                 ))}
             </div>
         </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
