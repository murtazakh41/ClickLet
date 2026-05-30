import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CustomrReviews = () => {
  const reviews = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      review:
        "Great product! Highly recommend it. Will buy again. Excellent quality and fast shipping.",
      rating: 5,
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      review:
        "Good value for the price. Satisfied with my purchase. The product works as expected.",
      rating: 4,
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Alice Johnson",
      review:
        "Not satisfied with the product. It did not meet my expectations.",
      rating: 2,
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Bob Wilson",
      review:
        "Average product. Nothing special, but it does the job.",
      rating: 3,
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Emily Davis",
      review:
        "Excellent customer service! Very happy with the service.",
      rating: 5,
    },
    {
      id: 6,
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      name: "Michael Brown",
      review:
        "Outstanding product! Exceeded my expectations in every way.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < reviews.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-10 mt-16">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-2">
       What our customers say
      </h1>
      <p className="text-center text-gray-600 mb-5 ">
        Real reviews from real customers
      </p>

      {/* Cards */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-all duration-500"
          style={{
            transform: `translateX(-${currentIndex * 340}px)`,
          }}
          >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[320px] bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <h3 className="text-lg font-semibold">
                  {review.name}
                </h3>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}

                {Array.from({ length: 5 - review.rating }).map((_, index) => (
                    <span key={index} className="text-gray-300 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-6">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 mt-8">

        <button
          onClick={prevSlide}
          className="bg-black text-white p-3 rounded-full hover:scale-110 transition-all duration-300"
        >
          <GoArrowLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="bg-black text-white p-3 rounded-full hover:scale-110 transition-all duration-300"
        >
          <GoArrowRight size={24} />
        </button>

      </div>
    </div>
      <div className="border border-2 border-gray-400 mt-8"></div>
          </>
  );
};

export default CustomrReviews;