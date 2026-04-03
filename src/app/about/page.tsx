"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import JourneySection from "@/components/JourneySection";
import Image from "next/image";
import { Users, Target, Rocket, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import banner from "../../assets/warehouse-about.jpg"
import sandeep from "../../assets/Sandeep.webp"
import kanadhasan from "../../assets/kannadhassun.webp"
import kaushik from "../../assets/kaushik-vora-removebg-preview.webp"
import debi from "../../assets/debisarangi1removebgpreview.webp"
import divyash from "../../assets/divyansh.webp"
import Aboutsection from "./About_us"
import VisionMission from "./VisionMission"
import DevelopmentProcess from "./DevelopmentProcess"
import Leadership from "./leadership"
import Summary from "../../components/Summary"
import CompetitivePositioning from "@/components/CompetitivePositioning";

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
      <Navbar />

      {/* 1. Header Section */}
      <section className="relative pt-60 pb-32 bg-primary overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={banner}
            alt="Warehousing Infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />

          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/20 to-transparent" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">
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

      <VisionMission />
      <DevelopmentProcess />
      
      {/* 2. Competitive Positioning Section */}
      <CompetitivePositioning />

      <Summary />
      <JourneySection />

      {/* 3. CEO Profile: Executive Balance */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Elite Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl z-10 border border-gray-100 rounded-sm bg-gray-50">
                <Image
                  src={sandeep}
                  alt="Sandeep Chadha"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Minimalist Gold Detail */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#D4AF37]/30 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-48 h-[2px] bg-[#D4AF37] pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-[2px] h-48 bg-[#D4AF37] pointer-events-none" />
            </motion.div>

            {/* Right: Executive Narrative */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-10 bg-[#D4AF37]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">Foundational Vision</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-black text-primary uppercase tracking-tighter leading-[1.1]">
                  Architecting <br />
                  <span className="text-[#D4AF37]">India&apos;s Industrial Evolution</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <p className="text-[15px] text-primary/60 font-medium leading-relaxed text-justify tracking-tight max-w-xl">
                  Sandeep Chadha brings 20+ years of sector-leading experience in managing and exiting warehousing portfolios to global institutional investors like Blackstone.
                </p>
                <p className="text-[15px] text-primary/60 font-medium leading-relaxed text-justify tracking-tight max-w-xl">
                  As the strategist behind Warehouster Capital, he has built a scaled platform for the acquisition and management of high-performance logistics assets across India. A Cornell Alumnus and former CEO of All Cargo Logistics Parks.
                </p>

                <div className="pt-6 flex flex-col gap-1 border-t border-gray-50">
                  <h3 className="text-2xl font-serif font-black text-primary uppercase tracking-tighter">Sandeep Chadha</h3>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">Founder & Managing Director</span>
                </div>
              </motion.div>

              {/* Balanced Stats */}
              <div className="grid grid-cols-2 gap-10 pt-10 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-serif font-black text-primary mb-1">20+</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37]">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-black text-primary mb-1">10M+</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37]">Sq. Ft. Asset Base</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Leadership />

      {/* 4. Purpose Section */}
      <section id="purpose" className="py-24 bg-white flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight uppercase tracking-tighter mb-10">
            Driven by <span className="text-accent">Purpose</span>
          </h2>
          <p className="text-lg md:text-xl text-primary/60 font-medium leading-relaxed mb-16">
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
