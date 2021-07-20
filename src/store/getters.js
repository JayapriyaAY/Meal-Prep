export const isAuthenticated = (state) => {
    return state.user !== null && state.user !== undefined;
}