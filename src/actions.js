import * as apiClient from './api-client/index';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_TRANSFER_QUANTITY = 'ADD_TRANSFER_QUANTITY';
export const REMOVE_TRANSFER_QUANTITY = 'REMOVE_TRANSFER_QUANTITY';
export const SET_SEARCH_ID = 'SET_SEARCH_ID';
export const APPEND_TICKETS = 'APPEND_TICKETS';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const ADD_TICKETS = 'ADD_TICKETS';

export const addTickets = () => ({
    type: ADD_TICKETS
});

export const setVisibilityFilter = (filterValue) => ({
    type: SET_VISIBILITY_FILTER,
    payload: filterValue
});

export const addTransferQuantity = (transferQuantityValue) => ({
    type: ADD_TRANSFER_QUANTITY,
    payload: transferQuantityValue
});


export const removeTransferQuantities = (transferQuantityValue) => ({
    type: REMOVE_TRANSFER_QUANTITY,
    payload: transferQuantityValue,
});

export const setSearchId = (searchId) => ({
    type: SET_SEARCH_ID,
    payload: searchId
});

export const appendTickets = tickets => ({
    type: APPEND_TICKETS,
    payload: tickets
});

export const setLoadingState = completed => ({
    type: SET_LOADING_STATE,
    payload: { loadingCompleted: completed }
});

const obtainSearchIdIfNeeded = () => async (dispatch, getState) => {
    let { searchId } = getState();
    if(!searchId) {
        searchId = await apiClient.getSearchId();
        dispatch(setSearchId(searchId));
    }
};

export const obtainTickets = () => async (dispatch, getState) => {
    await dispatch(obtainSearchIdIfNeeded());
    const { searchId } = getState();
    let chunk = null;
    do {
        try {
            chunk = await apiClient.getTicketsChunk(searchId);
            dispatch(appendTickets(chunk.tickets));
            dispatch(setLoadingState(chunk.stop));
        } catch {
            chunk = { stop: false }
        }
    } while (!chunk.stop);
};