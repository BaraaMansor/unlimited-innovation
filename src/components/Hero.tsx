import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const codeLines = [
  { indent: 0, text: "class Innovation {", color: "#FF7E00" },
  { indent: 1, text: "async transform(business) {", color: "#F5F5F5" },
  { indent: 2, text: "const strategy = await", color: "#999" },
  { indent: 3, text: "this.analyze(business);", color: "#999" },
  { indent: 2, text: "return deploy(", color: "#F5F5F5" },
  { indent: 3, text: "strategy.optimize()", color: "#FF7E00" },
  { indent: 2, text: ");", color: "#F5F5F5" },
  { indent: 1, text: "}", color: "#F5F5F5" },
  { indent: 0, text: "}", color: "#FF7E00" },
];

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWork = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF7E00]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FF7E00]/3 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,126,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,126,0,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center py-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-[rgba(255,126,0,0.3)] text-[#FF7E00] text-xs font-mono tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 bg-[#FF7E00] rounded-full animate-pulse" />
            Digital Transformation Partner
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold text-[#F5F5F5] leading-[1.05] tracking-tight mb-6">
            Engineering the{" "}
            <span className="text-[#FF7E00]">Unthinkable.</span>
          </h1>

          <p className="text-[#999] text-lg leading-relaxed mb-10 max-w-lg">
            We are your trusted partner in digital transformation — building scalable platforms,
            AI-powered solutions, and data-driven systems that push the boundaries of what's possible.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3 bg-[#FF7E00] text-[#050505] font-semibold hover:bg-[#e67000] transition-colors duration-200"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToWork}
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(255,126,0,0.4)] text-[#F5F5F5] hover:border-[#FF7E00] hover:text-[#FF7E00] transition-colors duration-200"
            >
              View Work
            </motion.button>
          </div>

          <div className="flex items-center gap-8 mt-14 pt-8 border-t border-[rgba(255,126,0,0.1)]">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "15+", label: "Global Partners" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#FF7E00] font-mono">{stat.value}</div>
                <div className="text-xs text-[#999] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="glass-card p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[rgba(255,126,0,0.1)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[#999] text-xs">innovation.ts</span>
              </div>
              <div className="space-y-1">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
                    className="flex"
                    style={{ paddingLeft: `${line.indent * 16}px` }}
                  >
                    <span className="text-[#444] text-xs w-6 mr-4 select-none text-right">
                      {i + 1}
                    </span>
                    <span style={{ color: line.color }}>{line.text}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 2, duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-[#FF7E00] ml-1 mt-1 align-middle"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card px-3 py-2 text-xs"
            >
              <span className="text-[#FF7E00] font-mono">✓</span>{" "}
              <span className="text-[#F5F5F5]">Deployed to production</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card px-3 py-2 text-xs"
            >
              <span className="text-green-400 font-mono">●</span>{" "}
              <span className="text-[#F5F5F5]">99.9% uptime</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-[#999]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
