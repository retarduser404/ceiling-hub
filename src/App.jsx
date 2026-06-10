import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import WhatsAppButton from "./components/common/WhatsAppButton";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Support from "./pages/Support";
import Brands from "./pages/Brands";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <WhatsAppButton />

      {/* GLOBAL OFFSET FIX */}
      <main className="pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* New category & product detail routes */}
          <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailPage />} />
          <Route path="/products/:categorySlug" element={<CategoryPage />} />
          {/* Legacy product route */}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

