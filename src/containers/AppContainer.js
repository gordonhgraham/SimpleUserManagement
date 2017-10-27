import { Container } from 'flux/utils'

import App from '../components/App.jsx'
import InputStore from '../data/InputStore'
import UserActions from '../data/UserActions'
import UserStore from '../data/UserStore'

function getStores() {
  return [
    InputStore,
    UserStore,
  ];
}

function getState() {
  return {
    users: UserStore.getState(),
    inputState: InputStore.getState(),
  }
}

export default Container.createFunctional(App, getStores, getState)
