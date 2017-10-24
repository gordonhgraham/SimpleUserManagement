import UserActionTypes from './UserActionTypes'
import UserDispatcher from './UserDispatcher'

const Actions = {
  addUser({firstName, lastName, address}) {
    UserDispatcher.dispatch({
      type: UserActionTypes.ADD_USER,
      firstName,
      lastName,
      address,
    })
  },

  toggleInput() {
    UserDispatcher.dispatch({
      type: UserActionTypes.TOGGLE_INPUT,
    })
  }
}

export default Actions
