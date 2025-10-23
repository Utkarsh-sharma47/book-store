import React from "react";

const Cards = ({ book }) => {
  return (
    <div
      className="card bg-white w-72 sm:w-80 shadow-md mx-auto sm:mx-3 transform transition-all duration-300
      hover:scale-105 hover:shadow-2xl hover:bg-blue-50 cursor-pointer mt-6 rounded-xl"
    >
      <figure className="overflow-hidden rounded-t-xl">
        <img
          src={book.image}
          alt={book.name}
          className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 hover:scale-110"
        />
      </figure>

      <div className="card-body p-4 sm:p-5">
        <h2 className="card-title text-lg font-semibold transition-colors duration-300 hover:text-blue-600">
          {book.name}
          <div
            className="inline-block ml-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full 
  whitespace-normal break-words max-w-[150px] sm:max-w-none 
  transition-colors duration-300 hover:bg-blue-600 hover:text-white"
          >
            {book.category}
          </div>
        </h2>
        <p className="text-sm text-gray-600 mt-1">{book.title}</p>
        <div className="card-actions justify-end mt-3">
          <div className="badge badge-outline transition-all duration-300 hover:bg-blue-600 hover:text-white">
            {book.id}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
