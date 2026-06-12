"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import blog3 from "../../assets/building-strategic-alliances-in-warehousing-park.webp"
import banner from "../../assets/building-strategic-alliances-in-warehousing-park.webp"
import news1 from "../../assets/news/manufacturing-today.jpg"
import news2 from "../../assets/news/cargobreakingnews1.png"
import news3 from "../../assets/news/logisticsinsider.in_.jpg"
import news4 from "../../assets/news/Featured-in-The-Economic-Times.png"
import news5 from "../../assets/news/bussiness-today.webp"
import news6 from "../../assets/news/cargotalk-05-08.jpg"
import news7 from "../../assets/news/logistics-outlook.jpg"
import news8 from "../../assets/news/logistics-insider-sandeep-chadha.jpg"
import news9 from "../../assets/news/news66.png"
import news10 from "../../assets/news/digitalising-logistics-and-supply-chain.jpg"
import news11 from "../../assets/news/transport-logistic.jpg"
import news12 from "../../assets/news/warehouster-timesproperty.png"
import news13 from "../../assets/news/transtopics-magazine.png"
import news14 from "../../assets/news/securing-the-future.jpg"
import news15 from "../../assets/news/technology-transformed-logistics.jpg"
import news16 from "../../assets/news/end-to-end-warehouse-solutions.jpg"
import news17 from "../../assets/news/iran-israel-conflict.jpg"
import news18 from "../../assets/news/covered-in-DAVOS.jpg"
import news19 from "../../assets/news/cargotalk.png"
const news = [
  {
    title: "The rapid rise of sustainable warehousing",
    excerpt: "We thank Manufacturing Today India for featuring our MD, Sandeep Chadha, in their latest article on sustainable warehousing",
    date: "November 27, 2024",
    category: "Company Update",
    image: news1,
     pdf: "/news/rapid-rise-of-sustainable-warehousing.pdf",
     link:"https://www.manufacturingtodayindia.com/the-rapid-rise-of-sustainable-warehousing-and-what-it-means-for-the-industry",
  },
  {
    title: "Strict security protocols, real-time tracking systems must in warehouses",
    excerpt: "We're thrilled to thank CargoBreakingNews for featuring our MD, Mr. Sandeep Chadha, and his insights on security in warehouse management",
    date: "October 25,2024",
    category: "Market Policy",
    image: news2,
    pdf: "/news/news2.pdf",
    link:"https://cargobreakingnews.com/strict-security-protocols-real-time-tracking-systems-must-in-warehouses/",
  },
  {
    title: "Retail Rebound: How Startup Brands can Thrive with Customer- Centric Supply Chain Solutions.",
    excerpt: "We're thrilled to announce that our founder, Sandeep Chadha's article has been published in Logistics Insider!",
    date: "September 24, 2024",
    category: "Investment",
    image:news3,
    pdf: "/news/news3.pdf",
    link:"https://www.logisticsinsider.in/retail-rebound-how-startup-brands-can-thrive-with-customer-centric-supply-chain-solutions/",
  },
    {
    title: "Sameera Warehouster signs 2.6 lakh sq ft warehousing facility with automotive firm.",
    excerpt: "Featured in The Economic Times: Major Milestone in Warehousing Partnership",
    date: "August 27, 2024",
    category: "Economic Time",
    image:news4,
     pdf: "/news/news4.pdf",
        link:"https://economictimes.indiatimes.com/industry/services/property-/-cstruction/sameera-warehousing-signs-2-6-lakh-sq-ft-warehousing-facility-with-automotive-firm/articleshow/112831160.cms?from=mdr",
  },
      {
    title: "Featuring eminent personalities and their leadership journey",
    excerpt: "Warehouster Group’s Managing Director Sandeep Chadha was recently featured in a story in Business Today. The story highlights his leadership journey and the significant impact he has made in the industry. Through innovative strategies and a commitment to excellence, Sandeep has steered Warehouster to new heights, reinforcing its position as a leader in the market.",
    date: "August 10, 2024",
    category: "Business Today",
    image:news5,
     pdf: "/news/news5.pdf",    
     link:"https://www.businesstoday.in/impact-feature/story/featuring-eminent-personalities-and-their-leadership-journey-440711-2024-08-08",
  },
  {
    title: "Charting India’s Economic Course: Highlights of Union Budget 2024",
    excerpt: "Sandeep Chadha, MD of Warehouster, recently featured in CargoTalk, shared his insights on the Indian Government's announcement to create 12 new industrial parks. He emphasized that this move will significantly boost the country's warehousing sector, catering to the booming e-commerce market and the increasing need for efficient storage solutions.",
    date: "August 05, 2024",
    category: "Cargo Talk",
    image:news6,
     pdf: "/news/news6.pdf",
         link:"https://cargotalk.in/charting-indias-economic-course-highlights-of-union-budget-2024/",
  },
    {
    title: "Budget 2024: Industrial parks to boost manufacturing & demand for warehousing",
    excerpt: "Sandeep Chadha, MD of Warehouster, was recently featured in Logistics Outlook sharing his views on the Budget 2024. He highlighted how the establishment of 12 new industrial parks and the sanctioning of parks in 100 cities, as announced by Finance Minister Nirmala Sitharaman, will boost manufacturing and increase demand for warehousing.",
    date: "July 31, 2024",
    category: "Logistics oulook",
    image:news7,
     pdf: "/news/news7.pdf",
         link:"https://www.logisticsoutlook.com/warehouse/budget-2024-industrial-parks-to-boost-manufacturing-demand-for-warehousing",
  },
      {
    title: "What's on te Logistics Industry's 2024-25 budget wishlist? Let's find out.",
    excerpt: "Sandeep Chadha, CEO of , shared his insights on the logistics industry's 2024-25 budget wishlist in Logistics Insider. He emphasized the importance of infrastructure development and streamlined regulatory frameworks to boost the sector's efficiency and growth.",
    date: "July 23, 2024",
    category: "Logistics insider",
    image:news8,
     pdf: "/news/news8.pdf",
         link:"https://www.logisticsinsider.in/whats-on-the-logistics-industrys-2024-25-budget-wishlist-lets-find-out/",
  },
        {
    title: "Warehousing is vital factor for US$ 5 tn economy",
    excerpt: "Sandeep Chadha, MD of Warehouster, was recently featured in cargotalk, where he discussed warehousing is a vital factor for US$ 5 tn economy.",
    date: "July 17, 2024",
    category: "Cargo Talk",
    image:news19,
     pdf: "/news/news9.pdf",
         link:"https://cargotalk.in/warehousing-is-vital-factor-for-us-5-tn-economy/",
  },
      {
    title: "PRE BUDGET QUOTE from - Mr. Sandeep Chadha, Founder & CEO – Warehouster",
    excerpt: "Sandeep Chadha, MD of Warehouster, was recently featured in Sagar Sandesh, discussing a pre-budget quote. He highlighted that India's logistics costs, ranging from 14-18% of GDP, are significantly higher than the 8% seen in other global markets, leading to inflated domestic product prices.",
    date: "July 16, 2024",
    category: "Sangar Sandesh",
    image:news9,
     pdf: "/news/news10.pdf",
         link:"https://www.sagarsandesh.in/news/34008#google_vignette",
  },
       {
    title: "Digitalising logistics and supply chain",
    excerpt: "Sandeep Chadha, MD of Warehouster was recently featured in OEM eMagazine, where he discussed the digitalization of logistics and supply chains.",
    date: "July 10, 2024",
    category: "OEM Update",
    image:news10,
     pdf: "/news/news11.pdf",
         link:"https://www.oemupdate.com/industry-report/digitalising-logistics-and-supply-chain/",
  },  
  {
    title: "Warehouster targets 10mn sq ft warehousing space in 3 years",
    excerpt: "Sandeep Chadha, MD of Warehouster, was recently featured in Indian News, discussing growth plans, value propositions, and strategies for navigating the complexities of India's warehousing sector.",
    date: "July 06, 2024",
    category: "Transport Logistics",
    image:news11,
     pdf: "/news/news12.pdf",
         link:"https://www.oemupdate.com/industry-report/digitalising-logistics-and-supply-chain/",
  },
    {
    title: "Abhishek Sharma's crores worth Chandigarh house is a sanctuary of family comfort, his rising cricket career and a beautiful puja room",
    excerpt: "Sandeep Chadha, MD of Warehouster recently was featured in TimesProperty sharing his views on 7 current trends shaping warehouse automation.",
    date: "July 01, 2024",
    category: "The Times of India",
    image:news12,
     pdf: "/news/news13.pdf",
         link:"https://timesofindia.indiatimes.com/real-estate?utm_source=timesproperty.com",
  },
   {
    title: "Diversifying Client Base: The Lifeline of the warehousing sector.",
    excerpt: "Sandeep Chadha, MD of Warehouster recently was featured in Transtopics Magazine sharing his views on Diversifying client base in the Warehousing Sector.",
    date: "June 27, 2024",
    category: "AD",
    image:news13,
     pdf: "/news/news14.pdf",
         link:"https://heyzine.com/flip-book/Transtopics-June-27",
  },
     {
    title: "Air Cargo Security vital to safeguard assets",
    excerpt: "Sandeep Chadha, the Founder & CEO of Warehouster, shares his Insights to Cargo talk on 'Securing the Future: Navigating Air Cargo security challenges in warehousing",
    date: "May 15, 2024",
    category: "Cargo Talk",
    image:news14,
     pdf: "/news/news15.pdf",
         link:"https://online.fliphtml5.com/yzsfr/ymoy/#p=61",
  },
       {
    title: "Air Cargo Security vital to safeguard assets",
    excerpt: "Sandeep Chadha, the Founder & CEO of Warehouster, shares his Insights on 'How Technology Has Transformed the Logistics Industry'",
    date: "May 03, 2024",
    category: "Logistics",
    image:news15,
     pdf: "/news/news16.pdf",
         link:"https://realtyninfra.co.in/",
  },
         {
    title: "Interview: Sandeep Chadha, Founder & CEO of Warehouster, end to end warehouse solutions",
    excerpt: "Sandeep Chadha Founder & - Interview with Sugermint on his Entrepreneural Journey",
    date: "April 20, 2024",
    category: "Sugermint",
    image:news16,
     pdf: "/news/news17.pdf",
         link:"https://sugermint.com/sandeep-chadha/",
  },
  {
    title: "As Iran-Israel Conflict Hampers Global Trade, Logistics Sector Gears Up To Tackle Challenges",
    excerpt: "As Iran-Israel Conflict Hampers Global Trade, Logistics Sector Gears up to Tackle Challenges",
    date: "April 16, 2024",
    category: "Businessworld",
    image:news17,
     pdf: "/news/news18.pdf",
         link:"https://www.businessworld.in/article/as-iran-israel-conflict-hampers-global-trade-logistics-sector-gears-up-to-tackle-challenges--517204",
  },
  {
    title: "Our new Projects will unlock significant value proposition for all stakeholder's",
    excerpt: "Sandeep Chadha Founder & CEO of Warehouster featured in Davos 2024",
    date: "Feb 22, 2024",
    category: "indiaDavos",
    image:news18,
     pdf: "/news/news19.pdf",
    link:"https://mediascope.co.in/digitalcopy/Davosindia2024/34-35/",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
     
      
      <section className="relative pt-64 pb-40 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={banner}
            alt="Corporate News Background"
            fill
            priority
            className="object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-[rgba(10,20,40,0.9)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,40,0.8)] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pill-tag border-[rgba(212,175,55,0.3)] text-accent bg-[rgba(212,175,55,0.05)] mb-10"
          >
            Insights & Updates
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[0.85] uppercase ">
            Corporate 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white/20"> Updates</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {news.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-[3.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden bg-gray-50">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-all duration-1000" 
                  />
                  <div className="absolute top-8 left-8 z-10">
                    <div className="px-4 py-1.5 bg-[rgba(10,20,40,0.8)] backdrop-blur-md text-accent text-[9px] font-black uppercase tracking-widest border border-[rgba(212,175,55,0.2)] rounded-full">
                      {item.category}
                    </div>
                  </div>
                </div>

                <div className="p-12 flex flex-col flex-1">
                  <div className="flex items-center gap-6 text-[12px] font-bold uppercase tracking-[0.3em] text-[rgba(10,20,40,0.4)] mb-8">
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-accent" /> {item.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-serif font-black text-primary uppercase tracking-tighter leading-tight mb-6 group-hover:text-accent transition-colors">
                    {item.title}
                  </h2>
                  
                  <p className="text-sm md:text-base font-medium text-[rgba(10,20,40,0.6)] leading-relaxed mb-10 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-8 border-t border-gray-50">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-primary hover:text-accent transition-all"
                    >
                      Full Report <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>

                    <Link
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2.5 rounded-full border border-gray-200 text-[rgba(10,20,40,0.4)] hover:border-accent hover:text-accent transition-all"
                    >
                      PDF <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
