import ActionTypes from '../types';
import { List } from 'immutable';
const initialState = {
    todos: List([
        {
            id: 0,
            title: 'hello world',
            completed: false
        }
    ])
};
const addTodo = (todo, state) => {
    const todos = state.todos;
    todo.id = todos.count() + 1;
    const newTodos = todos.push(todo);
    return Object.assign({}, state, { todos: newTodos });
};
const toggleTodo = (todo, state) => {
    const todos = state.todos;
    const index = todos.findIndex(t => t.id === todo.id);
    const newTodos = todos.update(index, (val) => {
        val.completed = !val.completed;
        return val;
    });
    console.log('====================================');
    console.log(Object.assign({}, state, { todos: newTodos }));
    console.log('====================================');
    return Object.assign({}, state, { todos: newTodos });
};
const Todos = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AddTodo:
            return addTodo(action.payload.todo, state);
        case ActionTypes.ToggleTodo:
            return toggleTodo(action.payload.todo, state);
        default:
            return state;
    }
};
export default Todos;
//# sourceMappingURL=Todos.js.map