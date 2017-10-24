import { ReduceStore } from 'flux/utils'

import UserActionTypes from './UserActionTypes'
import UserDispatcher from './UserDispatcher'

class InputStore extends ReduceStore {
  constructor() {
    super(UserDispatcher)
  }

  getInitialState() {
    return false;
  }

  reduce(state, action) {
    switch (action.type) {
      case UserActionTypes.TOGGLE_INPUT:
        return !state;

      default:
        return state;
    }
  }
}

export default new InputStore()


//initial state, open: bool, id: '', title: if id == '' NEW else EDIT
