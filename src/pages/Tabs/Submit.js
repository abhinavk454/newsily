import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import LargeHeader from "../../components/Headers/LargeHeader";
import SmallHeader from "../../components/Headers/SmallHeader";

const Submit=()=>{
    return(
        <IonPage>
            <SmallHeader title="submit"/>
            <IonContent fullscreen>
                <LargeHeader title="submit"/>
            </IonContent>
        </IonPage>
    );
};

export default Submit;