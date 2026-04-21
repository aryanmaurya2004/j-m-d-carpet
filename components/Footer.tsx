import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Sparkles, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-amber-950 text-white overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-800/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-700/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-amber-700 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-black tracking-tighter text-amber-50 leading-none">
                  J.M.D. <span className="text-amber-500">CARPET</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-400/60 leading-tight">
                  Artisan Masterpieces
                </span>
              </div>
            </Link>
            <p className="text-amber-200/60 leading-relaxed text-sm">
              Crafting timeless history into every knot. Our artisan-made rugs bring decades of traditional excellence directly into your living spaces.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-amber-900/50 flex items-center justify-center border border-amber-800/30 text-amber-400 hover:bg-amber-700 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-amber-500">Collections</h4>
            <ul className="space-y-4">
              {[
                { label: 'Traditional Classics', href: '/gallery?category=traditional' },
                { label: 'Modern Abstracts', href: '/gallery?category=modern' },
                { label: 'Heritage Silks', href: '/gallery?category=silk' },
                { label: 'Vintage Revival', href: '/gallery?category=vintage' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-amber-200/60 hover:text-white transition-colors duration-200 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-amber-500 mr-0 transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-amber-500">Information</h4>
            <ul className="space-y-4">
              {[
                { label: 'Our Heritage', href: '/about' },
                { label: 'Artisan Process', href: '/about#process' },
                { label: 'Customer Reviews', href: '/testimonials' },
                { label: 'Custom Orders', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-amber-200/60 hover:text-white transition-colors duration-200 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-amber-500 mr-0 transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-amber-500">Global Headquarter</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-xl bg-amber-900/50 flex items-center justify-center border border-amber-800/30 text-amber-500 group-hover:bg-amber-700 group-hover:text-white transition-colors flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-amber-200/60 text-sm leading-relaxed">
                  inflection.org, Khamaria<br />Bhadohi, Uttar Pradesh, 221306
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-xl bg-amber-900/50 flex items-center justify-center border border-amber-800/30 text-amber-500 group-hover:bg-amber-700 group-hover:text-white transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+918303319119" className="text-amber-200/60 text-sm hover:text-white transition-colors">
                  +91-8303319119
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-xl bg-amber-900/50 flex items-center justify-center border border-amber-800/30 text-amber-500 group-hover:bg-amber-700 group-hover:text-white transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:aryanmaurya4045@gmail.com" className="text-amber-200/60 text-sm hover:text-white transition-colors">
                  aryanmaurya4045@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-amber-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-amber-200/30 text-xs font-medium tracking-widest uppercase">
            &copy; {new Date().getFullYear()} J.M.D. Rugs. Crafted with precision in India.
          </p>
          <div className="flex space-x-8 text-amber-200/30 text-xs font-bold uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">Terms</Link>
            <Link href="/shipping" className="hover:text-amber-500 transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

