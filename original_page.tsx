"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import OverviewSection from "@/components/OverviewSection";
import ServicesSection from "@/components/ServicesSection";
import IndiaMap from "@/components/IndiaMap";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import QuickNavSection from "@/components/QuickNavSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WhyChooseUS from "@/components/WhyChooseUS";
import Intergrated from "@/components/IntegratedIndustrial" 
import TrustedPartners from "@/components/TrustedPartners"
export default function Home() {
  return (
    <main className="min-h-screen">
     
      <HeroSection />
      
      <StatsSection />
      <WhyChooseUS />
      <OverviewSection />
      
      {/* Interactive Map Section */}
      <IndiaMap />
     <Intergrated />
      {/* <ServicesSection /> */}
      
      {/* Additional Sections */}
      <BlogSection />      
      {/* Premium CTA before footer items */}
      <CTASection />
      
      {/* Quick Navigation Cards */}
      <QuickNavSection />
      <FAQSection />
      <TrustedPartners />
      {/* Unified Contact Form */}
      <ContactSection />
      
      <Footer />
    </main>
  );
}
