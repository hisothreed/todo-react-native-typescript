import ActionTypes from '../types'
import { List } from 'immutable'

interface Todo {
  id: number
  title: string
  completed: boolean
}

interface TodosState {
  todos: List<Todo>
}

const initialState: TodosState = {
  todos: List([
    {
      id: 0,
      title: 'hello world',
      completed: false
    }
  ])
}

const addTodo = (todo: Todo, state: TodosState): TodosState => {
  const todos: List<Todo> = state.todos
  todo.id = todos.count() + 1
  const newTodos = todos.push(todo)
  return { ...state, todos: newTodos }
}

const toggleTodo = (todo: Todo, state: TodosState): TodosState => {
  const todos: List<Todo> = state.todos
  const index: number = todos.findIndex(t => t.id === todo.id)
  const newTodos = todos.update(index, (val: Todo) => {
    val.completed = !val.completed
    return val
  })
  console.log('====================================');
  console.log({ ...state, todos: newTodos })
  console.log('====================================');
  return { ...state, todos: newTodos }
}


const Todos = (state = initialState, action: any): TodosState => {
  switch (action.type) {
    case ActionTypes.AddTodo:
      return addTodo(action.payload.todo, state)
    case ActionTypes.ToggleTodo:    
      return toggleTodo(action.payload.todo, state)
    default:
      return state
  }
}


export default Todos
