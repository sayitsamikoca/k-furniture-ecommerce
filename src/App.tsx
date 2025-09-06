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
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              
              {/* Category Pages */}
              <Route path="/furniture" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Mobilya Kategorisi</h2>
                </div>
              } />
              <Route path="/kitchen" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Mutfak Kategorisi</h2>
                </div>
              } />
              <Route path="/category/:slug" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Kategori Sayfası</h2>
                </div>
              } />
              
              {/* Other Pages */}
              <Route path="/custom-made" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Özel Üretim Sayfası</h2>
                </div>
              } />
              <Route path="/blog" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Blog Sayfası</h2>
                </div>
              } />
              <Route path="/blog/:slug" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Blog Yazısı</h2>
                </div>
              } />
              <Route path="/about" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Hakkımızda Sayfası</h2>
                </div>
              } />
              <Route path="/contact" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">İletişim Sayfası</h2>
                </div>
              } />
              <Route path="/order-tracking" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Sipariş Takip Sayfası</h2>
                </div>
              } />
              <Route path="/favorites" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Favoriler Sayfası</h2>
                </div>
              } />
              <Route path="/account" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Hesabım Sayfası</h2>
                </div>
              } />
              <Route path="/checkout" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Ödeme Sayfası</h2>
                </div>
              } />
              <Route path="/custom-quote" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Özel Teklif Sayfası</h2>
                </div>
              } />
              
              {/* Admin Routes */}
              <Route path="/admin" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Admin Paneli</h2>
                </div>
              } />
              <Route path="/admin/*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Admin Sayfası</h2>
                </div>
              } />
              
              {/* Policy Pages */}
              <Route path="/privacy-policy" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Gizlilik Politikası</h2>
                </div>
              } />
              <Route path="/terms" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">Kullanım Şartları</h2>
                </div>
              } />
              <Route path="/return-policy" element={
                <div className="min-h-screen flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-900">İade & Değişim</h2>
                </div>
              } />
              
              {/* 404 Page */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">404 - Sayfa Bulunamadı</h2>
                    <p className="text-gray-600 mb-4">Aradığınız sayfa mevcut değil.</p>
                    <a href="/" className="text-orange-600 hover:text-orange-700 font-medium">
                      Ana sayfaya dön
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;