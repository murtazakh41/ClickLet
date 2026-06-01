import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Forgot Password
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your email to reset your password
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-100">

          <form className="space-y-5">

            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl border border-gray-200 outline-none transition-all focus:ring-2 focus:ring-black focus:border-transparent"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white p-4 rounded-xl font-medium hover:bg-gray-800 transition duration-300 hover:scale-[1.02]"
            >
              Send Reset Link
            </button>

          </form>

          {/* Back to Login */}
          <p className="text-center text-gray-500 mt-6">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-black font-semibold hover:underline"
            >
              Back to Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;