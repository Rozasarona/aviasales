import { VisibilityFilters } from "./common";


const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    transfersQuantities: {
        SHOW_ALL: true,
        WITHOUT_TRANSFERS: true,
        ONE_TRANSFER: true,
        TWO_TRANSFERS: true,
        THREE_TRANSFERS: true,
    },
    tickets: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {
                ...state,
                visibilityFilters: action.payload,
            }

        case 'ADD_TRANSFER_QUANTITY':
            const transfersQuantities = {
                ...state.transfersQuantities,
            }
            transfersQuantities[action.payload] = true;
            return {
                ...state,
                transfersQuantities: transfersQuantities,
            }

        case 'REMOVE_TRANSFER_QUANTITY':
            const transfersQuantities1 = {
                ...state.transfersQuantities,
            }
            transfersQuantities1[action.payload] = false;
            return {
                ...state,
                transfersQuantities: transfersQuantities1,
            }

        default:
            return state;
    }
}



export default reducer;