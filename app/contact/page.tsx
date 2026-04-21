'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Sparkles, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const whatsappUrl = 'https://wa.me/8303319119?text=Hello, I would like to inquire about your handmade rugs';

  const contactInfo = [
    { icon: Phone, label: 'Direct Line', value: '+91 8303319119', href: 'tel:+918303319119' },
    { icon: Mail, label: 'Curated Support', value: 'aryanmaurya4045@gmail.com', href: 'mailto:aryanmaurya4045@gmail.com' },
    { icon: MapPin, label: 'Flagship Showroom', value: 'Inflection.org, Khamaria, Bhadohi, 221306', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <Navbar />

      {/* Premium Hero Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-amber-950">
        <Image
          src="/hero.png"
          alt="Contact Hero"
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
                <span className="text-xs font-black uppercase tracking-[0.4em]">Inquiry</span>
                <div className="w-12 h-px bg-amber-500" />
             </div>
             <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-black text-white tracking-tighter leading-none">
                Get In <br />
                <span className="text-amber-500 italic">Touch</span>
             </h1>
          </motion.div>
        </div>
      </section>


      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-5 space-y-12">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="space-y-6"
               >
                  <h2 className="text-4xl font-serif font-black text-amber-950 leading-tight">
                    Let's Discuss Your <br />
                    <span className="text-amber-700 italic">Next Masterpiece</span>
                  </h2>
                  <p className="text-lg text-amber-900/60 font-medium leading-relaxed">
                    Whether you are looking for a custom size, a specific color palette, 
                    or want to visit our loom, our experts are ready to assist you.
                  </p>
               </motion.div>

               <div className="space-y-8">
                  {contactInfo.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-6 p-6 rounded-3xl border border-amber-100 bg-white hover:shadow-2xl hover:shadow-amber-900/5 transition-all group"
                    >
                       <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors duration-500">
                          <item.icon className="w-6 h-6" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-amber-900/30 mb-1">{item.label}</p>
                          <p className="text-lg font-bold text-amber-950">{item.value}</p>
                       </div>
                    </motion.a>
                  ))}
               </div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-8 rounded-[2.5rem] bg-amber-950 text-white relative overflow-hidden group"
               >
                  <div className="relative z-10">
                     <h3 className="text-xl font-bold mb-4">Concierge Hours</h3>
                     <div className="space-y-3 opacity-70 text-sm font-medium">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                           <span>Mon - Sat</span>
                           <span>09:00 AM - 07:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Sunday</span>
                           <span className="text-amber-500">By Appointment</span>
                        </div>
                     </div>
                  </div>
                  <Clock className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5 rotate-12" />
               </motion.div>
            </div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-amber-900/5 border border-amber-100"
            >
               <h3 className="text-2xl font-serif font-black text-amber-950 mb-8">Direct Inquiry Form</h3>
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-amber-950/40 ml-2">Full Name</label>
                     <input type="text" placeholder="John Doe" className="w-full bg-amber-50/50 border border-amber-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all placeholder:text-amber-950/20 font-bold" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-amber-950/40 ml-2">Email Address</label>
                     <input type="email" placeholder="john@example.com" className="w-full bg-amber-50/50 border border-amber-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all placeholder:text-amber-950/20 font-bold" />
                   </div>
                  <div className="md:col-span-2 space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-amber-950/40 ml-2">Inquiry Type</label>
                     <select className="w-full bg-amber-50/50 border border-amber-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all font-bold appearance-none">
                        <option>Custom Rug Order</option>
                        <option>Exhibition Visit</option>
                        <option>Bilateral Trade</option>
                        <option>Other</option>
                     </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-amber-950/40 ml-2">Message</label>
                     <textarea rows={5} placeholder="Tell us about the space you want to transform..." className="w-full bg-amber-50/50 border border-amber-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all placeholder:text-amber-950/20 font-bold resize-none" />
                  </div>
                  
                  <div className="md:col-span-2 pt-4">
                     <button className="w-full bg-amber-700 text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-amber-700/20 hover:bg-amber-800 transition-all active:scale-95 flex items-center justify-center space-x-3">
                        <Send className="w-4 h-4" />
                        <span>Send Transmission</span>
                     </button>
                  </div>
               </form>
               
               <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-amber-100">
                  <div className="flex items-center space-x-3 text-green-700">
                     <ShieldCheck className="w-5 h-5" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Encrypted Connection</span>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-amber-950 hover:text-amber-700 transition-colors font-bold text-sm">
                     <MessageCircle className="w-5 h-5" />
                     <span>Quick Chat via WhatsApp</span>
                  </a>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#F9F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[500px] border-[12px] border-white relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.9611525960963!2d82.51387687517702!3d25.238233377684548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fe9de1bae336b%3A0xf903b167fbf71bf0!2sInflection%20ORG%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1775559330103!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.05)' }}
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-8 left-8 glass p-6 rounded-3xl max-w-xs shadow-2xl transform transition-transform duration-500 group-hover:translate-x-2">
                 <div className="flex items-center space-x-3 text-amber-700 mb-3">
                    <MapPin className="w-6 h-6" />
                    <span className="font-black text-xs uppercase tracking-widest">Global HQ</span>
                 </div>
                 <p className="text-amber-950 font-bold leading-relaxed">
                    Inflection ORG, Khamaria, Bhadohi, UP - 221306, India
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Trusted Metrics */}
      <section className="py-20 bg-amber-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             {[
               { icon: Globe, label: 'Worldwide Shipping', value: '50+ Countries' },
               { icon: ShieldCheck, label: 'Quality Guarantee', value: '100% Authenticity' },
               { icon: MessageCircle, label: 'Typical Response', value: '< 2 Hours' }
             ].map((metric, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="space-y-4"
               >
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                     <metric.icon className="w-6 h-6 text-amber-50" />
                  </div>
                  <h3 className="text-3xl font-serif font-black">{metric.value}</h3>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">{metric.label}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

