import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/Headers/SmallHeader";
import LargeHeader from "../../components/Headers/LargeHeader";

const Search=()=>{
    return(
        <IonPage>
            <SmallHeader title="search"/>
            <IonContent fullscreen>
                <LargeHeader title="search"/>
            </IonContent>
        </IonPage>
    );
};

export default Search;