import Image from 'next/image';
import { Testimonial } from '@/lib/supabase';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = typeof testimonial.rating === 'number' ? testimonial.rating : 5;
  const imageUrl = testimonial.customer_image || 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg';

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative border border-gray-100 group">
      <div className="absolute -top-4 -right-4 bg-amber-700 text-white p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
        <Quote className="w-6 h-6" />
      </div>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-amber-50">
          <Image
            src={imageUrl}
            alt={testimonial.customer_name || 'Customer'}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{testimonial.customer_name || 'Anonymous'}</h4>
          <p className="text-sm font-medium text-amber-700">{testimonial.customer_location || 'Verified Buyer'}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? 'text-amber-500 fill-amber-500'
                : 'text-gray-200'
            }`}
          />
        ))}
      </div>

      <div className="relative">
        <p className="text-gray-600 leading-relaxed italic text-lg relative z-10">
          &quot;{testimonial.review_text || 'No review text provided.'}&quot;
        </p>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center">
        <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
          Authentic Review
        </span>
      </div>
    </div>
  );
}

