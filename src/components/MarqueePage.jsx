import React from "react";

const MarqueePage = () => {
  const saleItems = Array(10).fill({
    tag: "Sale",
    text: "🔥 Sale Is Live!",
  });

  return (
    <>
      {/* Custom Animation */}
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .marquee {
            animation: marquee 15s linear infinite;
          }
           .marquee:hover {
  animation-play-state: paused;
}
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="bg-gray-100 rounded-xl overflow-hidden py-4 shadow-md">
          <div className="marquee flex w-max">
            {[...saleItems, ...saleItems].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-4 px-4 sm:px-8 flex-shrink-0"
              >
                {/* Badge */}
                <span className="border border-red-400 bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {item.tag}
                </span>

                {/* Text */}
                <span className="text-sm sm:text-lg font-bold text-gray-700">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueePage;
