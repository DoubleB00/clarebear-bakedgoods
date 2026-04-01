import { useState } from 'react';
import { MessageCircle, Instagram, Heart, Cookie, Cake, Gift, Calendar, Star, ChevronDown } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const treats = [
    {
      icon: Cookie,
      title: 'Custom Cookies',
      description: 'Beautifully decorated sugar cookies in any theme or design. Perfect for parties, gifts, and celebrations.',
    },
    {
      icon: Cake,
      title: 'Cupcakes',
      description: 'Delicious cupcakes with custom flavors and decorations to match your special occasion.',
    },
    {
      icon: Gift,
      title: 'Cookie Kits',
      description: 'DIY cookie decorating kits for a fun activity at home. Everything you need included.',
    },
    {
      icon: Calendar,
      title: 'Holiday Treats',
      description: 'Seasonal and holiday-themed baked goods for every celebration throughout the year.',
    },
    {
      icon: Heart,
      title: 'Custom Party Orders',
      description: 'Complete dessert packages for birthdays, baby showers, weddings, and special events.',
    },
  ];

  const reviews = [
    {
      name: 'Maria G.',
      text: 'Clarissa made the most beautiful cookies for my daughter\'s birthday! Everyone was so impressed. They tasted amazing too!',
      rating: 5,
    },
    {
      name: 'Jennifer L.',
      text: 'I order from Clarebear\'s for every special occasion. The quality and attention to detail is unmatched!',
      rating: 5,
    },
    {
      name: 'Sarah M.',
      text: 'The cookie kit was such a hit at my son\'s party! All the kids had so much fun decorating. Highly recommend!',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'How far in advance should I order?',
      answer: 'Please place your order at least 1 week before your event date. For large or complex orders, 2-3 weeks notice is appreciated.',
    },
    {
      question: 'Do you do custom themes?',
      answer: 'Absolutely! I love creating custom designs for any theme you have in mind. Just share your ideas and inspiration photos.',
    },
    {
      question: 'How do I place an order?',
      answer: 'Simply message me on WhatsApp or Instagram with your event date, theme, and number of treats needed. I\'ll help you create the perfect order!',
    },
    {
      question: 'Where do I message you?',
      answer: 'You can reach me on WhatsApp (preferred) or send a direct message on Instagram @clarebearsbakes.',
    },
    {
      question: 'Do you offer holiday specials?',
      answer: 'Yes! I create special holiday-themed treats for Christmas, Valentine\'s Day, Easter, Halloween, and more. Follow me on Instagram to see seasonal offerings!',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cookie className="w-8 h-8 text-lavender" />
            <h1 className="text-xl sm:text-2xl font-bold text-lavender">Clarebear's Baked Goods</h1>
          </div>
          <button
            onClick={() => window.open('https://wa.me/', '_blank')}
            className="bg-lavender text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-lavender-dark transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Order Now</span>
            <span className="sm:hidden">Order</span>
          </button>
        </div>
      </header>

      <main className="pt-20">
        <section id="hero" className="relative bg-gradient-to-br from-lavender-light via-pink-light to-cream py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  Custom Baked Goods Made with Love
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                  Beautiful custom treats for birthdays, parties, holidays, and special moments
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => window.open('https://wa.me/', '_blank')}
                    className="bg-lavender text-white px-8 py-4 rounded-full hover:bg-lavender-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order on WhatsApp
                  </button>
                  <button
                    onClick={() => scrollToSection('treats')}
                    className="bg-white text-lavender px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                  >
                    View Treats
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden aspect-square">
                    <img
                      src="https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg"
                      alt="Custom decorated cookies"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden aspect-square">
                    <img
                      src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg"
                      alt="Beautiful cupcakes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden aspect-square">
                    <img
                      src="https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg"
                      alt="Cookie gift box"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden aspect-square">
                    <img
                      src="https://images.pexels.com/photos/5848426/pexels-photo-5848426.jpeg"
                      alt="Party themed treats"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-16 h-16 text-pink mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Baked with Love by Clarissa</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hi, I'm Clarissa Rojas, a mom baker following my dream of bringing joy to families through custom baked goods.
              Every treat is made with high-quality ingredients, attention to detail, and lots of love.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it's a first birthday, a holiday celebration, or just because, I'm here to make your special moments
              even sweeter with beautiful, delicious, made-to-order treats that your family will remember.
            </p>
          </div>
        </section>

        <section id="treats" className="py-20 bg-gradient-to-br from-cream to-pink-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">Featured Treats</h2>
            <p className="text-lg text-gray-700 text-center mb-12">Custom baked goods for every occasion</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {treats.map((treat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-2"
                >
                  <div className="bg-lavender-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <treat.icon className="w-10 h-10 text-lavender" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{treat.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{treat.description}</p>
                  <button
                    onClick={() => window.open('https://wa.me/', '_blank')}
                    className="bg-pink text-white px-6 py-3 rounded-full hover:bg-pink-dark transition-all duration-300 font-semibold"
                  >
                    Ask About This
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ordering" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">How Ordering Works</h2>
            <p className="text-lg text-gray-700 text-center mb-12">Simple, easy, and stress-free</p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-lavender text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Send Your Order</h3>
                <p className="text-gray-600 leading-relaxed">
                  Message me on WhatsApp with your event date, theme, and how many treats you need.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pink text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Confirm Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'll create a custom design based on your vision and confirm all the details with you.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-lavender text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Receive Your Treats</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pick up your beautiful, fresh baked goods ready to delight your guests!
                </p>
              </div>
            </div>
            <div className="bg-lavender-light border-l-4 border-lavender rounded-lg p-6 text-center">
              <p className="text-gray-800 font-semibold text-lg">
                <Calendar className="w-5 h-5 inline mr-2" />
                Please place your order at least 1 week before your event date.
              </p>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-gradient-to-br from-pink-light to-lavender-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">What Customers Say</h2>
            <p className="text-lg text-gray-700 text-center mb-12">Join our happy customers</p>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{review.text}"</p>
                  <p className="font-semibold text-gray-800">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">Our Gallery</h2>
            <p className="text-lg text-gray-700 text-center mb-12">Recent custom orders and creations</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
                'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg',
                'https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg',
                'https://images.pexels.com/photos/5848426/pexels-photo-5848426.jpeg',
                'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
                'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg',
                'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg',
                'https://images.pexels.com/photos/1120468/pexels-photo-1120468.jpeg',
              ].map((img, index) => (
                <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 text-center mb-12">Everything you need to know</p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-lavender transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-lavender to-pink text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Place an Order?</h2>
            <p className="text-xl mb-8 opacity-95">
              Let's create something special together! Message me today to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/', '_blank')}
                className="bg-white text-lavender px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </button>
              <button
                onClick={() => window.open('https://instagram.com/', '_blank')}
                className="bg-pink-dark text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Message on Instagram
              </button>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Cookie className="w-8 h-8 text-lavender" />
                <h3 className="text-2xl font-bold">Clarebear's Baked Goods</h3>
              </div>
              <p className="text-gray-300 mb-6">Custom baked goods made with love by Clarissa Rojas</p>
              <div className="flex gap-6 justify-center mb-8">
                <button
                  onClick={() => window.open('https://wa.me/', '_blank')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => window.open('https://instagram.com/', '_blank')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Clarebear's Baked Goods. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
