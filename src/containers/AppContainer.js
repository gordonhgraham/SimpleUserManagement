import { Container } from 'flux/utils'

import App from '../components/App.jsx'
import UserActions from '../data/UserActions'
import UserStore from '../data/UserStore'

function getStores() {
  return [
    UserStore,
  ];
}

function getState() {
  return {
    users: UserStore.getState(),
  }
}

export default Container.createFunctional(App, getStores, getState)
