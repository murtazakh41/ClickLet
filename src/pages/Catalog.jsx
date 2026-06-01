import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa6";
import { RxColumns } from "react-icons/rx";

const Catalog = () => {
  const [selected, setSelected] = useState("Price: Low to High");
  const [open, setOpen] = useState(false);
  const [grid, setGrid] = useState(3); // default 3 columns

  const options = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest Arrivals",
  ];

  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: "$120",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: "$80",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 3,
      name: "Laptop",
      price: "$500",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 4,
      name: "Mobile Phone",
      price: "$350",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center">
        Products
      </h1>

      {/* Breadcrumb */}
      <div className="flex justify-center items-center mt-4 text-lg">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Home
        </Link>
        <span className="mx-2">{`>`}</span>
        <span className="text-gray-500">Products</span>
      </div>

      {/* Filter Bar */}
   <div className="bg-gray-100 rounded-xl mt-10 p-4 sm:p-5 shadow-md">

  <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:items-center">

    {/* LEFT */}
    <div className="flex justify-center md:justify-start">
      <h2 className="font-bold text-lg">Filters</h2>
    </div>

    {/* CENTER DROPDOWN */}
    <div className="flex justify-center w-full">

      <div className="relative w-full max-w-[260px] sm:max-w-[280px]">

        {/* Selected */}
        <div
          onClick={() => setOpen(!open)}
          className="
            bg-white
            px-4 py-3
            rounded-full
            shadow-md
            flex justify-between items-center
            cursor-pointer
            hover:shadow-lg
            transition
            text-sm sm:text-base
          "
        >
          <span className="truncate">{selected}</span>
          <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
            ▼
          </span>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="
            absolute top-14 left-0 w-full
            bg-white rounded-2xl shadow-xl
            overflow-hidden z-50
            border border-gray-100
          ">
            {options.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className="
                  px-4 py-3
                  cursor-pointer
                  hover:bg-black hover:text-white
                  transition
                  text-sm sm:text-base
                "
              >
                {item}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>

    {/* RIGHT BUTTONS */}
    <div className="flex justify-center md:justify-end gap-2 sm:gap-3 text-lg sm:text-xl">

      <button
        onClick={() => setGrid(2)}
        className={`p-2 sm:p-3 rounded-lg shadow transition ${
          grid === 2
            ? "bg-black text-white"
            : "bg-white hover:bg-black hover:text-white"
        }`}
      >
        <FaBars />
      </button>

      <button
        onClick={() => setGrid(3)}
        className={`p-2 sm:p-3 rounded-lg shadow transition ${
          grid === 3
            ? "bg-black text-white"
            : "bg-white hover:bg-black hover:text-white"
        }`}
      >
        <FaGripLinesVertical />
      </button>

      <button
        onClick={() => setGrid(4)}
        className={`p-2 sm:p-3 rounded-lg shadow transition ${
          grid === 4
            ? "bg-black text-white"
            : "bg-white hover:bg-black hover:text-white"
        }`}
      >
        <RxColumns />
      </button>

    </div>

  </div>
</div>

      {/* Product Grid (FIXED) */}
      <div
  className={`grid gap-8 mt-10 ${
    grid === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : grid === 3
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  }`}
>

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold text-xl">{product.name}</h2>
              <p className="text-gray-500 mt-2">{product.price}</p>

              <button className="w-full bg-black text-white py-2 rounded-lg mt-4 hover:bg-gray-800">
                Add To Cart
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Catalog;