import ActionTypes from '../types'

interface Todo {
  id: number,
  title: string
  completed: boolean
}

interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: [
    {
      id: 1,
      title: 'hello world',
      completed: false
    }
  ]
}

const user = (state = initialState, action: any): TodosState => {
  let todos = state.todos
  switch (action.type) {
    case ActionTypes.AddTodo:
      let newTodo = action.payload.todo
      newTodo.id = todos[todos.length - 1].id + 1
      todos.push(newTodo)

      return { ...state, todos: [...todos] }
    case ActionTypes.ToggleTodo:
      const index = state.todos.findIndex(t => t.id === action.payload.todo.id)
      todos[index].completed = action.payload.todo.completed
      return { ...state, todos: [...todos] }
    default:
      return state
  }
}
export default user
