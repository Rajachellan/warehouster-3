"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, TrendingUp, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo-wt.png";
import blog3 from "../assets/building-strategic-alliances-in-warehousing-park.webp"
import news from "../assets/strategic-banner.webp"
import news1 from "../assets/news/manufacturing-today.jpg"
import news2 from "../assets/news/cargobreakingnews1.png"
import news3 from "../assets/news/logisticsinsider.in_.jpg"
import news4 from "../assets/news/Featured-in-The-Economic-Times.png"
interface SubmenuItem {
  name: string;
  href: string;
}

interface DropdownItem {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "About Warehouster", href: "/about#overview" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "Purpose", href: "/about#purpose" },
      { name: "Careers", href: "/careers" },
      { name: "Track Record", href: "/track-record" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Land Owners", href: "/services/land-acquisition" },
      { name: "Development Management", href: "/services/development-management" },
      { name: "Warehouse Construction", href: "/services/warehouse-construction" },
      { name: "Industrial Consulting", href: "/services/industrial-consulting" },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
    dropdown: [
      {
        name: "Completed",
        href: "/projects#completed",
        submenu: [
          { name: "Redhills", href: "/projects/redhills-development" },
          { name: "Chengalpattu", href: "/projects/chengalpattu-industrial" },
          { name: "Jaisalmer", href: "/projects/jaisalmer-bts" },
        ]
      },
      {
        name: "In Progress",
        href: "/projects#in-progress",
        submenu: [
          { name: "Pondicherry", href: "/projects/pondicherry-bts" },
          { name: "Hosur (65 acres)", href: "/projects/hosur-logistics-hub" },
          { name: "Thiruvallur (21 acres)", href: "/projects/thiruvallur-industrial" },
        ]
      },
      {
        name: "Pipeline",
        href: "/projects#pipeline",
        submenu: [
          { name: "Redhills (50 acres)", href: "/projects/redhills-phase-2" },
          { name: "Krishnagiri (55 acres)", href: "/projects/krishnagiri-integrated" },
        ]
      },
    ],
  },

  {
    name: "News",
    href: "/news",
    dropdown: [
      { name: "Trending News", href: "/news" },
      // { name: "Events", href: "/events" },
      { name: "Industry Insights", href: "/news#insights" },
      { name: "Case Study", href: "/case-study" },
    ],
  },
  { name: "Intelligence", href: "/platform" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const trendingItems = [
  {
    title: "The rapid rise of sustainable warehousing",
    desc: "We thank Manufacturing Today India for featuring our MD, Sandeep Chadha, in their latest article on sustainable warehousing",
    img: news1,
  },
  {
    title: "Market Policy",
    desc: "We're thrilled to thank CargoBreakingNews for featuring our MD, Mr. Sandeep Chadha, and his insights on security in warehouse management",
    img: news2,
  },
  {
    title: "Retail Rebound",
    desc: "We're thrilled to announce that our founder, Sandeep Chadha's article has been published in Logistics Insider!",
    img: news3,
  },
  {
    title: "Sameera Warehouster ",
    desc: "Featured in The Economic Times: Major Milestone in Warehousing Partnership",
    img: news4,
  },
];

const LIGHT_NAV_PATHS = [
  "/services/industrial-consulting",
  "/services/land-acquisition",
  "/services/development-management",
  "/services/warehouse-construction",
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [newsIndex, setNewsIndex] = useState(0);
  const pathname = usePathname();

  const isLightNavPage = LIGHT_NAV_PATHS.some((p) => pathname === p);
  const useLightNav = isLightNavPage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % trendingItems.length);
    }, 6000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  return (
    <>
      {/* Top Corner: Enhanced Trending Insights Card */}
      <div className="fixed top-28 right-5 z-[110] hidden md:block">
        <Link href="/news">
          <motion.div
            className="group relative bg-[#0A1428] border border-yellow-400/50 rounded-xl overflow-hidden flex flex-col items-start w-40 cursor-pointer z-10"
            whileHover={{ scale: 1.03 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Rotating golden border */}
            <motion.div
              className="absolute -inset-[1px] rounded-xl z-0 pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(250,204,21,0.8), transparent, rgba(250,204,21,0.8))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Mask inner background */}
            <div className="absolute inset-[1px] rounded-xl bg-[#0A1428] z-[1]" />

            {/* LIVE badge */}
            <motion.div
              className="absolute top-1.5 right-1.5 flex items-center gap-0.5 bg-yellow-400 text-[#0A1428] text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full z-30"
              animate={{ x: [2, -2, 2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="w-1 h-1 rounded-full bg-[#0A1428] inline-block" />
              Live
            </motion.div>

            {/* Thumbnail */}
            <div className="relative w-full h-24 overflow-hidden flex-shrink-0 z-[2]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={newsIndex}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={trendingItems[newsIndex].img}
                    alt="Trending"
                    fill
                    sizes="(max-width: 768px) 100vw, 160px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
              />
            </div>

            {/* Content */}
            <div className="relative w-full px-2.5 py-2 flex flex-col gap-1 z-[2]">
              {/* Label */}
              <div className="flex items-center gap-1">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <TrendingUp size={9} className="text-yellow-400" />
                </motion.div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-400">
                  Trending
                </span>
              </div>

              {/* Title + Description */}
              <div className="h-9 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={newsIndex}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col justify-center gap-0.5"
                  >
                    <h5 className="text-[12px] font-black text-white uppercase tracking-tight truncate leading-tight">
                      {trendingItems[newsIndex].title}
                    </h5>
                    <p className="text-[10px] font-medium text-white/55 truncate leading-tight">
                      {trendingItems[newsIndex].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom row */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/25">tap to read</span>
                <motion.div
                  className="w-4 h-4 rounded-full border border-yellow-400/60 flex items-center justify-center"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={8} className="text-yellow-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>



      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-6 ${isScrolled
            ? "bg-[rgba(10,20,40,0.95)] shadow-2xl border-b border-white/5"
            : useLightNav
              ? "bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 items-center">

          {/* Logo - Column 1 */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-40 h-10 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={logo}
                  alt="Warehouster Logo"
                  fill
                  sizes="144px"
                  className={`object-contain transition-all duration-500 ${useLightNav ? "brightness-0" : ""
                    }`}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links - Column 2 (Centered) */}
          <div className="hidden lg:flex justify-center">
            <div className={`flex items-center gap-1 ${useLightNav ? "text-primary" : "text-white"}`}>
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className={`relative h-full flex items-center group/link ${useLightNav ? "text-primary" : "text-white"}`}
                  onMouseEnter={() => {
                    if (dropdownTimeout) clearTimeout(dropdownTimeout);
                    setActiveMenu(link.name);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setActiveMenu(null), 300);
                    setDropdownTimeout(timeout);
                  }}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-2 font-bold text-[14px] tracking-[0.15em] transition-all duration-300 flex items-center gap-2 ${activeMenu === link.name
                        ? "text-accent scale-105"
                        : useLightNav
                          ? "text-primary/80 hover:text-primary"
                          : "text-white hover:text-white/80"
                      }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        size={8}
                        className={`transition-transform duration-500 ${activeMenu === link.name ? "rotate-180 text-accent" : "opacity-30"}`}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.dropdown && activeMenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 glass-dark rounded-[1.5rem] border border-white/10 p-2 shadow-3xl w-56 mt-4"
                      >
                        <div className="flex flex-col gap-1 p-1">
                          {link.dropdown.map((sub) => (
                            <div key={sub.name} className="relative group/sub">
                              <Link
                                href={sub.href}
                                className="flex items-center justify-between font-black text-[14px] text-white hover:text-accent hover:bg-white/5 transition-all px-4 py-3 rounded-xl tracking-widest"
                              >
                                {sub.name}
                                {sub.submenu && <ChevronRight size={10} className="opacity-30 group-hover/sub:opacity-100 group-hover/sub:translate-x-1 transition-all" />}
                              </Link>

                              {sub.submenu && (
                                <div className="absolute left-full top-0 ml-0 pl-4 hidden group-hover/sub:block z-[120]">
                                  {/* Bridge to prevent accidental closure */}
                                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-transparent" />
                                  <div className="glass-dark rounded-[1.2rem] border border-white/10 p-2 shadow-3xl w-56 relative">
                                    <div className="flex flex-col gap-1">
                                      {sub.submenu.map((item) => (
                                        <Link
                                          key={item.name}
                                          href={item.href}
                                          className="font-black text-[12px] text-white hover:text-accent hover:bg-white/5 transition-all px-4 py-3 rounded-xl tracking-widest"
                                        >
                                          {item.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* CTA & Mobile Toggle - Column 3 */}
          <div className={`flex items-center justify-end gap-3 sm:gap-8 ${useLightNav ? "text-primary" : "text-white"}`}>
            {/* CTA Cluster */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+91 95600 11696"
                className={`group flex items-center gap-3 px-5 py-2.5 rounded-full transition-all shadow-xl ${useLightNav
                    ? "bg-primary/5 border border-primary/10 text-primary hover:bg-primary hover:text-white"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white hover:text-primary"
                  }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-accent transition-all ${useLightNav
                    ? "bg-accent/15 group-hover:bg-white group-hover:text-primary"
                    : "bg-[rgba(212,175,55,0.2)] group-hover:bg-primary group-hover:text-white"
                  }`}>
                  <Phone size={10} />
                </div>
                <span className="text-[14px] font-black uppercase tracking-widest">+91 95600 11696</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden p-4 rounded-full transition-all shadow-xl ${useLightNav
                  ? "text-primary bg-primary/5 hover:bg-accent hover:text-white"
                  : "text-white bg-white/5 hover:bg-accent hover:text-primary"
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-[rgba(10,20,40,0.95)] border-t border-white/5 shadow-3xl overflow-hidden"
            >
              <div className="px-6 py-10 flex flex-col gap-8 max-h-[85vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col gap-4">
                    <Link
                      href={link.href}
                      className="text-2xl font-bold text-white hover:text-accent transition-all leading-tight uppercase tracking-widest"
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="grid grid-cols-1 gap-4 pl-4 border-l border-white/10">
                        {link.dropdown.map((sub: DropdownItem) => (
                          <div key={sub.name} className="flex flex-col gap-3">
                            <Link
                              href={sub.href}
                              className="text-[12px] font-black text-accent uppercase tracking-[0.2em] transition-colors"
                            >
                              {sub.name}
                            </Link>
                            {sub.submenu && (
                              <div className="flex flex-col gap-3 pl-4 border-l border-white/5">
                                {sub.submenu.map((item: SubmenuItem) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-[11px] font-bold text-white/50 hover:text-white uppercase tracking-[0.2em] transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* Mobile CTA */}
                <div className="mt-4 pt-8 border-t border-white/5 flex flex-col gap-4">
                  <a
                    href="tel:+919560011696"
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white active:bg-white active:text-primary transition-all shadow-xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-[rgba(212,175,55,0.2)] flex items-center justify-center text-accent">
                      <Phone size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-white/50 uppercase tracking-widest">Call our experts</span>
                      <span className="text-sm font-black uppercase tracking-widest">+91 95600 11696</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
