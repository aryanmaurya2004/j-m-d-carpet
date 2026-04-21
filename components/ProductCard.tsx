'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/supabase';
import { ShoppingBag, Star, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-amber-50 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-900/10">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-end">
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-[10px] text-white/80 font-bold ml-1 uppercase tracking-widest">Masterpiece</span>
            </div>
            <button className="w-full bg-white text-amber-900 py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <ShoppingBag className="w-4 h-4" />
              <span>Inquire Now</span>
            </button>
          </div>

          {!product.in_stock && (
            <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
              Sold Out
            </div>
          )}

          {product.featured && (
            <div className="absolute top-4 right-4 bg-amber-500 text-white p-2 rounded-full shadow-lg">
              <Star className="w-4 h-4 fill-white" />
            </div>
          )}
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-serif font-black text-amber-900 group-hover:text-amber-700 transition-colors leading-tight">
              {product.name}
            </h3>
            <span className="text-sm font-black text-amber-800 bg-amber-50 px-2 py-1 rounded-lg">
              ${product.price}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">
              {product.size || 'Custom Dimensions'}
            </p>
            <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="text-amber-900/40 hover:text-amber-700 transition-colors">
                  <Share2 className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

