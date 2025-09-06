import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Shield, Truck, RotateCcw, Award, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sampleProducts } from '../data/products';

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const featuredProducts = sampleProducts.slice(0, 4);
  const newProducts = sampleProducts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/furniture"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 group"
                >
                  <span>{t('cta.discover')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/custom-made"
                  className="border border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-600 hover:text-white transition-colors font-semibold text-lg text-center"
                >
                  {t('cta.getQuote')}
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">{t('trust.warranty12')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="w-6 h-6 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">{t('trust.return30')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-6 h-6 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">{t('trust.freeShipping')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">{t('trust.securePayment')}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
                  alt="Modern Living Room"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute top-8 right-8 w-48 h-48 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {i18n.language === 'tr' ? 'Öne Çıkan Koleksiyonlar' : 'Featured Collections'}
            </h2>
            <p className="text-xl text-gray-600">
              {i18n.language === 'tr' 
                ? 'En popüler ürünlerimizi keşfedin' 
                : 'Discover our most popular products'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Link 
              to="/furniture"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
                alt="Furniture Collection"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">{t('nav.furniture')}</h3>
                <p className="text-sm opacity-90 mb-3">
                  {i18n.language === 'tr' 
                    ? 'Şık ve konforlu mobilyalar' 
                    : 'Stylish and comfortable furniture'
                  }
                </p>
                <div className="flex items-center space-x-1 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  <span>{t('cta.viewAll')}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link 
              to="/kitchen"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
                alt="Kitchen Collection"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">{t('nav.kitchen')}</h3>
                <p className="text-sm opacity-90 mb-3">
                  {i18n.language === 'tr' 
                    ? 'Kaliteli mutfak ürünleri' 
                    : 'Quality kitchen products'
                  }
                </p>
                <div className="flex items-center space-x-1 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  <span>{t('cta.viewAll')}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link 
              to="/custom-made"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
                alt="Custom Made Collection"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">{t('nav.customMade')}</h3>
                <p className="text-sm opacity-90 mb-3">
                  {i18n.language === 'tr' 
                    ? 'Size özel tasarım çözümler' 
                    : 'Custom design solutions for you'
                  }
                </p>
                <div className="flex items-center space-x-1 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  <span>{t('cta.getQuote')}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {i18n.language === 'tr' ? 'Öne Çıkan Ürünler' : 'Featured Products'}
              </h2>
              <p className="text-xl text-gray-600">
                {i18n.language === 'tr' 
                  ? 'En çok tercih edilen ürünlerimiz' 
                  : 'Our most preferred products'
                }
              </p>
            </div>
            <Link
              to="/products"
              className="text-orange-600 font-semibold flex items-center space-x-1 hover:text-orange-700 transition-colors"
            >
              <span>{t('cta.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {i18n.language === 'tr' ? 'Yeni Gelenler' : 'New Arrivals'}
            </h2>
            <p className="text-xl text-gray-600">
              {i18n.language === 'tr' 
                ? 'Son eklenen ürünlerimizi inceleyin' 
                : 'Check out our latest added products'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Our Workshop"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                {i18n.language === 'tr' ? 'Marka Hikayemiz' : 'Our Brand Story'}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {i18n.language === 'tr' 
                  ? '20 yıllık deneyimimizle, kaliteli mobilya ve mutfak ürünleri üretiyoruz. Her ürünümüzde ustalık ve özen bir aradadır.'
                  : 'With 20 years of experience, we produce quality furniture and kitchen products. Craftsmanship and care come together in each of our products.'
                }
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">20+</div>
                  <div className="text-sm text-gray-300">
                    {i18n.language === 'tr' ? 'Yıl Deneyim' : 'Years Experience'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">50K+</div>
                  <div className="text-sm text-gray-300">
                    {i18n.language === 'tr' ? 'Mutlu Müşteri' : 'Happy Customers'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">1000+</div>
                  <div className="text-sm text-gray-300">
                    {i18n.language === 'tr' ? 'Tamamlanan Proje' : 'Completed Projects'}
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
              >
                {i18n.language === 'tr' ? 'Daha Fazla Bilgi' : 'Learn More'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {i18n.language === 'tr' ? 'Müşteri Yorumları' : 'Customer Reviews'}
            </h2>
            <p className="text-xl text-gray-600">
              {i18n.language === 'tr' 
                ? 'Müşterilerimizin deneyimleri' 
                : 'Experiences of our customers'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  {i18n.language === 'tr' 
                    ? '"Harika kalite ve mükemmel hizmet. Evimiz çok daha sıcak oldu."'
                    : '"Great quality and excellent service. Our home has become much warmer."'
                  }
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {i18n.language === 'tr' ? 'Müşteri' : 'Customer'} {index}
                    </div>
                    <div className="text-sm text-gray-500">İstanbul</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('blog.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {i18n.language === 'tr' 
                  ? 'Dekorasyon ve mutfak rehberlerimiz' 
                  : 'Our decoration and kitchen guides'
                }
              </p>
            </div>
            <Link
              to="/blog"
              className="text-orange-600 font-semibold flex items-center space-x-1 hover:text-orange-700 transition-colors"
            >
              <span>{t('cta.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Link key={index} to={`/blog/${index}`} className="group">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${1571460 + index}/pexels-photo-${1571460 + index}.jpeg`}
                    alt={`Blog ${index}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {i18n.language === 'tr' 
                        ? `Dekorasyon İpuçları ${index}`
                        : `Decoration Tips ${index}`
                      }
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {i18n.language === 'tr' 
                        ? 'Evinizi daha güzel hale getirmenin yolları...'
                        : 'Ways to make your home more beautiful...'
                      }
                    </p>
                    <span className="text-orange-600 text-sm font-medium">
                      {t('blog.readMore')} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/905xxxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors hover:scale-110 transform duration-200"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HomePage;