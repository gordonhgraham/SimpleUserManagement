import { Container } from 'flux/utils'

import App from '../components/App.jsx'
import InputStore from '../data/InputStore'
import UserActions from '../data/UserActions'
import UserStore from '../data/UserStore'

function getStores() {
  return [
    UserStore,
    InputStore,
  ];
}

function getState() {
  return {
    users: UserStore.getState(),
    inputState: InputStore.getState(),

    // onAddUser: UserActions.addUser,
    // onDeleteUser: UserActions.deleteUser,
    // onEditUser: UserActions.editUser,
    // onStartInput: UserActions.startInput,
    // onStopInput: UserActions.stopInput,
  }
}

export default Container.createFunctional(App, getStores, getState)
