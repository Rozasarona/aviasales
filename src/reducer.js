import { VisibilityFilters } from "./common";
import * as actions from './actions';


const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    transfersQuantities: {
        SHOW_ALL: true,
        WITHOUT_TRANSFERS: true,
        ONE_TRANSFER: true,
        TWO_TRANSFERS: true,
        THREE_TRANSFERS: true,
    },
    searchId: null,
    loadingCompleted: false,
    tickets: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.payload,
            }

        case actions.ADD_TRANSFER_QUANTITY:
            const transfersQuantities = {
                ...state.transfersQuantities,
            }
            transfersQuantities[action.payload] = true;
            return {
                ...state,
                transfersQuantities: transfersQuantities,
            }

        case actions.REMOVE_TRANSFER_QUANTITY:
            const transfersQuantities1 = {
                ...state.transfersQuantities,
            }
            transfersQuantities1[action.payload] = false;
            return {
                ...state,
                transfersQuantities: transfersQuantities1,
            }

        case actions.SET_SEARCH_ID:
            return {
                ...state,
                searchId: action.payload
            };
        case actions.APPEND_TICKETS:
            return {
                ...state,
                tickets: [ ...state.tickets, ...action.payload ]
            }
        case actions.SET_LOADING_STATE:
            return {
                ...state,
                loadingCompleted: action.payload.loadingCompleted
            }

        default:
            return state;
    }
}



export default reducer;