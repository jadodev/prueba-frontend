import React, { useState } from "react";
import { CartItem as ICartItem, Product } from "../../types";
import { useCart } from "../../hooks/useCart";
import { AddQuantity } from "./ButtonAddQuantity";
import { IonButton } from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

interface CartItemProps {
  product: ICartItem;
  fallbackSrc?: string;
}

export const CartItem: React.FC<CartItemProps> = ({ product, fallbackSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false); 
  const { removeProduct, addProduct, decreaseProductQuantity } = useCart();

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    if (fallbackSrc) {
      setIsLoaded(true);
    }
  };

  const increaseProduct = (product: Product)=> {
    addProduct(product)
  }

  const decreaseProduct = (idProduct: number) => {
    decreaseProductQuantity(idProduct)
  }

  return (
    <div
      className={`relative flex items-center gap-7 rounded-md border-gray-200 bg-light-gray py-2 px-4 w-full md:w-full transition-all duration-300 ease-in-out ${
        isRemoving ? "opacity-0 translate-x-10" : "" 
      }`}
    >
      <button
        className="absolute top-2 right-2 border md:bg-gray-300/50 bg-light-gray w-8 h-8 rounded-full hover:bg-red-500 flex items-center justify-center"
        aria-label={`Eliminar ${product.titulo} de favoritos`}
      >
        <IonButton 
          fill="clear"
          onClick={()=>removeProduct(product._id)}
          >
            <IonIcon icon={closeOutline}/>
      </IonButton>
      </button>

      
    
      <div className="relative w-[300px] h-[150px] md:w-[300px] md:h-[200px]">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-light-gray animate-pulse rounded-lg"></div>
        )}
        <img
          src={hasError && fallbackSrc ? fallbackSrc : product.imagen}
          alt={product.titulo}
          className={`w-full h-full aspect-ratio rounded-lg transition-opacity duration-500 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      </div>
    
      <div className="flex flex-col gap-2 md:gap-4 w-2/3">
        <h3 className="font-semibold text-lg md:text-xl truncate">{product.titulo}</h3>

        <div className="flex items-center gap-2">
          <p className="hidden md:block text-lg">Precio: </p>
          <p className="font-medium text-lg md:text-xl">${product.precio}</p>
        </div>

        <p className="text-sm md:text-lg truncate">
          Guardado en:{" "}
          {product.savedAt ? new Date(product.savedAt).toLocaleString() : "Fecha no disponible"}
        </p>

        <AddQuantity 
          count={product.cantidad}
          increase={()=> increaseProduct(product)}
          decrease={()=> decreaseProduct(product._id)}
        />
      </div>
    </div>
  );
};
