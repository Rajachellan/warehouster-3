"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { Users, Target, Rocket, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import banner from "../../assets/park-exterior.webp"
import sandeep from "../../assets/Sandeep.webp"
import kanadhasan from "../../assets/kannadhassun.webp"
import kaushik from "../../assets/kaushik-vora-removebg-preview.webp"
import debi from "../../assets/debisarangi1removebgpreview.webp"
import divyash from "../../assets/divyansh.webp"
const team = [
  {
    name: "Kannadhassun",
    role: "Head Const & Projects",
    image: kanadhasan,
  },
  {
    name: "Kaushik Vora",
    role: "Investments",
    image: kaushik,
  },
  {
    name: "Divyansh Jain",
    role: "Leasing & Asset Management",
    image: divyash,
  },
   {
    name: "Debi Sarangi",
    role: "Head Legal",
    image: debi,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
     
      
      {/* 1. Header Section */}
     <section className="relative pt-60 pb-32 bg-primary overflow-hidden">
  
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src= {banner}
      alt="Warehousing Infrastructure"
      fill
      priority
      className="object-cover opacity-30"
    />
    
    {/* Dark Overlay for readability */}
    <div className="absolute inset-0 bg-primary/50" />
  </div>

  {/* Glow Effect */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />

  {/* Content */}
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pill-tag border-accent/30 text-accent bg-accent/5 mb-8"
    >
      About Warehouster
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-serif font-black text-white leading-none uppercase tracking-tighter"
    >
      Defining the <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white italic">
        Industrial
      </span> Edge
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl text-white/50 font-sans font-medium max-w-3xl mt-12 leading-relaxed"
    >
      Delivering premium warehouse and logistics solutions across South India with a focus on quality, scalability, and strategic locations.
    </motion.p>

  </div>
</section>

      {/* ... rest of the content ... */}
      <section id="overview" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-24 items-center"
          >
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                alt="Warehouster Facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                 <p className="text-white font-serif italic text-xl">&quot;We don&apos;t just build warehouses; we architect the growth corridors of a rising nation.&quot;</p>
                 <div className="mt-4 text-accent font-black text-[10px] uppercase tracking-widest">— Sandeep Chadha, CEO</div>
              </div>
            </div>
            <div className="space-y-12">
                <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight uppercase tracking-tighter italic">
                    Our Strategic <br />
                    <span className="not-italic text-accent">Commitment</span>
                </h2>
                <div className="space-y-8">
                    {[
                        { icon: Target, title: "Mission", desc: "To deliver smart, scalable, and reliable warehouse solutions through innovation and expertise, empowering businesses to grow with confidence." },
                        { icon: Rocket, title: "Vision", desc: "To redefine warehouse and industrial space access through a seamless, technology-driven ecosystem that enhances efficiency and transparency." },
                        { icon: Award, title: "Quality", desc: "Zero-compromise structural integrity and operational efficiency across 50+ locations." },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-8 group">
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                                <item.icon size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-black text-primary uppercase tracking-tight mb-2 italic">{item.title}</h4>
                                <p className="text-primary/50 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      {/* CEO Profile Section */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Image with Premium Frame */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl z-10 transition-all duration-1000">
                <Image 
                  src={sandeep}
                  alt="Sandeep Chadha"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-accent/30 rounded-tl-[4rem] pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>

            {/* Right: Content */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="pill-tag border-accent/20 text-accent bg-accent/5 mb-8">
                   Founder&apos;s Vision
                </div>
                <h2 className="text-5xl font-serif font-black text-primary uppercase tracking-tighter leading-tight italic">
                  Architecting <br />
                  <span className="not-italic text-accent">India&apos;s Industrial Evolution</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6 text-md text-justify text-primary/60 font-medium leading-relaxed"
              >
                <p>
                 Sandeep has 20+ years of leadership experience in real estate sector with a track record of managing and exiting a warehousing portfolio to Blackstone and 4 Private REIT funds. He successfully developed the warehousing business for All cargo and Milestone Capital in the capacity of CEO and Senior Partner. He founded Warehouster Capital in 2019 – an Integrated solution provider for the acquisition, development and management of logistics asset in India. 
                </p>
                <p>
                  The company not only owns logistics assets in India but also suitably positioned to partner with international investors in managing their asset portfolios. Prior to this, Sandeep was the CEO of All Cargo Logistics Parks and from 2014-2017 Partner for Milestone Capital. He holds a postgraduate degree from Ivy league Cornell University fand a B.E. in Production & Industrial Engineering from Delhi University
                </p>
                <div className="pt-8 flex flex-col gap-2">
                   <span className="text-3xl font-serif font-black text-primary italic uppercase tracking-tight">Sandeep Chadha</span>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Founder & Managing Director</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pt-12 grid grid-cols-2 gap-12 border-t border-gray-100"
              >
                 <div>
                    <div className="text-4xl font-serif font-black text-primary italic mb-2">20+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/30">Years Experience</div>
                 </div>
                 <div>
                    <div className="text-4xl font-serif font-black text-primary italic mb-2">10M+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/30">Sq. Ft. Delivered</div>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership Section */}
      <section id="leadership" className="py-32 bg-gray-50 overflow-hidden relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pill-tag border-accent/20 text-accent bg-accent/5 mb-8 mx-auto"
          >
            Visionaries
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-primary mb-24 uppercase tracking-tighter italic">
            Strategic <span className="not-italic text-accent">Leadership</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors mb-2 italic">{member.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Purpose Section */}
      <section id="purpose" className="py-32 bg-white flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto px-6">
             <h2 className="text-5xl md:text-7xl font-serif font-black text-primary leading-tight uppercase tracking-tighter mb-10 italic">
                Driven by <span className="not-italic text-accent">Purpose</span>
             </h2>
             <p className="text-xl md:text-2xl text-primary/60 font-medium leading-relaxed mb-16">
                We believe in creating high-performance environments that don&apos;t just house goods, but fuel the economic engines of tomorrow. Through transparency, innovation, and unwavering integrity.
             </p>
             <Link 
                href="/careers" 
                className="group inline-flex items-center gap-6 px-14 py-6 bg-primary text-white rounded-[2rem] font-sans font-black text-[11px] uppercase tracking-widest hover:bg-accent transition-all shadow-3xl shadow-primary/20"
              >
                Join the Evolution <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform text-accent" />
             </Link>
          </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
