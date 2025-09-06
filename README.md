# K Mobilya - Complete E-commerce Website

Modern, responsive furniture and kitchen products e-commerce website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Frontend Features
- **Multi-language Support**: Turkish (default) and English with i18next
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Product Catalog**: Advanced filtering, sorting, and search functionality
- **Shopping Cart**: Full cart management with variants and custom options
- **User Authentication**: Login, register, password reset
- **Custom Products**: Quote request system for custom-made furniture
- **Blog System**: SEO-optimized blog with categories and tags
- **SEO Optimized**: Meta tags, structured data, sitemap generation

### E-commerce Features
- **Product Management**: Variants, images, inventory tracking
- **Order Management**: Complete order lifecycle management
- **Payment Integration**: Stripe, PayTR, iyzico support
- **Shipping**: Free shipping thresholds, delivery time calculation
- **Coupons & Discounts**: Flexible coupon system
- **Reviews & Ratings**: Customer review system
- **Favorites & Comparison**: Product comparison functionality

### Admin Panel Features
- **Dashboard**: Sales analytics and key metrics
- **Product Management**: CRUD operations with image upload
- **Order Management**: Order status tracking and updates
- **Customer Management**: User accounts and communication
- **Content Management**: Blog posts and static pages
- **Settings**: Site configuration and payment settings

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context + useReducer
- **Internationalization**: i18next, react-i18next
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system

## 🎨 Design System

### Colors
- **Primary**: Orange (#FF7A00)
- **Neutral**: Cream, Gray palette
- **Accent**: Wood-inspired tones

### Typography
- **Headings**: Bold, clean fonts
- **Body**: Readable, accessible text
- **Spacing**: 8px grid system

### Components
- **Cards**: Rounded corners with soft shadows
- **Buttons**: Consistent hover states and transitions
- **Forms**: Clean, accessible form controls

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Large tap targets and smooth interactions

## 🌐 Internationalization

### Supported Languages
- **Turkish (tr)**: Default language
- **English (en)**: Full translation support

### Features
- **URL Localization**: /tr and /en routes
- **Content Translation**: All UI text, product descriptions, blog posts
- **SEO**: Localized meta tags and hreflang attributes
- **Currency**: TRY, USD, EUR support with exchange rates

## 🛒 E-commerce Features

### Product Catalog
- **Categories**: Hierarchical category structure
- **Variants**: Color, size, material options
- **Custom Products**: Quote request system
- **Search & Filter**: Advanced product filtering
- **Stock Management**: Real-time inventory tracking

### Shopping Experience
- **Cart**: Persistent cart with local storage
- **Checkout**: Single-page checkout process
- **Payment**: Multiple payment gateway support
- **Shipping**: Calculated shipping costs and free shipping
- **Order Tracking**: Real-time order status updates

### Customer Features
- **Accounts**: User registration and profiles
- **Favorites**: Wishlist functionality
- **Reviews**: Product rating and review system
- **Comparison**: Side-by-side product comparison

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/k-mobilya.git
   cd k-mobilya
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── ProductDetailPage.tsx
│   └── CartPage.tsx
├── contexts/           # React Context providers
│   └── AppContext.tsx
├── data/              # Sample data and configurations
│   └── products.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── i18n/              # Internationalization
│   └── index.ts
└── App.tsx            # Main application component
```

## 🎯 Demo Data

The application includes comprehensive demo data:

### Products
- **Luna 3-Seater Sofa**: Modern living room furniture
- **Atlas Solid Wood Dining Table**: Handcrafted dining furniture
- **Nordic TV Unit**: Minimalist entertainment center
- **Nova Wardrobe 4D**: Modular bedroom storage
- **ChefPro Cookware Set**: Professional kitchen equipment
- **Edge Knife Set**: Premium kitchen tools
- **Opal Tableware**: Elegant dining sets
- **Custom Kitchen Cabinet**: Made-to-order solutions

### Categories
- **Furniture**: Living room, bedroom, dining room, office
- **Kitchen**: Cookware, accessories, appliances, furniture

### Blog Posts
- Decoration guides and tips
- Kitchen organization advice
- Product care instructions

## 🔐 Admin Panel

### Default Login
- **Email**: admin@kmobilya.com
- **Password**: Kmobilya!2025

### Features
- **Dashboard**: Sales overview and analytics
- **Product Management**: Add, edit, delete products
- **Order Management**: Process and track orders
- **Customer Support**: Manage customer inquiries
- **Content Management**: Blog posts and pages
- **Settings**: Site configuration

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Environment Variables
Configure the following for production:
- Database connection strings
- Payment gateway credentials
- Email service configuration
- Analytics tracking codes

### SEO Optimization
- Automatic sitemap generation
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Image optimization and lazy loading

## 📊 Performance

### Optimization Features
- **Code Splitting**: Route-based code splitting
- **Image Optimization**: Lazy loading and responsive images
- **Caching**: Browser caching strategies
- **Bundle Size**: Optimized bundle with tree shaking

### Target Metrics
- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- **Email**: info@kmobilya.com
- **Phone**: 0212 xxx xx xx
- **WhatsApp**: 0532 xxx xx xx

## 🙏 Acknowledgments

- **Design Inspiration**: Modern furniture e-commerce sites
- **Icons**: Lucide React icon library
- **Images**: Pexels for demo product images
- **Fonts**: System fonts for optimal performance