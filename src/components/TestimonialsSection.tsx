"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Khanna",
    role: "COO, Global Logistics Corp",
    content: "Warehouster transformed our distribution strategy. Their strategic locations and tech-first approach reduced our turnaround time by 30%.",
    stars: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Director, E-com Giant",
    content: "The built-to-suit solution provided by Warehouster was exactly what we needed. Highly professional and efficient team.",
    stars: 5
  },
  {
    name: "Amitabh Shah",
    role: "CEO, Industrial Ventures",
    content: "Their transparency and adherence to timelines is refreshing. The compliance support made our entry into the market seamless.",
    stars: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black text-primary"
          >
            What Our <span className="text-accent">Partners</span> Say
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-accent mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/40 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/5 group-hover:text-accent/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-primary/70 font-medium leading-relaxed italic mb-8 text-lg">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-black text-xl">
                    {t.name[0]}
                 </div>
                 <div>
                    <h4 className="font-display font-black text-primary leading-tight">{t.name}</h4>
                    <p className="text-primary/40 font-bold text-xs uppercase tracking-widest">{t.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
