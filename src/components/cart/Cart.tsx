import React from "react";
import { IonButton } from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { addOutline, cartOutline, removeOutline } from "ionicons/icons";

interface AddQuantityProps {
  count: number;
  decrease: ()=> void;
  increase: ()=> void;
}

export const AddQuantity: React.FC<AddQuantityProps> = ({count, decrease, increase}) => {
    return (
      <section className="flex rounded-lg focus:outline-none md:active:border-blue-800 border-solid border-2  md:w-[10rem] md:h-[2rem] gap-0 justify-around content-center items-center w-[8rem] h-auto">
        <IonButton 
          onClick={decrease} 
          fill="clear"
          >
          <IonIcon icon={removeOutline}/>
        </IonButton>
        <p>{count}</p>
        <IonButton 
          onClick={increase} 
          fill="clear"
          >
            <IonIcon icon={addOutline}/>
        </IonButton>
      </section>
    );
  };
  import { useCart } from "../../hooks/useCart";

export const Cart: React.FC = () => {
  const { cart: cartList, getProductCount } = useCart();

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
