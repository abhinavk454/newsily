import React from "react";
import { IonHeader, IonToolbar, IonButton, IonBackButton, IonTitle } from "@ionic/react";

const NavHeader=({title})=>{
    return(
    <IonHeader>
        <IonToolbar color="primary">
            <IonButton slot="start">
                <IonBackButton defaultHref="/"/>
            </IonButton>
            <IonTitle>{title}</IonTitle>
        </IonToolbar>
    </IonHeader>
    );
};

export default NavHeader;