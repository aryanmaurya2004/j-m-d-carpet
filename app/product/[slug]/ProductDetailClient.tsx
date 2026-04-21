'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Ruler, Palette, Package, Sparkles, ShieldCheck, History, Check, ArrowRight, Share2 } from 'lucide-react';

export default function ProductDetailClient({ product }: { product: any }) {
  const [selectedImage, setSelectedImage] = useState(product.image_url);
  
  const whatsappMessage = `Hi, I'm interested in ${product.name} (${product.size}). Price: $${product.price}`;
  const whatsappUrl = `https://wa.me/8303319119?text=${encodeURIComponent(whatsappMessage)}`;

  const details = [
    { icon: Ruler, label: 'Dimensions', value: product.size || 'Custom' },
    { icon: Package, label: 'Material', value: product.material || 'Organic Wool & Silk' },
    { icon: Palette, label: 'Design Style', value: product.design_style || 'Heritage' },
    { icon: History, label: 'Origin', value: 'Bhadohi, India' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 relative">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-100/20 blur-[120px] rounded-full -z-10" />
      
      {/* Media Gallery */}
      <div className="lg:col-span-7 space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-[4/5] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-amber-50 shadow-2xl border-[12px] border-white"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "circOut" }}
              className="absolute inset-0"
            >
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        </motion.div>

        {product.gallery_images && product.gallery_images.length > 0 && (
          <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
            {[product.image_url, ...product.gallery_images].map((img: string, i: number) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl overflow-hidden flex-shrink-0 transition-all border-4 ${selectedImage === img ? 'border-amber-700 scale-105 shadow-xl shadow-amber-900/10' : 'border-white opacity-60 hover:opacity-100 hover:border-amber-200'}`}
              >
                <Image src={img} alt="Gallery view" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content Info */}
      <div className="lg:col-span-5 space-y-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3 text-amber-700 mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">One-of-a-Kind Masterpiece</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-amber-950 leading-tight mb-6 lowercase first-letter:uppercase">
            {product.name}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-12">
             <span className="text-4xl sm:text-5xl font-serif font-black text-amber-700">${product.price}</span>
             <div className="h-10 w-px bg-amber-200 hidden sm:block" />
             <div className="flex items-center space-x-2 text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[9px] font-black uppercase tracking-widest">Authenticated & Insured</span>
             </div>
          </div>

          <p className="text-lg text-amber-900/60 font-medium leading-relaxed mb-12 border-l-4 border-amber-100 pl-6 py-2">
            {product.description || 'This exquisite piece represents months of meticulous hand-knotting by our master artisans. Woven using ancient traditions, it carries the soul of heritage into the modern home.'}
          </p>

          <div className="grid grid-cols-2 gap-y-10 gap-x-8 mb-12">
             {details.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                   <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-700 flex-shrink-0 group-hover:bg-amber-700 group-hover:text-white transition-all duration-500 shadow-sm">
                      <item.icon className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-[9px] font-black uppercase tracking-widest text-amber-900/30 mb-1">{item.label}</p>
                     <p className="text-sm font-bold text-amber-950">{item.value}</p>
                   </div>
                </div>
             ))}
          </div>

          <div className="space-y-6">
             <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-amber-950 text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-2xl shadow-amber-950/20 hover:bg-amber-900 transition-all flex items-center justify-center space-x-3 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Inquire Exclusive</span>
                </a>
                <button className="p-5 rounded-[1.5rem] border border-amber-200 hover:bg-amber-50 transition-all text-amber-900 hover:border-amber-300">
                   <Share2 className="w-5 h-5" />
                </button>
             </div>
             
             <Link
               href="/contact"
               className="w-full flex items-center justify-center space-x-3 text-amber-900/40 hover:text-amber-700 transition-colors font-black text-[10px] uppercase tracking-[0.3em] pt-4"
             >
                <span>Bespoke Commission Inquiries</span>
                <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </motion.div>

        {/* Quality Guarantees */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="p-8 rounded-[3rem] bg-[#F9F6F1] border border-amber-100/50 space-y-4"
        >
           {[
             'Certified Hand-Knotted Heritage',
             'Organic Highland Wool & Natural Dyes',
             'Complimentary White-Glove Shipping'
           ].map((text, i) => (
             <div key={i} className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-amber-700/10 flex items-center justify-center text-amber-700">
                   <Check className="w-3 h-3" />
                </div>
                <span className="text-sm font-bold text-amber-900/60">{text}</span>
             </div>
           ))}
        </motion.div>
      </div>
    </div>

  );
}
