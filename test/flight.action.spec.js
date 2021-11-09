import flightActionTypes from "../lib/redux/flights/flights.types";
import { updateCollections } from "../lib/redux/flights/flights.actions";
import { expect } from "chai";

describe('Flight action creators', () => {
    it('should create action to update collection', () => {
        const test = 'update test';
        const expectedAction = { 
            type: flightActionTypes.UPDATE_COLLECTIONS,
            payload: test
        }
        console.log(updateCollections(test),expectedAction);
        //expect(updateCollections(text)).to.eq(expectedAction); to different but equal objects
    })
    
})
