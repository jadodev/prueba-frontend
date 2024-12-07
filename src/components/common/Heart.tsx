import React, { useState } from 'react';
import { Product } from "../../types";
import './heart.css';

type HeartProps = {
  product: Product;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void; 
};

export const Heart: React.FC<HeartProps> = ({ product, addProduct, removeProduct }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isLiked) {
      console.log("Removed")
      removeProduct(product._id); 
      setIsLiked(false);
    } else {
      addProduct(product);
      setIsLiked(true);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <div className="heart-container" onClick={handleClick}>
      <div
        className={`heart ${isLiked ? 'liked' : ''} ${isAnimating ? 'active' : ''}`}
      ></div>
    </div>
  );
};
