import Types from '../types'

interface User {
  name: string
  token: string
}

interface Dispatcher {
  type: Types,
  payload: any
}

export function setUser(user: User): Dispatcher {
  return { type: Types.CreateSession, payload: { current_user: user, token: 'hhhhhh' } }
}

export function logout(): Dispatcher {
  return { type: Types.DestroySession, payload: { current_user: null, token: null } }
}