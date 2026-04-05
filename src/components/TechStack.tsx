import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const techs = [
  { name: 'React', icon: '⚛' },
  { name: 'Node.js', icon: '⬡' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '⎈' },
  { name: 'TensorFlow', icon: '▲' },
  { name: 'Spark', icon: '⚡' },
  { name: 'Kafka', icon: 'K' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Redis', icon: 'R' },
  { name: 'Terraform', icon: '◆' },
  { name: 'Next.js', icon: '▶' },
  { name: 'Snowflake', icon: '❄' },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      className="py-20 bg-[#050505] overflow-hidden"
      aria-label="Technology stack section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-[#FF7E00] text-xs tracking-widest uppercase">
            Technologies
          </span>
          <h2 className="text-4xl font-bold text-[#F5F5F5] mt-3">
            Our Tech Stack
          </h2>
          <p className="text-[#999] mt-3">
            We work with best-in-class tools and platforms to build resilient,
            scalable solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...techs, ...techs].map((tech, i) => (
              <div
                key={i}
                className="shrink-0 glass-card px-5 py-3 flex items-center gap-3"
              >
                <span className="text-[#FF7E00] text-lg font-mono leading-none">
                  {tech.icon}
                </span>
                <span className="text-[#F5F5F5] text-sm font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
