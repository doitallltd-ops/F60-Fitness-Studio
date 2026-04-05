import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const plans = [
  {
    name: 'Starter',
    duration: '1 Month',
    price: '₹3,500',
    bestFor: 'Beginners',
    features: [
      'Access to Gym Floor',
      'Basic Workout Plan',
      'Locker Facility',
      '2 Group Classes/Week'
    ]
  },
  {
    name: 'Pro',
    duration: '3 Months',
    price: '₹9,000',
    bestFor: 'Consistent Trainers',
    popular: true,
    features: [
      'Access to Gym Floor',
      'Personalized Workout Plan',
      'Nutrition Consultation',
      'Unlimited Group Classes',
      'Progress Tracking'
    ]
  },
  {
    name: 'Elite',
    duration: '6 Months',
    price: '₹16,000',
    bestFor: 'Transformation Goals',
    features: [
      'All Pro Features',
      '1-on-1 Personal Training (4 sessions)',
      'Advanced Body Analysis',
      'Supplement Advice',
      'Priority Support'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Membership <span className="text-brand-primary">Plans</span></h2>
          <p className="text-gray-400">Choose the plan that fits your fitness journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'p-10 rounded-3xl glass-card relative flex flex-col',
                plan.popular && 'border-brand-primary ring-1 ring-brand-primary'
              )}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">{plan.bestFor}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-gray-400 text-sm">/ {plan.duration}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="bg-brand-primary/20 p-1 rounded-full">
                      <Check size={12} className="text-brand-primary" />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                'w-full py-4 rounded-full font-bold uppercase tracking-widest transition-all',
                plan.popular ? 'bg-brand-primary text-white hover:bg-orange-600' : 'bg-white/10 text-white hover:bg-white/20'
              )}>
                Join Today
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
