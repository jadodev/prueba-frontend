import React from "react"
import { IonContent, IonPage } from "@ionic/react"
import ProductInfoComponent from "../components/product/ProductInfoComponent"

const ProductInfo: React.FC = ( ) => {
  return(
    <IonPage>
      <IonContent>
        <ProductInfoComponent/>
      </IonContent>
    </IonPage>
  )
}

export default ProductInfo