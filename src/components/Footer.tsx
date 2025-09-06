import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Globe, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { state, dispatch } = useApp();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
    dispatch({ type: 'SET_LANGUAGE', payload: newLang });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubscribing(true);
    try {
      // Newsletter subscription logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setEmail('');
      // Show success message
    } catch (error) {
      // Show error message
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">K Mobilya</h3>
                <p className="text-xs text-gray-400">Furniture & Kitchen</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {i18n.language === 'tr' 
                ? '20 yıllık deneyimimizle kaliteli mobilya ve mutfak ürünleri üretiyoruz. Evinize sıcaklık, mutfağınıza ustalık katıyoruz.'
                : 'With 20 years of experience, we produce quality furniture and kitchen products. We add warmth to your home and mastery to your kitchen.'
              }
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-orange-600" />
                <span>0212 xxx xx xx</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-orange-600" />
                <span>info@kmobilya.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>{i18n.language === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey'}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.company')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="/stores" className="hover:text-orange-400 transition-colors">{t('footer.stores')}</Link></li>
              <li><Link to="/careers" className="hover:text-orange-400 transition-colors">{t('footer.careers')}</Link></li>
              <li><Link to="/blog" className="hover:text-orange-400 transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/custom-made" className="hover:text-orange-400 transition-colors">{t('nav.customMade')}</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.customerService')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/faq" className="hover:text-orange-400 transition-colors">{t('footer.faq')}</Link></li>
              <li><Link to="/order-tracking" className="hover:text-orange-400 transition-colors">{t('nav.orderTracking')}</Link></li>
              <li><Link to="/return-policy" className="hover:text-orange-400 transition-colors">{t('footer.returnPolicy')}</Link></li>
              <li><Link to="/warranty" className="hover:text-orange-400 transition-colors">{t('footer.warranty')}</Link></li>
              <li><Link to="/shipping" className="hover:text-orange-400 transition-colors">{t('footer.shippingInfo')}</Link></li>
              <li><Link to="/size-guide" className="hover:text-orange-400 transition-colors">
                {i18n.language === 'tr' ? 'Ölçü Rehberi' : 'Size Guide'}
              </Link></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.newsletter')}</h4>
            <p className="text-sm text-gray-400 mb-4">{t('footer.newsletterText')}</p>
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('common.email')}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSubscribing}
                  className="px-4 py-2 bg-orange-600 text-white rounded-r-lg hover:bg-orange-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
            </form>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-4">{t('footer.followUs')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t('trust.securePayment')}</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t('trust.return30')}</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t('trust.freeShipping')}</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t('trust.warranty12')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            <p>© 2025 K Mobilya. {t('footer.allRightsReserved')}</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm text-gray-400 hover:text-orange-400 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{i18n.language === 'tr' ? 'EN' : 'TR'}</span>
            </button>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms" className="hover:text-orange-400 transition-colors">
                {t('footer.termsOfUse')}
              </Link>
              <Link to="/kvkv" className="hover:text-orange-400 transition-colors">
                {i18n.language === 'tr' ? 'KVKK' : 'GDPR'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;