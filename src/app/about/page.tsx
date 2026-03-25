"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";
import { Users, Target, Rocket, Award } from "lucide-react";

const timeline = [
  { year: "2015", title: "Founding", desc: "Warehouster established with a vision to digitize industrial space." },
  { year: "2018", title: "Scale Up", desc: "Reached 2M Sq Ft of developed space across 5 major cities." },
  { year: "2021", title: "Tech Integration", desc: "Launched proprietary warehouse management & tracking AI." },
  { year: "2024", title: "Market Leader", desc: "Recognized as the fastest growing logistics infrastructure player." },
];

const team = [
  { name: "John Doe", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" },
  { name: "Jane Smith", role: "Head of Operations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop" },
  { name: "David Chen", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-48 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-black text-white mb-6 uppercase tracking-tight"
            >
                Our <span className="text-accent">Story</span>
            </motion.h1>
            <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
                We are more than just a warehousing company. We are architects of the modern supply chain, building the bridges between production and consumption.
            </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden h-[600px] shadow-2xl"
            >
                <Image 
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop" 
                    alt="Warehouster Facility" 
                    fill 
                    className="object-cover"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-8 leading-tight">
                    Infrastucture That <span className="text-accent underline decoration-4 underline-offset-8">Drives</span> Global Commerce
                </h2>
                <div className="space-y-6 text-primary/70 font-medium text-lg">
                    <p>
                        Founded in 2015, Warehouster was born from a simple observation: the world was moving faster than the physical spaces that supported it. As e-ommerce and manufacturing evolved, warehousing remained stagnant.
                    </p>
                    <p>
                        We set out to change that by integrating advanced automation, sustainable building practices, and data-driven site selection into every project we undertake. Today, we manage over 12 million square feet of Grade-A industrial space.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mt-12">
                   <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                            <Rocket size={24} />
                        </div>
                        <span className="font-display font-black text-primary">Mission First</span>
                   </div>
                   <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                            <Users size={24} />
                        </div>
                        <span className="font-display font-black text-primary">Expert Team</span>
                   </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Animated Timeline */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className="text-4xl font-display font-black text-primary uppercase tracking-tighter">Evolution of <span className="text-accent">Excellence</span></h2>
            </div>
            
            <div className="relative">
                {/* Horizontal Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/5 -translate-y-1/2 hidden lg:block" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {timeline.map((item, index) => (
                        <motion.div 
                            key={item.year}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center lg:items-start group"
                        >
                            <div className="text-6xl font-display font-black text-accent mb-4 opacity-20 group-hover:opacity-100 transition-opacity">{item.year}</div>
                            <div className="w-6 h-6 rounded-full bg-primary mb-6 border-4 border-white shadow-lg z-10 hidden lg:block" />
                            <h3 className="text-2xl font-display font-black text-primary mb-4">{item.title}</h3>
                            <p className="text-primary/60 font-medium leading-relaxed text-center lg:text-left">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <StatsSection />

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-black text-primary uppercase tracking-tighter">The <span className="text-accent underline decoration-4 underline-offset-8">Visionaries</span> Behind Warehouster</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
                {team.map((member, index) => (
                    <motion.div 
                        key={member.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group"
                    >
                        <div className="relative h-96 rounded-3xl overflow-hidden mb-6 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700">
                             <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h4 className="text-2xl font-display font-black text-primary uppercase tracking-tighter">{member.name}</h4>
                        <p className="text-accent font-black text-sm uppercase tracking-[0.2em]">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
