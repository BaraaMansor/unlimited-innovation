import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505]" aria-label="About section">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedCard>
          <div className="mb-14">
            <span className="text-[#FF7E00] text-xs font-mono tracking-widest uppercase">
              // Who We Are
            </span>
            <h2 className="text-4xl font-bold text-[#F5F5F5] mt-3">
              Mission &amp; Vision
            </h2>
            <p className="text-[#999] mt-3 max-w-xl">
              We exist to bridge the gap between ambition and execution — turning complex challenges
              into elegant digital solutions.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedCard delay={0.15}>
            <div className="glass-card glass-card-hover p-8 h-full">
              <div className="w-12 h-12 border border-[rgba(255,126,0,0.3)] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#FF7E00]" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Our Mission</h3>
              <p className="text-[#999] leading-relaxed">
                To empower businesses through innovative technology solutions that drive measurable
                growth, operational efficiency, and sustainable competitive advantage. We partner
                with organizations to architect and deliver digital transformation at scale — from
                ideation to deployment and beyond.
              </p>
              <div className="mt-6 pt-6 border-t border-[rgba(255,126,0,0.1)]">
                <div className="flex flex-wrap gap-2">
                  {["Scale", "Innovate", "Deliver"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-[#FF7E00] border border-[rgba(255,126,0,0.3)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.25}>
            <div className="glass-card glass-card-hover p-8 h-full">
              <div className="w-12 h-12 border border-[rgba(255,126,0,0.3)] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[#FF7E00]" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Our Vision</h3>
              <p className="text-[#999] leading-relaxed">
                To be the leading technology partner for forward-thinking enterprises seeking to
                harness the full potential of AI, data, and cloud-native architectures. We envision
                a world where every organization has access to enterprise-grade digital capabilities
                — regardless of size or industry.
              </p>
              <div className="mt-6 pt-6 border-t border-[rgba(255,126,0,0.1)]">
                <div className="flex flex-wrap gap-2">
                  {["AI-First", "Cloud-Native", "Data-Driven"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-[#FF7E00] border border-[rgba(255,126,0,0.3)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
