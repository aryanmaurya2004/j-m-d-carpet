import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/lib/supabase';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/gallery?category=${category.slug}`} className="group block">
      <div className="relative h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <Image
          src={category.image_url}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-3xl font-bold mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
            {category.name}
          </h3>
          <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center space-x-2 text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Explore Collection</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}
