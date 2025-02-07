import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="border-b border-[#f0f2f5] bg-white md:px-36 z-10 sticky">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="h-6 w-6">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <Link to="/" className="text-lg font-bold tracking-tight text-[#111418]">
              Bookland
            </Link>
          </div>

          {/* Always visible icons */}
          <div className="flex gap-2 ml-16 lg:hidden">
            <Link to="/cart">
              <button className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#f0f2f5] px-2.5 text-sm font-bold text-[#111418] hover:bg-gray-200">
                <FaShoppingCart className="h-5 w-5" />
              </button>
            </Link>
            <Link to="/profile">
              <button className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#f0f2f5] px-2.5 text-sm font-bold text-[#111418] hover:bg-gray-200">
                <FaUser className="h-5 w-5" />
              </button>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
            <nav className="flex items-center gap-9">
              <Link
                to="/"
                className="text-sm font-medium text-[#111418] hover:text-gray-600"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-[#111418] hover:text-gray-600"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-[#111418] hover:text-gray-600"
              >
                Contact Us
              </Link>
            </nav>
            <div className="flex gap-2">
              <Link to="/cart">
                <button className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#f0f2f5] px-2.5 text-sm font-bold text-[#111418] hover:bg-gray-200">
                  <FaShoppingCart className="h-5 w-5" />
                </button>
              </Link>
              <Link to="/profile">
                <button className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#f0f2f5] px-2.5 text-sm font-bold text-[#111418] hover:bg-gray-200">
                  <FaUser className="h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button at the end */}
          <div className="flex lg:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-[#111418] hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-[#111418] hover:bg-gray-100"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-[#111418] hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
