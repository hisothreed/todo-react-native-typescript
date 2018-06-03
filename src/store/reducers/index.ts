import { combineReducers } from 'redux'
// import * as types from '../types'

import User from './User'
import Todos from './Todos'

const rootReducer = combineReducers({
  User,
  Todos
})

export default rootReducer
