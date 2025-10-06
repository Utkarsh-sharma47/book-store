import React from 'react'

const Navbar = () => {
  const navItems = (
    <>
      <li><a className="font-medium text-gray-700 hover:text-indigo-600">Home</a></li>
      <li><a className="font-medium text-gray-700 hover:text-indigo-600">Courses</a></li>
      <li><a className="font-medium text-gray-700 hover:text-indigo-600">About</a></li>
      <li><a className="font-medium text-gray-700 hover:text-indigo-600">Contact</a></li>
    </>
  )

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 border-b border-gray-200 bg-white md:px-10">
        {/* Mobile + Tablet Navbar */}
        <div className="navbar bg-white shadow-sm">
          <div className="navbar-start">
            {/* Dropdown Menu */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-lg shadow-md z-10 mt-3 w-52 p-2 border border-gray-100"
              >
                {navItems}
              </ul>
            </div>

            {/* Brand Logo */}
            <a className="text-xl md:text-2xl font-extrabold text-indigo-600 tracking-wide">
              Book Depository
            </a>
          </div>

          {/* Desktop Navbar */}
          <div className="navbar-end flex items-center space-x-4">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal space-x-2">
                {navItems}
              </ul>
            </div>

            {/* Search Bar (hidden on small) */}
            <div className="hidden md:flex md:mx-4">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" 
                      d="M9 3.5a5.5 5.5 0 100 11 
                      5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 
                      4.391l3.328 3.329a.75.75 0 
                      11-1.06 1.06l-3.329-3.328A7 
                      7 0 012 9z" 
                      clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for anything..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 
                  rounded-md bg-white placeholder-gray-400 
                  focus:outline-none focus:ring-1 focus:ring-indigo-500 
                  focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Theme Controller */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" value="synthwave" />
              {/* Sun Icon */}
              <svg
                className="swap-off h-7 w-7 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 4.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0v-.5zM4.22 5.64a1 1 0 0 1 1.42 0l.36.35a1 1 0 0 1-1.41 1.42l-.36-.36a1 1 0 0 1 0-1.41zM2 12a1 1 0 0 1 1-1h.5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm2.22 6.36a1 1 0 0 1 1.42 0l.36.35a1 1 0 1 1-1.41 1.42l-.36-.36a1 1 0 0 1 0-1.41zM12 19.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0v-.5zM18.36 18.36a1 1 0 0 1 1.42 0l.35.36a1 1 0 0 1-1.41 1.41l-.36-.35a1 1 0 0 1 0-1.42zM19.5 12a1 1 0 0 1 1-1h.5a1 1 0 0 1 0 2h-.5a1 1 0 0 1-1-1zm-1.14-6.36a1 1 0 0 1 1.41 0l.36.35a1 1 0 1 1-1.42 1.42l-.35-.36a1 1 0 0 1 0-1.41zM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z"/>
              </svg>
              {/* Moon Icon */}
              <svg
                className="swap-on h-7 w-7 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M21.75 15.5A9.72 9.72 0 0 1 12 22a9.75 9.75 0 0 1 0-19.5 1 1 0 0 1 .95 1.32 7.75 7.75 0 0 0 8.8 11.68z"/>
              </svg>
            </label>

            {/* Login button */}
            <a className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-700">Login</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
