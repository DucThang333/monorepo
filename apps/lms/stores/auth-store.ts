// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

type UserState = {
    fullName: string,
    class: string,
    age: number,
    dateOfBirth: string,
    address: string,
}

export type AuthState = {
    isLogin: boolean,
    user: UserState | null,
}


export type AuthActions = {
    saveUser: (user: UserState) => void
    login: (user: UserState) => void
    logout: () => void
}

export type AuthStore = AuthState & AuthActions

export const defaultInitState: AuthState = {
    isLogin: false,
    user: null
}

export const createAuthStore = (
    initState: AuthState = defaultInitState,
) => {
    return createStore<AuthStore>()((set) => ({
        ...initState,
        saveUser: (_user) => set((state) =>
        ({
            ...state,
            user: _user
        })
        ),
        login: (_user) => set((state) => (
            {
                ...state,
                isLogin: true,
                user: _user
            }
        )),
        logout: () => set((state) => ({
            ...state,
            isLogin: false,
            user: null
        })),
    }))
}
