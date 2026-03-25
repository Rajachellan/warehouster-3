"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 text-white overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20 relative z-10">
        {/* Branding */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
              <span className="text-white font-black text-3xl italic">W</span>
            </div>
            <span className="text-3xl font-display font-black uppercase tracking-tighter">
              Warehouster
            </span>
          </Link>
          <p className="text-white/60 font-medium leading-relaxed max-w-sm">
            Setting new standards in industrial infrastructure and logistics management through innovation, technology, and strategic development.
          </p>
          <div className="flex items-center gap-4 mt-2">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all hover:-translate-y-1"
              >
                <Icon size={20} className="text-white" />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-display font-black mb-8 border-b-2 border-accent w-fit pr-8 pb-2">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-white/70 font-bold">
            {["Home", "About", "Services", "Projects", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">
                   <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                   {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-display font-black mb-8 border-b-2 border-accent w-fit pr-8 pb-2">Contact Us</h4>
          <ul className="flex flex-col gap-6 text-white/70 font-semibold">
             <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                    <MapPin size={24} />
                </div>
                <span>402, Trade Center, BKC,<br/>Mumbai, Maharashtra - 400051</span>
             </li>
             <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                    <Phone size={24} />
                </div>
                <span>+91 1800 123 4567</span>
             </li>
             <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                    <Mail size={24} />
                </div>
                <span>hello@warehouster.com</span>
             </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-display font-black mb-8 border-b-2 border-accent w-fit pr-8 pb-2">Newsletter</h4>
          <p className="text-white/60 font-medium mb-6">Stay updated with the latest in logistics trends.</p>
          <form className="relative">
             <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent font-semibold transition-colors"
             />
             <button className="absolute right-2 top-2 bottom-2 px-4 bg-accent rounded-lg hover:bg-white hover:text-primary transition-all shadow-lg group">
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
             </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-bold text-sm tracking-widest relative z-10">
        <div>© 2026 WAREHOUSTER LOGISTICS PVT LTD. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link href="#" className="hover:text-white transition-colors">TERMS OF USE</Link>
        </div>
      </div>
    </footer>
  );
}
