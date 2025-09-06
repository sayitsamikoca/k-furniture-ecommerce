import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const CartPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { state, dispatch } = useApp();

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { productId, quantity: newQuantity } });
    }
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0
    }).format(price);
  };

  const subtotal = state.cart.reduce((total, item) => {
    const price = item.product.discountPrice || item.product.price;
    return total + (price * item.quantity);
  }, 0);

  const shippingCost = subtotal > 1000 ? 0 : 50; // Free shipping over 1000 TRY
  const total = subtotal + shippingCost;

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cart.empty')}</h2>
            <p className="text-gray-600 mb-8">
              {i18n.language === 'tr' 
                ? 'Sepetinizde henüz ürün bulunmamaktadır.'
                : 'There are no products in your cart yet.'
              }
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              <span>
                {i18n.language === 'tr' ? 'Alışverişe Başla' : 'Start Shopping'}
              </span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('cart.title')}</h1>
          <p className="text-gray-600">
            {state.cart.length} {i18n.language === 'tr' ? 'ürün' : 'items'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.cart.map((item) => {
              const title = i18n.language === 'tr' ? item.product.titleTR : item.product.titleEN;
              const price = item.product.discountPrice || item.product.price;
              
              return (
                <div key={item.product.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-4">
                    {/* Product Image */}
                    <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="font-semibold text-gray-900 hover:text-orange-600 transition-colors block"
                      >
                        {title}
                      </Link>
                      
                      <div className="mt-1 text-sm text-gray-600 space-y-1">
                        <p>SKU: {item.product.sku}</p>
                        <p>{t('common.material')}: {item.product.material}</p>
                        {item.product.isCustomMade && (
                          <p className="text-purple-600 font-medium">
                            {t('product.customMade')}
                          </p>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3 mt-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 border-l border-r border-gray-300 min-w-[60px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-red-600 hover:text-red-700 transition-colors p-2"
                          title={i18n.language === 'tr' ? 'Kaldır' : 'Remove'}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex-shrink-0 text-right">
                      <div className="font-bold text-lg text-gray-900">
                        {formatPrice(price * item.quantity, item.product.currency)}
                      </div>
                      {item.product.discountPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {formatPrice(item.product.price * item.quantity, item.product.currency)}
                        </div>
                      )}
                      <div className="text-sm text-gray-600 mt-1">
                        {formatPrice(price, item.product.currency)} / {i18n.language === 'tr' ? 'adet' : 'piece'}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('checkout.orderSummary')}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>
                    {i18n.language === 'tr' ? 'Ara Toplam' : 'Subtotal'}
                  </span>
                  <span>{formatPrice(subtotal, 'TRY')}</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>{t('cart.shipping')}</span>
                  <span>
                    {shippingCost === 0 ? (
                      <span className="text-green-600 font-medium">{t('cart.freeShipping')}</span>
                    ) : (
                      formatPrice(shippingCost, 'TRY')
                    )}
                  </span>
                </div>

                {subtotal < 1000 && subtotal > 0 && (
                  <div className="text-sm text-orange-600 bg-orange-50 p-3 rounded-lg">
                    {i18n.language === 'tr' 
                      ? `${formatPrice(1000 - subtotal, 'TRY')} daha alışveriş yapın, kargo ücretsiz olsun!`
                      : `Shop ${formatPrice(1000 - subtotal, 'TRY')} more for free shipping!`
                    }
                  </div>
                )}

                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>{t('cart.total')}</span>
                    <span>{formatPrice(total, 'TRY')}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-center block"
              >
                {t('checkout.title')}
              </Link>

              <Link
                to="/"
                className="w-full mt-3 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors text-center block"
              >
                {i18n.language === 'tr' ? 'Alışverişe Devam Et' : 'Continue Shopping'}
              </Link>

              {/* Security Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{t('trust.securePayment')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{t('trust.return30')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;