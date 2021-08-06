import { SET_CATEGORIES, SET_ITEMS, SET_USERS, SET_FAVOURITE, SET_TICKET, SET_PRIZES, SET_TIER, SET_TICKETS, SET_WINNER } from '../actions/types'

const initialState = {
    prizes: [], items: [], tier:false,
    tickets: [], users: [], coupons: [],
    transactions: [], orders: [], winner:[]
     
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ITEMS: {
            return {
                ...state,
                items: action.payload,
            }
        }
        case "set_tier": {
            return {
                ...state,
                tier: action.payload,
            }
        }
        case SET_TICKETS: {
            return {
                ...state,
                tickets: action.payload,
            }
        }
        case SET_PRIZES: {
            return {
                ...state,
                prizes: action.payload,
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }
         
            case SET_WINNER: {
                return {
                    ...state,
                    winner: action.payload,
                }
            }
        // case SET_ORDERS: {
        //     return {
        //         ...state,
        //         orders: action.payload,
        //     }
        // }
        // case SET_TRANSACTIONS: {
        //     return {
        //         ...state,
        //         transactions: action.payload,
        //     }
        // }

        default:
            return state;

    }

}
export default appReducer