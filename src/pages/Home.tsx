import React from 'react'
import {
  IonCard, IonCardHeader, IonCardSubtitle
} from '@ionic/react'

import '../css/main.scss'

const Home: React.FC = (props: any) => {

  return (
    <IonCard mode="ios" className="card-body">
      <IonCardHeader>
        <IonCardSubtitle>Home</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  )
}

export default Home

