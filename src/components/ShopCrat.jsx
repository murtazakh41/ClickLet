import React from "react";
import { CiCircleRemove } from "react-icons/ci";

const ShopCrat = ({ cartOpen, setCartOpen }) => {
  return (
    <>
    
      <div
      
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-5 border-b">
          <h2 className="font-bold text-lg">Shopping Cart</h2>

          <button onClick={() => setCartOpen(false)}>
            <CiCircleRemove className="text-3xl" />
          </button>
        </div>

        <div className="p-5">
          <p>Your cart is empty 🛒</p>
        </div>
      </div>

      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </>
  );
};

export default ShopCrat;