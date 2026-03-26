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
            className="mt-10 text-xl text-primary/70 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We approach things with a unique perspective, actively seek opportunities with a flexible team, and strive to deliver exceptional value to our customers, partners, and employees.
          </motion.p>
        </div>

        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="w-64 h-64 rounded-full p-2 bg-gradient-to-tr from-accent to-primary shadow-2xl relative z-10 overflow-hidden">
               <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                  {/* Since image is missing in project, using a placeholder that user can replace */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-primary/20">
                    <span className="font-display font-black text-4xl">SC</span>
                  </div>
                  <Image 
                    src={sandeep}
                    alt="Sandeep Chadha" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
               </div>
            </div>
            {/* Decorative Rings */}
            <div className="absolute inset-0 border-4 border-accent/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-700 animate-pulse" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <h3 className="text-3xl font-display font-black text-primary">Sandeep Chadha</h3>
            <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mt-2">Founder and CEO</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 max-w-4xl bg-gray-50 p-12 rounded-[3rem] border border-gray-100 shadow-xl relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
               <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
            </div>
            <p className="text-lg text-primary/80 leading-loose text-center font-medium">
              Sandeep has 20+ years of leadership experience in real estate sector with a track record of managing and exiting a warehousing portfolio to Blackstone and 4 Private REIT funds. He successfully developed the warehousing business for All cargo and Milestone Capital in the capacity of CEO and Senior Partner. He founded Warehouster Capital in 2019 - an Integrated solution provider for the acquisition, development and management of logistics asset in India. The company not only owns logistics assets in India but also suitably positioned to partner with international investors in managing their asset portfolios. Prior to this, Sandeep was the CEO of All Cargo Logistics Parks and from 2014-2017 Partner for Milestone Capital. He holds a postgraduate degree from Ivy league Cornell University and a B.E. in Production & Industrial Engineering from Delhi University.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
