import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Home from "./1home/Home";
import Courses from "./2courses/Courses";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const { authUser } = useAuth();
  const location = useLocation();

  // Hide Navbar only on signup page
  const hideNavbar = location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}

      {/* Main Container */}
      <div className="dark:bg-gray-900 dark:text-gray-300 min-h-screen transition-colors duration-300">
        <Routes>
          {/* ✅ Default route is Homepage */}
          <Route path="/" element={<Home />} />

          {/* ✅ Protected route for Courses */}
          <Route
            path="/courses"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />

          {/* ✅ Signup and Logout pages */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />

          {/* ✅ Redirect unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* ✅ Global Toast Container with proper auto-close */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500, // Toast disappears automatically in 2.5 seconds
          style: {
            background: "#333",
            color: "#fff",
          },
          success: {
            duration: 2500,
            theme: {
              primary: "green",
            },
          },
          error: {
            duration: 2500,
            theme: {
              primary: "red",
            },
          },
        }}
      />
    </>
  );
};

export default App;
