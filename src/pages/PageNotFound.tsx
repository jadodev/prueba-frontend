import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import { NotFound } from "../components/exception/NotFound"

const PageNotFount: React.FC = () => {
    return(
        <IonPage>
            <IonContent>
                <NotFound/>
            </IonContent>
        </IonPage>
    )
}

export default PageNotFount