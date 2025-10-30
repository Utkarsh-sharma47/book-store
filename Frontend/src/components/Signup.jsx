import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ Signup success handler
  const onSubmit = (data) => {
    const toastId = toast.success("Account created successfully! 🎉", {
      duration: 2000, // Auto close in 2 seconds
    });

    // Wait for toast to finish, then redirect to login page
    setTimeout(() => {
      toast.dismiss(toastId);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-300 transition-colors">
      <Toaster position="top-center" />

      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-96 transition-colors">
        <h2 className="text-2xl font-semibold text-center text-indigo-600 dark:text-indigo-400 mb-6">
          Create Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 
              bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-gray-100 transition-colors ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 
              bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-gray-100 transition-colors ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 
              bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-gray-100 transition-colors ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>

        {/* ✅ Return Home & Login Options */}
        <div className="text-center mt-5 space-y-2">
          <button
            onClick={() => navigate("/")}
            className="block w-full text-indigo-500 dark:text-indigo-400 hover:underline font-medium"
          >
            ← Return to Home
          </button>

          <button
            onClick={() => navigate("/login")}
            className="block w-full text-indigo-500 dark:text-indigo-400 hover:underline font-medium"
          >
            Already have an account? Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
