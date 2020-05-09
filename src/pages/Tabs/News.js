import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/Headers/SmallHeader";
import LargeHeader from "../../components/Headers/LargeHeader";

const News = () => {
  return (
    <IonPage>
      <SmallHeader title="News" />
      <IonContent fullscreen>
        <LargeHeader title="News" />
      </IonContent>
    </IonPage>
  );
};

export default News;
