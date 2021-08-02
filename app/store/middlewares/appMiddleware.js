import api from '../../api/api';
import path from '../../api/path';
// import { setError, setLoading } from '../actions/globalActions'
import { set_items,set_prizes,  set_featured, set_user,set_categories, set_ticket, set_tier,  } from '../actions/appAction'


export const _getItems = () => {

    return async (dispatch, getState) => {


        let res = await api(path.getitem, "GET",);
        if (res) {
            dispatch(set_items(res.result))
        }
    }
}
export const _getPrizes = () => {

    return async (dispatch, getState) => {


        let res = await api(path.getprizes, "GET",);
        if (res) {
            dispatch(set_prizes(res.result))
        }
    }
} 
export const _getTier = () => {

    return async (dispatch, getState) => {


        let res = await api(path.gettier, "GET",);
        if (res) {
            dispatch(set_tier(res.result))
        }
    }
} 
 
export const _deleteItems = () => {

    return async (dispatch, getState) => {


        let res = await api(path.deleteItem, "DELETE",);
        if (res) {
            // dispatch(set_items(res.result))
        }
    }
}
export const _getTicket = (token, uid) => {

    return async (dispatch, getState) => {

        let res = await api.getTicket(token, uid);
        if (res) {
            dispatch(set_ticket(res.result))
        }
    }
}

export const _getUsers = (token) => {

    return async (dispatch, getState) => {

        let res = await api.getUsers(token);
        if (res) {
            dispatch(set_user(res.result))
        }
    }
}
 
 
 


