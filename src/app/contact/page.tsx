"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Premium Header */}
      <section className="relative pt-48 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs uppercase tracking-[0.4em] mb-10 backdrop-blur-md"
            >
                <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                Contact Our Experts
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-display font-black text-white leading-none uppercase tracking-tighter"
            >
                Connect with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white underline decoration-accent/20 decoration-8 underline-offset-8">Warehouster</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-white/50 font-medium max-w-3xl mx-auto mt-12 leading-relaxed"
            >
                Strategic infrastructure and intelligence-driven logistics management at your fingertips.
            </motion.p>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-20">
                {/* Contact Info Col */}
                <div className="lg:col-span-2 space-y-16">
                    <div>
                        <h2 className="text-4xl font-display font-black text-primary mb-12 uppercase tracking-tighter">Office Locations</h2>
                        <div className="space-y-10">
                             <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex gap-8 items-start group transition-all"
                             >
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all shadow-xl shadow-black/5 flex-shrink-0">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="text-primary/40 text-xs font-black uppercase tracking-[0.2em] mb-2">Call Us</h4>
                                    <p className="text-2xl font-display font-black text-primary group-hover:text-accent transition-colors">+91 1800 123 4567</p>
                                </div>
                             </motion.div>
                             
                             <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex gap-8 items-start group transition-all"
                             >
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all shadow-xl shadow-black/5 flex-shrink-0">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="text-primary/40 text-xs font-black uppercase tracking-[0.2em] mb-2">Email Support</h4>
                                    <p className="text-2xl font-display font-black text-primary group-hover:text-accent transition-colors">hello@warehouster.com</p>
                                </div>
                             </motion.div>
                             
                             <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-8 items-start group transition-all"
                             >
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all shadow-xl shadow-black/5 flex-shrink-0">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="text-primary/40 text-xs font-black uppercase tracking-[0.2em] mb-2">Visit HQ</h4>
                                    <p className="text-2xl font-display font-black text-primary group-hover:text-accent transition-colors">402, Trade Center, BKC, Mumbai</p>
                                </div>
                             </motion.div>
                        </div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-[3rem] bg-gray-50/50 border border-gray-100 relative overflow-hidden backdrop-blur-sm group hover:border-accent/20 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                        <MessageSquare className="text-accent mb-8" size={40} />
                        <h4 className="text-2xl font-display font-black text-primary mb-6">Request a Consultation</h4>
                        <p className="text-primary/60 font-medium leading-relaxed italic mb-0 text-lg">
                            Our experts typically respond within 12 business hours to provide a comprehensive project estimate.
                        </p>
                    </motion.div>
                </div>
                
                {/* Contact Form Col */}
                <div className="lg:col-span-3">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-16 rounded-[4rem] bg-white border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] relative"
                    >
                        {isSubmitted ? (
                            <div className="py-32 text-center">
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-accent/20"
                                >
                                    <Send size={40} />
                                </motion.div>
                                <h3 className="text-5xl font-display font-black text-primary mb-6 uppercase tracking-tighter">Message Sent!</h3>
                                <p className="text-xl text-primary/60 font-medium">Thank you for reaching out. We'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Full Name</label>
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="John Doe" 
                                            className="w-full px-10 py-6 rounded-3xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-accent font-semibold transition-all text-lg placeholder:text-primary/20"
                                            value={formState.name}
                                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Email Address</label>
                                        <input 
                                            required
                                            type="email" 
                                            placeholder="john@company.com" 
                                            className="w-full px-10 py-6 rounded-3xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-accent font-semibold transition-all text-lg placeholder:text-primary/20"
                                            value={formState.email}
                                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Service Required</label>
                                    <select className="w-full px-10 py-6 rounded-3xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-accent font-bold transition-all text-lg text-primary/60 appearance-none">
                                        <option>Land Acquisition</option>
                                        <option>Strategic Warehousing</option>
                                        <option>Build-to-Suit Solutions</option>
                                        <option>Asset Management</option>
                                        <option>Investment Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 ml-4">Your Message</label>
                                    <textarea 
                                        required
                                        rows={6} 
                                        placeholder="Briefly describe your requirements..." 
                                        className="w-full px-10 py-6 rounded-3xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-accent font-semibold transition-all text-lg placeholder:text-primary/20 resize-none"
                                        value={formState.message}
                                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full py-7 rounded-3xl bg-primary text-white font-black text-2xl hover:bg-accent transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(242,101,34,0.3)] flex items-center justify-center gap-6 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    <span className="relative z-10">Submit Inquiry</span>
                                    <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform relative z-10" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="h-[600px] w-full bg-gray-100 relative overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0505296068694!2d72.86591!3d19.06103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ef4c259839%3A0xe5426189914041b6!2sBKC!5e0!3m2!1sen!2sin!4v1711360000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(1) contrast(1.2)" }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125"
          ></iframe>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          <div className="absolute top-12 left-12 p-8 bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-gray-100 hidden md:block max-w-sm">
             <h4 className="text-xl font-display font-black text-primary mb-3">Warehouster HQ</h4>
             <p className="text-primary/60 font-medium leading-relaxed text-sm mb-4">
                402, Trade Center, BKC, <br />
                Mumbai - 400051, Maharashtra, India
             </p>
             <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="text-accent font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
             >
                Open in Maps <ArrowRight size={16} />
             </a>
          </div>
      </section>

      <Footer />
    </main>
  );
}
