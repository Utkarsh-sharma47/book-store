import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";

// Custom Arrows
const NextArrow = ({ className, onClick }) => (
  <div
    className={`${className} !flex !items-center !justify-center 
    !bg-gray-500 hover:!bg-gray-600 !rounded-full 
    !w-9 !h-9 !z-10 !right-2 md:!right-3 
    !shadow-lg cursor-pointer transition-all duration-200`}
    onClick={onClick}
  >
    <i className="fa-solid fa-chevron-right text-white text-sm"></i>
  </div>
);

const PrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} !flex !items-center !justify-center 
    !bg-gray-500 hover:!bg-gray-600 !rounded-full 
    !w-9 !h-9 !z-10 !left-2 md:!left-3 
    !shadow-lg cursor-pointer transition-all duration-200`}
    onClick={onClick}
  >
    <i className="fa-solid fa-chevron-left text-white text-sm"></i>
  </div>
);

const Freebook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res= await axios.get("http://localhost:4001/book");
        console.log(res.data);
        const data = res.data.filter((item) => item.category === "Free");
        setBook(data);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);
 

  // const filterData = validData.filter((item) => item.category === "Free"); FRONTEND ONLY SHOW 

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true, // ✅ keep arrows on tablets
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true, // ✅ keep arrows even on small phones
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container dark:bg-gray-900 dark:text-gray-300 mx-auto px-4 md:px-8 my-10">
      {/* Header */}
      <div className="text-center md:text-left mb-8">
        <h1 className="font-semibold text-3xl text-gray-800 dark:text-white">Free Courses</h1>
        <p className="text-gray-600 text-sm md:text-base mt-1 dark:text-gray-300">
          Explore our handpicked collection of free learning resources.
        </p>
      </div>

      {/* Slider */}
      <div className="slider-container relative">
        <Slider {...settings}>
          {book.map((book) => (
            <div key={book.id} className="flex justify-center">
              <Cards book={book} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
