import React from 'react'
import {
  IonCard,

  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,

  IonButton,
  IonItem,
  IonLabel
} from '@ionic/react'
import styled from 'styled-components'

import '../css/main.scss'

const Profile: React.FC = (props: any) => {

  return (
    <IonCard mode="ios" className="card-body">
      <IonCardHeader>
        <StyledSubtitle>My Profile</StyledSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonItem>
          <IonLabel color="medium">
            Name
          </IonLabel>
          Clarence Liu
        </IonItem>
        <IonItem>
          <IonLabel color="medium">
            Country
          </IonLabel>
          Canada
        </IonItem>
      </IonCardContent>
    </IonCard>
  )
}

// Note: this calls bindActionCreators automatically and calls dispatch,
// don't use this if you want to use thunk/async actions
// const mapDispatchToProps = { ActionSetDID }

export default Profile

const StyledSubtitle = styled(IonCardSubtitle)`
  font-style: italic;
  text-transform: uppercase;
`

