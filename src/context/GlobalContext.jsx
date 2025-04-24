import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [swiperImages] = useState([
    {
      id: 1,
      src: "./Swiper/IMG_7043.JPG", // Changed .jpg to .JPG
      alt: "Makeup Look 1",
    },
    {
      id: 2,
      src: "./Swiper/IMG_7051.JPG",
      alt: "Makeup Look 2",
    },
    {
      id: 3,
      src: "./Swiper/IMG_7063.JPG",
      alt: "Makeup Look 3",
    },
    {
      id: 4,
      src: "./Swiper/IMG_7066.JPG",
      alt: "Makeup Look 4",
    },
    {
      id: 5,
      src: "./Swiper/IMG_7077.JPG",
      alt: "Makeup Look 5",
    },
    {
      id: 6,
      src: "./Swiper/IMG_7084.PNG",
      alt: "Makeup Look 6",
    },
    {
      id: 7,
      src: "./Swiper/IMG_7087.JPG",
      alt: "Makeup Look 7",
    },
    {
      id: 8,
      src: "./Swiper/IMG_7090.JPG",
      alt: "Makeup Look 8",
    },
  ]);

  console.log("GlobalContext images:", swiperImages); // Debug log

  const value = {
    swiperImages,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export default GlobalContext;
