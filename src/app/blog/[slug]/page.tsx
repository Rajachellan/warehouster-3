"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { useParams } from "next/navigation";

export default function BlogPostDetail() {
  const params = useParams();
  const slug = params.slug;

  // In a real app, you'd fetch data based on the slug.
  // For now, we'll show a static template.
  
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Article Header */}
      <article className="pt-48 pb-24">
        <div className="max-w-4xl mx-auto px-6">
            <Link 
                href="/blog" 
                className="inline-flex items-center gap-3 text-[rgba(10,20,40,0.4)] font-black uppercase text-sm tracking-widest mb-12 hover:text-accent transition-colors group"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
                Back to Insights
            </Link>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="px-5 py-2 bg-[rgba(212,175,55,0.1)] rounded-full text-accent font-black text-xs uppercase tracking-[0.2em] mb-6 block w-fit">
                    Industry Insights
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-primary leading-[1.1] mb-8 uppercase tracking-tighter">
                   {String(slug).split('-').join(' ')}
                </h1>
                
                <div className="flex flex-wrap items-center gap-8 text-[rgba(10,20,40,0.4)] text-sm font-black uppercase tracking-widest border-y border-gray-100 py-8 mb-12">
                   <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[rgba(10,20,40,0.05)] flex items-center justify-center text-accent">
                            <User size={20} />
                        </div>
                        <span>By David Chen</span>
                   </div>
                   <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[rgba(10,20,40,0.05)] flex items-center justify-center text-accent">
                            <Clock size={20} />
                        </div>
                        <span>Published March 15, 2026</span>
                   </div>
                   <div className="ml-auto">
                        <button className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Share2 size={20} />
                            <span>Share</span>
                        </button>
                   </div>
                </div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative h-[500px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl"
            >
                <Image 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Article Image" 
                    fill 
                    className="object-cover"
                />
            </motion.div>
            
            <div className="prose prose-2xl prose-primary max-w-none font-medium text-[rgba(10,20,40,0.8)] leading-relaxed space-y-8">
                <p className="text-2xl font-bold text-primary">
                    In an era of unprecedented digital transformation, the physical backbone of commerce—warehousing—is undergoing its own radical evolution.
                </p>
                <p>
                    The integration of Artificial Intelligence and robotics is no longer a futuristic concept; it's a present-day reality that is redefining operational efficiency. At Warehouster, we've seen first-hand how smart-hubs can process orders 40% faster than traditional facilities while reducing energy consumption through intelligent thermal management.
                </p>
                <h2 className="text-4xl font-display font-black text-primary pt-8 uppercase tracking-tighter border-t border-gray-100">
                    The Rise of the <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-[12px]">Smart</span> Grid
                </h2>
                <p>
                    One of the most significant changes we're witnessing is the shift from isolated storage units to interconnected 'nodes' in a global smart grid. These facilities communicate in real-time with freight carriers, manufacturers, and end-consumers, creating a seamless flow of data alongside the flow of goods.
                </p>
                <div className="p-12 bg-primary rounded-[2.5rem] text-white my-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full -translate-y-1/2 translate-x-1/2" />
                    <p className="text-3xl font-display font-black leading-tight mb-0">
                        "The next decade of logistics won't be won by those with the most space, but by those with the smartest space."
                    </p>
                    <p className="mt-6 text-white/50 font-bold uppercase tracking-widest text-sm">— Warehouster Design Philosophy</p>
                </div>
                <p>
                    As we look toward 2030, the focus will increasingly shift toward sustainability. We are currently developing zero-emission industrial parks that generate their own power through integrated solar roofing and kinetic flooring in high-traffic zones.
                </p>
            </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
