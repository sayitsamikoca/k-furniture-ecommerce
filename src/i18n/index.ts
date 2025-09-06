import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      // Navigation
      'nav.home': 'Ana Sayfa',
      'nav.furniture': 'Mobilya',
      'nav.kitchen': 'Mutfak',
      'nav.customMade': 'Özel Üretim',
      'nav.about': 'Hakkımızda',
      'nav.contact': 'İletişim',
      'nav.blog': 'Blog',
      'nav.orderTracking': 'Sipariş Takip',
      
      // Categories
      'category.livingRoom': 'Oturma Odası',
      'category.bedroom': 'Yatak Odası',
      'category.diningRoom': 'Yemek Odası',
      'category.youth': 'Genç & Bebek',
      'category.office': 'Ofis',
      'category.outdoor': 'Dış Mekân',
      'category.bookshelf': 'Kitaplık & Raf',
      
      // Kitchen Categories
      'kitchen.cookware': 'Tencere & Tava',
      'kitchen.accessories': 'Pişirme Aksesuarları',
      'kitchen.knives': 'Bıçak & Kesme Tahtası',
      'kitchen.tableware': 'Sofra & Servis',
      'kitchen.storage': 'Saklama',
      'kitchen.appliances': 'Küçük Ev Aletleri',
      'kitchen.furniture': 'Mutfak Mobilyası',
      
      // Hero & CTAs
      'hero.title': 'Evinizi sıcak bir yuvaya dönüştürün',
      'hero.subtitle': 'Evinize sıcaklık, mutfağınıza ustalık katın',
      'cta.addToCart': 'Sepete Ekle',
      'cta.getQuote': 'Özel Ölçü Teklifi Al',
      'cta.discover': 'Hemen Keşfet',
      'cta.viewAll': 'Tümünü Gör',
      
      // Product
      'product.inStock': 'Stokta',
      'product.outOfStock': 'Stok Yok',
      'product.customMade': 'Özel Üretim',
      'product.deliveryTime': 'Teslimat Süresi',
      'product.warranty': 'Garanti',
      'product.addToFavorites': 'Favorilere Ekle',
      'product.compare': 'Karşılaştır',
      'product.reviews': 'Değerlendirmeler',
      'product.askQuestion': 'Soru Sor',
      'product.roomCombinations': 'Odaya Göre Kombin Önerileri',
      
      // Cart & Checkout
      'cart.title': 'Sepetim',
      'cart.empty': 'Sepetiniz boş',
      'cart.total': 'Toplam',
      'cart.shipping': 'Kargo',
      'cart.freeShipping': 'Ücretsiz Kargo',
      'checkout.title': 'Ödeme',
      'checkout.shippingAddress': 'Teslimat Adresi',
      'checkout.paymentMethod': 'Ödeme Yöntemi',
      'checkout.orderSummary': 'Sipariş Özeti',
      
      // Trust Badges
      'trust.warranty12': '12 Ay Garanti',
      'trust.return30': '30 Gün İçinde İade',
      'trust.securePayment': 'Güvenli Ödeme',
      'trust.freeShipping': 'Ücretsiz Kargo',
      
      // Footer
      'footer.company': 'Kurumsal',
      'footer.customerService': 'Müşteri Hizmetleri',
      'footer.policies': 'Politikalar',
      'footer.followUs': 'Bizi Takip Edin',
      'footer.newsletter': 'E-bülten',
      'footer.newsletterText': 'Kampanya ve yeniliklerden haberdar olun',
      
      // Common
      'common.search': 'Arama',
      'common.filter': 'Filtrele',
      'common.sort': 'Sırala',
      'common.price': 'Fiyat',
      'common.color': 'Renk',
      'common.material': 'Materyal',
      'common.size': 'Boyut',
      'common.brand': 'Marka',
      'common.rating': 'Puan',
      'common.new': 'Yeni',
      'common.sale': 'İndirimde',
      'common.phone': 'Telefon',
      'common.email': 'E-posta',
      'common.address': 'Adres',
      
      // Days
      'days': 'gün',
      'months': 'ay',
      
      // Blog
      'blog.title': 'Blog',
      'blog.decorationGuides': 'Dekorasyon Rehberleri',
      'blog.kitchenGuides': 'Mutfak Rehberleri',
      'blog.readMore': 'Devamını Oku'
    }
  },
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.furniture': 'Furniture',
      'nav.kitchen': 'Kitchen',
      'nav.customMade': 'Custom Made',
      'nav.about': 'About Us',
      'nav.contact': 'Contact',
      'nav.blog': 'Blog',
      'nav.orderTracking': 'Order Tracking',
      
      // Categories
      'category.livingRoom': 'Living Room',
      'category.bedroom': 'Bedroom',
      'category.diningRoom': 'Dining Room',
      'category.youth': 'Youth & Baby',
      'category.office': 'Office',
      'category.outdoor': 'Outdoor',
      'category.bookshelf': 'Bookshelf & Shelf',
      
      // Kitchen Categories
      'kitchen.cookware': 'Cookware',
      'kitchen.accessories': 'Cooking Accessories',
      'kitchen.knives': 'Knives & Cutting Boards',
      'kitchen.tableware': 'Tableware & Serving',
      'kitchen.storage': 'Storage',
      'kitchen.appliances': 'Small Appliances',
      'kitchen.furniture': 'Kitchen Furniture',
      
      // Hero & CTAs
      'hero.title': 'Transform your house into a warm home',
      'hero.subtitle': 'Add warmth to your home, mastery to your kitchen',
      'cta.addToCart': 'Add to Cart',
      'cta.getQuote': 'Get Custom Quote',
      'cta.discover': 'Discover Now',
      'cta.viewAll': 'View All',
      
      // Product
      'product.inStock': 'In Stock',
      'product.outOfStock': 'Out of Stock',
      'product.customMade': 'Custom Made',
      'product.deliveryTime': 'Delivery Time',
      'product.warranty': 'Warranty',
      'product.addToFavorites': 'Add to Favorites',
      'product.compare': 'Compare',
      'product.reviews': 'Reviews',
      'product.askQuestion': 'Ask Question',
      'product.roomCombinations': 'Room Combination Suggestions',
      
      // Cart & Checkout
      'cart.title': 'My Cart',
      'cart.empty': 'Your cart is empty',
      'cart.total': 'Total',
      'cart.shipping': 'Shipping',
      'cart.freeShipping': 'Free Shipping',
      'checkout.title': 'Checkout',
      'checkout.shippingAddress': 'Shipping Address',
      'checkout.paymentMethod': 'Payment Method',
      'checkout.orderSummary': 'Order Summary',
      
      // Trust Badges
      'trust.warranty12': '12 Month Warranty',
      'trust.return30': '30 Day Return',
      'trust.securePayment': 'Secure Payment',
      'trust.freeShipping': 'Free Shipping',
      
      // Footer
      'footer.company': 'Company',
      'footer.customerService': 'Customer Service',
      'footer.policies': 'Policies',
      'footer.followUs': 'Follow Us',
      'footer.newsletter': 'Newsletter',
      'footer.newsletterText': 'Stay updated with campaigns and news',
      
      // Common
      'common.search': 'Search',
      'common.filter': 'Filter',
      'common.sort': 'Sort',
      'common.price': 'Price',
      'common.color': 'Color',
      'common.material': 'Material',
      'common.size': 'Size',
      'common.brand': 'Brand',
      'common.rating': 'Rating',
      'common.new': 'New',
      'common.sale': 'On Sale',
      'common.phone': 'Phone',
      'common.email': 'Email',
      'common.address': 'Address',
      
      // Days
      'days': 'days',
      'months': 'months',
      
      // Blog
      'blog.title': 'Blog',
      'blog.decorationGuides': 'Decoration Guides',
      'blog.kitchenGuides': 'Kitchen Guides',
      'blog.readMore': 'Read More'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;