import React from "react";

const fallbackImage =
  "https://images.unsplash.com/photo-1528209392026-4a51d5d5e26b?auto=format&fit=crop&w=400&q=80"; // id 2 image

const Cards = ({ book }) => {
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div
      className="card flex flex-col justify-between bg-white shadow-md rounded-xl 
      transition-all duration-300 hover:shadow-lg hover:scale-[1.02] 
      mx-3 my-4 h-[420px] max-w-xs"
    >
      {/* Image */}
      <figure className="overflow-hidden rounded-t-xl h-56">
        <img
          src={book.image}
          alt={book.name}
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body flex flex-col justify-between p-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 flex flex-wrap items-center">
            {book.name}
            <span
              className="ml-2 px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full 
              max-w-[150px] truncate"
            >
              {book.category}
            </span>
          </h2>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{book.title}</p>
        </div>

        <div className="flex justify-end mt-3">
          <div className="badge badge-outline text-gray-700">{book.id}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
