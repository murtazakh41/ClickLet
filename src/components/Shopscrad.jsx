import React from "react";
import { useNavigate } from "react-router-dom";
const Shopscrad = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Smartphone XYZ",
      description:
        "A powerful smartphone with a sleek design and advanced features.",
      image:
        "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnRwaG9uZSUyMFhZWnxlbnwwfHwwfHx8MA%3D%3D",
      backImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnRwaG9uZSUyMFhZWnxlbnwwfHwwfHx8MA%3D%3D",
      leftImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnRwaG9uZSUyMFhZWnxlbnwwfHwwfHx8MA%3D%3D",

      discountPrice: 1880,
      originalPrice: 2000,
      catgrey: 67,
    },
    {
      id: 2,
      name: "Wireless Headphones ABC",
      description:
        "Experience high-quality sound with these wireless headphones.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzJTIwQUJDfGVufDB8fDB8fHww",
      backImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzJTIwQUJDfGVufDB8fDB8fHww",
      leftImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzJTIwQUJDfGVufDB8fDB8fHww",
      discountPrice: 1880,
      originalPrice: 2000,
      total: 100,
    },
    {
      id: 3,
      name: "Smartwatch DEF",
      description:
        "Stay connected and track your fitness with this stylish smartwatch.",
      image:
        "https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnR3YXRjaCUyMERFRnxlbnwwfHwwfHx8MA%3D%3D",
      backImage:
        "https://media.istockphoto.com/id/2267029998/photo/stone-headphones.jpg?s=1024x1024&w=is&k=20&c=OC2m8VhPMUlvwOZNAIihQIWfKmG7PDiFjpACusezkU4=",
      leftImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzJTIwQUJDfGVufDB8fDB8fHww",
      discountPrice: 1880,
      originalPrice: 2000,
      total: 69,
    },
    {
      id: 4,
      name: "Laptop GHI",
      description: "A high-performance laptop for work and entertainment.",
      image:
        "https://media.istockphoto.com/id/95769834/photo/laptop-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=AXeOs6CSrn2aRvIq8W-K57Y-q2nnEPzn7RTUcxURvtY=",
      backImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzJTIwQUJDfGVufDB8fDB8fHww",
      leftImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzJTIwQUJDfGVufDB8fDB8fHww",
      discountPrice: 1880,
      originalPrice: 2000,
      total: 50,
    },
  ];
  console.log(products);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Electronic Gadgets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            onClick={() =>
              navigate(`/products/${product.id}`, {
                state: { product }, 
              })
            }
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4 
  transition-transform duration-300 hover:scale-110 "
            />

            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>

            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-red-500 font-semibold">
                RS: ${product.discountPrice}
              </p>

              <p className="text-gray-400 line-through">
                RS: ${product.originalPrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Center Button */}
      <div className="flex justify-center items-center mt-10">
        <button className="bg-black text-white py-3 px-8 rounded-2xl hover:rounded-md transition-all duration-300 cursor-pointer text-sm sm:text-base">
          Shop More
        </button>
      </div>
    </div>
  );
};

export default Shopscrad;
