import flightActionTypes from "../lib/redux/flights/flights.types";
import { updateCollections } from "../lib/redux/flights/flights.actions";
import { expect } from "chai";

describe('Flight action creators', () => {
    it('should create action to update collection', () => {
        const text = 'woo';
        const expectedAction = { 
            type: flightActionTypes.UPDATE_COLLECTIONS,
            payload: text
        }
        console.log(updateCollections(text),expectedAction);
        //expect(updateCollections(text)).to.eq(expectedAction);
    
    })
    
})
