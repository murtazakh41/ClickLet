import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.avif";
import {
  CiSearch,
  CiUser,
  CiHeart,
  CiShoppingCart,
  CiMenuFries,
  CiCircleRemove,
} from "react-icons/ci";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full h-20 bg-white px-5 md:px-10 lg:px-20 py-4 flex justify-between items-center overflow-hidden">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenu(true)}>
            <CiMenuFries className="text-3xl" />
          </button>

          {/* LOGO */}
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-7 md:h-8 cursor-pointer hover:scale-105 transition"
            />
          </Link>
        </div>

        {/* CENTER LINKS */}
        <div className="hidden lg:flex gap-8 font-semibold">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/catalog" className="hover:text-gray-600">Catalog</Link>
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 text-gray-700">

          {/* Search */}
          <CiSearch
            className="text-2xl cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />

          <Link to="/login">
            <CiUser className="text-2xl cursor-pointer" />
          </Link>
          <CiHeart className="text-2xl cursor-pointer" />
          <CiShoppingCart className="text-2xl cursor-pointer" />
        </div>
      </nav>

      {/* SEARCH BAR */}
      {showSearch && (
        <div className="w-full bg-gray-100 p-3 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[80%] md:w-[40%] px-4 py-2 rounded-full border"
          />

          <button
            onClick={() => setShowSearch(false)}
            className="ml-3 text-xl"
          >
            ✕
          </button>
        </div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between p-5 border-b">
          <h2 className="font-bold text-lg">Menu</h2>

          <button onClick={() => setMobileMenu(false)}>
            <CiCircleRemove className="text-3xl" />
          </button>
        </div>

        <div className="flex flex-col p-5 gap-5 font-medium">
          <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
          <Link to="/catalog" onClick={() => setMobileMenu(false)}>Catalog</Link>
          <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact</Link>
        </div>
      </div>

      {/* OVERLAY */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </>
  );
};

export default Navbar;