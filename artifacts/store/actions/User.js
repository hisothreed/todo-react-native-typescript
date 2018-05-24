import Types from '../types';
export function setUser(user) {
    return { type: Types.CreateSession, payload: { current_user: user, token: 'hhhhhh' } };
}
export function logout() {
    return { type: Types.DestroySession, payload: { current_user: null, token: null } };
}
//# sourceMappingURL=User.js.map