import { addItemToCart, removeItemFromCart } from "../lib/redux/cart/cart.utils";
import {expect} from 'chai';

describe("Cart reducer's complex functions", () => {
    it('adding an existing item to cart', () => {
        const mockCartItems = [
            {
                id: 0,
                name: 'Jeans',
                price: 10,
                quantity: 1
            },{
                id: 1,
                name: 'Hat',
                price: 4,
                quantity: 1
            },{
                id: 2,
                name: 'Shirt',
                price: 7,
                quantity: 2
            }
        ]
    
        const mockCartItemToAdd = {
            id: 1,
            name: 'Hat',
            price: 4,
            quantity: 1
        }

        addItemToCart(mockCartItems, mockCartItemToAdd).map(mockCartItem => {
            if( mockCartItem.id === mockCartItemToAdd.id)
                {expect(mockCartItem.quantity).to.eq(2)}
        })
    })

    it('adding a new item to cart', () => {
        const mockCartItems = [
            {
                id: 0,
                name: 'Jeans',
                price: 10,
                quantity: 1
            },{
                id: 1,
                name: 'Hat',
                price: 4,
                quantity: 1
            },{
                id: 2,
                name: 'Shirt',
                price: 7,
                quantity: 2
            }
        ]
    
        const mockCartItemToAdd = {
            id: 5,
            name: 'Shorts',
            price: 8,
            quantity: 1
        }

        addItemToCart(mockCartItems, mockCartItemToAdd).map(mockCartItem => {
            if( mockCartItem.id === mockCartItemToAdd.id)
                {expect(mockCartItem.quantity).to.eq(1)}
        })
    })
})
