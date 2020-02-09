import React, { useState, useEffect } from "react"
import {
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonToolbar,
  IonPopover,

  IonList,
  IonListHeader,
  IonButton,
  IonLabel,

  IonAlert

} from "@ionic/react"
import {addCircle} from "ionicons/icons"
import { useHistory } from 'react-router-dom'

const Header: React.FC = (props) => {

  let history = useHistory()
  const [showPopover, setShowPopover] = useState(false)
  const [showPlaceholder, setShowPlaceholder] = useState(false)

  const Header = (<IonHeader className={'header-main'}>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
      <IonButtons slot="end">
        <IonPopover
          isOpen={showPopover}
          onDidDismiss={e => setShowPopover(false)}
        >
          <IonList>
            <IonListHeader>
              <IonLabel color="medium">
                Create
              </IonLabel>
            </IonListHeader>

            {/* Clicking New Certificate replaces the location with the Certificate List, then opens the modeal */}
            <IonButton color="secondary" expand="block" onClick={() => {
              history.replace('/list')
              setShowPopover(false)
              // setShowModal(true)
            }}>
              New Item A
            </IonButton>
            <IonButton color="secondary" expand="block" onClick={() => {
              setShowPopover(false)
              setShowPlaceholder(true)
            }}>
              Add Item B
            </IonButton>
            <IonButton color="light" expand="block" onClick={() => setShowPopover(false)}>
              Close
            </IonButton>
          </IonList>
        </IonPopover>
        <IonIcon icon={addCircle} size="large" onClick={() => setShowPopover(true)}/>
      </IonButtons>
    </IonToolbar>

    <IonAlert
      isOpen={showPlaceholder}
      onDidDismiss={() => setShowPlaceholder(false)}
      message="Not Available in Demo"
    />
  </IonHeader>)

  return Header
}

export default Header
