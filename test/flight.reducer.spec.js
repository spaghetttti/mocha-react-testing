import flightActionTypes from '../lib/redux/flights/flights.types';

import flightsReducer from '../lib/redux/flights/flights.reducer';
import { expect } from 'chai';
import {FLIGHTS_DATA} from '../lib/redux/flights/flights.reducer';

describe('Flight reducer', () => {
    it('should return the initial state', () => {
        expect(flightsReducer(undefined, {})).to.eq(FLIGHTS_DATA)
    })
})