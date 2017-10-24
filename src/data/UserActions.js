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
}

export default Actions
