import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonContent,
  IonPage,
  IonSplitPane,

  IonFab,
  IonFabButton
} from '@ionic/react'
import {
  qrScanner
} from 'ionicons/icons'

import Menu from './Menu'
import Header from './Header'

import Home from './pages/Home'
import Profile from './pages/Profile'

import { connect, useDispatch } from 'react-redux'

import { ActionSetDID, ActionSetInfo, ActionLoggingIn, ProfileState } from './store/redux/profile'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App: React.FC = (props: any) => {

  const profile = (props.profile as ProfileState)

  return (
    <IonApp>
      <IonSplitPane contentId="main">

        <Menu/>

        <IonPage id="main">
          <Header/>
          <IonContent className="app">
            <Switch>
              <Route path="/home" component={Home} exact={true}/>
              <Route path="/profile" component={Profile} exact={true}/>
              <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            </Switch>

            <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton color="secondary">
                <IonIcon icon={qrScanner} size="large"></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    </IonApp>
  )
}

export default App
