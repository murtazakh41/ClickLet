import React from "react";
import heroImage from "../assets/hero.webp";

const Hero = () => {
  return (
    <section className="w-full relative">

      {/* IMAGE */}
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />

      {/* OVERLAY TEXT (OPTIONAL BUT LOOKS PROFESSIONAL) */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Welcome to Our Store
        </h1>

        <p className="mt-3 text-sm md:text-lg text-gray-200">
          Best products at best prices
        </p>

        <button className="mt-5 bg-white text-black px-6 py-2 rounded-full hover:scale-105 transition">
          Shop Now
        </button>

      </div>

    </section>
  );
};

export default Hero;