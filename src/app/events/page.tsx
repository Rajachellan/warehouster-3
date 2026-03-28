"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Logistics 4.0 Expo - Mumbai",
    date: "April 12, 2026",
    location: "Jio World Convention Centre, Mumbai",
    type: "Industry Expo",
    image: "https://images.unsplash.com/photo-1540575861501-7ad060e1c27d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Warehousing India Summit 2026",
    date: "May 05, 2026",
    location: "Vigyan Bhawan, New Delhi",
    type: "Summit",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Sustainable Infrastructure Webinar",
    date: "May 20, 2026",
    location: "Virtual / Zoom",
    type: "Webinar",
    image: "https://images.unsplash.com/photo-1475721027185-403002394123?auto=format&fit=crop&q=80&w=800",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      
      <section className="relative pt-60 pb-32 bg-primary overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pill-tag border-accent/30 text-accent bg-accent/5 mb-8"
          >
            Engagement
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-serif font-black text-white leading-none uppercase tracking-tighter">
            Industry <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white italics italic">Events</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden bg-primary"
              >
                <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    className="object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent p-12 flex flex-col justify-end">
                    <div className="mb-8">
                         <span className="px-4 py-1.5 bg-accent/90 text-primary text-[8px] font-black uppercase tracking-widest rounded-lg mb-4 inline-block">
                            {event.type}
                        </span>
                        <h2 className="text-3xl font-serif font-black text-white leading-tight mb-6">{event.title}</h2>
                        
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-widest">
                                <Calendar size={14} className="text-accent" /> {event.date}
                            </div>
                            <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest">
                                <MapPin size={14} className="text-accent" /> {event.location}
                            </div>
                        </div>
                    </div>

                    <button className="w-full py-5 rounded-2xl bg-white text-primary font-black uppercase tracking-[0.2em] text-[10px] hover:bg-accent transition-all flex items-center justify-center gap-4">
                        Register Now <ArrowRight size={14} />
                    </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
