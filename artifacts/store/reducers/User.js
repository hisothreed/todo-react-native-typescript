import updateObject from '../utility';
import ActionTypes from '../types';
const initialState = {
    current_user: null
};
const user = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CreateSession:
            return updateObject(state, action.payload);
        case ActionTypes.DestroySession:
            return updateObject(state, action.payload);
        default:
            return state;
    }
};
export default user;
//# sourceMappingURL=User.js.map