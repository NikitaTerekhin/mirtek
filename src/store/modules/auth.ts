type State = {
    isAuth: boolean,
}

export default {
    state(): State {
        return {
            isAuth: false,
        }
    },
    getters: {
        isAuth(state: State) {
            return state.isAuth;
        }
    },
    mutations: {
        setIsAuth(state: State, value: boolean) {
            state.isAuth = value;
        },
    },
    actions: {
        logout({commit}: {commit: (action: string, value: boolean) => void}) {
            commit('setIsAuth', false);
        },
    },
}