import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ShopCrat from "./components/ShopCrat";// Assuming you have this component created
import Wishlist from "./pages/Wishlist";
const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // loading duration

    return () => clearTimeout(timer);

  }, [location.pathname]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">

        <div className="flex flex-col items-center">

          <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

          <h2 className="mt-4 text-2xl font-bold">
            ClickLet Store
          </h2>

        </div>

      </div>
    );
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;