import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import {IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar, IonMenuToggle} from "@ionic/react"
import {contact, exit} from "ionicons/icons"
import { Link } from 'react-router-dom'

import { ActionLogout } from './store/redux/profile'

const Menu: React.FC = () => {

  const dispatch = useDispatch()

  const Menu = (<IonMenu side="start" contentId="main">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Boilerplate</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList style={{"backgroundColor": "rgba(255, 255, 255, 0.4)"}}>
        <IonMenuToggle>
          <Link to="/profile">
            <IonItem>
              <IonIcon icon={contact} slot="start"></IonIcon>
              <IonLabel>Your Profile</IonLabel>
            </IonItem>
          </Link>
        </IonMenuToggle>
        <IonMenuToggle>
          <IonItem onClick={() => {console.log('logout');dispatch(ActionLogout())}}>
            <IonIcon icon={exit} slot="start"></IonIcon>
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
  )

  return Menu
}


// this gets spread directly on props
const mapStateToProps = (state, ownProps) => {
  return {profile: state.profile}
}

export default connect(mapStateToProps)(Menu)
