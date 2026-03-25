"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    slug: "future-of-automated-warehousing",
    title: "The Future of Automated Warehousing in 2026",
    excerpt: "How AI and robotics are reshaping the industrial landscape and what it means for global supply chains.",
    category: "Technology",
    author: "David Chen",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    slug: "sustainable-logistics-practices",
    title: "Eco-Friendly Logistics: More Than Just a Trend",
    excerpt: "Exploring sustainable building materials and energy-efficient operations in modern warehouses.",
    category: "Sustainability",
    author: "Jane Smith",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    slug: "optimizing-last-mile-delivery",
    title: "Optimizing Last-Mile Delivery with Strategic Hubs",
    excerpt: "The role of urban micro-fulfillment centers in achieving same-day delivery at scale.",
    category: "Operations",
    author: "John Doe",
    date: "March 05, 2026",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    slug: "impact-of-5g-on-logistics",
    title: "The Impact of 5G on Real-Time Freight Tracking",
    excerpt: "How high-speed connectivity is enabling unprecedented transparency in the logistics sector.",
    category: "Connectivity",
    author: "David Chen",
    date: "February 28, 2026",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-48 pb-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
            <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-8xl font-display font-black text-primary leading-tight uppercase tracking-tighter"
            >
                Logistics <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Insights</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-primary/40 font-bold max-w-2xl mt-6 uppercase tracking-[0.2em]"
            >
                Staying ahead of the curve in industrial infrastructure.
            </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, index) => (
                <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all group"
                >
                    <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden">
                        <Image 
                            src={post.image} 
                            alt={post.title} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6">
                            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white font-black text-xs uppercase tracking-widest border border-white/30">
                                {post.category}
                            </span>
                        </div>
                    </Link>
                    
                    <div className="p-10 flex flex-col flex-1">
                        <div className="flex items-center gap-6 text-primary/40 text-xs font-black uppercase tracking-widest mb-6">
                            <span className="flex items-center gap-2"><Clock size={16} className="text-accent" /> {post.date}</span>
                            <span className="flex items-center gap-2"><User size={16} className="text-accent" /> {post.author}</span>
                        </div>
                        
                        <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-2xl font-display font-black text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                                {post.title}
                            </h2>
                        </Link>
                        
                        <p className="text-primary/60 font-medium leading-relaxed mb-8 flex-1">
                            {post.excerpt}
                        </p>
                        
                        <Link 
                            href={`/blog/${post.slug}`} 
                            className="inline-flex items-center gap-3 font-black text-primary group-hover:text-accent transition-all tracking-tighter uppercase"
                        >
                            Read More
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </motion.article>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
