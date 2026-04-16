import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft, MessageCircle, Check, Ruler, Palette, Package } from 'lucide-react';

async function getProduct(slug: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(*)')
    .eq('slug', slug)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return data;
}

async function getRelatedProducts(categoryId: string, currentProductId: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', categoryId)
    .neq('id', currentProductId)
    .eq('in_stock', true)
    .limit(3);

  if (error) {
    return [];
  }

  return data || [];
}

export default async function ProductDetails({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.category_id, product.id);

  const whatsappMessage = `Hi, I'm interested in ${product.name} (${product.size}). Price: $${product.price}`;
  const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/gallery"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-amber-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Gallery</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.gallery_images && product.gallery_images.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.gallery_images.map((image: string, index: number) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden shadow-md bg-gray-100 cursor-pointer hover:opacity-75 transition-opacity">
                    <Image
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            {product.categories && (
              <div className="mb-4">
                <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.categories.name}
                </span>
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-bold text-amber-700">${product.price}</span>
              {!product.in_stock && (
                <span className="ml-4 text-red-600 font-semibold">Out of Stock</span>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Ruler className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Size</p>
                    <p className="text-gray-600">{product.size}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Package className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Material</p>
                    <p className="text-gray-600">{product.material}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Palette className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Design Style</p>
                    <p className="text-gray-600">{product.design_style}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="bg-gradient-to-r from-amber-700 to-amber-900 rounded-lg shadow-lg p-6 text-white mb-6">
              <div className="flex items-start space-x-3 mb-4">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p>Handcrafted by skilled artisans</p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p>Premium quality materials</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p>Unique design and craftsmanship</p>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Order via WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 bg-amber-700 text-white px-8 py-4 rounded-md hover:bg-amber-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related <span className="text-amber-700">Products</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}
