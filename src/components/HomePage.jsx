import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import ImageSlider from "./ImageSlider";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { swiperImages } = useGlobalContext();

  return (
    <div className="relative w-full mx-auto">
      <div className="max-w-7xl mx-auto px-12 py-8">
        <div className="text-center mb-16">
          <h1 className="font-['Playfair_Display'] text-6xl font-bold text-gray-800 mb-4 tracking-wide">
            Vanessa Sacchetto
          </h1>
          <p className="font-['Poppins'] text-xl text-pink-500/80 uppercase tracking-widest">
            Professional Makeup Artist
          </p>
        </div>
        <ImageSlider images={swiperImages} />
        <div className="text-center mt-12 mb-16">
          <Link
            to="/detail"
            className="inline-block bg-pink-500 text-white px-12 py-4 rounded-full hover:bg-pink-600 
            transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg font-['Poppins'] 
            tracking-wider relative overflow-hidden border-2 border-pink-300 
            before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] 
            hover:before:translate-x-[100%] before:transition-transform before:duration-500"
          >
            More About Me
          </Link>
        </div>
      </div>

      <Gallery />
    </div>
  );
};

export default HomePage;
