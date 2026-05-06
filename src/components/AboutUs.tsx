"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Warehouse from "../assets/parks/redhills-park-img.webp";

const P = "#0A1428";
const G = "#D4AF37";
const G20 = "rgba(212,175,55,0.2)";
const G10 = "rgba(212,175,55,0.1)";
const N50 = "rgba(10,20,40,0.5)";
const N40 = "rgba(10,20,40,0.4)";

export default function AboutSection() {
  return (
    <section className="bg-white py-28 relative overflow-hidden">

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0A1428_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ─── LEFT SIDE ─── */}
          <div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#D4AF37]">
                About Us
              </span>
            </div>

            {/* Title */}
            <h2
              className="font-serif font-black leading-[0.95] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(36px,5vw,60px)", color: P }}
            >
              About{" "}
              <span style={{ color: G }}>Warehouster</span>
            </h2>

            {/* Image FIXED */}
            <div className="relative w-full h-[350px] rounded-[24px] overflow-hidden">
              <Image
                src={Warehouse}
                alt="About"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/40 to-transparent" />

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2" style={{ borderColor: G }} />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2" style={{ borderColor: G }} />
            </div>
          </div>

          {/* ─── RIGHT SIDE ─── */}
          <div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[15px] leading-[1.9] mb-10 "
              style={{ color: N50 }}
            >
                <p className="text-justify text-gray-600  ">Warehouster is a next-generation industrial and logistics real
              estate platform focused on developing Grade-A warehousing
              and industrial infrastructure.
              <br /><br />
              We specialize in identifying strategic logistics corridors, acquiring high-potential land
              parcels, and developing institutional-grade industrial assets designed for long-term
              performance.</p>
              
            </motion.p>

            {/* 🔥 PREMIUM MORAL BOX */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-[24px]"
              style={{
                border: `1px solid ${G20}`,
                background: "#fff",
                boxShadow: `0 10px 40px ${G10}`,
              }}
            >

              {/* Quote line */}
              <div className="absolute top-0 left-0 h-full w-[3px]" style={{ background: G }} />

              {/* Content */}
              <h3
                className="font-serif font-black text-xl mb-3"
                style={{ color: P }}
              >
                We don’t build sheds.
              </h3>

              <p
                className="text-[14px] leading-[1.8]"
                style={{ color: N40 }}
              >
                We build structured industrial ecosystems.
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 hover:w-full transition-all duration-500"
                style={{ background: G }}
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}