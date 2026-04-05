import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="bg-brand-primary p-2 rounded-lg">
                <Dumbbell className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter">F60 <span className="text-brand-primary">STUDIO</span></span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mumbai's premier fitness destination. We combine expert coaching with a high-energy environment to help you achieve the results you deserve.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Schedule', 'Pricing', 'Blog'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-bold uppercase tracking-widest">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6">Business Hours</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white font-bold">06:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white font-bold">07:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-bold">08:00 AM - 12:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">Subscribe to get fitness tips and exclusive offers.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-hidden focus:border-brand-primary flex-grow"
              />
              <button className="bg-brand-primary p-2 rounded-xl hover:bg-orange-600 transition-colors">
                <ArrowUp size={20} className="rotate-45" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            © 2026 F60 Fitness Studio. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-white/5 p-3 rounded-full hover:bg-brand-primary transition-all group"
          >
            <ArrowUp size={20} className="group-hover:text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
