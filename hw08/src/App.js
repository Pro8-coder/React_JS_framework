import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import BottomSection from "./components/bottom/BottomSection";
import Footer from "./components/footer/Footer";
import HomePage from "./page/home/Home";
import CatalogPage from "./page/catalog/Catalog";
import ProductPage from "./page/product/Product";
import CartPage from "./page/cart/Cart";
import RegistrationPage from "./page/registration/Registration";

const App = () => {
  const showFullContent = !["/", "/catalogPage"].includes(
    window.location.pathname
  );

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogPage" element={<CatalogPage />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/registrationPage" element={<RegistrationPage />} />
        </Routes>
        <BottomSection showFullContent={showFullContent} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
