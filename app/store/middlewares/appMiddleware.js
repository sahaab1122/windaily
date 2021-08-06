import api from '../../api/api';
import path from '../../api/path';
// import { setError, setLoading } from '../actions/globalActions'
import { set_items, set_prizes, set_featured, set_user, set_categories, set_ticket, set_tier, set_winner, } from '../actions/appAction'
import Store from '../Store';


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
        return false

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
export const _getTickets = () => {

    return async (dispatch, getState) => {

        let res = await api(path.getticketbyid + Store.store.getState().authReducer.user._id, "GET",)
        console.log(res)
        if (res) {
            dispatch(set_ticket(res.result))

        }
        return false
    }
}

//getticketbyid


export const _getUsers = (token) => {

    return async (dispatch, getState) => {

        let res = await api.getUsers(token);
        if (res) {
            dispatch(set_user(res.result))
        }
    }
}

export const _getWinner = () => {

    return async (dispatch, getState) => {

        let res = await api(path.getwinner, "GET",)
        if (res) {
            dispatch(set_winner(res.result))
        }
    }
}



