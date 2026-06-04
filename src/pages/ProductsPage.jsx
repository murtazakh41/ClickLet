import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const ProductsPage = () => {
  const location = useLocation();

  const product = location.state?.product;

  if (!product) {
    return (
      <h1 className="text-center text-2xl mt-10 font-bold">
        Product not found
      </h1>
    );
  }

  const images = [
    product.image,
    product.leftImage,
    product.backImage,
  ].filter(Boolean);

  const [selectedImage, setSelectedImage] = useState(
    product.image
  );

  return (
    <>
      {/* Breadcrumb */}
      <div className="mt-8 px-4 container mx-auto flex items-center text-sm text-gray-500">

        <Link
          to="/Home"
          className="hover:text-black transition"
        >
          Home
        </Link>

        <span className="mx-2">/</span>

        <Link
          to="/BestSellers"
          className="hover:text-black transition"
        >
          Best Sellers
        </Link>

        <span className="mx-2">/</span>

        <span className="font-medium text-black">
          {product.name}
        </span>

      </div>

      {/* Marquee */}
      <div className="bg-black text-white mt-6 py-3 overflow-hidden">

        <div className="animate-marquee whitespace-nowrap">
          <span className="font-semibold">

            🚚 Free Delivery + Cash on Delivery Available All Over Pakistan 💵
            &nbsp;&nbsp;&nbsp;&nbsp;
            🚚 Free Delivery + Cash on Delivery Available All Over Pakistan 💵
            &nbsp;&nbsp;&nbsp;&nbsp;
            🚚 Free Delivery + Cash on Delivery Available All Over Pakistan 💵

          </span>
        </div>

      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side Images */}
          <div>

            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border">

              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[500px] object-cover hover:scale-110 transition-all duration-500"
              />

            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-5 flex-wrap">

              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 rounded-xl object-cover cursor-pointer border-2 transition-all duration-300 hover:scale-105
                  
                  ${
                    selectedImage === img
                      ? "border-black"
                      : "border-gray-300"
                  }
                  `}
                />
              ))}

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            {/* Product Name */}
            <h1 className="text-3xl md:text-5xl font-bold">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-gray-500 leading-8">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-4">

              <span className="text-red-500 text-4xl font-bold">
                ${product.discountPrice}
              </span>

              <span className="line-through text-gray-400 text-2xl">
                ${product.originalPrice}
              </span>

            </div>

            {/* Info Cards */}
            <div className="space-y-4">

              <div className="bg-black text-white rounded-xl p-4 font-semibold text-center">
                🔥 99+ Happy Customers
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                👀 11 People are viewing this right now
              </div>

              <div className="bg-green-600 text-white rounded-xl p-4 font-bold text-center">
                ✅ In Stock
              </div>

            </div>

            {/* Quantity */}
            <div>

              <label className="font-semibold text-lg">
                Quantity
              </label>

              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-black"
              />

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300">

                Add To Cart

              </button>

              <button className="w-full border-2 border-black py-4 rounded-xl font-bold hover:bg-black hover:text-white transition-all duration-300">

                Buy Now

              </button>

            </div>
              <div>
                  <button className="w-full border-2 border-black py-4 rounded-xl font-bold bg-black text-white hover:bg-gray-800 transition-all duration-300">

               Order in whatsapp

              </button>

              </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default ProductsPage;