'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase, Product, Category } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Filter } from 'lucide-react';

export default function Gallery() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [loading, setLoading] = useState(true);

  const fetchCategories = useCallback(async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*');

    if (!error && data) {
      setCategories(data);
    }
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    let query = supabase.from('products').select('*');

    if (selectedCategory !== 'all') {
      const category = categories.find(c => c.slug === selectedCategory);
      if (category) {
        query = query.eq('category_id', category.id);
      }
    }

    const { data, error } = await query.eq('in_stock', true);

    if (!error && data) {
      setProducts(data);
    }
    setLoading(false);
  }, [selectedCategory, categories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-gray-50">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Collection</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Browse through our exquisite selection of handmade rugs, each crafted with precision and care.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-amber-700" />
              <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-amber-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Rugs
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    selectedCategory === category.slug
                      ? 'bg-amber-700 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-amber-700 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          ) : products.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{products.length}</span> product{products.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No products found in this category.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-4 text-amber-700 font-semibold hover:text-amber-800"
              >
                View all products
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
