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
        // update logic for require all fields
        // if (!action.text) return state;
        //
        // const id = Counter.increment()
        // return state.set(id, new Todo({
        //   id,
        //   text: action.text,
        //   complete: false,
        // }));
        return state;

      case UserActionTypes.DELETE_USER:
        return state.delete(action.id);

      case UserActionTypes.EDIT_USER:
        // add logic for edit user
        return state;

      default:
        return state;
    }
  }
}

export default new TodoStore()
