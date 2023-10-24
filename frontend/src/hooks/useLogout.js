import { useAuthContext } from "./useAuthContext"


export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
         //remove user from local storage
         localStorage.removeItem('user')
         //remove from auth context, dispatch logout action
         dispatch({type: 'LOGOUT'})
    }

    return {logout}
}

