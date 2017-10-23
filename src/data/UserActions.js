import UserActionTypes from './UserActionTypes'
import UserDispatcher from './UserDispatcher'

const Actions = {
  addUser(firstName, lastName, address) {
    UserDispatcher.dispatch({
      type: UserActionTypes.ADD_USER,
      firstName,
      lastName,
      address,
    })
  },

  deleteUser(id) {
    UserDispatcher.dispatch({
      type: UserActionTypes.DELETE_USER,
      id,
    })
  },

  editUser(firstName, lastName, address) {
    UserDispatcher.dispatch({
      type: UserActionTypes.EDIT_USER,
      firstName,
      lastName,
      address,
    });
  },
}

export default Actions
