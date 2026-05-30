import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { FaHandHoldingHand } from "react-icons/fa6";

const HlapLine = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center gap-4 p-6 rounded-3xl shadow-lg hover:scale-105 duration-300 cursor-pointer">
          <div className="bg-white/20 p-4 rounded-full text-3xl">
            <FaTruckFast />
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              Free Shipping
            </h3>
            <p className="text-base text-gray-200 mt-1">
              Free delivery on all products
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center gap-4 p-6 rounded-3xl shadow-lg hover:scale-105 duration-300 cursor-pointer">
          <div className="bg-white/20 p-4 rounded-full text-3xl">
            <CiUser />
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              Customer Support
            </h3>
            <p className="text-base text-gray-200 mt-1">
              24/7 friendly support service
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center gap-4 p-6 rounded-3xl shadow-lg hover:scale-105 duration-300 cursor-pointer">
          <div className="bg-white/20 p-4 rounded-full text-3xl">
            <FaHandHoldingHand />
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              Secure Payment
            </h3>
            <p className="text-base text-gray-200 mt-1">
              100% secure payment methods
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HlapLine;