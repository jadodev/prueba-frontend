import React from "react";
import { Heart } from "../common/Heart";
import { useCart } from "../../hooks/useCart";
import { Product } from "../../types";
import { IonButton } from "@ionic/react";

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
    <div className="flex flex-col  justify-center relative ">
      <h2 className="text-2xl md:text-5xl font-semibold">{product.titulo}</h2>
      <p className="md:text-3xl font-medium">
        <span className="line-through text-gray-500 mr-2">Precio ${product.precio}</span>
        <br></br>
        <span className="text-green-500 font-semibold">
          {` ${4}% Descuento `}
        </span>
        <span className="font-medium">
          ${(Number(product.precio) * 0.96).toLocaleString() }
        </span>
      </p>
      <p className=" md:text-2xl text-dark-gray">{product.descripcion}</p>
      <IonButton size="default" fill="clear" shape="round" color="primary" onClick={() => addProduct(product)}>
        <p>Agregar producto</p>
          <Heart 
            unactive={() => remove(product._id)}
            active={() => addProduct(product)}
          />
      </IonButton>
      
    </div>
  );
};
