'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { supabase, Product, Category } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Filter, SlidersHorizontal, Grid, Search, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchCategories = useCallback(async () => {
    const { data, error } = await supabase.from('categories').select('*');
    if (!error && data) setCategories(data);
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    let query = supabase.from('products').select('*');

    if (selectedCategory !== 'all') {
      const category = categories.find(c => c.slug === selectedCategory);
      if (category) query = query.eq('category_id', category.id);
    }

    if (searchQuery) {
      query = query.ilike('name', `%${searchQuery}%`);
    }

    const { data, error } = await query.eq('in_stock', true);
    if (!error && data) setProducts(data);
    setLoading(false);
  }, [selectedCategory, categories, searchQuery]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <Navbar />

      {/* Premium Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-amber-950">
        <Image
          src="/hero.png"
          alt="Gallery Hero"
          fill
          className="object-cover opacity-30"
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
                <span className="text-xs font-black uppercase tracking-[0.4em]">The Collection</span>
                <div className="w-12 h-px bg-amber-500" />
             </div>
             <h1 className="text-5xl sm:text-7xl font-serif font-black text-white tracking-tighter leading-none">
                Masterpiece <br />
                <span className="text-amber-500 italic">Anthology</span>
             </h1>
          </motion.div>
        </div>
      </section>

      {/* Premium Search & Filter Bar */}
      <section className="py-12 bg-white/50 backdrop-blur-sm sticky top-0 z-40 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-950/20 group-focus-within:text-amber-700 transition-colors" />
              <input 
                type="text" 
                placeholder="Search Masterpieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-amber-100 rounded-2xl pl-14 pr-6 py-4 focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder:text-amber-950/20 font-bold text-sm shadow-sm focus:shadow-xl" 
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-amber-100 rounded-full transition-all">
                  <X className="w-3 h-3 text-amber-900" />
                </button>
              )}
            </div>

            <div className="flex items-center space-x-4">
               <div className="hidden lg:flex items-center space-x-2 bg-amber-50 p-1.5 rounded-2xl border border-amber-100/50">
                  <button onClick={() => setSelectedCategory('all')} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === 'all' ? 'bg-amber-800 text-white shadow-xl' : 'text-amber-900/40 hover:text-amber-700'}`}>All</button>
                  {categories.map(cat => (
                    <button key={cat.id} onClick={() => setSelectedCategory(cat.slug)} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat.slug ? 'bg-amber-800 text-white shadow-xl' : 'text-amber-900/40 hover:text-amber-700'}`}>{cat.name}</button>
                  ))}
               </div>
               
               <button 
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center space-x-3 bg-amber-950 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-900 shadow-xl transition-all"
               >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filters</span>
               </button>
            </div>
          </div>
        </div>
      </section>


      {/* Main Gallery Section */}
      <section className="py-20 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-12">
             <div className="flex items-center space-x-4">
                <Grid className="w-5 h-5 text-amber-900/20" />
                <h2 className="text-xl font-serif font-black text-amber-950">
                  {selectedCategory === 'all' ? 'The Complete Anthology' : `${categories.find(c => c.slug === selectedCategory)?.name} Collection`}
                </h2>
                <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {products.length} Designs
                </span>
             </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[...Array(6)].map((_, i) => (
                 <div key={i} className="aspect-[4/5] rounded-[2.5rem] bg-amber-50 animate-pulse" />
               ))}
            </div>
          ) : products.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
            >
              <AnimatePresence>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-40 bg-amber-50/50 rounded-[4rem] border-2 border-dashed border-amber-100">
               <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                  <X className="w-16 h-16 text-amber-200 mx-auto mb-6" />
                  <h3 className="text-2xl font-serif font-black text-amber-950 mb-4">No Masterpieces Found</h3>
                  <p className="text-amber-900/40 font-medium mb-10 max-w-md mx-auto">We couldn't find any rugs matching your current criteria. Every piece is unique, so perhaps try a different category?</p>
                  <button onClick={() => {setSelectedCategory('all'); setSearchQuery('');}} className="bg-amber-700 text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-800 transition-all shadow-xl">Reset Selection</button>
               </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Advanced Filter Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-amber-950/40 backdrop-blur-md z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl p-10 flex flex-col"
            >
               <div className="flex items-center justify-between mb-12">
                  <h3 className="text-3xl font-serif font-black text-amber-950">Advanced Curation</h3>
                  <button onClick={() => setIsSidebarOpen(false)} className="p-3 hover:bg-amber-50 rounded-2xl transition-all">
                     <X className="w-6 h-6 text-amber-900" />
                  </button>
               </div>
               
               <div className="flex-1 space-y-10 overflow-y-auto pr-4">
                  <div>
                     <h4 className="text-[10px] font-black uppercase tracking-widest text-amber-950/40 mb-6">Collections</h4>
                     <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => setSelectedCategory('all')} className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all ${selectedCategory === 'all' ? 'bg-amber-700 border-amber-700 text-white' : 'border-amber-100 text-amber-900/60 hover:border-amber-400'}`}>All Styles</button>
                        {categories.map(cat => (
                          <button key={cat.id} onClick={() => setSelectedCategory(cat.slug)} className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all ${selectedCategory === cat.slug ? 'bg-amber-700 border-amber-700 text-white' : 'border-amber-100 text-amber-900/60 hover:border-amber-400'}`}>{cat.name}</button>
                        ))}
                     </div>
                  </div>
                  
                  <div>
                     <h4 className="text-[10px] font-black uppercase tracking-widest text-amber-950/40 mb-6">Stock Status</h4>
                     <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-md border border-amber-700 bg-amber-700 flex items-center justify-center">
                           <X className="w-3 h-3 text-white rotate-45" />
                        </div>
                        <span className="text-sm font-bold text-amber-950">In Stock Ready to Ship</span>
                     </div>
                  </div>
                  
                  <div className="p-6 rounded-[2rem] bg-amber-50 border border-amber-100">
                     <div className="flex items-center space-x-3 text-amber-700 mb-4">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-black text-[10px] uppercase tracking-widest">Premium Discovery</span>
                     </div>
                     <p className="text-xs text-amber-900/60 leading-relaxed font-medium">Looking for something truly bespoke? Contact our artisans for a custom commission based on your specific requirements.</p>
                  </div>
               </div>
               
               <div className="pt-10">
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="w-full bg-amber-950 text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-amber-950/20"
                  >
                    Apply Selections
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

