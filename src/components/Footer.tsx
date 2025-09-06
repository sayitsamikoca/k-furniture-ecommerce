import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { dispatch } = useApp();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
    dispatch({ type: 'SET_LANGUAGE', payload: newLang });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">K Mobilya</h3>
                <p className="text-xs text-gray-400">Furniture & Kitchen</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {i18n.language === 'tr' 
                ? 'Kaliteli mobilya ve mutfak ürünleri ile evinizi güzelleştiriyoruz.'
                : 'We beautify your home with quality furniture and kitchen products.'
              }
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>0212 xxx xx xx</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@kmobilya.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{i18n.language === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey'}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="/stores" className="hover:text-orange-400 transition-colors">
                {i18n.language === 'tr' ? 'Mağazalarımız' : 'Our Stores'}
              </Link></li>
              <li><Link to="/careers" className="hover:text-orange-400 transition-colors">
                {i18n.language === 'tr' ? 'Kariyer' : 'Careers'}
              </Link></li>
              <li><Link to="/blog" className="hover:text-orange-400 transition-colors">{t('nav.blog')}</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.customerService')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-orange-400 transition-colors">
                {i18n.language === 'tr' ? 'SSS' : 'FAQ'}
              </Link></li>
              <li><Link to="/order-tracking" className="hover:text-orange-400 transition-colors">{t('nav.orderTracking')}</Link></li>
              <li><Link to="/return-policy" className="hover:text-orange-400 transition-colors">
                {i18n.language === 'tr' ? 'İade & Değişim' : 'Return & Exchange'}
              </Link></li>
              <li><Link to="/warranty" className="hover:text-orange-400 transition-colors">
                {i18n.language === 'tr' ? 'Garanti' : 'Warranty'}
              </Link></li>
              <li><Link to="/shipping" className="hover:text-orange-400 transition-colors">
                {i18n.language === 'tr' ? 'Kargo Bilgileri' : 'Shipping Info'}
              </Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.newsletter')}</h4>
            <p className="text-sm text-gray-400 mb-4">{t('footer.newsletterText')}</p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('common.email')}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
              />
              <button className="px-4 py-2 bg-orange-600 text-white rounded-r-lg hover:bg-orange-700 transition-colors text-sm">
                {i18n.language === 'tr' ? 'Abone Ol' : 'Subscribe'}
              </button>
            </div>

            <div className="mt-6">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            <p>© 2025 K Mobilya. {i18n.language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm text-gray-400 hover:text-orange-400 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{i18n.language === 'tr' ? 'EN' : 'TR'}</span>
            </button>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">
                {i18n.language === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
              </Link>
              <Link to="/terms" className="hover:text-orange-400 transition-colors">
                {i18n.language === 'tr' ? 'Kullanım Şartları' : 'Terms of Use'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;