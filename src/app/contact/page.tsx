"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
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
      
      {/* Header */}
      <section className="relative pt-48 pb-24 bg-primary overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-display font-black text-white leading-tight uppercase tracking-tighter"
            >
                Connect with <span className="text-accent">Us</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/50 font-medium max-w-2xl mx-auto mt-6"
            >
                Interested in our solutions? Our team of logistics experts is ready to help you optimize your infrastructure.
            </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-12">
                    <div>
                        <h2 className="text-3xl font-display font-black text-primary mb-8 uppercase tracking-tighter italic">Get In Touch</h2>
                        <div className="space-y-8">
                             <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="text-primary/40 text-xs font-black uppercase tracking-widest mb-1">Call Us</h4>
                                    <p className="text-xl font-display font-black text-primary">+91 1800 123 4567</p>
                                </div>
                             </div>
                             
                             <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="text-primary/40 text-xs font-black uppercase tracking-widest mb-1">Email Support</h4>
                                    <p className="text-xl font-display font-black text-primary">hello@warehouster.com</p>
                                </div>
                             </div>
                             
                             <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="text-primary/40 text-xs font-black uppercase tracking-widest mb-1">Visit HQ</h4>
                                    <p className="text-xl font-display font-black text-primary">402, Trade Center, BKC, Mumbai - 400051</p>
                                </div>
                             </div>
                        </div>
                    </div>
                    
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 italic relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <MessageSquare className="text-accent mb-6" size={32} />
                        <h4 className="text-xl font-display font-black text-primary mb-4">Request a Consultation</h4>
                        <p className="text-primary/60 font-medium mb-0">Our experts typically respond within 12 business hours to provide a comprehensive project estimate.</p>
                    </div>
                </div>
                
                {/* Contact Form */}
                <div className="lg:col-span-3">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-[3rem] bg-white border border-gray-100 shadow-2xl shadow-gray-200"
                    >
                        {isSubmitted ? (
                            <div className="py-24 text-center">
                                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl animate-bounce">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-4xl font-display font-black text-primary mb-4 uppercase tracking-tighter">Message Sent!</h3>
                                <p className="text-lg text-primary/60 font-medium">Thank you for reaching out. We'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/40 ml-2">Full Name</label>
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="Enter your name" 
                                            className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-accent font-semibold transition-all"
                                            value={formState.name}
                                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/40 ml-2">Email Address</label>
                                        <input 
                                            required
                                            type="email" 
                                            placeholder="email@company.com" 
                                            className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-accent font-semibold transition-all"
                                            value={formState.email}
                                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-primary/40 ml-2">Subject / Service Needed</label>
                                    <select className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-accent font-bold transition-all text-primary/60">
                                        <option>Land Acquisition</option>
                                        <option>Strategic Warehousing</option>
                                        <option>Build-to-Suit Solution</option>
                                        <option>Asset Management</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-primary/40 ml-2">Your Message</label>
                                    <textarea 
                                        required
                                        rows={5} 
                                        placeholder="Tell us about your requirements..." 
                                        className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-accent font-semibold transition-all resize-none"
                                        value={formState.message}
                                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full py-6 rounded-2xl bg-primary text-white font-black text-xl hover:bg-accent transition-all shadow-xl flex items-center justify-center gap-4 group"
                                >
                                    <span>Send Message</span>
                                    <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-gray-200 grayscale relative overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                <div className="px-8 py-4 bg-white rounded-full text-primary font-black shadow-2xl">
                    View on Google Maps
                </div>
          </div>
          <Image 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
            alt="Map Preview" 
            fill 
            className="object-cover"
          />
      </section>

      <Footer />
    </main>
  );
}
