import { combineReducers } from 'redux';
// import * as types from '../types'
import user from './User';
import todos from './Todos';
const rootReducer = combineReducers({
    user,
    todos
});
export default rootReducer;
//# sourceMappingURL=index.js.map