"use client";
 
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
 
const stats = [
  { label: "Developed Space", value: 12, suffix: "M+", sub: "Square Feet" },
  { label: "Strategic Locations", value: 25, suffix: "+", sub: "Pan India" },
  { label: "Active Clients", value: 150, suffix: "+", sub: "Fortune 500" },
  { label: "Asset Management", value: 2, prefix: "$", suffix: "B+", sub: "Value Managed" },
];
 
function Counter({ value, direction = "up" }: { value: number; direction?: "up" | "down" }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
 
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);
 
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);
 
  return <span ref={ref} />;
}
 
export default function StatsSection() {
  return (
    <section className="py-24 bg-[#0A1428] text-white overflow-hidden relative border-y border-white/5">
      {/* Sophisticated Architectural Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0,transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 relative">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center group relative px-4"
            >
              {/* Vertical Divider (Desktop) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
 
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl lg:text-8xl font-serif font-black text-accent mb-6 flex items-baseline tracking-tighter">
                  {stat.prefix && <span className="text-3xl md:text-4xl lg:text-5xl mr-1 opacity-80">{stat.prefix}</span>}
                  <Counter value={stat.value} />
                  <span className="text-3xl md:text-4xl lg:text-5xl ml-1 font-sans opacity-60">{stat.suffix}</span>
                </div>
               
                <div className="space-y-2">
                  <div className="text-[12px] md:text-sm font-sans font-black uppercase tracking-[0.5em] text-white/90 group-hover:text-primary transition-colors duration-500">
                    {stat.label}
                  </div>
                  <div className="text-white/20 font-sans font-black uppercase text-[10px] tracking-[0.3em] group-hover:text-white/40 transition-colors duration-500">
                    {stat.sub}
                  </div>
                </div>
              </div>
 
              {/* Decorative Corner (Mobile) */}
              <div className="lg:hidden absolute bottom-[-32px] left-1/2 -translate-x-1/2 w-12 h-px bg-white/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}