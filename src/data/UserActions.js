import UserActionTypes from './UserActionTypes'
import UserDispatcher from './UserDispatcher'

const Actions = {
  addUser(user) {
    UserDispatcher.dispatch({
      type: UserActionTypes.ADD_USER,
      user,
    })
  },

  deleteUser(id) {
    UserDispatcher.dispatch({
      type: UserActionTypes.DELETE_USER,
      id,
    })
  },

  editUser(id, user) {
    UserDispatcher.dispatch({
      type:UserActionTypes.EDIT_USER,
      id,
      user,
    })
  },

  startDelete(user) {
    UserDispatcher.dispatch({
      type: UserActionTypes.START_DELETE,
      user,
    })
  },

  stopDelete() {
    UserDispatcher.dispatch({
      type: UserActionTypes.STOP_DELETE,
    })
  },

  startInput(id = '') {
    UserDispatcher.dispatch({
      type: UserActionTypes.START_INPUT,
      id,
    })
  },

  stopInput() {
    UserDispatcher.dispatch({
      type: UserActionTypes.STOP_INPUT,
    })
  },
}

export default Actions
