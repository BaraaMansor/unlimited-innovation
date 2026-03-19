import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const clients = [
  { name: "Meridian Health", initials: "MH", industry: "Healthcare" },
  { name: "Apex Financial", initials: "AF", industry: "FinTech" },
  { name: "Orbis Retail", initials: "OR", industry: "E-Commerce" },
  { name: "StellarLogix", initials: "SL", industry: "Logistics" },
  { name: "NovaCare", initials: "NC", industry: "MedTech" },
  { name: "PrimeEdge", initials: "PE", industry: "SaaS" },
];

const testimonials = [
  {
    quote:
      "Unlimited Innovation transformed our data infrastructure in just 4 months — what used to take hours now runs in minutes. Their team's technical depth is unmatched.",
    author: "Sarah Chen",
    role: "CTO, Apex Financial",
    initials: "SC",
  },
  {
    quote:
      "They didn't just build us a platform — they embedded with our team, understood our domain, and delivered something we couldn't have imagined building on our own.",
    author: "Marcus Reid",
    role: "VP Engineering, StellarLogix",
    initials: "MR",
  },
  {
    quote:
      "The AI solution they architected drives 35% of our revenue now. The ROI was evident within the first quarter. I'd recommend them to any enterprise serious about AI adoption.",
    author: "Dr. Priya Nair",
    role: "Chief Digital Officer, Meridian Health",
    initials: "PN",
  },
];

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="clients" className="py-24 bg-[#050505]" aria-label="Clients and testimonials section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#FF7E00] text-xs font-mono tracking-widest uppercase">
            // Our Clients
          </span>
          <h2 className="text-4xl font-bold text-[#F5F5F5] mt-3">Trusted Worldwide</h2>
          <p className="text-[#999] mt-3 max-w-xl">
            From startups to enterprises, we build lasting partnerships with organizations
            that refuse to settle for ordinary.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-14">
          {clients.map((client, i) => {
            const clientRef = useRef(null);
            const clientInView = useInView(clientRef, { once: true });

            return (
              <motion.div
                key={client.name}
                ref={clientRef}
                initial={{ opacity: 0, x: -10 }}
                animate={clientInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-3 glass-card px-4 py-3"
              >
                <div className="w-8 h-8 border border-[rgba(255,126,0,0.3)] flex items-center justify-center">
                  <span className="text-xs font-bold font-mono text-[#FF7E00]">{client.initials}</span>
                </div>
                <div>
                  <div className="text-[#F5F5F5] text-sm font-medium">{client.name}</div>
                  <div className="text-[#999] text-xs">{client.industry}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const tRef = useRef(null);
            const tInView = useInView(tRef, { once: true, margin: "-60px" });

            return (
              <motion.div
                key={t.author}
                ref={tRef}
                initial={{ opacity: 0, y: 24 }}
                animate={tInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card p-6 flex flex-col"
              >
                <Quote className="w-6 h-6 text-[#FF7E00] mb-4 opacity-60" />
                <p className="text-[#999] text-sm leading-relaxed flex-1 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[rgba(255,126,0,0.1)]">
                  <div className="w-9 h-9 border border-[rgba(255,126,0,0.3)] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold font-mono text-[#FF7E00]">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-[#F5F5F5] text-sm font-semibold">{t.author}</div>
                    <div className="text-[#999] text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
