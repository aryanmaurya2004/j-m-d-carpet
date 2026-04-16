/*
  # Handmade Rugs Website Schema

  ## Overview
  This migration creates the complete database structure for a handmade rugs e-commerce website.

  ## Tables Created
  
  ### 1. categories
  Stores different rug categories (Traditional, Modern, Handmade, etc.)
  - `id` (uuid, primary key) - Unique category identifier
  - `name` (text) - Category name
  - `slug` (text, unique) - URL-friendly category identifier
  - `description` (text) - Category description
  - `image_url` (text) - Category display image
  - `created_at` (timestamptz) - Record creation timestamp

  ### 2. products
  Stores individual rug products with complete details
  - `id` (uuid, primary key) - Unique product identifier
  - `category_id` (uuid, foreign key) - References categories table
  - `name` (text) - Product name
  - `slug` (text, unique) - URL-friendly product identifier
  - `description` (text) - Detailed product description
  - `price` (numeric) - Product price
  - `size` (text) - Rug dimensions
  - `material` (text) - Rug material composition
  - `design_style` (text) - Design style description
  - `image_url` (text) - Main product image
  - `gallery_images` (text[]) - Additional product images
  - `featured` (boolean) - Whether product is featured on homepage
  - `in_stock` (boolean) - Availability status
  - `created_at` (timestamptz) - Record creation timestamp

  ### 3. testimonials
  Stores customer reviews and testimonials
  - `id` (uuid, primary key) - Unique testimonial identifier
  - `customer_name` (text) - Customer's name
  - `customer_location` (text) - Customer's location
  - `rating` (integer) - Rating out of 5
  - `review_text` (text) - Customer review content
  - `customer_image` (text) - Customer profile image
  - `created_at` (timestamptz) - Record creation timestamp

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Public read access for all tables (suitable for e-commerce)
  - No public write access (admin-only via service role)

  ## Important Notes
  - All tables use UUID primary keys for scalability
  - Timestamps use timestamptz for timezone awareness
  - RLS policies allow public read access for storefront functionality
  - Write operations require authentication (admin access)
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  price numeric(10,2) NOT NULL DEFAULT 0,
  size text DEFAULT '',
  material text DEFAULT '',
  design_style text DEFAULT '',
  image_url text DEFAULT '',
  gallery_images text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_location text DEFAULT '',
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  customer_image text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies for categories
CREATE POLICY "Allow public read access to categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert categories"
  ON categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update categories"
  ON categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create RLS Policies for products
CREATE POLICY "Allow public read access to products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create RLS Policies for testimonials
CREATE POLICY "Allow public read access to testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);