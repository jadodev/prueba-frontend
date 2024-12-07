import { IonContent, IonItem, IonLabel, IonSkeletonText } from "@ionic/react";
import React from "react";

export const Skeleton: React.FC = () => {
   return(
    <IonContent>
    <IonItem>
      <IonLabel>
        <h2>
          <IonSkeletonText animated style={{ width: '80%' }} />
        </h2>
        <p>
          <IonSkeletonText animated style={{ width: '60%' }} />
        </p>
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonSkeletonText animated style={{ width: '40%' }} />
    </IonItem>
  </IonContent>
   )
}