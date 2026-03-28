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
    <section className="py-20 bg-white overflow-hidden">
      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="h-px w-8 bg-accent" />
          <span className="text-[9px] font-black uppercase tracking-[0.35em] text-accent">
            Network
          </span>
          <span className="h-px w-8 bg-accent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight tracking-tight mb-4"
        >
          Our Ecosystem,{" "}
          <span className="text-accent italic">Your Advantage</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-sm font-sans text-primary/50 max-w-sm mx-auto leading-relaxed"
        >
          Marquee Occupiers &amp; Investors that trust Warehouster.
        </motion.p>
      </div>

      {/* ── Marquee ── */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        {/*
          We use px-6 (24px) on each side = 48px total horizontal padding.
          6 logos + 5 gaps of 20px each visible at once.
          Logo width = (100vw - 48px - 100px) / 6  →  clamp(110px, 14vw, 190px)
        */}
        <div className="flex overflow-hidden">
          <ul className="flex shrink-0 list-none m-0 p-0 gap-5 ecosystem-marquee">
            {loopList.map((p, i) => (
              <LogoChip key={`a-${i}`} name={p.name} src={p.src} />
            ))}
          </ul>
          <ul className="flex shrink-0 list-none m-0 p-0 gap-5 ecosystem-marquee" aria-hidden>
            {loopList.map((p, i) => (
              <LogoChip key={`b-${i}`} name={p.name} src={p.src} />
            ))}
          </ul>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ecosystemScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .ecosystem-marquee {
          animation: ecosystemScroll 30s linear infinite;
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
        border border-primary/10 bg-white
        hover:border-accent/40
        hover:shadow-[0_0_0_1.5px_rgba(212,175,55,0.28),0_6px_24px_rgba(212,175,55,0.07)]
        transition-all duration-300 cursor-pointer
      "
      style={{
        /* 6 chips + 5×20px gaps + 2×24px page padding ≈ 148px overhead */
        width:  "clamp(110px, calc((100vw - 148px) / 6), 190px)",
        height: "clamp(68px,  calc((100vw - 148px) / 6 * 0.58), 112px)",
        padding: "clamp(10px, 1.6vw, 22px)",
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain  transition-all duration-350"
          sizes="(max-width: 640px) 28vw, 15vw"
        />
      </div>
    </li>
  );
}