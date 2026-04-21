'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Users, Award, Target, Sparkles, ArrowRight, History, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Years of Heritage', value: '35+', icon: History },
    { label: 'Master Artisans', value: '50+', icon: Users },
    { label: 'Unique Masterpieces', value: '500+', icon: Sparkles },
    { label: 'Global Collectors', value: '10K+', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <Navbar />

      {/* Premium Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-amber-950">
        <Image
          src="/hero.png"
          alt="About Us Banner"
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
                <span className="text-xs font-black uppercase tracking-[0.4em]">Our Legacy</span>
                <div className="w-12 h-px bg-amber-500" />
             </div>
             <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-black text-white tracking-tighter leading-none">
                Born From <br />
                <span className="text-amber-500 italic">Tradition</span>
             </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                 <Image
                   src="/artisan.png"
                   alt="Artisan at work"
                   fill
                   className="object-cover"
                 />
              </div>
              {/* Decorative Frame */}
              <div className="absolute top-10 -left-10 w-full h-full border-2 border-amber-900/10 rounded-[3rem] -z-0" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-700/10 rounded-full blur-3xl -z-0" />
            </motion.div>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl font-serif font-black text-amber-950 leading-tight mb-8">
                   Weaving History <br />
                   <span className="text-amber-700 italic text-3xl sm:text-4xl">One Knot At A Time</span>
                </h2>
                <div className="space-y-6 text-lg text-amber-900/70 font-medium leading-relaxed">
                   <p>
                     Since 1985, J.M.D. Carpet has stood as a bastion of traditional textile excellence. 
                     What began as a small family collective in the heart of Bhadohi has evolved into 
                     a global name synonymous with museum-quality handcrafted rugs.
                   </p>
                   <p>
                     Our philosophy is simple: we believe that a truly great rug is a living history book. 
                     It carries the breath of the weaver, the spirit of the materials, and the timeless 
                     geometry of patterns passed down through generations.
                   </p>
                   <p>
                     We source only the finest hand-spun wool and organic silk, dyed with natural mineral 
                     pigments to ensure that the colors don't just stay, but deepen with character over time.
                   </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {stats.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-8 rounded-3xl border border-amber-100 shadow-sm hover:shadow-xl transition-all group"
                    >
                       <stat.icon className="w-8 h-8 text-amber-700 mb-4 transform group-hover:scale-110 transition-transform" />
                       <p className="text-3xl font-serif font-black text-amber-950 mb-1">{stat.value}</p>
                       <p className="text-[10px] uppercase font-black tracking-widest text-amber-900/40">{stat.label}</p>
                    </motion.div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-amber-950 overflow-hidden relative">
         <div className="absolute right-0 top-0 w-1/2 h-full bg-white opacity-[0.02] -skew-x-12 translate-x-1/2" />
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <span className="text-amber-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Our Soul</span>
               <h2 className="text-4xl sm:text-5xl font-serif font-black text-white leading-tight">Values That Guide Our Hands</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: 'Authenticity', icon: Award, desc: 'Original designs that honor traditional roots without compromise.' },
                 { title: 'Ethical Soul', icon: Heart, desc: 'Supporting our weaver communities with fair-trade and health initiatives.' },
                 { title: 'Excellence', icon: Zap, desc: 'If it is not perfect, it does not leave our showroom floor.' },
                 { title: 'Innovation', icon: Target, desc: 'Merging ancient techniques with contemporary aesthetic palettes.' }
               ].map((value, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group"
                 >
                    <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-amber-950 mb-8 group-hover:rotate-12 transition-transform">
                       <value.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{value.title}</h3>
                    <p className="text-amber-100/60 leading-relaxed text-sm font-medium">{value.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 space-y-8">
                  <div>
                    <span className="text-amber-700 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">The Alchemist Path</span>
                    <h2 className="text-5xl font-serif font-black text-amber-950 leading-tight">The 60-Day <span className="text-amber-700 italic">Evolution</span></h2>
                  </div>
                  
                  <div className="space-y-8">
                     {[
                       { step: '01', title: 'Soul Sourcing', desc: 'Selecting premium highland wool and hand-spun silk.' },
                       { step: '02', title: 'Natural Dyeing', desc: 'Infusing colors from roots, minerals, and petals.' },
                       { step: '03', title: 'Master Knotting', desc: '600,000+ hand-tied knots per masterpiece.' },
                       { step: '04', title: 'Grand Reveal', desc: 'Washing, trimming, and a 12-point quality blessing.' }
                     ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-6 group">
                           <span className="text-4xl font-serif font-black text-amber-900/10 group-hover:text-amber-700/20 transition-colors">{item.step}</span>
                           <div>
                              <h4 className="text-lg font-black text-amber-950 mb-1">{item.title}</h4>
                              <p className="text-sm text-amber-900/60 font-medium leading-relaxed">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-4 bg-amber-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-amber-950 transition-all"
                  >
                     <span>Book a Showroom Visit</span>
                     <ArrowRight className="w-5 h-5" />
                  </Link>
               </div>

               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="order-1 lg:order-2 relative aspect-square rounded-full overflow-hidden border-8 border-amber-50 shadow-2xl"
               >
                  <Image
                    src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg"
                    alt="The rug process"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-950/40 to-transparent" />
               </motion.div>
            </div>
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
               Want to see the<br />
               <span className="text-amber-700 italic">Magic Live?</span>
             </h2>
             <p className="text-xl text-amber-900/60 mb-12 font-medium leading-relaxed">
               Visit our flagship showroom to feel the texture, see the vibrant natural colors, and meet the artisans who keep this heritage alive.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/gallery"
                  className="bg-amber-800 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-amber-900"
                >
                  View Collection
                </Link>
                <Link
                  href="/contact"
                  className="bg-white border border-amber-900/10 text-amber-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-amber-50"
                >
                  Contact Us
                </Link>
             </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

