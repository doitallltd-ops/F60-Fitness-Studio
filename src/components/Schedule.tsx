import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const scheduleData = {
  Mon: [
    { time: '07:00 AM', class: 'HIIT Cardio', trainer: 'Rahul', spots: 5 },
    { time: '09:00 AM', class: 'Strength Training', trainer: 'Priya', spots: 8 },
    { time: '05:00 PM', class: 'Yoga Flow', trainer: 'Anjali', spots: 12 },
    { time: '07:00 PM', class: 'CrossFit', trainer: 'Vikram', spots: 4 },
  ],
  Tue: [
    { time: '07:00 AM', class: 'Body Pump', trainer: 'Priya', spots: 6 },
    { time: '09:00 AM', class: 'Zumba', trainer: 'Sneha', spots: 15 },
    { time: '06:00 PM', class: 'Kickboxing', trainer: 'Vikram', spots: 10 },
  ],
  // ... simplified for demo
  Wed: [{ time: '07:00 AM', class: 'Core Blast', trainer: 'Rahul', spots: 10 }],
  Thu: [{ time: '08:00 AM', class: 'Power Yoga', trainer: 'Anjali', spots: 8 }],
  Fri: [{ time: '07:00 AM', class: 'HIIT Cardio', trainer: 'Rahul', spots: 5 }],
  Sat: [{ time: '09:00 AM', class: 'Weekend Warrior', trainer: 'Vikram', spots: 20 }],
  Sun: [{ time: '10:00 AM', class: 'Recovery Session', trainer: 'Anjali', spots: 25 }],
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('Mon');

  return (
    <section id="schedule" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Class <span className="text-brand-primary">Schedule</span></h2>
          <p className="text-gray-400">Plan your week and book your favorite classes.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={cn(
                'px-6 py-3 rounded-full font-bold uppercase tracking-widest transition-all',
                activeDay === day
                  ? 'bg-brand-primary text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              )}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(scheduleData[activeDay as keyof typeof scheduleData] || []).map((item, index) => (
            <motion.div
              key={`${item.class}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl glass-card flex items-center justify-between group hover:border-brand-primary/30 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="bg-brand-primary/20 p-4 rounded-xl text-brand-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{item.time}</p>
                  <h4 className="text-xl">{item.class}</h4>
                  <div className="flex items-center gap-2 mt-1 text-gray-400">
                    <User size={14} />
                    <span className="text-xs font-bold uppercase">{item.trainer}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold uppercase text-brand-primary mb-2">{item.spots} Spots Left</p>
                <button className="btn-primary py-2 px-4 text-xs">Book Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
