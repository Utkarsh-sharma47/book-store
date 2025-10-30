import React from "react";
import axios from "axios";
import Cards from "../components/Cards"; // ✅ Make sure the path is correct
import { useState, useEffect } from "react";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res= await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-gray-300 p-6 rounded-lg shadow-sm min-h-screen">
        <h1 className="w-full text-3xl md:text-4xl dark:text-white font-bold mb-4 text-center">
          Welcome to Our <span className="text-pink-500">Learning Space</span>
        </h1>

        <p className="w-full text-base md:text-lg dark:text-gray-300 text-gray-700 mb-6 px-4 sm:px-8 md:px-20 lg:px-40 text-center">
          Explore a variety of courses designed to help you grow your skills and
          knowledge. Whether you’re just starting out or looking to specialize,
          we’ve got something for you. Learn at your own pace, anytime and
          anywhere.
        </p>

        {/* ✅ Course Cards Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {book && book.length > 0 ? (
            book.map((book) => <Cards key={book.id} book={book} />)
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No courses available yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Course;
