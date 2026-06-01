import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Register to continue shopping
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-100">

          <form className="space-y-5">

            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl border border-gray-200 outline-none transition-all focus:ring-2 focus:ring-black focus:border-transparent"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border border-gray-200 outline-none transition-all focus:ring-2 focus:ring-black focus:border-transparent"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-xl border border-gray-200 outline-none transition-all focus:ring-2 focus:ring-black focus:border-transparent"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black cursor-pointer text-white p-4 rounded-xl font-medium hover:bg-gray-800 transition duration-300 hover:scale-[1.02]"
            >
              Register
            </button>
            <button
              type="submit"
              className="w-full bg-blue-300 cursor-pointer  text-black p-4 rounded-xl font-medium hover:bg-gray-400 transition duration-300 hover:scale-[1.02]"
            >
              Continue with Shop
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-black font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;