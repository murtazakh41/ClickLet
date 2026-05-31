import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      {/* Har page par show hoga */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Har page par show hoga */}
      <Footer />
    </>
  );
};

export default App;