"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What core services does Warehouster provide?",
    answer: "We offer end-to-end industrial real estate solutions including strategic land acquisition, development management, Grade-A warehouse construction, and industrial consulting.",
  },
  {
    question: "How does the land acquisition process work with your team?",
    answer: "Our team uses multi-parameter data intelligence to source high-yield locations, ensuring regulatory compliance, title clarity, and strategic accessibility for logistics optimization.",
  },
  {
    question: "Do you manage external warehouse projects or only your own?",
    answer: "We offer comprehensive Development Management services for external clients, ensuring institutional-grade standards across design, construction, and property management.",
  },
  {
    question: "How can I contact your investment or leasing team?",
    answer: "You can reach out via our contact form below, email us at hello@warehouster.com, or visit our headquarters in BKC, Mumbai for a strategic consultation.",
  },
   {
    question: "Where are Warehouster logistics parks located?",
    answer: "Warehouster operates across key industrial and economic corridors in South India, including Chennai, Bengaluru, Hosur, and Madurai. These strategic locations ensure seamless connectivity to ports, highways, and major manufacturing hubs.",
  },
   {
    question: "What makes your industrial parks 'Grade A' standard?",
    answer: "Our parks feature institutional-grade infrastructure, including clear heights up to 40ft, 150mm floor load capacity, 100% power backup, advanced fire safety systems, and 24/7 security. The parks are designed to meet global sustainability standards with green building certifications.",
  },
   {
    question: "Do you provide built-to-suit warehouse solutions?",
    answer: "Yes, Warehouster offers customized built-to-suit (BTS) warehouse solutions tailored to your business requirements. We design and develop facilities based on your operational needs, ensuring maximum efficiency, scalability, and long-term value.",
  },
   {
    question: "Which industries do you serve?",
    answer: "We cater to a wide range of industries, including e-commerce, retail, FMCG, automotive, manufacturing, pharmaceuticals, and third-party logistics (3PL) providers. Our warehouses are designed to support diverse industry requirements.",
  },
     {
    question: "Are your warehouses compliant with safety and regulatory standards?",
    answer: "Yes, all Warehouster facilities are built in compliance with national and international safety standards. This includes fire safety systems, structural integrity, environmental considerations, and regulatory approvals..",
  },
     {
    question: "Do you offer scalable warehouse spaces for growing businesses?",
    answer: "Absolutely. Warehouster provides flexible and scalable warehouse solutions that can expand as your business grows. Our infrastructure is designed to support both current and future operational needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)', backgroundSize: '120px 120px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          
          {/* Left Column: Institutional Header */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-6 mb-12"
              >
                <div className="h-[1px] w-12 bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent">
                  Support Center
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif font-black text-primary leading-[0.95] uppercase tracking-tighter mb-12"
              >
                Common <br />
                <span className="text-accent underline decoration-accent/10 underline-offset-[16px] decoration-1">
                  Inquiries
                </span>
              </motion.h2>

              <div className="flex flex-col gap-10">
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    className="w-[1.5px] h-24 bg-gradient-to-b from-accent/40 via-accent/5 to-transparent origin-top hidden lg:block"
                />
                
                <div className="max-w-xs">
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary/30 leading-relaxed">
                    Access deep-dive technical insights into our <br/>
                    institutional development and <br/>
                    transaction protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Accordion Cards */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={`group border-l-[3px] transition-all duration-500 overflow-hidden ${
                    openIndex === i 
                    ? 'border-accent bg-[#F9FAFB] shadow-xl shadow-accent/5' 
                    : 'border-transparent bg-white hover:bg-gray-50/50 hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full px-10 py-10 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-8">
                       <span className={`text-[11px] font-black tracking-widest transition-colors ${openIndex === i ? 'text-accent' : 'text-primary/10'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-base md:text-lg font-sans font-bold uppercase tracking-wide transition-all duration-300 ${openIndex === i ? 'text-primary' : 'text-primary/70 group-hover:text-primary'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      openIndex === i 
                      ? 'border-accent bg-accent text-white rotate-180' 
                      : 'border-gray-100 text-gray-300 group-hover:border-accent/40 group-hover:text-accent'
                    }`}>
                        {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-10 pb-10 ml-12 border-t border-gray-100/50 pt-8 mt-2">
                          <p className="text-primary/50 text-[13px] font-medium leading-[1.8] tracking-wide uppercase max-w-xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
