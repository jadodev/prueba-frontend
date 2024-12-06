import { IonContent, IonPage } from "@ionic/react";
import { Header } from "../components/Header";
import React from "react";
import { ProductList } from "../components/ProductList";

const Home: React.FC = () => {
    return(
        <IonPage>
            <Header/>
            <IonContent fullscreen>
                <ProductList/>
            </IonContent>
        </IonPage>
    )
}

export default Home;