'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/lib/supabase';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative h-[500px] rounded-[2.5rem] overflow-hidden"
    >
      <Link href={`/gallery?category=${category.slug}`} className="block h-full">
        <Image
          src={category.image_url}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Dynamic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-amber-950/40 to-transparent group-hover:from-amber-900/95 transition-all duration-500" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-amber-400">
               <Sparkles className="w-4 h-4" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em]">Exclusive Category</span>
            </div>
            
            <h3 className="text-4xl font-serif font-black text-white leading-tight">
              {category.name}
            </h3>
            
            <p className="text-amber-50/70 text-sm leading-relaxed max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              {category.description || 'Explore our uniquely handcrafted rug masterpieces for your space.'}
            </p>
            
            <div className="pt-4 overflow-hidden">
               <div className="flex items-center space-x-3 text-white font-bold text-xs uppercase tracking-widest transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
                  <span>Discover Now</span>
                  <div className="w-12 h-px bg-white/30 group-hover:w-20 transition-all duration-500" />
                  <ArrowRight className="w-4 h-4" />
               </div>
            </div>
          </div>
        </div>

        {/* Decorative Badge */}
        <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
           <ArrowRight className="w-5 h-5 text-amber-900 -rotate-45" />
        </div>
      </Link>
    </motion.div>
  );
}


