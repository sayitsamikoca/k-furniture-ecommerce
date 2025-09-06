export interface Product {
  id: string;
  titleTR: string;
  titleEN: string;
  descriptionTR: string;
  descriptionEN: string;
  shortDescriptionTR: string;
  shortDescriptionEN: string;
  sku: string;
  price: number;
  discountPrice?: number;
  currency: string;
  images: string[];
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
}

export interface ProductVariant {
  id: string;
  name: string;
  type: 'color' | 'material' | 'size';
  value: string;
  priceModifier: number;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants: ProductVariant[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  title: string;
  fullName: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  phone: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  shippingAddress: Address;
  billingAddress: Address;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  trackingNumber?: string;
}