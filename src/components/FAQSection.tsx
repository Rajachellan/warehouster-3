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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pill-tag mb-6"
          >
            Insights & Support
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight uppercase tracking-tighter italic">
            Common Inquiries
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`border rounded-3xl transition-all duration-300 ${
                openIndex === i ? 'border-accent bg-gray-50 shadow-lg' : 'border-gray-100 bg-white hover:border-accent/40'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-7 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-serif font-black transition-colors ${openIndex === i ? 'text-accent' : 'text-primary'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-accent text-primary rotate-180' : 'bg-gray-100 text-primary group-hover:bg-accent/10'}`}>
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-primary/60 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
