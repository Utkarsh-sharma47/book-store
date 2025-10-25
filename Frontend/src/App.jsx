// App.jsx
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./1home/Home";
import Courses from "./2courses/Courses";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/signup ";

  return (
    <>
      {!hideNavbar && <Navbar />}  {/* ✅ Navbar hidden on signup page */}
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
