import Image from 'next/image';
import { Testimonial } from '@/lib/supabase';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative">
      <Quote className="absolute top-4 right-4 w-12 h-12 text-amber-200 opacity-50" />
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-amber-500">
          <Image
            src={testimonial.customer_image}
            alt={testimonial.customer_name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.customer_name}</h4>
          <p className="text-sm text-gray-500">{testimonial.customer_location}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'text-amber-500 fill-amber-500'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed italic">"{testimonial.review_text}"</p>
    </div>
  );
}
