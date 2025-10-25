import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    document.getElementById("my_modal_3").close();
    navigate("/signup");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // When form is submitted successfully
  const onSubmit = (data) => {
    console.log("Login Data:", data);
    document.getElementById("my_modal_3").close();
    navigate("/"); // redirect to home
  };

  return (
    <div>
      {/* Hidden trigger button (Navbar opens modal) */}
      <button
        className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-700 hidden"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button>

      {/* LOGIN MODAL */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-gray-100 rounded-xl shadow-lg">
          {/* Close button */}
          <button
            onClick={() => document.getElementById("my_modal_3").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
          >
            ✕
          </button>

          {/* Title */}
          <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-400 text-center mb-4">
            Welcome Back!
          </h3>

          {/* ✅ Main Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-4 text-gray-400 text-sm">OR</div>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <span
              onClick={handleSignup}
              className="text-indigo-500 hover:underline cursor-pointer font-medium"
            >
              Sign up
            </span>
          </p>
        </div>

        {/* Click outside to close modal */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Login;
