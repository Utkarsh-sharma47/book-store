import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center px-4 md:px-16 py-8">
      {/* LEFT - Text Content */}
      <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
          Hello! Learn Everything Here
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime accusamus voluptatem explicabo. At laborum reprehenderit, aliquam provident excepturi officiis voluptas modi.
        </p>

        {/* Input Email area */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md md:max-w-lg mx-auto md:mx-0">
          <label className="flex items-center gap-2 bg-white text-black rounded-lg px-3 py-2 w-full shadow-sm">
            <svg
              className="h-5 w-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              className="bg-white text-black outline-none w-full"
            />
          </label>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition w-full sm:w-auto">
            Join
          </button>
        </div>
      </div>

      {/* RIGHT - Image Section */}
      <div className="w-full md:w-1/2 p-4 md:p-5 flex justify-center mb-8 md:mb-0">
        <img
          src="/image.jpg"
          alt="Banner"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Banner;
