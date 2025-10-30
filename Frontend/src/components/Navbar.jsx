// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const { authUser } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [stick, setStick] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const root = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setStick(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/" className="font-medium hover:text-indigo-600">Home</a></li>
      <li><a href="/courses" className="font-medium hover:text-indigo-600">Courses</a></li>
      <li><a href="#" className="font-medium hover:text-indigo-600">About</a></li>
      <li><a href="#" className="font-medium hover:text-indigo-600">Contact</a></li>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 
        ${stick ? "bg-indigo-50 dark:bg-slate-900/80 shadow-md" : "bg-white dark:bg-slate-900"}`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo + Dropdown */}
        <div className="flex items-center space-x-3">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white dark:bg-slate-800 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>

          <a className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
            Book Depository
          </a>
        </div>

        {/* Right: Menu + Theme + Auth */}
        <div className="flex items-center space-x-4">
          <nav className="hidden lg:block">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </nav>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h2v-2H1v2zm10 9h2v-2h-2v2zM17.24 4.84l1.79-1.79 1.79 1.79-1.79 1.79-1.79-1.79zM20 11h2v2h-2v-2zM6.76 19.16l-1.8 1.79L3.17 19.16l1.79-1.79 1.8 1.79zM17.24 19.16l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM12 6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.75 15.5A9.72 9.72 0 0112 22a9.75 9.75 0 110-19.5c.28 0 .56.02.83.06A7.75 7.75 0 0021.75 15.5z" />
              </svg>
            )}
          </button>

          {/* Auth Buttons */}
          {authUser ? (
            <Logout />
          ) : (
            <>
              <a
                className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-700"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </a>
              <Login />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
