//news tab
import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/Headers/SmallHeader";
import LargeHeader from "../../components/Headers/LargeHeader";
import LinkList from "../../components/Link/linkList";

const News = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Newsily" />
      <IonContent fullscreen>
        <LargeHeader title="Newsily" />
        <LinkList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default News;
