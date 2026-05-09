"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import sandeep from "../../public/images/Sandeep.webp"
export default function ManagementSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/2 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-black text-primary tracking-tight uppercase"
          >
            Management
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-2 bg-accent mx-auto mt-6 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-xl text-[rgba(10,20,40,0.7)] max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We approach things with a unique perspective, actively seek opportunities with a flexible team, and strive to deliver exceptional value to our customers, partners, and employees.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-center">
           {/* Image Column */}
           <div className="lg:col-span-2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="w-72 h-80 rounded-[3rem] p-2 bg-gradient-to-tr from-accent to-primary shadow-2xl relative z-10 overflow-hidden">
                 <div className="w-full h-full rounded-[2.5rem] bg-white overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src={sandeep}
                      alt="Sandeep Chadha" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                 </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-[rgba(212,175,55,0.1)] rounded-full -z-10 animate-pulse" />
              <div className="absolute top-10 -left-10 text-[120px] font-black text-[rgba(10,20,40,0.05)] select-none leading-none">SC</div>
            </motion.div>
           </div>

           {/* Details Column */}
           <div className="lg:col-span-3">
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="inline-flex items-center gap-3 text-accent font-black text-xs uppercase tracking-[0.4em] mb-6">
                    <div className="w-8 h-1 bg-accent rounded-full" />
                    Leadership
                </div>
                <h3 className="text-5xl md:text-6xl font-display font-black text-primary mb-2 uppercase tracking-tighter">Sandeep Chadha</h3>
                <p className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-10">Founder and CEO</p>

                <div className="max-w-2xl">
                    <p className="text-xl text-[rgba(10,20,40,0.7)] font-medium leading-relaxed mb-10">
                        Sandeep has 20+ years of leadership in real estate, successfully managing and exiting warehousing portfolios to Blackstone and major REIT funds.
                    </p>
                    
                    <div className="space-y-6 text-[rgba(10,20,40,0.6)] font-medium leading-relaxed">
                        <p>
                            Prior to founding Warehouster in 2019, he served as CEO of All Cargo Logistics Parks and Partner at Milestone Capital. He is an alumnus of Cornell University and Delhi University.
                        </p>
                        <p>
                            His vision drives Warehouster as an integrated solution provider for the acquisition, development, and management of world-class logistics assets across India.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-8">
                        <div>
                            <div className="text-3xl font-display font-black text-primary">20+</div>
                            <div className="text-[10px] font-black text-accent uppercase tracking-widest mt-1">Years Exp</div>
                        </div>
                        <div className="w-px h-12 bg-gray-100" />
                        <div>
                            <div className="text-3xl font-display font-black text-primary">4+</div>
                            <div className="text-[10px] font-black text-accent uppercase tracking-widest mt-1">REIT Exits</div>
                        </div>
                    </div>
                </div>
            </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
