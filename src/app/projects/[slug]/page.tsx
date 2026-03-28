"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image, { StaticImageData } from "next/image";
import { MapPin, ArrowRight, ShieldCheck, Zap, Anchor, Truck, Globe, Award } from "lucide-react";
import { useParams, notFound } from "next/navigation";

// Assets
import chennai from "@/assets/chennai.jpg";
import maduraiImg from "@/assets/madurai.jpg";
import land from "@/assets/land.jpg";

interface ProjectContent {
  title: string;
  location: string;
  image: string | StaticImageData;
  status: "Completed" | "In Progress" | "Pipeline";
  stats: string;
  overview: string;
  advantages: string[];
  connectivity: string[];
  infrastructure: string[];
  benefits: string[];
  seoText: string;
}

const projectData: Record<string, ProjectContent> = {
  redhills: {
    title: "Redhills Logistics Park",
    location: "Chennai, Tamil Nadu",
    image: chennai,
    status: "Completed",
    stats: "1.2 Million Sq. Ft. Total Built-up Area",
    overview: "Located in the northern industrial gateway of Chennai, the Redhills Logistics Park stands as a testament to Warehouster's commitment to delivering institutional-grade infrastructure. This facility is strategically positioned to serve the massive demand for Grade-A warehousing in the FMCG, E-commerce, and Automotive sectors. With a total operational footprint exceeding 1.2 million square feet, it offers a seamless blend of strategic location, structural integrity, and operational efficiency.",
    advantages: [
      "Strategic Gateway: Closest Grade-A facility to the Chennai CBD and Port infrastructure.",
      "High Efficiency: Optimized floor loading of 150mm and clear heights reaching 40 feet.",
      "Institutional Standard: Built to global fire safety (NFPA) and structural norms.",
    ],
    connectivity: [
      "Road: Immediate access to the GNT Road (NH-16) and Chennai Bypass.",
      "Port: 25 km from Ennore Port and 35 km from Chennai Port.",
      "Rail: Proximity to Minjur and Attipattu rail hubs for multi-modal logistics.",
    ],
    infrastructure: [
      "PEB Steel Structure with FM2 Grade Flooring.",
      "100% Power Backup and High-Speed Fiber Connectivity.",
      "Advanced Fire Sprinkler Systems and 24/7 Security Surveillance.",
    ],
    benefits: [
      "Tax efficiency via strategic location in industrial corridor.",
      "Reduced turnaround times for last-mile delivery in Chennai city.",
      "Scalable units ranging from 50,000 to 300,000 Sq. Ft.",
    ],
    seoText: `The Redhills Logistics Park is more than just a warehouse; it is a critical node in India's global supply chain. As the demand for sophisticated distribution centers grows in Tamil Nadu, Warehouster provides the necessary infrastructure to scale operations. Our Redhills facility is specifically designed to handle high-density storage and rapid throughput required by modern 3PL providers and retail giants. By integrating sustainable construction practices with state-of-the-art facility management, we ensure long-term value for our clients. The strategic importance of Redhills cannot be overstated, as it serves as the primary gateway for goods entering and exiting the metropolitan area of Chennai. With the expansion of the industrial corridors, this park remains the most sought-after destination for Grade-A industrial assets. We have incorporated green building standards to minimize environmental impact while maximizing operational uptime. From seismic-resistant structures to climate-adaptive roofing systems, every architectural detail is engineered for excellence. For businesses looking to optimize their logistics network, Redhills offers the perfect balance of cost, connectivity, and capability. Our dedicated operations team ensures that the facility maintains the highest level of maintenance and security, allowing clients to focus entirely on their core business growth. The Redhills Logistics Park is a cornerstone of the Warehouster portfolio, representing the pinnacle of industrial real estate in Southern India.`,
  },
  chengalpattu: {
    title: "Chengalpattu Industrial Hub",
    location: "Chengalpattu, Chennai Outer",
    image: chennai,
    status: "Completed",
    stats: "450,000 Sq. Ft. Operational Excellence",
    overview: "Architected to serve the automotive and electronics manufacturing heartland of Tamil Nadu, the Chengalpattu Industrial Hub provides high-performance warehousing solutions for the Oragadam-Chengalpattu corridor. This facility is a key strategic asset for Tier-1 suppliers and global manufacturers requiring proximity to major assembly plants.",
    advantages: [
      "Auto Corridor Focus: Located within the primary manufacturing zone of major OEMs.",
      "Sustainability First: PV-ready roofing and rainwater harvesting systems.",
      "Precision Engineering: Customized floor loading for heavy industrial machinery.",
    ],
    connectivity: [
      "Road: Situated on the GST Road (NH-45), connecting Chennai to Southern Districts.",
      "Air: 45-minute drive to Chennai International Airport.",
      "Industrial: Surrounded by global assembly plants of Ford, Renault-Nissan, and Daimler.",
    ],
    infrastructure: [
      "Institutional PEB frames with 12m clear height.",
      "Ample yard space for heavy commercial vehicle (HCV) movement.",
      "24/7 Power Infrastructure with dedicated distribution stations.",
    ],
    benefits: [
      "Zero-latency supply chain integration with nearby manufacturing units.",
      "Lower operational costs through energy-efficient lighting and insulation.",
      "Dedicated client portals for real-time facility management monitoring.",
    ],
    seoText: `The Chengalpattu Industrial Hub is a premier destination for industrial excellence. As the electronics and automotive sectors continue to thrive in Tamil Nadu, the need for specialized storage and assembly units is at an all-time high. Warehouster's presence in Chengalpattu ensures that manufacturers have access to Grade-A facilities that meet international safety and structural standards. The facility is designed to support the complex requirements of component logistics, including temperature-controlled environments and hazardous material storage where needed. By providing a stable and scalable infrastructure, we empower global brands to anchor their manufacturing operations in India with confidence. The local ecosystem of Chengalpattu offers a skilled labor pool and robust utility networks, making it an ideal long-term investment for any enterprise. Our park is managed with a focus on operational uptime, ensuring that supply chains remain uninterrupted even during peak demand cycles. For companies seeking to capitalize on the 'Make in India' initiative, our Chengalpattu assets provide the structural and strategic foundation required for success. We continue to invest in the latest smart warehouse technologies to offer our clients a competitive edge in an ever-evolving market. The Chengalpattu industrial zone is poised for significant growth, and Warehouster is proud to be a major stakeholder in its development.`,
  },
  pondicherry: {
    title: "Pondicherry Logistics Center",
    location: "Pondicherry, PY",
    image: land,
    status: "In Progress",
    stats: "Under Active Development - Phase 1",
    overview: "Currently under development, the Pondicherry Logistics Center is set to become the first institutional Grade-A warehouse facility in the UT of Pondicherry. Aimed at serving the growing pharmaceutical and textile clusters, this facility will bring world-class logistics standards to a critical regional market.",
    advantages: [
      "Market First: Bringing Grade-A standards to a predominantly unorganized market.",
      "Economic Incentives: Leveraging Pondicherry's favorable industrial policies.",
      "Modern Design: Incorporating digital twins for real-time construction monitoring.",
    ],
    connectivity: [
      "Road: Easy access to East Coast Road (ECR) for Chennai-Pondicherry logistics.",
      "Port: Proximity to Karaikal Port for maritime trade integration.",
      "Internal: Strong connectivity to internal industrial estates like Sedarapet and Mettupalayam.",
    ],
    infrastructure: [
      "Grade FM2 Flooring under execution for high-density racking.",
      "State-of-the-art fire suppression logic aligned with global norms.",
      "Environmentally friendly site planning with zero liquid discharge.",
    ],
    benefits: [
      "Early-mover advantage for tenants in a high-demand, low-supply region.",
      "Customized BTS (Built-to-Suit) options available during the construction phase.",
      "High visibility on the main logistics thoroughfare.",
    ],
    seoText: `The Pondicherry Logistics Center represents a significant leap forward for regional commerce. For years, the logistics sector in Pondicherry has relied on Grade-B and C structures that limit operational efficiency. Warehouster is changing the landscape by introducing institutional-grade assets that provide the security and technology required for modern distribution. As we progress through the construction phases, we are implementing the latest engineering practices to ensure the facility withstands the coastal environment while providing maximum interior volume. This center will be a hub for pharmaceutical distribution, textile exports, and FMCG storage, serving as a vital link between Chennai and the southern coast. Our commitment to sustainability means the project will feature extensive green cover and renewable energy integration. Businesses that choose to anchor their operations in our Pondicherry facility will benefit from reduced logistics costs and improved service levels. The project is being managed by our specialist development team, ensuring that every milestone is met with precision and quality. As the first of its kind in the region, the Pondicherry Logistics Center is anticipated to attract significant investment from national and international players looking to establish a presence in this strategic South Indian market.`,
  },
  sholagiri: {
    title: "Sholagiri Strategic Hub",
    location: "Sholagiri, Tamil Nadu",
    image: land,
    status: "Pipeline",
    stats: "Strategy & Acquisition Phase",
    overview: "Located on the high-velocity Bengaluru-Chennai industrial corridor, the Sholagiri Strategic Hub is planned as a 100-acre mega-logistics park. It is designed to capture the spillover demand from Hosur and Bengaluru, serving the booming EV and electronics sectors.",
    advantages: [
      "Strategic Corridor: Positioned exactly between two of South India's largest markets.",
      "Mega Scale: Designed for large-scale multi-user or single-occupier operations.",
      "Future Ready: Planned infrastructure for EV charging fleets and automated sorting.",
    ],
    connectivity: [
      "National Highway: Direct frontage on NH-48 (Bengaluru-Chennai Highway).",
      "Industrial Hubs: 30 minutes from Hosur and 60 minutes from Bengaluru Electronic City.",
      "Infrastructure: Proximity to the planned Chennai-Bengaluru Expressway nodes.",
    ],
    infrastructure: [
      "Mega-plot development with integrated utilities and administrative blocks.",
      "High-power electrical infrastructure for manufacturing-lite operations.",
      "Extensive greenery and worker welfare facilities built into master planning.",
    ],
    benefits: [
      "Lower rentals compared to Bengaluru city limits with superior highway connectivity.",
      "Opportunities for significant long-term expansion within a single campus.",
      "Proximity to the evolving EV ecosystem of Hosur/Krishnagiri.",
    ],
    seoText: `The Sholagiri Strategic Hub is set to redefine the logistics landscape of the Bengaluru-Chennai industrial corridor. As the region transforms into a global hub for Electric Vehicles and high-tech manufacturing, the demand for expansive, modern industrial parks is skyrocketing. Warehouster's Sholagiri project is meticulously planned to meet these needs, offering institutional ownership and Grade-A infrastructure that smaller developers cannot match. By focusing on a large-scale master plan, we are creating an ecosystem where multiple industries can coexist and thrive, benefiting from shared utilities and strategic location. The Sholagiri hub will facilitate efficient transit for goods moving between major ports on the east coast and the technology centers of the inland. Our design philosophy incorporates smart park management, ensuring that energy consumption and security are optimized through centralized digital platforms. For enterprises looking to establish the next generation of their manufacturing or distribution footprint, Sholagiri provides a blank canvas of immense potential. The strategic importance of this location on the Golden Quadrilateral makes it an essential asset for any robust supply chain strategy. We are currently in the advanced stages of planning and acquisition, ensuring that the eventual takeoff of the project sets new benchmarks for quality and scale.`,
  },
  madurai: {
    title: "Madurai Logistics Park",
    location: "Madurai, Tamil Nadu",
    image: maduraiImg,
    status: "Pipeline",
    stats: "Planning & Design Phase",
    overview: "Answering the call for regional distribution hubs in Southern Tamil Nadu, the Madurai Logistics Park will serve as the primary fulfillment node for the Madurai-Tuticorin industrial corridor. This park is essential for last-mile and regional distribution for FMCG and E-retailers.",
    advantages: [
      "Southern Anchor: The first institutional logistics park south of Trichy.",
      "Last-Mile Efficiency: Perfect positioning for rapid delivery to Tamil Nadu's southern districts.",
      "Corridor Integration: Part of the massive Madurai-Tuticorin industrial development zone.",
    ],
    connectivity: [
      "Highway: Easy access to the North-South Corridor (NH-44).",
      "Port: Direct connectivity to V.O. Chidambaranar Port Trust (Tuticorin).",
      "Airport: 20-minute drive to Madurai International Airport.",
    ],
    infrastructure: [
      "Modular facility design to accommodate diverse tenant sizes.",
      "Enhanced security protocols for high-value consumer goods.",
      "Scalable infrastructure with provisions for cold storage units.",
    ],
    benefits: [
      "Tapping into the vastly underserved regional consumer market of Madurai.",
      "Integration with the maritime logistics of the Tuticorin port.",
      "Skilled and abundant labor availability in the immediate vicinity.",
    ],
    seoText: `The Madurai Logistics Park is a cornerstone of our regional expansion strategy. For too long, the southern districts of Tamil Nadu have been served by warehouses in Chennai or Bengaluru, leading to higher transportation costs and longer lead times. By establishing a world-class logistics hub in Madurai, Warehouster is bringing the consumer closer to the supply. This park is designed to handle the high turnover and efficiency required by modern e-commerce and retail operations. As part of our commitment to local economic development, the Madurai facility will create hundreds of jobs and promote modern warehouse training for the local workforce. The design incorporates a level of structural sophistication previously unseen in the region, with FM2 floors and advanced fire safety systems as standard features. For companies focused on the South Indian market, the Madurai Logistics Park represents a strategic opportunity to optimize their footprints and reduce their carbon footprint through shorter transit routes. We are carefully tailoring the planning phase to integrate feedback from our existing clients, ensuring that the facility meets the ground realities of the regional market while maintaining global quality standards. The Madurai-Tuticorin corridor is destined for greatness, and we are laying the groundwork for its logistics future.`,
  },
  ponneri: {
    title: "Ponneri Smart Port Hub",
    location: "Chennai Port Zone, TN",
    image: chennai,
    status: "Pipeline",
    stats: "Project Strategy Phase",
    overview: "Planned as a high-tech logistics enclave near the Ennore and Kattupalli ports, the Ponneri Smart Port Hub targets export-import (EXIM) cargo and port-based industrial activities. It forms a key part of the Japan-India industrial cooperation development area.",
    advantages: [
      "EXIM Gateway: Direct synergy with two of India's major deep-water ports.",
      "Smart Infrastructure: Planned with IoT-enabled monitoring and automated gated access.",
      "High Value Cargo: Specialized units for capital goods and precision exports.",
    ],
    connectivity: [
      "Port: Less than 10 km from Ennore Port and Kattupalli Port.",
      "Road: Immediate access to the Outer Ring Road and port-connector roads.",
      "Special Zone: Part of the Ponneri Industrial Township (node of CBIC).",
    ],
    infrastructure: [
      "Heavy-duty floor designs for machinery and EXIM cargo handling.",
      "Integrated customs clearance and bonded warehousing facilities.",
      "Resilient design for coastal industrial conditions.",
    ],
    benefits: [
      "Significant savings on port drayage and transport costs.",
      "Participation in the prestigious Chennai-Bengaluru Industrial Corridor (CBIC).",
      "Pre-bonded warehouse options for international trade efficiency.",
    ],
    seoText: `The Ponneri Smart Port Hub is our most ambitious project in terms of specialization. By locating our operations in the Ponneri industrial node, we are aligning with some of the largest global trade initiatives currently active in India. This hub is not just a warehouse; it is a port-adjacent terminal designed to streamline the flow of international cargo. For businesses involved in global manufacturing and trade, the proximity to Ennore and Kattupalli ports offers unparalleled efficiency. Our strategy for Ponneri involves creating highly resilient structures that can manage the challenges of coastal industrial logistics while offering the clean, high-tech interiors required by modern manufacturers. As a key node of the Chennai-Bengaluru Industrial Corridor, the infrastructure at Ponneri is being developed with the highest level of governmental and institutional oversight. Warehouster's involvement ensures that private sector expertise drives the development of facilities that are agile, technologically advanced, and ecologically sustainable. We are working closely with international partners to ensure that the Ponneri Smart Port Hub meets the expectations of global enterprises looking for a strategic base in the Indo-Pacific region. This project represents the next frontier of our portfolio, merging traditional industrial real estate with smart technology and global trade logistics.`,
  },
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const data = projectData[slug as string];

  if (!data) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover opacity-60 grayscale-[0.5] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-12"
          >
            <Zap size={14} /> {data.status} Project
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-black text-white uppercase tracking-tighter leading-none mb-8"
          >
            {data.title.split(' ')[0]} <br />
            <span className="text-accent italic">{data.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 text-white/70 text-sm font-bold uppercase tracking-widest"
          >
            <div className="flex items-center gap-2"><MapPin size={18} className="text-accent" /> {data.location}</div>
            <div className="flex items-center gap-2"><Award size={18} className="text-accent" /> {data.stats}</div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Left Column: Narrative Content */}
            <div className="lg:col-span-8 space-y-24">
              {/* 1. Overview */}
              <section>
                <div className="pill-tag border-primary/10 text-primary/40 bg-gray-50 mb-8 lowercase">
                    /01 Overview
                </div>
                <p className="text-3xl md:text-4xl font-serif font-medium text-primary leading-tight mb-12 italic">
                  {data.overview}
                </p>
                <p className="text-lg text-primary/60 leading-relaxed font-medium">
                  {data.seoText}
                </p>
              </section>

              {/* 2. Strategic Advantages */}
              <section>
                <h2 className="text-4xl font-serif font-black text-primary uppercase tracking-tight mb-12">
                   Strategic <span className="text-accent italic">Advantages</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {data.advantages.map((adv, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:border-accent/40 transition-colors group">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                        <Globe size={24} />
                      </div>
                      <p className="text-primary font-bold leading-relaxed">{adv}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Deep SEO Content - Expanded sections to reach 1000 words */}
              <section className="prose prose-xl prose-primary max-w-none text-primary/70 font-medium leading-relaxed space-y-8">
                 <p>
                    Industrial real estate in {data.location} is undergoing a paradigm shift. As corporate heavyweights and multinational agencies pivot towards the Indian market, the infrastructure supporting their logistical operations must evolve beyond mere storage. {data.title} addresses this need by providing a scalable, resilient environment that integrates smart technology with institutional ownership.
                 </p>
                 <p>
                    Our approach to developing {data.title} involved deep collaboration with topological experts and logistical architects. We analyzed data points ranging from peak precipitation levels to 24-hour traffic cycles on neighboring highways. This level of granularity ensures that every square foot of the {data.stats} is optimized for maximum efficiency.
                 </p>
                 <p>
                    Furthermore, {data.title} is designed with a futuristic perspective on sustainability. We have prioritized energy-neutral facility management and circular resource utilization. Every aspect of the facility, from its solar-reflective roofing membranes to its low-flow internal utility systems, contributes to a reduced carbon footprint, ensuring that our tenants' sustainability goals are met without compromising on high-velocity throughput.
                 </p>
                 <p>
                    The business landscape surrounding {data.location} is ripe for explosive growth. With governmental initiatives supporting industrial clusters and integrated port-road connectivity, {data.title} is perfectly positioned to serve as the beating heart of your regional distribution network. Our team of asset managers provides ongoing support, from facility maintenance to strategic logistical consulting, ensuring that your operations never face downtime.
                 </p>
              </section>
            </div>

            {/* Right Column: Specs & Highlights (Sticky) */}
            <div className="lg:col-span-4">
              <div className="sticky top-40 space-y-8">
                {/* Connectivity Box */}
                <div className="p-10 rounded-[3rem] bg-primary text-white shadow-3xl">
                   <div className="flex items-center gap-4 mb-8">
                      <Truck className="text-accent" />
                      <h4 className="text-xl font-serif font-black uppercase tracking-tight">Connectivity</h4>
                   </div>
                   <ul className="space-y-6">
                      {data.connectivity.map((conn, i) => (
                        <li key={i} className="flex gap-4 group">
                           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform" />
                           <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{conn}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                {/* Infrastructure Box */}
                <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100">
                   <div className="flex items-center gap-4 mb-8">
                      <ShieldCheck className="text-accent" />
                      <h4 className="text-xl font-serif font-black text-primary uppercase tracking-tight">Infrastructure</h4>
                   </div>
                   <ul className="space-y-6">
                      {data.infrastructure.map((infra, i) => (
                        <li key={i} className="flex gap-4 group">
                           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/20 shrink-0 group-hover:bg-accent transition-colors" />
                           <span className="text-sm font-medium text-primary/60 group-hover:text-primary transition-colors">{infra}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                {/* CTA Box */}
                <div className="p-10 rounded-[3rem] bg-accent text-primary relative overflow-hidden group">
                   <div className="relative z-10">
                      <h4 className="text-2xl font-serif font-black uppercase tracking-tight mb-4 italic">Lease This Space</h4>
                      <p className="text-sm font-bold opacity-60 mb-8 leading-relaxed">Secure your position in India&apos;s most strategic industrial park today.</p>
                      <button className="w-full py-5 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                         Download Brochure
                      </button>
                   </div>
                   <Zap size={120} className="absolute -bottom-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-1000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </main>
  );
}
