import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth
    setAuthUser(null);
    localStorage.removeItem("user");

    // Show toast and get its id
    const id = toast.success("Logged out successfully 👋", { duration: 2000 });

    // Ensure toast is dismissed and then navigate
    setTimeout(() => {
      // defensively dismiss the same toast id
      toast.dismiss(id);
      // navigate to home or signup
      navigate("/signup");
    }, 2000);
  };

  return (
    <div>
      {/* Keep styling identical to your Login button */}
      <button
        onClick={handleLogout}
        className="btn btn-sm bg-red-500 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
