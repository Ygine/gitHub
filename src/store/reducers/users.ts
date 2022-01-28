
import { UserState, UserAction }  from '../types'

enum UserActionTypes {
  SOME_ACTION = 'SOME_ACTION',
  SOME_ACTION_2 = 'SOME_ACTION_2',
  SOME_ACTION_3 = 'SOME_ACTION_3',
}

const initialState: UserState = {
  users: [],
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SOME_ACTION:
      return {...state, test: 'hello World'};
    case UserActionTypes.SOME_ACTION_2:
      return {...state, test: 'hello World 2'};
    default: return state
  }
};
