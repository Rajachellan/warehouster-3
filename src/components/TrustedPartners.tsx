"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import flipkart from "../assets/flipkart.png";
import dhl from "../assets/dhl.png";
import flyjack from "../assets/flyjack.png";
import samsung from "../assets/samsung.png";
import ntc from "../assets/ntc.png";
import schenker from "../assets/db.png";
import ecom from "../assets/ecom_express.png";
import horizon from "../assets/horizon.png";
import blackstone from "../assets/blackstone.png";
import indospace from "../assets/indospace.png";

const partners = [
  { name: "Flipkart",   src: flipkart   },
  { name: "DHL",        src: dhl        },
  { name: "FlyJack",    src: flyjack    },
  { name: "Samsung",    src: samsung    },
  { name: "NTC",        src: ntc        },
  { name: "Schenker",   src: schenker   },
  { name: "ECOM",       src: ecom       },
  { name: "Horizon",    src: horizon    },
  { name: "Blackstone", src: blackstone },
  { name: "Indospace",  src: indospace  },
];

/* Triple so the seamless loop never runs dry */
const loopList = [...partners, ...partners, ...partners];

export default function EcosystemSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Architectural Light Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />
      
      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <div className="h-[1px] w-12 bg-accent shadow-[0_0_8px_rgba(212,175,55,0.2)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent/80">
            Institutional Network
          </span>
          <div className="h-[1px] w-12 bg-accent shadow-[0_0_8px_rgba(212,175,55,0.2)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-4xl md:text-7xl font-serif font-black text-primary leading-tight tracking-tighter mb-8 uppercase"
        >
          Our <span className="text-primary/30 font-light">Ecosystem,</span> <br />
          <span className="text-accent underline decoration-accent/10 underline-offset-[16px] decoration-1">Your Advantage</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-[10px] items-center justify-center flex gap-4 font-black uppercase tracking-[0.4em] text-primary/20 max-w-2xl mx-auto"
        >
          <span className="h-1.5 w-1.5 bg-accent/40 rounded-full" />
          Marquee Occupiers & Investors
          <span className="h-1.5 w-1.5 bg-accent/40 rounded-full" />
        </motion.p>
      </div>

      {/* ── Marquee ── */}
      <div className="relative w-full z-10 group">
        {/* Soft White Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-48 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-48 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="flex overflow-hidden py-10">
          <ul className="flex shrink-0 list-none m-0 p-0 gap-10 ecosystem-marquee">
            {loopList.map((p, i) => (
              <LogoChip key={`a-${i}`} name={p.name} src={p.src} />
            ))}
          </ul>
          <ul className="flex shrink-0 list-none m-0 p-0 gap-10 ecosystem-marquee" aria-hidden>
            {loopList.map((p, i) => (
              <LogoChip key={`b-${i}`} name={p.name} src={p.src} />
            ))}
          </ul>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ecosystemScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 40px)); }
        }
        .ecosystem-marquee {
          animation: ecosystemScroll 45s linear infinite;
        }
        .ecosystem-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Logo chip — exactly 6 visible per viewport
   width  = clamp(110px, calc((100vw - 148px) / 6), 190px)
   height = 60% of width
───────────────────────────────────────────── */
function LogoChip({ name, src }: { name: string; src: any }) {
  return (
    <li
      className="
        group flex items-center justify-center
        shrink-0 rounded-2xl
        border border-gray-100 bg-white
        hover:border-accent/40
        hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)]
        transition-all duration-500 cursor-pointer
      "
      style={{
        width:  "clamp(140px, calc((100vw - 200px) / 6), 240px)",
        height: "clamp(90px,  calc((100vw - 200px) / 6 * 0.6), 140px)",
        padding: "clamp(16px, 2.5vw, 32px)",
      }}
    >
      <div className="relative w-full h-full filter grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 28vw, 15vw"
        />
      </div>
    </li>
  );
}