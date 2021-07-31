import { LOGIN, LOGOUT, UPDATE,   } from './types';


export const login = (  user) => (
    {
        type: LOGIN, 
        user,
    }
)

export const logout = () => (
    {
        type: LOGOUT
    }
)

export const updateuser = (info) => (
    {
        type: UPDATE,
        info: info
    }
)
 

export const set_logged = (payload) => (
    {
        type: SET_LOGGED,
        payload
    }
)

export const set_lang = (payload) => (
    {
        type: SET_LANGUAGE,
        payload
    }
)
// export const updateuser = (info) => (
//     {
//         type: UPDATE,
//         info: info
//     }
// )

export const deleteitem = (info) => (
    {
        type: DELETE,
        info: info
    }
)