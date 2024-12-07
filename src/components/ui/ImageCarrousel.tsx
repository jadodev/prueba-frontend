import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ImageCarouselProps {
  images: string[] | undefined;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="w-full">
      <Swiper
        modules={[Thumbs, Navigation]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="main-swiper w-full"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center w-full h-[50vh] sm:h-[70vh] lg:h-[50vh] overflow-hidden">
              <img
                src={image}
                alt={`Imagen del producto ${index + 1}`}
                className="object-contain max-w-full max-h-full"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress
        className="thumbs-swiper w-full mt-2"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center w-full h-[100px] overflow-hidden">
              <img
                src={image}
                alt={`Miniatura del producto ${index + 1}`}
                className="object-cover max-w-full max-h-full rounded-md border border-gray-300 cursor-pointer transition-transform transform hover:scale-110"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
