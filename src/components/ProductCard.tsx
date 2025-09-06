import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, ShoppingCart, Star, Eye, Scale } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../contexts/AppContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { t, i18n } = useTranslation();
  const { state, dispatch } = useApp();

  const title = i18n.language === 'tr' ? product.titleTR : product.titleEN;
  const shortDescription = i18n.language === 'tr' ? product.shortDescriptionTR : product.shortDescriptionEN;
  const slug = i18n.language === 'tr' ? product.slugTR : product.slugEN;
  const isFavorite = state.favorites.includes(product.id);
  const isInComparison = state.comparison.includes(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.stock > 0) {
      dispatch({ 
        type: 'ADD_TO_CART', 
        payload: { product, quantity: 1 } 
      });
    }
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: product.id });
    }
  };

  const handleToggleComparison = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInComparison) {
      dispatch({ type: 'REMOVE_FROM_COMPARISON', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_COMPARISON', payload: product.id });
    }
  };

  const formatPrice = (price: number) => {
    const exchangeRates = { TRY: 1, USD: 0.034, EUR: 0.031 };
    const convertedPrice = price * exchangeRates[state.currency];
    
    return new Intl.NumberFormat(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
      style: 'currency',
      currency: state.currency,
      minimumFractionDigits: state.currency === 'TRY' ? 0 : 2
    }).format(convertedPrice);
  };

  const discountPercentage = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const currentPrice = product.discountPrice || product.price;

  return (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden border border-gray-100 ${className}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${slug}`}>
          <img
            src={product.images[0]?.url}
            alt={product.images[0]?.altTR || title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {product.isNew && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              {t('product.newArrival')}
            </span>
          )}
          {product.isCustomMade && (
            <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              {t('product.customMade')}
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              -{discountPercentage}%
            </span>
          )}
          {product.stock === 0 && (
            <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              {t('product.outOfStock')}
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              {t('product.featured')}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleToggleFavorite}
            className={`p-2 rounded-full shadow-lg transition-colors ${
              isFavorite 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
            title={isFavorite ? t('product.removeFromFavorites') : t('product.addToFavorites')}
          >
            <Heart className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleToggleComparison}
            className={`p-2 rounded-full shadow-lg transition-colors ${
              isInComparison
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-blue-500 hover:text-white'
            }`}
            title={t('product.compare')}
          >
            <Scale className="w-4 h-4" />
          </button>
          
          <Link 
            to={`/product/${slug}`}
            className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-colors"
            title={t('common.view')}
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviewCount})
          </span>
        </div>

        {/* Title */}
        <Link to={`/product/${slug}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {shortDescription}
        </p>

        {/* Material & Colors */}
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
          <span>{product.material}</span>
          <div className="flex space-x-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div 
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ 
                  backgroundColor: color === 'Beyaz' ? '#ffffff' : 
                                   color === 'Siyah' ? '#000000' :
                                   color === 'Gri' ? '#6b7280' :
                                   color === 'Bej' ? '#d2b48c' :
                                   color === 'Lacivert' ? '#1e3a8a' :
                                   color === 'Doğal' ? '#d4a574' :
                                   color === 'Koyu Ceviz' ? '#8b4513' :
                                   color === 'Açık Meşe' ? '#daa520' :
                                   color === 'Antrasit' ? '#374151' :
                                   color === 'Ahşap Desenli' ? '#92400e' :
                                   color === 'Kahverengi' ? '#92400e' :
                                   color === 'Gümüş' ? '#9ca3af' :
                                   '#94a3b8'
                }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-400">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            {product.discountPrice ? (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-orange-600">
                  {formatPrice(product.discountPrice)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.price)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          
          {/* Delivery Time */}
          {product.deliveryTime && (
            <span className="text-sm text-gray-500">
              {product.deliveryTime} {t('time.days')}
            </span>
          )}
        </div>

        {/* Stock Status */}
        {product.stock <= 5 && product.stock > 0 && (
          <div className="mb-3">
            <span className="text-sm text-orange-600 font-medium">
              {i18n.language === 'tr' 
                ? `Son ${product.stock} adet!` 
                : `Only ${product.stock} left!`
              }
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          {product.isCustomMade ? (
            <Link
              to={`/custom-quote?product=${product.id}`}
              className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium text-center"
            >
              {t('cta.getQuote')}
            </Link>
          ) : (
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm font-medium"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{product.stock === 0 ? t('product.outOfStock') : t('cta.addToCart')}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;