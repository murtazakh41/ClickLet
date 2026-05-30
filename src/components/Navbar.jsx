import React from 'react'
import logo from '../assets/logo.avif'
import {
  CiSearch,
  CiUser,
  CiHeart,
  CiShoppingCart,
  CiMenuFries,
  CiCircleRemove
} from "react-icons/ci";

const Navbar = () => {

  const [searchTerm, setSearchTerm] = React.useState('');
  const [showSearch, setShowSearch] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      <nav className='w-full h-20 bg-white px-5 md:px-10 lg:px-20 py-4 overflow-hidden'>

        <div className="flex justify-between items-center">

          {/* Left Side */}
          <div className="flex items-center gap-4">

            {/* Mobile Menu Button */}
            <button
              className='lg:hidden'
              onClick={() => setMobileMenu(true)}
            >
              <CiMenuFries className='text-3xl' />
            </button>

            {/* Logo */}
            <div className="logo">
              {logo && (
                <img
                  src={logo}
                  alt="Logo"
                  className='h-7 md:h-8 cursor-pointer transition-transform duration-300 hover:scale-105'
                />
              )}
            </div>

          </div>

          {/* Desktop Center */}
          <div className="hidden lg:flex relative flex-1 justify-center items-center h-[45px] overflow-hidden">

            {/* Links */}
            <div
              className={`absolute transition-all duration-500 ease-in-out ${
                showSearch
                  ? 'opacity-0 -translate-y-5 pointer-events-none'
                  : 'opacity-100 translate-y-0'
              }`}
            >
              <ul className="flex space-x-10 font-semibold">

                {["Home", "Catalog", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="relative group text-black transition-colors duration-300 hover:text-gray-700"
                    >
                      {item}

                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}

              </ul>
            </div>

            {/* Search */}
            <div
              className={`absolute w-[420px] transition-all duration-500 ease-in-out ${
                showSearch
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5 pointer-events-none'
              }`}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder='Search products...'
                  className='w-full border border-gray-300 rounded-full px-5 py-2 outline-none focus:border-black transition-all duration-300'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button
                  onClick={() => setShowSearch(false)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition'
                >
                  ✕
                </button>
              </div>
            </div>

          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 md:gap-5 text-gray-700">

            {/* Mobile Search */}
            <div className='lg:hidden'>
              <CiSearch className='text-2xl cursor-pointer' />
            </div>

            {/* Desktop Search */}
            <div
              className='hidden lg:block relative group'
              onClick={() => setShowSearch(true)}
            >
              <CiSearch className='text-2xl cursor-pointer hover:text-black transition duration-300' />

              <span className='absolute top-9 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap'>
                Search
              </span>
            </div>

            {/* User */}
            <div className='relative group'>
              <CiUser className='text-2xl cursor-pointer hover:text-black transition duration-300' />

              <span className='hidden lg:block absolute top-9 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap'>
                Account
              </span>
            </div>

            {/* Wishlist */}
            <div className='relative group'>
              <CiHeart className='text-2xl cursor-pointer hover:text-black transition duration-300' />

              <span className='hidden lg:block absolute top-9 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap'>
                Wishlist
              </span>
            </div>

            {/* Cart */}
            <div className='relative group'>
              <CiShoppingCart className='text-2xl cursor-pointer hover:text-black transition duration-300' />

              <span className='hidden lg:block absolute top-9 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap'>
                Cart
              </span>
            </div>

          </div>

        </div>

        {/* Mobile Search Input */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            showSearch ? 'max-h-20 mt-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder='Search...'
              className='w-full border border-gray-300 rounded-full px-5 py-3 outline-none'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button
              onClick={() => setShowSearch(false)}
              className='absolute right-4 top-1/2 -translate-y-1/2'
            >
              ✕
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 transition-all duration-500 ${
          mobileMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        {/* Top */}
        <div className="flex justify-between items-center p-5 border-b">

          <h2 className='text-xl font-bold'>
            Menu
          </h2>

          <button onClick={() => setMobileMenu(false)}>
            <CiCircleRemove className='text-3xl' />
          </button>

        </div>

        {/* Links */}
        <ul className='flex flex-col p-5 gap-6 text-lg font-medium'>

          {["Home", "Catalog", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className='hover:pl-2 transition-all duration-300 inline-block'
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

      </div>

      {/* Overlay */}
      <div
        onClick={() => setMobileMenu(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-500 ${
          mobileMenu
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      ></div>
    </>
  )
}

export default Navbar