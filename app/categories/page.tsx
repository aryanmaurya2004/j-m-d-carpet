'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase, Category } from '@/lib/supabase';
import CategoryCard from '@/components/CategoryCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching categories:', error);
      } else {
        setCategories(data || []);
      }
      setLoading(false);
    }
    fetchCategories();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <Navbar />

      {/* Premium Hero Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-amber-950">
        <Image
          src="/hero.png"
          alt="Categories Hero"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-950/80" />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <div className="inline-flex items-center space-x-3 text-amber-500 mb-6">
                <div className="w-12 h-px bg-amber-500" />
                <span className="text-xs font-black uppercase tracking-[0.4em]">Curated Universes</span>
                <div className="w-12 h-px bg-amber-500" />
             </div>
             <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-black text-white tracking-tighter leading-none">
                The Rug <br />
                <span className="text-amber-500 italic">Collections</span>
             </h1>
          </motion.div>
        </div>
      </section>


      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-2xl">
                <h2 className="text-4xl font-serif font-black text-amber-950 leading-tight">
                  Choose Your <br />
                  <span className="text-amber-700 italic">Interior Soul</span>
                </h2>
                <p className="mt-6 text-lg text-amber-900/60 font-medium leading-relaxed">
                  From the geometric precision of Tribal patterns to the ethereal flow of Modern Abstracts. 
                  Every category is a doorway to a different heritage.
                </p>
             </div>
             <div className="text-amber-900/20 font-serif italic text-6xl hidden lg:block">Collections</div>
          </div>

          {!loading ? (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {[...Array(3)].map((_, i) => (
                 <div key={i} className="h-[500px] rounded-[2.5rem] bg-amber-50 animate-pulse" />
               ))}
            </div>
          )}
          
          {!loading && categories.length === 0 && (
            <div className="text-center py-32 bg-amber-50 rounded-[3rem] border-2 border-dashed border-amber-200">
               <Sparkles className="w-12 h-12 text-amber-300 mx-auto mb-4" />
               <p className="text-xl text-amber-900/40 font-serif italic">New collections are currently being curated by our master weavers.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F9F6F1]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-5xl font-serif font-black text-amber-950 mb-8 leading-tight">
               Not sure which <br />
               <span className="text-amber-700 italic">Vibe fits your space?</span>
             </h2>
             <p className="text-xl text-amber-900/60 mb-12 font-medium leading-relaxed">
               Our interior consultants are ready to provide a personalized recommendation session via video call or at our showroom.
             </p>
             <div className="flex justify-center">
                <a
                  href="/contact"
                  className="bg-amber-800 text-white px-12 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-amber-900 transition-all hover:scale-105 flex items-center space-x-4"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
             </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

