import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center">
        Contact Us
      </h1>

      {/* Breadcrumb */}
      <div className="flex justify-center items-center mt-4 text-lg">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Home
        </Link>
        <span className="mx-2">{`>`}</span>
        <span className="text-gray-500">Contact</span>
      </div>

      {/* Form Box */}
      <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-6">
          Get In Touch
        </h2>

        <form className="space-y-5">

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
            />

          </div>

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          {/* Checkbox */}
          <div className="flex items-start gap-2 text-sm text-gray-600">

            <input type="checkbox" className="mt-1" />

            <label>
              Save my details for next time I contact you.
            </label>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-300"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;