import { Container } from 'flux/utils'

import App from '../components/App'
import UserActions from '../data/UserActions'
import UserStore from '../data/UserStore'

function getStores() {
  return [
    UserStore,
  ];
}

function getState() {
  return ({
    users: UserStore.getState(),

    onAddUser: UserActions.addUser,
    onDeleteUser: UserActions.deleteUser,
    onEditUser: UserActions.editUser,
  })
}

export default Container.createFunctional(App, getStores, getState)
