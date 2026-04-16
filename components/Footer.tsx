import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
              Artisan Rugs
            </h3>
            <p className="text-gray-400 mb-4">
              Exquisite handmade rugs crafted with passion and tradition. Each piece tells a unique story.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery?category=traditional" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Traditional Rugs
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=modern" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Modern Rugs
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=handmade" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Handmade Rugs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">8303319110</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">aryanmaurya4045@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">inflection.org , khamaria, bhadohi, 221306</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()}J.M.D-Rugs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
