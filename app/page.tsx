'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Heart, Shield, Award, Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { supabase, Product, Category, Testimonial } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import TestimonialCard from '@/components/TestimonialCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsRes, categoriesRes, testimonialsRes] = await Promise.all([
          supabase.from('products').select('*').eq('featured', true).eq('in_stock', true).limit(6),
          supabase.from('categories').select('*').limit(3),
          supabase.from('testimonials').select('*').order('created_at', { ascending: false }).limit(3)
        ]);

        setFeaturedProducts(productsRes.data || []);
        setCategories(categoriesRes.data || []);
        setTestimonials(testimonialsRes.data || []);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] selection:bg-amber-200">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Handmade rugs collection"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#FFFDF9]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-20">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">The Heritage Collection</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-black text-white leading-[0.9] tracking-tighter mb-8">
              Ancient Art<br />
              <span className="text-amber-500 italic ml-0 md:ml-20 block sm:inline">Modern Souls</span>
            </h1>

            <p className="text-lg md:text-2xl text-amber-50/80 mb-12 max-w-2xl font-medium leading-relaxed">
              Discover masterpieces woven over months by hand. Every knot carrying the legacy of a thousand years, bringing comfort and soul to your spaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/gallery"
                className="group relative inline-flex items-center justify-center space-x-3 bg-amber-700 text-white px-10 py-5 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:bg-amber-800 hover:scale-105"
              >
                <span className="relative z-10 font-bold text-sm uppercase tracking-widest">Explore Masterpieces</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-10 py-5 rounded-2xl transition-all duration-300 hover:bg-white/20"
              >
                <Play className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="font-bold text-sm uppercase tracking-widest">Watch Our Story</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute bottom-10 right-10 hidden lg:block z-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-40 h-40 flex items-center justify-center"
          >
            <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full" />
            <div className="text-center">
              <p className="text-[10px] font-black text-white uppercase tracking-widest">Est.</p>
              <p className="text-2xl font-serif font-black text-amber-500">1985</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative overflow-hidden bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/artisan.png"
                alt="Artisan weaving"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay" />
            </motion.div>


            <div className="space-y-12">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-amber-700 mb-6"
                >
                  <div className="w-10 h-px bg-amber-700" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Our Core Philosophy</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-serif font-black text-amber-950 leading-tight"
                >
                  Honoring the<br />
                  <span className="text-amber-700 italic">Slow Path</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 text-xl text-amber-900/70 leading-relaxed font-medium"
                >
                  In a world of mass-production, we choose the rhythm of the hand.
                  Every rug we create takes weeks of meticulous knotting, using natural dyes
                  and premium organic materials.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Heart, title: "Soulful Design", desc: "Infusing history and modern soul into every fiber." },
                  { icon: Shield, title: "Eternal Life", desc: "Heirloom quality built to withstand generations." },
                  { icon: Award, title: "Master Class", desc: "Recognized global standards in artisan weaving." },
                  { icon: Sparkles, title: "Rare Finds", desc: "Limited run designs that you won't find elsewhere." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-700 mb-4 group-hover:bg-amber-700 group-hover:text-amber-50 transition-colors duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-amber-950 mb-2">{item.title}</h3>
                    <p className="text-sm text-amber-900/60 leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      {categories.length > 0 && (
        <section className="py-32 bg-[#F9F6F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center space-x-3 text-amber-700 mb-6">
                  <div className="w-10 h-px bg-amber-700" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Curated Universes</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-amber-950 leading-tight">
                  Shop by <span className="text-amber-700 italic">Vibe</span>
                </h2>
              </div>
              <Link
                href="/categories"
                className="group flex items-center space-x-4 text-amber-950 font-black text-xs uppercase tracking-widest"
              >
                <span>Browse All Collections</span>
                <div className="w-12 h-12 rounded-full border border-amber-900/20 flex items-center justify-center group-hover:bg-amber-900 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center space-x-3 text-amber-700 mb-6 mx-auto">
                <div className="w-10 h-px bg-amber-700" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Artisan Spotlight</span>
                <div className="w-10 h-px bg-amber-700" />
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-amber-950 leading-tight mb-8">
                Our Finest <span className="text-amber-700 italic">Masterpieces</span>
              </h2>
              <p className="text-lg text-amber-900/60 font-medium">
                Rare, one-of-a-kind treasures crafted by our most experienced master weavers.
                These aren't just rugs; they are investments in art.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center space-x-4 bg-amber-950 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-amber-900 transition-all duration-300 hover:scale-105"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-32 bg-[#F9F6F1] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
              <div className="flex items-center space-x-3 text-amber-700 mb-6">
                <div className="w-10 h-px bg-amber-700" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Global Community</span>
                <div className="w-10 h-px bg-amber-700" />
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-amber-950 leading-tight">
                Whispers of <span className="text-amber-700 italic">Satisfaction</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="relative py-40 overflow-hidden bg-amber-950">
        <Image
          src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg"
          alt="Luxury Rug Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-amber-950/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-serif font-black text-white leading-[0.9] tracking-tighter mb-10"
            >
              Own a Piece of<br />
              <span className="text-amber-500 italic">Timeless History</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-amber-100/70 mb-12 font-medium leading-relaxed"
            >
              Consult with our artisan experts to find the rug that doesn't just fit your floor,
              but completes your soul. Custom sizes and designs available upon request.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                href="/gallery"
                className="bg-amber-500 text-amber-950 px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-amber-400 transition-all duration-300 hover:scale-105 text-center"
              >
                Start Your Collection
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all text-center"
              >
                Inquire Professionally
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
