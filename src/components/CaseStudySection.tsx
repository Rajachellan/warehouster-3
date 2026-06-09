"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";

export interface CaseStudyProps {
  title: string;
  summary: string;
  client: string;
  location: string;
  industry: string;
  serviceUsed: string;
  duration: string;
  status: string;
  image: any;
  challenge: string[];
  solution: string[];
  execution: string[];
  results: string[];
  businessImpact: string;
  highlights: {
    size: string;
    timeline: string;
    budget: string;
    team: string;
    deliverables: string;
    metrics: string;
  };
  outcomes: string[];
  testimonial: {
    quote: string;
    author?: string;
  };
  nextCaseStudyLink?: string;
  prevCaseStudyLink?: string;
  relatedServicesLink?: string;
}

export default function CaseStudySection({ data }: { data: CaseStudyProps }) {
  return (
    <section className="bg-[#f8f9fa] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading (Optional context if placed in a list) */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-primary leading-tight">
            Case Study: <span className="text-accent">{data.title}</span>
          </h2>
        </div>

        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          
          {/* 1. Featured Image Banner with Overlaid Title */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,40,0.9)] via-[rgba(10,20,40,0.2)] to-transparent" />
            
            {/* Overlaid Title and Summary */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white leading-tight mb-4 max-w-4xl">
                {data.title}
              </h3>
              <p className="text-lg text-white/80 font-medium max-w-3xl leading-relaxed">
                {data.summary}
              </p>
            </div>
          </div>

          {/* 2. Two Column Content Layout */}
          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 lg:gap-24">
            
            {/* Left Column: Metadata */}
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 opacity-50">Client & Location</h4>
                <p className="text-sm font-bold text-primary">{data.client}</p>
                <p className="text-sm text-primary/70">{data.location}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 opacity-50">Industry</h4>
                <p className="text-sm font-bold text-primary">{data.industry}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 opacity-50">Service Scope</h4>
                <p className="text-sm font-bold text-primary">{data.serviceUsed}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 opacity-50">Duration & Status</h4>
                <p className="text-sm font-bold text-primary">{data.duration}</p>
                <div className="inline-block mt-2 px-3 py-1 bg-green-50 border border-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest">
                  {data.status}
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="space-y-12">
              
              {/* Overview / Challenge */}
              <div>
                <h4 className="text-[10px] font-black text-accent uppercase tracking-widest mb-4">Overview & Challenge</h4>
                <div className="space-y-4">
                  {data.challenge.map((item, i) => (
                    <p key={i} className="text-[15px] text-primary/80 leading-relaxed font-medium">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-gray-100" />

              {/* Solution & Execution */}
              <div>
                <h4 className="text-[10px] font-black text-accent uppercase tracking-widest mb-4">Solution & Execution</h4>
                <ul className="space-y-3">
                  {[...data.solution, ...data.execution].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-primary/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px w-full bg-gray-100" />

              {/* Business Impact & Outcomes */}
              <div>
                <h4 className="text-[10px] font-black text-accent uppercase tracking-widest mb-4">Business Impact</h4>
                <p className="text-[15px] text-primary/80 leading-relaxed font-medium mb-6">
                  {data.businessImpact}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {data.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} />
                      <span className="text-[13px] font-bold text-primary">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-100 bg-gray-50/50">
                <div className="p-6 border-b md:border-b-0 border-r border-gray-100 bg-gray-100/50">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 opacity-50">Project Size</p>
                  <p className="text-lg font-black text-primary">{data.highlights.size}</p>
                </div>
                <div className="p-6 border-b md:border-b-0 border-r border-gray-100 bg-white">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 opacity-50">Timeline</p>
                  <p className="text-lg font-black text-primary">{data.highlights.timeline}</p>
                </div>
                <div className="p-6 border-r border-gray-100 bg-white">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 opacity-50">Budget</p>
                  <p className="text-lg font-black text-primary">{data.highlights.budget}</p>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 opacity-50">Metrics</p>
                  <p className="text-lg font-black text-accent">{data.highlights.metrics}</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="flex gap-6 mt-12 bg-blue-50/30 p-8 border-l-4 border-accent">
                <Quote className="text-accent shrink-0" size={32} />
                <div>
                  <p className="text-lg md:text-xl font-serif font-medium text-primary leading-relaxed mb-4">
                    "{data.testimonial.quote}"
                  </p>
                  {data.testimonial.author && (
                    <p className="text-xs font-black uppercase tracking-widest text-primary/60">
                      — {data.testimonial.author}
                    </p>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {data.prevCaseStudyLink ? (
            <Link href={data.prevCaseStudyLink} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary/50 hover:text-accent transition-colors">
              <ChevronLeft size={14} /> Previous Case Study
            </Link>
          ) : <div />}
          
          {data.relatedServicesLink && (
            <Link href={data.relatedServicesLink} className="text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors">
              View All Services
            </Link>
          )}

          {data.nextCaseStudyLink ? (
            <Link href={data.nextCaseStudyLink} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary/50 hover:text-accent transition-colors">
              Next Case Study <ChevronRight size={14} />
            </Link>
          ) : <div />}
        </div>

      </div>
    </section>
  );
}
