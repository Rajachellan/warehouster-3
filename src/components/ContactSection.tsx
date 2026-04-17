"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-[72px] relative overflow-hidden" style={{ background: "#F5F0E8" }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(180,150,90,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-[1160px] mx-auto px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: "#B89650" }}>
            <span className="w-9 h-px opacity-50" style={{ background: "#B89650" }} />
            Let&apos;s Connect
            <span className="w-9 h-px opacity-50" style={{ background: "#B89650" }} />
          </motion.div>
          <h2 className="text-[44px] font-black leading-[1.15] mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#0A1E46" }}>
            Architect Your Next<br />
            <span style={{ color: "#B89650" }}>Logistics Consultation</span>
          </h2>
          <p className="text-[15px] max-w-[420px] mx-auto leading-[1.65]" style={{ color: "#6B7280" }}>
            Reach out to our team — we&apos;re here to help you find the right warehousing solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-11 items-start">

          {/* Left */}
          <div>
            <div className="flex flex-col gap-4 mb-7">
              {[
                { icon: <Phone size={20} />, label: "Direct Line", value: "+91 95600 11696" },
                { icon: <Mail size={20} />, label: "Email Inquiry", value: "info@warehouster.com" },
                {
                  icon: <MapPin size={20} />, label: "Corporate Office",
                  value: <>3rd Floor, 17, 3rd Cross Street East,<br />Venkatasamy Nagar, Shenoy Nagar,<br />Chennai, Tamil Nadu 600030</>
                },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                  className="flex gap-4 items-start px-5 py-[18px] bg-white rounded-2xl transition-all duration-300 hover:translate-x-1"
                  style={{ border: "1px solid rgba(180,150,90,0.13)" }}>
                  <div className="w-11 h-11 rounded-[11px] flex items-center justify-center flex-shrink-0" style={{ background: "#0A1E46", color: "#B89650" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: "#B89650" }}>{item.label}</p>
                    <p className="text-[13px] font-medium leading-[1.55]" style={{ color: "#0A1E46" }}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden h-[200px]" style={{ border: "1px solid rgba(180,150,90,0.18)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3289330705243!2d80.2273242!3d13.078327700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266819aa33a49%3A0xb98be2b3e8fb4cce!2s3rd%20Floor%2C%2017%2C%203rd%20Cross%20St%20E%2C%20Venkatasamy%20Nagar%2C%20Shenoy%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600030%2C%20India!5e0!3m2!1sen!2suk!4v1774606432597!5m2!1sen!2suk"
                width="100%" height="100%" style={{ border: 0, filter: "sepia(15%) contrast(92%)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl px-9 pt-9 pb-8 relative"
            style={{ border: "1px solid rgba(180,150,90,0.15)", borderTop: "3px solid #B89650" }}>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center" style={{ background: "#FBF6EC" }}>
                <MessageSquare size={13} color="#B89650" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: "#B89650" }}>Send a Message</span>
            </div>
            <h3 className="text-[22px] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#0A1E46" }}>
              We&apos;ll respond within 24 hours.
            </h3>
            <p className="text-[12px] mb-5" style={{ color: "#9CA3AF" }}>Fill in your details and we&apos;ll be in touch shortly.</p>
            <div className="h-px mb-5" style={{ background: "#F3EDE0" }} />

            <form className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                {[["Name", "text", "Your name"], ["Email", "email", "your@email.com"]].map(([label, type, ph]) => (
                  <div key={label}>
                    <label className="block text-[9px] font-bold tracking-[0.18em] uppercase mb-[5px]" style={{ color: "#9CA3AF" }}>{label}</label>
                    <input type={type} placeholder={ph}
                      className="w-full rounded-[10px] px-[14px] py-[10px] text-[13px] outline-none transition-all"
                      style={{ background: "#FAFAF8", border: "1px solid #EDE8DC", color: "#0A1E46" }}
                      onFocus={e => (e.target.style.borderColor = "#B89650")}
                      onBlur={e => (e.target.style.borderColor = "#EDE8DC")}
                    />
                  </div>
                ))}
              </div>
              {[
                { label: "Mobile Number", type: "tel", ph: "+91 xxxxx xxxxx" },
              ].map(({ label, type, ph }) => (
                <div key={label}>
                  <label className="block text-[9px] font-bold tracking-[0.18em] uppercase mb-[5px]" style={{ color: "#9CA3AF" }}>{label}</label>
                  <input type={type} placeholder={ph}
                    className="w-full rounded-[10px] px-[14px] py-[10px] text-[13px] outline-none transition-all"
                    style={{ background: "#FAFAF8", border: "1px solid #EDE8DC", color: "#0A1E46" }}
                    onFocus={e => (e.target.style.borderColor = "#B89650")}
                    onBlur={e => (e.target.style.borderColor = "#EDE8DC")}
                  />
                </div>
              ))}
              <div>
                <label className="block text-[9px] font-bold tracking-[0.18em] uppercase mb-[5px]" style={{ color: "#9CA3AF" }}>Type of Enquiry</label>
                <div className="relative">
                  <select defaultValue=""
                    className="w-full rounded-[10px] px-[14px] py-[10px] text-[13px] outline-none transition-all appearance-none cursor-pointer"
                    style={{ background: "#FAFAF8", border: "1px solid #EDE8DC", color: "#0A1E46" }}
                    onFocus={e => (e.target.style.borderColor = "#B89650")}
                    onBlur={e => (e.target.style.borderColor = "#EDE8DC")}
                  >
                    <option value="" disabled>Choose an option</option>
                    <option>Leasing</option>
                    <option>Land &amp; Warehouse Investments</option>
                    <option>HR &amp; Admin</option>
                    <option>Media / Marketing</option>
                    <option>Projects &amp; Development</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg width="14" height="14" fill="none" stroke="#9CA3AF" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-bold tracking-[0.18em] uppercase mb-[5px]" style={{ color: "#9CA3AF" }}>Message</label>
                <textarea rows={4} placeholder="Tell us about your requirements..."
                  className="w-full rounded-[10px] px-[14px] py-[10px] text-[13px] outline-none transition-all resize-none"
                  style={{ background: "#FAFAF8", border: "1px solid #EDE8DC", color: "#0A1E46" }}
                  onFocus={e => (e.target.style.borderColor = "#B89650")}
                  onBlur={e => (e.target.style.borderColor = "#EDE8DC")}
                />
              </div>
              <button type="submit"
                className="w-full py-[14px] rounded-[11px] text-[10px] font-bold tracking-[0.22em] uppercase flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                style={{ background: "#0A1E46", color: "#fff" }}
                onMouseEnter={e => ((e.target as HTMLButtonElement).style.background = "#B89650")}
                onMouseLeave={e => ((e.target as HTMLButtonElement).style.background = "#0A1E46")}
              >
                <Send size={12} /> Launch Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}