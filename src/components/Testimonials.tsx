import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Siddharth R.',
    role: 'Member for 1 Year',
    content: 'F60 changed my life. I lost 15kg in 6 months and gained so much confidence. The trainers are truly professional.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sid'
  },
  {
    name: 'Meera K.',
    role: 'Member for 2 Years',
    content: 'The group classes are high energy and fun. I never thought I would enjoy working out this much!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=meera'
  },
  {
    name: 'Amit P.',
    role: 'Member for 6 Months',
    content: 'Best gym in Sion. The equipment is top-notch and the atmosphere is very motivating.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=amit'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Member <span className="text-brand-primary">Success Stories</span></h2>
          <p className="text-gray-400">Hear from those who have transformed their lives at F60.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl glass-card relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-primary/20" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-primary" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-brand-primary"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
