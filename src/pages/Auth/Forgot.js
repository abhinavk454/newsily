import React from "react";
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonRow, IonCol, IonButton } from "@ionic/react";
import NavHeader from "../../components/Headers/NavHeader";

const Forgot=()=>{
    return(
        <IonPage>
            <NavHeader title="Reset Password"/>
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="email" type="email" required></IonInput>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton color="primary" type="submit" expand="block">
                            Send password reset email
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
};

export default Forgot;