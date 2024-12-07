import React from "react";
import { Heart } from "../common/Heart";
import { useCart } from "../../hooks/useCart";
import { Product } from "../../types";

interface ProductDetailsProps {
  product: Product;
  productId: string;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addProduct, removeProduct } = useCart();

  const remove = (idProduct: number) =>{
    removeProduct(idProduct)
  }

  const increaseQuantity = (product: Product) => {
    addProduct(product)
  }

  return (
    <div className="flex flex-col  justify-center ">
      <h2 className="text-2xl md:text-5xl font-semibold">{product.titulo}</h2>
      <p className=" md:text-3xl font-medium">Precio: ${product.precio}</p>
      <p className=" md:text-2xl">{product.descripcion}</p>
      <Heart 
            unactive={()=> remove(product._id)}
            active={()=> increaseQuantity(product)}
          />
    </div>
  );
};
