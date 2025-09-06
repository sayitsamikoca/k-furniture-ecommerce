import { Product, Category } from '../types';

export const categories: Category[] = [
  // Furniture Categories
  {
    id: 'furniture',
    nameTR: 'Mobilya',
    nameEN: 'Furniture',
    slugTR: 'mobilya',
    slugEN: 'furniture',
    descriptionTR: 'Kaliteli ve şık mobilyalar ile evinizi güzelleştirin',
    descriptionEN: 'Beautify your home with quality and stylish furniture',
    order: 1,
    isActive: true,
    metaTitleTR: 'Mobilya - K Mobilya',
    metaTitleEN: 'Furniture - K Mobilya',
    metaDescriptionTR: 'Oturma odası, yatak odası, yemek odası mobilyaları. Kaliteli ve şık mobilyalar için K Mobilya.',
    metaDescriptionEN: 'Living room, bedroom, dining room furniture. Quality and stylish furniture at K Mobilya.'
  },
  {
    id: 'living-room',
    nameTR: 'Oturma Odası',
    nameEN: 'Living Room',
    slugTR: 'oturma-odasi',
    slugEN: 'living-room',
    parentId: 'furniture',
    order: 1,
    isActive: true
  },
  {
    id: 'bedroom',
    nameTR: 'Yatak Odası',
    nameEN: 'Bedroom',
    slugTR: 'yatak-odasi',
    slugEN: 'bedroom',
    parentId: 'furniture',
    order: 2,
    isActive: true
  },
  {
    id: 'dining-room',
    nameTR: 'Yemek Odası',
    nameEN: 'Dining Room',
    slugTR: 'yemek-odasi',
    slugEN: 'dining-room',
    parentId: 'furniture',
    order: 3,
    isActive: true
  },
  {
    id: 'youth',
    nameTR: 'Genç & Bebek',
    nameEN: 'Youth & Baby',
    slugTR: 'genc-bebek',
    slugEN: 'youth-baby',
    parentId: 'furniture',
    order: 4,
    isActive: true
  },
  {
    id: 'office',
    nameTR: 'Ofis',
    nameEN: 'Office',
    slugTR: 'ofis',
    slugEN: 'office',
    parentId: 'furniture',
    order: 5,
    isActive: true
  },
  {
    id: 'outdoor',
    nameTR: 'Dış Mekan',
    nameEN: 'Outdoor',
    slugTR: 'dis-mekan',
    slugEN: 'outdoor',
    parentId: 'furniture',
    order: 6,
    isActive: true
  },
  {
    id: 'bookshelf',
    nameTR: 'Kitaplık & Raf',
    nameEN: 'Bookshelf & Shelf',
    slugTR: 'kitaplik-raf',
    slugEN: 'bookshelf-shelf',
    parentId: 'furniture',
    order: 7,
    isActive: true
  },
  
  // Kitchen Categories
  {
    id: 'kitchen',
    nameTR: 'Mutfak',
    nameEN: 'Kitchen',
    slugTR: 'mutfak',
    slugEN: 'kitchen',
    descriptionTR: 'Mutfağınız için ihtiyacınız olan her şey',
    descriptionEN: 'Everything you need for your kitchen',
    order: 2,
    isActive: true,
    metaTitleTR: 'Mutfak Ürünleri - K Mobilya',
    metaTitleEN: 'Kitchen Products - K Mobilya',
    metaDescriptionTR: 'Tencere, tava, bıçak, tabak ve mutfak mobilyaları. Mutfağınız için ihtiyacınız olan her şey K Mobilya\'da.',
    metaDescriptionEN: 'Pots, pans, knives, plates and kitchen furniture. Everything you need for your kitchen at K Mobilya.'
  },
  {
    id: 'cookware',
    nameTR: 'Tencere & Tava',
    nameEN: 'Cookware',
    slugTR: 'tencere-tava',
    slugEN: 'cookware',
    parentId: 'kitchen',
    order: 1,
    isActive: true
  },
  {
    id: 'cooking-accessories',
    nameTR: 'Pişirme & Fırın Aksesuarları',
    nameEN: 'Cooking & Baking Accessories',
    slugTR: 'pisirme-firin-aksesuarlari',
    slugEN: 'cooking-baking-accessories',
    parentId: 'kitchen',
    order: 2,
    isActive: true
  },
  {
    id: 'knives',
    nameTR: 'Bıçak & Kesme Tahtası',
    nameEN: 'Knives & Cutting Boards',
    slugTR: 'bicak-kesme-tahtasi',
    slugEN: 'knives-cutting-boards',
    parentId: 'kitchen',
    order: 3,
    isActive: true
  },
  {
    id: 'tableware',
    nameTR: 'Sofra & Servis',
    nameEN: 'Tableware & Serving',
    slugTR: 'sofra-servis',
    slugEN: 'tableware-serving',
    parentId: 'kitchen',
    order: 4,
    isActive: true
  },
  {
    id: 'storage',
    nameTR: 'Saklama',
    nameEN: 'Storage',
    slugTR: 'saklama',
    slugEN: 'storage',
    parentId: 'kitchen',
    order: 5,
    isActive: true
  },
  {
    id: 'appliances',
    nameTR: 'Küçük Ev Aletleri',
    nameEN: 'Small Appliances',
    slugTR: 'kucuk-ev-aletleri',
    slugEN: 'small-appliances',
    parentId: 'kitchen',
    order: 6,
    isActive: true
  },
  {
    id: 'kitchen-furniture',
    nameTR: 'Mutfak Mobilyası',
    nameEN: 'Kitchen Furniture',
    slugTR: 'mutfak-mobilyasi',
    slugEN: 'kitchen-furniture',
    parentId: 'kitchen',
    order: 7,
    isActive: true
  }
];

export const sampleProducts: Product[] = [
  {
    id: 'luna-3-seater-sofa',
    titleTR: 'Luna 3\'lü Kanepe',
    titleEN: 'Luna 3-Seater Sofa',
    slugTR: 'luna-3lu-kanepe',
    slugEN: 'luna-3-seater-sofa',
    descriptionTR: 'Modern tasarımı ve konforlu oturma deneyimi ile Luna 3\'lü kanepe, oturma odanızın vazgeçilmez parçası olacak. Yüksek kaliteli kumaş seçenekleri ve dayanıklı ahşap iskelet yapısı ile uzun yıllar kullanım garantisi sunar. Ergonomik tasarımı sayesinde hem estetik hem de fonksiyonel bir çözüm sunar.',
    descriptionEN: 'With its modern design and comfortable seating experience, the Luna 3-seater sofa will become an indispensable part of your living room. It offers years of use guarantee with high-quality fabric options and durable wooden frame structure. Thanks to its ergonomic design, it offers both aesthetic and functional solution.',
    shortDescriptionTR: 'Modern ve konforlu 3\'lü kanepe',
    shortDescriptionEN: 'Modern and comfortable 3-seater sofa',
    sku: 'LUN-3S-001',
    price: 15999,
    discountPrice: 13999,
    currency: 'TRY',
    images: [
      {
        id: 'img1',
        url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
        altTR: 'Luna 3\'lü Kanepe - Ana Görsel',
        altEN: 'Luna 3-Seater Sofa - Main Image',
        order: 1
      },
      {
        id: 'img2',
        url: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg',
        altTR: 'Luna 3\'lü Kanepe - Yan Görünüm',
        altEN: 'Luna 3-Seater Sofa - Side View',
        order: 2
      }
    ],
    category: 'living-room',
    subcategory: 'sofa',
    tags: ['modern', 'comfortable', 'bestseller', 'new'],
    material: 'Kumaş + Ahşap İskelet',
    colors: ['Gri', 'Bej', 'Lacivert', 'Kahverengi'],
    dimensions: { width: 210, height: 85, depth: 95 },
    weight: 65,
    packageDimensions: { width: 220, height: 95, depth: 105 },
    stock: 12,
    isCustomMade: false,
    deliveryTime: 7,
    warranty: 24,
    careInstructionsTR: 'Nemli bez ile temizleyiniz. Aşındırıcı maddeler kullanmayınız. Doğrudan güneş ışığından koruyunuz.',
    careInstructionsEN: 'Clean with damp cloth. Do not use abrasive materials. Protect from direct sunlight.',
    rating: 4.8,
    reviewCount: 127,
    isActive: true,
    isFeatured: true,
    isNew: true,
    metaTitleTR: 'Luna 3\'lü Kanepe - Modern Oturma Odası Mobilyası',
    metaTitleEN: 'Luna 3-Seater Sofa - Modern Living Room Furniture',
    metaDescriptionTR: 'Luna 3\'lü kanepe ile oturma odanızı modern ve konforlu hale getirin. Kaliteli kumaş seçenekleri ve ergonomik tasarım.',
    metaDescriptionEN: 'Make your living room modern and comfortable with Luna 3-seater sofa. Quality fabric options and ergonomic design.',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-12-01'),
    variants: [
      {
        id: 'luna-grey',
        name: 'Renk',
        type: 'color',
        value: 'Gri',
        priceModifier: 0,
        stock: 4,
        sku: 'LUN-3S-001-GRY'
      },
      {
        id: 'luna-beige',
        name: 'Renk',
        type: 'color',
        value: 'Bej',
        priceModifier: 0,
        stock: 3,
        sku: 'LUN-3S-001-BEG'
      },
      {
        id: 'luna-navy',
        name: 'Renk',
        type: 'color',
        value: 'Lacivert',
        priceModifier: 500,
        stock: 3,
        sku: 'LUN-3S-001-NVY'
      },
      {
        id: 'luna-brown',
        name: 'Renk',
        type: 'color',
        value: 'Kahverengi',
        priceModifier: 300,
        stock: 2,
        sku: 'LUN-3S-001-BRN'
      }
    ]
  },
  {
    id: 'atlas-dining-table',
    titleTR: 'Atlas Masif Ahşap Yemek Masası',
    titleEN: 'Atlas Solid Wood Dining Table',
    slugTR: 'atlas-masif-ahsap-yemek-masasi',
    slugEN: 'atlas-solid-wood-dining-table',
    descriptionTR: 'El işçiliği ile üretilen Atlas masif ahşap yemek masası, doğal ahşabın sıcaklığını evinize taşır. %100 masif meşe ahşabından üretilen masa, doğal ahşap dokusunu koruyarak yıllar boyunca güzelliğini sürdürür. Farklı boyut seçenekleri ile her aile büyüklüğüne uygun çözümler sunar.',
    descriptionEN: 'Handcrafted Atlas solid wood dining table brings the warmth of natural wood to your home. Made from 100% solid oak wood, the table maintains its beauty for years while preserving the natural wood texture. It offers solutions suitable for every family size with different size options.',
    shortDescriptionTR: 'El işçiliği masif meşe yemek masası',
    shortDescriptionEN: 'Handcrafted solid oak dining table',
    sku: 'ATL-DT-001',
    price: 12500,
    currency: 'TRY',
    images: [
      {
        id: 'img1',
        url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
        altTR: 'Atlas Masif Ahşap Yemek Masası',
        altEN: 'Atlas Solid Wood Dining Table',
        order: 1
      },
      {
        id: 'img2',
        url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
        altTR: 'Atlas Yemek Masası Detay',
        altEN: 'Atlas Dining Table Detail',
        order: 2
      }
    ],
    category: 'dining-room',
    subcategory: 'diningTable',
    tags: ['handcrafted', 'solid wood', 'premium', 'natural'],
    material: 'Masif Meşe Ahşap',
    colors: ['Doğal', 'Koyu Ceviz', 'Açık Meşe'],
    dimensions: { width: 180, height: 75, depth: 90 },
    weight: 85,
    packageDimensions: { width: 190, height: 85, depth: 100 },
    stock: 6,
    isCustomMade: true,
    deliveryTime: 21,
    warranty: 36,
    careInstructionsTR: 'Ahşap bakım ürünleri ile düzenli olarak bakım yapınız. Su ve sıcaktan koruyunuz.',
    careInstructionsEN: 'Regular maintenance with wood care products. Protect from water and heat.',
    rating: 4.9,
    reviewCount: 89,
    isActive: true,
    isFeatured: true,
    isNew: false,
    metaTitleTR: 'Atlas Masif Ahşap Yemek Masası - El İşçiliği',
    metaTitleEN: 'Atlas Solid Wood Dining Table - Handcrafted',
    metaDescriptionTR: 'El işçiliği ile üretilen masif meşe yemek masası. Doğal ahşap dokusu ve kaliteli işçilik.',
    metaDescriptionEN: 'Handcrafted solid oak dining table. Natural wood texture and quality craftsmanship.',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-11-28'),
    variants: [
      {
        id: 'atlas-160',
        name: 'Boyut',
        type: 'size',
        value: '160cm',
        priceModifier: -1500,
        stock: 2,
        sku: 'ATL-DT-160'
      },
      {
        id: 'atlas-180',
        name: 'Boyut',
        type: 'size',
        value: '180cm',
        priceModifier: 0,
        stock: 2,
        sku: 'ATL-DT-180'
      },
      {
        id: 'atlas-200',
        name: 'Boyut',
        type: 'size',
        value: '200cm',
        priceModifier: 2000,
        stock: 2,
        sku: 'ATL-DT-200'
      }
    ]
  },
  {
    id: 'nordic-tv-unit',
    titleTR: 'Nordic TV Ünitesi',
    titleEN: 'Nordic TV Unit',
    slugTR: 'nordic-tv-unitesi',
    slugEN: 'nordic-tv-unit',
    descriptionTR: 'Skandinav tarzı Nordic TV ünitesi, minimalist tasarımı ile modern yaşam alanlarının vazgeçilmezi. Gizli kablo kanalları sayesinde düzenli bir görünüm sunar. Farklı boyutlardaki televizyonlar için uygun tasarım. Mat ve yarı mat yüzey seçenekleri ile kişisel zevkinize uygun seçim yapabilirsiniz.',
    descriptionEN: 'Scandinavian style Nordic TV unit is indispensable for modern living spaces with its minimalist design. It offers a neat appearance thanks to hidden cable channels. Suitable design for televisions of different sizes. You can make a choice according to your personal taste with matte and semi-matte surface options.',
    shortDescriptionTR: 'Minimalist tasarım TV ünitesi',
    shortDescriptionEN: 'Minimalist design TV unit',
    sku: 'NOR-TV-001',
    price: 4999,
    discountPrice: 4299,
    currency: 'TRY',
    images: [
      {
        id: 'img1',
        url: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
        altTR: 'Nordic TV Ünitesi',
        altEN: 'Nordic TV Unit',
        order: 1
      }
    ],
    category: 'living-room',
    subcategory: 'tvUnit',
    tags: ['scandinavian', 'minimalist', 'modern', 'cable management'],
    material: 'MDF + Laminat',
    colors: ['Beyaz', 'Antrasit', 'Ahşap Desenli'],
    dimensions: { width: 160, height: 45, depth: 40 },
    weight: 35,
    packageDimensions: { width: 170, height: 55, depth: 50 },
    stock: 18,
    isCustomMade: false,
    deliveryTime: 5,
    warranty: 24,
    careInstructionsTR: 'Nemli bez ile siliniz. Aşındırıcı maddeler kullanmayınız.',
    careInstructionsEN: 'Wipe with damp cloth. Do not use abrasive materials.',
    rating: 4.6,
    reviewCount: 203,
    isActive: true,
    isFeatured: false,
    isNew: false,
    metaTitleTR: 'Nordic TV Ünitesi - Minimalist Tasarım',
    metaTitleEN: 'Nordic TV Unit - Minimalist Design',
    metaDescriptionTR: 'Skandinav tarzı Nordic TV ünitesi. Kablo kanalı ve minimalist tasarım ile modern yaşam alanları için ideal.',
    metaDescriptionEN: 'Scandinavian style Nordic TV unit. Ideal for modern living spaces with cable channel and minimalist design.',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-11-25'),
    variants: [
      {
        id: 'nordic-white',
        name: 'Renk',
        type: 'color',
        value: 'Beyaz',
        priceModifier: 0,
        stock: 8,
        sku: 'NOR-TV-001-WHT'
      },
      {
        id: 'nordic-anthracite',
        name: 'Renk',
        type: 'color',
        value: 'Antrasit',
        priceModifier: 0,
        stock: 6,
        sku: 'NOR-TV-001-ANT'
      },
      {
        id: 'nordic-wood',
        name: 'Renk',
        type: 'color',
        value: 'Ahşap Desenli',
        priceModifier: 200,
        stock: 4,
        sku: 'NOR-TV-001-WOD'
      }
    ]
  },
  {
    id: 'nova-wardrobe-4d',
    titleTR: 'Nova 4 Kapılı Gardırop',
    titleEN: 'Nova Wardrobe 4D',
    slugTR: 'nova-4-kapili-gardirop',
    slugEN: 'nova-wardrobe-4d',
    descriptionTR: 'Nova 4 kapılı gardırop, geniş depolama alanı ve fonksiyonel iç düzeni ile yatak odanızın düzenini sağlar. Modüler iç düzen sistemi sayesinde kişisel ihtiyaçlarınıza göre özelleştirilebilir. Ayna seçeneği ile hem fonksiyonel hem de estetik bir çözüm sunar. Yüksek kaliteli malzeme ve işçilik garantisi.',
    descriptionEN: 'Nova 4-door wardrobe provides organization in your bedroom with its large storage space and functional interior layout. It can be customized according to your personal needs thanks to the modular interior system. It offers both functional and aesthetic solution with mirror option. High quality material and workmanship guarantee.',
    shortDescriptionTR: '4 kapılı modüler gardırop',
    shortDescriptionEN: '4-door modular wardrobe',
    sku: 'NOV-WR-4D',
    price: 8999,
    currency: 'TRY',
    images: [
      {
        id: 'img1',
        url: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
        altTR: 'Nova 4 Kapılı Gardırop',
        altEN: 'Nova Wardrobe 4D',
        order: 1
      }
    ],
    category: 'bedroom',
    subcategory: 'wardrobe',
    tags: ['modular', 'spacious', 'functional', 'mirror option'],
    material: 'MDF + Laminat',
    colors: ['Beyaz', 'Antrasit', 'Ceviz'],
    dimensions: { width: 200, height: 220, depth: 60 },
    weight: 120,
    packageDimensions: { width: 210, height: 230, depth: 70 },
    stock: 8,
    isCustomMade: false,
    deliveryTime: 10,
    warranty: 24,
    careInstructionsTR: 'Nemli bez ile temizleyiniz. Kapıları zorlamayınız.',
    careInstructionsEN: 'Clean with damp cloth. Do not force the doors.',
    rating: 4.7,
    reviewCount: 156,
    isActive: true,
    isFeatured: false,
    isNew: false,
    metaTitleTR: 'Nova 4 Kapılı Gardırop - Modüler İç Düzen',
    metaTitleEN: 'Nova Wardrobe 4D - Modular Interior',
    metaDescriptionTR: 'Nova 4 kapılı gardırop ile yatak odanızı düzenleyin. Modüler iç düzen ve ayna seçeneği.',
    metaDescriptionEN: 'Organize your bedroom with Nova 4-door wardrobe. Modular interior and mirror option.',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-11-20'),
    variants: [
      {
        id: 'nova-no-mirror',
        name: 'Ayna',
        type: 'material',
        value: 'Aynasız',
        priceModifier: 0,
        stock: 5,
        sku: 'NOV-WR-4D-NM'
      },
      {
        id: 'nova-with-mirror',
        name: 'Ayna',
        type: 'material',
        value: 'Aynalı',
        priceModifier: 800,
        stock: 3,
        sku: 'NOV-WR-4D-WM'
      }
    ]
  },
  {
    id: 'chefpro-cookware-set',
    titleTR: 'ChefPro 8 Parça Tencere Seti',
    titleEN: 'ChefPro Cookware Set 8-pc',
    slugTR: 'chefpro-8-parca-tencere-seti',
    slugEN: 'chefpro-cookware-set-8pc',
    descriptionTR: 'ChefPro 8 parça tencere seti, profesyonel mutfakların vazgeçilmezi. Paslanmaz çelik yapısı ile uzun ömürlü kullanım garantisi sunar. İndüksiyon dahil tüm ocak tiplerine uyumlu. Bulaşık makinesi güvenli. Ergonomik sapları ile güvenli kullanım. 2 yıl üretici garantisi ile gönül rahatlığı.',
    descriptionEN: 'ChefPro 8-piece cookware set is indispensable for professional kitchens. It offers long-lasting use guarantee with its stainless steel structure. Compatible with all cooktop types including induction. Dishwasher safe. Safe use with ergonomic handles. Peace of mind with 2-year manufacturer warranty.',
    shortDescriptionTR: '8 parça paslanmaz çelik tencere seti',
    shortDescriptionEN: '8-piece stainless steel cookware set',
    sku: 'CHF-CW-8PC',
    price: 3499,
    discountPrice: 2999,
    currency: 'TRY',
    images: [
      {
        id: 'img1',
        url: 'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg',
        altTR: 'ChefPro 8 Parça Tencere Seti',
        altEN: 'ChefPro Cookware Set 8-pc',
        order: 1
      },
      {
        id: 'img2',
        url: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
        altTR: 'ChefPro Tencere Seti Detay',
        altEN: 'ChefPro Cookware Set Detail',
        order: 2
      }
    ],
    category: 'cookware',
    tags: ['professional', 'stainless steel', 'induction compatible', 'dishwasher safe'],
    material: 'Paslanmaz Çelik',
    colors: ['Gümüş'],
    dimensions: { width: 45, height: 30, depth: 45 },
    weight: 12,
    packageDimensions: { width: 50, height: 35, depth: 50 },
    stock: 25,
    isCustomMade: false,
    deliveryTime: 3,
    warranty: 24,
    careInstructionsTR: 'Bulaşık makinesinde yıkayabilirsiniz. İlk kullanımdan önce yıkayınız.',
    careInstructionsEN: 'Dishwasher safe. Wash before first use.',
    rating: 4.8,
    reviewCount: 342,
    isActive: true,
    isFeatured: true,
    isNew: false,
    metaTitleTR: 'ChefPro 8 Parça Tencere Seti - Profesyonel Kalite',
    metaTitleEN: 'ChefPro Cookware Set 8-pc - Professional Quality',
    metaDescriptionTR: 'ChefPro 8 parça paslanmaz çelik tencere seti. İndüksiyon uyumlu, bulaşık makinesi güvenli.',
    metaDescriptionEN: 'ChefPro 8-piece stainless steel cookware set. Induction compatible, dishwasher safe.',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-11-30')
  },
  {
    id: 'edge-knife-set',
    titleTR: 'Edge 6\'lı Bıçak Seti + Bambu Kesme Tahtası',
    titleEN: 'Edge Knife Set + Bamboo Board',
    slugTR: 'edge-6li-bicak-seti-bambu-kesme-tahtasi',
    slugEN: 'edge-knife-set-bamboo-board',
    descriptionTR: 'Edge 6\'lı bıçak seti, mutfağınızın vazgeçilmez yardımcısı. Yüksek kaliteli paslanmaz çelik bıçaklar ve doğal bambu kesme tahtası ile komple bir çözüm sunar. Ergonomik sapları ile güvenli kullanım. Bambu kesme tahtası antibakteriyel özelliği ile hijyenik kullanım sağlar. Bıçak bloku ile düzenli saklama.',
    descriptionEN: 'Edge 6-piece knife set is the indispensable helper of your kitchen. It offers a complete solution with high-quality stainless steel knives and natural bamboo cutting board. Safe use with ergonomic handles. Bamboo cutting board provides hygienic use with its antibacterial properties. Organized storage with knife block.',
    shortDescriptionTR: '6\'lı bıçak seti + bambu kesme tahtası',
    shortDescriptionEN: '6-piece knife set + bamboo cutting board',
    sku: 'EDG-KS-6PC',
    price: 1299,
    discountPrice: 999,
    currency: 'TRY',
    images: [
      {
        id: 'img1',
        url: 'https://images.pexels.com/photos/4226879/pexels-photo-4226879.jpeg',
        altTR: 'Edge 6\'lı Bıçak Seti',
        altEN: 'Edge Knife Set',
        order: 1
      }
    ],
    category: 'knives',
    tags: ['sharp', 'ergonomic', 'bamboo', 'antibacterial'],
    material: 'Paslanmaz Çelik + Bambu',
    colors: ['Doğal'],
    dimensions: { width: 35, height: 25, depth: 20 },
    weight: 3,
    packageDimensions: { width: 40, height: 30, depth: 25 },
    stock: 32,
    isCustomMade: false,
    deliveryTime: 2,
    warranty: 12,
    careInstructionsTR: 'El ile yıkayınız. Bambu tahtayı düzenli olarak yağlayınız.',
    careInstructionsEN: 'Hand wash only. Oil the bamboo board regularly.',
    rating: 4.6,
    reviewCount: 198,
    isActive: true,
    isFeatured: false,
    isNew: true,
    metaTitleTR: 'Edge 6\'lı Bıçak Seti + Bambu Kesme Tahtası',
    metaTitleEN: 'Edge Knife Set + Bamboo Cutting Board',
    metaDescriptionTR: 'Edge 6\'lı bıçak seti ve bambu kesme tahtası. Ergonomik tasarım ve antibakteriyel özellik.',
    metaDescriptionEN: 'Edge 6-piece knife set and bamboo cutting board. Ergonomic design and antibacterial properties.',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-11-28')
  },
  {
    id: 'opal-tableware-24pcs',
    titleTR: 'Opal 24 Parça Yemek Takımı',
    titleEN: 'Opal Tableware 24-pcs',
    slugTR: 'opal-24-parca-yemek-takimi',
    slugEN: 'opal-tableware-24pcs',
    descriptionTR: 'Opal 24 parça yemek takımı, şık tasarımı ile sofranızın yıldızı olacak. Yüksek kaliteli porselen yapısı ile dayanıklı ve uzun ömürlü kullanım sunar. Bulaşık makinesi ve mikrodalga güvenli. 6 kişilik komple yemek takımı. Zarif desenli ve sade seçenekleri ile her zevke uygun.',
    descriptionEN: 'Opal 24-piece tableware set will be the star of your table with its elegant design. It offers durable and long-lasting use with its high-quality porcelain structure. Dishwasher and microwave safe. Complete tableware set for 6 people. Suitable for every taste with elegant patterned and plain options.',
    shortDescriptionTR: '24 parça porselen yemek takımı',
    shortDescriptionEN: '24-piece porcelain tableware set',
    sku: 'OPL-TW-24PC',
    price: 899,
    discountPrice: 699,
    currency: 'TRY',
    images: [
      {
        id: 'img1',
        url: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg',
        altTR: 'Opal 24 Parça Yemek Takımı',
        altEN: 'Opal Tableware 24-pcs',
        order: 1
      }
    ],
    category: 'tableware',
    tags: ['porcelain', 'elegant', 'dishwasher safe', 'microwave safe'],
    material: 'Porselen',
    colors: ['Beyaz', 'Desenli'],
    dimensions: { width: 30, height: 25, depth: 30 },
    weight: 8,
    packageDimensions: { width: 35, height: 30, depth: 35 },
    stock: 15,
    isCustomMade: false,
    deliveryTime: 3,
    warranty: 12,
    careInstructionsTR: 'Bulaşık makinesinde yıkayabilirsiniz. Ani sıcaklık değişimlerinden kaçınınız.',
    careInstructionsEN: 'Dishwasher safe. Avoid sudden temperature changes.',
    rating: 4.5,
    reviewCount: 267,
    isActive: true,
    isFeatured: false,
    isNew: false,
    metaTitleTR: 'Opal 24 Parça Yemek Takımı - Şık Porselen',
    metaTitleEN: 'Opal Tableware 24-pcs - Elegant Porcelain',
    metaDescriptionTR: 'Opal 24 parça porselen yemek takımı. Bulaşık makinesi güvenli, şık tasarım.',
    metaDescriptionEN: 'Opal 24-piece porcelain tableware set. Dishwasher safe, elegant design.',
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-11-22')
  },
  {
    id: 'custom-kitchen-cabinet',
    titleTR: 'Özel Ölçü Mutfak Dolabı',
    titleEN: 'Custom Kitchen Cabinet Line',
    slugTR: 'ozel-olcu-mutfak-dolabi',
    slugEN: 'custom-kitchen-cabinet-line',
    descriptionTR: 'Size özel tasarlanan mutfak dolabı sistemi ile hayalinizdeki mutfağa kavuşun. İsteğinize göre ölçü, renk, materyal ve iç düzen seçenekleri. Profesyonel tasarım ekibimiz ile ücretsiz keşif ve 3D görselleştirme hizmeti. Yüksek kaliteli malzeme ve işçilik garantisi. Montaj dahil teslim.',
    descriptionEN: 'Achieve the kitchen of your dreams with a custom-designed kitchen cabinet system. Size, color, material and interior layout options according to your request. Free discovery and 3D visualization service with our professional design team. High quality material and workmanship guarantee. Delivery including installation.',
    shortDescriptionTR: 'Size özel mutfak dolabı sistemi',
    shortDescriptionEN: 'Custom kitchen cabinet system',
    sku: 'CUS-KC-001',
    price: 25000,
    currency: 'TRY',
    images: [
      {
        id: 'img1',
        url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
        altTR: 'Özel Ölçü Mutfak Dolabı',
        altEN: 'Custom Kitchen Cabinet',
        order: 1
      },
      {
        id: 'img2',
        url: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
        altTR: 'Mutfak Dolabı Detay',
        altEN: 'Kitchen Cabinet Detail',
        order: 2
      }
    ],
    category: 'kitchen-furniture',
    tags: ['custom made', 'premium', 'modern', '3d visualization'],
    material: 'MDF + Laminat / Masif Ahşap',
    colors: ['Beyaz', 'Antrasit', 'Ahşap Desenli', 'Özel Renk'],
    dimensions: { width: 300, height: 220, depth: 60 },
    weight: 200,
    packageDimensions: { width: 320, height: 240, depth: 80 },
    stock: 0,
    isCustomMade: true,
    deliveryTime: 45,
    warranty: 36,
    careInstructionsTR: 'Nemli bez ile siliniz. Aşındırıcı maddeler kullanmayınız. Düzenli bakım yapınız.',
    careInstructionsEN: 'Wipe with damp cloth. Do not use abrasive materials. Regular maintenance.',
    rating: 4.9,
    reviewCount: 78,
    isActive: true,
    isFeatured: true,
    isNew: false,
    metaTitleTR: 'Özel Ölçü Mutfak Dolabı - Size Özel Tasarım',
    metaTitleEN: 'Custom Kitchen Cabinet - Personalized Design',
    metaDescriptionTR: 'Size özel tasarlanan mutfak dolabı sistemi. Ücretsiz keşif ve 3D görselleştirme hizmeti.',
    metaDescriptionEN: 'Custom designed kitchen cabinet system. Free discovery and 3D visualization service.',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-12-01')
  }
];

export const blogPosts = [
  {
    id: 'modern-oturma-odasi-dekorasyonu',
    titleTR: 'Modern Oturma Odası Dekorasyonu İpuçları',
    titleEN: 'Modern Living Room Decoration Tips',
    slugTR: 'modern-oturma-odasi-dekorasyonu',
    slugEN: 'modern-living-room-decoration',
    excerptTR: 'Modern ve şık bir oturma odası için dikkat etmeniz gereken önemli noktalar ve dekorasyon önerileri.',
    excerptEN: 'Important points and decoration suggestions you should pay attention to for a modern and stylish living room.',
    contentTR: `Modern oturma odası dekorasyonu, minimalist çizgiler ve fonksiyonel tasarımların ön planda olduğu bir yaklaşımdır. Bu yazımızda, modern bir oturma odası yaratmak için dikkat etmeniz gereken önemli noktaları ele alacağız.

## Renk Paleti Seçimi

Modern oturma odalarında genellikle nötr renkler tercih edilir. Beyaz, gri, bej ve siyah gibi temel renkler, mekanın temiz ve düzenli görünmesini sağlar. Bu nötr zemin üzerine, canlı renklerle vurgular yapabilirsiniz.

## Mobilya Seçimi

Modern mobilyalar, sade çizgileri ve fonksiyonel tasarımlarıyla öne çıkar. Koltuk takımı seçerken, temiz hatları olan modelleri tercih edin. TV ünitesi ve sehpalar gibi aksesuarlar da aynı tasarım dilinde olmalıdır.

## Aydınlatma

Modern oturma odalarında aydınlatma çok önemlidir. Doğal ışığı maksimum düzeyde kullanın ve yapay aydınlatmada farklı seviyelerde ışık kaynakları oluşturun.

## Aksesuar Kullanımı

Modern dekorasyonda "az çoktur" prensibi geçerlidir. Seçtiğiniz aksesuarlar kaliteli ve anlamlı olmalıdır. Büyük boy tablolar, şık vazolar ve tasarım objeler tercih edilebilir.`,
    contentEN: `Modern living room decoration is an approach where minimalist lines and functional designs are at the forefront. In this article, we will discuss the important points you should pay attention to in order to create a modern living room.

## Color Palette Selection

Neutral colors are generally preferred in modern living rooms. Basic colors such as white, gray, beige and black ensure that the space looks clean and organized. You can make accents with vibrant colors on this neutral ground.

## Furniture Selection

Modern furniture stands out with its simple lines and functional designs. When choosing a sofa set, prefer models with clean lines. Accessories such as TV units and coffee tables should also be in the same design language.

## Lighting

Lighting is very important in modern living rooms. Use natural light to the maximum and create light sources at different levels in artificial lighting.

## Use of Accessories

The principle of "less is more" applies in modern decoration. The accessories you choose should be quality and meaningful. Large paintings, stylish vases and design objects can be preferred.`,
    featuredImage: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    category: 'decoration',
    tags: ['modern', 'oturma odası', 'dekorasyon', 'minimalist'],
    isPublished: true,
    publishedAt: new Date('2024-11-15'),
    metaTitleTR: 'Modern Oturma Odası Dekorasyonu İpuçları - K Mobilya Blog',
    metaTitleEN: 'Modern Living Room Decoration Tips - K Mobilya Blog',
    metaDescriptionTR: 'Modern ve şık bir oturma odası için dekorasyon ipuçları. Renk paleti, mobilya seçimi ve aydınlatma önerileri.',
    metaDescriptionEN: 'Decoration tips for a modern and stylish living room. Color palette, furniture selection and lighting suggestions.',
    authorId: 'admin',
    createdAt: new Date('2024-11-15'),
    updatedAt: new Date('2024-11-15')
  },
  {
    id: 'mutfak-organizasyonu-rehberi',
    titleTR: 'Mutfak Organizasyonu ve Düzenleme Rehberi',
    titleEN: 'Kitchen Organization and Arrangement Guide',
    slugTR: 'mutfak-organizasyonu-rehberi',
    slugEN: 'kitchen-organization-guide',
    excerptTR: 'Mutfağınızı daha fonksiyonel ve düzenli hale getirmek için pratik çözümler ve organizasyon önerileri.',
    excerptEN: 'Practical solutions and organization suggestions to make your kitchen more functional and organized.',
    contentTR: `Mutfak, evin en çok kullanılan alanlarından biridir ve iyi bir organizasyon, günlük yaşamınızı kolaylaştırır. Bu rehberde, mutfağınızı daha fonksiyonel hale getirmek için pratik öneriler bulacaksınız.

## Depolama Alanlarını Optimize Edin

Mutfak dolaplarınızı maksimum verimlilikle kullanmak için:
- Üst raflarda az kullanılan eşyaları saklayın
- Göz hizasındaki raflarda günlük kullanım eşyalarını yerleştirin
- Alt dolaplarda ağır eşyaları muhafaza edin

## Çalışma Alanını Düzenleyin

Mutfak tezgahınızı her zaman temiz ve düzenli tutun. Sadece günlük kullandığınız eşyaları tezgahta bırakın.

## Saklama Kapları Kullanın

Şeffaf saklama kapları kullanarak hem düzen sağlayın hem de içeriği kolayca görebilirsiniz.`,
    contentEN: `The kitchen is one of the most used areas of the house and good organization makes your daily life easier. In this guide, you will find practical suggestions to make your kitchen more functional.

## Optimize Storage Areas

To use your kitchen cabinets with maximum efficiency:
- Store rarely used items on upper shelves
- Place daily use items on shelves at eye level
- Keep heavy items in lower cabinets

## Organize the Work Area

Always keep your kitchen counter clean and organized. Only leave items you use daily on the counter.

## Use Storage Containers

Use transparent storage containers to both organize and easily see the contents.`,
    featuredImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    category: 'kitchen',
    tags: ['mutfak', 'organizasyon', 'düzen', 'saklama'],
    isPublished: true,
    publishedAt: new Date('2024-11-10'),
    metaTitleTR: 'Mutfak Organizasyonu Rehberi - K Mobilya Blog',
    metaTitleEN: 'Kitchen Organization Guide - K Mobilya Blog',
    metaDescriptionTR: 'Mutfağınızı daha fonksiyonel hale getirmek için organizasyon önerileri ve pratik çözümler.',
    metaDescriptionEN: 'Organization suggestions and practical solutions to make your kitchen more functional.',
    authorId: 'admin',
    createdAt: new Date('2024-11-10'),
    updatedAt: new Date('2024-11-10')
  },
  {
    id: 'yatak-odasi-dekorasyon-fikirleri',
    titleTR: 'Yatak Odası Dekorasyon Fikirleri',
    titleEN: 'Bedroom Decoration Ideas',
    slugTR: 'yatak-odasi-dekorasyon-fikirleri',
    slugEN: 'bedroom-decoration-ideas',
    excerptTR: 'Huzurlu ve rahat bir yatak odası yaratmak için dekorasyon fikirleri ve tasarım önerileri.',
    excerptEN: 'Decoration ideas and design suggestions to create a peaceful and comfortable bedroom.',
    contentTR: `Yatak odası, günün yorgunluğunu attığımız ve dinlendiğimiz özel alanımızdır. Bu yazımızda, yatak odanızı daha huzurlu ve konforlu hale getirmek için dekorasyon fikirlerini paylaşıyoruz.

## Renk Seçimi

Yatak odasında sakin ve huzur verici renkler tercih edin. Pastel tonlar, açık mavi, lavanta ve bej gibi renkler ideal seçimlerdir.

## Yatak ve Yatak Örtüsü

Kaliteli bir yatak ve uyumlu yatak örtüsü seçimi, odanın genel görünümünü büyük ölçüde etkiler.

## Aydınlatma

Yatak odasında yumuşak ve sıcak ışık tercih edin. Abajurlar ve gizli aydınlatma seçenekleri ideal olacaktır.`,
    contentEN: `The bedroom is our special space where we rest and unwind from the day's fatigue. In this article, we share decoration ideas to make your bedroom more peaceful and comfortable.

## Color Selection

Choose calm and soothing colors in the bedroom. Pastel tones, light blue, lavender and beige are ideal choices.

## Bed and Bedding

The choice of a quality bed and matching bedding greatly affects the overall appearance of the room.

## Lighting

Prefer soft and warm light in the bedroom. Lamps and hidden lighting options would be ideal.`,
    featuredImage: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    category: 'decoration',
    tags: ['yatak odası', 'dekorasyon', 'huzur', 'konfor'],
    isPublished: true,
    publishedAt: new Date('2024-11-05'),
    metaTitleTR: 'Yatak Odası Dekorasyon Fikirleri - K Mobilya Blog',
    metaTitleEN: 'Bedroom Decoration Ideas - K Mobilya Blog',
    metaDescriptionTR: 'Huzurlu ve rahat bir yatak odası yaratmak için dekorasyon fikirleri ve tasarım önerileri.',
    metaDescriptionEN: 'Decoration ideas and design suggestions to create a peaceful and comfortable bedroom.',
    authorId: 'admin',
    createdAt: new Date('2024-11-05'),
    updatedAt: new Date('2024-11-05')
  }
];