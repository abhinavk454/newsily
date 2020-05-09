import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import LargeHeader from "../../components/Headers/LargeHeader";
import SmallHeader from "../../components/Headers/SmallHeader";

const Submit = () => {
  return (
    <IonPage>
      <SmallHeader title="Submit" />
      <IonContent fullscreen>
        <LargeHeader title="Submit" />
      </IonContent>
    </IonPage>
  );
};

export default Submit;
