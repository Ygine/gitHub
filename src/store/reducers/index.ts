import {combineReducers} from 'redux'

import { userReducer } from './users'

export const rootReducer = combineReducers( {
  users: userReducer
});


export type RootState = ReturnType<typeof rootReducer> // this hook for useSelector

