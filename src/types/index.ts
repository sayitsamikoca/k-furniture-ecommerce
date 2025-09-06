export interface Product {
  id: string;
  titleTR: string;
  titleEN: string;
  slugTR: string;
  slugEN: string;
  descriptionTR: string;
  descriptionEN: string;
  shortDescriptionTR: string;
  shortDescriptionEN: string;
  sku: string;
  price: number;
  discountPrice?: number;
  currency: string;
  images: ProductImage[];
  category: string;
  subcategory?: string;
  tags: string[];
  material: string;
  colors: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number;
  packageDimensions: {
    width: number;
    height: number;
    depth: number;
  };
  stock: number;
  isCustomMade: boolean;
  deliveryTime: number; // days
  warranty: number; // months
  careInstructionsTR: string;
  careInstructionsEN: string;
  variants?: ProductVariant[];
  rating: number;
  reviewCount: number;
  isActive: boolean;
  isFeatured: boolean;
  isNew: boolean;
  metaTitleTR?: string;
  metaTitleEN?: string;
  metaDescriptionTR?: string;
  metaDescriptionEN?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductImage {
  id: string;
  url: string;
  altTR: string;
  altEN: string;
  order: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  type: 'color' | 'material' | 'size' | 'fabric';
  value: string;
  priceModifier: number;
  stock: number;
  sku?: string;
}

export interface Category {
  id: string;
  nameTR: string;
  nameEN: string;
  slugTR: string;
  slugEN: string;
  descriptionTR?: string;
  descriptionEN?: string;
  parentId?: string;
  image?: string;
  order: number;
  isActive: boolean;
  metaTitleTR?: string;
  metaTitleEN?: string;
  metaDescriptionTR?: string;
  metaDescriptionEN?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants: ProductVariant[];
  customOptions?: CustomOptions;
}

export interface CustomOptions {
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  fabric?: string;
  color?: string;
  notes?: string;
  roomPhoto?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'admin' | 'editor' | 'customer_service' | 'customer';
  isActive: boolean;
  emailVerified: boolean;
  addresses: Address[];
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  language: 'tr' | 'en';
  currency: 'TRY' | 'USD' | 'EUR';
  newsletter: boolean;
  smsNotifications: boolean;
}

export interface Address {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
  type: 'billing' | 'shipping' | 'both';
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  subtotal: number;
  shippingCost: number;
  taxAmount: number;
  discountAmount: number;
  total: number;
  currency: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod: 'credit_card' | 'bank_transfer' | 'cash_on_delivery';
  trackingNumber?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  selectedVariants: ProductVariant[];
  customOptions?: CustomOptions;
}

export interface Coupon {
  id: string;
  code: string;
  nameTR: string;
  nameEN: string;
  type: 'percentage' | 'fixed_amount' | 'free_shipping';
  value: number;
  minimumAmount?: number;
  maximumDiscount?: number;
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
  validFrom: Date;
  validUntil: Date;
  applicableCategories?: string[];
  applicableProducts?: string[];
}

export interface BlogPost {
  id: string;
  titleTR: string;
  titleEN: string;
  slugTR: string;
  slugEN: string;
  excerptTR: string;
  excerptEN: string;
  contentTR: string;
  contentEN: string;
  featuredImage?: string;
  category: 'decoration' | 'kitchen' | 'tips' | 'news';
  tags: string[];
  isPublished: boolean;
  publishedAt?: Date;
  metaTitleTR?: string;
  metaTitleEN?: string;
  metaDescriptionTR?: string;
  metaDescriptionEN?: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  titleTR?: string;
  titleEN?: string;
  commentTR?: string;
  commentEN?: string;
  isVerified: boolean;
  isApproved: boolean;
  helpfulCount: number;
  images?: string[];
  createdAt: Date;
}

export interface CustomQuote {
  id: string;
  userId?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  productType: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  material?: string;
  color?: string;
  fabric?: string;
  roomPhoto?: string;
  notes?: string;
  estimatedPrice?: number;
  status: 'pending' | 'quoted' | 'approved' | 'rejected' | 'completed';
  adminNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SiteSettings {
  id: string;
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  paymentMethods: {
    stripe: boolean;
    paytr: boolean;
    iyzico: boolean;
    cashOnDelivery: boolean;
  };
  shippingSettings: {
    freeShippingThreshold: number;
    standardShippingCost: number;
    expressShippingCost: number;
  };
  currencies: string[];
  defaultCurrency: string;
  languages: string[];
  defaultLanguage: string;
  maintenanceMode: boolean;
  analyticsCode?: string;
  pixelCode?: string;
}

export interface AppState {
  cart: CartItem[];
  user: User | null;
  favorites: string[];
  comparison: string[];
  language: 'tr' | 'en';
  currency: 'TRY' | 'USD' | 'EUR';
  isLoading: boolean;
  error: string | null;
}

export type AppAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; variants?: ProductVariant[]; customOptions?: CustomOptions } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_FAVORITES'; payload: string }
  | { type: 'REMOVE_FROM_FAVORITES'; payload: string }
  | { type: 'ADD_TO_COMPARISON'; payload: string }
  | { type: 'REMOVE_FROM_COMPARISON'; payload: string }
  | { type: 'SET_LANGUAGE'; payload: 'tr' | 'en' }
  | { type: 'SET_CURRENCY'; payload: 'TRY' | 'USD' | 'EUR' }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };