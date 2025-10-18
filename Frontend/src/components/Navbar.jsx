import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [stick, setStick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a className="font-medium text-gray-700 hover:text-indigo-600">Home</a>
      </li>
      <li>
        <a className="font-medium text-gray-700 hover:text-indigo-600">
          Courses
        </a>
      </li>
      <li>
        <a className="font-medium text-gray-700 hover:text-indigo-600">About</a>
      </li>
      <li>
        <a className="font-medium text-gray-700 hover:text-indigo-600">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl mx-auto px-1 border-b border-gray-200 shadow-md md:px-4 fixed top-0 left-0 right-0 bg-white z-50 transition ease-in-out duration-300 ${
          stick ? "shadow-md bg-indigo-200 backdrop-blur" : ""
        }`}
      >
        <div className="navbar bg-white shadow-sm flex justify-between items-center">
          {/* Left: Logo + Menu */}
          <div className="navbar-start flex items-center space-x-2">
            {/* Dropdown (Mobile) */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-lg shadow-md z-10 mt-3 w-52 p-2 border border-gray-100"
              >
                {navItems}
              </ul>
            </div>

            {/* Logo */}
            <a className="text-xl md:text-2xl lg:text-3xl font-extrabold text-indigo-600 tracking-wide">
              Book Depository
            </a>
          </div>

          {/* Right: Nav Items + Search + Theme + Login */}
          <div className="navbar-end flex items-center space-x-4">
            {/* Desktop Nav Links */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal space-x-2">{navItems}</ul>
            </div>

            {/* 🔍 Search */}
            <div className="relative flex items-center">
              {/* Full search bar on md+ */}
              <div className="hidden md:block">
                <div className="relative w-full max-w-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 
                      5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 
                      4.391l3.328 3.329a.75.75 0 
                      11-1.06 1.06l-3.329-3.328A7 
                      7 0 012 9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="block pl-9 pr-3 py-2 border border-gray-400 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Search Icon on mobile */}
              <button
                onClick={() => setShowSearch((prev) => !prev)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
              >
                <svg
                  className="h-6 w-6 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 
                  5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 
                  4.391l3.328 3.329a.75.75 0 
                  11-1.06 1.06l-3.329-3.328A7 
                  7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Expandable search input on mobile when icon clicked */}
              {showSearch && (
                <div className="absolute top-12 right-0 left-0 bg-white px-3 py-2 border border-gray-300 rounded-md shadow-md md:hidden">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />
              <svg
                className="swap-off h-7 w-7 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 4.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0v-.5zM4.22 5.64a1 1 0 0 1 1.42 0l.36.35a1 1 0 0 1-1.41 1.42l-.36-.36a1 1 0 0 1 0-1.41zM2 12a1 1 0 0 1 1-1h.5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm2.22 6.36a1 1 0 0 1 1.42 0l.36.35a1 1 0 1 1-1.41 1.42l-.36-.36a1 1 0 0 1 0-1.41zM12 19.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0v-.5zM18.36 18.36a1 1 0 0 1 1.42 0l.35.36a1 1 0 0 1-1.41 1.41l-.36-.35a1 1 0 0 1 0-1.42zM19.5 12a1 1 0 0 1 1-1h.5a1 1 0 0 1 0 2h-.5a1 1 0 0 1-1-1zm-1.14-6.36a1 1 0 0 1 1.41 0l.36.35a1 1 0 1 1-1.42 1.42l-.35-.36a1 1 0 0 1 0-1.41zM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z" />
              </svg>
              <svg
                className="swap-on h-7 w-7 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.75 15.5A9.72 9.72 0 0 1 12 22a9.75 9.75 0 0 1 0-19.5 1 1 0 0 1 .95 1.32 7.75 7.75 0 0 0 8.8 11.68z" />
              </svg>
            </label>

            {/* Login */}
            <a className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-700">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
