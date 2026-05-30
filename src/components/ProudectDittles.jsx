import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ProudectDittles = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1680371834119-bc9d0057ddec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGFibGV0JTIwSktMfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Next Image
  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Prev Image
  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-10 container mx-auto px-4">
      {/* Left Side */}
      <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={images[currentImage]}
          alt=""
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Right Side */}
      <div className="w-full h-auto bg-gray-200 rounded-lg p-4 flex flex-col items-center gap-4">
        <h5 className="text-lg font-semibold text-center mt-4 text-gray-600">
          Last month's best-selling product
        </h5>

        <h1 className="text-2xl sm:text-3xl font-bold text-center max-w-md">
          Silver Crest Chopper | 3 Litter | Meat Grinder 1000 Watts | 4 Blades
        </h1>

        <button className="bg-black text-white py-3 px-8 rounded-2xl hover:rounded-md transition-all duration-300 cursor-pointer text-sm sm:text-base">
          Shop More
        </button>

        {/* Carousel Preview */}
        <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden mt-10">
          <img
            src={images[currentImage]}
            alt=""
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 ">
          <button
            onClick={prevSlide}
            className="bg-black text-white p-3 rounded-full hover:scale-110 transition-all duration-300"
          >
            <GoArrowLeft size={22} />
          </button>

          <span className="font-semibold">
            {currentImage + 1} of {images.length}
          </span>

          <button
            onClick={nextSlide}
            className="bg-black text-white p-3 rounded-full hover:scale-110 transition-all duration-300"
          >
            <GoArrowRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProudectDittles;
