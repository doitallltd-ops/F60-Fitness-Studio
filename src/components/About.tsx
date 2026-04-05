import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Trophy, Zap } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Members', value: '500+' },
  { icon: Trophy, label: 'Transformations', value: '150+' },
  { icon: Zap, label: 'Expert Trainers', value: '10+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                alt="Trainer working with client"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-primary p-8 rounded-3xl hidden md:block">
              <p className="text-4xl font-black mb-1">10+</p>
              <p className="text-sm font-bold uppercase tracking-widest">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Our Mission & <span className="text-brand-primary">Philosophy</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At F60 Fitness Studio, we believe that fitness is not just about looking good, but about feeling powerful and disciplined. Our mission is to provide a supportive environment where every member can push their limits and achieve their personal best.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Professional Certified Trainers',
                'State-of-the-art Equipment',
                'Personalized Nutrition Plans',
                'Supportive Community Culture'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  <span className="font-bold text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 glass-card rounded-2xl">
                  <stat.icon className="mx-auto text-brand-primary mb-2" size={24} />
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
