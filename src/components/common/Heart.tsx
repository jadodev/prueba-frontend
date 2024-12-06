import React, { useState } from 'react';
import { Product } from "../../types";
import './heart.css';

type HeartProps = {
  product: Product;
  addProduct: (product: Product) => void; // Método para agregar producto
  removeProduct: (id: number) => void; // Método para eliminar producto
};

export const Heart: React.FC<HeartProps> = ({ product, addProduct, removeProduct }) => {
  const [isLiked, setIsLiked] = useState(false); // Estado para el ícono
  const [isAnimating, setIsAnimating] = useState(false); // Estado para animación

  const handleClick = () => {
    if (isLiked) {
      console.log("Removed")
      removeProduct(product._id); // Llama al método de eliminación
      setIsLiked(false); // Cambia el estado a inactivo
    } else {
      addProduct(product); // Llama al método de adición
      setIsLiked(true); // Cambia el estado a activo
      setIsAnimating(true); // Activa la animación
      setTimeout(() => setIsAnimating(false), 1000); // Desactiva animación después de 1s
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

// en pantallas medianas y pequenias el corazon ocupa mucho espacio en el producto (el icono esta muy pequenio) 