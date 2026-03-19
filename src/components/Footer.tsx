import { Zap, Github, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Platform & Web Development',
  'AI & Data Science',
  'Big Data Solutions',
  'Digital Transformation',
  'Business Intelligence',
  'E-Commerce Solutions',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-[#030303] border-t border-[rgba(255,126,0,0.1)]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#FF7E00]" fill="#FF7E00" />
              <span className="text-[#F5F5F5] font-bold text-lg">
                Unlimited Innovation
              </span>
            </div>
            <p className="text-[#999] text-sm leading-relaxed mb-5">
              Engineering the unthinkable. We partner with visionary
              organizations to build technology that changes what's possible.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 border border-[rgba(255,126,0,0.2)] hover:border-[rgba(255,126,0,0.5)] flex items-center justify-center transition-colors duration-200 group"
                >
                  <Icon className="w-3.5 h-3.5 text-[#999] group-hover:text-[#FF7E00] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#F5F5F5] text-xs font-mono uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#999] text-sm hover:text-[#FF7E00] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#F5F5F5] text-xs font-mono uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-[#999] text-sm hover:text-[#FF7E00] transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#F5F5F5] text-xs font-mono uppercase tracking-widest mb-5">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-[#999]">
              <p>info@unlimitedinnovation.com</p>
              <p>+962 79000000</p>
              <p>Amman, Jordan</p>
            </div>
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-5 px-4 py-2 bg-[#FF7E00] text-[#050505] text-sm font-semibold hover:bg-[#e67000] transition-colors"
            >
              Start a Project
            </button>
          </div>
        </div>

        <div className="border-t border-[rgba(255,126,0,0.1)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#999] text-xs">
            © {new Date().getFullYear()}{' '}
            <span className="text-[#FF7E00]">Unlimited Innovation</span>. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a
                key={link}
                href="#"
                className="text-[#999] text-xs hover:text-[#FF7E00] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
