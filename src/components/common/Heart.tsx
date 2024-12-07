import React, { useState } from 'react';
import './heart.css'; 

type HeartProps = {
  active: () => void; 
  unactive: () => void; 
};

export const Heart: React.FC<HeartProps> = ({ active, unactive }) => {
  const [isLiked, setIsLiked] = useState(false); 
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isLiked) {
      unactive(); 
      setIsLiked(false);
    } else {
      active(); 
      setIsLiked(true); 
      setIsAnimating(true); 
      setTimeout(() => setIsAnimating(false), 1000); 
    }
  };

  return (
    <div className="heart-container" onClick={e=> {e.stopPropagation(); handleClick()}}>
      <div
        className={`heart ${isLiked ? 'liked' : ''} ${isAnimating ? 'active' : ''}`}
      ></div>
    </div>
  );
};