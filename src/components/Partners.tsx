import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const partners = [
  { name: 'TechCorp Global', initials: 'TC' },
  { name: 'DataSphere', initials: 'DS' },
  { name: 'CloudAxis', initials: 'CA' },
  { name: 'NexusAI', initials: 'NA' },
  { name: 'InfraScale', initials: 'IS' },
  { name: 'QuantumSoft', initials: 'QS' },
  { name: 'VectorOps', initials: 'VO' },
  { name: 'CipherNet', initials: 'CN' },
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="partners"
      className="py-24 bg-[#030303]"
      aria-label="Partners section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#FF7E00] text-xs tracking-widest uppercase">
            Trusted By
          </span>
          <h2 className="text-4xl font-bold text-[#F5F5F5] mt-3">
            Our Partners
          </h2>
          <p className="text-[#999] mt-3 max-w-xl">
            We work with industry leaders and innovative organizations across
            the globe.
          </p>
        </motion.div>

        <div className="glass-card p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((partner, i) => {
              const cardRef = useRef(null);
              const cardInView = useInView(cardRef, {
                once: true,
                margin: '-40px',
              });

              return (
                <motion.div
                  key={partner.name}
                  ref={cardRef}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex flex-col items-center gap-3 p-6 border border-[rgba(255,126,0,0.08)] hover:border-[rgba(255,126,0,0.25)] transition-colors duration-300 cursor-default group"
                >
                  <div className="w-14 h-14 border border-[rgba(255,126,0,0.2)] group-hover:border-[rgba(255,126,0,0.4)] flex items-center justify-center transition-colors duration-300">
                    <span className="text-lg font-bold font-mono text-[#FF7E00]">
                      {partner.initials}
                    </span>
                  </div>
                  <span className="text-[#999] text-xs text-center group-hover:text-[#F5F5F5] transition-colors duration-300">
                    {partner.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
