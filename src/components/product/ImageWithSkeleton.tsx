import React, { useState } from "react";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({ src, alt, fallbackSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true); 
    if (fallbackSrc) {
      setIsLoaded(true); 
    }
  };

  return (
    <div className="relative w-[100px] h-[100px] md:w-[280px] md:h-[280px] overflow-hidden">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
      )}

      <img
        src={hasError && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};
