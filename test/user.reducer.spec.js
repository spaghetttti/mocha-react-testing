import { UserActionTypes } from "../lib/redux/user/user.types";
import userReducer from "../lib/redux/user/user.reducer";
import { expect } from "chai";
import {INITIAL_STATE} from '../lib/redux/user/user.reducer';

describe('User reducer', () => {
    let INITIAL_STATE_MOCK = {
        currentUser: null
    }

    it('should return initial state', () => {
        expect(userReducer(undefined, {})).to.eq(INITIAL_STATE);
    })

    it('should return actual user', () => {
        const actualUser = userReducer(INITIAL_STATE_MOCK, {
            type: UserActionTypes.SET_CURRENT_USER,
            payload: 'Test user'
        });
        console.log(actualUser);
    })
})