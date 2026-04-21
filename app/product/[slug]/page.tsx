import { notFound } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft, Share2 } from 'lucide-react';
import ProductDetailClient from './ProductDetailClient';

async function getProduct(slug: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(*)')
    .eq('slug', slug)
    .maybeSingle();

  if (error || !data) return null;
  return data;
}

async function getRelatedProducts(categoryId: string, currentProductId: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', categoryId)
    .neq('id', currentProductId)
    .eq('in_stock', true)
    .limit(3);

  if (error) return [];
  return data || [];
}

export default async function ProductDetails({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.category_id, product.id);

  return (
    <div className="min-h-screen bg-[#FFFDF9] selection:bg-amber-200">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <Link
          href="/gallery"
          className="group inline-flex items-center space-x-3 text-amber-900/40 hover:text-amber-700 mb-12 transition-all font-black text-[10px] uppercase tracking-[0.3em]"
        >
          <div className="w-8 h-8 rounded-full border border-amber-100 flex items-center justify-center group-hover:bg-amber-700 group-hover:border-amber-700 group-hover:text-white transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span>Return to Gallery</span>
        </Link>

        {/* Client Component for Interactive/Animated Parts */}
        <ProductDetailClient product={product} />

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="py-24 border-t border-amber-950/5 mt-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
               <div className="max-w-2xl">
                  <div className="flex items-center space-x-3 text-amber-700 mb-6">
                    <div className="w-10 h-px bg-amber-700" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Suggested Pairings</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif font-black text-amber-950 leading-tight">
                    Complement Your <span className="text-amber-700 italic">Space</span>
                  </h2>
               </div>
               <Link href="/gallery" className="group flex items-center space-x-4 text-amber-950 font-black text-xs uppercase tracking-widest">
                  <span>Explore Collection</span>
                  <div className="w-12 h-12 rounded-full border border-amber-900/20 flex items-center justify-center group-hover:bg-amber-900 group-hover:text-white transition-all">
                    <Share2 className="w-5 h-5" />
                  </div>
               </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}
