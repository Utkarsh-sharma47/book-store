import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FileList from "../data/list.json";
import Cards from "./Cards";

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
  // Replace broken or missing images
  const validData = FileList.map((item) => ({
    ...item,
    image:
      item.image && item.image.startsWith("http")
        ? item.image
        : "https://images.unsplash.com/photo-1528209392026-4a51d5d5e26b?auto=format&fit=crop&w=400&q=80",
  }));

  const filterData = validData.filter((item) => item.category === "Free");

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
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-8 my-10">
      {/* Header */}
      <div className="text-center md:text-left mb-8">
        <h1 className="font-semibold text-3xl text-gray-800">Free Courses</h1>
        <p className="text-gray-600 text-sm md:text-base mt-1">
          Explore our handpicked collection of free learning resources.
        </p>
      </div>

      {/* Slider */}
      <div className="slider-container relative">
        <Slider {...settings}>
          {filterData.map((book) => (
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
