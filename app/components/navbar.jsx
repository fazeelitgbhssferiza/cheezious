"use client"

import Link from "next/link"
import Image from "next/image"
import { SearchIcon, MapPinIcon, ShoppingCartIcon, UserIcon } from "lucide-react"
import { useState } from "react"

export default function NavBar() {
  const [cartCount, setCartCount] = useState(3) // Example cart count

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logos */}



        <div className="flex items-center space-x-4">
          <Link href="/" title="Home">
            <Image src="/images/stack.png" alt="Cheezious Logo Stack" width={40} height={40} />
          </Link>
          <Link href="/" title="Home">
            <Image src="/images/mainLogo.png" alt="Cheezious Main Logo" width={140} height={40} />
          </Link>
        </div>

        {/* Search Box */}
        <div className="flex justify-between py-2 px-6 border-6">
  <form className="w-full max-w-md">
    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
      <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none"/>
      <input
        type="text"
        name="search"
        placeholder="Find in Cheezious"
        autoComplete="off"
        aria-label="Find in Cheezious"
        className="pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
      />
    </div>
  </form>
</div>
        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          {/* Location */}
          <li>
            <Link
              href="/locations"
              className="bg-white border border-gray-300 text-black px-10 py-2 rounded-md flex items-center"
              title="Find Locations"
                         >
              <MapPinIcon className="w-4 h-5 mr-1" />
              <span>Enter the Delivery Address</span>
              <span className="ml-3 text-gray-600"></span>
            </Link>
          </li>

          {/* Cart with Count Badge */}
          <li>
            <Link
              href="/cart"
              className="relative bg-yellow-400 text-black-bold px-10 py-2 rounded-md flex items-center"
              title="View Cart"
            >
              <ShoppingCartIcon className="w-5 h-5 mr-1" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>

          {/* Login (Account) */}
          <li>
            <Link
              href="/account"
              className="bg-yellow-400 text-black px-10 py-2 rounded-md flex items-center"
              title="Your Account"
            >
              <UserIcon className="w-5 h-5 mr-1" />
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

