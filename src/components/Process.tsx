import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Layers, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Deep-dive into your business goals, technical constraints, and user needs. We audit your current stack and define measurable success criteria before a single line of code is written.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Design",
    description:
      "Architecture blueprints, system design, and UX wireframes. We validate assumptions early with prototypes and stakeholder reviews to eliminate costly pivots later.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "Agile sprints with continuous integration, automated testing, and bi-weekly demos. You have full visibility and control throughout the entire build process.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    description:
      "Zero-downtime deployments to production with monitoring, alerting, and performance tuning baked in from day one. We stay on until your team is confident and self-sufficient.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-[#030303]" aria-label="Process section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#FF7E00] text-xs font-mono tracking-widest uppercase">
            // How We Work
          </span>
          <h2 className="text-4xl font-bold text-[#F5F5F5] mt-3">Our Process</h2>
          <p className="text-[#999] mt-3 max-w-xl">
            A proven four-phase methodology that reduces risk, accelerates delivery, and ensures
            what we build actually works in the real world.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,126,0,0.3)] to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const stepRef = useRef(null);
              const stepInView = useInView(stepRef, { once: true, margin: "-60px" });

              return (
                <motion.div
                  key={step.number}
                  ref={stepRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={stepInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="glass-card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 border border-[rgba(255,126,0,0.3)] flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-[#FF7E00]" />
                      </div>
                      <span className="text-4xl font-bold font-mono text-[rgba(255,126,0,0.12)]">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-[#F5F5F5] font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-[#999] text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-8 z-10">
                      <div className="w-6 h-6 rounded-full border border-[rgba(255,126,0,0.4)] bg-[#030303] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF7E00]" />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
