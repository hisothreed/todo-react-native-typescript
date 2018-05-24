import updateObject from '../utility'
import ActionTypes from '../types'

interface User {
  name: string
  token: string
}

interface UserState {
  current_user?: User
}

const initialState: UserState = {
  current_user: null
}

const user = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case ActionTypes.CreateSession:
      return updateObject(state, action.payload)
    case ActionTypes.DestroySession:
      return updateObject(state, action.payload)
    default:
      return state
  }
}
export default user
