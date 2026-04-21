'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Categories' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`flex justify-between items-center px-6 py-2 rounded-2xl transition-all duration-500 ${
            scrolled 
              ? 'glass shadow-lg scale-[0.98] lg:scale-100' 
              : 'bg-transparent'
          }`}
        >
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className="bg-amber-950 p-2 rounded-2xl shadow-xl shadow-amber-950/20"
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-serif font-black tracking-tighter text-amber-950 leading-none">
                J.M.D. <span className="text-amber-700 font-serif italic">Carpet</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-black text-amber-900/30 leading-tight mt-1">
                Artisan Heritage
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-bold text-amber-900/70 hover:text-amber-900 transition-colors uppercase tracking-widest group"
              >
                {link.label}
                <motion.span 
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-700 transition-all group-hover:w-1/2 group-hover:left-1/4"
                  layoutId="navUnderline"
                />
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-amber-900/10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-amber-800 text-white px-6 py-2.5 rounded-xl hover:bg-amber-900 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-amber-900/20 font-bold text-sm tracking-widest uppercase"
                >
                  <Phone className="w-4 h-4" />
                  <span>Get Quote</span>
                </Link>
              </motion.div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-amber-900 hover:bg-amber-50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 glass rounded-3xl overflow-hidden shadow-2xl p-4 border border-amber-100"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-serif font-bold text-amber-900 hover:bg-amber-50 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-amber-100">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-amber-800 text-white px-6 py-4 rounded-2xl hover:bg-amber-900 transition-all font-bold text-center tracking-widest uppercase"
                >
                  Get Professional Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

