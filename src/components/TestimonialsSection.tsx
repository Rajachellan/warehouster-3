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
    <section className="py-32 bg-[#fafafa] relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[rgba(212,175,55,0.1)] rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[rgba(10,20,40,0.1)] rounded-full blur-[120px]" />
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter"
          >
            What Our <span className="text-accent underline decoration-accent/20 decoration-8 underline-offset-8">Partners</span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-[rgba(10,20,40,0.4)] font-bold uppercase tracking-[0.4em]"
          >
            Voice of Excellence
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.05)] relative group hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-12 w-16 h-1 w-0 group-hover:w-20 bg-accent transition-all duration-700 rounded-full" />
              
              <Quote className="absolute top-12 right-12 w-16 h-16 text-[rgba(10,20,40,0.05)] group-hover:text-[rgba(212,175,55,0.1)] transition-colors duration-500" />
              
              <div className="flex gap-1.5 mb-8">
                {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-[rgba(10,20,40,0.7)] font-medium leading-[1.8] mb-12 text-xl">
                "{t.content}"
              </p>

              <div className="flex items-center gap-6 mt-auto">
                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[rgba(10,20,40,0.8)] flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-[rgba(10,20,40,0.2)] rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    {t.name[0]}
                 </div>
                 <div>
                    <h4 className="font-display font-black text-primary text-xl leading-tight">{t.name}</h4>
                    <p className="text-accent font-black text-xs uppercase tracking-widest mt-1.5">{t.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
