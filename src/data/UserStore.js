import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'

import Counter from './Counter'
import User from './User'
import UserActionTypes from './UserActionTypes'
import UserDispatcher from './UserDispatcher'

class UserStore extends ReduceStore {
  constructor() {
    super(UserDispatcher)
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case UserActionTypes.ADD_USER:
        const id = Counter.increment()
        return state.set(id, new User({
          id,
          firstName: action.firstName,
          lastName: action.lastName,
          address: action.address,
        }));

      default:
        return state;
    }
  }
}

export default new UserStore()
