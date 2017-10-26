import { ReduceStore } from 'flux/utils'

import UserActionTypes from './UserActionTypes'
import UserDispatcher from './UserDispatcher'

class InputStore extends ReduceStore {
  constructor() {
    super(UserDispatcher)
  }

  getInitialState() {
    return ['', false]
  }

  reduce(state, action) {
    switch (action.type) {
      case UserActionTypes.START_INPUT:
        return [action.id, true];

      case UserActionTypes.STOP_INPUT:
        return ['', false]

      default:
        return state;
    }
  }
}

export default new InputStore()
