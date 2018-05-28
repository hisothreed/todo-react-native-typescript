import { combineReducers } from 'redux';
// import * as types from '../types'
import user from './User';
import Todos from './Todos';
const rootReducer = combineReducers({
    user,
    Todos
});
export default rootReducer;
//# sourceMappingURL=index.js.map