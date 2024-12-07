import React, { useState } from "react";
import "./carousel.css";

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className=" flex items-center w-full ">
      <button onClick={prevImage} className="carousel-btn">
        &#8592;
      </button>
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden lg:h-[600px]">
        <div
          className={`w-[300px] xl:w-[800px] flex transition-transform duration-500 ease-in-out mx-auto bg-light-gray`}
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[285px] xl:w-[800px] flex-shrink-0"
            >
              <img
                src={image}
                alt={`Imagen del producto ${index + 1}`}
                className="bg-light-gray"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextImage} className="carousel-btn">
        &#8594;
      </button>
    </div>
  );
};
