import Types from '../types'

interface Todo {
  title: string
  completed: boolean
}

interface Dispatcher {
  type: Types
  payload: any
}

export function addTodo(todo: Todo): Dispatcher {
  return { type: Types.AddTodo, payload: { todo } }
}

export function toggleTodo(todo: Todo): Dispatcher {
  todo.completed = !todo.completed
  return { type: Types.ToggleTodo, payload: { todo } }
}
