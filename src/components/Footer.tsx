"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import logo from "../assets/logo-wt.png"
const socialLinks = [
  {
    icon: Facebook,
    href: "#",
  },
  {
    icon: Twitter,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/warehouster-group/?originalSubdomain=in",
  },
  {
    icon: Instagram,
    href: "#",
  },
];
export default function Footer() {
  return (
    <footer suppressHydrationWarning className="bg-primary pt-24 pb-12 border-t border-white/5 overflow-hidden relative">
      <div suppressHydrationWarning className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div suppressHydrationWarning className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
      </div>

      <div suppressHydrationWarning className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
           {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-36 h-8 overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <Image 
                src={logo} 
                alt="Warehouster Logo" 
                fill 
                sizes="144px"
                className="object-contain" 
                priority 
              />
            </div>
          </Link>
            <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
              Grade-A industrial real estate solutions architected for the future of India&apos;s global logistics and infrastructure.
            </p>
           <div className="flex gap-4">
  {socialLinks.map((item, i) => {
    const Icon = item.icon;
    return (
      <Link
        key={i}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        suppressHydrationWarning
        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent hover:bg-accent/5 transition-all"
      >
        <Icon size={18} />
      </Link>
    );
  })}
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-black text-xs uppercase tracking-[0.3em] mb-10 border-l-2 border-accent pl-4">Navigation</h4>
            <ul className="space-y-6">
              {["Home", "About", "Services", "Projects", "Blogs", "Careers"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-white/60 hover:text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group transition-all">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif font-black text-xs uppercase tracking-[0.3em] mb-10 border-l-2 border-accent pl-4">Core Pillars</h4>
            <ul className="space-y-6">
              {[
                "Land Acquisition",
                "Development Management",
                "Warehouse Construction",
                "Industrial Consulting"
              ].map((item) => (
                <li key={item}>
                  <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-white/60 hover:text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group transition-all">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-white font-serif font-black text-xs uppercase tracking-[0.3em] mb-10 border-l-2 border-accent pl-4">Connect</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">+91 1800 123 456</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">hello@warehouster.com</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-relaxed">BKC, Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">
            © 2026 Warehouster. Industrial Integrity. All rights reserved.
          </p>
          <div className="flex gap-12">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  suppressHydrationWarning
                  className="text-white/20 hover:text-accent text-[9px] font-black uppercase tracking-[0.4em] transition-all"
                >
                  {item}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
