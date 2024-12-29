import React, { useState } from 'react'
import { FaSearch, FaHome, FaUser , FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0">
      <div className="container mx-auto px-4  py-3 flex items-center justify-between">
        {/* **Logo Section** */}
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
            alt="Logo"
            className="h-10 w-auto mr-4"
          />

        </div>

        {/* **Search Field** */}
        <div className="flex-grow mx-4 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Your Food..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <FaSearch className="absolute right-4 top-3 text-orange-500" />
          </div>
        </div>

        {/* **Navigation Links** */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center cursor-pointer hover:text-orange-500">
            <FaHome className="mr-2" /> Home
          </div>
          <div className="flex items-center cursor-pointer hover:text-orange-500">
            <FaUser  className="mr-2" /> Reservation
          </div>
          <div className="hover:text-orange-500 cursor-pointer">
            Login
          </div>
          <div className="hover:text-orange-500 cursor-pointer">
            Sign up
          </div>
        </div>

        {/* **Mobile Menu ** */}
        <div className="md:hidden">
          <button
            onClick={() => setisMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-orange-500"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* **Mobile Menu** */}
      {isMenuOpen || (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2 ">
            <div className="flex items-center cursor-pointer ">
            <FaHome className="mr-2" /> Home
          </div>
          <div className="flex items-center cursor-pointer ">
            <FaUser  className="mr-2" /> Reservation
          </div>
            <div className="block py-2 hover:bg-gray-100">
              Login
            </div>
            <div className="block py-2 hover:bg-gray-100">
              Sign up
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
