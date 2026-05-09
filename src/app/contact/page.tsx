"use client";

// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import banner from "../../assets/bmi-strategic-alliance-banner.webp"
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">



      
      {/* Header */}
      <section className="relative pt-60 pb-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src={banner}
              alt="Land Acquisition Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-[rgba(10,20,40,0.9)] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,40,0.8)] via-transparent to-transparent" />
          </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgba(212,175,55,0.05)] -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pill-tag border-[rgba(212,175,55,0.2)] text-accent bg-[rgba(212,175,55,0.05)] mb-6"
          >
            Global Reach
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-none uppercase tracking-tighter">
            Contact <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">Warehouster</span>
          </h1>
        </div>
      </section>

      {/* Unified Contact Form Section */}
      <ContactSection />

      <Footer />
    </main>
  );
}
