import { SET_CATEGORIES,SET_PRIZES, SET_CATEGORY, SET_FAVOURITE,  SET_ITEMS,  SET_TICKET,  SET_USERS } from "./types";

export const set_prizes = (payload) => (
    {
        type: SET_PRIZES,
        payload
    }
)
export const set_items = (payload) => (
    {
        type: SET_ITEMS,
        payload
    }
)
export const set_ticket = (payload) => (
    {
        type: SET_TICKET,
        payload
    }
)
export const set_user = (payload) => (
    {
        type: SET_USERS,
        payload
    }
)


