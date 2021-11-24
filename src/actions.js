export const setVisibilityFilter = (filterValue) => ({
    type: 'SET_VISIBILITY_FILTER',
    payload: filterValue,
});

export const addTransferQuantity = (transferQuantityValue) => ({
    type: 'ADD_TRANSFER_QUANTITY',
    payload: transferQuantityValue,
});


export const removeTransferQuantities = (transferQuantityValue) => ({
    type: 'REMOVE_TRANSFER_QUANTITY',
    payload: transferQuantityValue,
});