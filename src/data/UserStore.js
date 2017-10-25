import Immutable, { get, getIn, setIn } from 'immutable'
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

      case UserActionTypes.DELETE_USER:
        return state.delete(action.id);

      case UserActionTypes.EDIT_USER:
        for (let key in action.user) {
          state = state.setIn([action.id, key], action.user[key]);
        }
        return state;

      default:
        return state;
    }
  }
}

export default new UserStore()
