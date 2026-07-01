"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import JourneySection from "@/components/JourneySection";
import Image from "next/image";
import { ArrowRight, ChevronRight, Activity, Zap, Building2, Globe } from "lucide-react";
import Link from "next/link";
import banner from "../../assets/warehouse-about.jpg";
import sandeep from "../../assets/Sandeep.webp";
import VisionMission from "./VisionMission";
import DevelopmentProcess from "./DevelopmentProcess";
import Leadership from "./leadership";
import Summary from "../../components/Summary";
import CompetitivePositioning from "@/components/CompetitivePositioning";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. INSTITUTIONAL HERO */}
      <section id="overview" className="relative pt-64 pb-40 bg-primary overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={banner}
            alt="Warehousing Infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 "
          />

          {/* Right Side Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-[rgba(10,20,40,0.6)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,40,0.3)] via-transparent to-transparent" />

        
         
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Left aligned container */}
          <div className="max-w-4xl text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pill-tag border-primary/15 text-primary/60 bg-primary/[0.03] mb-10 w-fit"
            >
              Institutional Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl  font-serif font-black text-white  max-w-2xl"
            >
              Warehouster is a next-generation industrial and logistics real
              estate platform focused on developing

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white/70">
                Grade-A warehousing
              </span>{" "}
              and industrial infrastructure.
            </motion.h1>

            <div className="grid lg:grid-cols-2 gap-12 mt-5 items-start">

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/60 font-sans leading-relaxed"
              >
                Warehouster is a next-generation industrial real estate platform
                focused on developing Grade-A assets that define the future of
                India&apos;s global supply chain.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1rem] p-5 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/30" />

                <p className="text-white text-xl font-serif leading-tight italic mb-4">
                  &ldquo;We don&apos;t just build sheds. We engineer structured
                  industrial ecosystems.&rdquo;
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <div className="h-px w-8 bg-[rgba(212,175,55,0.5)]" />

                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary/40">
                    Core Philosophy
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION */}
      <VisionMission />

    
      {/* 4. DEVELOPMENT MODEL */}
      <DevelopmentProcess />

      {/* 5. COMPETITIVE EDGE */}
      <CompetitivePositioning />
         {/* 7. JOURNEY & SUMMARY */}
      <JourneySection />
  {/* 3. CORE STRATEGY: THE FOUNDER */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left: Executive Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl z-10 border border-gray-100 bg-gray-50">
                <Image
                  src={sandeep}
                  alt="Sandeep Chadha"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-[rgba(212,175,55,0.2)] rounded-tl-[4rem] pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[rgba(212,175,55,0.05)] rounded-full blur-[80px] -z-10" />
            </motion.div>

            {/* Right: Narrative */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-primary/20" />
                  <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/40">Strategic Leadership</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-primary uppercase  leading-[0.9]">
                  Architecting <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[rgba(10,20,40,0.7)]">Industrial Excellence</span>
                </h2>
              </motion.div>

              <div className="space-y-8">
                <p className="text-lg text-[rgba(10,20,40,0.6)] font-medium leading-relaxed max-w-xl">
                  Sandeep Chadha brings 20+ years of sector-leading experience in managing and exiting warehousing portfolios to global institutional investors like Blackstone.
                </p>
                <p className="text-lg text-[rgba(10,20,40,0.6)] font-medium leading-relaxed max-w-xl">
                  As the strategist behind Warehouster Capital, he has built a scaled platform for the acquisition and management of high-performance logistics assets across India. A Cornell Alumnus and former CEO of All Cargo Logistics Parks.
                </p>

                <div className="pt-10 flex flex-col gap-2 border-t border-gray-100">
                  <h3 className="text-3xl font-serif font-black text-primary uppercase tracking-tighter">Sandeep Chadha</h3>
                  <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/40">Founder & Managing Director</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-gray-100">
                <div>
                  <div className="text-4xl font-serif font-black text-primary mb-2 tracking-tighter">20+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[rgba(10,20,40,0.3)]">Years Sector Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-black text-primary mb-2 tracking-tighter">12Mn+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[rgba(10,20,40,0.3)]">Sq. Ft. Asset Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEAM EXERTION */}
      <Leadership />

   
      <Summary />

      {/* 8. FINAL PURPOSE CTA */}
      <section id="purpose" className="py-40 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0A1428_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex flex-col items-center gap-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl mb-4">
              <Activity className="text-primary" size={28} />
            </div>

            <h2 className="text-5xl md:text-8xl font-serif font-black text-primary leading-[0.85] uppercase tracking-tighter">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[rgba(212,175,55,0.4)]">Purpose</span>
            </h2>

            <p className="text-xl md:text-2xl text-[rgba(10,20,40,0.5)] font-serif leading-relaxed max-w-2xl mb-12">
              &ldquo;We create high-performance environments that don&apos;t just house goods, but fuel the economic engines of tomorrow.&rdquo;
            </p>

            <Link
              href="/careers"
              className="group inline-flex items-center gap-8 px-16 py-7 bg-primary text-white rounded-[2.5rem] font-sans font-black text-[12px] uppercase tracking-[0.4em] hover:bg-accent transition-all shadow-2xl shadow-[rgba(10,20,40,0.2)]"
            >
              Join the Evolution <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
