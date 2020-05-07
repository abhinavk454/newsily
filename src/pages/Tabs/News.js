import React from "react";
import { IonPage,IonContent } from "@ionic/react";
import SmallHeader from "../../components/Headers/SmallHeader";
import LargeHeader from "../../components/Headers/LargeHeader";

const News=()=>{
    return(
        <IonPage>
            <SmallHeader title="news"/>
            <IonContent fullscreen>
                <LargeHeader title="news"/>
            </IonContent>
        </IonPage>
    );
};

export default News;