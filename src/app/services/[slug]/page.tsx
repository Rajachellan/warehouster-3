"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { Building2, Hammer, ShieldCheck, Users, ArrowRight, CheckCircle2, BarChart3, TrendingUp, ShieldAlert, BadgeCheck } from "lucide-react";
import Link from "next/link";
// Assets (imported from @/assets for consistency)
import landImg from "@/assets/land-acq-img-4.webp";
import devImg from "@/assets/parks-banner.webp";
import constructionImg from "@/assets/adrian-sulyok-sczNLg6rrhQ-unsplash.jpg";
import consultingImg from "@/assets/ourcover-values-1.webp";
import banner from "../../../assets/baglur-park-img.webp"
interface ServiceContent {
  title: string;
  description: string;
  icon: any;
  image: any;
  features: string[];
  benefits: string[];
  useCases: string[];
  detailedContent: string;
}

const serviceData: Record<string, ServiceContent> = {
  "land-acquisition": {
    title: "Land Acquisition",
    description: "Strategic sourcing of high-yield industrial locations across India's leading logistics corridors.",
    icon: Building2,
    image: landImg,
    features: [
      "Multi-parameter site selection (topography, soil, drainage).",
      "Legal and regulatory due diligence for clear title assurance.",
      "Liaison with local and state authorities for conversion and approvals.",
      "Strategic land aggregation for large-scale logistics parks."
    ],
    benefits: [
      "Mitigated risk through institutional-grade legal vetting.",
      "Optimized land value capture via early-stage sourcing.",
      "Ready-to-build land parcels with clear connectivity strategies."
    ],
    useCases: [
      "E-commerce giants seeking expansion in Tier-1 corridors.",
      "Industrial funds looking for high-yield land investments.",
      "Manufacturing OEMs requiring port-adjacent land parcels."
    ],
    detailedContent: `Land acquisition is the foundational pillar of any successful industrial project. In India's complex regulatory landscape, Warehouster provides the expertise required to navigate the intricacies of land procurement with zero compromise on legality or strategic value. Our process begins with high-resolution data analysis of regional infrastructure plans, ensuring that every acquisition is positioned to benefit from future growth. We don't just buy land; we acquire the future growth corridors of a rising nation. From the initial search to the final registration, our team manages every touchpoint, ensuring that titles are clear, zoning is appropriate, and environmental risks are mitigated. This institutional approach to land acquisition has made us the partner of choice for global investment funds and major industrial players.`
  },
  "development-management": {
    title: "Development Management",
    description: "End-to-end management of industrial projects from feasibility to construction and delivery.",
    icon: Hammer,
    image: devImg,
    features: [
      "Comprehensive master planning and architectural optimization.",
      "Project feasibility and cost-benefit analysis.",
      "Vendor selection and rigorous procurement management.",
      "Quality assurance and timeline tracking via digital twins."
    ],
    benefits: [
      "Reduced project cycle times through centralized management.",
      "Cost optimization via strategic vendor relationships.",
      "Highest standard of structural integrity and modern aesthetics."
    ],
    useCases: [
      "Global conglomerates outsourcing their facility development.",
      "Real estate investment trusts (REITs) requiring project delivery.",
      "Scalable warehousing for growing regional distribution hubs."
    ],
    detailedContent: `Development management at Warehouster is a fusion of engineering precision and strategic vision. Our end-to-end approach ensures that project goals are not just met but exceeded. We manage the entire lifecycle of a project, acting as the single point of accountability for our clients. By integrating advanced project management software with on-ground expertise, we maintain strict control over budgets and timelines. Our development philosophy prioritizes adaptability—ensuring that the facilities we build today can evolve with the technological demands of tomorrow. From initial concept to the final handover, we ensure that every square foot is architected for maximum operational efficiency.`
  },
  "warehouse-construction": {
    title: "Warehouse Construction",
    description: "Setting the Gold Standard with Grade-A shell construction and energy-efficient infrastructures.",
    icon: ShieldCheck,
    image: constructionImg,
    features: [
      "Grade-A PEB (Pre-Engineered Building) shell construction.",
      "FM2/FM3 specialized flooring for high-density racking.",
      "Energy-efficient roofing and climate-adaptive insulation.",
      "Institutional-grade fire protection (NFPA) and safety systems."
    ],
    benefits: [
      "Superior structural longevity and minimal maintenance costs.",
      "Operational uptime through high-quality utility infrastructure.",
      "Compliance with international safety and environmental standards."
    ],
    useCases: [
      "3PL providers requiring large-scale Grade-A distribution units.",
      "FMCG companies needing hygiene-compliant storage spaces.",
      "Automotive suppliers requiring heavy-duty industrial shells."
    ],
    detailedContent: `Construction at Warehouster is defined by the 'Gold Standard'. We don't settle for mediocre builds; we deliver institutional-grade assets that provide a safe and efficient environment for our clients. Our construction teams utilize the latest materials and structural philosophies to ensure that every facility is a model of industrial excellence. We focus on clear heights, floor flatness, and natural lighting—the three pillars of a productive warehouse. Furthermore, our commitment to green building practices means that our construction processes minimize waste and incorporate sustainable elements such as rainwater harvesting and LED lighting as standard features.`
  },
  "industrial-consulting": {
    title: "Industrial Consulting",
    description: "Expert advice on supply chain optimization, network design, and asset management.",
    icon: Users,
    image: consultingImg,
    features: [
      "Network design and supply chain optimization studies.",
      "Cold-chain and specialized cargo storage consulting.",
      "Facility lifecycle and predictive maintenance strategy.",
      "Sustainability audits and green building certification advisory."
    ],
    benefits: [
      "Data-driven decisions for complex logistics networks.",
      "Improved asset valuation through proactive management.",
      "Significant operational savings via optimized energy and space usage."
    ],
    useCases: [
      "Multinational corporations redesigning their India logistics.",
      "Industrial investors seeking to enhance portfolio performance.",
      "Regional players scaling into high-performance warehousing."
    ],
    detailedContent: `Our industrial consulting services bridge the gap between real estate and operational intelligence. We provide our clients with the insights needed to navigate the rapidly evolving logistics market. By leveraging years of experience across diverse industries, our consultants help businesses optimize their supply chains for speed, cost, and resilience. We analyze every facet of an industrial operation—from location choices to internal warehouse layouts—ensuring that our clients remain competitive in a high-velocity market. Consulting at Warehouster is not just about advice; it's about delivering actionable strategies that drive tangible results.`
  }
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = serviceData[slug as string];

  if (!service) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center bg-primary overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center text-primary shadow-2xl mb-12"
          >
            <service.icon size={40} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-black text-white uppercase tracking-tighter leading-none mb-8"
          >
            {service.title.split(' ')[0]} <br />
            <span className="text-accent italic">{service.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 font-medium max-w-2xl leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
             <div>
                <div className="pill-tag mb-12">Deep Technical Expertise</div>
                <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight uppercase tracking-tight italic mb-12">
                   Institutional Grade <br />
                   <span className="not-italic text-accent">Process & Excellence</span>
                </h2>
                <div className="prose prose-xl prose-primary text-primary/60 font-medium leading-[1.8] space-y-8">
                   <p className="text-2xl text-primary italic font-serif leading-relaxed">
                      &quot;{service.detailedContent}&quot;
                   </p>
                   <p>
                      In the evolving landscape of Indian logistics, Warehouster stands as a beacon of reliability and innovation. Our {service.title} services are designed to address the specific pain points of modern enterprises, providing a seamless bridge between strategic requirement and on-ground execution.
                   </p>
                   <p>
                      By integrating global best practices with local market intelligence, we deliver outcomes that are sustainable, scalable, and inherently valuable. Every {service.title} project we undertake is a commitment to the growth of our partners and the modernization of the nation&apos;s industrial backbone.
                   </p>
                </div>
             </div>

             <div className="space-y-12">
                {/* Features Grid */}
                <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100">
                   <h3 className="text-2xl font-serif font-black text-primary uppercase tracking-tight mb-10 flex items-center gap-4">
                      <TrendingUp className="text-accent" /> Key Features
                   </h3>
                   <div className="space-y-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex gap-4 group">
                           <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                           <p className="text-lg font-bold text-primary/70 group-hover:text-primary transition-colors">{feature}</p>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Benefits / Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-10 rounded-[2.5rem] bg-primary text-white space-y-6">
                      <BarChart3 className="text-accent" size={32} />
                      <h4 className="text-xl font-serif font-black uppercase tracking-tight">Strategic Benefits</h4>
                      <ul className="space-y-4 text-white/50 text-sm font-medium">
                         {service.benefits.map((benefit, i) => (
                           <li key={i} className="flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                              {benefit}
                           </li>
                         ))}
                      </ul>
                   </div>
                   <div className="p-10 rounded-[2.5rem] bg-accent text-primary space-y-6">
                      <BadgeCheck size={32} />
                      <h4 className="text-xl font-serif font-black uppercase tracking-tight">Best Use Cases</h4>
                      <ul className="space-y-4 text-primary/60 text-sm font-bold">
                         {service.useCases.map((useCase, i) => (
                           <li key={i} className="flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/20 mt-1.5" />
                              {useCase}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section integration */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight uppercase tracking-tight mb-12">
               Ready to architect your <br />
               <span className="text-accent italic">Logistics Future?</span>
            </h3>
            <Link 
                href="/contact"
                className="group inline-flex items-center gap-6 px-14 py-6 bg-primary text-white rounded-[2rem] font-sans font-black text-[11px] uppercase tracking-widest hover:bg-accent transition-all shadow-3xl shadow-primary/20"
            >
                Consult Our Strategic Team <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-accent" />
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
