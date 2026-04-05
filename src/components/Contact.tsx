import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Get In <span className="text-brand-primary">Touch</span></h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Ready to start your transformation? Visit our studio or drop us a message. We're here to help you achieve your fitness goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-brand-primary/20 p-4 rounded-2xl text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Our Location</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Sankalpana sco, Virangula Niwas, Sant Rohidas Marg, <br />
                    Kala Khila, opp. Ashok Mill Compound Road, <br />
                    Sion (W), Mumbai, Maharashtra 400017
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-brand-primary/20 p-4 rounded-2xl text-brand-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">079900 37775</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-brand-primary/20 p-4 rounded-2xl text-brand-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm">hello@f60fitness.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="bg-white/5 p-4 rounded-2xl hover:bg-brand-primary transition-all group">
                    <Icon size={24} className="group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-hidden transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-hidden transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-hidden transition-all" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Interested Service</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-hidden transition-all appearance-none">
                  <option className="bg-zinc-900">Personal Training</option>
                  <option className="bg-zinc-900">Group Classes</option>
                  <option className="bg-zinc-900">Body Transformation</option>
                  <option className="bg-zinc-900">Yoga</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-hidden transition-all" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4">Send Message</button>
            </form>
          </motion.div>
        </div>

        {/* Map Embed */}
        <div className="mt-24 rounded-3xl overflow-hidden h-96 border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.391151634543!2d72.8584443!3d19.0465556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d999999999%3A0x1234567890abcdef!2sF60%20Fitness%20Studio!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
