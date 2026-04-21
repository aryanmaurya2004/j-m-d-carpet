'use client';

import { useEffect, useState } from 'react';
import { supabase, Testimonial } from '@/lib/supabase';
import TestimonialCard from '@/components/TestimonialCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, MessageSquare, Quote, Sparkles, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching testimonials:', error);
      } else {
        setTestimonials(data || []);
      }
      setLoading(false);
    }
    fetchTestimonials();
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-amber-950">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-950/80" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <div className="flex justify-center mb-8">
                <div className="flex bg-amber-500/20 px-4 py-2 rounded-full backdrop-blur-xl border border-amber-500/30">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500 mx-0.5" />
                  ))}
                </div>
             </div>
             <div className="inline-flex items-center space-x-3 text-amber-500 mb-6">
                <div className="w-12 h-px bg-amber-500" />
                <span className="text-xs font-black uppercase tracking-[0.4em]">Client Anthology</span>
                <div className="w-12 h-px bg-amber-500" />
             </div>
             <h1 className="text-6xl md:text-8xl font-serif font-black text-white tracking-tighter leading-none mb-8">
                Stories of <br />
                <span className="text-amber-500 italic">Excellence</span>
             </h1>
             <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl mx-auto italic">
                "A home is defined by the artifacts it houses. Our clients share their experiences with J.M.D. masterpieces."
             </p>
          </motion.div>
        </div>
        
        <Quote className="absolute -bottom-10 -left-10 w-64 h-64 text-white/5 -rotate-12" />
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {!loading ? (
             <motion.div 
               variants={container}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
             >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="break-inside-avoid">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
             </motion.div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-64 rounded-[2.5rem] bg-amber-50 animate-pulse" />
                ))}
             </div>
          )}

          {!loading && testimonials.length === 0 && (
            <div className="text-center py-40 bg-amber-50/50 rounded-[4rem] border-2 border-dashed border-amber-100">
               <MessageSquare className="w-16 h-16 text-amber-200 mx-auto mb-6" />
               <h3 className="text-2xl font-serif font-black text-amber-950 mb-4">The Book is Open</h3>
               <p className="text-amber-900/40 font-medium max-w-md mx-auto">Be the first to pen a chapter in our anthology of satisfied collectors.</p>
            </div>
          )}
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-24 bg-[#F9F6F1]">
        <div className="max-w-5xl mx-auto px-4">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden border border-amber-100/50"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <div className="flex items-center space-x-3 text-amber-700 mb-6">
                       <Sparkles className="w-5 h-5" />
                       <span className="font-black text-[10px] uppercase tracking-widest">Share Your Experience</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-amber-950 mb-8 leading-tight">
                       Own a piece of <br />
                       <span className="text-amber-700 italic">Our Heritage?</span>
                    </h2>
                    <p className="text-lg text-amber-900/60 font-medium leading-relaxed mb-10">
                       Your story helps us refine our craft. If you've welcomed a J.M.D. rug into your sanctuary, we invite you to share your thoughts.
                    </p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center space-x-4 bg-amber-950 text-white px-10 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-xl hover:bg-amber-800 transition-all active:scale-95"
                    >
                       <span>Submit Selection</span>
                       <Send className="w-4 h-4" />
                    </a>
                 </div>
                 
                 <div className="hidden lg:block relative group">
                    <div className="absolute inset-0 bg-amber-700/5 rounded-[3rem] rotate-3 transition-transform group-hover:rotate-6" />
                    <div className="relative bg-white p-8 rounded-[3rem] shadow-xl border border-amber-50">
                       <div className="flex items-center space-x-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold uppercase">JD</div>
                          <div>
                             <p className="font-bold text-amber-950">Jane Doe</p>
                             <p className="text-[10px] font-black text-amber-950/20 uppercase tracking-widest">Collector, San Francisco</p>
                          </div>
                       </div>
                       <blockquote className="text-lg font-serif italic text-amber-900/60 leading-relaxed mb-6">
                         "The depth of texture in the Tribal-04 is unlike anything I've seen in modern retail. It's not just a rug, it's a conversation piece that grounds the entire room."
                       </blockquote>
                       <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

