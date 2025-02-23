import React from "react";

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
      {/* Product Image */}
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />

      {/* Product Info */}
      <div className="mt-3">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-black mt-1">{description}</p> {/* Fixed text color */}

        {/* Starting Price Box */}
        <div className="mt-2 flex items-center">
          <span className="text-lg font-semibold">Rs. {price}</span> {/* Price first */}
          <span className="ml-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
            Starting Price
          </span> {/* Red box after the price */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
