import React from "react";
import { IonButton } from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";

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
  