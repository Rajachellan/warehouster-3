"use client";

import { motion, useScroll, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { MapPin, ShieldCheck, Zap, ArrowRight, ChevronRight, Activity, TrendingUp, Globe, Building2, Truck, HardHat } from "lucide-react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { projects, ProjectContent } from "@/data/projects";

// --- Components ---

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const animation = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest))
    });
    return () => animation.stop();
  }, [value]);

  return <>{displayValue}{suffix}</>;
};

const SectionHeading = ({ label, title, light = false }: { label: string, title: string, light?: boolean }) => (
  <div className="mb-12">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`pill-tag mb-6 ${light ? 'border-white/20 bg-white/5 text-white' : ''}`}
    >
      / {label}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-serif font-black uppercase tracking-tighter leading-[0.9] ${light ? 'text-white' : 'text-primary'}`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  </div>
);

const InfoCard = ({ title, content, icon: Icon }: { title: string; content: string; icon: any }) => (
  <div className="p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-[rgba(212,175,55,0.4)] transition-all duration-500 group shadow-sm">
    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
      <Icon size={24} />
    </div>
    <h4 className="text-lg font-serif font-black text-primary uppercase tracking-tight mb-3">{title}</h4>
    <p className="text-sm text-[rgba(10,20,40,0.5)] font-medium leading-relaxed">{content}</p>
  </div>
);

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const data = projects.find(p => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!data) {
    return notFound();
  }

  const relatedProjects = projects.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,40,0.8)] via-[rgba(10,20,40,0.4)] to-primary" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="pill-tag border-[rgba(212,175,55,0.4)] bg-[rgba(212,175,55,0.2)] text-accent mb-8 backdrop-blur-md">
              {data.heroLabel}
            </div>

            <h1 className="text-5xl md:text-8xl font-serif font-black text-white uppercase tracking-tighter leading-[0.85] mb-10 max-w-5xl">
              {data.title}
            </h1>

            <p className="text-white/60 text-lg md:text-xl font-serif max-w-2xl mx-auto mb-16 leading-relaxed">
              {data.subtext}
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-12 hidden md:flex flex-col items-center gap-6">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[rgba(212,175,55,0.5)] to-accent" />
          <span className="text-[9px] font-black text-accent uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Case Study Details</span>
        </div>
      </section>

      {/* 2. CORE STATS BAR */}
      <section className="relative z-30 -mt-16 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0A1428] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/5 flex flex-wrap items-center justify-around gap-12">
            {data.stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-6xl font-serif font-black text-white mb-2 tracking-tighter group-hover:text-accent transition-colors">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[rgba(212,175,55,0.5)] group-hover:text-accent transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading label="The Mission" title="Project <span className='text-accent'>Overview</span>" />
          <p className="text-lg md:text-xl text-[rgba(10,20,40,0.6)] font-medium leading-[1.8] text-justify md:text-center">
            {data.detailedOverview || data.overview}
          </p>
        </div>
      </section>

      {/* 4. LOCATION & CONNECTIVITY */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeading label="Geography" title="Location <span className='text-accent'>Advantages</span>" />
              <div className="space-y-6">
                {data.locationAdvantages?.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-[rgba(212,175,55,0.2)] flex items-center justify-center text-accent shrink-0 mt-1">
                      <ShieldCheck size={14} />
                    </div>
                    <p className="text-[rgba(10,20,40,0.7)] font-medium leading-relaxed">{adv}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100">
              <h4 className="text-2xl font-serif font-black text-primary uppercase tracking-tighter mb-10 flex items-center gap-4">
                <Globe className="text-accent" /> Connectivity & Infra
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {data.connectivity?.map((item, i) => (
                  <div key={i}>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">{item.label}</div>
                    <p className="text-sm text-[rgba(10,20,40,0.6)] font-medium leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEVELOPMENT DETAILS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Technical" title="Development <span className='text-accent'>Details</span>" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.developmentDetails?.map((detail, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-[rgba(10,20,40,0.3)] mb-4">{detail.label}</div>
                <div className="text-lg font-serif font-black text-primary uppercase tracking-tight leading-tight">{detail.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS BENEFITS & GROWTH */}
      <section className="py-32 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionHeading label="Impact" title="Business <span className='text-accent'>Benefits</span>" light />
              <div className="grid gap-4">
                {data.businessBenefits?.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                      <span className="text-lg font-medium">{benefit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-12 md:p-16 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-xl relative">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <TrendingUp size={200} className="text-accent" />
              </div>
              <h4 className="text-2xl font-serif font-black text-accent uppercase tracking-tighter mb-8">Future Growth Potential</h4>
              <p className="text-xl text-white/70 font-serif leading-relaxed italic">
                &ldquo;{data.futureGrowth}&rdquo;
              </p>
              <div className="mt-12 h-[2px] w-24 bg-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. STRATEGIC WORKFLOW */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading label="Lifecycle" title="Strategic <span className='text-accent'>Workflow</span>" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.workflow.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-primary mb-6 relative">
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-primary text-[10px] font-black flex items-center justify-center">0{i + 1}</span>
                  <HardHat size={28} />
                </div>
                <h4 className="text-lg font-serif font-black text-primary uppercase tracking-tight mb-2">{step.title}</h4>
                <p className="text-sm text-[rgba(10,20,40,0.4)] font-medium leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GALLERY */}
      {data.gallery.length > 0 && (
        <section className="py-32 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading label="Visual Evidence" title="Site <span className='text-accent'>Gallery</span>" />
            <div className="grid md:grid-cols-2 gap-8">
              {data.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl"
                >
                  <Image src={img} alt={`Gallery ${i}`} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. RELATED ASSETS */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <SectionHeading label="Ecosystem" title="Related <span className='text-accent'>Assets</span>" />
            <Link href="/projects" className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-[rgba(10,20,40,0.4)] hover:text-accent transition-colors mb-12">
              All Projects <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {relatedProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group relative block h-[500px] rounded-[3.5rem] overflow-hidden shadow-lg">
                <Image src={project.image} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,40,0.9)] to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-3xl font-serif font-black text-white uppercase tracking-tighter mb-4">{project.title}</h3>
                  <div className="flex items-center gap-4 text-accent text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all">
                    View Case Study <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
