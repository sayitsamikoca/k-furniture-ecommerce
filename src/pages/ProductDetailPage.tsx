import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  Minus,
  Plus,
  ChevronLeft,
  ChevronRight,
  Check
} from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { sampleProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const { state, dispatch } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');

  const product = sampleProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {i18n.language === 'tr' ? 'Ürün bulunamadı' : 'Product not found'}
          </h2>
          <Link to="/" className="text-orange-600 hover:text-orange-700 font-medium">
            {i18n.language === 'tr' ? 'Ana sayfaya dön' : 'Back to home'}
          </Link>
        </div>
      </div>
    );
  }

  const title = i18n.language === 'tr' ? product.titleTR : product.titleEN;
  const description = i18n.language === 'tr' ? product.descriptionTR : product.descriptionEN;
  const careInstructions = i18n.language === 'tr' ? product.careInstructionsTR : product.careInstructionsEN;
  const isFavorite = state.favorites.includes(product.id);
  const relatedProducts = sampleProducts.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
      style: 'currency',
      currency: product.currency,
      minimumFractionDigits: 0
    }).format(price);
  };

  const discountPercentage = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
    // Show success message
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: product.id });
    }
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-orange-600 transition-colors">
            {t('nav.home')}
          </Link>
          <span>/</span>
          <Link to={`/${product.category}`} className="hover:text-orange-600 transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[selectedImageIndex]}
                alt={title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-xl"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {product.isCustomMade && (
                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {t('product.customMade')}
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    -{discountPercentage}%
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index ? 'border-orange-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Rating & Reviews */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} {i18n.language === 'tr' ? 'değerlendirme' : 'reviews'})
                </span>
              </div>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-600">SKU: {product.sku}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{title}</h1>

            {/* Price */}
            <div className="space-y-2">
              {product.discountPrice ? (
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-orange-600">
                    {formatPrice(product.discountPrice)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.price)}
                  </span>
                  <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
                    -{discountPercentage}% {i18n.language === 'tr' ? 'İndirim' : 'Off'}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{description}</p>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">{t('common.material')}:</span>
                <span className="ml-2 font-medium">{product.material}</span>
              </div>
              <div>
                <span className="text-gray-600">{t('product.warranty')}:</span>
                <span className="ml-2 font-medium">{product.warranty} {t('months')}</span>
              </div>
              <div>
                <span className="text-gray-600">{t('common.size')}:</span>
                <span className="ml-2 font-medium">
                  {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
                </span>
              </div>
              <div>
                <span className="text-gray-600">{t('product.deliveryTime')}:</span>
                <span className="ml-2 font-medium">{product.deliveryTime} {t('days')}</span>
              </div>
            </div>

            {/* Color Selection */}
            {product.colors.length > 1 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">{t('common.color')}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                        selectedColor === color
                          ? 'border-orange-600 text-orange-600 bg-orange-50'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.stock > 0 ? (
                <>
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium">
                    {product.stock > 10 
                      ? t('product.inStock')
                      : `${product.stock} ${i18n.language === 'tr' ? 'adet kaldı' : 'items left'}`
                    }
                  </span>
                </>
              ) : (
                <span className="text-red-600 font-medium">{t('product.outOfStock')}</span>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-300 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex-1 flex space-x-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-semibold"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{product.stock === 0 ? t('product.outOfStock') : t('cta.addToCart')}</span>
                  </button>
                  
                  <button
                    onClick={handleToggleFavorite}
                    className={`p-3 border rounded-lg transition-colors ${
                      isFavorite
                        ? 'border-red-500 text-red-500 bg-red-50'
                        : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {product.isCustomMade && (
                <Link
                  to="/custom-quote"
                  className="block w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center font-semibold"
                >
                  {t('cta.getQuote')}
                </Link>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="w-5 h-5 text-orange-600" />
                <span className="text-gray-600">{t('trust.freeShipping')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <RotateCcw className="w-5 h-5 text-orange-600" />
                <span className="text-gray-600">{t('trust.return30')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-5 h-5 text-orange-600" />
                <span className="text-gray-600">{product.warranty} {t('months')} {t('product.warranty')}</span>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                {i18n.language === 'tr' ? 'Bakım Talimatları' : 'Care Instructions'}
              </h3>
              <p className="text-sm text-gray-600">{careInstructions}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {i18n.language === 'tr' ? 'Benzer Ürünler' : 'Similar Products'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;