import { supabase } from '@/lib/supabase';
import CategoryCard from '@/components/CategoryCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-gray-50">
      <Navbar />

      <section className="relative py-24 bg-gradient-to-r from-amber-700 to-amber-900 text-white overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-bottom-right" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-200 text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            Handcrafted Excellence
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Our Rug <span className="text-amber-400">Categories</span>
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            From timeless traditionals to modern abstracts, explore our diverse collections of artisan-crafted rugs suited for every space.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          
          {categories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 italic">No categories found in our gallery currently.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't decide on a style?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our design experts are here to help you choose the perfect rug that complements your home's unique personality.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white rounded-lg font-bold hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl">
            Get Expert Advice
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
