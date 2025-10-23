import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FileList from '../data/list.json';
import Cards from './Cards';

// Custom Arrow Components
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !flex !items-center !justify-center !bg-gray-300 hover:!bg-gray-400 
      !rounded-full !w-10 !h-10 !z-10 !right-3`}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right text-white"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !flex !items-center !justify-center !bg-gray-300 hover:!bg-gray-400 
      !rounded-full !w-10 !h-10 !z-10 !left-3`}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-left text-white"></i>
    </div>
  );
};

const Freebook = () => {
  const filterData = FileList.filter(item => item.category === 'Free');

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: true },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-8 my-10">
      {/* Header */}
      <div className="text-center md:text-left mb-6">
        <h1 className="font-semibold text-2xl md:text-3xl text-gray-800">Free Courses</h1>
        <p className="text-gray-600 text-sm md:text-base">
          Explore our handpicked collection of free learning resources.
        </p>
      </div>

      {/* Slider Section */}
      <div className="slider-container relative">
        <Slider {...settings}>
          {filterData.map((book) => (
            <Cards key={book.id} book={book} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
