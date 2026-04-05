import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Users, Zap, Heart, Target, Apple } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Personal Training',
    description: 'One-on-one sessions tailored specifically to your goals and fitness level.',
    price: '₹5000/mo'
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'High-energy group workouts including HIIT, Yoga, and Strength training.',
    price: '₹3000/mo'
  },
  {
    icon: Zap,
    title: 'Body Transformation',
    description: 'Comprehensive 12-week programs designed for maximum results.',
    price: '₹12000'
  },
  {
    icon: Target,
    title: 'Strength & Conditioning',
    description: 'Build raw power and improve athletic performance with expert guidance.',
    price: '₹4000/mo'
  },
  {
    icon: Heart,
    title: 'Weight Loss Programs',
    description: 'Scientifically backed methods to shed fat and tone your physique.',
    price: '₹4500/mo'
  },
  {
    icon: Apple,
    title: 'Nutrition Coaching',
    description: 'Customized meal plans and dietary advice to fuel your progress.',
    price: '₹2000/mo'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">Our Premium <span className="text-brand-primary">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a wide range of fitness solutions to help you reach your peak performance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl glass-card hover:border-brand-primary/50 transition-all group"
            >
              <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                <service.icon className="text-brand-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-2xl mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-black text-brand-primary">{service.price}</span>
                <button className="text-sm font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
