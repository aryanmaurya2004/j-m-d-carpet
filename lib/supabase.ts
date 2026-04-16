import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  size: string;
  material: string;
  design_style: string;
  image_url: string;
  gallery_images: string[];
  featured: boolean;
  in_stock: boolean;
  created_at: string;
  categories?: Category;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  customer_location: string;
  rating: number;
  review_text: string;
  customer_image: string;
  created_at: string;
}
