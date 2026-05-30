import React from "react";

const Timepage = () => {
  return (
    <div className="py-8 text-center bg-gray-100  rounded-lg">
      <h3 className="text-3xl font-bold mb-3">Flash Sale Starts Now</h3>
      <p>5% off selected items with code: FLASH5</p>
      <div className="mt-4  flex justify-center gap-8">
        <div>
          <h1 className="text-4xl font-bold">00</h1>
          <p>days</p>
        </div>
        <div>
          <p className="text-4xl font-bold">00</p>
          <p>hours</p>
        </div>
        <div>
          <p className="text-4xl font-bold">00</p>
          <p>minutes</p>
        </div>
        <div>
          <p className="text-4xl font-bold">00</p>
          <p>seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Timepage;
