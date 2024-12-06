import React from "react";
import { Product } from "../types";


interface ProductDetailsProps {
  product: Product;
  productId: string;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, productId }) => {
  return (
    <div className="flex flex-col justify-center md:gap-y-2  lg:w-3/5 md:mx-auto md:px-8 md:py-8">
      <h2 className="text-2xl md:text-5xl font-semibold">{product.titulo}</h2>
      <p className="mt-2 md:text-3xl font-medium">Precio: ${product.precio}</p>
      <p className="mt-4 md:text-2xl">{product.descripcion}</p>
      <button className="mr-auto flex items-center rounded-full justify-center mt-10 px-8 ml-auto gap-x-4 relative">
        <div className="flex items-center relative">
        </div>
        <span className="flex text-center items-center text-base md:text-2xl ">Agregar a Favoritos</span>
      </button>
    </div>
  );
};
