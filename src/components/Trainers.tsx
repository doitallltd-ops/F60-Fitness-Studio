import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Vikram Singh',
    role: 'Head Trainer',
    specialty: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop',
    experience: '8+ Years'
  },
  {
    name: 'Priya Sharma',
    role: 'Fitness Coach',
    specialty: 'Body Transformation',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop',
    experience: '5+ Years'
  },
  {
    name: 'Rahul Mehta',
    role: 'HIIT Specialist',
    specialty: 'Weight Loss',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    experience: '6+ Years'
  },
  {
    name: 'Anjali Rao',
    role: 'Yoga Expert',
    specialty: 'Mindfulness & Flexibility',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
    experience: '7+ Years'
  }
];

export default function Trainers() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Meet Our <span className="text-brand-primary">Experts</span></h2>
          <p className="text-gray-400">Professional trainers dedicated to your success.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                  <h4 className="text-xl mb-1">{trainer.name}</h4>
                  <p className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">{trainer.role}</p>
                  <p className="text-gray-400 text-xs mb-4">{trainer.specialty} • {trainer.experience}</p>
                  <div className="flex gap-3">
                    <Instagram size={18} className="text-white hover:text-brand-primary cursor-pointer transition-colors" />
                    <Twitter size={18} className="text-white hover:text-brand-primary cursor-pointer transition-colors" />
                    <Linkedin size={18} className="text-white hover:text-brand-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
