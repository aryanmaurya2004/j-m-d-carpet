import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/lib/supabase';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/gallery?category=${category.slug}`} className="group block h-full">
      <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-white/20">
        <Image
          src={category.image_url}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-300" />
        
        {/* Glassmorphism content */}
        <div className="absolute inset-x-4 bottom-4 p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white transform group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            {category.name}
          </h3>
          <p className="text-gray-200 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 line-clamp-2 max-h-0 group-hover:max-h-20">
            {category.description}
          </p>
          <div className="flex items-center space-x-2 text-amber-400 font-semibold text-sm uppercase tracking-wider">
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}

