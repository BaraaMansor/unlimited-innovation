import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="contact"
      className="py-24 bg-[#030303]"
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#FF7E00] text-xs font-mono tracking-widest uppercase">
            // Get in Touch
          </span>
          <h2 className="text-4xl font-bold text-[#F5F5F5] mt-3">
            Start a Project
          </h2>
          <p className="text-[#999] mt-3 max-w-xl">
            Ready to engineer the unthinkable? Tell us about your vision and
            we'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-[#F5F5F5] font-bold text-xl mb-2">
                Let's Build Together
              </h3>
              <p className="text-[#999] text-sm leading-relaxed">
                Whether you're launching a new product, modernizing legacy
                infrastructure, or exploring AI capabilities — we want to hear
                your story.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'info@unlimitedinnovation.com' },
                { icon: Phone, label: '+962 79 000 000' },
                { icon: MapPin, label: 'Amman, Jordan' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-[rgba(255,126,0,0.3)] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#FF7E00]" />
                  </div>
                  <span className="text-[#999] text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div className="glass-card p-5 border-l-2 border-[#FF7E00]">
              <div className="text-[#F5F5F5] font-semibold text-sm mb-1">
                Typical Response Time
              </div>
              <div className="text-[#FF7E00] text-2xl font-bold font-mono">
                &lt; 24hrs
              </div>
              <div className="text-[#999] text-xs mt-1">
                We don't keep ambitious teams waiting.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              className="glass-card p-8 space-y-5"
              onSubmit={e => e.preventDefault()}
              aria-label="Contact form"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#999] text-xs font-mono mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full bg-[#0A0A0A] border border-[rgba(255,126,0,0.15)] text-[#F5F5F5] px-4 py-3 text-sm placeholder-[#444] focus:outline-none focus:border-[rgba(255,126,0,0.5)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#999] text-xs font-mono mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full bg-[#0A0A0A] border border-[rgba(255,126,0,0.15)] text-[#F5F5F5] px-4 py-3 text-sm placeholder-[#444] focus:outline-none focus:border-[rgba(255,126,0,0.5)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#999] text-xs font-mono mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="I want to build..."
                  className="w-full bg-[#0A0A0A] border border-[rgba(255,126,0,0.15)] text-[#F5F5F5] px-4 py-3 text-sm placeholder-[#444] focus:outline-none focus:border-[rgba(255,126,0,0.5)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#999] text-xs font-mono mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="w-full bg-[#0A0A0A] border border-[rgba(255,126,0,0.15)] text-[#F5F5F5] px-4 py-3 text-sm placeholder-[#444] focus:outline-none focus:border-[rgba(255,126,0,0.5)] transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#FF7E00] text-[#050505] font-semibold hover:bg-[#e67000] transition-colors duration-200"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <p className="text-[#999] text-xs text-center">
                Your information is confidential and never shared with third
                parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
