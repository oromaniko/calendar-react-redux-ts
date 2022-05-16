import { AuthAction, AuthActionTypes, AuthState } from '../../types/auth'

const initialState: AuthState = {
    isAuth: false,
}

export default function authReducer(
    state = initialState,
    action: AuthAction
): AuthState {
    switch (action.type) {
        case AuthActionTypes.SET:
            return { ...state, isAuth: action.payload }
        default:
            return state
    }
}
