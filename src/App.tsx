import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import './i18n';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/furniture" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Furniture Category Page</h2></div>} />
              <Route path="/kitchen" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Kitchen Category Page</h2></div>} />
              <Route path="/custom-made" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Custom Made Page</h2></div>} />
              <Route path="/blog" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Blog Page</h2></div>} />
              <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">About Page</h2></div>} />
              <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Contact Page</h2></div>} />
              <Route path="/order-tracking" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Order Tracking Page</h2></div>} />
              <Route path="/favorites" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Favorites Page</h2></div>} />
              <Route path="/account" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Account Page</h2></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;