import React from 'react'
const MarqueePage = () => {

  const saleItems = Array(10).fill({
    tag: "Sale",
    text: "Sale Is Live!"
  });

  return (
    <div className="bg-gray-100 py-4 mt-10 rounded-lg overflow-hidden">

      {/* Marquee Container */}
      <div className="flex whitespace-nowrap animate-marquee">

        {/* First Set */}
        {saleItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-6"
          >
            <span className="border-2 border-gray-300 px-4 py-1 rounded-full text-sm font-semibold text-gray-700 animate-pulse">
              {item.tag}
            </span>

            <span className="text-lg font-bold text-gray-800">
              {item.text}
            </span>
          </div>
        ))}

        {/* Duplicate Set For Smooth Infinite Loop */}
        {saleItems.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex items-center gap-3 mx-6"
          >
            <span className="border-2 border-gray-300 px-4 py-1 rounded-full text-sm font-semibold text-gray-700 animate-pulse">
              {item.tag}
            </span>

            <span className="text-lg font-bold text-gray-800">
              {item.text}
            </span>
          </div>
        ))}

      </div>

    </div>
  )
}

export default MarqueePage