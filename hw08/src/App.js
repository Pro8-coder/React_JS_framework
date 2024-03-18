import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import BottomSection from "./components/bottom/BottomSection";
import Footer from "./components/footer/Footer";
import HomePage from "./page/home/Home";
import CatalogPage from "./page/catalog/Catalog";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogPage" element={<CatalogPage />} />
        </Routes>
        <BottomSection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
