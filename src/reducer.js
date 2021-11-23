import { VisibilityFilters, TransfersQuantities } from "./common";
import { SET_VISIBILITY_FILTER, SET_QUANTITY_OF_TRANSFERS} from "./actions";

const initialState = {
    VisibilityFilter: VisibilityFilters.SHOW_ALL,
    TransfersQuantities: TransfersQuantities.ALL,
    tickets: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {VisibilityFilters: action.filter});
        default:
            return state;
    }
}



export default reducer;