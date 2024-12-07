import React from "react";
import { IonIcon } from "@ionic/react";
import { cartOutline } from "ionicons/icons";
import { useCart } from "../../hooks/useCart";

export const Cart: React.FC = () => {
  const { getProductCount } = useCart();

  return (
    <div className="flex items-center rounded-full w-8 md:w-16 h-8 md:h-16 justify-center relative">
      <IonIcon
        icon={cartOutline}
        className="w-6 h-6 md:w-10 md:h-10"
      />
      {getProductCount() > 0 && (
        <span className="absolute top-0 right-0 text-white bg-coral-pink rounded-full text-xs md:text-lg px-1 md:px-2">
          {getProductCount()}
        </span>
      )}
    </div>
  );
};
