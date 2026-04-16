import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = 'https://wa.me/8303319119?text=Hello, I would like to inquire about your handmade rugs';

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-gray-50">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            We`d love to hear from you. Reach out to us for any inquiries or custom orders.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-600 mb-2">Give us a call</p>
              <a href="tel:+91 8303319119" className="text-amber-700 hover:text-amber-800 font-semibold">
                +91 8303319119
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a href="mailto:info@artisanrugs.com" className="text-amber-700 hover:text-amber-800 font-semibold">
                aryanmaurya4045@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Location</h3>
              <p className="text-gray-600 mb-2">Visit our showroom</p>
              <p className="text-amber-700 font-semibold">
                inflection.org , khamaria <br /> bhadohi, 221306
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="bitoo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="jmd@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="+91 0000000000 "
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-amber-700 text-white px-8 py-4 rounded-md hover:bg-amber-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl text-center"
              >
                <div className="flex items-center justify-center space-x-3">
                  <MessageCircle className="w-6 h-6" />
                  <span>Chat with us on WhatsApp</span>
                </div>
              </a>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
                <div className="mt-6 flex items-start space-x-3 bg-amber-50 p-4 rounded-md">
                  <Clock className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    We recommend scheduling an appointment for personalized consultation and to ensure our
                    experts are available to assist you.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Location Map</h2>
                <div className="relative h-80 rounded-lg overflow-hidden bg-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.9611525960963!2d82.51387687517702!3d25.238233377684548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fe9de1bae336b%3A0xf903b167fbf71bf0!2sInflection%20ORG%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1775559330103!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location Map"
                  
                  >
                  
                    </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-amber-100">WhatsApp Support</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-amber-100">Customer Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Fast</h3>
              <p className="text-amber-100">Response Time</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
