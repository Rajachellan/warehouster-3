"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Settings, Warehouse, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Land Acquisition",
    description: "Expert identification and procurement of prime industrial land for development.",
    icon: Building2,
    color: "bg-blue-500",
  },
  {
    title: "Approvals & Compliance",
    description: "Navigating complex regulatory frameworks to ensure seamless legal approval.",
    icon: ShieldCheck,
    color: "bg-orange-500",
  },
  {
    title: "Development Management",
    description: "End-to-end oversight of warehouse construction and infrastructure projects.",
    icon: Settings,
    color: "bg-indigo-500",
  },
  {
    title: "Strategic Warehousing",
    description: "Localized and scalable storage solutions optimized for distribution efficiency.",
    icon: Warehouse,
    color: "bg-emerald-500",
  },
  {
    title: "Asset Management",
    description: "Maximizing ROI through professional maintenance and strategic leasing.",
    icon: BarChart3,
    color: "bg-rose-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-50 rounded-bl-[10rem] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-black tracking-widest uppercase text-sm mb-4 block"
          >
            Our Core Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary leading-tight"
          >
            Integrated <span className="text-accent">Logistics</span> Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-primary/60 max-w-3xl mx-auto font-medium"
          >
            We provide comprehensive, tech-enabled infrastructure solutions that power the global supply chain.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </div>

              <h3 className="text-2xl font-display font-black text-primary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                {service.title}
              </h3>
              
              <p className="text-primary/60 font-medium leading-relaxed mb-8">
                {service.description}
              </p>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-black text-primary group-hover:text-accent transition-colors tracking-tight"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}

          {/* Featured CTA Card */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="p-10 rounded-3xl bg-primary text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div>
                 <h3 className="text-3xl font-display font-black mb-4">Request a <span className="text-accent">Custom</span> Build</h3>
                 <p className="text-white/70 font-medium mb-8">Have unique requirements? We specialize in built-to-suit warehousing solutions.</p>
            </div>
            <Link
                href="/contact"
                className="w-full py-4 rounded-xl bg-accent text-white font-black text-center hover:bg-white hover:text-primary transition-all shadow-lg"
              >
                Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
