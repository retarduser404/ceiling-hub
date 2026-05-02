import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Support from "./pages/Support";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/common/WhatsAppButton";
export default function App() {
  return (
    <BrowserRouter>
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/support" element={<Support />} />

        <Route path="/brands" element={<Brands />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}