import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import ImageModal from './ImageModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageSlider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full px-4 sm:px-0">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation={{
          enabled: false,
          hideOnClick: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            navigation: {
              enabled: false,
            },
          },
          768: {
            slidesPerView: 2,
            navigation: {
              enabled: true,
            },
          },
          1024: {
            slidesPerView: 3,
            navigation: {
              enabled: true,
            },
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-[400px] !pb-8"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="flex items-center justify-center px-2 sm:px-0">
            <div className="aspect-square w-[250px] sm:w-[300px] overflow-hidden rounded-lg shadow-2xl">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default ImageSlider;
