import React from "react";
import List from "../data/List";
import Cards from "../components/Cards"; // ✅ Make sure the path is correct

const Course = () => {
  return (
    <>
      <div className="bg-whit  text-black p-6 rounded-lg shadow-sm min-h-screen">
        <h1 className="w-full text-3xl md:text-4xl dark:text-white font-bold mb-4 text-center">
          Welcome to Our <span className="text-pink-500">Learning Space</span>
        </h1>

        <p className="w-full text-base md:text-lg dark:text-gray-300 text-gray-700 mb-6 px-4 sm:px-8 md:px-20 lg:px-40 text-center">
          Explore a variety of courses designed to help you grow your skills and knowledge. 
          Whether you’re just starting out or looking to specialize, we’ve got something for you. 
          Learn at your own pace, anytime and anywhere.
        </p>

        {/* ✅ Course Cards Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {List && List.length > 0 ? (
            List.map((book) => (
              <Cards key={book.id} book={book} />
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">No courses available yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Course;
