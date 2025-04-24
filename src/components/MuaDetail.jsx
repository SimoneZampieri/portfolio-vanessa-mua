import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const MuaDetail = () => {
  const profileImages = [
    { src: "./profile/profile1.jpg", alt: "Vanessa Sacchetto Profile 1" },
    { src: "./profile/profile2.jpg", alt: "Vanessa Sacchetto Profile 2" },
    { src: "./profile/profile3.jpg", alt: "Vanessa Sacchetto Profile 3" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-full"
            >
              {profileImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-pink-50 w-48 h-48 rounded-full -z-10"></div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div>
            <h1 className="font-['Playfair_Display'] text-4xl font-bold text-gray-800 mb-3">
              About Me
            </h1>
            <div className="w-24 h-1 bg-pink-500/60"></div>
          </div>

          <div className="font-['Poppins'] text-gray-600 space-y-4 leading-relaxed">
            <p>
              My name is Vanessa Sacchetto, I'm 22 years old and a passionate,
              ambitious makeup artist and hair stylist.
            </p>

            <p>
              My love for the world of beauty and aesthetics inspired me to
              pursue professional training at MUD Studio in Milan, where I
              graduated in 2023.
            </p>

            <p>
              During my time at MUD, I had the opportunity to master
              cutting-edge techniques and collaborate with experienced industry
              professionals. This journey gave me a strong foundation in both
              the theoretical and practical aspects of makeup and hairstyling.
            </p>

            <p>
              Today, I express my creativity and passion through every project I
              take on, always striving to enhance each person's natural beauty
              with a unique and artistic touch.
            </p>
          </div>

          {/* Contact Section */}
          <div className="pt-6">
            <h2 className="font-['Playfair_Display'] text-2xl font-semibold text-gray-800 mb-4">
              Contact Me
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="https://instagram.com/vanessa_sacchetto_mua"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={24} />
                <span className="font-['Poppins'] text-sm sm:text-base">@vanessa_sacchetto_mua</span>
              </a>
              <a
                href="mailto:vanessasacchetto@icloud.com"
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition-colors"
              >
                <MdEmail size={24} />
                <span className="font-['Poppins'] text-sm sm:text-base">
                  vanessasacchetto@icloud.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuaDetail;
