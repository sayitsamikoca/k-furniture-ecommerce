import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ShoppingCart, Heart, User, Menu, X, Globe } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { state, dispatch } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
    dispatch({ type: 'SET_LANGUAGE', payload: newLang });
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm text-gray-600">
          <div className="hidden md:block">
            <span>{t('trust.freeShipping')} • {t('trust.return30')} • {t('trust.warranty12')}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 hover:text-orange-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{i18n.language}</span>
            </button>
            <Link to="/order-tracking" className="hover:text-orange-600 transition-colors">
              {t('nav.orderTracking')}
            </Link>
            <a href="#" className="hover:text-orange-600 transition-colors">
              WhatsApp: 0532 xxx xx xx
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">K Mobilya</h1>
              <p className="text-xs text-gray-500">Furniture & Kitchen</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.home')}
            </Link>
            <div className="group relative">
              <Link to="/furniture" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                {t('nav.furniture')}
              </Link>
            </div>
            <div className="group relative">
              <Link to="/kitchen" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                {t('nav.kitchen')}
              </Link>
            </div>
            <Link to="/custom-made" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.customMade')}
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.blog')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder={t('common.search')}
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              />
              <Search className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
            </div>

            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Favorites */}
            <Link to="/favorites" className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <Heart className="w-5 h-5" />
              {state.favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.favorites.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* User */}
            <Link to="/account" className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden mt-4 border-t pt-4">
            <div className="relative">
              <input
                type="text"
                placeholder={t('common.search')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              />
              <Search className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-2 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/furniture" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.furniture')}
            </Link>
            <Link to="/kitchen" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.kitchen')}
            </Link>
            <Link to="/custom-made" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.customMade')}
            </Link>
            <Link to="/blog" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.blog')}
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t('nav.contact')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;