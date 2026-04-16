import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Heart, Shield, Award } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import TestimonialCard from '@/components/TestimonialCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

async function getFeaturedProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true)
    .eq('in_stock', true)
    .limit(6);

  if (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }

  return data || [];
}

async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .limit(3);

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}

async function getTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }

  return data || [];
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  const categories = await getCategories();
  const testimonials = await getTestimonials();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-gray-50">
      <Navbar />

      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg"
          alt="Handmade rugs collection"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-amber-700/90 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Premium Handcrafted Quality</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Created Handmade Rugs
                <span className="block text-amber-400 mt-2">For Your Home</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Discover our curated collection of artisan-crafted rugs. Each piece is a masterpiece,
                woven with tradition and designed to transform your space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center space-x-2 bg-amber-700 text-white px-8 py-4 rounded-md hover:bg-amber-800 transition-all duration-200 font-semibold shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-200 font-semibold shadow-xl"
                >
                  <span>Get Custom Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm flex-shrink-0">
                <Heart className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Handcrafted with Love</h3>
                <p className="text-amber-100">Each rug is meticulously woven by skilled artisans using traditional techniques.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm flex-shrink-0">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-amber-100">We use only the finest materials to ensure durability and lasting beauty.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm flex-shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Award-Winning Design</h3>
                <p className="text-amber-100">Our collection features designs recognized for excellence and innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {categories.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Browse by <span className="text-amber-700">Category</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our diverse range of handmade rugs, from timeless traditional designs to contemporary masterpieces.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured <span className="text-amber-700">Collection</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Handpicked selections from our finest collection of artisan-crafted rugs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center space-x-2 bg-amber-700 text-white px-8 py-4 rounded-md hover:bg-amber-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                <span>View All Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our <span className="text-amber-700">Customers Say</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let us help you find the perfect handmade rug that complements your style and elevates your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center space-x-2 bg-white text-amber-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-200 font-semibold shadow-xl"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-amber-900 transition-all duration-200 font-semibold"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
