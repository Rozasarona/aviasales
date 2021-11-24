import { VisibilityFilters, TransfersQuantities } from "./common";


const initialState = {
    VisibilityFilter: VisibilityFilters.SHOW_ALL,
    TransfersQuantities: {
        SHOW_ALL: true,
        WITHOUT_TRANSFERS: false,
        ONE_TRANSFER: false,
        TWO_TRANSFERS: false,
        THREE_TRANSFERS: false,
    },
    tickets: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            //return Object.assign({}, state, {VisibilityFilters: action.payload});

            return {
                ...state,
                VisibilityFilters: action.payload,
            }

        case 'ADD_TRANSFER_QUANTITY':
            const transfersQuantities = {
                ...state.TransfersQuantities,
            }
            transfersQuantities[action.payload] = true;
            return {
                ...state,
                TransfersQuantities: transfersQuantities,
            }

        case 'REMOVE_TRANSFER_QUANTITY':
            const transfersQuantities1 = {
                ...state.TransfersQuantities,
            }
            transfersQuantities1[action.payload] = false;
            return {
                ...state,
                TransfersQuantities: transfersQuantities1,
            }

        default:
            return state;
    }
}



export default reducer;