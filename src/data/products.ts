import { Product } from '../types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    titleTR: 'Modern L Koltuk Takımı',
    titleEN: 'Modern L-Shaped Sofa Set',
    descriptionTR: 'Rahat oturma deneyimi sunan, modern tasarımlı L koltuk takımı. Yüksek kaliteli kumaş ve dayanıklı ahşap iskelet ile üretilmiştir.',
    descriptionEN: 'Modern designed L-shaped sofa set offering comfortable seating experience. Made with high-quality fabric and durable wooden frame.',
    shortDescriptionTR: 'Modern ve rahat L koltuk takımı',
    shortDescriptionEN: 'Modern and comfortable L-shaped sofa',
    sku: 'KLT-001',
    price: 12500,
    discountPrice: 10999,
    currency: 'TRY',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg'
    ],
    category: 'furniture',
    subcategory: 'livingRoom',
    tags: ['modern', 'comfortable', 'bestseller'],
    material: 'Kumaş',
    colors: ['Gri', 'Bej', 'Lacivert'],
    dimensions: { width: 280, height: 85, depth: 160 },
    weight: 85,
    packageDimensions: { width: 300, height: 100, depth: 180 },
    stock: 15,
    isCustomMade: false,
    deliveryTime: 7,
    warranty: 24,
    careInstructionsTR: 'Nemli bez ile temizleyiniz.',
    careInstructionsEN: 'Clean with damp cloth.',
    rating: 4.8,
    reviewCount: 127,
    variants: [
      { id: 'v1', name: 'Renk', type: 'color', value: 'Gri', priceModifier: 0, stock: 5 },
      { id: 'v2', name: 'Renk', type: 'color', value: 'Bej', priceModifier: 0, stock: 6 },
      { id: 'v3', name: 'Renk', type: 'color', value: 'Lacivert', priceModifier: 500, stock: 4 }
    ]
  },
  {
    id: '2',
    titleTR: 'Masif Ahşap Yemek Masası',
    titleEN: 'Solid Wood Dining Table',
    descriptionTR: 'El işçiliği ile üretilen masif meşe ahşabından yapılmış yemek masası. Doğal ahşap dokusunu korur.',
    descriptionEN: 'Handcrafted dining table made from solid oak wood. Preserves natural wood texture.',
    shortDescriptionTR: 'El işçiliği masif ahşap masa',
    shortDescriptionEN: 'Handcrafted solid wood table',
    sku: 'YM-002',
    price: 8500,
    currency: 'TRY',
    images: [
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg'
    ],
    category: 'furniture',
    subcategory: 'diningRoom',
    tags: ['handcrafted', 'solid wood', 'premium'],
    material: 'Masif Ahşap',
    colors: ['Doğal', 'Koyu Ceviz', 'Açık Meşe'],
    dimensions: { width: 200, height: 75, depth: 90 },
    weight: 65,
    packageDimensions: { width: 220, height: 85, depth: 100 },
    stock: 8,
    isCustomMade: true,
    deliveryTime: 21,
    warranty: 36,
    careInstructionsTR: 'Ahşap bakım ürünleri ile temizleyiniz.',
    careInstructionsEN: 'Clean with wood care products.',
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: '3',
    titleTR: 'Premium Tencere Seti',
    titleEN: 'Premium Cookware Set',
    descriptionTR: '7 parça paslanmaz çelik tencere seti. Tüm ocak tiplerine uyumlu, bulaşık makinesi güvenliği.',
    descriptionEN: '7-piece stainless steel cookware set. Compatible with all cooktop types, dishwasher safe.',
    shortDescriptionTR: '7 parça paslanmaz çelik set',
    shortDescriptionEN: '7-piece stainless steel set',
    sku: 'TC-003',
    price: 2850,
    discountPrice: 2399,
    currency: 'TRY',
    images: [
      'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg'
    ],
    category: 'kitchen',
    subcategory: 'cookware',
    tags: ['premium', 'stainless steel', 'dishwasher safe'],
    material: 'Paslanmaz Çelik',
    colors: ['Gümüş'],
    dimensions: { width: 40, height: 25, depth: 40 },
    weight: 8,
    packageDimensions: { width: 45, height: 30, depth: 45 },
    stock: 22,
    isCustomMade: false,
    deliveryTime: 3,
    warranty: 12,
    careInstructionsTR: 'Bulaşık makinesinde yıkayabilirsiniz.',
    careInstructionsEN: 'Dishwasher safe.',
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '4',
    titleTR: 'Özel Ölçü Mutfak Dolabı',
    titleEN: 'Custom Kitchen Cabinet',
    descriptionTR: 'İsteğinize göre tasarlanan ve üretilen mutfak dolabı sistemi. Premium malzeme ve modern tasarım.',
    descriptionEN: 'Custom designed and manufactured kitchen cabinet system. Premium materials and modern design.',
    shortDescriptionTR: 'Özel tasarım mutfak dolabı',
    shortDescriptionEN: 'Custom design kitchen cabinet',
    sku: 'MD-004',
    price: 15000,
    currency: 'TRY',
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg'
    ],
    category: 'kitchen',
    subcategory: 'furniture',
    tags: ['custom made', 'premium', 'modern'],
    material: 'MDF + Laminat',
    colors: ['Beyaz', 'Antrasit', 'Ahşap Desenli'],
    dimensions: { width: 300, height: 220, depth: 60 },
    weight: 150,
    packageDimensions: { width: 320, height: 240, depth: 80 },
    stock: 0,
    isCustomMade: true,
    deliveryTime: 45,
    warranty: 24,
    careInstructionsTR: 'Nemli bez ile siliniz, aşındırıcı maddeler kullanmayınız.',
    careInstructionsEN: 'Wipe with damp cloth, do not use abrasive materials.',
    rating: 4.9,
    reviewCount: 43
  }
];

export const categories = {
  furniture: {
    titleTR: 'Mobilya',
    titleEN: 'Furniture',
    subcategories: {
      livingRoom: { titleTR: 'Oturma Odası', titleEN: 'Living Room' },
      bedroom: { titleTR: 'Yatak Odası', titleEN: 'Bedroom' },
      diningRoom: { titleTR: 'Yemek Odası', titleEN: 'Dining Room' },
      youth: { titleTR: 'Genç & Bebek', titleEN: 'Youth & Baby' },
      office: { titleTR: 'Ofis', titleEN: 'Office' },
      outdoor: { titleTR: 'Dış Mekân', titleEN: 'Outdoor' },
      bookshelf: { titleTR: 'Kitaplık & Raf', titleEN: 'Bookshelf & Shelf' }
    }
  },
  kitchen: {
    titleTR: 'Mutfak',
    titleEN: 'Kitchen',
    subcategories: {
      cookware: { titleTR: 'Tencere & Tava', titleEN: 'Cookware' },
      accessories: { titleTR: 'Pişirme Aksesuarları', titleEN: 'Cooking Accessories' },
      knives: { titleTR: 'Bıçak & Kesme Tahtası', titleEN: 'Knives & Cutting Boards' },
      tableware: { titleTR: 'Sofra & Servis', titleEN: 'Tableware & Serving' },
      storage: { titleTR: 'Saklama', titleEN: 'Storage' },
      appliances: { titleTR: 'Küçük Ev Aletleri', titleEN: 'Small Appliances' },
      furniture: { titleTR: 'Mutfak Mobilyası', titleEN: 'Kitchen Furniture' }
    }
  }
};