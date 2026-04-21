'use client';

import Image from 'next/image';
import { Testimonial } from '@/lib/supabase';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = typeof testimonial.rating === 'number' ? testimonial.rating : 5;
  const imageUrl = testimonial.customer_image || 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-[2rem] p-10 hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-500 relative group border-amber-100/50"
    >
      <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-800 text-white flex items-center justify-center rounded-2xl shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
        <Quote className="w-8 h-8 opacity-40" />
      </div>
      
      <div className="flex items-center space-x-5 mb-8">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
          <Image
            src={imageUrl}
            alt={testimonial.customer_name || 'Customer'}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="80px"
          />
        </div>
        <div>
          <h4 className="font-serif font-black text-amber-900 text-xl tracking-tight leading-none mb-1">
            {testimonial.customer_name || 'Anonymous'}
          </h4>
          <p className="text-[10px] font-black text-amber-700 uppercase tracking-[0.2em] opacity-60">
            {testimonial.customer_location || 'Verified Collector'}
          </p>
        </div>
      </div>

      <div className="flex space-x-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < rating
                ? 'text-amber-500 fill-amber-500'
                : 'text-amber-200'
            }`}
          />
        ))}
      </div>

      <div className="relative">
        <p className="text-amber-950/80 leading-relaxed font-medium italic text-lg relative z-10 font-serif">
          &quot;{testimonial.review_text || 'An exquisite piece of art that has truly transformed our home aesthetic.'}&quot;
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-amber-900/10 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-green-700/60">
           <ShieldCheck className="w-4 h-4" />
           <span className="text-[10px] font-black uppercase tracking-widest leading-none">Verified Purchase</span>
        </div>
        <span className="text-[10px] text-amber-900/20 font-black uppercase tracking-widest">
           {new Date(testimonial.created_at || Date.now()).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </span>
      </div>
    </motion.div>
  );
}


