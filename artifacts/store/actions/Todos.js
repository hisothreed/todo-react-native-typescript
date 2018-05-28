import Types from '../types';
export function addTodo(todo) {
    return { type: Types.AddTodo, payload: { todo } };
}
export function toggleTodo(todo) {
    return { type: Types.ToggleTodo, payload: { todo } };
}
//# sourceMappingURL=Todos.js.map