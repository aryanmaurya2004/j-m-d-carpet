import { supabase } from '@/lib/supabase';
import TestimonialCard from '@/components/TestimonialCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star } from 'lucide-react';

async function getTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }

  return data || [];
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-gray-50">
      <Navbar />

      <section className="relative py-24 bg-gradient-to-br from-amber-800 to-amber-950 text-white overflow-hidden">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex bg-amber-400/20 p-2 rounded-full backdrop-blur-sm border border-amber-400/30">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Customer <span className="text-amber-400 font-serif italic">Stories</span>
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Discover why home decorators and rug lovers around the world trust us for their premium handcrafted rug needs.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {testimonials.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
              <p className="text-xl text-gray-500 italic">No reviews found yet. Be the first to share your experience!</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden text-center border border-gray-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-700/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Own a Masterpiece?</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                If you've recently added one of our rugs to your collection, we'd love to hear your story. Your feedback helps us maintain our standard of excellence.
              </p>
              <a href="/contact" className="inline-block px-10 py-5 bg-amber-700 text-white rounded-full font-bold hover:bg-amber-800 transition-all hover:scale-105 shadow-xl">
                Submit Your Review
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
