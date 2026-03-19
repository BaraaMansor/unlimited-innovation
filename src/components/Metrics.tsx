import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 99.9, suffix: "%", label: "Uptime SLA", description: "Enterprise-grade reliability" },
  { value: 50, suffix: "+", label: "Projects Delivered", description: "Across 8 industries" },
  { value: 15, suffix: "+", label: "Global Partners", description: "Strategic alliances" },
  { value: 5, suffix: "M+", label: "Records Processed Daily", description: "Big data at scale" },
];

function Counter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  const display =
    target % 1 !== 0
      ? count.toFixed(1)
      : Math.floor(count).toString();

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-[#050505]" aria-label="Key metrics section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-[#FF7E00] text-xs font-mono tracking-widest uppercase">
            // By the Numbers
          </span>
          <h2 className="text-4xl font-bold text-[#F5F5F5] mt-3">Proven at Scale</h2>
          <p className="text-[#999] mt-3">
            Real results from real projects — because numbers don't lie.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-40px" });

            return (
              <motion.div
                key={metric.label}
                ref={cardRef}
                initial={{ opacity: 0, y: 20 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold font-mono text-[#FF7E00] mb-2">
                  <Counter target={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-[#F5F5F5] font-semibold mb-1">{metric.label}</div>
                <div className="text-[#999] text-xs">{metric.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
