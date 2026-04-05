import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-primary/20 text-brand-primary px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              Elite Fitness Experience
            </span>
            <h1 className="text-6xl md:text-8xl leading-none mb-6">
              Transform Your <br />
              <span className="text-gradient">Body & Mind</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              F60 Fitness Studio is where discipline meets results. Join Mumbai's premier studio for professional training and life-changing transformations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Book a Free Trial <ArrowRight size={20} />
              </a>
              <a href="#pricing" className="btn-secondary">
                View Memberships
              </a>
            </div>
          </motion.div>

          {/* Quick Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 glass-card rounded-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="bg-brand-primary/20 p-3 rounded-full">
                <Star className="text-brand-primary" size={24} fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-lg">5.0 Rating</p>
                <p className="text-sm text-gray-400">22+ Google Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-primary/20 p-3 rounded-full">
                <MapPin className="text-brand-primary" size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">Sion (W), Mumbai</p>
                <p className="text-sm text-gray-400">Premium Location</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-primary/20 p-3 rounded-full">
                <Phone className="text-brand-primary" size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">079900 37775</p>
                <p className="text-sm text-gray-400">Call Us Today</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
