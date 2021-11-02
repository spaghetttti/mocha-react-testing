import flightActionTypes from "./flights.types";

export const updateCollections = collectionsMap => ({
    type: flightActionTypes.UPDATE_COLLECTIONS, 
    payload: collectionsMap
})