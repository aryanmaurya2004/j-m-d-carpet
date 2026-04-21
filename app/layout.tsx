import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: false,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'J.M.D. Carpet | Premium Handmade Rugs & Masterpieces',
  description: 'Experience the art of traditional rug making. Discover our curated collection of artisan-crafted, handmade rugs designed to transform your home with timeless elegance.',
  keywords: 'handmade rugs, artisan carpets, traditional rugs, premium carpets, home decor, handmade textiles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

