import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Users, Award, Target, Sparkles, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-gray-50">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Crafting timeless beauty through the art of traditional rug making
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Weaving Dreams Since <span className="text-amber-700">1985</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over three decades, Artisan Rugs has been at the forefront of handmade rug craftsmanship.
                What started as a small family workshop has grown into a renowned name in the world of artisan textiles.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey began with a simple vision: to preserve the ancient art of rug making while creating pieces
                that blend seamlessly with modern aesthetics. Each rug that leaves our workshop is a testament to the
                skill, patience, and dedication of our master artisans.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We source the finest materials from around the world and employ traditional techniques passed down through
                generations. Every knot, every thread, and every pattern is carefully crafted to create rugs that are not
                just floor coverings, but works of art that tell a story.
              </p>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src=" https://i.pinimg.com/1200x/6c/0f/4d/6c0f4d5ee5ca610569ced2de2d1efe7f.jpg"
                alt="Artisan at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-amber-700">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Craftsmanship</h3>
              <p className="text-gray-600">
                Every rug is handcrafted with meticulous attention to detail and unwavering commitment to quality.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We support local artisans and their families, ensuring fair wages and sustainable livelihoods.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We never compromise on quality, using only the finest materials and time-tested techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                While honoring tradition, we embrace contemporary designs to meet modern aesthetic preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="https://i.pinimg.com/1200x/ad/71/25/ad712546693e604a3822003497decfc7.jpg"
                alt="Rug weaving process"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Art of <span className="text-amber-700">Rug Making</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our rug-making process is a labor of love that can take weeks or even months to complete.
                It begins with carefully selecting premium wool, silk, or cotton, each chosen for its unique
                properties and suitability to the design.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The wool is then dyed using both natural and synthetic dyes to achieve vibrant, long-lasting
                colors. Our master weavers use traditional hand-knotting techniques, with some of our finest
                pieces containing over 300 knots per square inch.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                After weaving, each rug undergoes a finishing process that includes washing, trimming, and
                quality inspection. Only rugs that meet our exacting standards bear the Artisan Rugs name.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-4xl font-bold text-amber-700 mb-2">35+</p>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-4xl font-bold text-amber-700 mb-2">500+</p>
                  <p className="text-gray-600">Unique Designs</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-4xl font-bold text-amber-700 mb-2">50+</p>
                  <p className="text-gray-600">Master Artisans</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-4xl font-bold text-amber-700 mb-2">10K+</p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Artisan Difference
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Discover our collection and bring timeless elegance to your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center space-x-2 bg-white text-amber-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-200 font-semibold shadow-xl"
            >
              <span>View Collection</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-amber-900 transition-all duration-200 font-semibold"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
