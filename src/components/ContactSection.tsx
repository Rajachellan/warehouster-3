"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0A1428] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="pill-tag mb-6 border-white/10 bg-white/5 text-accent"
              >
                Let&apos;s Connect
              </motion.p>
              <h2 className="text-4xl  font-serif font-black text-white leading-tight uppercase ">
                Architecture  <br />Your Next <br />
                <span className="text-accent">Logistics Consultation</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Direct Line</p>
                  <p className="text-md font-bold text-white/70 transition-colors group-hover:text-accent">+91 95600 11696</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Email Inquiry</p>
                  <p className="text-md font-bold text-white/70 transition-colors group-hover:text-accent">info@warehouster.com</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Corporate Office</p>
                  <p className="text-md font-bold text-white/70 transition-colors group-hover:text-accent">Warehouster <br />
                    3rd Floor, 17, 3rd Cross Street East, <br />
                    Venkatasamy Nagar, Shenoy Nagar, <br />
                    Chennai,
                    Tamil Nadu 600030</p>
                </div>
              </div>
            </div>

            {/* Simple Map Embed Placeholder */}
            <div className="relative h-64 rounded-3xl overflow-hidden opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-white/10 shadow-3xl">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3289330705243!2d80.2273242!3d13.078327700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266819aa33a49%3A0xb98be2b3e8fb4cce!2s3rd%20Floor%2C%2017%2C%203rd%20Cross%20St%20E%2C%20Venkatasamy%20Nagar%2C%20Shenoy%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600030%2C%20India!5e0!3m2!1sen!2suk!4v1774606432597!5m2!1sen!2suk" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-12 rounded-[3.5rem] shadow-3xl flex flex-col"
          >
            <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <MessageSquare size={14} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Send a Detailed Message</h3>
            </div>

            <form className="space-y-6 flex-grow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white ml-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all" placeholder="Name"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white ml-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all" placeholder="your@gamil.com"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white ml-2">Mobile Number</label>
                <input type="number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all" placeholder="+91 xxxxx xxxxx"/>
              </div>
              <div className="space-y-2">
  <label className="text-[10px] font-black uppercase tracking-widest text-white ml-2">Type of Enquiry</label>
  <div className="relative">
    <select 
      defaultValue=""
      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer"
    >
      <option value="" disabled className="bg-gray-900 text-gray-400 ">Choose an option</option>
      <option value="general" className="bg-gray-900 text-white">Leasing</option>
      <option value="support" className="bg-gray-900 text-white">Land & Warehouse Investments</option>
      <option value="billing" className="bg-gray-900 text-white">HR & Admin</option>
      <option value="feedback" className="bg-gray-900 text-white">Media / Marketing</option>
      <option value="other" className="bg-gray-900 text-white">Projects & Development</option>
    </select>
    {/* Custom chevron icon */}
    <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
      <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>
              <div className="space-y-2 flex-grow flex flex-col">
                <label className="text-[10px] font-black uppercase tracking-widest text-white ml-2">Message</label>
                <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all resize-none flex-grow" placeholder="Say Something.."/>
              </div>
              <button 
                type="submit" 
                className="w-full py-6 bg-accent text-primary rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-4 hover:bg-white hover:scale-[1.02] transition-all shadow-xl shadow-accent/20 active:scale-95"
              >
                Launch Inquiry <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
