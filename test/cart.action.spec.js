import CartActionTypes from "../lib/redux/cart/cart.types";

import * as actions from '../lib/redux/cart/cart.actions';
import { expect } from "chai";

describe('Cart action creators', () => {
    it('should create action to add item to cart', () => {
        const test = 'add item test';
        const expectedAction = { 
            type: CartActionTypes.ADD_ITEM,
            payload: test
        }
        console.log(actions.addItem(test),'should equal to',expectedAction);
    })

    it('should create action to remove item from the cart', () => {
        const test = 'remove item test';
        const expectedAction = { 
            type: CartActionTypes.REMOVE_ITEM,
            payload: test
        }
        console.log(actions.addItem(test),'should equal to',expectedAction);
    })
})
    