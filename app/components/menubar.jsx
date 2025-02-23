"use client";

import { useState, useRef } from "react";

const categories = [
  { id: 1, name: "Bhook Ka The End!", href: "#Bhook-Ka-The-End!" },
  { id: 2, name: "Starters", href: "#Starters" },
  { id: 3, name: "Somewhat Local", href: "#Somewhat-Local" },
  { id: 4, name: "Somewhat Sooper", href: "#Somewhat-Sooper" },
  { id: 5, name: "Cheezy Treats", href: "#Cheezy-Treats" },
  { id: 6, name: "Pizza Deals", href: "#Pizza-Deals" },
  { id: 7, name: "Sandwiches & Platters", href: "#Sandwiches-Platters" },
  { id: 8, name: "Special Pizza", href: "#Special-Pizza" },
  { id: 9, name: "Pastas", href: "#Pastas" },
  { id: 10, name: "Burgerz", href: "#Burgerz" },
  { id: 11, name: "Side Orders", href: "#Side-Orders" },
  { id: 12, name: "Addons", href: "#Addons" },
];

const Menubar = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const menuRef = useRef(null);

  // Scroll menu left/right
  const scrollMenu = (direction) => {
    if (menuRef.current) {
      const scrollAmount = 200;
      menuRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 border-b border-gray-200 z-50 bg-white shadow-md">
      <div className="relative max-w-[1200px] mx-auto flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={() => scrollMenu("left")}
          className="absolute left-0 z-10 bg-gray-300 text-gray-700 hover:bg-gray-400 px-3 py-2 rounded-l-md"
        >
          ◀
        </button>

        {/* Scrollable Menu */}
        <div
          ref={menuRef}
          className="flex overflow-x-auto hide-scrollbar scroll-smooth mx-10 w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex min-w-max space-x-2 px-2 py-3">
            {categories.map((category) => (
              <a
                key={category.id}
                href={category.href}
                onClick={() => setActiveCategory(category.name)}
                className={`relative px-6 py-2 text-black font-semibold transition-all duration-200 whitespace-nowrap rounded-md shadow-md border border-gray-300
                  ${
                    activeCategory === category.name
                      ? "text-white bg-yellow-500"
                      : "hover:bg-yellow-200"
                  }
                `}
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scrollMenu("right")}
          className="absolute right-0 z-10 bg-gray-300 text-gray-700 hover:bg-gray-400 px-3 py-2 rounded-r-md"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Menubar;
