import React from "react";
import { IonPage,IonContent } from "@ionic/react";
import LargeHeader from "../../components/Headers/LargeHeader";
import SmallHeader from "../../components/Headers/SmallHeader";

const Profile=()=>{
    return(
        <IonPage>
            <SmallHeader title="profile"/>
            <IonContent fullscreen>
                <LargeHeader title="profile"/>
            </IonContent>
        </IonPage>
    );
};

export default Profile;