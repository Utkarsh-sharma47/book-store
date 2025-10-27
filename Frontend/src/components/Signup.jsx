import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./Login";
import toast, { Toaster } from "react-hot-toast"; // ✅ import correctly

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      // ✅ Show loading toast
      const signupPromise = axios.post("http://localhost:4001/user/signup", userInfo);

      // ✅ Use toast.promise for better UX
      const response = await toast.promise(
        signupPromise,
        {
          loading: "Creating your account...",
          success: "Signup successful! 🎉",
          error: "Signup failed. Please try again.",
        },
        { position: "top-center" }
      );

      if (response.status === 201) {
        const user = response.data.user;

        // Save user info locally
        localStorage.setItem("user", JSON.stringify(user));

        reset();

        // Redirect to homepage after short delay
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.response?.data?.message || "Signup failed. Please try again.", {
        position: "top-center",
      });
    }
  };

  const openLoginModal = () => {
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      {/* 🔔 Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-indigo-600 dark:text-indigo-400 mb-6">
          Create an Account
        </h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <button
            onClick={openLoginModal}
            className="text-indigo-500 hover:underline font-medium"
          >
            Login
          </button>
        </p>

        {/* Login Modal */}
        <Login />
      </div>
    </div>
  );
};

export default Signup;
