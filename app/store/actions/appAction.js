import { SET_TIER,SET_PRIZES, SET_CATEGORY, SET_FAVOURITE,  SET_ITEMS,  SET_TICKET,  SET_USERS, SET_TICKETS } from "./types";

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
        type: SET_TICKETS,
        payload
    }
)
export const set_user = (payload) => (
    {
        type: SET_USERS,
        payload
    }
)
export const set_tier = (payload) => (
    {
        type: SET_TIER,
        payload
    }
)

