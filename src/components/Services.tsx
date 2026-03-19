import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Brain, Database, RefreshCw, BarChart2, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Platform & Web Development",
    description:
      "Scalable, high-performance web applications and platforms built with modern frameworks and cloud-native architecture.",
    tags: ["React", "Node.js", "AWS", "TypeScript", "Next.js"],
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    description:
      "Custom machine learning models, NLP pipelines, and AI integrations that extract actionable intelligence from your data.",
    tags: ["Python", "TensorFlow", "OpenAI", "LangChain", "PyTorch"],
  },
  {
    icon: Database,
    title: "Big Data Solutions",
    description:
      "End-to-end data pipeline architecture, real-time streaming, and lake/warehouse solutions that handle data at any scale.",
    tags: ["Spark", "Kafka", "Snowflake", "dbt", "Airflow"],
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description:
      "Strategic consulting and hands-on execution to modernize legacy systems, automate workflows, and drive organizational change.",
    tags: ["Strategy", "DevOps", "CI/CD", "Docker", "Kubernetes"],
  },
  {
    icon: BarChart2,
    title: "Business Intelligence",
    description:
      "Interactive dashboards, self-serve analytics, and embedded reporting that turn raw data into competitive advantage.",
    tags: ["Tableau", "Power BI", "Metabase", "PostgreSQL", "GraphQL"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Full-stack e-commerce platforms with seamless payment integrations, inventory management, and conversion-optimized UX.",
    tags: ["Shopify", "Stripe", "WooCommerce", "Next.js", "REST API"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card p-6 cursor-default transition-all duration-300"
      style={{
        borderColor: hovered ? "rgba(255,126,0,0.4)" : "rgba(255,126,0,0.15)",
        boxShadow: hovered ? "0 0 24px rgba(255,126,0,0.08)" : "none",
      }}
    >
      <div className="w-10 h-10 border border-[rgba(255,126,0,0.3)] flex items-center justify-center mb-5">
        <service.icon className="w-5 h-5 text-[#FF7E00]" />
      </div>
      <h3 className="text-base font-bold text-[#F5F5F5] mb-2">{service.title}</h3>
      <p className="text-[#999] text-sm leading-relaxed mb-4">{service.description}</p>

      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
        transition={{ duration: 0.2 }}
        className="flex flex-wrap gap-1.5"
      >
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] font-mono text-[#FF7E00] border border-[rgba(255,126,0,0.25)] bg-[rgba(255,126,0,0.05)]"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.article>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-24 bg-[#030303]" aria-label="Services section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#FF7E00] text-xs font-mono tracking-widest uppercase">
            // What We Build
          </span>
          <h2 className="text-4xl font-bold text-[#F5F5F5] mt-3">Our Services</h2>
          <p className="text-[#999] mt-3 max-w-xl">
            From concept to cloud — we deliver full-lifecycle technology solutions across six
            core competencies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
