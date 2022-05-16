export interface AuthState {
    isAuth: boolean
}

export enum AuthActionTypes {
    SET = 'SET',
}

interface SetAuthAction {
    type: AuthActionTypes.SET
    payload: boolean
}

export type AuthAction = SetAuthAction
