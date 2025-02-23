"use client"; // Ensures React hooks work correctly

import React, { useState, useEffect } from "react";
import MenuBar from "../components/menubar";
import productData from "../data.json";
import NavBar from "../components/navbar";

const ProductGridPages = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
     
    <div className="p-6">
      {/* Fixed Menu Bar for Navigation */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <NavBar /> {/* Navbar Component */}
        <MenuBar />
      </div>

      {/* Spacer to Prevent Content Overlap */}
      <div className="h-16"></div>

      {/* Product Grid with Fixed Cart */}
      <div className="grid grid-cols-4 gap-6">
        {/* Product Grid - 3 Columns */}
        <div className="col-span-3 space-y-8">
          {Object.keys(products).map((category, index) => (
            <div
              key={index}
              id={category === "Bhook Ka The End!" ? "1" : category.replace(/\s+/g, "-")}
            >
              {/* Category Title - Anchored for Menu Navigation */}
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products[category]?.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
                  >
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-md"
                    />

                    {/* Product Info */}
                    <div className="mt-4">
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-black text-sm mt-1">{item.description}</p>

                      {/* Price & Starting Price Box */}
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-orange-600 text-lg font-bold-800 font-semibold">
                          Rs. {item.price}
                        </span>
                        <span className="bg-orange-600 text-white text-xs font-bold px-7 py-2 rounded-full">
                          Starting Price
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="mt-3 w-full border border-gray-300 text-black px-4 py-2 rounded-md transition-colors hover:bg-orange-500 hover:text-white">
                        + ADD TO CART
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Cart Card - 4th Column */}
        <div className="col-span-1 bg-gray-100 p-6 rounded-lg shadow-md h-fit text-center">
          <h2 className="text-xl font-bold">YOUR CART IS EMPTY</h2>
          <p className="text-gray-600 mt-2">
            Go ahead and explore top categories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductGridPages;
